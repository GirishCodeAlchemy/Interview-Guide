# Machine learning Interview Questions

#### 1. What Are the Different Types of Machine Learning?
Three types of machine learning are: supervised learning, unsupervised learning, and reinforcement learning.

#### 2. What Is Overfitting, and How Can You Avoid It?
Overfitting is an error that the occurs in data modeling as a result of a particular function aligning too closely to a minimal set of the data points. Financial professionals are at risk of overfitting a model based on limited data and ending up with results that are flawed.To Prevent Overfitting are:

Cross-validation is a powerful preventative measure against overfitting.
Train with more data. It won’t work every time, but training with more data can help algorithms detect the signal better.
Remove features.
Early stopping.
Regularization.
Ensembling.

#### 3. What Is ‘training Set’ and ‘test Set’ in a Machine Learning Model? How Much Data Will You Allocate for Your Training, Validation, and Test Sets?
Training set—a subset to train a model.
Test set—a subset to test the trained model.
It is common to allocate 50 percent or more of the data to the training set, 25 percent to the test set, and the remainder to the validation set. Some training sets may contain only a few hundred observations; others may include millions.

#### 4. How Do You Handle Missing or Corrupted Data in a Dataset?
Method 1 is deleting rows or columns. We usually use this method when it comes to empty cells.
Method 2 is replacing the missing data with aggregated values.
Method 3 is creating an unknown category.
Method 4 is predicting missing values.

#### 5. How Can You Choose a Classifier Based on a Training Set Data Size?
If the training set is small, high bias / low variance models tend to perform better because they are less likely to overfit. If the training set is large, low bias / high variance models tend to perform better because they can reflect more complex relationships.

#### 6. Explain the Confusion Matrix with Respect to Machine Learning Algorithms.
A Confusion matrix is an N x N matrix used for evaluating the performance of a classification model, where N is the number of target classes. The matrix compares the actual target values with those the predicted by the machine learning model.The rows represent the predicted values of the target variable.

#### 7. What Is a False Positive and False Negative and How Are They Significant?
A false positive is an outcome where the model incorrectly predicts the positive class. And a false negative is an outcome where the model incorrectly predicts the negative class. In the following sections, we’ll look at how to evaluate the classification models using metrics derived from these four outcomes.

#### 8. What Are the Three Stages of Building a Model in Machine Learning?
The three stages to build the hypotheses in machine learning are model building, model testing and applying model.

#### 9. What Is Deep Learning?
Deep learning is a type of the machine learning and artificial intelligence (AI) that imitates the way humans gain certain types of knowledge. While traditional machine learning algorithms are linear, deep learning algorithms are stacked in a hierarchy of increasing the complexity and abstraction.

#### 10. What Are the Differences Between Machine Learning and Deep Learning?
Machine Learning refers to an AI system that can self-learn based on the algorithm. Systems that get smarter and smarter over time without human intervention is ML. Deep Learning (DL) is a machine learning (ML) applied to large data sets. Most AI work involves ML because intelligent behaviour requires considerable knowledge.

#### 11. What Are the Applications of Supervised Machine Learning in Modern Businesses?
Supervised Learning is the process of making an algorithm to learn to map an input to a particular output. This is achieved using the labelled datasets that you have collected. If the mapping is correct, the algorithm has successfully learned.

#### 12. What Is Semi-supervised Machine Learning?
Semi-supervised learning allows for the algorithm to learn from a small amount of labeled text documents while still classifying a large amount of the unlabeled text documents in the training data.

#### 13. What Are Unsupervised Machine Learning Techniques?
Unsupervised learning refers to the use of artificial intelligence algorithms to identify patterns in data sets containing data points that are neither classified nor labeled. Unsupervised learning allows the system to identify the patterns within data sets on its own.

#### 14. What Is the Difference Between Supervised and Unsupervised Machine Learning?
Supervised learning, you train the machine using data which is well “labeled.” Unsupervised learning is a machine learning technique, where you do not need to supervise the model. For example, Baby can identify the other dogs based on past supervised learning.

#### 15. Compare K-means and KNN Algorithms.
KNN represents a supervised classification algorithm that will give new data points accordingly to the k number or the closest data points, while k-means clustering is an unsupervised clustering algorithm that the gathers and groups data into k number of clusters.