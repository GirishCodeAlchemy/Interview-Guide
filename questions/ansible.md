# Ansible Scenario-Based Interview Questions

### 1️⃣ You need to install Nginx on 50 servers. How would you do this using Ansible?

#### ✅ Solution:

```yaml
- name: Install Nginx on multiple servers
  hosts: web_servers
  become: yes
  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
      when: ansible_os_family == "Debian"
```

#### 💡 Follow-up Questions:

- How can you ensure idempotency? (Using `state: present`)

- How do you handle different OS types? (Use `when` conditions for RedHat-based systems)

---

### 2️⃣ How can you roll back changes in Ansible if something goes wrong?

#### ✅ Solution:

Ansible doesn’t have built-in rollback, but you can use:

1. **Handlers**: To revert actions if a task fails.

2. Check Mode (`--check`) to test before applying changes.

3. Ansible Playbook Versioning and backups before modifying critical files.



Example using a handler for rollback:

```yaml
- name: Deploy App
  hosts: app_servers
  become: yes
  tasks:
    - name: Deploy application
      command: ./deploy.sh
      notify: Rollback app

  handlers:
    - name: Rollback app
      command: ./rollback.sh
      when: ansible_failed_task is defined
```

---

### 3️⃣ How do you pass variables securely in Ansible?

#### ✅ Solution:

- Use Ansible Vault to encrypt sensitive data like passwords, API keys, etc.

```sh
ansible-vault encrypt secrets.yml
ansible-playbook deploy.yml --ask-vault-pass
```

- Use environment variables (`lookup('env', 'VAR_NAME')`).

- Store secrets in external vaults like HashiCorp Vault or AWS Secrets Manager.


---

### 4️⃣ You need to update only 10 servers at a time in a group of 100. How do you do it?

#### ✅ Solution:

Use `serial` to control the batch size:

```yaml
- name: Update servers in batches
  hosts: all_servers
  serial: 10
  tasks:
    - name: Update system packages
      apt:
        update_cache: yes
        upgrade: yes
```

This ensures updates happen in batches of 10 servers at a time.


---

### 5️⃣ How do you handle an Ansible playbook that fails on a specific server but should continue execution?

#### ✅ Solution:

- Use `ignore_errors: yes` to continue execution even if a task fails.

```yaml
- name: Continue even if a task fails
  hosts: all_servers
  tasks:
    - name: Restart service
      service:
        name: nginx
        state: restarted
      ignore_errors: yes

```

- Use `failed_when` to define custom failure conditions.


---

### 6️⃣ How do you check if a remote server has a specific port open using Ansible?

#### ✅ Solution:

Use the `wait_for` module:

```yaml
- name: Check if port 80 is open
  hosts: web_servers
  tasks:
    - name: Wait for port 80 to be open
      wait_for:
        port: 80
        state: started
        timeout: 10
```

This ensures the playbook waits until the port is available.

---


### 7️⃣ How can you optimize an Ansible playbook for faster execution?

#### ✅ Solution:

1. Use `gather_facts: no` if facts are not required

```yaml
- hosts: all
  gather_facts: no

```

2. Use `async` & `poll` to run tasks in parallel

```yaml
- name: Run task asynchronously
  command: sleep 30
  async: 60
  poll: 0

```

3. Use `delegate_to` to avoid redundant executions

4. Limit SSH connections with `forks` (in ansible.cfg)

```ini
[defaults]
forks = 20

```

---

### 8️⃣ How do you execute a specific task only if a file exists on the target server?

#### ✅ Solution:

Use the `stat` module to check for the file:

```yaml
- name: Execute task only if file exists
  hosts: all
  tasks:
    - name: Check if file exists
      stat:
        path: /etc/config.yml
      register: config_file

    - name: Execute only if file exists
      command: cat /etc/config.yml
      when: config_file.stat.exists
```

---

### 9️⃣ How do you troubleshoot Ansible playbook failures?

#### ✅ Solution:

1. Run in verbose mode

```bash
ansible-playbook site.yml -vvv
```

2. Use `debug` to print variables

```yaml
- debug:
    var: ansible_facts['ansible_distribution']
```

3. Check logs & SSH issues (`-m ping`)

```bash
ansible all -m ping
```

4. Use `--step` to execute tasks one by one

---

### 🔟 How do you use Ansible to configure a new user with sudo privileges?

#### ✅ Solution:

```yaml
- name: Create a sudo user
  hosts: all
  become: yes
  tasks:
    - name: Add user 'devops'
      user:
        name: devops
        state: present
        groups: sudo
        append: yes
        password: "{{ 'mypassword' | password_hash('sha512') }}"

```
This creates a user `devops` and adds it to the `sudo` group.

---

### Bonus: Rapid-Fire Scenario Questions

❓ How do you ensure that only one instance of a playbook runs at a time?

✅ Use run_once: yes



❓ How do you skip a task for a specific host?

✅ Use `when: inventory_hostname != 'server1'`



❓ How do you restart a service only when a file changes?

✅ Use `notify` & `handlers`


---