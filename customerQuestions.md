#Question 1: 
Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

#Answer 1:
Happy to answer that for you George,

A record is simply an item that is stored in our online database, called an Index. Think of it as a physical file in a file cabinet.

Since our database is called an Index, it can be thought of as our file cabinet. Indexing a record is just like putting in a file into the cabinet: we are simply inserting items into a storage.

########################################################################################################################################

#Question 2:
Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

#Answer 2:
Matt,

Sorry to hear that, we try to give each and every customer a high level of satisfaction. Fortunately for you, I think I have some answers.

If the problem is that Clearing and Deleting indexes are several clicks away from eachother: Clearing/Deleting indexes can be easily accessed through the Manage Current Index, where they are located right next to each other.

If you meant that Clearing and Deleting indexes are now several clicks deeper into the website than previously: We can iterate through your indexes and delete/clear very easily using the API with 3 simple commands
client.listIndexes(callback) <-- this will return a list of all your indexes, whereupon you may either
client.deleteIndex(indexName, callback) or
index.clearIndex(callback)

an example script might look something like this:
const deleteLargeIndexes = () => {
  client.listIndexes((err, data) => {
     let allIndexes = data;
     allIndexes.forEach(index => {
       if (index.dataSize > 1000000) client.deleteIndex(index.name, data)
       })
  })
}

########################################################################################################################################

#Question 3:
Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

#Answer 3:
Leo,

I have great news for you - Algolia is an extremely easy to implement API, and I will be here at every step of the way.
What we'll be doing over the next few days is a simple 3 step process:
1) Index all your searchable data into an Algolia Index, either with the API or by drag and dropping a csv/json file.
2) Decide on how you want to curate your data (filters, rankings, typo acceptance)
3) Simply install algoliasearch (or copy/paste a CDN) and utilize any method on our API!

With Algolia, the heavy lifting of efficiently searching through data with any amount of curation parameters is taken care of for you.