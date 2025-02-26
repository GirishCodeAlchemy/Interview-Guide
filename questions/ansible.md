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

---

### 1️⃣1️⃣ How do you execute a task on a specific host only once within a playbook?

####  ✅ Solution:

 Use `run_once: yes` to ensure a task runs only once, regardless of how many hosts are in the inventory.
 ```yaml
 - name: Execute task on one host only
   hosts: all
   tasks:
     - name: Run task once
       command: echo "This will run only once"
       run_once: yes
 ```

---

### 1️⃣2️⃣ How do you perform a rolling restart of a service across a set of hosts, one at a time?
#### ✅ Solution:
 
 Use `serial` to control the number of hosts that can be processed at the same time.
 ```yaml
 - name: Rolling restart of nginx service
   hosts: web_servers
   serial: 1
   become: yes
   tasks:
     - name: Restart nginx service
       service:
         name: nginx
         state: restarted
 ```
---

### 1️⃣3️⃣ How do you install a package only if it is not already installed?

#### ✅ Solution:
 
 Ansible ensures idempotency. By default, it only installs packages if they are not already present.
 ```yaml
 - name: Install apache2 package
   hosts: web_servers
   become: yes
   tasks:
     - name: Install apache2
       apt:
         name: apache2
         state: present
 ```
---

### 1️⃣4️⃣ How would you ensure that a specific file is always present with the correct content on a target server?

#### ✅ Solution:
 Use the `copy` or `template` module to ensure that a file is always present with the desired content.
 ```yaml
 - name: Ensure configuration file is present
   hosts: all
   become: yes
   tasks:
     - name: Copy configuration file
       copy:
         src: /local/path/to/config.conf
         dest: /etc/config.conf
         mode: '0644'
 ```
---

### 1️⃣5️⃣ How do you handle parallel execution in Ansible, and what can you do to limit the number of parallel tasks?

#### ✅ Solution:
 Use `forks` in the `ansible.cfg` configuration file to control parallelism, or `serial` in the playbook to control the number of hosts processed at once.
 In `ansible.cfg`:
 ```ini
 [defaults]
 forks = 10
 ```
 Or in the playbook using `serial`:
 ```yaml
 - name: Run tasks in batches
   hosts: all
   serial: 5
   tasks:
     - name: Install nginx
       apt:
         name: nginx
         state: present
 ```

---

### 1️⃣6️⃣ You have multiple users in different groups. How do you add a user to multiple groups in Ansible?
#### ✅ Solution:
 Use the `user` module to add the user to multiple groups.
 ```yaml
 - name: Add user to multiple groups
   hosts: all
   become: yes
   tasks:
     - name: Add user
       user:
         name: devops
         groups: "sudo,docker"
         append: yes
 ```

 ---

 17️⃣ How can you execute a shell script on remote servers using Ansible?
 ✅ Solution:
 Use the `script` module to copy and execute a local script on remote hosts.
 ```yaml
 - name: Run shell script on remote server
   hosts: all
   tasks:
     - name: Execute script
       script: /local/path/to/script.sh
 ```

 ---

 18️⃣ How can you run a command only if another command succeeds in Ansible?
 ✅ Solution:
 Use `register` and `when` to run commands conditionally based on previous command results.
 ```yaml
 - name: Run command only if the previous one succeeds
   hosts: all
   tasks:
     - name: First command
       command: echo "First command"
       register: result1

     - name: Second command
       command: echo "Second command"
       when: result1.rc == 0
 ```

 ---

 19️⃣ How do you ensure a task is always executed at the end of the playbook?
 ✅ Solution:
 Use **handlers** to ensure certain tasks (like restarts) run at the end, even if other tasks trigger them.
 ```yaml
 - name: Ensure a task runs at the end
   hosts: all
   tasks:
     - name: Install nginx
       apt:
         name: nginx
         state: present
       notify: Restart nginx

   handlers:
     - name: Restart nginx
       service:
         name: nginx
         state: restarted
 ```
 
 ---

 20️⃣ How would you handle conditional logic based on host attributes (e.g., operating system type)?
 ✅ Solution:
 Use `when` to conditionally execute tasks based on system facts like OS type.
 ```yaml
 - name: Conditional task based on OS type
   hosts: all
   tasks:
     - name: Install nginx on Debian-based systems
       apt:
         name: nginx
         state: present
       when: ansible_os_family == "Debian"

     - name: Install nginx on RedHat-based systems
       yum:
         name: nginx
         state: present
       when: ansible_os_family == "RedHat"
 ```

 ---
 21️⃣ How do you manage Ansible playbook execution on different environments (dev, staging, prod)?
 ✅ Solution:
 You can use **inventory files** and **group variables** to manage different environments.
 ```ini
 # inventory/production
 [web_servers]
 prod-web1
 prod-web2

 # inventory/development
 [web_servers]
 dev-web1
 dev-web2
 ```
 Define environment-specific variables in group files:
 ```yaml
 # group_vars/production/web_servers.yml
 nginx_port: 80
 ```

 ---
 
 22️⃣ How do you ensure a task is only run if a file has changed on the target system?
 ✅ Solution:
 Use `notify` and **handlers** to only restart services if a file has changed.
 ```yaml
 - name: Ensure file is copied only if changed
   hosts: all
   tasks:
     - name: Copy configuration file
       copy:
         src: /local/path/to/config.conf
         dest: /etc/config.conf
         mode: '0644'
       notify: Restart nginx

   handlers:
     - name: Restart nginx
       service:
         name: nginx
         state: restarted
 ```
---

### Bonus: Rapid-Fire Scenario Questions

❓ How do you ensure that only one instance of a playbook runs at a time?

✅ Use run_once: yes



❓ How do you skip a task for a specific host?

✅ Use `when: inventory_hostname != 'server1'`



❓ How do you restart a service only when a file changes?

✅ Use `notify` & `handlers`


---