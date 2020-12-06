# LUCENE

http://web.cs.ucla.edu/classes/winter15/cs144/projects/lucene/index.html

https://www.theserverside.com/news/1365139/I-Love-Lucene

http://lucene.apache.org/core/4_0_0/demo/overview-summary.html

You pump your data into the Index, then do searches on the Index to get results out.

Document objects are stored in the Index, and it is your job to "convert" your data into Document objects and store them to the Index. That is, you read in each data file (or Web document, database tuple or whatever), instantiate a Document for it, break down the data into chunks and store the chunks in the Document as Field objects (a name/value pair).

When you're done building a Document, you write it to the Index using the IndexWriter.

## Steps
1. Install Lucene.
3. Create an analyzer.
4. Create fields.
5. Create and write documents to an index.
6. Obtain an IndexSearcher.
7. Create queries with QueryParser.


Lucene only accepts plain text.

Whatever your data type might be -- be it XML, HTML, or PDF, you need to parse these documents into text before tossing them over to Lucene.

## org.apache.lucene.index

- Provides IndexWriter, which creates and adds documents to indices.
- Provides IndexReader, which accesses the data in the index.

## org.apache.lucene.document

- Provides a simple Document class.
  A Document is simply a set of named Fields, whose values may be strings or instances of Reader.


## org.apache.lucene.search

- Provides data structures to represent queries:
  - TermQuery for individual words
  - PhraseQuery for phrases
  - BooleanQuery for boolean combinations of queries
- Provides IndexSearcher which turns queries into TopDocs.
- QueryParsers are provided for producing query structures from strings or xml.
