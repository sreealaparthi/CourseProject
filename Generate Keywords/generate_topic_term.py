'''
This file will use the python NLP library NLTK to obtain a list of the most commonly used words in Week 3 of the CS410 lecture videos.
The input is the scraped Coursera transcription text from the file ./Scraped_Text/Week3_Coursera_Text.txt
The list of the twenty-five most common words (located in ./Text_Output/CommonWordsWeek3_All.txt) did not contain all of the key terms that would have been 
generated by a human user who had an understanding of the course material. Some key terms were not explicitly mentioned frequently enough to be returned
in a list of common words. 
Therefore, a list of the most important keyword terms from Week 3 of the lecture material was placed into the output file ./Text_Output/TopicList.txt
'''

import nltk
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

# Import NLTK's punctuation list
# '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
import string

# Import NLTK's stopwords list
nltk.download('stopwords')
from nltk.corpus import stopwords

# Open the file containing the scraped text from Week 3 of Coursera. This is the transcription text from the CS410 lecture videos.
# Replace all newline characters with a space.
# All text will be converted to lower case.
courseText = open('../Scraped_Text/Week3_Coursera_Text.txt').read()
courseText = courseText.replace('\n', ' ')
lcCourseText = courseText.lower()

# Tokenize the raw text
tokens = nltk.word_tokenize(lcCourseText)

# Part of Speech tagging
tagged = nltk.pos_tag(tokens)

# Only consider singular ('NN') and plural ('NNS') nouns when evaluating the most commonly occuring words.
only_nn = [x for (x,y) in tagged if y in ('NN','NNS')]
only_nn_string = ' '.join(only_nn)

# Remove stop words and punctuation.
# Add only English language stopwords and punctuation list together into nltk_stopwords_list.
nltk_stopwords_list = stopwords.words('english')
nltk_stopwords_list += list(string.punctuation)

# Tokenize, remove stopwords and punctuation
cleaned_and_tokenized_list = [w for w in nltk.word_tokenize(only_nn_string) if w not in nltk_stopwords_list]

# Use FreqDist() to obtain a Frequency Distribution of the Cleaned list
freq = nltk.FreqDist(cleaned_and_tokenized_list)

# Use most_common() get the top 25 most common words
mostCommon = freq.most_common(25)

wordList = []
f = open('../Text_Output/FreqDistWeek3_All.txt', "w")
for a,b in mostCommon:
    wrd = '\n Common Word:  ', a
#    print(wrd)
    f.writelines(wrd)
    wordList.append(a)
    cnt = '\n Count of word: ', str(b)
#    print(cnt)
    f.writelines(cnt)

print(wordList)
f1 = open('../Text_Output/CommonWordsWeek3_All.txt', "w")
f1.write(' '.join(wordList))

topicList = ['precision','recall','average precision', 'f-measure', 'map', 'gmap', 'dcg', 'ndcg']
f2 = open('../CourseProject/Text_Output/TopicList.txt', "w")
for element in topicList:
    f2.write(element + "\n")
