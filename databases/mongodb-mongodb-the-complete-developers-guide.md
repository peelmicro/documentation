# MongoDB - The Complete Developer's Guide
> Github Repositories
- [mongodb-the-complete-developers-guide](https://github.com/peelmicro/mongodb-the-complete-developers-guide).

The [MongoDB - The Complete Developer's Guide](https://www.udemy.com/mongodb-the-complete-developers-guide/) Udemy course teaches Master MongoDB Development for Web & Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB!

> Table of contents
[[toc]]

## What I've learned
- Use MongoDB to its full potential in future projects
- Write efficient and well-performing queries to fetch data in the format you need it
- Use all features MongoDB offers you to work with data efficiently

## Introduction
1. How it works
- It is a `NoSQL` solution
- We can have different `databases`
- Each `database` has `collections`
- Each `collection` has `schemaless` `documents`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction.png)

- The `documents` have a `Json Data Format`. In fact, it is a `BSON` format.

- They can have `embedded` data

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction2.png)

- Each element can have a different structure

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction3.png)

- There is no relations or there are few of them

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction4.png)

2. MongoDb Ecosystem

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction5.png)

3. Install MondoDB

- browse to [MongoDB Download Center](https://www.mongodb.com/download-center)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction6.png)

- Click on `Get MongoDB`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction7.png)

- Click on `Server`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction8.png)

- Click on `Download`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction9.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction10.png)

- Click on `Next`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction11.png)

- Click on `Next`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction12.png)

- Click on `Complete`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction13.png)

- Click on `Next`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction14.png)

- Click on `Next`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction15.png)

- Click on `Install`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction16.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction17.png)

- Click on `Finish`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction18.png)

- Update `$PATH`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction18b.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction18c.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction18d.png)
- Check if it works by typing `mongo` at the `command propmt`
```bash
Microsoft Windows [Version 10.0.17134.285]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\WINDOWS\system32>mongo
MongoDB shell version v4.0.5
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("c9289df3-43a2-45a0-b5c5-4e28a9d1371a") }
MongoDB server version: 4.0.5
Server has startup warnings:
2018-12-21T18:38:38.705+0000 I CONTROL  [initandlisten]
2018-12-21T18:38:38.705+0000 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-12-21T18:38:38.705+0000 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-12-21T18:38:38.705+0000 I CONTROL  [initandlisten]
---
Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---

>
```

- In order to stop `MongoDB` we can run `net stop MongoDB` because it is running as a service
```bash
C:\WINDOWS\system32>net stop MongoDB
The MongoDB Server service is stopping.
The MongoDB Server service was stopped successfully.
```

- In order to start `MongoDB`we can run `mongod`
```bash
C:\WINDOWS\system32>mongod
2018-12-21T10:59:52.717-0800 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2018-12-21T10:59:52.722-0800 I CONTROL  [initandlisten] MongoDB starting : pid=19744 port=27017 dbpath=C:\data\db\ 64-bit host=RIMDUB-0232
2018-12-21T10:59:52.722-0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
2018-12-21T10:59:52.723-0800 I CONTROL  [initandlisten] db version v4.0.5
2018-12-21T10:59:52.723-0800 I CONTROL  [initandlisten] git version: 3739429dd92b92d1b0ab120911a23d50bf03c412
2018-12-21T10:59:52.724-0800 I CONTROL  [initandlisten] allocator: tcmalloc
2018-12-21T10:59:52.724-0800 I CONTROL  [initandlisten] modules: none
2018-12-21T10:59:52.724-0800 I CONTROL  [initandlisten] build environment:
2018-12-21T10:59:52.725-0800 I CONTROL  [initandlisten]     distmod: 2008plus-ssl
2018-12-21T10:59:52.725-0800 I CONTROL  [initandlisten]     distarch: x86_64
2018-12-21T10:59:52.726-0800 I CONTROL  [initandlisten]     target_arch: x86_64
2018-12-21T10:59:52.726-0800 I CONTROL  [initandlisten] options: {}
2018-12-21T10:59:52.732-0800 I STORAGE  [initandlisten] Detected data files in C:\data\db\ created by the 'wiredTiger' storage engine, so setting the active storage engine to 'wiredTiger'.
2018-12-21T10:59:52.734-0800 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=7506M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
2018-12-21T10:59:52.990-0800 I STORAGE  [initandlisten] WiredTiger message [1545418792:990055][19744:140724605041744], txn-recover: Main recovery loop: starting at 1/22912 to 2/256
2018-12-21T10:59:53.167-0800 I STORAGE  [initandlisten] WiredTiger message [1545418793:167055][19744:140724605041744], txn-recover: Recovering log 1 through 2
2018-12-21T10:59:53.270-0800 I STORAGE  [initandlisten] WiredTiger message [1545418793:270053][19744:140724605041744], txn-recover: Recovering log 2 through 2
2018-12-21T10:59:53.352-0800 I STORAGE  [initandlisten] WiredTiger message [1545418793:352063][19744:140724605041744], txn-recover: Set global recovery timestamp: 0
2018-12-21T10:59:53.371-0800 I RECOVERY [initandlisten] WiredTiger recoveryTimestamp. Ts: Timestamp(0, 0)
2018-12-21T10:59:53.399-0800 I CONTROL  [initandlisten]
2018-12-21T10:59:53.399-0800 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-12-21T10:59:53.400-0800 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-12-21T10:59:53.401-0800 I CONTROL  [initandlisten]
2018-12-21T10:59:53.401-0800 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2018-12-21T10:59:53.401-0800 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server.
2018-12-21T10:59:53.401-0800 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP
2018-12-21T10:59:53.402-0800 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2018-12-21T10:59:53.402-0800 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2018-12-21T10:59:53.403-0800 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2018-12-21T10:59:53.403-0800 I CONTROL  [initandlisten]
2018-12-21T18:59:54.739+0000 W FTDC     [initandlisten] Failed to initialize Performance Counters for FTDC: WindowsPdhError: PdhExpandCounterPathW failed with 'The specified object was not found on the computer.' for counter '\Memory\Available Bytes'
2018-12-21T18:59:54.740+0000 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory 'C:/data/db/diagnostic.data'
2018-12-21T18:59:54.744+0000 I NETWORK  [initandlisten] waiting for connections on port 27017
```

- To start MongoDB in the default server we have to add the `--dbpath "C:\Program Files\MongoDB\Server\4.0\data"` parameter
```bash
C:\WINDOWS\system32>mongod --dbpath "C:\Program Files\MongoDB\Server\4.0\data"
2018-12-21T11:03:44.233-0800 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2018-12-21T11:03:44.240-0800 I CONTROL  [initandlisten] MongoDB starting : pid=18604 port=27017 dbpath=C:\Program Files\MongoDB\Server\4.0\data 64-bit host=RIMDUB-0232
2018-12-21T11:03:44.240-0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
2018-12-21T11:03:44.243-0800 I CONTROL  [initandlisten] db version v4.0.5
2018-12-21T11:03:44.243-0800 I CONTROL  [initandlisten] git version: 3739429dd92b92d1b0ab120911a23d50bf03c412
2018-12-21T11:03:44.244-0800 I CONTROL  [initandlisten] allocator: tcmalloc
2018-12-21T11:03:44.247-0800 I CONTROL  [initandlisten] modules: none
2018-12-21T11:03:44.254-0800 I CONTROL  [initandlisten] build environment:
2018-12-21T11:03:44.256-0800 I CONTROL  [initandlisten]     distmod: 2008plus-ssl
2018-12-21T11:03:44.258-0800 I CONTROL  [initandlisten]     distarch: x86_64
2018-12-21T11:03:44.258-0800 I CONTROL  [initandlisten]     target_arch: x86_64
2018-12-21T11:03:44.268-0800 I CONTROL  [initandlisten] options: { storage: { dbPath: "C:\Program Files\MongoDB\Server\4.0\data" } }
2018-12-21T11:03:44.279-0800 I STORAGE  [initandlisten] Detected data files in C:\Program Files\MongoDB\Server\4.0\data created by the 'wiredTiger' storage engine, so setting the active storage engine to 'wiredTiger'.
2018-12-21T11:03:44.286-0800 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=7506M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
2018-12-21T11:03:44.588-0800 I STORAGE  [initandlisten] WiredTiger message [1545419024:587443][18604:140724605041744], txn-recover: Main recovery loop: starting at 32/43520 to 33/256
2018-12-21T11:03:44.804-0800 I STORAGE  [initandlisten] WiredTiger message [1545419024:804447][18604:140724605041744], txn-recover: Recovering log 32 through 33
2018-12-21T11:03:44.910-0800 I STORAGE  [initandlisten] WiredTiger message [1545419024:909443][18604:140724605041744], txn-recover: Recovering log 33 through 33
2018-12-21T11:03:45.001-0800 I STORAGE  [initandlisten] WiredTiger message [1545419025:455][18604:140724605041744], txn-recover: Set global recovery timestamp: 0
2018-12-21T11:03:45.024-0800 I RECOVERY [initandlisten] WiredTiger recoveryTimestamp. Ts: Timestamp(0, 0)
2018-12-21T11:03:45.073-0800 I CONTROL  [initandlisten]
2018-12-21T11:03:45.074-0800 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-12-21T11:03:45.075-0800 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-12-21T11:03:45.083-0800 I CONTROL  [initandlisten]
2018-12-21T11:03:45.083-0800 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2018-12-21T11:03:45.085-0800 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server.
2018-12-21T11:03:45.097-0800 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP
2018-12-21T11:03:45.099-0800 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2018-12-21T11:03:45.107-0800 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2018-12-21T11:03:45.109-0800 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2018-12-21T11:03:45.118-0800 I CONTROL  [initandlisten]
2018-12-21T19:03:47.252+0000 W FTDC     [initandlisten] Failed to initialize Performance Counters for FTDC: WindowsPdhError: PdhExpandCounterPathW failed with 'The specified object was not found on the computer.' for counter '\Memory\Available Bytes'
2018-12-21T19:03:47.252+0000 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory 'C:/Program Files/MongoDB/Server/4.0/data/diagnostic.data'
2018-12-21T19:03:47.265+0000 I NETWORK  [initandlisten] waiting for connections on port 27017
```
4. Query MongoDB
- Check the current databases
```bash
> show dbs
TasksAppMongo  0.000GB
admin          0.000GB
blog           0.000GB
config         0.000GB
local          0.000GB
```

- We can use a `database` even if it doesn't exist yet
```bash
> use shop
switched to db shop
```

- We can create a new `collection`
```bash
> db.products.insertOne({name: "Book", price: 12.99})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c1d3b5499e4cbc46ce07f10")
}
```

- We can query the data just created
```bash
> db.products.find()
{ "_id" : ObjectId("5c1d3b5499e4cbc46ce07f10"), "name" : "Book", "price" : 12.99 }
```
```bash
> db.products.find().pretty()
{
        "_id" : ObjectId("5c1d3b5499e4cbc46ce07f10"),
        "name" : "Book",
        "price" : 12.99
}
```
```bash
> db.products.insertOne({name: "Notebook", price: 17.99, description: "Large Notebook with 500 pages"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c1d3ca099e4cbc46ce07f11")
}
> db.products.find().pretty()
{
        "_id" : ObjectId("5c1d3b5499e4cbc46ce07f10"),
        "name" : "Book",
        "price" : 12.99
}
{
        "_id" : ObjectId("5c1d3ca099e4cbc46ce07f11"),
        "name" : "Notebook",
        "price" : 17.99,
        "description" : "Large Notebook with 500 pages"
}
```
```bash
> db.products.insertOne({name: "Another Computer", price: 1299.49, description: "A high quality computer", details: {cpu: "Intel i7 8770", memory: 32}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c1d3dcd99e4cbc46ce07f13")
}
```
```bash
> db.products.find().pretty()
{
        "_id" : ObjectId("5c1d3b5499e4cbc46ce07f10"),
        "name" : "Book",
        "price" : 12.99
}
{
        "_id" : ObjectId("5c1d3ca099e4cbc46ce07f11"),
        "name" : "Notebook",
        "price" : 17.99,
        "description" : "Large Notebook with 500 pages"
}
{
        "_id" : ObjectId("5c1d3d3c99e4cbc46ce07f12"),
        "name" : "Computer",
        "price" : 1299.49,
        "description" : "A high quality computer"
}
{
        "_id" : ObjectId("5c1d3dcd99e4cbc46ce07f13"),
        "name" : "Another Computer",
        "price" : 1299.49,
        "description" : "A high quality computer",
        "details" : {
                "cpu" : "Intel i7 8770",
                "memory" : 32
        }
}
```

5. Working with MongoDB

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction20.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Introduction21.png)

## Working with the Database (CRUD Operations)
### Databases, Collections & Documents

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Database.png)

1. `show dbs` shows all the available databases
```bash
> show dbs
TasksAppMongo  0.000GB
admin          0.000GB
blog           0.000GB
config         0.000GB
local          0.000GB
shop           0.000GB
```
2. Switch to a database using the `use` comand.
- if the database doesn't exist it is created `on the fly` the first time we add any data on it
```bash
> use flights
switched to db flights
> show dbs
TasksAppMongo  0.000GB
admin          0.000GB
blog           0.000GB
config         0.000GB
local          0.000GB
shop           0.000GB
```
3. Insert a new `document` with the `db.collectionName.insertOne({json data})` function
```bash
> db.flightData.insertOne({
...     "departureAirport": "MUC",
...     "arrivalAirport": "SFO",
...     "aircraft": "Airbus A380",
...     "distance": 12000,
...     "intercontinental": true
...   })
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c1ddb9799e4cbc46ce07f14")
}
```

Tag | Description | Example
---------|----------|---------
 `db` | current database | `flgths` in this case
 `collectionName` | Name of the collection we want to interact with. If it doesn't exist it's created on the fly | `flightData` in this case
 `insertOne` | Insert a new document | 
 `json data` | Data we want to insert into the document. They are key value pairs:<br> "`name`": "`value`" <br>`name` - Name of the key <br> `value` - Value for that name. | {<br>    "departureAirport": "MUC",<br>    "arrivalAirport": "SFO",<br>    "aircraft": "Airbus A380",<br>    "distance": 12000,<br>    "intercontinental": true<br>  }
 `value types` | `string` - Always with quotation marks<br>`number` - it can have decimal points<br> `boolean` - `true` or `false` | `string` - "departureAirport": "MUC<br> `number` - "distance": 12000<br>`boolean` - "intercontinental": true
 `returned information` | `acknowledged` - `true` if successfully executed<br>`insertedId` : `ObjectId(ìd)` - `ìd` assigned to that document | { <br>  "acknowledged" : true, <br>        "insertedId" : ObjectId("5c1ddb9799e4cbc46ce07f14") <br>}

4. Get the documents in a collection using `find` and with `pretty` if we want it in a `pretty way`

```bash
> db.flightData.find()
{ "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"), "departureAirport" : "MUC", "arrivalAirport" : "SFO", "aircraft" : "Airbus A380", "distance" : 12000, "intercontinental" : true }
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
```
5. JSON vs BSON
- Behind the scenes, MongoDB uses BSON

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Database2.png)

6. Schemaless. Each document can have a `different` schema.

```bash
> db.flightData.insertOne({departureAirport: "TXL",arrivalAirport: "LHR"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c1e0bb799e4cbc46ce07f15")
}
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
{
        "_id" : ObjectId("5c1e0bb799e4cbc46ce07f15"),
        "departureAirport" : "TXL",
        "arrivalAirport" : "LHR"
}
```

- The id can be assigned when creating the document adding it with the `_id` key.
```bash
> db.flightData.insertOne({departureAirport: "TXL",arrivalAirport: "LHR", _id: "txl_lhr-1"})
{ "acknowledged" : true, "insertedId" : "txl_lhr-1" }
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
{
        "_id" : ObjectId("5c1e0bb799e4cbc46ce07f15"),
        "departureAirport" : "TXL",
        "arrivalAirport" : "LHR"
}
{
        "_id" : "txl_lhr-1",
        "departureAirport" : "TXL",
        "arrivalAirport" : "LHR"
}
```
- We cannot insert the same `id` again
```bash
> db.flightData.insertOne({departureAirport: "TXL",arrivalAirport: "LHR", _id: "txl_lhr-1"})
2018-12-22T10:06:51.925+0000 E QUERY    [js] WriteError: E11000 duplicate key error collection: flights.flightData index: _id_ dup key: { : "txl_lhr-1" } :
WriteError({
        "index" : 0,
        "code" : 11000,
        "errmsg" : "E11000 duplicate key error collection: flights.flightData index: _id_ dup key: { : \"txl_lhr-1\" }",
        "op" : {
                "departureAirport" : "TXL",
                "arrivalAirport" : "LHR",
                "_id" : "txl_lhr-1"
        }
})
WriteError@src/mongo/shell/bulk_api.js:461:48
Bulk/mergeBatchResults@src/mongo/shell/bulk_api.js:841:49
Bulk/executeBatch@src/mongo/shell/bulk_api.js:906:13
Bulk/this.execute@src/mongo/shell/bulk_api.js:1150:21
DBCollection.prototype.insertOne@src/mongo/shell/crud_api.js:252:9
@(shell):1:1
```

7. CRUD Operations

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Database3.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Database4.png)

- Clear one document using `deleteOne`
```bash
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
{
        "_id" : ObjectId("5c1e0bb799e4cbc46ce07f15"),
        "departureAirport" : "TXL",
        "arrivalAirport" : "LHR"
}
{
        "_id" : "txl_lhr-1",
        "departureAirport" : "TXL",
        "arrivalAirport" : "LHR"
}
> db.flightData.deleteOne({departureAirport: "TXL"})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
{
        "_id" : "txl_lhr-1",
        "departureAirport" : "TXL",
        "arrivalAirport" : "LHR"
}
```
```bash
> db.flightData.deleteOne({_id: "txl_lhr-1"})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
```
- Update one document using `updateOne`
```bash
> db.flightData.insertOne({departureAirport: "TXL",arrivalAirport: "LHR", _id: "txl_lhr-1"})
{ "acknowledged" : true, "insertedId" : "txl_lhr-1" }
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
{
        "_id" : "txl_lhr-1",
        "departureAirport" : "TXL",
        "arrivalAirport" : "LHR"
}
> db.flightData.update({distance: 12000}, {marker: 'delete'})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.flightData.find().pretty()
{ "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"), "marker" : "delete" }
{
        "_id" : "txl_lhr-1",
        "departureAirport" : "TXL",
        "arrivalAirport" : "LHR"
}
```
```bash
> db.flightData.updateOne({"marker": "delete"},  {$set: {"departureAirport": "MUC","arrivalAirport": "SFO", "aircraft": "Airbus A380", distance: 12000, "intercontinental": true  }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"),
        "marker" : "delete",
        "aircraft" : "Airbus A380",
        "arrivalAirport" : "SFO",
        "departureAirport" : "MUC",
        "distance" : 12000,
        "intercontinental" : true
}
{
        "_id" : "txl_lhr-1",
        "departureAirport" : "TXL",
        "arrivalAirport" : "LHR"
}
```
```bash
> db.flightData.updateOne({distance: 12000}, {marketing: 'direct'})
2018-12-22T11:07:02.332+0000 E QUERY    [js] Error: the update operation document must contain atomic operators :
DBCollection.prototype.updateOne@src/mongo/shell/crud_api.js:542:1
@(shell):1:1
```
- Use `updateMany` to update the same data to all the documents
```bash
> db.flightData.updateMany({},{$set: {marker: "toDelete"}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1ddb9799e4cbc46ce07f14"),
        "marker" : "toDelete",
        "aircraft" : "Airbus A380",
        "arrivalAirport" : "SFO",
        "departureAirport" : "MUC",
        "distance" : 12000,
        "intercontinental" : true
}
{
        "_id" : "txl_lhr-1",
        "departureAirport" : "TXL",
        "arrivalAirport" : "LHR",
        "marker" : "toDelete"
}
```

- Delete many documents using `deleteMany`. We need to pass a `criteria`.
```bash
> db.flightData.deleteMany()
2018-12-22T10:45:38.561+0000 E QUERY    [js] Error: find() requires query criteria :
Bulk/this.find@src/mongo/shell/bulk_api.js:781:1
DBCollection.prototype.deleteMany@src/mongo/shell/crud_api.js:408:20
@(shell):1:1
```
- We can use `{}` (all) as the criteria to delete all.
- We can use another criteria to delete all the ones that match the criteria.
```bash
> db.flightData.deleteMany( {marker: "toDelete"})
{ "acknowledged" : true, "deletedCount" : 2 }
> db.flightData.find().pretty()
>
```
- Use `insertMany` to insert many documents in one go.
```bash
> db.flightData.insertMany([
...   {
...     "departureAirport": "MUC",
...     "arrivalAirport": "SFO",
...     "aircraft": "Airbus A380",
...     "distance": 12000,
...     "intercontinental": true
...   },
...   {
...     "departureAirport": "LHR",
...     "arrivalAirport": "TXL",
...     "aircraft": "Airbus A320",
...     "distance": 950,
...     "intercontinental": false
...   }
... ]
... )
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c1e1cf599e4cbc46ce07f16"),
                ObjectId("5c1e1cf599e4cbc46ce07f17")
        ]
}
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f17"),
        "departureAirport" : "LHR",
        "arrivalAirport" : "TXL",
        "aircraft" : "Airbus A320",
        "distance" : 950,
        "intercontinental" : false
}
```
- Search for specific documents using `find` and `findOne` with search criteria
```bash
> db.flightData.find({"intercontinental" : true}).pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
```
```bash
> db.flightData.find({distance : 12000}).pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
```
```bash
> db.flightData.find({distance : {$gt:1000}}).pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
```
::: warning
`pretty` is not supported with `findOne`
:::
```bash
> db.flightData.findOne({distance : {$gt:900}}).pretty()
2018-12-23T06:13:01.752+0000 E QUERY    [js] TypeError: db.flightData.findOne(...).pretty is not a function :
@(shell):1:1
```
```bash
> db.flightData.findOne({distance : {$gt:900}})
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
```
- Use `update`, `updatemany` and `updateOne` to update documents.
```bash
> db.flightData.updateOne({"_id" : ObjectId("5c1e1cf599e4cbc46ce07f16")}, {$set: {delayed: true}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.flightData.find({distance : 12000}).pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true,
        "delayed" : true
}
```
```bash
> db.flightData.updateMany({"_id" : ObjectId("5c1e1cf599e4cbc46ce07f16")}, {$set: {delayed: true}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })
```
```bash
> db.flightData.updateMany({"_id" : ObjectId("5c1e1cf599e4cbc46ce07f16")}, {$set: {delayed: false}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.flightData.find({distance : 12000}).pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true,
        "delayed" : false
}
```
- `Update` does not need `$set` but it `replaces` the content if we use it.
```bash
> db.flightData.update({"_id" : ObjectId("5c1e1cf599e4cbc46ce07f16")}, {delayed: true})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.flightData.find({distance : 12000}).pretty()
```
- It is better to use `replace` and `replaceOne` if we want to replace the whole document.
```bash
> db.flightData.replaceOne({"_id" : ObjectId("5c1e1cf599e4cbc46ce07f16")}, {
...     "departureAirport": "MUC",
...     "arrivalAirport": "SFO",
...     "aircraft": "Airbus A380",
...     "distance": 12000,
...     "intercontinental": true
...   })
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.flightData.find({distance : 12000}).pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
```
8. `find` and the `cursor` object.
```bash
> db.passengers.insertMany([
...   {
...     "name": "Max Schwarzmueller",
...     "age": 29
...   },
...   {
...     "name": "Manu Lorenz",
...     "age": 30
...   },
...   {
...     "name": "Chris Hayton",
...     "age": 35
...   },
...   {
...     "name": "Sandeep Kumar",
...     "age": 28
...   },
...   {
...     "name": "Maria Jones",
...     "age": 30
...   },
...   {
...     "name": "Alexandra Maier",
...     "age": 27
...   },
...   {
...     "name": "Dr. Phil Evans",
...     "age": 47
...   },
...   {
...     "name": "Sandra Brugge",
...     "age": 33
...   },
...   {
...     "name": "Elisabeth Mayr",
...     "age": 29
...   },
...   {
...     "name": "Frank Cube",
...     "age": 41
...   },
...   {
...     "name": "Karandeep Alun",
...     "age": 48
...   },
...   {
...     "name": "Michaela Drayer",
...     "age": 39
...   },
...   {
...     "name": "Bernd Hoftstadt",
...     "age": 22
...   },
...   {
...     "name": "Scott Tolib",
...     "age": 44
...   },
...   {
...     "name": "Freddy Melver",
...     "age": 41
...   },
...   {
...     "name": "Alexis Bohed",
...     "age": 35
...   },
...   {
...     "name": "Melanie Palace",
...     "age": 27
...   },
...   {
...     "name": "Armin Glutch",
...     "age": 35
...   },
...   {
...     "name": "Klaus Arber",
...     "age": 53
...   },
...   {
...     "name": "Albert Twostone",
...     "age": 68
...   },
...   {
...     "name": "Gordon Black",
...     "age": 38
...   }
... ]
... )
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c1f2bcb99e4cbc46ce07f18"),
                ObjectId("5c1f2bcb99e4cbc46ce07f19"),
                ObjectId("5c1f2bcb99e4cbc46ce07f1a"),
                ObjectId("5c1f2bcb99e4cbc46ce07f1b"),
                ObjectId("5c1f2bcb99e4cbc46ce07f1c"),
                ObjectId("5c1f2bcb99e4cbc46ce07f1d"),
                ObjectId("5c1f2bcb99e4cbc46ce07f1e"),
                ObjectId("5c1f2bcb99e4cbc46ce07f1f"),
                ObjectId("5c1f2bcb99e4cbc46ce07f20"),
                ObjectId("5c1f2bcb99e4cbc46ce07f21"),
                ObjectId("5c1f2bcb99e4cbc46ce07f22"),
                ObjectId("5c1f2bcb99e4cbc46ce07f23"),
                ObjectId("5c1f2bcb99e4cbc46ce07f24"),
                ObjectId("5c1f2bcb99e4cbc46ce07f25"),
                ObjectId("5c1f2bcb99e4cbc46ce07f26"),
                ObjectId("5c1f2bcb99e4cbc46ce07f27"),
                ObjectId("5c1f2bcb99e4cbc46ce07f28"),
                ObjectId("5c1f2bcb99e4cbc46ce07f29"),
                ObjectId("5c1f2bcb99e4cbc46ce07f2a"),
                ObjectId("5c1f2bcb99e4cbc46ce07f2b"),
                ObjectId("5c1f2bcb99e4cbc46ce07f2c")
        ]
}
> db.passengers.find().pretty()
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f18"),
        "name" : "Max Schwarzmueller",
        "age" : 29
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f19"),
        "name" : "Manu Lorenz",
        "age" : 30
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1a"),
        "name" : "Chris Hayton",
        "age" : 35
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1b"),
        "name" : "Sandeep Kumar",
        "age" : 28
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1c"),
        "name" : "Maria Jones",
        "age" : 30
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1d"),
        "name" : "Alexandra Maier",
        "age" : 27
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1e"),
        "name" : "Dr. Phil Evans",
        "age" : 47
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1f"),
        "name" : "Sandra Brugge",
        "age" : 33
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f20"),
        "name" : "Elisabeth Mayr",
        "age" : 29
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f21"),
        "name" : "Frank Cube",
        "age" : 41
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f22"),
        "name" : "Karandeep Alun",
        "age" : 48
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f23"),
        "name" : "Michaela Drayer",
        "age" : 39
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f24"),
        "name" : "Bernd Hoftstadt",
        "age" : 22
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f25"),
        "name" : "Scott Tolib",
        "age" : 44
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f26"),
        "name" : "Freddy Melver",
        "age" : 41
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f27"),
        "name" : "Alexis Bohed",
        "age" : 35
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f28"),
        "name" : "Melanie Palace",
        "age" : 27
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f29"),
        "name" : "Armin Glutch",
        "age" : 35
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2a"),
        "name" : "Klaus Arber",
        "age" : 53
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2b"),
        "name" : "Albert Twostone",
        "age" : 68
}
Type "it" for more
```
- We have to put `it` to see the rest
```bash
> it
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2c"),
        "name" : "Gordon Black",
        "age" : 38
}
```
- `find` retunrs a `cursor` Object that allows us to surf through the results.

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Database5.png)

- We can add `toArray` to get all the data.
```bash
> db.passengers.find().toArray()
[
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f18"),
                "name" : "Max Schwarzmueller",
                "age" : 29
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f19"),
                "name" : "Manu Lorenz",
                "age" : 30
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1a"),
                "name" : "Chris Hayton",
                "age" : 35
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1b"),
                "name" : "Sandeep Kumar",
                "age" : 28
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1c"),
                "name" : "Maria Jones",
                "age" : 30
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1d"),
                "name" : "Alexandra Maier",
                "age" : 27
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1e"),
                "name" : "Dr. Phil Evans",
                "age" : 47
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1f"),
                "name" : "Sandra Brugge",
                "age" : 33
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f20"),
                "name" : "Elisabeth Mayr",
                "age" : 29
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f21"),
                "name" : "Frank Cube",
                "age" : 41
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f22"),
                "name" : "Karandeep Alun",
                "age" : 48
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f23"),
                "name" : "Michaela Drayer",
                "age" : 39
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f24"),
                "name" : "Bernd Hoftstadt",
                "age" : 22
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f25"),
                "name" : "Scott Tolib",
                "age" : 44
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f26"),
                "name" : "Freddy Melver",
                "age" : 41
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f27"),
                "name" : "Alexis Bohed",
                "age" : 35
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f28"),
                "name" : "Melanie Palace",
                "age" : 27
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f29"),
                "name" : "Armin Glutch",
                "age" : 35
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2a"),
                "name" : "Klaus Arber",
                "age" : 53
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2b"),
                "name" : "Albert Twostone",
                "age" : 68
        },
        {
                "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2c"),
                "name" : "Gordon Black",
                "age" : 38
        }
]
```
- We can use `forEach` to do something for each document `found`. The code that we have to put is `Java` because is the language used to create the `MongoDB Console`
```bash
> db.passengers.find().forEach((passenger) => {printjson(passenger)})
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f18"),
        "name" : "Max Schwarzmueller",
        "age" : 29
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f19"),
        "name" : "Manu Lorenz",
        "age" : 30
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1a"),
        "name" : "Chris Hayton",
        "age" : 35
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1b"),
        "name" : "Sandeep Kumar",
        "age" : 28
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1c"),
        "name" : "Maria Jones",
        "age" : 30
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1d"),
        "name" : "Alexandra Maier",
        "age" : 27
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1e"),
        "name" : "Dr. Phil Evans",
        "age" : 47
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1f"),
        "name" : "Sandra Brugge",
        "age" : 33
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f20"),
        "name" : "Elisabeth Mayr",
        "age" : 29
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f21"),
        "name" : "Frank Cube",
        "age" : 41
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f22"),
        "name" : "Karandeep Alun",
        "age" : 48
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f23"),
        "name" : "Michaela Drayer",
        "age" : 39
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f24"),
        "name" : "Bernd Hoftstadt",
        "age" : 22
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f25"),
        "name" : "Scott Tolib",
        "age" : 44
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f26"),
        "name" : "Freddy Melver",
        "age" : 41
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f27"),
        "name" : "Alexis Bohed",
        "age" : 35
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f28"),
        "name" : "Melanie Palace",
        "age" : 27
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f29"),
        "name" : "Armin Glutch",
        "age" : 35
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2a"),
        "name" : "Klaus Arber",
        "age" : 53
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2b"),
        "name" : "Albert Twostone",
        "age" : 68
}
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2c"),
        "name" : "Gordon Black",
        "age" : 38
}
```
9. `Projection`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Database6.png)

- `Projection` is the snapshot where we put the data that we need.
```bash
> db.passengers.find({}, {name: 1})
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f18"), "name" : "Max Schwarzmueller" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f19"), "name" : "Manu Lorenz" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1a"), "name" : "Chris Hayton" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1b"), "name" : "Sandeep Kumar" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1c"), "name" : "Maria Jones" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1d"), "name" : "Alexandra Maier" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1e"), "name" : "Dr. Phil Evans" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f1f"), "name" : "Sandra Brugge" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f20"), "name" : "Elisabeth Mayr" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f21"), "name" : "Frank Cube" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f22"), "name" : "Karandeep Alun" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f23"), "name" : "Michaela Drayer" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f24"), "name" : "Bernd Hoftstadt" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f25"), "name" : "Scott Tolib" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f26"), "name" : "Freddy Melver" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f27"), "name" : "Alexis Bohed" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f28"), "name" : "Melanie Palace" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f29"), "name" : "Armin Glutch" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2a"), "name" : "Klaus Arber" }
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2b"), "name" : "Albert Twostone" }
Type "it" for more
> it
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2c"), "name" : "Gordon Black" }
```
- `_id` is always included. We need to explicity unselect it.
```bash
{ "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2c"), "name" : "Gordon Black" }
> db.passengers.find({}, {_id: 0, name: 1})
{ "name" : "Max Schwarzmueller" }
{ "name" : "Manu Lorenz" }
{ "name" : "Chris Hayton" }
{ "name" : "Sandeep Kumar" }
{ "name" : "Maria Jones" }
{ "name" : "Alexandra Maier" }
{ "name" : "Dr. Phil Evans" }
{ "name" : "Sandra Brugge" }
{ "name" : "Elisabeth Mayr" }
{ "name" : "Frank Cube" }
{ "name" : "Karandeep Alun" }
{ "name" : "Michaela Drayer" }
{ "name" : "Bernd Hoftstadt" }
{ "name" : "Scott Tolib" }
{ "name" : "Freddy Melver" }
{ "name" : "Alexis Bohed" }
{ "name" : "Melanie Palace" }
{ "name" : "Armin Glutch" }
{ "name" : "Klaus Arber" }
{ "name" : "Albert Twostone" }
Type "it" for more
> it
{ "name" : "Gordon Black" }
```
10. `Embedded Documents` 
- We can add nesting documents in each document up to 100 levels of Nesting
- Each document can store a maximum of 16 Mbytes.

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Database7.png)

```bash
> db.flightData.updateMany({}, {$set: {status: {description: "on-time", updated: "1 hour ago"}}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true,
        "status" : {
                "description" : "on-time",
                "updated" : "1 hour ago"
        }
}
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f17"),
        "departureAirport" : "LHR",
        "arrivalAirport" : "TXL",
        "aircraft" : "Airbus A320",
        "distance" : 950,
        "intercontinental" : false,
        "status" : {
                "description" : "on-time",
                "updated" : "1 hour ago"
        }
}
```
```bash
> db.flightData.updateMany({}, {$set: {status: {description: "on-time", updated: "1 hour ago", details: {responsible:"Juan Pablo Perez"}}}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.flightData.find().pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true,
        "status" : {
                "description" : "on-time",
                "updated" : "1 hour ago",
                "details" : {
                        "responsible" : "Juan Pablo Perez"
                }
        }
}
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f17"),
        "departureAirport" : "LHR",
        "arrivalAirport" : "TXL",
        "aircraft" : "Airbus A320",
        "distance" : 950,
        "intercontinental" : false,
        "status" : {
                "description" : "on-time",
                "updated" : "1 hour ago",
                "details" : {
                        "responsible" : "Juan Pablo Perez"
                }
        }
}
```
- We can store arrays of embedded documents.

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Database8.png)

```bash
> db.passengers.updateOne({name: "Albert Twostone"}, {$set: {hobbies: ["sports", "cooking"]}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.passengers.find({name: "Albert Twostone"}).pretty()
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2b"),
        "name" : "Albert Twostone",
        "age" : 68,
        "hobbies" : [
                "sports",
                "cooking"
        ]
}
```
11. Querying embedded documents
```bash
> db.passengers.findOne({name: "Albert Twostone"}).hobbies
[ "sports", "cooking" ]
```
```bash
> db.passengers.find({hobbies: "sports"}).pretty()
{
        "_id" : ObjectId("5c1f2bcb99e4cbc46ce07f2b"),
        "name" : "Albert Twostone",
        "age" : 68,
        "hobbies" : [
                "sports",
                "cooking"
        ]
}
```
```bash
> db.flightData.find({"status.description": "on-time" }).pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true,
        "status" : {
                "description" : "on-time",
                "updated" : "1 hour ago",
                "details" : {
                        "responsible" : "Juan Pablo Perez"
                }
        }
}
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f17"),
        "departureAirport" : "LHR",
        "arrivalAirport" : "TXL",
        "aircraft" : "Airbus A320",
        "distance" : 950,
        "intercontinental" : false,
        "status" : {
                "description" : "on-time",
                "updated" : "1 hour ago",
                "details" : {
                        "responsible" : "Juan Pablo Perez"
                }
        }
}
```
```bash
> db.flightData.find({"status.details.responsible": "Juan Pablo Perez" }).pretty()
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f16"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true,
        "status" : {
                "description" : "on-time",
                "updated" : "1 hour ago",
                "details" : {
                        "responsible" : "Juan Pablo Perez"
                }
        }
}
{
        "_id" : ObjectId("5c1e1cf599e4cbc46ce07f17"),
        "departureAirport" : "LHR",
        "arrivalAirport" : "TXL",
        "aircraft" : "Airbus A320",
        "distance" : 950,
        "intercontinental" : false,
        "status" : {
                "description" : "on-time",
                "updated" : "1 hour ago",
                "details" : {
                        "responsible" : "Juan Pablo Perez"
                }
        }
}
```
12. Assignment

- New database
```bash
> use hospital
switched to db hospital
```
- Insert documents
```bash
> db.patient.insertMany([
... {
... "firstName":  "Mickey",
... "lastName": "Mouse",
... "age": 35,
... "history": [
... {"disease":  "cold",  "treatment": "painkillers 3 times a day for 3 days"}
... ]
... },
... {
... "firstName":  "Minnie",
... "lastName": "Mouse",
... "age": 31,
... "history": [
... {"disease":  "bronchitis",  "treatment": "antibiotic 3 times a day for 7 days"}
... ]
... },
... {
... "firstName":  "Donald",
... "lastName": "Duck",
... "age": 42,
... "history": [
... {"disease":  "high blood pressure",  "treatment": "take it easy"}
... ]
... }
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c1f6bc899e4cbc46ce07f2d"),
                ObjectId("5c1f6bc899e4cbc46ce07f2e"),
                ObjectId("5c1f6bc899e4cbc46ce07f2f")
        ]
}
> db.patient.find().pretty()
{
        "_id" : ObjectId("5c1f6bc899e4cbc46ce07f2d"),
        "firstName" : "Mickey",
        "lastName" : "Mouse",
        "age" : 35,
        "history" : [
                {
                        "disease" : "cold",
                        "treatment" : "painkillers 3 times a day for 3 days"
                }
        ]
}
{
        "_id" : ObjectId("5c1f6bc899e4cbc46ce07f2e"),
        "firstName" : "Minnie",
        "lastName" : "Mouse",
        "age" : 31,
        "history" : [
                {
                        "disease" : "bronchitis",
                        "treatment" : "antibiotic 3 times a day for 7 days"
                }
        ]
}
{
        "_id" : ObjectId("5c1f6bc899e4cbc46ce07f2f"),
        "firstName" : "Donald",
        "lastName" : "Duck",
        "age" : 42,
        "history" : [
                {
                        "disease" : "high blood pressure",
                        "treatment" : "take it easy"
                }
        ]
}
```
- Update one document
```bash
> db.patient.updateOne({"firstName" : "Minnie"}, {$set: {"age": 29, "history": [{"disease":  "bronchitis",  "treatment": "antibiotic 3 times a day for 9 days"}, {"filmography": ["Plane Crazy","Steamboat Willie","Mickey's Good","..."]}]}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.patient.find({"firstName" : "Minnie"}).pretty()
{
        "_id" : ObjectId("5c1f6bc899e4cbc46ce07f2e"),
        "firstName" : "Minnie",
        "lastName" : "Mouse",
        "age" : 29,
        "history" : [
                {
                        "disease" : "bronchitis",
                        "treatment" : "antibiotic 3 times a day for 9 days"
                },
                {
                        "filmography" : [
                                "Plane Crazy",
                                "Steamboat Willie",
                                "Mickey's Good",
                                "..."
                        ]
                }
        ]
}
```
- Find documents where Age greater than 34
```bash
> db.patient.find({ age: {$gt: 34}}).pretty()
{
        "_id" : ObjectId("5c1f6bc899e4cbc46ce07f2d"),
        "firstName" : "Mickey",
        "lastName" : "Mouse",
        "age" : 35,
        "history" : [
                {
                        "disease" : "cold",
                        "treatment" : "painkillers 3 times a day for 3 days"
                }
        ]
}
{
        "_id" : ObjectId("5c1f6bc899e4cbc46ce07f2f"),
        "firstName" : "Donald",
        "lastName" : "Duck",
        "age" : 42,
        "history" : [
                {
                        "disease" : "high blood pressure",
                        "treatment" : "take it easy"
                }
        ]
}
```
- Delete one patient
```bash
{ "acknowledged" : true, "deletedCount" : 1 }
> db.patient.find().pretty()
{
        "_id" : ObjectId("5c1f6bc899e4cbc46ce07f2e"),
        "firstName" : "Minnie",
        "lastName" : "Mouse",
        "age" : 29,
        "history" : [
                {
                        "disease" : "bronchitis",
                        "treatment" : "antibiotic 3 times a day for 9 days"
                },
                {
                        "filmography" : [
                                "Plane Crazy",
                                "Steamboat Willie",
                                "Mickey's Good",
                                "..."
                        ]
                }
        ]
}
{
        "_id" : ObjectId("5c1f6bc899e4cbc46ce07f2f"),
        "firstName" : "Donald",
        "lastName" : "Duck",
        "age" : 42,
        "history" : [
                {
                        "disease" : "high blood pressure",
                        "treatment" : "take it easy"
                }
        ]
}
```
13. Summay

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Database9.png)

## Schemas & Relations: How to Structure Documents
1. Resetting your database. 
- We can can simply load the database we want to get rid of (`use databaseName`) and then execute `db.dropDatabase()`.
```bash
> show dbs
TasksAppMongo  0.000GB
admin          0.000GB
blog           0.000GB
config         0.000GB
flights        0.000GB
hospital       0.000GB
local          0.000GB
shop           0.000GB
> use shop
switched to db shop
> db.dropDatabse()
2018-12-31T06:20:58.509+0000 E QUERY    [js] TypeError: db.dropDatabse is not a function :
@(shell):1:1
> db.dropDatabase()
{ "dropped" : "shop", "ok" : 1 }
```
- We could get rid of a single collection in a database via `db.myCollection.drop()`.
```bash
> use hospital
switched to db hospital
> db.getCollectionNames()
[ "patient" ]
> db.patient.drop()
true
> db.getCollectionNames()
[ ]
>
```
2. Why Do We Use Schemas?
![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations.png)
- we can insert some documnents without schema
```bash
> db.products.insertOne({name: "Book", price: 12.99})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29b884ba280a45572d8b88")
}
> db.products.insertOne({title: "T-Shirt", seller: {name: "Juan", age: 52}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29b88cba280a45572d8b89")
}
> db.products.find().pretty()
{
        "_id" : ObjectId("5c29b884ba280a45572d8b88"),
        "name" : "Book",
        "price" : 12.99
}
{
        "_id" : ObjectId("5c29b88cba280a45572d8b89"),
        "title" : "T-Shirt",
        "seller" : {
                "name" : "Juan",
                "age" : 52
        }
}
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations2.png)

```bash
> db.products.insertOne({name: "Book", price: 12.99, details: null})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29bb3cba280a45572d8b90")
}
> db.products.insertOne({name: "T-Shirt", price: 20.99, details: null})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29bb48ba280a45572d8b91")
}
> db.products.insertOne({name: "Computer", price: 1299, details: {cpu: "Intel i7 8770"}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29bb4cba280a45572d8b92")
}
> db.products.find().pretty()
{
        "_id" : ObjectId("5c29bb3cba280a45572d8b90"),
        "name" : "Book",
        "price" : 12.99,
        "details" : null
}
{
        "_id" : ObjectId("5c29bb48ba280a45572d8b91"),
        "name" : "T-Shirt",
        "price" : 20.99,
        "details" : null
}
{
        "_id" : ObjectId("5c29bb4cba280a45572d8b92"),
        "name" : "Computer",
        "price" : 1299,
        "details" : {
                "cpu" : "Intel i7 8770"
        }
}
```

3. Data Types.

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations3.png)

- Insert a document with different `Data Types`.

```bash
> use companyData
switched to db companyData
> db.companies.insertOne({name: "Fresh Apples Inc", isStartup: true, employees: 33, funding: 12345678901234567890, details: {ceo: "Mark Super"}, tags: ["super","perfect"], foundingDate: new Date(), insertedAt: new Timestamp()})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29bf05ba280a45572d8b93")
}
> db.companies.findOne()
{
        "_id" : ObjectId("5c29bf05ba280a45572d8b93"),
        "name" : "Fresh Apples Inc",
        "isStartup" : true,
        "employees" : 33,
        "funding" : 12345678901234567000,
        "details" : {
                "ceo" : "Mark Super"
        },
        "tags" : [
                "super",
                "perfect"
        ],
        "foundingDate" : ISODate("2018-12-31T07:02:29.167Z"),
        "insertedAt" : Timestamp(1546239749, 1)
}
```
- The `12345678901234567890` long number inserted in the `funding` value is truncated to `12345678901234567000`.

```bash
> db.numbers.insertOne({a: 1})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29bfe9ba280a45572d8b94")
}
> db.stats()
{
        "db" : "companyData",
        "collections" : 2,
        "views" : 0,
        "objects" : 2,
        "avgObjSize" : 122.5,
        "dataSize" : 245,
        "storageSize" : 20480,
        "numExtents" : 0,
        "indexes" : 2,
        "indexSize" : 20480,
        "fsUsedSize" : 268846039040,
        "fsTotalSize" : 494586032128,
        "ok" : 1
}
```
- With `drop` the colection is `completely removed`.
```bash
> db.companies.drop()
true
> db.stats()
{
        "db" : "companyData",
        "collections" : 1,
        "views" : 0,
        "objects" : 1,
        "avgObjSize" : 33,
        "dataSize" : 33,
        "storageSize" : 16384,
        "numExtents" : 0,
        "indexes" : 1,
        "indexSize" : 16384,
        "fsUsedSize" : 268846575616,
        "fsTotalSize" : 494586032128,
        "ok" : 1
}
```
- With `deleteMany` it is still there.
```bash
> db.numbers.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.stats()
{
        "db" : "companyData",
        "collections" : 1,
        "views" : 0,
        "objects" : 0,
        "avgObjSize" : 0,
        "dataSize" : 0,
        "storageSize" : 16384,
        "numExtents" : 0,
        "indexes" : 1,
        "indexSize" : 16384,
        "fsUsedSize" : 268846960640,
        "fsTotalSize" : 494586032128,
        "ok" : 1
}
> db.getCollectionNames()
[ "numbers" ]
```
- Internally the numbers are stored depending on their type.
```bash
> db.numbers.insertOne({a: NumberInt(1)})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29c160ba280a45572d8b95")
}
> db.stats()
{
        "db" : "companyData",
        "collections" : 1,
        "views" : 0,
        "objects" : 1,
        "avgObjSize" : 29,
        "dataSize" : 29,
        "storageSize" : 20480,
        "numExtents" : 0,
        "indexes" : 1,
        "indexSize" : 20480,
        "fsUsedSize" : 268848025600,
        "fsTotalSize" : 494586032128,
        "ok" : 1
}
```
- We can know the type of the value using `typeof`
```bash
> typeof db.numbers.findOne().a
number
```
> Important data type limits are:
- `Normal integers (int32)` can hold a maximum value of +-2,147,483,647.
- `Long integers (int64)` can hold a maximum value of +-9,223,372,036,854,775,807.
- `Text can be as long as you want` - the limit is the 16mb restriction for the overall document.
- It's also important to understand the difference between int32 (NumberInt), int64 (NumberLong) and a normal number as you can enter it in the shell. The same goes for a normal double and NumberDecimal.
- `NumberInt` creates a int32 value => NumberInt(55)
- `NumberLong` creates a int64 value => NumberLong(7489729384792)
- If you just use a `number` (e.g. insertOne({a: 1}), this will get added as a `normal double` into the database. The reason for this is that the shell is based on JS which only knows float/ double values and doesn't differ between integers and floats.
- `NumberDecimal` creates a high-precision double value => NumberDecimal("12.99") => This can be helpful for cases where you need (many) exact decimal places for calculations.

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations4.png)

4. Relations 

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations5.png)
> `One to One - Embedded`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations6.png)

- Querying using variables
```bash
> db.patients.insertOne({ name: "Max", age: 29, diseaseSummary: "summary-max-1"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29c746ba280a45572d8b97")
}
> db.patients.findOne()
{
        "_id" : ObjectId("5c29c746ba280a45572d8b97"),
        "name" : "Max",
        "age" : 29,
        "diseaseSummary" : "summary-max-1"
}
> db.diseaseSummaries.insertOne({_id: "summary-max-1", diseases: ["cold","broken leg"]})
{ "acknowledged" : true, "insertedId" : "summary-max-1" }
> db.diseaseSummaries.findOne()
{ "_id" : "summary-max-1", "diseases" : [ "cold", "broken leg" ] }
> db.patients.findOne()
{
        "_id" : ObjectId("5c29c746ba280a45572d8b97"),
        "name" : "Max",
        "age" : 29,
        "diseaseSummary" : "summary-max-1"
}
> db.patients.findOne().diseaseSummary
summary-max-1
> var dsid = db.patients.findOne().diseaseSummary
> dsid
summary-max-1
> db.diseaseSummaries.findOne(_id: dsid})
2018-12-31T07:43:28.707+0000 E QUERY    [js] SyntaxError: missing ) after argument list @(shell):1:31
> db.diseaseSummaries.findOne({_id: dsid})
{ "_id" : "summary-max-1", "diseases" : [ "cold", "broken leg" ] }
```
- It will be easier if we add the information `embedded`

```bash
> db.patients.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.patients.insertOne({ name: "Max", age: 29, diseases: ["cold","broken leg"]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29c9a6ba280a45572d8b98")
}
> db.patients.findOne()
{
        "_id" : ObjectId("5c29c9a6ba280a45572d8b98"),
        "name" : "Max",
        "age" : 29,
        "diseases" : [
                "cold",
                "broken leg"
        ]
}
```
> `One to One - Using References`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations7.png)

```bash
> use carData
switched to db carData
> db.persons.insertOne({name: "Max", car: {model: "BMW", price: 40000}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29caceba280a45572d8b9a")
}
> db.persons.findOne()
{
        "_id" : ObjectId("5c29caceba280a45572d8b9a"),
        "name" : "Max",
        "car" : {
                "model" : "BMW",
                "price" : 40000
        }
}
> db.persons.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.persons.insertOne({name: "Max", age: 39, salary: 3000})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29cb78ba280a45572d8b9b")
}
> db.cars.insertOne({model: "BMW", price: 4000, owner: ObjectId("5c29cb78ba280a45572d8b9b")})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29cbc5ba280a45572d8b9c")
}
```

> `One to Many - Embedded`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations8.png)

```bash
> use support
switched to db support
> db.questionThreads.insertOne({creator: "Max", question: "How does that all work?", answers: ["q1a1","q1a2"]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29ccecba280a45572d8b9d")
}
> db.questionThreads.findOne()
{
        "_id" : ObjectId("5c29ccecba280a45572d8b9d"),
        "creator" : "Max",
        "question" : "How does that all work?",
        "answers" : [
                "q1a1",
                "q1a2"
        ]
}
> db.answers.insertMany([{_id: "q1a1", text: "It works like that"}, {_id: "q1a2", text: "Thanks!"}])
{ "acknowledged" : true, "insertedIds" : [ "q1a1", "q1a2" ] }
> db.answers.find()
{ "_id" : "q1a1", "text" : "It works like that" }
{ "_id" : "q1a2", "text" : "Thanks!" }
> db.answers.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 2 }
> db.questionThreads.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.questionThreads.insertOne({creator: "Max", question: "How does that all work?", answers: [{text: "It works like that"},{text: "Thanks!"}]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29ce4bba280a45572d8b9e")
}
> db.questionThreads.findOne()
{
        "_id" : ObjectId("5c29ce4bba280a45572d8b9e"),
        "creator" : "Max",
        "question" : "How does that all work?",
        "answers" : [
                {
                        "text" : "It works like that"
                },
                {
                        "text" : "Thanks!"
                }
        ]
}
```

> `One to Many - Using References`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations9.png)

```bash
> db.cities.insertOne({name: "New York City", coordinates: {lat: 21, lng: 55}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29cf77ba280a45572d8b9f")
}
> db.cities.findOne()
{
        "_id" : ObjectId("5c29cf77ba280a45572d8b9f"),
        "name" : "New York City",
        "coordinates" : {
                "lat" : 21,
                "lng" : 55
        }
}
> db.citizens.insertMany([{ name: "Max", cityId: ObjectId("5c29cf77ba280a45572d8b9f")}, {name: "Manuel", cityid: ObjectId("5c29cf77ba280a45572d8b9f")}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c29d016ba280a45572d8ba0"),
                ObjectId("5c29d016ba280a45572d8ba1")
        ]
}
> db.citizens.find({}).pretty()
{
        "_id" : ObjectId("5c29d016ba280a45572d8ba0"),
        "name" : "Max",
        "cityId" : ObjectId("5c29cf77ba280a45572d8b9f")
}
{
        "_id" : ObjectId("5c29d016ba280a45572d8ba1"),
        "name" : "Manuel",
        "cityid" : ObjectId("5c29cf77ba280a45572d8b9f")
}
```

> `Many to Many - Embedded`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations10.png)

```bash
> use shop
switched to db shop
> db.products.insertOne({title: "Book", price: 12.99})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29d25bba280a45572d8ba2")
}
> db.customers.insertOne({name: "Max", age: 29})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29d289ba280a45572d8ba3")
}
> db.orders.insertOne({productId: ObjectId("5c29d25bba280a45572d8ba2"), customerId: ObjectId("5c29d289ba280a45572d8ba3")})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29d2bfba280a45572d8ba4")
}
> db.Orders.drop()
false
> db.orders.drop()
true
> db.products.find()
{ "_id" : ObjectId("5c29d25bba280a45572d8ba2"), "title" : "Book", "price" : 12.99 }
> db.customers.find()
{ "_id" : ObjectId("5c29d289ba280a45572d8ba3"), "name" : "Max", "age" : 29 }
> db.customers.updateOne({}, {$set: {orders: [{productId: ObjectId("5c29d25bba280a45572d8ba2"), quantity: 2}]}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.customers.find().pretty()
{
        "_id" : ObjectId("5c29d289ba280a45572d8ba3"),
        "name" : "Max",
        "age" : 29,
        "orders" : [
                {
                        "productId" : ObjectId("5c29d25bba280a45572d8ba2"),
                        "quantity" : 2
                }
        ]
}
> db.customers.updateOne({}, {$set: {orders: [{title: "Book", price: 12.99, quantity: 2}]}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.customers.find().pretty()
{
        "_id" : ObjectId("5c29d289ba280a45572d8ba3"),
        "name" : "Max",
        "age" : 29,
        "orders" : [
                {
                        "title" : "Book",
                        "price" : 12.99,
                        "quantity" : 2
                }
        ]
}
```
> `Many to Many - Using References`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations11.png)

```bash
> use bookRegistry
switched to db bookRegistry
> db.books.insertOne({name: "My favorite Book", authors: [{name: "Max", age: 29}, {name: "Manuel", age: 30}]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29d629ba280a45572d8ba5")
}
> db.books.find().pretty()
{
        "_id" : ObjectId("5c29d629ba280a45572d8ba5"),
        "name" : "My favorite Book",
        "authors" : [
                {
                        "name" : "Max",
                        "age" : 29
                },
                {
                        "name" : "Manuel",
                        "age" : 30
                }
        ]
}
> db.authors.insertMany([{name: "Max", age: 29, address: {street: "Main"}},{name: "Manuel", age: 30, address: {street: "Second"}}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c29d6d3ba280a45572d8ba6"),
                ObjectId("5c29d6d3ba280a45572d8ba7")
        ]
}
> db.authors.find().pretty()
{
        "_id" : ObjectId("5c29d6d3ba280a45572d8ba6"),
        "name" : "Max",
        "age" : 29,
        "address" : {
                "street" : "Main"
        }
}
{
        "_id" : ObjectId("5c29d6d3ba280a45572d8ba7"),
        "name" : "Manuel",
        "age" : 30,
        "address" : {
                "street" : "Second"
        }
}
> db.books.updateOne({}, {$set: {authors: [ObjectId("5c29d6d3ba280a45572d8ba6"),ObjectId("5c29d6d3ba280a45572d8ba7")]}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.books.find().pretty()
{
        "_id" : ObjectId("5c29d629ba280a45572d8ba5"),
        "name" : "My favorite Book",
        "authors" : [
                ObjectId("5c29d6d3ba280a45572d8ba6"),
                ObjectId("5c29d6d3ba280a45572d8ba7")
        ]
}
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations12.png)

5. Using `lookUp()` for Merging Reference Relations

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations13.png)

```bash
> db.books.aggregate([{$lookup: {from: "authors", localField: "authors", foreignField: "_id", as: "creators"}}]).pretty()
{
        "_id" : ObjectId("5c29d629ba280a45572d8ba5"),
        "name" : "My favorite Book",
        "authors" : [
                ObjectId("5c29d6d3ba280a45572d8ba6"),
                ObjectId("5c29d6d3ba280a45572d8ba7")
        ],
        "creators" : [
                {
                        "_id" : ObjectId("5c29d6d3ba280a45572d8ba6"),
                        "name" : "Max",
                        "age" : 29,
                        "address" : {
                                "street" : "Main"
                        }
                },
                {
                        "_id" : ObjectId("5c29d6d3ba280a45572d8ba7"),
                        "name" : "Manuel",
                        "age" : 30,
                        "address" : {
                                "street" : "Second"
                        }
                }
        ]
}
```
6. Example project

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations14.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations15.png)

```bash
> db.users.insertMany([{name: "Max", age: 29, email: "max@test.com"},{name: "Manuel", age: 30, email: "manuel@test.com"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c29dffaba280a45572d8ba8"),
                ObjectId("5c29dffaba280a45572d8ba9")
        ]
}
> db.users.find().pretty()
{
        "_id" : ObjectId("5c29dffaba280a45572d8ba8"),
        "name" : "Max",
        "age" : 29,
        "email" : "max@test.com"
}
{
        "_id" : ObjectId("5c29dffaba280a45572d8ba9"),
        "name" : "Manuel",
        "age" : 30,
        "email" : "manuel@test.com"
}
> db.posts.insertOne({title: "My first Post!", text: "This is the first one", tags: ["new","tech"], creator: ObjectId("5c29dffaba280a45572d8ba9"), comments: [{text: "I like this posts!", author: ObjectId("5c29dffaba280a45572d8ba8")}]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29e107ba280a45572d8baa")
}
> db.posts.findOne()
{
        "_id" : ObjectId("5c29e107ba280a45572d8baa"),
        "title" : "My first Post!",
        "text" : "This is the first one",
        "tags" : [
                "new",
                "tech"
        ],
        "creator" : ObjectId("5c29dffaba280a45572d8ba9"),
        "comments" : [
                {
                        "text" : "I like this posts!",
                        "author" : ObjectId("5c29dffaba280a45572d8ba8")
                }
        ]
}
```

7. Schema validation

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations16.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations17.png)

```bash
> db.posts.drop()
true
> db.posts.findOne()
null
> db.createCollection('posts', {
...   validator: {
...     $jsonSchema: {
...       bsonType: 'object',
...       required: ['title', 'text', 'creator', 'comments'],
...       properties: {
...         title: {
...           bsonType: 'string',
...           description: 'must be a string and is required'
...         },
...         text: {
...           bsonType: 'string',
...           description: 'must be a string and is required'
...         },
...         creator: {
...           bsonType: 'objectId',
...           description: 'must be an objectid and is required'
...         },
...         comments: {
...           bsonType: 'array',
...           description: 'must be an array and is required',
...           items: {
...             bsonType: 'object',
...             required: ['text', 'author'],
...             properties: {
...               text: {
...                 bsonType: 'string',
...                 description: 'must be a string and is required'
...               },
...               author: {
...                 bsonType: 'objectId',
...                 description: 'must be an objectid and is required'
...               }
...             }
...           }
...         }
...       }
...     }
...   }
... });
{ "ok" : 1 }
> db.posts.insertOne({title: "My first Post!", text: "This is the first one", tags: ["new","tech"], creator: ObjectId("5c29dffaba280a45572d8ba9"), comments: [{text: "I like this posts!", author: ObjectId("5c29dffaba280a45572d8ba8")}]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29eb24ba280a45572d8bab")
}
> db.posts.findOne()
{
        "_id" : ObjectId("5c29eb24ba280a45572d8bab"),
        "title" : "My first Post!",
        "text" : "This is the first one",
        "tags" : [
                "new",
                "tech"
        ],
        "creator" : ObjectId("5c29dffaba280a45572d8ba9"),
        "comments" : [
                {
                        "text" : "I like this posts!",
                        "author" : ObjectId("5c29dffaba280a45572d8ba8")
                }
        ]
}
> db.posts.insertOne({title: "My first Post!", text: "This is the first one", tags: ["new","tech"], creator: ObjectId("5c29dffaba280a45572d8ba9"), comments: [{text: "I like this posts!", author: 12}]})
2018-12-31T10:11:21.828+0000 E QUERY    [js] WriteError: Document failed validation :
WriteError({
        "index" : 0,
        "code" : 121,
        "errmsg" : "Document failed validation",
        "op" : {
                "_id" : ObjectId("5c29eb49ba280a45572d8bac"),
                "title" : "My first Post!",
                "text" : "This is the first one",
                "tags" : [
                        "new",
                        "tech"
                ],
                "creator" : ObjectId("5c29dffaba280a45572d8ba9"),
                "comments" : [
                        {
                                "text" : "I like this posts!",
                                "author" : 12
                        }
                ]
        }
})
WriteError@src/mongo/shell/bulk_api.js:461:48
Bulk/mergeBatchResults@src/mongo/shell/bulk_api.js:841:49
Bulk/executeBatch@src/mongo/shell/bulk_api.js:906:13
Bulk/this.execute@src/mongo/shell/bulk_api.js:1150:21
DBCollection.prototype.insertOne@src/mongo/shell/crud_api.js:252:9
@(shell):1:1
```

- We use `db.runCommand` and `collMod` to update the validation.
```bash
> db.runCommand({
...   collMod: 'posts',
...   validator: {
...     $jsonSchema: {
...       bsonType: 'object',
...       required: ['title', 'text', 'creator', 'comments'],
...       properties: {
...         title: {
...           bsonType: 'string',
...           description: 'must be a string and is required'
...         },
...         text: {
...           bsonType: 'string',
...           description: 'must be a string and is required'
...         },
...         creator: {
...           bsonType: 'objectId',
...           description: 'must be an objectid and is required'
...         },
...         comments: {
...           bsonType: 'array',
...           description: 'must be an array and is required',
...           items: {
...             bsonType: 'object',
...             required: ['text', 'author'],
...             properties: {
...               text: {
...                 bsonType: 'string',
...                 description: 'must be a string and is required'
...               },
...               author: {
...                 bsonType: 'objectId',
...                 description: 'must be an objectid and is required'
...               }
...             }
...           }
...         }
...       }
...     }
...   },
...   validationAction: 'warn'
... });
{ "ok" : 1 }
> db.posts.insertOne({title: "My first Post!", text: "This is the first one", tags: ["new","tech"], creator: ObjectId("5c29dffaba280a45572d8ba9"), comments: [{text: "I like this posts!", author: 12}]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c29ecb5ba280a45572d8bad")
}
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations18.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/SchemasRelations19.png)

## Exploring The Shell & The Server
1. Check the [mongo Shell](https://docs.mongodb.com/manual/mongo/)

2. Execute the `mondod --help` to see all the `command line options`

```bash
C:\WINDOWS\system32>mongod --help
Options:

General options:
  -v [ --verbose ] [=arg(=v)]           be more verbose (include multiple times
                                        for more verbosity e.g. -vvvvv)
  --quiet                               quieter output
  --port arg                            specify port number - 27017 by default
  --logpath arg                         log file to send write to instead of
                                        stdout - has to be a file, not
                                        directory
  --logappend                           append to logpath instead of
                                        over-writing
  --logRotate arg                       set the log rotation behavior
                                        (rename|reopen)
  --timeStampFormat arg                 Desired format for timestamps in log
                                        messages. One of ctime, iso8601-utc or
                                        iso8601-local
  --setParameter arg                    Set a configurable parameter
  -h [ --help ]                         show this usage information
  --version                             show version information
  -f [ --config ] arg                   configuration file specifying
                                        additional options
  --bind_ip arg                         comma separated list of ip addresses to
                                        listen on - localhost by default
  --bind_ip_all                         bind to all ip addresses
  --ipv6                                enable IPv6 support (disabled by
                                        default)
  --listenBacklog arg (=2147483647)     set socket listen backlog size
  --maxConns arg                        max number of simultaneous connections
                                        - 1000000 by default
  --pidfilepath arg                     full path to pidfile (if not set, no
                                        pidfile is created)
  --timeZoneInfo arg                    full path to time zone info directory,
                                        e.g. /usr/share/zoneinfo
  --keyFile arg                         private key for cluster authentication
  --noauth                              run without security
  --transitionToAuth                    For rolling access control upgrade.
                                        Attempt to authenticate over outgoing
                                        connections and proceed regardless of
                                        success. Accept incoming connections
                                        with or without authentication.
  --clusterAuthMode arg                 Authentication mode used for cluster
                                        authentication. Alternatives are
                                        (keyFile|sendKeyFile|sendX509|x509)
  --slowms arg (=100)                   value of slow for profile and console
                                        log
  --slowOpSampleRate arg (=1)           fraction of slow ops to include in the
                                        profile and console log
  --networkMessageCompressors [=arg(=disabled)] (=snappy)
                                        Comma-separated list of compressors to
                                        use for network messages
  --auth                                run with security
  --clusterIpSourceWhitelist arg        Network CIDR specification of permitted
                                        origin for `__system` access.
  --profile arg                         0=off 1=slow, 2=all
  --cpu                                 periodically show cpu and iowait
                                        utilization
  --sysinfo                             print some diagnostic system
                                        information
  --noIndexBuildRetry                   don't retry any index builds that were
                                        interrupted by shutdown
  --noscripting                         disable scripting engine
  --notablescan                         do not allow table scans

Windows Service Control Manager options:
  --install                             install Windows service
  --remove                              remove Windows service
  --reinstall                           reinstall Windows service (equivalent
                                        to --remove followed by --install)
  --serviceName arg                     Windows service name
  --serviceDisplayName arg              Windows service display name
  --serviceDescription arg              Windows service description
  --serviceUser arg                     account for service execution
  --servicePassword arg                 password used to authenticate
                                        serviceUser

Replication options:
  --oplogSize arg                       size to use (in MB) for replication op
                                        log. default is 5% of disk space (i.e.
                                        large is good)
  --master                              Master/slave replication no longer
                                        supported
  --slave                               Master/slave replication no longer
                                        supported

Replica set options:
  --replSet arg                         arg is <setname>[/<optionalseedhostlist
                                        >]
  --replIndexPrefetch arg               specify index prefetching behavior (if
                                        secondary) [none|_id_only|all]
  --enableMajorityReadConcern [=arg(=1)] (=1)
                                        enables majority readConcern

Sharding options:
  --configsvr                           declare this is a config db of a
                                        cluster; default port 27019; default
                                        dir /data/configdb
  --shardsvr                            declare this is a shard db of a
                                        cluster; default port 27018

SSL options:
  --sslOnNormalPorts                    use ssl on configured ports
  --sslMode arg                         set the SSL operation mode
                                        (disabled|allowSSL|preferSSL|requireSSL
                                        )
  --sslPEMKeyFile arg                   PEM file for ssl
  --sslPEMKeyPassword arg               PEM file password
  --sslClusterFile arg                  Key file for internal SSL
                                        authentication
  --sslClusterPassword arg              Internal authentication key file
                                        password
  --sslCAFile arg                       Certificate Authority file for SSL
  --sslClusterCAFile arg                CA used for verifying remotes during
                                        outbound connections
  --sslCRLFile arg                      Certificate Revocation List file for
                                        SSL
  --sslDisabledProtocols arg            Comma separated list of TLS protocols
                                        to disable [TLS1_0,TLS1_1,TLS1_2]
  --sslWeakCertificateValidation        allow client to connect without
                                        presenting a certificate
  --sslAllowConnectionsWithoutCertificates
                                        allow client to connect without
                                        presenting a certificate
  --sslAllowInvalidHostnames            Allow server certificates to provide
                                        non-matching hostnames
  --sslAllowInvalidCertificates         allow connections to servers with
                                        invalid certificates
  --sslFIPSMode                         activate FIPS 140-2 mode at startup
  --sslCertificateSelector arg          SSL Certificate in system store
  --sslClusterCertificateSelector arg   SSL Certificate in system store for
                                        internal SSL authentication

Storage options:
  --storageEngine arg                   what storage engine to use - defaults
                                        to wiredTiger if no data files present
  --dbpath arg                          directory for datafiles - defaults to
                                        \data\db\ which is C:\data\db\ based on
                                        the current working drive
  --directoryperdb                      each database will be stored in a
                                        separate directory
  --noprealloc                          disable data file preallocation - will
                                        often hurt performance
  --nssize arg (=16)                    .ns file size (in MB) for new databases
  --quota                               limits each database to a certain
                                        number of files (8 default)
  --quotaFiles arg                      number of files allowed per db, implies
                                        --quota
  --smallfiles                          use a smaller default file size
  --syncdelay arg (=60)                 seconds between disk syncs (0=never,
                                        but not recommended)
  --upgrade                             upgrade db if needed
  --repair                              run repair on all dbs
  --repairpath arg                      root directory for repair files -
                                        defaults to dbpath
  --journal                             enable journaling
  --nojournal                           disable journaling (journaling is on by
                                        default for 64 bit)
  --journalOptions arg                  journal diagnostic options
  --journalCommitInterval arg           how often to group/batch commit (ms)

Free Monitoring options:
  --enableFreeMonitoring arg            Enable Cloud Free Monitoring
                                        (on|runtime|off)
  --freeMonitoringTag arg               Cloud Free Monitoring Tags

WiredTiger options:
  --wiredTigerCacheSizeGB arg           maximum amount of memory to allocate
                                        for cache; defaults to 1/2 of physical
                                        RAM
  --wiredTigerJournalCompressor arg (=snappy)
                                        use a compressor for log records
                                        [none|snappy|zlib]
  --wiredTigerDirectoryForIndexes       Put indexes and data in different
                                        directories
  --wiredTigerCollectionBlockCompressor arg (=snappy)
                                        block compression algorithm for
                                        collection data [none|snappy|zlib]
  --wiredTigerIndexPrefixCompression arg (=1)
                                        use prefix compression on row-store
                                        leaf pages
```

- Current content of the `mongod.cfg` file
> `mongod.cfg`
```yaml
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: C:\Program Files\MongoDB\Server\4.0\data
  journal:
    enabled: true
#  engine:
#  mmapv1:
#  wiredTiger:

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path:  C:\Program Files\MongoDB\Server\4.0\log\mongod.log

# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1


#processManagement:

#security:

#operationProfiling:

#replication:

#sharding:

## Enterprise-Only Options:

#auditLog:

#snmp:

```

- We can execute `mongo` to open the shell

```bash
C:\WINDOWS\system32>mongo
MongoDB shell version v4.0.5
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("303f8e62-03bf-4b2f-917f-3e3ac00a0a40") }
MongoDB server version: 4.0.5
Server has startup warnings:
2018-12-24T17:50:24.868+0000 I CONTROL  [initandlisten]
2018-12-24T17:50:24.868+0000 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-12-24T17:50:24.868+0000 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-12-24T17:50:24.869+0000 I CONTROL  [initandlisten]
---
Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
```

- We can execute `help` to see some insteresting commands from the `shell`

```bash
> help
        db.help()                    help on db methods
        db.mycoll.help()             help on collection methods
        sh.help()                    sharding helpers
        rs.help()                    replica set helpers
        help admin                   administrative help
        help connect                 connecting to a db help
        help keys                    key shortcuts
        help misc                    misc things to know
        help mr                      mapreduce

        show dbs                     show database names
        show collections             show collections in current database
        show users                   show users in current database
        show profile                 show most recent system.profile entries with time >= 1ms
        show logs                    show the accessible logger names
        show log [name]              prints out the last segment of log in memory, 'global' is default
        use <db_name>                set current database
        db.foo.find()                list objects in collection foo
        db.foo.find( { a : 1 } )     list objects in foo where a == 1
        it                           result of the last line evaluated; use to further iterate
        DBQuery.shellBatchSize = x   set default number of items to display on shell
        exit                         quit the mongo shell
```

```bash
> db.help()
DB methods:
        db.adminCommand(nameOrDocument) - switches to 'admin' db, and runs command [just calls db.runCommand(...)]
        db.aggregate([pipeline], {options}) - performs a collectionless aggregation on this database; returns a cursor
        db.auth(username, password)
        db.cloneDatabase(fromhost) - deprecated
        db.commandHelp(name) returns the help for the command
        db.copyDatabase(fromdb, todb, fromhost) - deprecated
        db.createCollection(name, {size: ..., capped: ..., max: ...})
        db.createView(name, viewOn, [{$operator: {...}}, ...], {viewOptions})
        db.createUser(userDocument)
        db.currentOp() displays currently executing operations in the db
        db.dropDatabase()
        db.eval() - deprecated
        db.fsyncLock() flush data to disk and lock server for backups
        db.fsyncUnlock() unlocks server following a db.fsyncLock()
        db.getCollection(cname) same as db['cname'] or db.cname
        db.getCollectionInfos([filter]) - returns a list that contains the names and options of the db's collections
        db.getCollectionNames()
        db.getLastError() - just returns the err msg string
        db.getLastErrorObj() - return full status object
        db.getLogComponents()
        db.getMongo() get the server connection object
        db.getMongo().setSlaveOk() allow queries on a replication slave server
        db.getName()
        db.getPrevError()
        db.getProfilingLevel() - deprecated
        db.getProfilingStatus() - returns if profiling is on and slow threshold
        db.getReplicationInfo()
        db.getSiblingDB(name) get the db at the same server as this one
        db.getWriteConcern() - returns the write concern used for any operations on this db, inherited from server object if set
        db.hostInfo() get details about the server's host
        db.isMaster() check replica primary status
        db.killOp(opid) kills the current operation in the db
        db.listCommands() lists all the db commands
        db.loadServerScripts() loads all the scripts in db.system.js
        db.logout()
        db.printCollectionStats()
        db.printReplicationInfo()
        db.printShardingStatus()
        db.printSlaveReplicationInfo()
        db.dropUser(username)
        db.repairDatabase()
        db.resetError()
        db.runCommand(cmdObj) run a database command.  if cmdObj is a string, turns it into {cmdObj: 1}
        db.serverStatus()
        db.setLogLevel(level,<component>)
        db.setProfilingLevel(level,slowms) 0=off 1=slow 2=all
        db.setWriteConcern(<write concern doc>) - sets the write concern for writes to the db
        db.unsetWriteConcern(<write concern doc>) - unsets the write concern for writes to the db
        db.setVerboseShell(flag) display extra information in shell output
        db.shutdownServer()
        db.stats()
        db.version() current version of the server
```

```bash
> db.mycoll.help()
DBCollection help
        db.mycoll.find().help() - show DBCursor help
        db.mycoll.bulkWrite( operations, <optional params> ) - bulk execute write operations, optional parameters are: w, wtimeout, j
        db.mycoll.count( query = {}, <optional params> ) - count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
        db.mycoll.countDocuments( query = {}, <optional params> ) - count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
        db.mycoll.estimatedDocumentCount( <optional params> ) - estimate the document count using collection metadata, optional parameters are: maxTimeMS
        db.mycoll.copyTo(newColl) - duplicates collection by copying all documents to newColl; no indexes are copied.
        db.mycoll.convertToCapped(maxBytes) - calls {convertToCapped:'mycoll', size:maxBytes}} command
        db.mycoll.createIndex(keypattern[,options])
        db.mycoll.createIndexes([keypatterns], <options>)
        db.mycoll.dataSize()
        db.mycoll.deleteOne( filter, <optional params> ) - delete first matching document, optional parameters are: w, wtimeout, j
        db.mycoll.deleteMany( filter, <optional params> ) - delete all matching documents, optional parameters are: w, wtimeout, j
        db.mycoll.distinct( key, query, <optional params> ) - e.g. db.mycoll.distinct( 'x' ), optional parameters are: maxTimeMS
        db.mycoll.drop() drop the collection
        db.mycoll.dropIndex(index) - e.g. db.mycoll.dropIndex( "indexName" ) or db.mycoll.dropIndex( { "indexKey" : 1 } )
        db.mycoll.dropIndexes()
        db.mycoll.ensureIndex(keypattern[,options]) - DEPRECATED, use createIndex() instead
        db.mycoll.explain().help() - show explain help
        db.mycoll.reIndex()
        db.mycoll.find([query],[fields]) - query is an optional query filter. fields is optional set of fields to return.
                                                      e.g. db.mycoll.find( {x:77} , {name:1, x:1} )
        db.mycoll.find(...).count()
        db.mycoll.find(...).limit(n)
        db.mycoll.find(...).skip(n)
        db.mycoll.find(...).sort(...)
        db.mycoll.findOne([query], [fields], [options], [readConcern])
        db.mycoll.findOneAndDelete( filter, <optional params> ) - delete first matching document, optional parameters are: projection, sort, maxTimeMS
        db.mycoll.findOneAndReplace( filter, replacement, <optional params> ) - replace first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
        db.mycoll.findOneAndUpdate( filter, update, <optional params> ) - update first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
        db.mycoll.getDB() get DB object associated with collection
        db.mycoll.getPlanCache() get query plan cache associated with collection
        db.mycoll.getIndexes()
        db.mycoll.group( { key : ..., initial: ..., reduce : ...[, cond: ...] } )
        db.mycoll.insert(obj)
        db.mycoll.insertOne( obj, <optional params> ) - insert a document, optional parameters are: w, wtimeout, j
        db.mycoll.insertMany( [objects], <optional params> ) - insert multiple documents, optional parameters are: w, wtimeout, j
        db.mycoll.mapReduce( mapFunction , reduceFunction , <optional params> )
        db.mycoll.aggregate( [pipeline], <optional params> ) - performs an aggregation on a collection; returns a cursor
        db.mycoll.remove(query)
        db.mycoll.replaceOne( filter, replacement, <optional params> ) - replace the first matching document, optional parameters are: upsert, w, wtimeout, j
        db.mycoll.renameCollection( newName , <dropTarget> ) renames the collection.
        db.mycoll.runCommand( name , <options> ) runs a db command with the given name where the first param is the collection name
        db.mycoll.save(obj)
        db.mycoll.stats({scale: N, indexDetails: true/false, indexDetailsKey: <index key>, indexDetailsName: <index name>})
        db.mycoll.storageSize() - includes free space allocated to this collection
        db.mycoll.totalIndexSize() - size in bytes of all the indexes
        db.mycoll.totalSize() - storage allocated for all data and indexes
        db.mycoll.update( query, object[, upsert_bool, multi_bool] ) - instead of two flags, you can pass an object with fields: upsert, multi
        db.mycoll.updateOne( filter, update, <optional params> ) - update the first matching document, optional parameters are: upsert, w, wtimeout, j
        db.mycoll.updateMany( filter, update, <optional params> ) - update all matching documents, optional parameters are: upsert, w, wtimeout, j
        db.mycoll.validate( <full> ) - SLOW
        db.mycoll.getShardVersion() - only for use with sharding
        db.mycoll.getShardDistribution() - prints statistics about data distribution in the cluster
        db.mycoll.getSplitKeysForChunks( <maxChunkSize> ) - calculates split points over all chunks and returns splitter function
        db.mycoll.getWriteConcern() - returns the write concern used for any operations on this collection, inherited from server/db if set
        db.mycoll.setWriteConcern( <write concern doc> ) - sets the write concern for writes to the collection
        db.mycoll.unsetWriteConcern( <write concern doc> ) - unsets the write concern for writes to the collection
        db.mycoll.latencyStats() - display operation latency histograms for this collection
```

## MongoDB Compass

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass.png)

- Click on `Try it Now`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass2.png)

- Click on `Download`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass3.png)

- Click on `Submit`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass4.png)

- Run the executable

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass5.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass6.png)

- Click `Start Using Compass`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass7.png)

- Click on `CONNECT`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass8.png)

- Create a new Database

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass9.png)

- Click on `CREATE DATABASE`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass10.png)

- Click on `CREATE DATABASE`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass11.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass12.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass13.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass14.png)

- Click on `INSERT`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass15.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass16.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass17.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass18.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Compass19.png)

## Diving Into Create Operations

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Create.png)

1. Overview

```bash
> use contactData
switched to db contactData
> db.persons.insertOne({name: "Max", age: 30, hobbies: ["sports","cooking"]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2a2a69fc4ac85faced0ac4")
}
> db.persons.insertOne({name: "Manuel", age: 31, hobbies: ["cars","cooking"]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2a2a8afc4ac85faced0ac5")
}
> db.persons.insertMany([{name: "Anna", age: 29, hobbies: ["sports","yoga"]}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c2a2ae5fc4ac85faced0ac6")
        ]
}
> db.persons.insertMany([{name: "Maria", age: 31},{name: "Chris", age: 25}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c2a2b15fc4ac85faced0ac7"),
                ObjectId("5c2a2b15fc4ac85faced0ac8")
        ]
}
> db.persons.insert({name: "Phil", age: 35})
WriteResult({ "nInserted" : 1 })
> db.persons.find().pretty()
{
        "_id" : ObjectId("5c2a2a69fc4ac85faced0ac4"),
        "name" : "Max",
        "age" : 30,
        "hobbies" : [
                "sports",
                "cooking"
        ]
}
{
        "_id" : ObjectId("5c2a2a8afc4ac85faced0ac5"),
        "name" : "Manuel",
        "age" : 31,
        "hobbies" : [
                "cars",
                "cooking"
        ]
}
{
        "_id" : ObjectId("5c2a2ae5fc4ac85faced0ac6"),
        "name" : "Anna",
        "age" : 29,
        "hobbies" : [
                "sports",
                "yoga"
        ]
}
{
        "_id" : ObjectId("5c2a2b15fc4ac85faced0ac7"),
        "name" : "Maria",
        "age" : 31
}
{
        "_id" : ObjectId("5c2a2b15fc4ac85faced0ac8"),
        "name" : "Chris",
        "age" : 25
}
{
        "_id" : ObjectId("5c2a2b5bfc4ac85faced0ac9"),
        "name" : "Phil",
        "age" : 35
}
> db.persons.insert([{name: "Sandeep", age: 28},{name: "Hans", age: 38}])
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 2,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
```

2. Using with own Ids

```bash
>  db.hobbies.insertMany([{_id: "sports", name: "sports"}, {_id: "cooking", name: "cooking"}, {_id: "cars", name: "cars"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                "sports",
                "cooking",
                "cars"
        ]
}
> db.hobbies.find().pretty()
{ "_id" : "sports", "name" : "sports" }
{ "_id" : "cooking", "name" : "cooking" }
{ "_id" : "cars", "name" : "cars" }
```

- A `duplicated` Id cannot be inserted, but everything inserted before the error is not reverted.

```bash
> db.hobbies.insertMany([{_id: "yoga", name: "yoga"}, {_id: "cooking", name: "cooking"}, {_id: "hiking", name: "hiking"}])
2018-12-31T14:57:54.756+0000 E QUERY    [js] BulkWriteError: write error at item 1 in bulk operation :
BulkWriteError({
        "writeErrors" : [
                {
                        "index" : 1,
                        "code" : 11000,
                        "errmsg" : "E11000 duplicate key error collection: contactData.hobbies index: _id_ dup key: { : \"cooking\" }",
                        "op" : {
                                "_id" : "cooking",
                                "name" : "cooking"
                        }
                }
        ],
        "writeConcernErrors" : [ ],
        "nInserted" : 1,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
BulkWriteError@src/mongo/shell/bulk_api.js:369:48
BulkWriteResult/this.toError@src/mongo/shell/bulk_api.js:333:24
Bulk/this.execute@src/mongo/shell/bulk_api.js:1173:1
DBCollection.prototype.insertMany@src/mongo/shell/crud_api.js:314:5
@(shell):1:1
> db.hobbies.find().pretty()
{ "_id" : "sports", "name" : "sports" }
{ "_id" : "cooking", "name" : "cooking" }
{ "_id" : "cars", "name" : "cars" }
{ "_id" : "yoga", "name" : "yoga" }
```

- We can change the default behaviour using the second parameter with `{ordered: false}`.

```bash
> db.hobbies.insertMany([{_id: "yoga", name: "yoga"}, {_id: "cooking", name: "cooking"}, {_id: "hiking", name: "hiking"}], {ordered: false})
2018-12-31T15:02:55.452+0000 E QUERY    [js] BulkWriteError: 2 write errors in bulk operation :
BulkWriteError({
        "writeErrors" : [
                {
                        "index" : 0,
                        "code" : 11000,
                        "errmsg" : "E11000 duplicate key error collection: contactData.hobbies index: _id_ dup key: { : \"yoga\" }",
                        "op" : {
                                "_id" : "yoga",
                                "name" : "yoga"
                        }
                },
                {
                        "index" : 1,
                        "code" : 11000,
                        "errmsg" : "E11000 duplicate key error collection: contactData.hobbies index: _id_ dup key: { : \"cooking\" }",
                        "op" : {
                                "_id" : "cooking",
                                "name" : "cooking"
                        }
                }
        ],
        "writeConcernErrors" : [ ],
        "nInserted" : 1,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
BulkWriteError@src/mongo/shell/bulk_api.js:369:48
BulkWriteResult/this.toError@src/mongo/shell/bulk_api.js:333:24
Bulk/this.execute@src/mongo/shell/bulk_api.js:1173:1
DBCollection.prototype.insertMany@src/mongo/shell/crud_api.js:314:5
@(shell):1:1
> db.hobbies.find().pretty()
{ "_id" : "sports", "name" : "sports" }
{ "_id" : "cooking", "name" : "cooking" }
{ "_id" : "cars", "name" : "cars" }
{ "_id" : "yoga", "name" : "yoga" }
{ "_id" : "hiking", "name" : "hiking" }
```

3. Understanding the `writeConcern`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Create2.png)

- It doesn't wait for any acknowledged
```bash
> db.persons.insertOne({name: "Chrissi", age: 41}, {writeConcern: {w: 0}})
{ "acknowledged" : false }
> db.persons.find().pretty()
{
        "_id" : ObjectId("5c2a2a69fc4ac85faced0ac4"),
        "name" : "Max",
        "age" : 30,
        "hobbies" : [
                "sports",
                "cooking"
        ]
}
{
        "_id" : ObjectId("5c2a2a8afc4ac85faced0ac5"),
        "name" : "Manuel",
        "age" : 31,
        "hobbies" : [
                "cars",
                "cooking"
        ]
}
{
        "_id" : ObjectId("5c2a2ae5fc4ac85faced0ac6"),
        "name" : "Anna",
        "age" : 29,
        "hobbies" : [
                "sports",
                "yoga"
        ]
}
{
        "_id" : ObjectId("5c2a2b15fc4ac85faced0ac7"),
        "name" : "Maria",
        "age" : 31
}
{
        "_id" : ObjectId("5c2a2b15fc4ac85faced0ac8"),
        "name" : "Chris",
        "age" : 25
}
{
        "_id" : ObjectId("5c2a2b5bfc4ac85faced0ac9"),
        "name" : "Phil",
        "age" : 35
}
{
        "_id" : ObjectId("5c2a2c4dfc4ac85faced0aca"),
        "name" : "Sandeep",
        "age" : 28
}
{
        "_id" : ObjectId("5c2a2c4dfc4ac85faced0acb"),
        "name" : "Hans",
        "age" : 38
}
{
        "_id" : ObjectId("5c2a3226fc4ac85faced0acc"),
        "name" : "Chrissi",
        "age" : 41
}
```

- Default behaviour (as if we don't put anything related to `writeConcern`)

```bash
> db.persons.insertOne({name: "Alex", age: 36}, {writeConcern: {w: 1}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2a3284fc4ac85faced0acd")
}
> db.persons.insertOne({name: "Michael", age: 51}, {writeConcern: {w: 1, j: false}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2a32a0fc4ac85faced0ace")
}
```

- We cannot notice the difference because we are locally and there is no other command running

```bash
> db.persons.insertOne({name: "Michaela", age: 50}, {writeConcern: {w: 1, j: true}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2a3316fc4ac85faced0acf")
}
> db.persons.findOne({name: "Michaela"})
{
        "_id" : ObjectId("5c2a3316fc4ac85faced0acf"),
        "name" : "Michaela",
        "age" : 50
}
> db.persons.insertOne({name: "Aliya", age: 22}, {writeConcern: {w: 1, j: true, wtimeout: 200}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2a33cbfc4ac85faced0ad0")
}
> db.persons.findOne({name: "Aliya"})
{
        "_id" : ObjectId("5c2a33cbfc4ac85faced0ad0"),
        "name" : "Aliya",
        "age" : 22
}
> db.persons.insertOne({name: "Amiya", age: 21}, {writeConcern: {w: 1, j: true, wtimeout: 1}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2a3407fc4ac85faced0ad1")
}
> db.persons.findOne({name: "Amiya"})
{
        "_id" : ObjectId("5c2a3407fc4ac85faced0ad1"),
        "name" : "Amiya",
        "age" : 21
}
```

4. What is `Atomicity`?

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Create3.png)

5. Importing Data

Execute the `mongoimport`  command to import:
- `tv-shows.json` - name of the file that contains the documents
- `-d` - Name of database 
- `-c` - name of the collection
- `--jsonArray` - It contains multiple documents
- `--drop` - Recreate it if it exists

```bash
C:\WINDOWS\system32>cd C:\Users\juan.pablo.perez\Downloads

C:\Users\juan.pablo.perez\Downloads>mongoimport
2018-12-31T15:46:09.240+0000    no collection specified
2018-12-31T15:46:09.248+0000    using filename '' as collection
2018-12-31T15:46:09.249+0000    error validating settings: invalid collection name: collection name cannot be an empty string
2018-12-31T15:46:09.257+0000    try 'mongoimport --help' for more information

C:\Users\juan.pablo.perez\Downloads>mongoimport tv-shows.json -d movieData -c movies --jsonArray --drop
2018-12-31T15:47:58.316+0000    connected to: localhost
2018-12-31T15:47:58.322+0000    dropping: movieData.movies
2018-12-31T15:47:59.418+0000    imported 240 documents
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Create4.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Create5.png)

## Read Opertions - A closer look

1. Overview
![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Read.png)

2. Operators

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Read2.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Read3.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Read4.png)

3. `findOne` and `find`

```bash
> db.movies.findOne()
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a4859c9"),
        "id" : 1,
        "url" : "http://www.tvmaze.com/shows/1/under-the-dome",
        "name" : "Under the Dome",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Drama",
                "Science-Fiction",
                "Thriller"
        ],
        "status" : "Ended",
        "runtime" : 60,
        "premiered" : "2013-06-24",
        "officialSite" : "http://www.cbs.com/shows/under-the-dome/",
        "schedule" : {
                "time" : "22:00",
                "days" : [
                        "Thursday"
                ]
        },
        "rating" : {
                "average" : 6.5
        },
        "weight" : 91,
        "network" : {
                "id" : 2,
                "name" : "CBS",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 25988,
                "thetvdb" : 264492,
                "imdb" : "tt1553656"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg"
        },
        "summary" : "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
        "updated" : 1529612668,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/1"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/185054"
                }
        }
}
```

```bash
> db.movies.find({_id: ObjectId("5c2a3a2fef2171fd1a4859c9") }).pretty()
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a4859c9"),
        "id" : 1,
        "url" : "http://www.tvmaze.com/shows/1/under-the-dome",
        "name" : "Under the Dome",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Drama",
                "Science-Fiction",
                "Thriller"
        ],
        "status" : "Ended",
        "runtime" : 60,
        "premiered" : "2013-06-24",
        "officialSite" : "http://www.cbs.com/shows/under-the-dome/",
        "schedule" : {
                "time" : "22:00",
                "days" : [
                        "Thursday"
                ]
        },
        "rating" : {
                "average" : 6.5
        },
        "weight" : 91,
        "network" : {
                "id" : 2,
                "name" : "CBS",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 25988,
                "thetvdb" : 264492,
                "imdb" : "tt1553656"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg"
        },
        "summary" : "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
        "updated" : 1529612668,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/1"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/185054"
                }
        }
}
```

- The criteria is `case sensitive`
```bash
> db.movies.find({ name: "The last ship" }).pretty()
> db.movies.find({ name: "The Last Ship" })
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859dc"), "id" : 21, "url" : "http://www.tvmaze.com/shows/21/the-last-ship", "name" : "The Last Ship", "type" : "Scripted", "language" : "English", "genres" : [ "Drama", "Action", "Thriller" ], "status" : "Running", "runtime" : 60, "premiered" : "2014-06-22", "officialSite" : "http://www.tntdrama.com/shows/the-last-ship", "schedule" : { "time" : "21:00", "days" : [ "Sunday" ] }, "rating" : { "average" : 7.8 }, "weight" : 100, "network" : { "id" : 14, "name" : "TNT", "country" : { "name" : "United States", "code" : "US", "timezone" : "America/New_York" } }, "webChannel" : null, "externals" : { "tvrage" : 33158, "thetvdb" : 269533, "imdb" : "tt2402207" }, "image" : { "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/164/412464.jpg", "original" : "http://static.tvmaze.com/uploads/images/original_untouched/164/412464.jpg" }, "summary" : "<p>Their mission is simple: Find a cure. Stop the virus. Save the world. When a global pandemic wipes out eighty percent of the planet's population, the crew of a lone naval destroyer must find a way to pull humanity from the brink of extinction.</p>", "updated" : 1536575637, "_links" : { "self" : { "href" : "http://api.tvmaze.com/shows/21" }, "previousepisode" : { "href" : "http://api.tvmaze.com/episodes/1499133" }, "nextepisode" : { "href" : "http://api.tvmaze.com/episodes/1499134" } } }
>
```

4. Working with Comparison Operators

- We can find all the information in [Query and Projection Operators](https://docs.mongodb.com/manual/reference/operator/query/).

```bash
> db.movies.find({ runtime: {$ne: 60 }}).pretty()
.
.
.
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a485a20"),
        "id" : 92,
        "url" : "http://www.tvmaze.com/shows/92/a-to-z",
        "name" : "A to Z",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Comedy",
                "Romance"
        ],
        "status" : "Ended",
        "runtime" : 30,
        "premiered" : "2014-10-02",
        "officialSite" : null,
        "schedule" : {
                "time" : "21:30",
                "days" : [
                        "Thursday"
                ]
        },
        "rating" : {
                "average" : 6.9
        },
        "weight" : 0,
        "network" : {
                "id" : 1,
                "name" : "NBC",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 37968,
                "thetvdb" : 281588,
                "imdb" : "tt3216682"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/0/679.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/0/679.jpg"
        },
        "summary" : "<p>This is the <b>A to Z</b> story of Andrew and Zelda - a pair that almost wasn't - and all that happened from the day they met. Andrew has always been a secret romantic... not above crooning to Celine Dion while driving to work, with dreams of finding \"the one.\" He imagines her to be just like that shimmering beauty he spotted that night in that silver dress at that concert two years ago. Zelda, having grown up with a hippie mom who believed the universe would provide for everything, rebelled into a no-nonsense practical lawyer who prefers the control of online dating. But when a computer glitch sends her a total mismatch, she's asked to come in for an interview at the Internet dating site where Andrew works, and this is where it all begins. Andrew and Zelda meet for the first time and despite their differences, sparks fly. She thinks it's chance. He thinks it's fate. After all, he's convinced she's the shimmering girl in the silver dress. Is it true love forever or just a detour in destiny?</p>",
        "updated" : 1477162055,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/92"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/117558"
                }
        }
}
Type "it" for more
```
5. Querying Embedded Fields & Arrays

```bash
> db.movies.find({ "rating.average": {$gt: 7 }}).pretty()
.
.
.
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a4859df"),
        "id" : 24,
        "url" : "http://www.tvmaze.com/shows/24/hawaii-five-0",
        "name" : "Hawaii Five-0",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Drama",
                "Action",
                "Crime"
        ],
        "status" : "Running",
        "runtime" : 60,
        "premiered" : "2010-09-20",
        "officialSite" : "http://www.cbs.com/shows/hawaii_five_0/",
        "schedule" : {
                "time" : "21:00",
                "days" : [
                        "Friday"
                ]
        },
        "rating" : {
                "average" : 7.9
        },
        "weight" : 98,
        "network" : {
                "id" : 2,
                "name" : "CBS",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 24840,
                "thetvdb" : 164541,
                "imdb" : "tt1600194"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/135/337500.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/135/337500.jpg"
        },
        "summary" : "<p><b>Hawaii Five-0</b> is a contemporary take on the classic series about a new elite federalized task force whose mission is to wipe out the crime that washes up on the Islands' sun-drenched beaches. Detective Steve McGarrett, a decorated Naval officer-turned-cop, returned to Oahu to investigate his father's murder and stayed after Hawaii's former governor persuaded him to head up the new team: his rules, no red tape and full blanket authority to hunt down the biggest \"game\" in town. Joining McGarrett is Detective Danny \"Danno\" Williams, a relocated ex-New Jersey cop - a working man in paradise who prefers skyscrapers to the coastline - but who's committed to keeping the Islands safe for his young daughter; Chin Ho Kelly, an ex-Honolulu police detective and former protégé of McGarrett's father who was wrongly accused of corruption; Dr. Max Bergman, the quirky coroner; Chin's cousin, Kono Kalakaua, a beautiful and fearless native; and Captain Lou Grover, who formerly headed Hawaii's SWAT unit. Joining them is Jerry Ortega, a former classmate of Chin's and the Island's local conspiracy theorist. The state's brash FIVE-0 unit, who may spar and jest among themselves, remain determined to eliminate the seedy elements from the 50th state.</p>",
        "updated" : 1536292815,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/24"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/1431738"
                },
                "nextepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/1494027"
                }
        }
}
Type "it" for more
```

- Look for all the ones which one of the `genres` is `Drama`

```bash
db.movies.find({ genres: "Drama" }).pretty()
.
.
.
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a4859df"),
        "id" : 24,
        "url" : "http://www.tvmaze.com/shows/24/hawaii-five-0",
        "name" : "Hawaii Five-0",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Drama",
                "Action",
                "Crime"
        ],
        "status" : "Running",
        "runtime" : 60,
        "premiered" : "2010-09-20",
        "officialSite" : "http://www.cbs.com/shows/hawaii_five_0/",
        "schedule" : {
                "time" : "21:00",
                "days" : [
                        "Friday"
                ]
        },
        "rating" : {
                "average" : 7.9
        },
        "weight" : 98,
        "network" : {
                "id" : 2,
                "name" : "CBS",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 24840,
                "thetvdb" : 164541,
                "imdb" : "tt1600194"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/135/337500.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/135/337500.jpg"
        },
        "summary" : "<p><b>Hawaii Five-0</b> is a contemporary take on the classic series about a new elite federalized task force whose mission is to wipe out the crime that washes up on the Islands' sun-drenched beaches. Detective Steve McGarrett, a decorated Naval officer-turned-cop, returned to Oahu to investigate his father's murder and stayed after Hawaii's former governor persuaded him to head up the new team: his rules, no red tape and full blanket authority to hunt down the biggest \"game\" in town. Joining McGarrett is Detective Danny \"Danno\" Williams, a relocated ex-New Jersey cop - a working man in paradise who prefers skyscrapers to the coastline - but who's committed to keeping the Islands safe for his young daughter; Chin Ho Kelly, an ex-Honolulu police detective and former protégé of McGarrett's father who was wrongly accused of corruption; Dr. Max Bergman, the quirky coroner; Chin's cousin, Kono Kalakaua, a beautiful and fearless native; and Captain Lou Grover, who formerly headed Hawaii's SWAT unit. Joining them is Jerry Ortega, a former classmate of Chin's and the Island's local conspiracy theorist. The state's brash FIVE-0 unit, who may spar and jest among themselves, remain determined to eliminate the seedy elements from the 50th state.</p>",
        "updated" : 1536292815,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/24"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/1431738"
                },
                "nextepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/1494027"
                }
        }
}
Type "it" for more
```

- Look for all the ones which only have the `Drama` `genres`

```bash
> db.movies.find({ genres: ["Drama"] }).pretty()
.
.
.
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a485ab0"),
        "id" : 242,
        "url" : "http://www.tvmaze.com/shows/242/the-great-fire",
        "name" : "The Great Fire",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Drama"
        ],
        "status" : "Ended",
        "runtime" : 60,
        "premiered" : "2014-10-16",
        "officialSite" : null,
        "schedule" : {
                "time" : "21:00",
                "days" : [
                        "Thursday"
                ]
        },
        "rating" : {
                "average" : null
        },
        "weight" : 0,
        "network" : {
                "id" : 35,
                "name" : "ITV",
                "country" : {
                        "name" : "United Kingdom",
                        "code" : "GB",
                        "timezone" : "Europe/London"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 43397,
                "thetvdb" : 286969,
                "imdb" : "tt3629782"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/1/4358.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/1/4358.jpg"
        },
        "summary" : "<p>As the great fire tears London apart, this brand new epic drama details the heart-wrenching stories of a city and its people in crisis.</p>",
        "updated" : 1504806814,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/242"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/15829"
                }
        }
}
```

6. Understanding `$in` and `$nin`

- `runtime` is either `30` or `32`
```bash
> db.movies.find({ runtime: {$in: [30, 32]} }).pretty()
.
.
.
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a485a36"),
        "id" : 115,
        "url" : "http://www.tvmaze.com/shows/115/king-of-the-hill",
        "name" : "King of the Hill",
        "type" : "Animation",
        "language" : "English",
        "genres" : [
                "Comedy"
        ],
        "status" : "Ended",
        "runtime" : 30,
        "premiered" : "1997-01-12",
        "officialSite" : null,
        "schedule" : {
                "time" : "20:30",
                "days" : [
                        "Sunday"
                ]
        },
        "rating" : {
                "average" : 8.5
        },
        "weight" : 86,
        "network" : {
                "id" : 4,
                "name" : "FOX",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 4134,
                "thetvdb" : 73903,
                "imdb" : "tt0118375"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/45/113875.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/45/113875.jpg"
        },
        "summary" : "<p><b>King of the Hill</b> follows the life of Hank Hill, his wife Peggy, their 13-year-old son Bobby, their 18-year-old niece Luanne, her husband Lucky, their newborn baby girl Gracie and his beer guzzling neighborhood buddies, Dale, Bill and Boomhauer.</p>",
        "updated" : 1528313620,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/115"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/8872"
                }
        }
}
Type "it" for more
```
- `runtime` is neither `30` nor `32`
```bash
> db.movies.find({ runtime: {$nin: [30, 32]} }).pretty()
.
.
.
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a4859dc"),
        "id" : 21,
        "url" : "http://www.tvmaze.com/shows/21/the-last-ship",
        "name" : "The Last Ship",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Drama",
                "Action",
                "Thriller"
        ],
        "status" : "Running",
        "runtime" : 60,
        "premiered" : "2014-06-22",
        "officialSite" : "http://www.tntdrama.com/shows/the-last-ship",
        "schedule" : {
                "time" : "21:00",
                "days" : [
                        "Sunday"
                ]
        },
        "rating" : {
                "average" : 7.8
        },
        "weight" : 100,
        "network" : {
                "id" : 14,
                "name" : "TNT",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 33158,
                "thetvdb" : 269533,
                "imdb" : "tt2402207"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/164/412464.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/164/412464.jpg"
        },
        "summary" : "<p>Their mission is simple: Find a cure. Stop the virus. Save the world. When a global pandemic wipes out eighty percent of the planet's population, the crew of a lone naval destroyer must find a way to pull humanity from the brink of extinction.</p>",
        "updated" : 1536575637,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/21"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/1499133"
                },
                "nextepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/1499134"
                }
        }
}
Type "it" for more
``` 
7. `$or` and `$nor`

- All documents where `rating` is `lower than 3` or `greater then 9`

```bash
> db.movies.find({ "rating.average": {$lt: 5} }).count()
2
> db.movies.find({ "rating.average": {$gt: 9.3} }).count()
2
> db.movies.find({$or: [{"rating.average": {$lt: 5}},{"rating.average": {$gt: 9.3}}] }).count()
4
```

- All documents where `rating` is neither `lower than 3` nor `greater then 9`

```bash
> db.movies.find({$nor: [{"rating.average": {$lt: 5}},{"rating.average": {$gt: 9.3}}] }).count()
236
> db.movies.find().count()
240
```

8. Understanding the `$and` Operator

- All documents where `rating` is `greater than 9` and has `Drama` as a `genres`

```bash
> db.movies.find({$and: [{"rating.average": {$gt: 9}},{genres: "Drama"}] }).count()
3
```

- Another way of getting the same result
```bash
> db.movies.find({"rating.average": {$gt: 9},genres: "Drama"}).count()
3
```

- This is not valid because the second value replaces the first one:
```bash
> db.movies.find({genres: "Drama", genres: "Horror"}).count()
23
```
- So, we have to use:
```bash
> db.movies.find({$and: [{genres: "Drama"}, {genres: "Horror"}]}).count()
17
```

9. Using `$not`

- All documents where `runtime` is `equal to 60`.
```bash
> db.movies.find({runtime: {$not: {$eq: 60}}}).count()
70
> db.movies.find({runtime: {$eq: 60}}).count()
170
```

- It is the same as:
```bash
> db.movies.find({runtime: {$ne: 60}}).count()
70
```

10.  Diving Into Element Operators

```bash
> use user
switched to db user
> db.users.insertMany([{name: "Max", hobbies: [{title: "Sports", frequency: 3},{title: "Cooking", frequency: 6}], phone: 0131782734}, {name: "Manuel", hobbies: [{title: "Cooking", frequency: 5 },{title: "Cars", frequency: 2 }], phone: "012177972", age: 30}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c2b171367f51a60f5c07715"),
                ObjectId("5c2b171367f51a60f5c07716")
        ]
}
> db.users.find().pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
{
        "_id" : ObjectId("5c2b171367f51a60f5c07716"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cooking",
                        "frequency" : 5
                },
                {
                        "title" : "Cars",
                        "frequency" : 2
                }
        ],
        "phone" : "012177972",
        "age" : 30
}
```

- Find all persons who have an `age` field and without one.

```bash
> db.users.find({age: {$exists: true}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07716"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cooking",
                        "frequency" : 5
                },
                {
                        "title" : "Cars",
                        "frequency" : 2
                }
        ],
        "phone" : "012177972",
        "age" : 30
}
> db.users.find({age: {$exists: false}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
> db.users.find({age: {$exists: true, $gt: 30}}).pretty()
> db.users.find({age: {$exists: true, $eq: 30}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07716"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cooking",
                        "frequency" : 5
                },
                {
                        "title" : "Cars",
                        "frequency" : 2
                }
        ],
        "phone" : "012177972",
        "age" : 30
}
```

```bash
> db.users.insertOne({name: "Anna", hobbies: [{title: "Sports", frequency: 2},{title: "Yoga", frequency: 3}], phone: "80811987291", age: null})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2b187367f51a60f5c07717")
}
> db.users.find({age: {$exists: true}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07716"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cooking",
                        "frequency" : 5
                },
                {
                        "title" : "Cars",
                        "frequency" : 2
                }
        ],
        "phone" : "012177972",
        "age" : 30
}
{
        "_id" : ObjectId("5c2b187367f51a60f5c07717"),
        "name" : "Anna",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 2
                },
                {
                        "title" : "Yoga",
                        "frequency" : 3
                }
        ],
        "phone" : "80811987291",
        "age" : null
}
> db.users.find({age: {$exists: true, $ne: null}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07716"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cooking",
                        "frequency" : 5
                },
                {
                        "title" : "Cars",
                        "frequency" : 2
                }
        ],
        "phone" : "012177972",
        "age" : 30
}
```

10.  Working with `$type`

- All users with the type of phone number is a `number`

```bash
> db.users.find({phone: {$type: "number"}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
> db.users.find({phone: {$type: "double"}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
```

```bash
> db.users.find({phone: {$type: ["double","string"]}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
{
        "_id" : ObjectId("5c2b171367f51a60f5c07716"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cooking",
                        "frequency" : 5
                },
                {
                        "title" : "Cars",
                        "frequency" : 2
                }
        ],
        "phone" : "012177972",
        "age" : 30
}
{
        "_id" : ObjectId("5c2b187367f51a60f5c07717"),
        "name" : "Anna",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 2
                },
                {
                        "title" : "Yoga",
                        "frequency" : 3
                }
        ],
        "phone" : "80811987291",
        "age" : null
}
```
```bash
> db.users.find({phone: {$not: {$type: "double"}}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07716"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cooking",
                        "frequency" : 5
                },
                {
                        "title" : "Cars",
                        "frequency" : 2
                }
        ],
        "phone" : "012177972",
        "age" : 30
}
{
        "_id" : ObjectId("5c2b187367f51a60f5c07717"),
        "name" : "Anna",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 2
                },
                {
                        "title" : "Yoga",
                        "frequency" : 3
                }
        ],
        "phone" : "80811987291",
        "age" : null
}
```

11. Understanding the `$regex` Evaluation Operators

```bash
> db.movies.find({summary: {$regex: /musical/}}).pretty()
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a4859d0"),
        "id" : 8,
        "url" : "http://www.tvmaze.com/shows/8/glee",
        "name" : "Glee",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Drama",
                "Music",
                "Romance"
        ],
        "status" : "Ended",
        "runtime" : 60,
        "premiered" : "2009-05-19",
        "officialSite" : "http://www.fox.com/glee",
        "schedule" : {
                "time" : "21:00",
                "days" : [
                        "Tuesday"
                ]
        },
        "rating" : {
                "average" : 6.7
        },
        "weight" : 71,
        "network" : {
                "id" : 4,
                "name" : "FOX",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 21704,
                "thetvdb" : 83610,
                "imdb" : "tt1327801"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg"
        },
        "summary" : "<p><b>Glee </b>is a musical comedy about a group of ambitious and talented young adults in search of strength, acceptance and, ultimately, their voice.</p>",
        "updated" : 1536145055,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/8"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/142185"
                }
        }
}
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a485ab8"),
        "id" : 243,
        "url" : "http://www.tvmaze.com/shows/243/conan",
        "name" : "Conan",
        "type" : "Talk Show",
        "language" : "English",
        "genres" : [
                "Comedy"
        ],
        "status" : "Running",
        "runtime" : 60,
        "premiered" : "2010-11-08",
        "officialSite" : "http://teamcoco.com/schedule",
        "schedule" : {
                "time" : "23:00",
                "days" : [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday"
                ]
        },
        "rating" : {
                "average" : 7.6
        },
        "weight" : 96,
        "network" : {
                "id" : 32,
                "name" : "TBS",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 25927,
                "thetvdb" : 194751,
                "imdb" : "tt1637574"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/1/4583.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/1/4583.jpg"
        },
        "summary" : "<p>The biggest celebrities, the hottest musical guests, the craziest sketches... and Andy Richter, to boot? Yes, some would say Conan O'Brien's talk show on TBS has everything a late night viewer could want.</p>",
        "updated" : 1535637041,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/243"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/1518767"
                }
        }
}
```

12. Understanding the `$expr` Evaluation Operators

```bash
> use finalcialData
switched to db finalcialData
> db.sales.insertMany([{volume: 100, target: 120},{volume: 89, target: 80},{volume: 200, target: 177}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c2b1d2f67f51a60f5c07718"),
                ObjectId("5c2b1d2f67f51a60f5c07719"),
                ObjectId("5c2b1d2f67f51a60f5c0771a")
        ]
}
> db.sales.find().pretty()
{
        "_id" : ObjectId("5c2b1d2f67f51a60f5c07718"),
        "volume" : 100,
        "target" : 120
}
{
        "_id" : ObjectId("5c2b1d2f67f51a60f5c07719"),
        "volume" : 89,
        "target" : 80
}
{
        "_id" : ObjectId("5c2b1d2f67f51a60f5c0771a"),
        "volume" : 200,
        "target" : 177
}
```
- All documents with the `volume` above the `target`

```bash
> db.sales.find({$expr: {$gt: ["$volume","$target"]}}).pretty()
{
        "_id" : ObjectId("5c2b1d2f67f51a60f5c07719"),
        "volume" : 89,
        "target" : 80
}
{
        "_id" : ObjectId("5c2b1d2f67f51a60f5c0771a"),
        "volume" : 200,
        "target" : 177
}
```

```bash
> db.sales.find({$expr: {$gt: ["$volume",99]}}).pretty()
{
        "_id" : ObjectId("5c2b1d2f67f51a60f5c07718"),
        "volume" : 100,
        "target" : 120
}
{
        "_id" : ObjectId("5c2b1d2f67f51a60f5c0771a"),
        "volume" : 200,
        "target" : 177
}
```

```bash
> db.sales.find({$expr: {$gt: [{$cond: {if: {$gte: ["$volume",190]}, then: {$subtract: ["$volume",10]}, else: "$volume"}}, "$target"]}}).pretty()
{
        "_id" : ObjectId("5c2b1d2f67f51a60f5c07719"),
        "volume" : 89,
        "target" : 80
}
{
        "_id" : ObjectId("5c2b1d2f67f51a60f5c0771a"),
        "volume" : 200,
        "target" : 177
}
> db.sales.find({$expr: {$gt: [{$cond: {if: {$gte: ["$volume",190]}, then: {$subtract: ["$volume",30]}, else: "$volume"}}, "$target"]}}).pretty()
{
        "_id" : ObjectId("5c2b1d2f67f51a60f5c07719"),
        "volume" : 89,
        "target" : 80
}
```

13. Assigment - Read Operations

- Import Data
```bash
C:\Users\juan.pablo.perez\Downloads>mongoimport boxoffice.json -d boxOffice -c movieStarts --jsonArray --drop
2019-01-01T08:44:59.495+0000    connected to: localhost
2019-01-01T08:44:59.499+0000    dropping: boxOffice.movieStarts
2019-01-01T08:45:00.560+0000    imported 3 documents
```
```bash
> db.movieStarts.find().pretty()
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4b"),
        "title" : "Supercharged Teaching",
        "meta" : {
                "rating" : 9.3,
                "aired" : 2016,
                "runtime" : 60
        },
        "visitors" : 370000,
        "expectedVisitors" : 1000000,
        "genre" : [
                "thriller",
                "action"
        ]
}
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4c"),
        "title" : "Teach me if you can",
        "meta" : {
                "rating" : 8.5,
                "aired" : 2014,
                "runtime" : 90
        },
        "visitors" : 590378,
        "expectedVisitors" : 500000,
        "genre" : [
                "action",
                "thriller"
        ]
}
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4d"),
        "title" : "The Last Student Returns",
        "meta" : {
                "rating" : 9.5,
                "aired" : 2018,
                "runtime" : 100
        },
        "visitors" : 1300000,
        "expectedVisitors" : 1550000,
        "genre" : [
                "thriller",
                "drama",
                "action"
        ]
}
```
- Search all movies that have a rating higher then 9.2 and a runtime lower than 100 minutes
```bash
> db.movieStarts.find({$and: [{"meta.rating": {$gt: 9.2}},{"meta.runtime": {$lt: 100}}] }).pretty()
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4b"),
        "title" : "Supercharged Teaching",
        "meta" : {
                "rating" : 9.3,
                "aired" : 2016,
                "runtime" : 60
        },
        "visitors" : 370000,
        "expectedVisitors" : 1000000,
        "genre" : [
                "thriller",
                "action"
        ]
}
```
- Search all movies that have a genre of "drama" or "action"
```bash
> db.movieStarts.find({$or: [{genre: "drama"}, {genre: "action"}]}).pretty()
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4b"),
        "title" : "Supercharged Teaching",
        "meta" : {
                "rating" : 9.3,
                "aired" : 2016,
                "runtime" : 60
        },
        "visitors" : 370000,
        "expectedVisitors" : 1000000,
        "genre" : [
                "thriller",
                "action"
        ]
}
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4c"),
        "title" : "Teach me if you can",
        "meta" : {
                "rating" : 8.5,
                "aired" : 2014,
                "runtime" : 90
        },
        "visitors" : 590378,
        "expectedVisitors" : 500000,
        "genre" : [
                "action",
                "thriller"
        ]
}
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4d"),
        "title" : "The Last Student Returns",
        "meta" : {
                "rating" : 9.5,
                "aired" : 2018,
                "runtime" : 100
        },
        "visitors" : 1300000,
        "expectedVisitors" : 1550000,
        "genre" : [
                "thriller",
                "drama",
                "action"
        ]
}
```
- Search all movies where visitors exceeded expectedVisitors
```bash
> db.movieStarts.find({$expr: {$gt: ["$visitors","$expectedVisitors"]}}).pretty()
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4c"),
        "title" : "Teach me if you can",
        "meta" : {
                "rating" : 8.5,
                "aired" : 2014,
                "runtime" : 90
        },
        "visitors" : 590378,
        "expectedVisitors" : 500000,
        "genre" : [
                "action",
                "thriller"
        ]
}
```

14. Diving Deeper Into Querying Arrays

```bash
>  db.users.find({"hobbies.title": "Sports"}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
{
        "_id" : ObjectId("5c2b187367f51a60f5c07717"),
        "name" : "Anna",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 2
                },
                {
                        "title" : "Yoga",
                        "frequency" : 3
                }
        ],
        "phone" : "80811987291",
        "age" : null
}
```

15. Using Array Query Selectors - `$size`

```bash
> db.users.insertOne({name: "Chris", hobbies: ["Sports","Cooking","Hiking"] })
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2b2fee67f51a60f5c0771b")
}
> db.users.find().pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
{
        "_id" : ObjectId("5c2b171367f51a60f5c07716"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cooking",
                        "frequency" : 5
                },
                {
                        "title" : "Cars",
                        "frequency" : 2
                }
        ],
        "phone" : "012177972",
        "age" : 30
}
{
        "_id" : ObjectId("5c2b187367f51a60f5c07717"),
        "name" : "Anna",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 2
                },
                {
                        "title" : "Yoga",
                        "frequency" : 3
                }
        ],
        "phone" : "80811987291",
        "age" : null
}
{
        "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"),
        "name" : "Chris",
        "hobbies" : [
                "Sports",
                "Cooking",
                "Hiking"
        ]
}
```

- All users that have 3 `hobbies`
```bash
> db.users.find({hobbies: {$size: 3}}).pretty()
{
        "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"),
        "name" : "Chris",
        "hobbies" : [
                "Sports",
                "Cooking",
                "Hiking"
        ]
}
> db.users.find({hobbies: {$size: 2}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
{
        "_id" : ObjectId("5c2b171367f51a60f5c07716"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cooking",
                        "frequency" : 5
                },
                {
                        "title" : "Cars",
                        "frequency" : 2
                }
        ],
        "phone" : "012177972",
        "age" : 30
}
{
        "_id" : ObjectId("5c2b187367f51a60f5c07717"),
        "name" : "Anna",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 2
                },
                {
                        "title" : "Yoga",
                        "frequency" : 3
                }
        ],
        "phone" : "80811987291",
        "age" : null
}
```

16. Using Array Query Selectors - `$all`

- Search all `movies` that have `genre` of both `action` and `thriller`

- This doesn't work because the order matters
```bash
> use boxOffice
switched to db boxOffice
> show collections
movieStarts
> db.movieStarts.find({genre: ["action","thriller"]}).pretty()
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4c"),
        "title" : "Teach me if you can",
        "meta" : {
                "rating" : 8.5,
                "aired" : 2014,
                "runtime" : 90
        },
        "visitors" : 590378,
        "expectedVisitors" : 500000,
        "genre" : [
                "action",
                "thriller"
        ]
}
```
- We have to use:
```bash
> db.movieStarts.find({genre: {$all: ["action","thriller"]}}).pretty()
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4b"),
        "title" : "Supercharged Teaching",
        "meta" : {
                "rating" : 9.3,
                "aired" : 2016,
                "runtime" : 60
        },
        "visitors" : 370000,
        "expectedVisitors" : 1000000,
        "genre" : [
                "thriller",
                "action"
        ]
}
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4c"),
        "title" : "Teach me if you can",
        "meta" : {
                "rating" : 8.5,
                "aired" : 2014,
                "runtime" : 90
        },
        "visitors" : 590378,
        "expectedVisitors" : 500000,
        "genre" : [
                "action",
                "thriller"
        ]
}
{
        "_id" : ObjectId("5c2b288cef2171fd1a488c4d"),
        "title" : "The Last Student Returns",
        "meta" : {
                "rating" : 9.5,
                "aired" : 2018,
                "runtime" : 100
        },
        "visitors" : 1300000,
        "expectedVisitors" : 1550000,
        "genre" : [
                "thriller",
                "drama",
                "action"
        ]
}
```

17. Using Array Query Selectors - `$elemMatch`

- users who have a hobby of `Sports` and its frequency equal or greather than `3`
- This approach doesn't work because it does look for all the frequencies, not just for the `Sport` one,
```bash
> db.users.find({$and: [{"hobbies.title": "Sports"},{"hobbies.frequency": {$gte: 3}}]}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
{
        "_id" : ObjectId("5c2b187367f51a60f5c07717"),
        "name" : "Anna",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 2
                },
                {
                        "title" : "Yoga",
                        "frequency" : 3
                }
        ],
        "phone" : "80811987291",
        "age" : null
}
```

- We have to use:
```bash
> db.users.find({hobbies: {$elemMatch: {title: "Sports",frequency: {$gte: 3}}}}).pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
```

18. Assignment - Array Query Selectors

- Import 
```bash
C:\Users\juan.pablo.perez\Downloads>mongoimport boxoffice-extended.json -d boxOffice -c exmovieStarts --jsonArray --drop
2019-01-01T09:47:23.679+0000    connected to: localhost
2019-01-01T09:47:23.689+0000    dropping: boxOffice.exmovieStarts
2019-01-01T09:47:24.775+0000    imported 3 documents
```

```bash
> db.exmovieStarts.find().pretty()
{
        "_id" : ObjectId("5c2b372cef2171fd1a488f97"),
        "title" : "Teach me if you can",
        "meta" : {
                "rating" : 8,
                "aired" : 2014,
                "runtime" : 90
        },
        "visitors" : 590378,
        "expectedVisitors" : 500000,
        "genre" : [
                "action",
                "thriller"
        ],
        "ratings" : [
                8,
                8
        ]
}
{
        "_id" : ObjectId("5c2b372cef2171fd1a488f98"),
        "title" : "Supercharged Teaching",
        "meta" : {
                "rating" : 9.3,
                "aired" : 2016,
                "runtime" : 60
        },
        "visitors" : 370000,
        "expectedVisitors" : 1000000,
        "genre" : [
                "thriller",
                "action"
        ],
        "ratings" : [
                10,
                9,
                9
        ]
}
{
        "_id" : ObjectId("5c2b372cef2171fd1a488f99"),
        "title" : "The Last Student Returns",
        "meta" : {
                "rating" : 9.5,
                "aired" : 2018,
                "runtime" : 100
        },
        "visitors" : 1300000,
        "expectedVisitors" : 1550000,
        "genre" : [
                "thriller",
                "drama",
                "action"
        ],
        "ratings" : [
                10,
                9
        ]
}
```
- Find all movies with exactly two genres
```bash
> db.exmovieStarts.find({genre: {$size: 2}}).pretty()
{
        "_id" : ObjectId("5c2b372cef2171fd1a488f97"),
        "title" : "Teach me if you can",
        "meta" : {
                "rating" : 8,
                "aired" : 2014,
                "runtime" : 90
        },
        "visitors" : 590378,
        "expectedVisitors" : 500000,
        "genre" : [
                "action",
                "thriller"
        ],
        "ratings" : [
                8,
                8
        ]
}
{
        "_id" : ObjectId("5c2b372cef2171fd1a488f98"),
        "title" : "Supercharged Teaching",
        "meta" : {
                "rating" : 9.3,
                "aired" : 2016,
                "runtime" : 60
        },
        "visitors" : 370000,
        "expectedVisitors" : 1000000,
        "genre" : [
                "thriller",
                "action"
        ],
        "ratings" : [
                10,
                9,
                9
        ]
}
```
- Find all movies aired in 2018
```bash
> db.exmovieStarts.find({"meta.aired": 2018 }).pretty()
{
        "_id" : ObjectId("5c2b372cef2171fd1a488f99"),
        "title" : "The Last Student Returns",
        "meta" : {
                "rating" : 9.5,
                "aired" : 2018,
                "runtime" : 100
        },
        "visitors" : 1300000,
        "expectedVisitors" : 1550000,
        "genre" : [
                "thriller",
                "drama",
                "action"
        ],
        "ratings" : [
                10,
                9
        ]
}
```
- Find all movies which have ratings greater than 8 but lower than 10

```bash
> db.exmovieStarts.find({ratings: {$elemMatch: {$gt:8, $lt:10}}}).pretty()
{
        "_id" : ObjectId("5c2b372cef2171fd1a488f98"),
        "title" : "Supercharged Teaching",
        "meta" : {
                "rating" : 9.3,
                "aired" : 2016,
                "runtime" : 60
        },
        "visitors" : 370000,
        "expectedVisitors" : 1000000,
        "genre" : [
                "thriller",
                "action"
        ],
        "ratings" : [
                10,
                9,
                9
        ]
}
{
        "_id" : ObjectId("5c2b372cef2171fd1a488f99"),
        "title" : "The Last Student Returns",
        "meta" : {
                "rating" : 9.5,
                "aired" : 2018,
                "runtime" : 100
        },
        "visitors" : 1300000,
        "expectedVisitors" : 1550000,
        "genre" : [
                "thriller",
                "drama",
                "action"
        ],
        "ratings" : [
                10,
                9
        ]
}
```
- Another solution:
```bash
> db.exmovieStarts.find({$and:[{ratings: {$gt: 8}},{ratings: {$lt:10}}]}).pretty()
{
        "_id" : ObjectId("5c2b372cef2171fd1a488f98"),
        "title" : "Supercharged Teaching",
        "meta" : {
                "rating" : 9.3,
                "aired" : 2016,
                "runtime" : 60
        },
        "visitors" : 370000,
        "expectedVisitors" : 1000000,
        "genre" : [
                "thriller",
                "action"
        ],
        "ratings" : [
                10,
                9,
                9
        ]
}
{
        "_id" : ObjectId("5c2b372cef2171fd1a488f99"),
        "title" : "The Last Student Returns",
        "meta" : {
                "rating" : 9.5,
                "aired" : 2018,
                "runtime" : 100
        },
        "visitors" : 1300000,
        "expectedVisitors" : 1550000,
        "genre" : [
                "thriller",
                "drama",
                "action"
        ],
        "ratings" : [
                10,
                9
        ]
}
```

19. Understanding Cursors

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Read5.png)

- `find()` or `find().pretty()` returns always 20 or less documents.
```bash
> db.movies.find()
.
.
.
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859da"), "id" : 19, "url" : "http://www.tvmaze.com/shows/19/supernatural", "name" : "Supernatural", "type" : "Scripted", "language" : "English", "genres" : [ "Drama", "Action", "Supernatural" ], "status" : "Running", "runtime" : 60, "premiered" : "2005-09-13", "officialSite" : "http://www.cwtv.com/shows/supernatural", "schedule" : { "time" : "20:00", "days" : [ "Thursday" ] }, "rating" : { "average" : 8.4 }, "weight" : 99, "network" : { "id" : 5, "name" : "The CW", "country" : { "name" : "United States", "code" : "US", "timezone" : "America/New_York" } }, "webChannel" : null, "externals" : { "tvrage" : 5410, "thetvdb" : 78901, "imdb" : "tt0460681" }, "image" : { "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/149/374777.jpg", "original" : "http://static.tvmaze.com/uploads/images/original_untouched/149/374777.jpg" }, "summary" : "<p>The show follows brothers Sam and Dean Winchester, who travel across America in a black 1967 Chevy Impala investigating and combating paranormal events and other unexplained occurrences, many of them based on American urban legends and folklore as well as classic supernatural creatures such as vampires, werewolves, and ghosts.</p>", "updated" : 1536045363, "_links" : { "self" : { "href" : "http://api.tvmaze.com/shows/19" }, "previousepisode" : { "href" : "http://api.tvmaze.com/episodes/1422914" }, "nextepisode" : { "href" : "http://api.tvmaze.com/episodes/1473821" } } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859db"), "id" : 20, "url" : "http://www.tvmaze.com/shows/20/the-strain", "name" : "The Strain", "type" : "Scripted", "language" : "English", "genres" : [ "Drama", "Horror", "Thriller" ], "status" : "Ended", "runtime" : 60, "premiered" : "2014-07-13", "officialSite" : "http://www.fxnetworks.com/thestrain", "schedule" : { "time" : "22:00", "days" : [ "Sunday" ] }, "rating" : { "average" : 7.6 }, "weight" : 90, "network" : { "id" : 13, "name" : "FX", "country" : { "name" : "United States", "code" : "US", "timezone" : "America/New_York" } }, "webChannel" : null, "externals" : { "tvrage" : 33229, "thetvdb" : 276564, "imdb" : "tt2654620" }, "image" : { "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/130/325621.jpg", "original" : "http://static.tvmaze.com/uploads/images/original_untouched/130/325621.jpg" }, "summary" : "<p><b>The Strain</b> is a high-concept thriller that tells the story of Dr. Ephraim Goodweather, the head of the Center for Disease Control Canary Team in New York City. He and his team are called upon to investigate a mysterious viral outbreak with hallmarks of an ancient and evil strain of vampirism. As the strain spreads, Goodweather, his team, and an assembly of everyday New Yorkers wage war for the fate of humanity itself.</p>", "updated" : 1536276977, "_links" : { "self" : { "href" : "http://api.tvmaze.com/shows/20" }, "previousepisode" : { "href" : "http://api.tvmaze.com/episodes/1128366" } } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859dc"), "id" : 21, "url" : "http://www.tvmaze.com/shows/21/the-last-ship", "name" : "The Last Ship", "type" : "Scripted", "language" : "English", "genres" : [ "Drama", "Action", "Thriller" ], "status" : "Running", "runtime" : 60, "premiered" : "2014-06-22", "officialSite" : "http://www.tntdrama.com/shows/the-last-ship", "schedule" : { "time" : "21:00", "days" : [ "Sunday" ] }, "rating" : { "average" : 7.8 }, "weight" : 100, "network" : { "id" : 14, "name" : "TNT", "country" : { "name" : "United States", "code" : "US", "timezone" : "America/New_York" } }, "webChannel" : null, "externals" : { "tvrage" : 33158, "thetvdb" : 269533, "imdb" : "tt2402207" }, "image" : { "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/164/412464.jpg", "original" : "http://static.tvmaze.com/uploads/images/original_untouched/164/412464.jpg" }, "summary" : "<p>Their mission is simple: Find a cure. Stop the virus. Save the world. When a global pandemic wipes out eighty percent of the planet's population, the crew of a lone naval destroyer must find a way to pull humanity from the brink of extinction.</p>", "updated" : 1536575637, "_links" : { "self" : { "href" : "http://api.tvmaze.com/shows/21" }, "previousepisode" : { "href" : "http://api.tvmaze.com/episodes/1499133" }, "nextepisode" : { "href" : "http://api.tvmaze.com/episodes/1499134" } } }
Type "it" for more
```
- If we type `it` it returns the next 20 ones.
```bash
> it
.
.
.
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859ef"), "id" : 44, "url" : "http://www.tvmaze.com/shows/44/scorpion", "name" : "Scorpion", "type" : "Scripted", "language" : "English", "genres" : [ "Drama", "Action", "Thriller" ], "status" : "Ended", "runtime" : 60, "premiered" : "2014-09-22", "officialSite" : "http://www.cbs.com/shows/scorpion/", "schedule" : { "time" : "22:00", "days" : [ "Monday" ] }, "rating" : { "average" : 7.3 }, "weight" : 98, "network" : { "id" : 2, "name" : "CBS", "country" : { "name" : "United States", "code" : "US", "timezone" : "America/New_York" } }, "webChannel" : null, "externals" : { "tvrage" : 40717, "thetvdb" : 281630, "imdb" : "tt3514324" }, "image" : { "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/128/322484.jpg", "original" : "http://static.tvmaze.com/uploads/images/original_untouched/128/322484.jpg" }, "summary" : "<p><b>Scorpion</b>, inspired by a true story, is a high-octane drama about eccentric genius Walter O'Brien and his team of brilliant misfits who comprise the last line of defense against complex, high-tech threats of the modern age. As Homeland Security's new think tank, O'Brien's \"Scorpion\" team includes Toby Curtis an expert behaviorist who can read anyone; Happy Quinn, a mechanical prodigy; and Sylvester Dodd, a statistics guru. Pooling their extensive technological knowledge to solve mind-boggling predicaments amazes federal agent Cabe Gallo, who shares a harrowing history with O'Brien. However, while this socially awkward group is comfortable with each other's humor and quirks, life outside their circle confounds them, so they rely on Paige Dineen, who has a young, gifted son, to translate the world for them. At last, these nerdy masterminds have found the perfect job: a place where they can apply their exceptional brainpower to solve the nation's crises, while also helping each other learn how to fit in.</p>", "updated" : 1535166626, "_links" : { "self" : { "href" : "http://api.tvmaze.com/shows/44" }, "previousepisode" : { "href" : "http://api.tvmaze.com/episodes/1418984" } } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859f0"), "id" : 45, "url" : "http://www.tvmaze.com/shows/45/ncis-new-orleans", "name" : "NCIS: New Orleans", "type" : "Scripted", "language" : "English", "genres" : [ "Drama", "Crime" ], "status" : "Running", "runtime" : 60, "premiered" : "2014-09-23", "officialSite" : "http://www.cbs.com/shows/ncis-new-orleans/", "schedule" : { "time" : "22:00", "days" : [ "Tuesday" ] }, "rating" : { "average" : 8 }, "weight" : 99, "network" : { "id" : 2, "name" : "CBS", "country" : { "name" : "United States", "code" : "US", "timezone" : "America/New_York" } }, "webChannel" : null, "externals" : { "tvrage" : 38017, "thetvdb" : 278125, "imdb" : "tt3560084" }, "image" : { "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/147/369356.jpg", "original" : "http://static.tvmaze.com/uploads/images/original_untouched/147/369356.jpg" }, "summary" : "<p><b>NCIS: New Orleans </b>is a drama about the local field office that investigates criminal cases involving military personnel in The Big Easy, a city known for its music, entertainment and decadence. Leading the team is Special Agent Dwayne Pride, a.k.a. \"King,\" a native of New Orleans who is driven by his need to do what is right. Working with Pride is Special Agent Christopher LaSalle, who plays hard but works harder and former ATF agent Sonja Percy, who is still adjusting to the team after years of solo undercover assignments. Supporting them is coroner Dr. Loretta Wade, who is as eccentric as she is smart; her brilliant, quirky Forensic Scientist, Sebastian Lund; and Investigative Computer Specialist Patton Plame, an animated and talented hacker. New to the team is Special Agent Tammy Gregorio, a tough, acerbic FBI agent with a mysterious past in New Orleans, who is sent from D.C. to investigate the NCIS team, but also work with Pride when high-risk cases threaten the city. This colorful city that harbors a dark side is a magnet for service personnel on leave, and when overindulgence is followed by trouble, Pride's team is at its best</p>", "updated" : 1536336531, "_links" : { "self" : { "href" : "http://api.tvmaze.com/shows/45" }, "previousepisode" : { "href" : "http://api.tvmaze.com/episodes/1432068" }, "nextepisode" : { "href" : "http://api.tvmaze.com/episodes/1494020" } } }
Type "it" for more
```
- `next` returns the next document but starting from the first one again
```bash
> db.movies.find().next()
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a4859c9"),
        "id" : 1,
        "url" : "http://www.tvmaze.com/shows/1/under-the-dome",
        "name" : "Under the Dome",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Drama",
                "Science-Fiction",
                "Thriller"
        ],
        "status" : "Ended",
        "runtime" : 60,
        "premiered" : "2013-06-24",
        "officialSite" : "http://www.cbs.com/shows/under-the-dome/",
        "schedule" : {
                "time" : "22:00",
                "days" : [
                        "Thursday"
                ]
        },
        "rating" : {
                "average" : 6.5
        },
        "weight" : 91,
        "network" : {
                "id" : 2,
                "name" : "CBS",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 25988,
                "thetvdb" : 264492,
                "imdb" : "tt1553656"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg"
        },
        "summary" : "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
        "updated" : 1529612668,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/1"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/185054"
                }
        }
}
```
- We can store the `cursor` in a variable
```bash
> const dataCursor = db.movies.find()
> dataCursor.next()
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a4859c9"),
        "id" : 1,
        "url" : "http://www.tvmaze.com/shows/1/under-the-dome",
        "name" : "Under the Dome",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Drama",
                "Science-Fiction",
                "Thriller"
        ],
        "status" : "Ended",
        "runtime" : 60,
        "premiered" : "2013-06-24",
        "officialSite" : "http://www.cbs.com/shows/under-the-dome/",
        "schedule" : {
                "time" : "22:00",
                "days" : [
                        "Thursday"
                ]
        },
        "rating" : {
                "average" : 6.5
        },
        "weight" : 91,
        "network" : {
                "id" : 2,
                "name" : "CBS",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 25988,
                "thetvdb" : 264492,
                "imdb" : "tt1553656"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg"
        },
        "summary" : "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
        "updated" : 1529612668,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/1"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/185054"
                }
        }
}
> dataCursor.next()
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a4859ca"),
        "id" : 2,
        "url" : "http://www.tvmaze.com/shows/2/person-of-interest",
        "name" : "Person of Interest",
        "type" : "Scripted",
        "language" : "English",
        "genres" : [
                "Drama",
                "Action",
                "Crime"
        ],
        "status" : "Ended",
        "runtime" : 60,
        "premiered" : "2011-09-22",
        "officialSite" : "http://www.cbs.com/shows/person_of_interest/",
        "schedule" : {
                "time" : "22:00",
                "days" : [
                        "Tuesday"
                ]
        },
        "rating" : {
                "average" : 9
        },
        "weight" : 96,
        "network" : {
                "id" : 2,
                "name" : "CBS",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 28376,
                "thetvdb" : 248742,
                "imdb" : "tt1839578"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
        },
        "summary" : "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
        "updated" : 1535507028,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/2"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/659372"
                }
        }
}
```
- We can use `forEach` to iterate through a `cursor`
```bash
> dataCursor.forEach(doc => {if (doc.id < 10) printjson(doc.id)})
3
4
5
6
7
8
9
```
- It doesn't show the first 2 because the cursor was in the third element

- If we are at the end and try to execute `next` again we get an error
```bash
> dataCursor.next()
2019-01-01T11:16:48.270+0000 E QUERY    [js] Error: error hasNext: false :
DBQuery.prototype.next@src/mongo/shell/query.js:305:1
@(shell):1:1
```

- We can use `hasNext()` to check if there are more documents
```bash
> dataCursor.hasNext()
false
``` 

- We can sort the result document returned.
```bash
> db.movies.find().sort({"rating.average": 1}).pretty()
{
        "_id" : ObjectId("5c2a3a2fef2171fd1a485a25"),
        "id" : 97,
        "url" : "http://www.tvmaze.com/shows/97/the-biggest-loser",
        "name" : "The Biggest Loser",
        "type" : "Reality",
        "language" : "English",
        "genres" : [
                "Drama"
        ],
        "status" : "Ended",
        "runtime" : 60,
        "premiered" : "2004-10-19",
        "officialSite" : null,
        "schedule" : {
                "time" : "21:00",
                "days" : [
                        "Monday"
                ]
        },
        "rating" : {
                "average" : null
        },
        "weight" : 0,
        "network" : {
                "id" : 1,
                "name" : "NBC",
                "country" : {
                        "name" : "United States",
                        "code" : "US",
                        "timezone" : "America/New_York"
                }
        },
        "webChannel" : null,
        "externals" : {
                "tvrage" : 5618,
                "thetvdb" : 75166,
                "imdb" : "tt0429318"
        },
        "image" : {
                "medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/0/730.jpg",
                "original" : "http://static.tvmaze.com/uploads/images/original_untouched/0/730.jpg"
        },
        "summary" : "<p>NBC's <b>The Biggest Loser</b>, a show known for its incredible weight loss makeovers, will reveal an exciting makeover of its own when the popular series returns on Monday, January 4 (9-11 p.m. ET) with new host Bob Harper, a new \"Temptation\" theme, an updated state-of-the-art gym, a new logo, fun format changes and a return to the popular team vs. team competition. Dolvett Quince and Jen Widerstrom return to train eight contestant teams of two, all with compelling stories. Seven teams (spouses, parent/adult child, siblings, relatives, best friends) will know each other, but one team will be two strangers - former \"Celebrity Apprentice\" contestant and the original \"Survivor\" winner, Richard Hatch, and 'The Voice' season two semi-finalist Erin Willett. Having both been in the NBC family previously, the two share the same goal as the other 14 contestants - to change their lives and get healthy. The renovated \"Biggest Loser\" gym, featuring a new interior and exterior branded with the new logo, has modernized equipment to help contestants better achieve their fitness goals, including eight high-tech monitors on the walls of each side of the gym that will track contestants' calorie burns as well as heart rates. Half of the gym will be dedicated to Team Dolvett and the other half dedicated to Team Jen. The weigh-in will be very different this season with a new look and double scales, so contestants on opposing teams can weigh-in side by side, making the weigh-in even more compelling to watch. The contestant house is also getting a whole new look for season 17.</p>",
        "updated" : 1513401656,
        "_links" : {
                "self" : {
                        "href" : "http://api.tvmaze.com/shows/97"
                },
                "previousepisode" : {
                        "href" : "http://api.tvmaze.com/episodes/529021"
                }
        }
.
.
.
}
```
- We can `order` by more than one field.
```bash
> db.movies.find().sort({"rating.average": 1, runtime: -1}).pretty()
.
.
.
```
- We can `skip` some elements.
```bash
> db.movies.find().sort({"rating.average": 1, runtime: -1}).skip(10).pretty()
.
.
.
```
- We can also `limit` the elements.
```bash
> db.movies.find().sort({"rating.average": 1, runtime: -1}).skip(10).limit(10).pretty()
.
.
.
```
20. Using Projection to Share our Results

```bash
> db.movies.find({},{name: 1, genres: 1, runtime:1, rating: 1})
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859c9"), "name" : "Under the Dome", "genres" : [ "Drama", "Science-Fiction", "Thriller" ], "runtime" : 60, "rating" : { "average" : 6.5 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859ca"), "name" : "Person of Interest", "genres" : [ "Drama", "Action", "Crime" ], "runtime" : 60, "rating" : { "average" : 9 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cb"), "name" : "Bitten", "genres" : [ "Drama", "Horror", "Romance" ], "runtime" : 60, "rating" : { "average" : 7.6 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cc"), "name" : "Arrow", "genres" : [ "Drama", "Action", "Science-Fiction" ], "runtime" : 60, "rating" : { "average" : 7.6 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cd"), "name" : "True Detective", "genres" : [ "Drama", "Crime", "Thriller" ], "runtime" : 60, "rating" : { "average" : 8.3 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859ce"), "name" : "The 100", "genres" : [ "Action", "Adventure", "Science-Fiction" ], "runtime" : 60, "rating" : { "average" : 7.9 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cf"), "name" : "Homeland", "genres" : [ "Drama", "Thriller", "Espionage" ], "runtime" : 60, "rating" : { "average" : 8.3 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d0"), "name" : "Glee", "genres" : [ "Drama", "Music", "Romance" ], "runtime" : 60, "rating" : { "average" : 6.7 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d1"), "name" : "Revenge", "genres" : [ "Drama", "Thriller", "Mystery" ], "runtime" : 60, "rating" : { "average" : 8 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d2"), "name" : "Grimm", "genres" : [ "Drama", "Crime", "Supernatural" ], "runtime" : 60, "rating" : { "average" : 8.5 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d3"), "name" : "Gotham", "genres" : [ "Drama", "Action", "Crime" ], "runtime" : 60, "rating" : { "average" : 7.8 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d4"), "name" : "Lost Girl", "genres" : [ "Drama", "Fantasy", "Horror" ], "runtime" : 60, "rating" : { "average" : 8 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d5"), "name" : "The Flash", "genres" : [ "Drama", "Action", "Science-Fiction" ], "runtime" : 60, "rating" : { "average" : 8.1 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d6"), "name" : "Continuum", "genres" : [ "Drama", "Crime", "Science-Fiction" ], "runtime" : 60, "rating" : { "average" : 8.2 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d7"), "name" : "Constantine", "genres" : [ "Drama", "Action", "Horror" ], "runtime" : 60, "rating" : { "average" : 7.4 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d8"), "name" : "Penny Dreadful", "genres" : [ "Drama", "Horror", "Thriller" ], "runtime" : 60, "rating" : { "average" : 8.3 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d9"), "name" : "The Amazing Race", "genres" : [ "Action", "Adventure", "Family" ], "runtime" : 60, "rating" : { "average" : 7.5 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859da"), "name" : "Supernatural", "genres" : [ "Drama", "Action", "Supernatural" ], "runtime" : 60, "rating" : { "average" : 8.4 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859db"), "name" : "The Strain", "genres" : [ "Drama", "Horror", "Thriller" ], "runtime" : 60, "rating" : { "average" : 7.6 } }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859dc"), "name" : "The Last Ship", "genres" : [ "Drama", "Action", "Thriller" ], "runtime" : 60, "rating" : { "average" : 7.8 } }
Type "it" for more
```

- We can exclude the `_id` explicitely
```bash
> db.movies.find({},{name: 1, genres: 1, runtime:1, rating: 1, _id: 0})
{ "name" : "Under the Dome", "genres" : [ "Drama", "Science-Fiction", "Thriller" ], "runtime" : 60, "rating" : { "average" : 6.5 } }
{ "name" : "Person of Interest", "genres" : [ "Drama", "Action", "Crime" ], "runtime" : 60, "rating" : { "average" : 9 } }
{ "name" : "Bitten", "genres" : [ "Drama", "Horror", "Romance" ], "runtime" : 60, "rating" : { "average" : 7.6 } }
{ "name" : "Arrow", "genres" : [ "Drama", "Action", "Science-Fiction" ], "runtime" : 60, "rating" : { "average" : 7.6 } }
{ "name" : "True Detective", "genres" : [ "Drama", "Crime", "Thriller" ], "runtime" : 60, "rating" : { "average" : 8.3 } }
{ "name" : "The 100", "genres" : [ "Action", "Adventure", "Science-Fiction" ], "runtime" : 60, "rating" : { "average" : 7.9 } }
{ "name" : "Homeland", "genres" : [ "Drama", "Thriller", "Espionage" ], "runtime" : 60, "rating" : { "average" : 8.3 } }
{ "name" : "Glee", "genres" : [ "Drama", "Music", "Romance" ], "runtime" : 60, "rating" : { "average" : 6.7 } }
{ "name" : "Revenge", "genres" : [ "Drama", "Thriller", "Mystery" ], "runtime" : 60, "rating" : { "average" : 8 } }
{ "name" : "Grimm", "genres" : [ "Drama", "Crime", "Supernatural" ], "runtime" : 60, "rating" : { "average" : 8.5 } }
{ "name" : "Gotham", "genres" : [ "Drama", "Action", "Crime" ], "runtime" : 60, "rating" : { "average" : 7.8 } }
{ "name" : "Lost Girl", "genres" : [ "Drama", "Fantasy", "Horror" ], "runtime" : 60, "rating" : { "average" : 8 } }
{ "name" : "The Flash", "genres" : [ "Drama", "Action", "Science-Fiction" ], "runtime" : 60, "rating" : { "average" : 8.1 } }
{ "name" : "Continuum", "genres" : [ "Drama", "Crime", "Science-Fiction" ], "runtime" : 60, "rating" : { "average" : 8.2 } }
{ "name" : "Constantine", "genres" : [ "Drama", "Action", "Horror" ], "runtime" : 60, "rating" : { "average" : 7.4 } }
{ "name" : "Penny Dreadful", "genres" : [ "Drama", "Horror", "Thriller" ], "runtime" : 60, "rating" : { "average" : 8.3 } }
{ "name" : "The Amazing Race", "genres" : [ "Action", "Adventure", "Family" ], "runtime" : 60, "rating" : { "average" : 7.5 } }
{ "name" : "Supernatural", "genres" : [ "Drama", "Action", "Supernatural" ], "runtime" : 60, "rating" : { "average" : 8.4 } }
{ "name" : "The Strain", "genres" : [ "Drama", "Horror", "Thriller" ], "runtime" : 60, "rating" : { "average" : 7.6 } }
{ "name" : "The Last Ship", "genres" : [ "Drama", "Action", "Thriller" ], "runtime" : 60, "rating" : { "average" : 7.8 } }
Type "it" for more
```

```bash
> db.movies.find({},{name: 1, genres: 1, runtime:1, rating: 1, _id: 0, "schedule.time": 1})
{ "name" : "Under the Dome", "genres" : [ "Drama", "Science-Fiction", "Thriller" ], "runtime" : 60, "schedule" : { "time" : "22:00" }, "rating" : { "average" : 6.5 } }
{ "name" : "Person of Interest", "genres" : [ "Drama", "Action", "Crime" ], "runtime" : 60, "schedule" : { "time" : "22:00" }, "rating" : { "average" : 9 } }
{ "name" : "Bitten", "genres" : [ "Drama", "Horror", "Romance" ], "runtime" : 60, "schedule" : { "time" : "22:00" }, "rating" : { "average" : 7.6 } }
{ "name" : "Arrow", "genres" : [ "Drama", "Action", "Science-Fiction" ], "runtime" : 60, "schedule" : { "time" : "20:00" }, "rating" : { "average" : 7.6 } }
{ "name" : "True Detective", "genres" : [ "Drama", "Crime", "Thriller" ], "runtime" : 60, "schedule" : { "time" : "21:00" }, "rating" : { "average" : 8.3 } }
{ "name" : "The 100", "genres" : [ "Action", "Adventure", "Science-Fiction" ], "runtime" : 60, "schedule" : { "time" : "20:00" }, "rating" : { "average" : 7.9 } }
{ "name" : "Homeland", "genres" : [ "Drama", "Thriller", "Espionage" ], "runtime" : 60, "schedule" : { "time" : "21:00" }, "rating" : { "average" : 8.3 } }
{ "name" : "Glee", "genres" : [ "Drama", "Music", "Romance" ], "runtime" : 60, "schedule" : { "time" : "21:00" }, "rating" : { "average" : 6.7 } }
{ "name" : "Revenge", "genres" : [ "Drama", "Thriller", "Mystery" ], "runtime" : 60, "schedule" : { "time" : "22:00" }, "rating" : { "average" : 8 } }
{ "name" : "Grimm", "genres" : [ "Drama", "Crime", "Supernatural" ], "runtime" : 60, "schedule" : { "time" : "20:00" }, "rating" : { "average" : 8.5 } }
{ "name" : "Gotham", "genres" : [ "Drama", "Action", "Crime" ], "runtime" : 60, "schedule" : { "time" : "20:00" }, "rating" : { "average" : 7.8 } }
{ "name" : "Lost Girl", "genres" : [ "Drama", "Fantasy", "Horror" ], "runtime" : 60, "schedule" : { "time" : "22:00" }, "rating" : { "average" : 8 } }
{ "name" : "The Flash", "genres" : [ "Drama", "Action", "Science-Fiction" ], "runtime" : 60, "schedule" : { "time" : "20:00" }, "rating" : { "average" : 8.1 } }
{ "name" : "Continuum", "genres" : [ "Drama", "Crime", "Science-Fiction" ], "runtime" : 60, "schedule" : { "time" : "21:00" }, "rating" : { "average" : 8.2 } }
{ "name" : "Constantine", "genres" : [ "Drama", "Action", "Horror" ], "runtime" : 60, "schedule" : { "time" : "20:00" }, "rating" : { "average" : 7.4 } }
{ "name" : "Penny Dreadful", "genres" : [ "Drama", "Horror", "Thriller" ], "runtime" : 60, "schedule" : { "time" : "21:00" }, "rating" : { "average" : 8.3 } }
{ "name" : "The Amazing Race", "genres" : [ "Action", "Adventure", "Family" ], "runtime" : 60, "schedule" : { "time" : "20:00" }, "rating" : { "average" : 7.5 } }
{ "name" : "Supernatural", "genres" : [ "Drama", "Action", "Supernatural" ], "runtime" : 60, "schedule" : { "time" : "20:00" }, "rating" : { "average" : 8.4 } }
{ "name" : "The Strain", "genres" : [ "Drama", "Horror", "Thriller" ], "runtime" : 60, "schedule" : { "time" : "22:00" }, "rating" : { "average" : 7.6 } }
{ "name" : "The Last Ship", "genres" : [ "Drama", "Action", "Thriller" ], "runtime" : 60, "schedule" : { "time" : "21:00" }, "rating" : { "average" : 7.8 } }
Type "it" for more
```

- We can project in arrays
```bash
> db.movies.find({genres: "Drama"},{name: 1, "genres.$": 1})
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859c9"), "name" : "Under the Dome", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859ca"), "name" : "Person of Interest", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cb"), "name" : "Bitten", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cc"), "name" : "Arrow", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cd"), "name" : "True Detective", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cf"), "name" : "Homeland", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d0"), "name" : "Glee", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d1"), "name" : "Revenge", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d2"), "name" : "Grimm", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d3"), "name" : "Gotham", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d4"), "name" : "Lost Girl", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d5"), "name" : "The Flash", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d6"), "name" : "Continuum", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d7"), "name" : "Constantine", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d8"), "name" : "Penny Dreadful", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859da"), "name" : "Supernatural", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859db"), "name" : "The Strain", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859dc"), "name" : "The Last Ship", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859dd"), "name" : "True Blood", "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859df"), "name" : "Hawaii Five-0", "genres" : [ "Drama" ] }
Type "it" for more
```

```bash
> db.movies.find({genres: {$all: ["Drama","Horror"]}},{name: 1, "genres.$": 1})
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cb"), "name" : "Bitten", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d4"), "name" : "Lost Girl", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d7"), "name" : "Constantine", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d8"), "name" : "Penny Dreadful", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859db"), "name" : "The Strain", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859e1"), "name" : "Hellsing Ultimate", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859e5"), "name" : "Hemlock Grove", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859f6"), "name" : "American Horror Story", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a0c"), "name" : "The Walking Dead", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a59"), "name" : "Beauty and the Beast", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a6d"), "name" : "Carnivàle", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a83"), "name" : "Bates Motel", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a88"), "name" : "Da Vinci's Demons", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a8d"), "name" : "Hannibal", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a9c"), "name" : "Being Human", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a9f"), "name" : "Ravenswood", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485aa5"), "name" : "The River", "genres" : [ "Horror" ] }
```

```bash
> db.movies.find({genres: "Drama"},{name: 1, genres: {$elemMatch: {$eq: "Horror" }}})
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859c9"), "name" : "Under the Dome" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859ca"), "name" : "Person of Interest" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cb"), "name" : "Bitten", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cc"), "name" : "Arrow" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cd"), "name" : "True Detective" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859cf"), "name" : "Homeland" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d0"), "name" : "Glee" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d1"), "name" : "Revenge" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d2"), "name" : "Grimm" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d3"), "name" : "Gotham" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d4"), "name" : "Lost Girl", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d5"), "name" : "The Flash" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d6"), "name" : "Continuum" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d7"), "name" : "Constantine", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859d8"), "name" : "Penny Dreadful", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859da"), "name" : "Supernatural" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859db"), "name" : "The Strain", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859dc"), "name" : "The Last Ship" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859dd"), "name" : "True Blood" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859df"), "name" : "Hawaii Five-0" }
Type "it" for more
```

```bash
> db.movies.find({"rating.average": {$gt: 9}},{name: 1, genres: {$elemMatch: {$eq: "Horror" }}})
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859e2"), "name" : "Berserk", "genres" : [ "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a18"), "name" : "Game of Thrones" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a69"), "name" : "Breaking Bad" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a71"), "name" : "The Wire" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a72"), "name" : "Firefly" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a8a"), "name" : "Stargate SG-1" }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a97"), "name" : "Rick and Morty" }
```

21. Understanding `$slice`

- Get the first two values of `genres`.

```bash
> db.movies.find({"rating.average": {$gt: 9}},{name: 1, genres: {$slice: 2}})
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859e2"), "name" : "Berserk", "genres" : [ "Anime", "Fantasy" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a18"), "name" : "Game of Thrones", "genres" : [ "Drama", "Adventure" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a69"), "name" : "Breaking Bad", "genres" : [ "Drama", "Crime" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a71"), "name" : "The Wire", "genres" : [ "Drama", "Crime" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a72"), "name" : "Firefly", "genres" : [ "Adventure", "Science-Fiction" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a8a"), "name" : "Stargate SG-1", "genres" : [ "Action", "Adventure" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a97"), "name" : "Rick and Morty", "genres" : [ "Comedy", "Adventure" ] }
```
- Get the first two values of `genres` skiping the first one.
```bash
> db.movies.find({"rating.average": {$gt: 9}},{name: 1, genres: {$slice: [1,2]}})
{ "_id" : ObjectId("5c2a3a2fef2171fd1a4859e2"), "name" : "Berserk", "genres" : [ "Fantasy", "Horror" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a18"), "name" : "Game of Thrones", "genres" : [ "Adventure", "Fantasy" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a69"), "name" : "Breaking Bad", "genres" : [ "Crime", "Thriller" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a71"), "name" : "The Wire", "genres" : [ "Crime" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a72"), "name" : "Firefly", "genres" : [ "Science-Fiction", "Western" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a8a"), "name" : "Stargate SG-1", "genres" : [ "Adventure", "Science-Fiction" ] }
{ "_id" : ObjectId("5c2a3a2fef2171fd1a485a97"), "name" : "Rick and Morty", "genres" : [ "Adventure", "Science-Fiction" ] }
```

## Update operations

1. Overview

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Update.png)

2. Updating Fields with `updateOne()`, `updateMany()` and `$set`

```bash
> use user
switched to db user
> show collections
users
> db.users.find().pretty()
{
        "_id" : ObjectId("5c2b171367f51a60f5c07715"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 3
                },
                {
                        "title" : "Cooking",
                        "frequency" : 6
                }
        ],
        "phone" : 131782734
}
{
        "_id" : ObjectId("5c2b171367f51a60f5c07716"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cooking",
                        "frequency" : 5
                },
                {
                        "title" : "Cars",
                        "frequency" : 2
                }
        ],
        "phone" : "012177972",
        "age" : 30
}
{
        "_id" : ObjectId("5c2b187367f51a60f5c07717"),
        "name" : "Anna",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 2
                },
                {
                        "title" : "Yoga",
                        "frequency" : 3
                }
        ],
        "phone" : "80811987291",
        "age" : null
}
{
        "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"),
        "name" : "Chris",
        "hobbies" : [
                "Sports",
                "Cooking",
                "Hiking"
        ]
}
```
- Update one document with `updateOne()` and `$set`

```bash
> db.users.updateOne({_id: ObjectId("5c2b2fee67f51a60f5c0771b")}, {$set: {hobbies: [{title: "Sports", frequency: 5},{title: "Cooking", frequency: 3},{title: "Hiking", frequency: 1}]}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({_id: ObjectId("5c2b2fee67f51a60f5c0771b")}).pretty()
{
        "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"),
        "name" : "Chris",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 5
                },
                {
                        "title" : "Cooking",
                        "frequency" : 3
                },
                {
                        "title" : "Hiking",
                        "frequency" : 1
                }
        ]
}
```

- If I run it again the `modifiedCount` returns `0`.
```bash
> db.users.updateOne({_id: ObjectId("5c2b2fee67f51a60f5c0771b")}, {$set: {hobbies: [{title: "Sports", frequency: 5},{title: "Cooking", frequency: 3},{title: "Hiking", frequency: 1}]}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 }
```

- We can update many users with `updateMany()` and `$set`
```bash
> db.users.find({"hobbies.title": "Sports"})
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3 }, { "title" : "Cooking", "frequency" : 6 } ], "phone" : 131782734 }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3 } ], "phone" : "80811987291", "age" : null }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ] }
> db.users.updateMany({"hobbies.title": "Sports"},{$set: {isSporty: true}})
{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
> db.users.find({"hobbies.title": "Sports"})
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3 }, { "title" : "Cooking", "frequency" : 6 } ], "phone" : 131782734, "isSporty" : true }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3 } ], "phone" : "80811987291", "age" : null, "isSporty" : true }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true }
```

3. Updating Multiple Fields with `$set`
```bash
> db.users.updateOne({_id: ObjectId("5c2b2fee67f51a60f5c0771b")}, {$set: {age: 40, phone: 483924792}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({_id: ObjectId("5c2b2fee67f51a60f5c0771b")}).pretty()
{
        "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"),
        "name" : "Chris",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "frequency" : 5
                },
                {
                        "title" : "Cooking",
                        "frequency" : 3
                },
                {
                        "title" : "Hiking",
                        "frequency" : 1
                }
        ],
        "isSporty" : true,
        "age" : 40,
        "phone" : 483924792
}
```

4. Incrementing & Decrementing Values using `$inc`

```bash
> db.users.find({name: "Manuel"})
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "age" : 30 }
> db.users.updateOne({name: "Manuel"}, {$inc: {age: 2}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Manuel"})
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "age" : 32 }
> db.users.updateOne({name: "Manuel"}, {$inc: {age: -1}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Manuel"})
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "age" : 31 }
```

- We can combine multiple operations at the same time.
```bash
> db.users.updateOne({name: "Manuel"}, {$inc: {age: 1}, $set: {isSporty: false}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Manuel"})
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "age" : 32, "isSporty" : false }
```

- We cannot update the same field with different operations at the same time
```bash
> db.users.updateOne({name: "Manuel"}, {$inc: {age: 1}, $set: {age: 30}})
2019-01-02T05:39:42.488+0000 E QUERY    [js] WriteError: Updating the path 'age' would create a conflict at 'age' :
WriteError({
        "index" : 0,
        "code" : 40,
        "errmsg" : "Updating the path 'age' would create a conflict at 'age'",
        "op" : {
                "q" : {
                        "name" : "Manuel"
                },
                "u" : {
                        "$inc" : {
                                "age" : 1
                        },
                        "$set" : {
                                "age" : 30
                        }
                },
                "multi" : false,
                "upsert" : false
        }
})
WriteError@src/mongo/shell/bulk_api.js:461:48
Bulk/mergeBatchResults@src/mongo/shell/bulk_api.js:841:49
Bulk/executeBatch@src/mongo/shell/bulk_api.js:906:13
Bulk/this.execute@src/mongo/shell/bulk_api.js:1150:21
DBCollection.prototype.updateOne@src/mongo/shell/crud_api.js:572:17
@(shell):1:1
```

5. Using `$min`, `$max` and `$mul`

- Update a value using `$min` to update a value only if it is greater than the value we want to change.
```bash
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 40, "phone" : 483924792 }
> db.users.updateOne({name: "Chris"},{$min: {age: 35}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 35, "phone" : 483924792 }
> db.users.updateOne({name: "Chris"},{$min: {age: 38}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 }
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 35, "phone" : 483924792 }
```

- Update a value using `$max` to update a value only if it is lower than the value we want to change.
```bash
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 35, "phone" : 483924792 }
> db.users.updateOne({name: "Chris"},{$max: {age: 32}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 }
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 35, "phone" : 483924792 }
> db.users.updateOne({name: "Chris"},{$max: {age: 38}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 38, "phone" : 483924792 }
```

 - We can multiply a value using `$mul`
```bash
 > db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 38, "phone" : 483924792 }
> db.users.updateOne({name: "Chris"},{$mul: {age: 1.1}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 41.800000000000004, "phone" : 483924792 }
``` 
6. Getting rid of fields

- We can use `$set` to remove the content of a field
```bash
> db.users.find()
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3 }, { "title" : "Cooking", "frequency" : 6 } ], "phone" : 131782734, "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "age" : 32, "isSporty" : false }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3 } ], "phone" : "80811987291", "age" : null, "isSporty" : true }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 41.800000000000004, "phone" : 483924792 }
> db.users.updateMany({isSporty: true},{$set: {phone: null}})
{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
> db.users.find()
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3 }, { "title" : "Cooking", "frequency" : 6 } ], "phone" : null, "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "age" : 32, "isSporty" : false }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3 } ], "phone" : null, "age" : null, "isSporty" : true }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 41.800000000000004, "phone" : null }
```

- We can use `$unset` operator to drop the field completely (the value we put for the field does not affect anything)
```bash
> db.users.find()
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3 }, { "title" : "Cooking", "frequency" : 6 } ], "phone" : null, "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "age" : 32, "isSporty" : false }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3 } ], "phone" : null, "age" : null, "isSporty" : true }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 41.800000000000004, "phone" : null }
> db.users.updateMany({isSporty: true},{$unset: {phone: null}})
{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
> db.users.find()
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3 }, { "title" : "Cooking", "frequency" : 6 } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "age" : 32, "isSporty" : false }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3 } ], "age" : null, "isSporty" : true }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 41.800000000000004 }
```

7. Renaming fields

- We can use the `$rename` operator to rename a field.
```bash
> db.users.find()
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3 }, { "title" : "Cooking", "frequency" : 6 } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "age" : 32, "isSporty" : false }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3 } ], "age" : null, "isSporty" : true }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "age" : 41.800000000000004 }
> db.users.updateMany({},{$rename: {age: "totalAge"}})
{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 3 }
> db.users.find()
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3 }, { "title" : "Cooking", "frequency" : 6 } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3 } ], "isSporty" : true, "totalAge" : null }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
```

8. Undestanding `upsert()`

- We can insert a new document or update it if it doesn't exist using the `upsert` operator.
```bash
> db.users.updateOne({name: "Maria"},{$set: {age: 29, hobbies: [{title: "Good food", frequency: 3 }], isSporty: true}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
> db.users.updateOne({name: "Maria"},{$set: {age: 29, hobbies: [{title: "Good food", frequency: 3 }], isSporty: true}}, {upsert: true})
{
        "acknowledged" : true,
        "matchedCount" : 0,
        "modifiedCount" : 0,
        "upsertedId" : ObjectId("5c2d0552ef2171fd1a48993c")
}
> db.users.find()
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3 }, { "title" : "Cooking", "frequency" : 6 } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3 } ], "isSporty" : true, "totalAge" : null }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3 } ], "isSporty" : true }
```

9. Assignment

- Create a new collection ("sports") and upsert two new documents into it (with "title" and "requiresTeam")

```bash
> db.sports.updateOne({title: "tennis"},{$set: {requiresTeam: false}},{upsert: true})
{
        "acknowledged" : true,
        "matchedCount" : 0,
        "modifiedCount" : 0,
        "upsertedId" : ObjectId("5c2d081eef2171fd1a489945")
}
> db.sports.updateOne({title: "footbal"},{$set: {requiresTeam: true}},{upsert: true})
{
        "acknowledged" : true,
        "matchedCount" : 0,
        "modifiedCount" : 0,
        "upsertedId" : ObjectId("5c2d0832ef2171fd1a489948")
}
> db.sports.updateOne({title: "rugby"},{$set: {requiresTeam: true}},{upsert: true})
{
        "acknowledged" : true,
        "matchedCount" : 0,
        "modifiedCount" : 0,
        "upsertedId" : ObjectId("5c2d083cef2171fd1a48994b")
}
> db.sports.find()
{ "_id" : ObjectId("5c2d081eef2171fd1a489945"), "title" : "tennis", "requiresTeam" : false }
{ "_id" : ObjectId("5c2d0832ef2171fd1a489948"), "title" : "footbal", "requiresTeam" : true }
{ "_id" : ObjectId("5c2d083cef2171fd1a48994b"), "title" : "rugby", "requiresTeam" : true }
```
- Update all documents which do require a team by adding a new field with minimum amount of players required
```bash
> db.sports.updateMany({requiresTeam: true},{$set: {minimumPlayers: 10}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.sports.find()
{ "_id" : ObjectId("5c2d081eef2171fd1a489945"), "title" : "tennis", "requiresTeam" : false }
{ "_id" : ObjectId("5c2d0832ef2171fd1a489948"), "title" : "footbal", "requiresTeam" : true, "minimumPlayers" : 10 }
{ "_id" : ObjectId("5c2d083cef2171fd1a48994b"), "title" : "rugby", "requiresTeam" : true, "minimumPlayers" : 10 }
```

- Update all documents that require a team by increasing the number of required players by 10
```bash
> db.sports.updateMany({requiresTeam: true},{$inc: {minimumPlayers: 10}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.sports.find()
{ "_id" : ObjectId("5c2d081eef2171fd1a489945"), "title" : "tennis", "requiresTeam" : false }
{ "_id" : ObjectId("5c2d0832ef2171fd1a489948"), "title" : "footbal", "requiresTeam" : true, "minimumPlayers" : 20 }
{ "_id" : ObjectId("5c2d083cef2171fd1a48994b"), "title" : "rugby", "requiresTeam" : true, "minimumPlayers" : 20 }
```

10. Updating Matched Array Elements

- Update all documents that have a `Sports` hobby with a frequency greater or equal to `3` adding a new field to only those array elements.
```bash
> db.users.find({hobbies: {$elemMatch: {title: "Sports",frequency: {$gte: 3}}}})
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3 }, { "title" : "Cooking", "frequency" : 6 } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5 }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
> db.users.updateMany({hobbies: {$elemMatch: {title: "Sports",frequency: {$gte: 3}}}}, {$set: {"hobbies.$.highFrequency": true}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.users.find({hobbies: {$elemMatch: {title: "Sports",frequency: {$gte: 3}}}})
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3, "highFrequency" : true }, { "title" : "Cooking", "frequency" : 6 } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5, "highFrequency" : true }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
```

11. Updating All Array Elements

- Update all the array elements that match the criteria (but only the first element)
```bash
> db.users.find({"hobbiesfrequency": {$gt: 2}})
> db.users.find({"hobbies.frequency": {$gt: 2}})
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3, "highFrequency" : true }, { "title" : "Cooking", "frequency" : 6 } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5 }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3 } ], "isSporty" : true, "totalAge" : null }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5, "highFrequency" : true }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3 } ], "isSporty" : true }
> db.users.updateMany({"hobbies.frequency": {$gt: 2}}, {$set: {"hobbies.$.goodFrequency": true}})
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 5 }
> db.users.find({"hobbies.frequency": {$gt: 2}})
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 6 } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5, "goodFrequency" : true }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3, "goodFrequency" : true } ], "isSporty" : true, "totalAge" : null }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true } ], "isSporty" : true }
```
- Update all the array elements regardless any criteria

```bash
> db.users.find({totalAge: {$gt: 30}})
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 5, "goodFrequency" : true }, { "title" : "Cars", "frequency" : 2 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 5, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 3 }, { "title" : "Hiking", "frequency" : 1 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
> db.users.updateMany({totalAge: {$gt: 30}}, {$inc: {"hobbies.frequency": -1}})
2019-01-03T05:30:17.937+0000 E QUERY    [js] WriteError: Cannot create field 'frequency' in element {hobbies: [ { title: "Cooking", frequency: 5.0, goodFrequency: true }, { title: "Cars", frequency: 2.0 } ]} :
WriteError({
        "index" : 0,
        "code" : 28,
        "errmsg" : "Cannot create field 'frequency' in element {hobbies: [ { title: \"Cooking\", frequency: 5.0, goodFrequency: true }, { title: \"Cars\", frequency: 2.0 } ]}",
        "op" : {
                "q" : {
                        "totalAge" : {
                                "$gt" : 30
                        }
                },
                "u" : {
                        "$inc" : {
                                "hobbies.frequency" : -1
                        }
                },
                "multi" : true,
                "upsert" : false
        }
})
WriteError@src/mongo/shell/bulk_api.js:461:48
Bulk/mergeBatchResults@src/mongo/shell/bulk_api.js:841:49
Bulk/executeBatch@src/mongo/shell/bulk_api.js:906:13
Bulk/this.execute@src/mongo/shell/bulk_api.js:1150:21
DBCollection.prototype.updateMany@src/mongo/shell/crud_api.js:655:17
@(shell):1:1
> db.users.updateMany({totalAge: {$gt: 30}}, {$inc: {"hobbies.$[].frequency": -1}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.users.find({totalAge: {$gt: 30}})
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 4, "goodFrequency" : true }, { "title" : "Cars", "frequency" : 1 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 4, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 0 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
```

12. Finding & Updating Specific Fields

- Update all array elements that match the criteria
```bash
> db.users.find({"hobbies.frequency": {$gt: 2}})
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 6 } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 4, "goodFrequency" : true }, { "title" : "Cars", "frequency" : 1 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3, "goodFrequency" : true } ], "isSporty" : true, "totalAge" : null }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 4, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 0 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true } ], "isSporty" : true }
> db.users.updateMany({"hobbies.frequency": {$gt: 2}}, {$set: {"hobbies.$[el].goodFrequency": true}}, {arrayFilters: [{"el.frequency": {$gt: 2}}]})
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 1 }
> db.users.find({"hobbies.frequency": {$gt: 2}})
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 6, "goodFrequency" : true } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 4, "goodFrequency" : true }, { "title" : "Cars", "frequency" : 1 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3, "goodFrequency" : true } ], "isSporty" : true, "totalAge" : null }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 4, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 0 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true } ], "isSporty" : true }
```

13. Adding Elements to Arrays

- We can Add a new element to an array using `$push`
```bash
> db.users.find({name: "Maria"})
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true } ], "isSporty" : true }
>  db.users.updateOne({name: "Maria"}, {$push: {hobbies: {title: "Sports", frequency: 2}}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Maria"})
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 } ], "isSporty" : true }
```
- We can add more than one element using `$push` and `$each`. We can also use `$sort` to define how we want to insert them.
```bash
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 } ], "isSporty" : true }
> db.users.updateOne({name: "Maria"}, {$push: {hobbies: {$each: [{title: "Good Wine", frequency: 1},{title: "Hiking", frequency: 2}], $sort: {frequency: -1}}}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Maria"})
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 2 }, { "title" : "Good Wine", "frequency" : 1 } ], "isSporty" : true }
```
```bash
> db.users.updateOne({name: "Maria"}, {$push: {hobbies: {$each: [{title: "Good Wine", frequency: 1},{title: "Hiking", frequency: 2}], $sort: {frequency: -1}}}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Maria"})
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 2 }, { "title" : "Good Wine", "frequency" : 1 }, { "title" : "Good Wine", "frequency" : 1 } ], "isSporty" : true }
```
14. Removing Elements from Arrays

- We can remove elements from Arrays using `$pull`
```bash
> db.users.find({name: "Maria"})
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 2 }, { "title" : "Good Wine", "frequency" : 1 }, { "title" : "Good Wine", "frequency" : 1 } ], "isSporty" : true }
> db.users.updateOne({name: "Maria"}, {$pull: {hobbies: {title: "Hiking"}}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Maria"})
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 }, { "title" : "Good Wine", "frequency" : 1 }, { "title" : "Good Wine", "frequency" : 1 } ], "isSporty" : true }
> db.users.updateOne({name: "Maria"}, {$pull: {hobbies: {title: "Good Wine"}}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Maria"})
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 } ], "isSporty" : true }
```

- We can remove the last element by using the `$pop` operator
```bash
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 4, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 0 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
> db.users.updateOne({name: "Chris"}, {$pop: {hobbies: 1}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 4, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 2 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
```
- We can remove the first element by using the `$pop` operator as well
```bash
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Sports", "frequency" : 4, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 2 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
> db.users.updateOne({name: "Chris"}, {$pop: {hobbies: -1}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Chris"})
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Cooking", "frequency" : 2 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
```

15. Understanding `$addToSet`

- We can use `$addToSet` to add new values that are not duplicated if they exist

```bash
> db.users.find({name: "Maria"})
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 } ], "isSporty" : true }
> db.users.updateOne({name: "Maria"}, {$addToSet: {hobbies: {title: "Hiking", frequency: 2}}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.users.find({name: "Maria"})
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 2 } ], "isSporty" : true }
> db.users.updateOne({name: "Maria"}, {$addToSet: {hobbies: {title: "Hiking", frequency: 2}}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 }
> db.users.find({name: "Maria"})
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 2 } ], "isSporty" : true }
```

16. Wrap up

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Update2.png)

## Understanding Delete Operations

1. Overview

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Delete.png)

2. Understanding `deleteOne()` & `deleteMany()`

```bash
> db.users.find()
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 6, "goodFrequency" : true } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 4, "goodFrequency" : true }, { "title" : "Cars", "frequency" : 1 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3, "goodFrequency" : true } ], "isSporty" : true, "totalAge" : null }
{ "_id" : ObjectId("5c2b2fee67f51a60f5c0771b"), "name" : "Chris", "hobbies" : [ { "title" : "Cooking", "frequency" : 2 } ], "isSporty" : true, "totalAge" : 41.800000000000004 }
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 2 } ], "isSporty" : true }
> db.users.deleteOne({name: "Chris"})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.users.find()
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 6, "goodFrequency" : true } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 4, "goodFrequency" : true }, { "title" : "Cars", "frequency" : 1 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3, "goodFrequency" : true } ], "isSporty" : true, "totalAge" : null }
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 2 } ], "isSporty" : true }
```

```bash
> db.users.find({totalAge: {$gt: 30}, isSporty: false})
{ "_id" : ObjectId("5c2b171367f51a60f5c07716"), "name" : "Manuel", "hobbies" : [ { "title" : "Cooking", "frequency" : 4, "goodFrequency" : true }, { "title" : "Cars", "frequency" : 1 } ], "phone" : "012177972", "isSporty" : false, "totalAge" : 32 }
> db.users.deleteMany({totalAge: {$gt: 30}, isSporty: false})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.users.find()
{ "_id" : ObjectId("5c2b171367f51a60f5c07715"), "name" : "Max", "hobbies" : [ { "title" : "Sports", "frequency" : 3, "highFrequency" : true, "goodFrequency" : true }, { "title" : "Cooking", "frequency" : 6, "goodFrequency" : true } ], "isSporty" : true }
{ "_id" : ObjectId("5c2b187367f51a60f5c07717"), "name" : "Anna", "hobbies" : [ { "title" : "Sports", "frequency" : 2 }, { "title" : "Yoga", "frequency" : 3, "goodFrequency" : true } ], "isSporty" : true, "totalAge" : null }
{ "_id" : ObjectId("5c2d0552ef2171fd1a48993c"), "name" : "Maria", "age" : 29, "hobbies" : [ { "title" : "Good food", "frequency" : 3, "goodFrequency" : true }, { "title" : "Sports", "frequency" : 2 }, { "title" : "Hiking", "frequency" : 2 } ], "isSporty" : true }
```

3. Deleting All Entries in a Collection

- We can delete all entries in a collection with `deleteMany` and no criteria (`db.users.deleteMany({})`)
```bash
> db.users.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 3 }
> db.users.find()
```

- We can remove the collection using `drop`
```bash
> show collections
sports
users
> db.users.drop()
true
> show collections
sports
> db.users.drop()
false
```

- We can remove the entire database with `dropDatabase`
```bash
> show dbs
CompanyData    0.000GB
admin          0.000GB
boxOffice      0.000GB
config         0.000GB
contactData    0.000GB
finalcialData  0.000GB
local          0.000GB
movieData      0.000GB
user           0.000GB
> db.dropDatabase()
{ "dropped" : "user", "ok" : 1 }
> show dbs
CompanyData    0.000GB
admin          0.000GB
boxOffice      0.000GB
config         0.000GB
contactData    0.000GB
finalcialData  0.000GB
local          0.000GB
movieData      0.000GB
> db.dropDatabase()
{ "ok" : 1 }
> show dbs
CompanyData    0.000GB
admin          0.000GB
boxOffice      0.000GB
config         0.000GB
contactData    0.000GB
finalcialData  0.000GB
local          0.000GB
movieData      0.000GB
```

## Working with Indexes

1. Overview

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes2.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes3.png)

2. Adding a Single Filed Index

- Import the `person.json` file with the documents
```bash
C:\WINDOWS\system32>cd C:\Users\juan.pablo.perez\Downloads

C:\Users\juan.pablo.perez\Downloads>mongoimport persons.json -d contactData -c contacts --jsonArray
2019-01-03T18:34:33.237+0000    connected to: localhost
2019-01-03T18:34:33.652+0000    imported 5000 documents
```

```bash
> show dbs
CompanyData    0.000GB
admin          0.000GB
boxOffice      0.000GB
config         0.000GB
contactData    0.003GB
finalcialData  0.000GB
local          0.000GB
movieData      0.000GB
> use contactData
switched to db contactData
> show collections
contacts
hobbies
persons
> db.contacts.find().count()
5000
```

```bash
> db.contacts.findOne()
{
        "_id" : ObjectId("5c2e55b9ef2171fd1a489ac8"),
        "gender" : "male",
        "name" : {
                "title" : "mr",
                "first" : "victor",
                "last" : "pedersen"
        },
        "location" : {
                "street" : "2156 stenbjergvej",
                "city" : "billum",
                "state" : "nordjylland",
                "postcode" : 56649,
                "coordinates" : {
                        "latitude" : "-29.8113",
                        "longitude" : "-31.0208"
                },
                "timezone" : {
                        "offset" : "+5:30",
                        "description" : "Bombay, Calcutta, Madras, New Delhi"
                }
        },
        "email" : "victor.pedersen@example.com",
        "login" : {
                "uuid" : "fbb3c298-2cea-4415-84d1-74233525c325",
                "username" : "smallbutterfly536",
                "password" : "down",
                "salt" : "iW5QrgwW",
                "md5" : "3cc8b8a4d69321a408cd46174e163594",
                "sha1" : "681c0353b34fae08422686eea190e1c09472fc1f",
                "sha256" : "eb5251e929c56dfd19fc597123ed6ec2d0130a2c3c1bf8fc9c2ff8f29830a3b7"
        },
        "dob" : {
                "date" : "1959-02-19T23:56:23Z",
                "age" : 59
        },
        "registered" : {
                "date" : "2004-07-07T22:37:39Z",
                "age" : 14
        },
        "phone" : "23138213",
        "cell" : "30393606",
        "id" : {
                "name" : "CPR",
                "value" : "506102-2208"
        },
        "picture" : {
                "large" : "https://randomuser.me/api/portraits/men/23.jpg",
                "medium" : "https://randomuser.me/api/portraits/med/men/23.jpg",
                "thumbnail" : "https://randomuser.me/api/portraits/thumb/men/23.jpg"
        },
        "nat" : "DK"
}
```

- Count the number of documents where age is older than 60
```bash
> db.contacts.find({"dob.age": {$gt: 60}}).count()
1222
```
- We can use `explain()` to get to know what `indexes` we should create.
```bash
> db.contacts.explain().find({"dob.age": {$gt: 60}})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "dob.age" : {
                                "$gt" : 60
                        }
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "dob.age" : {
                                        "$gt" : 60
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

- We can get more detail using the `"executionStats"` parameter
```bash
> db.contacts.explain("executionStats").find({"dob.age": {$gt: 60}})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "dob.age" : {
                                "$gt" : 60
                        }
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "dob.age" : {
                                        "$gt" : 60
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 1222,
                "executionTimeMillis" : 4,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 5000,
                "executionStages" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "dob.age" : {
                                        "$gt" : 60
                                }
                        },
                        "nReturned" : 1222,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 5002,
                        "advanced" : 1222,
                        "needTime" : 3779,
                        "needYield" : 0,
                        "saveState" : 39,
                        "restoreState" : 39,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "direction" : "forward",
                        "docsExamined" : 5000
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```
- We can add an `Index` using `createIndex` (`1` is for `Ascending`)
```bash
> db.contacts.createIndex({"dob.age": 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```

```bash
> db.contacts.explain("executionStats").find({"dob.age": {$gt: 60}})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "dob.age" : {
                                "$gt" : 60
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "dob.age" : 1
                                },
                                "indexName" : "dob.age_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "dob.age" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "dob.age" : [
                                                "(60.0, inf.0]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 1222,
                "executionTimeMillis" : 12,
                "totalKeysExamined" : 1222,
                "totalDocsExamined" : 1222,
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 1222,
                        "executionTimeMillisEstimate" : 11,
                        "works" : 1223,
                        "advanced" : 1222,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 10,
                        "restoreState" : 10,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "docsExamined" : 1222,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 1222,
                                "executionTimeMillisEstimate" : 11,
                                "works" : 1223,
                                "advanced" : 1222,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 10,
                                "restoreState" : 10,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "dob.age" : 1
                                },
                                "indexName" : "dob.age_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "dob.age" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "dob.age" : [
                                                "(60.0, inf.0]"
                                        ]
                                },
                                "keysExamined" : 1222,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

- If we execute it again it takes less
```bash
> db.contacts.explain("executionStats").find({"dob.age": {$gt: 60}})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "dob.age" : {
                                "$gt" : 60
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "dob.age" : 1
                                },
                                "indexName" : "dob.age_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "dob.age" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "dob.age" : [
                                                "(60.0, inf.0]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 1222,
                "executionTimeMillis" : 2,
                "totalKeysExamined" : 1222,
                "totalDocsExamined" : 1222,
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 1222,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 1223,
                        "advanced" : 1222,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 9,
                        "restoreState" : 9,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "docsExamined" : 1222,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 1222,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 1223,
                                "advanced" : 1222,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 9,
                                "restoreState" : 9,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "dob.age" : 1
                                },
                                "indexName" : "dob.age_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "dob.age" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "dob.age" : [
                                                "(60.0, inf.0]"
                                        ]
                                },
                                "keysExamined" : 1222,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```
3. Understanding Index Restrictions

- Put a filter with a criteria that doesn't exclude any record

```bash
> db.contacts.explain("executionStats").find({"dob.age": {$gt: 20}})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "dob.age" : {
                                "$gt" : 20
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "dob.age" : 1
                                },
                                "indexName" : "dob.age_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "dob.age" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "dob.age" : [
                                                "(20.0, inf.0]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 5000,
                "executionTimeMillis" : 7,
                "totalKeysExamined" : 5000,
                "totalDocsExamined" : 5000,
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 5000,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 5001,
                        "advanced" : 5000,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 39,
                        "restoreState" : 39,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "docsExamined" : 5000,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 5000,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 5001,
                                "advanced" : 5000,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 39,
                                "restoreState" : 39,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "dob.age" : 1
                                },
                                "indexName" : "dob.age_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "dob.age" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "dob.age" : [
                                                "(20.0, inf.0]"
                                        ]
                                },
                                "keysExamined" : 5000,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

- Get rid of the `Index` using `dropIndex`.

```bash
> db.contacts.dropIndex({"dob.age": 1})
{ "nIndexesWas" : 2, "ok" : 1 }
```

- Check the `executionStats` again and we can see it's faster because no records match the criteria.
```bash
> db.contacts.explain("executionStats").find({"dob.age": {$gt: 20}})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "dob.age" : {
                                "$gt" : 20
                        }
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "dob.age" : {
                                        "$gt" : 20
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 5000,
                "executionTimeMillis" : 4,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 5000,
                "executionStages" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "dob.age" : {
                                        "$gt" : 20
                                }
                        },
                        "nReturned" : 5000,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 5002,
                        "advanced" : 5000,
                        "needTime" : 1,
                        "needYield" : 0,
                        "saveState" : 39,
                        "restoreState" : 39,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "direction" : "forward",
                        "docsExamined" : 5000
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

4. Creating Compound Indexes
- We can create simple indexing by putting just one criteria
```bash
> db.contacts.createIndex({gender: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.contacts.explain("executionStats").find({gender: "male"})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "gender" : {
                                "$eq" : "male"
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "gender" : 1
                                },
                                "indexName" : "gender_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "gender" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "gender" : [
                                                "[\"male\", \"male\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 2435,
                "executionTimeMillis" : 21,
                "totalKeysExamined" : 2435,
                "totalDocsExamined" : 2435,
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 2435,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 2436,
                        "advanced" : 2435,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 19,
                        "restoreState" : 19,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "docsExamined" : 2435,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 2435,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 2436,
                                "advanced" : 2435,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 19,
                                "restoreState" : 19,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "gender" : 1
                                },
                                "indexName" : "gender_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "gender" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "gender" : [
                                                "[\"male\", \"male\"]"
                                        ]
                                },
                                "keysExamined" : 2435,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
> db.contacts.dropIndex({gender: 1})
{ "nIndexesWas" : 2, "ok" : 1 }
```
- We can create compound indexes by putting more than one criteria
```bash
> db.contacts.createIndex({"dob.age": 1, gender: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.contacts.explain().find({"dob.age": 35, gender: "male"})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "dob.age" : {
                                                "$eq" : 35
                                        }
                                },
                                {
                                        "gender" : {
                                                "$eq" : "male"
                                        }
                                }
                        ]
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "dob.age" : 1,
                                        "gender" : 1
                                },
                                "indexName" : "dob.age_1_gender_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "dob.age" : [ ],
                                        "gender" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "dob.age" : [
                                                "[35.0, 35.0]"
                                        ],
                                        "gender" : [
                                                "[\"male\", \"male\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
> db.contacts.find({"dob.age": {$gt: 35}}).count()
3590
```
```bash
> db.contacts.explain().find({"dob.age": 35})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "dob.age" : {
                                "$eq" : 35
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "dob.age" : 1,
                                        "gender" : 1
                                },
                                "indexName" : "dob.age_1_gender_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "dob.age" : [ ],
                                        "gender" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "dob.age" : [
                                                "[35.0, 35.0]"
                                        ],
                                        "gender" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```
```bash
> db.contacts.explain().find({gender: "male"})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "gender" : {
                                "$eq" : "male"
                        }
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "gender" : {
                                        "$eq" : "male"
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

5. Using Indexes for Sorting
```bash
> db.contacts.explain().find({"dob.age": 35}).sort({gender: 1})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "dob.age" : {
                                "$eq" : 35
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "dob.age" : 1,
                                        "gender" : 1
                                },
                                "indexName" : "dob.age_1_gender_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "dob.age" : [ ],
                                        "gender" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "dob.age" : [
                                                "[35.0, 35.0]"
                                        ],
                                        "gender" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```
::: warning
MongoDb has a threshold of 32 Mbytes to perform sort, so if we have many records it could fail to return the information sorted.
:::

6. Understanding the Default Index

- We can see all the Indexes on a collection by using `getIndexes()`
```bash
> db.contacts.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.contacts"
        },
        {
                "v" : 2,
                "key" : {
                        "dob.age" : 1,
                        "gender" : 1
                },
                "name" : "dob.age_1_gender_1",
                "ns" : "contactData.contacts"
        }
]
```
- There is always the default index based on the `_id` key.

7. Configuring Indexes 

- We can create `Unique` Indexes using `unique: true`, but it cannot have duplicated values
```bash
> db.contacts.createIndex({email: 1},{unique: true})
{
        "ok" : 0,
        "errmsg" : "E11000 duplicate key error collection: contactData.contacts index: email_1 dup key: { : \"abigail.clark@example.com\" }",
        "code" : 11000,
        "codeName" : "DuplicateKey"
}
> db.contacts.find({email: "abigail.clark@example.com"})
{ "_id" : ObjectId("5c2e55b9ef2171fd1a48a269"), "gender" : "female", "name" : { "title" : "miss", "first" : "abigail", "last" : "clark" }, "location" : { "street" : "9677 st. lawrence ave", "city" : "aylmer", "state" : "québec", "postcode" : "F6J 8U1", "coordinates" : { "latitude" : "-61.8849", "longitude" : "-84.5766" }, "timezone" : { "offset" : "+9:30", "description" : "Adelaide, Darwin" } }, "email" : "abigail.clark@example.com", "login" : { "uuid" : "a716f860-ba7b-4cb4-890d-2f05ba8f1130", "username" : "whitefish879", "password" : "1955", "salt" : "LnZqDwt4", "md5" : "2bfe0c8e7a9ba85f6621a4964fc7776c", "sha1" : "fec92eeaaab5913f075d839db986cfa8f095ca82", "sha256" : "099e44d8b9f7902df90f22f3914d5d4641296ff7ab364bcf1d64e346cfd9cd23" }, "dob" : { "date" : "1968-01-18T05:26:30Z", "age" : 50 }, "registered" : { "date" : "2014-09-22T01:38:30Z", "age" : 3 }, "phone" : "438-193-7599", "cell" : "184-658-2267", "id" : { "name" : "", "value" : null }, "picture" : { "large" : "https://randomuser.me/api/portraits/women/93.jpg", "medium" : "https://randomuser.me/api/portraits/med/women/93.jpg", "thumbnail" : "https://randomuser.me/api/portraits/thumb/women/93.jpg" }, "nat" : "CA" }
{ "_id" : ObjectId("5c2e55b9ef2171fd1a48a8a8"), "gender" : "female", "name" : { "title" : "mrs", "first" : "abigail", "last" : "clark" }, "location" : { "street" : "8067 argyle st", "city" : "grand falls", "state" : "prince edward island", "postcode" : "K0M 1H7", "coordinates" : { "latitude" : "42.2225", "longitude" : "45.5194" }, "timezone" : { "offset" : "-5:00", "description" : "Eastern Time (US & Canada), Bogota, Lima" } }, "email" : "abigail.clark@example.com", "login" : { "uuid" : "08ee8142-1126-4e94-9587-13ea17d8e8da", "username" : "greenzebra872", "password" : "doudou", "salt" : "eHejWeiE", "md5" : "fd466a6c5417bce67d14966c4a5b87d8", "sha1" : "22e48f2072a8365eea0a15331430f0522bfd6cb7", "sha256" : "fb1bad920e555342d414c3ef3ce15dac487d174ec8983781667070065a10f1ef" }, "dob" : { "date" : "1948-12-08T01:09:03Z", "age" : 69 }, "registered" : { "date" : "2014-05-22T14:42:50Z", "age" : 4 }, "phone" : "522-306-4813", "cell" : "910-566-1400", "id" : { "name" : "", "value" : null }, "picture" : { "large" : "https://randomuser.me/api/portraits/women/21.jpg", "medium" : "https://randomuser.me/api/portraits/med/women/21.jpg", "thumbnail" : "https://randomuser.me/api/portraits/thumb/women/21.jpg" }, "nat" : "CA" }
```

8. Understanding Partial Filters 

- We can drop an Index by name.
```bash
> db.contacts.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.contacts"
        },
        {
                "v" : 2,
                "key" : {
                        "dob.age" : 1,
                        "gender" : 1
                },
                "name" : "dob.age_1_gender_1",
                "ns" : "contactData.contacts"
        }
]
> db.contacts.dropIndex("dob.age_1_gender_1")
{ "nIndexesWas" : 2, "ok" : 1 }
> db.contacts.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.contacts"
        }
]
```

- We can create a partial filter inside an index using `partialFilterExpression`
```bash
> db.contacts.createIndex({"dob.age": 1}, {partialFilterExpression: {gender: "male"}})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```

- If we don't filter by that filter exporession the index is not used:
```bash
> db.contacts.explain().find({"dob.age": {$gt: 60}})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "dob.age" : {
                                "$gt" : 60
                        }
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "dob.age" : {
                                        "$gt" : 60
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

```bash
> db.contacts.explain().find({"dob.age": {$gt: 60}, gender: "male"})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "gender" : {
                                                "$eq" : "male"
                                        }
                                },
                                {
                                        "dob.age" : {
                                                "$gt" : 60
                                        }
                                }
                        ]
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "filter" : {
                                "gender" : {
                                        "$eq" : "male"
                                }
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "dob.age" : 1
                                },
                                "indexName" : "dob.age_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "dob.age" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : true,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "dob.age" : [
                                                "(60.0, inf.0]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

```bash
> db.contacts.explain().find({"dob.age": {$gt: 60}, gender: "female"})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "gender" : {
                                                "$eq" : "female"
                                        }
                                },
                                {
                                        "dob.age" : {
                                                "$gt" : 60
                                        }
                                }
                        ]
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "$and" : [
                                        {
                                                "gender" : {
                                                        "$eq" : "female"
                                                }
                                        },
                                        {
                                                "dob.age" : {
                                                        "$gt" : 60
                                                }
                                        }
                                ]
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

9. Applying the Partial Index 

```bash
> db.users.insertMany([{name: "Max", email: "max@test.com"}, {name: "Manu"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c2f9082088cb1a0560299ee"),
                ObjectId("5c2f9082088cb1a0560299ef")
        ]
}
> db.users.find()
{ "_id" : ObjectId("5c2f9082088cb1a0560299ee"), "name" : "Max", "email" : "max@test.com" }
{ "_id" : ObjectId("5c2f9082088cb1a0560299ef"), "name" : "Manu" }
> db.users.createIndex({email: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.users.dropIndex({email: 1})
{ "nIndexesWas" : 2, "ok" : 1 }
> db.users.createIndex({email: 1}, {unique: true})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.users.insertOne({name: "Anna"})
2019-01-04T17:00:04.982+0000 E QUERY    [js] WriteError: E11000 duplicate key error collection: contactData.users index: email_1 dup key: { : null } :
WriteError({
        "index" : 0,
        "code" : 11000,
        "errmsg" : "E11000 duplicate key error collection: contactData.users index: email_1 dup key: { : null }",
        "op" : {
                "_id" : ObjectId("5c2f9114088cb1a0560299f0"),
                "name" : "Anna"
        }
})
WriteError@src/mongo/shell/bulk_api.js:461:48
Bulk/mergeBatchResults@src/mongo/shell/bulk_api.js:841:49
Bulk/executeBatch@src/mongo/shell/bulk_api.js:906:13
Bulk/this.execute@src/mongo/shell/bulk_api.js:1150:21
DBCollection.prototype.insertOne@src/mongo/shell/crud_api.js:252:9
@(shell):1:1
```

```bash
> db.users.dropIndex({email: 1}, {unique: true})
{ "nIndexesWas" : 2, "ok" : 1 }
> db.users.createIndex({email: 1}, {unique: true, partialFilterExpression: {email: {$exists: true}}})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.users.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.users"
        },
        {
                "v" : 2,
                "unique" : true,
                "key" : {
                        "email" : 1
                },
                "name" : "email_1",
                "ns" : "contactData.users",
                "partialFilterExpression" : {
                        "email" : {
                                "$exists" : true
                        }
                }
        }
]
> db.users.insertOne({name: "Anna"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2f91e8088cb1a0560299f1")
}
> db.users.find()
{ "_id" : ObjectId("5c2f9082088cb1a0560299ee"), "name" : "Max", "email" : "max@test.com" }
{ "_id" : ObjectId("5c2f9082088cb1a0560299ef"), "name" : "Manu" }
{ "_id" : ObjectId("5c2f91e8088cb1a0560299f1"), "name" : "Anna" }
> db.users.insertOne({name: "Louise", email: "max@test.com"})
2019-01-04T17:05:27.450+0000 E QUERY    [js] WriteError: E11000 duplicate key error collection: contactData.users index: email_1 dup key: { : "max@test.com" } :
WriteError({
        "index" : 0,
        "code" : 11000,
        "errmsg" : "E11000 duplicate key error collection: contactData.users index: email_1 dup key: { : \"max@test.com\" }",
        "op" : {
                "_id" : ObjectId("5c2f9257088cb1a0560299f2"),
                "name" : "Louise",
                "email" : "max@test.com"
        }
})
WriteError@src/mongo/shell/bulk_api.js:461:48
Bulk/mergeBatchResults@src/mongo/shell/bulk_api.js:841:49
Bulk/executeBatch@src/mongo/shell/bulk_api.js:906:13
Bulk/this.execute@src/mongo/shell/bulk_api.js:1150:21
DBCollection.prototype.insertOne@src/mongo/shell/crud_api.js:252:9
@(shell):1:1
```

10. Understanding the Time-To-Live (TTL) Index

```bash
> db.sessions.insertOne({data: "hdlhadad", createdAt: new Date()})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2f94d4088cb1a0560299f3")
}
> db.sessions.find()
{ "_id" : ObjectId("5c2f94d4088cb1a0560299f3"), "data" : "hdlhadad", "createdAt" : ISODate("2019-01-04T17:16:04.455Z") }
> db.sessions.createIndex({createdAt: 1}, {expireAfterSeconds: 10})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.sessions.find()
{ "_id" : ObjectId("5c2f94d4088cb1a0560299f3"), "data" : "hdlhadad", "createdAt" : ISODate("2019-01-04T17:16:04.455Z") }
```

```bash
> db.sessions.insertOne({data: "hdlhadsdsd", createdAt: new Date()})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c2f9590088cb1a0560299f4")
}
> db.sessions.find()
{ "_id" : ObjectId("5c2f9590088cb1a0560299f4"), "data" : "hdlhadsdsd", "createdAt" : ISODate("2019-01-04T17:19:12.034Z") }
> db.sessions.find()
>
```

- It useful to insert temporary data that we don't want to be stored for a long time (like for demos)
11. Query Diagnosis & Query Planning 

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes4.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes5.png)

- Covered Query example

```bash
> db.customers.insertMany([{name: "Max", age: 29, salary: 3000},{name: "Manu", age: 30, salary: 4000}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c2f97e5088cb1a0560299f5"),
                ObjectId("5c2f97e5088cb1a0560299f6")
        ]
}
> db.customers.createIndex({name: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.customers.explain("executionStats").find({name: "Max"})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.customers",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "name" : {
                                "$eq" : "Max"
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "name" : 1
                                },
                                "indexName" : "name_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "name" : [
                                                "[\"Max\", \"Max\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 1,
                "executionTimeMillis" : 2,
                "totalKeysExamined" : 1,
                "totalDocsExamined" : 1,
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 1,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 2,
                        "advanced" : 1,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "docsExamined" : 1,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 1,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 2,
                                "advanced" : 1,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "name" : 1
                                },
                                "indexName" : "name_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "name" : [
                                                "[\"Max\", \"Max\"]"
                                        ]
                                },
                                "keysExamined" : 1,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

- If the information we need it is on the index it does not examine any documents (`"totalDocsExamined" : 0`)
```bash
> db.customers.explain("executionStats").find({name: "Max"}, {_id: 0, name: 1})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.customers",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "name" : {
                                "$eq" : "Max"
                        }
                },
                "winningPlan" : {
                        "stage" : "PROJECTION",
                        "transformBy" : {
                                "_id" : 0,
                                "name" : 1
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "name" : 1
                                },
                                "indexName" : "name_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "name" : [
                                                "[\"Max\", \"Max\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 1,
                "executionTimeMillis" : 1,
                "totalKeysExamined" : 1,
                "totalDocsExamined" : 0,
                "executionStages" : {
                        "stage" : "PROJECTION",
                        "nReturned" : 1,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 2,
                        "advanced" : 1,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "transformBy" : {
                                "_id" : 0,
                                "name" : 1
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 1,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 2,
                                "advanced" : 1,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "name" : 1
                                },
                                "indexName" : "name_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "name" : [
                                                "[\"Max\", \"Max\"]"
                                        ]
                                },
                                "keysExamined" : 1,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

12. How MongoDB Rejects a Plan 

```bash
> db.customers.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.customers"
        },
        {
                "v" : 2,
                "key" : {
                        "name" : 1
                },
                "name" : "name_1",
                "ns" : "contactData.customers"
        }
]
> db.customers.createIndex({age: 1, name: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 2,
        "numIndexesAfter" : 3,
        "ok" : 1
}
```
- The order we filter doesn't matter to use the index. We can see it rejects to use the index with just the name and the filter.
```bash
> db.customers.explain().find({name: "Max", age: 30})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.customers",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "age" : {
                                                "$eq" : 30
                                        }
                                },
                                {
                                        "name" : {
                                                "$eq" : "Max"
                                        }
                                }
                        ]
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "age" : 1,
                                        "name" : 1
                                },
                                "indexName" : "age_1_name_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "age" : [ ],
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "age" : [
                                                "[30.0, 30.0]"
                                        ],
                                        "name" : [
                                                "[\"Max\", \"Max\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [
                        {
                                "stage" : "FETCH",
                                "filter" : {
                                        "age" : {
                                                "$eq" : 30
                                        }
                                },
                                "inputStage" : {
                                        "stage" : "IXSCAN",
                                        "keyPattern" : {
                                                "name" : 1
                                        },
                                        "indexName" : "name_1",
                                        "isMultiKey" : false,
                                        "multiKeyPaths" : {
                                                "name" : [ ]
                                        },
                                        "isUnique" : false,
                                        "isSparse" : false,
                                        "isPartial" : false,
                                        "indexVersion" : 2,
                                        "direction" : "forward",
                                        "indexBounds" : {
                                                "name" : [
                                                        "[\"Max\", \"Max\"]"
                                                ]
                                        }
                                }
                        }
                ]
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes6.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes7.png)

- We can add `allPlansExecution` to get  to get statistics of all the possible plans

```bash
> db.customers.explain("allPlanExecution").find({name: "Max", age: 30})
2019-01-04T19:07:45.710+0000 E QUERY    [js] Error: explain verbosity must be one of {'queryPlanner','executionStats','allPlansExecution'} :
parseVerbosity@src/mongo/shell/explainable.js:22:1
constructor@src/mongo/shell/explainable.js:43:27
DBCollection.prototype.explain@src/mongo/shell/explainable.js:245:12
@(shell):1:1
> db.customers.explain("allPlansExecution").find({name: "Max", age: 30})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.customers",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "age" : {
                                                "$eq" : 30
                                        }
                                },
                                {
                                        "name" : {
                                                "$eq" : "Max"
                                        }
                                }
                        ]
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "age" : 1,
                                        "name" : 1
                                },
                                "indexName" : "age_1_name_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "age" : [ ],
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "age" : [
                                                "[30.0, 30.0]"
                                        ],
                                        "name" : [
                                                "[\"Max\", \"Max\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [
                        {
                                "stage" : "FETCH",
                                "filter" : {
                                        "age" : {
                                                "$eq" : 30
                                        }
                                },
                                "inputStage" : {
                                        "stage" : "IXSCAN",
                                        "keyPattern" : {
                                                "name" : 1
                                        },
                                        "indexName" : "name_1",
                                        "isMultiKey" : false,
                                        "multiKeyPaths" : {
                                                "name" : [ ]
                                        },
                                        "isUnique" : false,
                                        "isSparse" : false,
                                        "isPartial" : false,
                                        "indexVersion" : 2,
                                        "direction" : "forward",
                                        "indexBounds" : {
                                                "name" : [
                                                        "[\"Max\", \"Max\"]"
                                                ]
                                        }
                                }
                        }
                ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 0,
                "executionTimeMillis" : 3,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 0,
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 0,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 2,
                        "advanced" : 0,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "docsExamined" : 0,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 0,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 1,
                                "advanced" : 0,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "age" : 1,
                                        "name" : 1
                                },
                                "indexName" : "age_1_name_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "age" : [ ],
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "age" : [
                                                "[30.0, 30.0]"
                                        ],
                                        "name" : [
                                                "[\"Max\", \"Max\"]"
                                        ]
                                },
                                "keysExamined" : 0,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                },
                "allPlansExecution" : [
                        {
                                "nReturned" : 0,
                                "executionTimeMillisEstimate" : 0,
                                "totalKeysExamined" : 0,
                                "totalDocsExamined" : 0,
                                "executionStages" : {
                                        "stage" : "FETCH",
                                        "nReturned" : 0,
                                        "executionTimeMillisEstimate" : 0,
                                        "works" : 1,
                                        "advanced" : 0,
                                        "needTime" : 0,
                                        "needYield" : 0,
                                        "saveState" : 0,
                                        "restoreState" : 0,
                                        "isEOF" : 1,
                                        "invalidates" : 0,
                                        "docsExamined" : 0,
                                        "alreadyHasObj" : 0,
                                        "inputStage" : {
                                                "stage" : "IXSCAN",
                                                "nReturned" : 0,
                                                "executionTimeMillisEstimate" : 0,
                                                "works" : 1,
                                                "advanced" : 0,
                                                "needTime" : 0,
                                                "needYield" : 0,
                                                "saveState" : 0,
                                                "restoreState" : 0,
                                                "isEOF" : 1,
                                                "invalidates" : 0,
                                                "keyPattern" : {
                                                        "age" : 1,
                                                        "name" : 1
                                                },
                                                "indexName" : "age_1_name_1",
                                                "isMultiKey" : false,
                                                "multiKeyPaths" : {
                                                        "age" : [ ],
                                                        "name" : [ ]
                                                },
                                                "isUnique" : false,
                                                "isSparse" : false,
                                                "isPartial" : false,
                                                "indexVersion" : 2,
                                                "direction" : "forward",
                                                "indexBounds" : {
                                                        "age" : [
                                                                "[30.0, 30.0]"
                                                        ],
                                                        "name" : [
                                                                "[\"Max\", \"Max\"]"
                                                        ]
                                                },
                                                "keysExamined" : 0,
                                                "seeks" : 1,
                                                "dupsTested" : 0,
                                                "dupsDropped" : 0,
                                                "seenInvalidated" : 0
                                        }
                                }
                        },
                        {
                                "nReturned" : 0,
                                "executionTimeMillisEstimate" : 0,
                                "totalKeysExamined" : 1,
                                "totalDocsExamined" : 1,
                                "executionStages" : {
                                        "stage" : "FETCH",
                                        "filter" : {
                                                "age" : {
                                                        "$eq" : 30
                                                }
                                        },
                                        "nReturned" : 0,
                                        "executionTimeMillisEstimate" : 0,
                                        "works" : 1,
                                        "advanced" : 0,
                                        "needTime" : 1,
                                        "needYield" : 0,
                                        "saveState" : 0,
                                        "restoreState" : 0,
                                        "isEOF" : 0,
                                        "invalidates" : 0,
                                        "docsExamined" : 1,
                                        "alreadyHasObj" : 0,
                                        "inputStage" : {
                                                "stage" : "IXSCAN",
                                                "nReturned" : 1,
                                                "executionTimeMillisEstimate" : 0,
                                                "works" : 1,
                                                "advanced" : 1,
                                                "needTime" : 0,
                                                "needYield" : 0,
                                                "saveState" : 0,
                                                "restoreState" : 0,
                                                "isEOF" : 0,
                                                "invalidates" : 0,
                                                "keyPattern" : {
                                                        "name" : 1
                                                },
                                                "indexName" : "name_1",
                                                "isMultiKey" : false,
                                                "multiKeyPaths" : {
                                                        "name" : [ ]
                                                },
                                                "isUnique" : false,
                                                "isSparse" : false,
                                                "isPartial" : false,
                                                "indexVersion" : 2,
                                                "direction" : "forward",
                                                "indexBounds" : {
                                                        "name" : [
                                                                "[\"Max\", \"Max\"]"
                                                        ]
                                                },
                                                "keysExamined" : 1,
                                                "seeks" : 1,
                                                "dupsTested" : 0,
                                                "dupsDropped" : 0,
                                                "seenInvalidated" : 0
                                        }
                                }
                        }
                ]
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

13. Using Multi-Key Indexes
```bash
> db.contacts.insertOne({name: "Max", hobbies: ["Cooking", "Sports"], addresses: [{street: "Main Street"},{street: "Second Street"}]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c30423b088cb1a0560299f7")
}
> db.contacts.find()
{ "_id" : ObjectId("5c30423b088cb1a0560299f7"), "name" : "Max", "hobbies" : [ "Cooking", "Sports" ], "addresses" : [ { "street" : "Main Street" }, { "street" : "Second Street" } ] }
> db.contacts.createIndex({hobbies: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.contacts.find({hobbies: "Sports"})
{ "_id" : ObjectId("5c30423b088cb1a0560299f7"), "name" : "Max", "hobbies" : [ "Cooking", "Sports" ], "addresses" : [ { "street" : "Main Street" }, { "street" : "Second Street" } ] }
```
- We can tell it has a `"isMultiKey" : true,` value
```bash
> db.contacts.explain("executionStats").find({hobbies: "Sports"})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "hobbies" : {
                                "$eq" : "Sports"
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "hobbies" : 1
                                },
                                "indexName" : "hobbies_1",
                                "isMultiKey" : true,
                                "multiKeyPaths" : {
                                        "hobbies" : [
                                                "hobbies"
                                        ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "hobbies" : [
                                                "[\"Sports\", \"Sports\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 1,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 1,
                "totalDocsExamined" : 1,
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 1,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 2,
                        "advanced" : 1,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "docsExamined" : 1,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 1,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 2,
                                "advanced" : 1,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "hobbies" : 1
                                },
                                "indexName" : "hobbies_1",
                                "isMultiKey" : true,
                                "multiKeyPaths" : {
                                        "hobbies" : [
                                                "hobbies"
                                        ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "hobbies" : [
                                                "[\"Sports\", \"Sports\"]"
                                        ]
                                },
                                "keysExamined" : 1,
                                "seeks" : 1,
                                "dupsTested" : 1,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

- If we have an index in a field that has an array of documents we cannot use the index to look part of the document.

```bash
> db.contacts.createIndex({addresses: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 2,
        "numIndexesAfter" : 3,
        "ok" : 1
}
> db.contacts.explain("executionStats").find({"addresses.street": "MainStreet"})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "addresses.street" : {
                                "$eq" : "MainStreet"
                        }
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "addresses.street" : {
                                        "$eq" : "MainStreet"
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 0,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 1,
                "executionStages" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "addresses.street" : {
                                        "$eq" : "MainStreet"
                                }
                        },
                        "nReturned" : 0,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 3,
                        "advanced" : 0,
                        "needTime" : 2,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "direction" : "forward",
                        "docsExamined" : 1
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

```bash
> db.contacts.explain("executionStats").find({addresses: {street: "MainStreet"}})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "addresses" : {
                                "$eq" : {
                                        "street" : "MainStreet"
                                }
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "addresses" : 1
                                },
                                "indexName" : "addresses_1",
                                "isMultiKey" : true,
                                "multiKeyPaths" : {
                                        "addresses" : [
                                                "addresses"
                                        ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "addresses" : [
                                                "[{ street: \"MainStreet\" }, { street: \"MainStreet\" }]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 0,
                "executionTimeMillis" : 1,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 0,
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 0,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 1,
                        "advanced" : 0,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "docsExamined" : 0,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 0,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 1,
                                "advanced" : 0,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "addresses" : 1
                                },
                                "indexName" : "addresses_1",
                                "isMultiKey" : true,
                                "multiKeyPaths" : {
                                        "addresses" : [
                                                "addresses"
                                        ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "addresses" : [
                                                "[{ street: \"MainStreet\" }, { street: \"MainStreet\" }]"
                                        ]
                                },
                                "keysExamined" : 0,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```

```bash
> db.contacts.createIndex({"addresses.street": 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 3,
        "numIndexesAfter" : 4,
        "ok" : 1
}
> db.contacts.explain("executionStats").find({"addresses.street": "MainStreet"})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "contactData.contacts",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "addresses.street" : {
                                "$eq" : "MainStreet"
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "addresses.street" : 1
                                },
                                "indexName" : "addresses.street_1",
                                "isMultiKey" : true,
                                "multiKeyPaths" : {
                                        "addresses.street" : [
                                                "addresses"
                                        ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "addresses.street" : [
                                                "[\"MainStreet\", \"MainStreet\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 0,
                "executionTimeMillis" : 1,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 0,
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 0,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 1,
                        "advanced" : 0,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "docsExamined" : 0,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 0,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 1,
                                "advanced" : 0,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "addresses.street" : 1
                                },
                                "indexName" : "addresses.street_1",
                                "isMultiKey" : true,
                                "multiKeyPaths" : {
                                        "addresses.street" : [
                                                "addresses"
                                        ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "addresses.street" : [
                                                "[\"MainStreet\", \"MainStreet\"]"
                                        ]
                                },
                                "keysExamined" : 0,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```
- We can add a compound index with a normal field and an array field
```bash
> db.contacts.createIndex({name: 1, hobbies: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 4,
        "numIndexesAfter" : 5,
        "ok" : 1
}
```
- We cannot add a compound index with two array fields
```bash
> db.contacts.createIndex({addresses: 1, hobbies: 1})
{
        "ok" : 0,
        "errmsg" : "cannot index parallel arrays [hobbies] [addresses]",
        "code" : 171,
        "codeName" : "CannotIndexParallelArrays"
}
```

14. Understanding Text Indexes

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes8.png)

- We can create a text index using the `"text"` parameter.
```bash
> db.products.insertMany([{title: "A book", description: "This is an awesome book about a young artist"},{title: "Red T-Shirt", description: "This T-Shirt is red and it's pretty awesome!"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c3049ab088cb1a0560299fa"),
                ObjectId("5c3049ab088cb1a0560299fb")
        ]
}
> db.products.createIndex({description: "text"})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.products.find()
{ "_id" : ObjectId("5c3049ab088cb1a0560299fa"), "title" : "A book", "description" : "This is an awesome book about a young artist" }
{ "_id" : ObjectId("5c3049ab088cb1a0560299fb"), "title" : "Red T-Shirt", "description" : "This T-Shirt is red and it's pretty awesome!" }
```

- We can have `only one` text index per collection. We can search by that text index using `$text` and `$search`.
```bash
> db.products.find({$text: {$search: "awesome"}})
{ "_id" : ObjectId("5c3049ab088cb1a0560299fa"), "title" : "A book", "description" : "This is an awesome book about a young artist" }
{ "_id" : ObjectId("5c3049ab088cb1a0560299fb"), "title" : "Red T-Shirt", "description" : "This T-Shirt is red and it's pretty awesome!" }
```
```bash
> db.products.find({$text: {$search: "book"}})
{ "_id" : ObjectId("5c3049ab088cb1a0560299fa"), "title" : "A book", "description" : "This is an awesome book about a young artist" }
```
```bash
> db.products.find({$text: {$search: "red book"}})
{ "_id" : ObjectId("5c3049ab088cb1a0560299fa"), "title" : "A book", "description" : "This is an awesome book about a young artist" }
{ "_id" : ObjectId("5c3049ab088cb1a0560299fb"), "title" : "Red T-Shirt", "description" : "This T-Shirt is red and it's pretty awesome!" }
>
```
```bash
> db.products.find({$text: {$search: "\"red book\""}})
>
```
```bash
> db.products.find({$text: {$search: "\"awesome book\""}})
{ "_id" : ObjectId("5c3049ab088cb1a0560299fa"), "title" : "A book", "description" : "This is an awesome book about a young artist" }
```

15. Text Indexes & Sorting
```bash
> db.products.find({$text: {$search: "awesome t-shirt"}})
{ "_id" : ObjectId("5c304b79088cb1a0560299fc"), "title" : "A book", "description" : "This is an awesome book about a young artist" }
{ "_id" : ObjectId("5c304b79088cb1a0560299fd"), "title" : "Red T-Shirt", "description" : "This T-Shirt is red and it's pretty awesome!" }
```

- We can see the value of the `score` (someling like the best value found) using ` $meta: "textScore"`
```bash
> db.products.find({$text: {$search: "awesome t-shirt"}}, {score: {$meta: "textScore"}})
{ "_id" : ObjectId("5c304b79088cb1a0560299fd"), "title" : "Red T-Shirt", "description" : "This T-Shirt is red and it's pretty awesome!", "score" : 1.7999999999999998 }
{ "_id" : ObjectId("5c304b79088cb1a0560299fc"), "title" : "A book", "description" : "This is an awesome book about a young artist", "score" : 0.625 }
```

- We can use the `score` to order
```bash
> db.products.find({$text: {$search: "awesome t-shirt"}}, {score: {$meta: "textScore"}}).sort({score: {$meta: "textScore"}})
{ "_id" : ObjectId("5c304b79088cb1a0560299fd"), "title" : "Red T-Shirt", "description" : "This T-Shirt is red and it's pretty awesome!", "score" : 1.7999999999999998 }
{ "_id" : ObjectId("5c304b79088cb1a0560299fc"), "title" : "A book", "description" : "This is an awesome book about a young artist", "score" : 0.625 }
```
16. Creating Combined Text Indexes

- The default language used for text indexes is `English`
```bash
> db.products.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.products"
        },
        {
                "v" : 2,
                "key" : {
                        "_fts" : "text",
                        "_ftsx" : 1
                },
                "name" : "description_text",
                "ns" : "contactData.products",
                "weights" : {
                        "description" : 1
                },
                "default_language" : "english",
                "language_override" : "language",
                "textIndexVersion" : 3
        }
]
```
```bash
> db.products.createIndex({title: "text"})
{
        "ok" : 0,
        "errmsg" : "Index: { v: 2, key: { _fts: \"text\", _ftsx: 1 }, name: \"title_text\", ns: \"contactData.products\", weights: { title: 1 }, default_language: \"english\", language_override: \"language\", textIndexVersion: 3 } already exists with different options: { v: 2, key: { _fts: \"text\", _ftsx: 1 }, name: \"description_text\", ns: \"contactData.products\", weights: { description: 1 }, default_language: \"english\", language_override: \"language\", textIndexVersion: 3 }",
        "code" : 85,
        "codeName" : "IndexOptionsConflict"
}
```

```bash
> db.products.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.products"
        },
        {
                "v" : 2,
                "key" : {
                        "_fts" : "text",
                        "_ftsx" : 1
                },
                "name" : "description_text",
                "ns" : "contactData.products",
                "weights" : {
                        "description" : 1
                },
                "default_language" : "english",
                "language_override" : "language",
                "textIndexVersion" : 3
        }
]
> db.products.dropIndex("description_text")
{ "nIndexesWas" : 2, "ok" : 1 }
> db.products.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.products"
        }
]
```
- We can create a text index that includes more than one field
```bash
> db.products.createIndex({title: "text", description: "text"})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```

```bash
> db.products.insertMany([{title: "A ship", description: "Floats perfectly"},{title: "Computer", description: "It is very fast!"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c304f53088cb1a0560299fe"),
                ObjectId("5c304f53088cb1a0560299ff")
        ]
}
> db.products.find()
{ "_id" : ObjectId("5c304b79088cb1a0560299fc"), "title" : "A book", "description" : "This is an awesome book about a young artist" }
{ "_id" : ObjectId("5c304b79088cb1a0560299fd"), "title" : "Red T-Shirt", "description" : "This T-Shirt is red and it's pretty awesome!" }
{ "_id" : ObjectId("5c304f53088cb1a0560299fe"), "title" : "A ship", "description" : "Floats perfectly" }
{ "_id" : ObjectId("5c304f53088cb1a0560299ff"), "title" : "Computer", "description" : "It is very fast!" }
> db.products.find({$text: {$search: "ship"}})
{ "_id" : ObjectId("5c304f53088cb1a0560299fe"), "title" : "A ship", "description" : "Floats perfectly" }
> db.products.find({$text: {$search: "ship fast"}})
{ "_id" : ObjectId("5c304f53088cb1a0560299ff"), "title" : "Computer", "description" : "It is very fast!" }
{ "_id" : ObjectId("5c304f53088cb1a0560299fe"), "title" : "A ship", "description" : "Floats perfectly" }
```

17. Using Text Indexes to Exclude Words
```bash
> db.products.find({$text: {$search: "awesome"}})
{ "_id" : ObjectId("5c304b79088cb1a0560299fc"), "title" : "A book", "description" : "This is an awesome book about a young artist" }
{ "_id" : ObjectId("5c304b79088cb1a0560299fd"), "title" : "Red T-Shirt", "description" : "This T-Shirt is red and it's pretty awesome!" }
> db.products.find({$text: {$search: "awesome -t-shirt"}})
{ "_id" : ObjectId("5c304b79088cb1a0560299fc"), "title" : "A book", "description" : "This is an awesome book about a young artist" }
```

18. Setting the Default Language & Using Weights

```bash
> db.products.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.products"
        },
        {
                "v" : 2,
                "key" : {
                        "_fts" : "text",
                        "_ftsx" : 1
                },
                "name" : "title_text_description_text",
                "ns" : "contactData.products",
                "weights" : {
                        "description" : 1,
                        "title" : 1
                },
                "default_language" : "english",
                "language_override" : "language",
                "textIndexVersion" : 3
        }
]
> db.products.dropIndex("title_text_description_text")
{ "nIndexesWas" : 2, "ok" : 1 }
> db.products.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.products"
        }
]
```
- We can assign the default language for text indexes using `default_language` and the important for the score of each field using `weights`
```bash
> db.products.createIndex({title: "text", description: "text"}, {default_language: "english", weights: {title: 1, description: 10}})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```

```bash
> db.products.find({$text: {$search: "red"}}, {score: {$meta: "textScore"}})
{ "_id" : ObjectId("5c304b79088cb1a0560299fd"), "title" : "Red T-Shirt", "description" : "This T-Shirt is red and it's pretty awesome!", "score" : 6.666666666666667 }
> db.products.find({$text: {$search: "red ship"}}, {score: {$meta: "textScore"}})
{ "_id" : ObjectId("5c304f53088cb1a0560299fe"), "title" : "A ship", "description" : "Floats perfectly", "score" : 1 }
{ "_id" : ObjectId("5c304b79088cb1a0560299fd"), "title" : "Red T-Shirt", "description" : "This T-Shirt is red and it's pretty awesome!", "score" : 6.666666666666667
```
19. Building Indexes 

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes9.png)

- We can execute a `JavaScript` file using `mongo "filename.js"`
```js
conn = new Mongo();
db = conn.getDB("credit");

for (let i = 0; i < 1000000; i++) {
    db.ratings.insertOne({
        "person_id": i + 1,
        "score": Math.random() * 100,
        "age": Math.floor(Math.random() * 70) + 18 
    })
}
``` 

```bash
C:\WINDOWS\system32>cd C:\Users\juan.pablo.perez\Downloads

C:\Users\juan.pablo.perez\Downloads>mongo credit-rating.js
MongoDB shell version v4.0.5
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("458f0b30-f031-45f9-b374-2ee2b922da3e") }
MongoDB server version: 4.0.5
```

```bash
> show dbs
CompanyData    0.000GB
admin          0.000GB
boxOffice      0.000GB
config         0.000GB
contactData    0.000GB
credit         0.031GB
finalcialData  0.000GB
local          0.000GB
movieData      0.000GB
> use credit
switched to db credit
> show collections
ratings
> db.ratings.find().count()
903785
> db.ratings.find().count()
968020
> db.ratings.find().count()
1000000
> db.ratings.findOne()
{
        "_id" : ObjectId("5c30543c4f531e4e4b821d2b"),
        "person_id" : 1,
        "score" : 60.83608998382033,
        "age" : 32
}
```

```bash
> db.ratings.createIndex({age: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```
```bash
> db.ratings.explain("executionStats").find({age: {$gt: 80}})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "credit.ratings",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "age" : {
                                "$gt" : 80
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "age" : 1
                                },
                                "indexName" : "age_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "age" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "age" : [
                                                "(80.0, inf.0]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 100139,
                "executionTimeMillis" : 254,
                "totalKeysExamined" : 100139,
                "totalDocsExamined" : 100139,
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 100139,
                        "executionTimeMillisEstimate" : 243,
                        "works" : 100140,
                        "advanced" : 100139,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 789,
                        "restoreState" : 789,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "docsExamined" : 100139,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 100139,
                                "executionTimeMillisEstimate" : 63,
                                "works" : 100140,
                                "advanced" : 100139,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 789,
                                "restoreState" : 789,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "age" : 1
                                },
                                "indexName" : "age_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "age" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "age" : [
                                                "(80.0, inf.0]"
                                        ]
                                },
                                "keysExamined" : 100139,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
```
```bash
> db.ratings.dropIndex({age: 1})
{ "nIndexesWas" : 2, "ok" : 1 }
> db.ratings.explain("executionStats").find({age: {$gt: 80}})
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "credit.ratings",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "age" : {
                                "$gt" : 80
                        }
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "age" : {
                                        "$gt" : 80
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 100139,
                "executionTimeMillis" : 680,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 1000000,
                "executionStages" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "age" : {
                                        "$gt" : 80
                                }
                        },
                        "nReturned" : 100139,
                        "executionTimeMillisEstimate" : 567,
                        "works" : 1000002,
                        "advanced" : 100139,
                        "needTime" : 899862,
                        "needYield" : 0,
                        "saveState" : 7828,
                        "restoreState" : 7828,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "direction" : "forward",
                        "docsExamined" : 1000000
                }
        },
        "serverInfo" : {
                "host" : "RIMDUB-0232",
                "port" : 27017,
                "version" : "4.0.5",
                "gitVersion" : "3739429dd92b92d1b0ab120911a23d50bf03c412"
        },
        "ok" : 1
}
>
```
- Create the index again
```bash
> db.ratings.createIndex({age: 1})
``` 
```bash
> db.ratings.createIndex({age: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```
- Open another session with `Mongo` and query one collection at the same time
```bash
> db.ratings.findOne()
```
```bash
> db.ratings.findOne()
{
        "_id" : ObjectId("5c30543c4f531e4e4b821d2b"),
        "person_id" : 1,
        "score" : 60.83608998382033,
        "age" : 32
}
```
- Until the creation of index is finished the query is not shown.
![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes10.png)

- if we try to inder a new document while the index is creting it's not inserted until the index is finally created
![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes11.png)

- If we create the index with `background: true` the insertion is not locked.
```bash
> db.ratings.dropIndex({age: 1})
{ "nIndexesWas" : 2, "ok" : 1 }
> db.ratings.createIndex({age: 1}, {background: true})
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes12.png)

20. Summary

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Indexes13.png)

## Working with Geospatial Data

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Geospatial.png)

1. Adding GeoJSON Data 
- We can find more information on [GeoJSON Objects](https://docs.mongodb.com/manual/reference/geojson/)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Geospatial2.png)

```bash
> use awesomeplaces
switched to db awesomeplaces
> db.places.insertOne({name: "California Academy of Sciences", location: {type: "Point", coordinates: [-122.4724356,37.7672544]}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c3060c33e6bbc70b1dd0721")
}
> db.places.findOne()
{
        "_id" : ObjectId("5c3060c33e6bbc70b1dd0721"),
        "name" : "California Academy of Sciences",
        "location" : {
                "type" : "Point",
                "coordinates" : [
                        -122.4724356,
                        37.7672544
                ]
        }
}
```

2. Running Geo Queries 

- We can use `$near` and `$geometry` to find documents near a defined location
```bash
> db.places.find({location: {$near: {$geometry: {type: "Point", coordinates: [-122.471114, 37.771104]}}}})
Error: error: {
        "ok" : 0,
        "errmsg" : "error processing query: ns=awesomeplaces.placesTree: GEONEAR  field=location maxdist=1.79769e+308 isNearSphere=0\nSort: {}\nProj: {}\n planner returned error: unable to find index for $geoNear query",
        "code" : 2,
        "codeName" : "BadValue"
}
```

- We need to create a Geospatial Index to Track the Distance first
```bash
> db.places.createIndex({location: "2dsphere"})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.places.find({location: {$near: {$geometry: {type: "Point", coordinates: [-122.471114, 37.771104]}}}})
{ "_id" : ObjectId("5c3060c33e6bbc70b1dd0721"), "name" : "California Academy of Sciences", "location" : { "type" : "Point", "coordinates" : [ -122.4724356, 37.7672544 ] } }
```

- We can specify the distance using `$maxDistance` and `$minDistance` in meters
```bash
> db.places.find({location: {$near: {$geometry: {type: "Point", coordinates: [-122.471114, 37.771104]},$maxDistance: 30, $minDistance: 10}}})
> db.places.find({location: {$near: {$geometry: {type: "Point", coordinates: [-122.471114, 37.771104]},$maxDistance: 500, $minDistance: 10}}})
{ "_id" : ObjectId("5c3060c33e6bbc70b1dd0721"), "name" : "California Academy of Sciences", "location" : { "type" : "Point", "coordinates" : [ -122.4724356, 37.7672544 ] } }
```

3. Adding Additional Locations
```bash
> db.places.insertOne({name: "Conservatory of Flowers", location: {type: "Point", coordinates: [-122.4615748,37.7701756]}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c3064983e6bbc70b1dd0722")
}
> db.places.insertOne({name: "Golden Gate Park Tennis Court", location: {type: "Point", coordinates: [-122.4593702,37.7705046]}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c3064f73e6bbc70b1dd0723")
}
> db.places.insertOne({name: "Nopa", location: {type: "Point", coordinates: [-122.4389058,37.7747415]}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c30653e3e6bbc70b1dd0724")
}
> db.places.find()
{ "_id" : ObjectId("5c3060c33e6bbc70b1dd0721"), "name" : "California Academy of Sciences", "location" : { "type" : "Point", "coordinates" : [ -122.4724356, 37.7672544 ] } }
{ "_id" : ObjectId("5c3064983e6bbc70b1dd0722"), "name" : "Conservatory of Flowers", "location" : { "type" : "Point", "coordinates" : [ -122.4615748, 37.7701756 ] } }
{ "_id" : ObjectId("5c3064f73e6bbc70b1dd0723"), "name" : "Golden Gate Park Tennis Court", "location" : { "type" : "Point", "coordinates" : [ -122.4593702, 37.7705046 ] } }
{ "_id" : ObjectId("5c30653e3e6bbc70b1dd0724"), "name" : "Nopa", "location" : { "type" : "Point", "coordinates" : [ -122.4389058, 37.7747415 ] } }
```
4. Finding Places Inside a Certain Area 
- We can use `$geoWithIn` to find places inside a certain area (constant `p%` define the area)
```bash
> const p1 = [-122.4547, 37.77473]
> const p2 = [-122.45303, 37.76641]
> const p3 = [-122.51026, 37.76411]
> const p4 = [-122.51088, 37.77131]
> db.places.find({location: {$geoWithin: {$geometry: {type: "Polygon", coordinates: [[p1, p2, p3, p4, p1]]}}}})
{ "_id" : ObjectId("5c3064983e6bbc70b1dd0722"), "name" : "Conservatory of Flowers", "location" : { "type" : "Point", "coordinates" : [ -122.4615748, 37.7701756 ] } }
{ "_id" : ObjectId("5c3064f73e6bbc70b1dd0723"), "name" : "Golden Gate Park Tennis Court", "location" : { "type" : "Point", "coordinates" : [ -122.4593702, 37.7705046 ] } }
{ "_id" : ObjectId("5c3060c33e6bbc70b1dd0721"), "name" : "California Academy of Sciences", "location" : { "type" : "Point", "coordinates" : [ -122.4724356, 37.7672544 ] } }
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Geospatial3.png)

5. Finding Out If a User Is Inside a Specific Area

```bash
> db.areas.insertOne({name: "Golden Gate Park", area: {type: "Polygon", coordinates: [[p1, p2, p3, p4, p1]]}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c3069063e6bbc70b1dd0725")
}
> db.areas.find()
{ "_id" : ObjectId("5c3069063e6bbc70b1dd0725"), "name" : "Golden Gate Park", "area" : { "type" : "Polygon", "coordinates" : [ [ [ -122.4547, 37.77473 ], [ -122.45303, 37.76641 ], [ -122.51026, 37.76411 ], [ -122.51088, 37.77131 ], [ -122.4547, 37.77473 ] ] ] } }
> db.areas.createIndex({area: "2dsphere"})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```
- We can use `$geoIntersects` to find if a point is in a polygon area.
```bash
> db.areas.find({area: {$geoIntersects: {$geometry: {type: "Point", coordinates: [-122.49089, 37.76992]}}}})
{ "_id" : ObjectId("5c3069063e6bbc70b1dd0725"), "name" : "Golden Gate Park", "area" : { "type" : "Polygon", "coordinates" : [ [ [ -122.4547, 37.77473 ], [ -122.45303, 37.76641 ], [ -122.51026, 37.76411 ], [ -122.51088, 37.77131 ], [ -122.4547, 37.77473 ] ] ] } }
> db.areas.find({area: {$geoIntersects: {$geometry: {type: "Point", coordinates: [ -122.4389058, 37.7747415 ]}}}})
>
```
6. Finding Places Within a Certain Radius 

- We can use `$centerSphere` to find place within a radious distance from a Point place. The second parameter must be in radians, so, each kilometer has to be divided by `6,378.1` to obtain radians.

```bash
> db.places.find({location: {$geoWithin: {$centerSphere: [[-122.46203, 37.77286], 1 / 6378.1]}}})
{ "_id" : ObjectId("5c3064983e6bbc70b1dd0722"), "name" : "Conservatory of Flowers", "location" : { "type" : "Point", "coordinates" : [ -122.4615748, 37.7701756 ] } }
{ "_id" : ObjectId("5c3064f73e6bbc70b1dd0723"), "name" : "Golden Gate Park Tennis Court", "location" : { "type" : "Point", "coordinates" : [ -122.4593702, 37.7705046 ] } }
```

7. Assignment - Geospatial Data

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Geospatial4.png)

- Pick 3 Points on Google Maps and store them in a collection (places)
```bash
> use myPlaces
switched to db myPlaces
> db.places.insertOne({name: "Wanda Metropolitano", location: {type: "Point", coordinates: [-3.599426,40.436350]}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c3073c43e6bbc70b1dd0726")
}
> db.places.insertOne({name: "Tienda Club Atletico de Madrid", location: {type: "Point", coordinates: [-3.601293,40.435656]}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c30740a3e6bbc70b1dd0727")
}
> db.places.insertOne({name: "Aparcamiento Publico", location: {type: "Point", coordinates: [-3.598986,40.434210]}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c3074113e6bbc70b1dd0728")
}
> db.places.find()
{ "_id" : ObjectId("5c3073c43e6bbc70b1dd0726"), "name" : "Wanda Metropolitano", "location" : { "type" : "Point", "coordinates" : [ -3.599426, 40.43635 ] } }
{ "_id" : ObjectId("5c30740a3e6bbc70b1dd0727"), "name" : "Tienda Club Atletico de Madrid", "location" : { "type" : "Point", "coordinates" : [ -3.601293, 40.435656 ] } }
{ "_id" : ObjectId("5c3074113e6bbc70b1dd0728"), "name" : "Aparcamiento Publico", "location" : { "type" : "Point", "coordinates" : [ -3.598986, 40.43421 ] } }
```
- Pick a point and find the nearest points within a min and max distance
```bash
> db.places.createIndex({location: "2dsphere"})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.places.find({location: {$near: {$geometry: {type: "Point", coordinates: [-3.600423, 40.435762]},$maxDistance: 50, $minDistance: 10}}})
> db.places.find({location: {$near: {$geometry: {type: "Point", coordinates: [-3.600423, 40.435762]},$maxDistance: 120, $minDistance: 50}}})
{ "_id" : ObjectId("5c30740a3e6bbc70b1dd0727"), "name" : "Tienda Club Atletico de Madrid", "location" : { "type" : "Point", "coordinates" : [ -3.601293, 40.435656 ] } }
{ "_id" : ObjectId("5c3073c43e6bbc70b1dd0726"), "name" : "Wanda Metropolitano", "location" : { "type" : "Point", "coordinates" : [ -3.599426, 40.43635 ] } }
```
- Pick an area and see which points stored in the collection it contains
```bash
> const p1 = [-3.598151, 40.438031]
> const p2 = [-3.597312, 40.434905]
> const p3 = [-3.601056, 40.434407]
> const p4 = [-3.601700, 40.437575]
> db.places.find({location: {$geoWithin: {$geometry: {type: "Polygon", coordinates: [[p1, p2, p3, p4, p1]]}}}})
{ "_id" : ObjectId("5c3073c43e6bbc70b1dd0726"), "name" : "Wanda Metropolitano", "location" : { "type" : "Point", "coordinates" : [ -3.599426, 40.43635 ] } }
{ "_id" : ObjectId("5c30740a3e6bbc70b1dd0727"), "name" : "Tienda Club Atletico de Madrid", "location" : { "type" : "Point", "coordinates" : [ -3.601293, 40.435656 ] } }
```
- Store at least one area in a different collection
```bash
> db.areas.insertOne({name: "Wanda Metropolitano area", area: {type: "Polygon", coordinates: [[p1, p2, p3, p4, p1]]}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c30779e88558fed5599917c")
}
> db.areas.find()
{ "_id" : ObjectId("5c30779e88558fed5599917c"), "name" : "Wanda Metropolitano area", "area" : { "type" : "Polygon", "coordinates" : [ [ [ -3.598151, 40.438031 ], [ -3.597312, 40.434905 ], [ -3.601056, 40.434407 ], [ -3.6017, 40.437575 ], [ -3.598151, 40.438031 ] ] ] } }
```
- Pick a point and find out which areas in you collection contain that point
```bash
> db.areas.createIndex({area: "2dsphere"})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.areas.find({area: {$geoIntersects: {$geometry: {type: "Point", coordinates: [-3.599426,  40.43635]}}}})
{ "_id" : ObjectId("5c30779e88558fed5599917c"), "name" : "Wanda Metropolitano area", "area" : { "type" : "Polygon", "coordinates" : [ [ [ -3.598151, 40.438031 ], [ -3.597312, 40.434905 ], [ -3.601056, 40.434407 ], [ -3.6017, 40.437575 ], [ -3.598151, 40.438031 ] ] ] } }
```

8. Summary

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Geospatial5.png)

## Understanding the Aggregation Framework

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Aggregation.png)

- We can find more inforation on [Aggregation](https://docs.mongodb.com/manual/aggregation/)

1. Getting Started with the Aggregation Pipeline 

```bash
C:\Users\juan.pablo.perez\Downloads>mongoimport persons.json -d analytics -c persons --jsonArray
2019-01-05T11:56:16.725+0000    connected to: localhost
2019-01-05T11:56:17.443+0000    imported 5000 documents
```

```bash
> show dbs
admin      0.000GB
analytics  0.000GB
config     0.000GB
local      0.000GB
> use analytics
switched to db analytics
> db.persons.findOne()
{
        "_id" : ObjectId("5c309b60aeb428f985a7d6e2"),
        "gender" : "male",
        "name" : {
                "title" : "mr",
                "first" : "carl",
                "last" : "jacobs"
        },
        "location" : {
                "street" : "6948 springfield road",
                "city" : "arklow",
                "state" : "wicklow",
                "postcode" : 71309,
                "coordinates" : {
                        "latitude" : "-29.6721",
                        "longitude" : "-154.6037"
                },
                "timezone" : {
                        "offset" : "-11:00",
                        "description" : "Midway Island, Samoa"
                }
        },
        "email" : "carl.jacobs@example.com",
        "login" : {
                "uuid" : "4f591981-b214-4430-9902-70bc0faa7e81",
                "username" : "organicladybug144",
                "password" : "hank",
                "salt" : "PC6Ig6sD",
                "md5" : "d94aac977512cb2bb005dfa360b40018",
                "sha1" : "a5ffeb65557693e443e195bdf9c066dca33dc47d",
                "sha256" : "f9aa851b943d9a8a876062e48b91b9af190a37779df009a20bc268c25ce48a7f"
        },
        "dob" : {
                "date" : "1984-09-30T01:20:26Z",
                "age" : 33
        },
        "registered" : {
                "date" : "2008-10-29T02:25:24Z",
                "age" : 9
        },
        "phone" : "031-501-5147",
        "cell" : "081-090-3541",
        "id" : {
                "name" : "PPS",
                "value" : "9806982T"
        },
        "picture" : {
                "large" : "https://randomuser.me/api/portraits/men/44.jpg",
                "medium" : "https://randomuser.me/api/portraits/med/men/44.jpg",
                "thumbnail" : "https://randomuser.me/api/portraits/thumb/men/44.jpg"
        },
        "nat" : "IE"
}
> db.persons.find().count()
5000
```
2. Using the Aggregation Framework 
- We have to define a series of steps that are going to be executed sequencially
```bash
db.persons.aggregate([ { $match: {gender: "female"} } ])
{ "_id" : ObjectId("5c309b60aeb428f985a7d6e4"), "gender" : "female", "name" : { "title" : "mrs", "first" : "پریا", "last" : "پارسا" }, "location" : { "street" : "2889 اجاره دار", "city" : "بوشهر", "state" : "خراسان جنوبی", "postcode" : 32528, "coordinates" : { "latitude" : "4.6625", "longitude" : "34.1689" }, "timezone" : { "offset" : "+3:00", "description" : "Baghdad, Riyadh, Moscow, St. Petersburg" } }, "email" : "پریا.پارسا@example.com", "login" : { "uuid" : "75c0d4dd-3a88-42dd-a7ad-5d39b0d8b4b1", "username" : "orangesnake137", "password" : "1031", "salt" : "NRy5mtiy", "md5" : "76aac038463dbbed95cb107811879981", "sha1" : "7013f5d075efcfc35b1cb18298bd7e81db566af2", "sha256" : "6a2792cf9c0386679eb2ca357bcae567907bcfad0d400a56d4c3dd55203d8c61" }, "dob" : { "date" : "1962-01-10T05:26:30Z", "age" : 56 }, "registered" : { "date" : "2015-03-20T08:41:37Z", "age" : 3 }, "phone" : "053-06884781", "cell" : "0993-557-5092", "id" : { "name" : "", "value" : null }, "picture" : { "large" : "https://randomuser.me/api/portraits/women/52.jpg", "medium" : "https://randomuser.me/api/portraits/med/women/52.jpg", "thumbnail" : "https://randomuser.me/api/portraits/thumb/women/52.jpg" }, "nat" : "IR" }
.
.
.
{ "_id" : ObjectId("5c309b60aeb428f985a7d6fe"), "gender" : "female", "name" : { "title" : "ms", "first" : "maya", "last" : "macdonald" }, "location" : { "street" : "100 george st", "city" : "winfield", "state" : "yukon", "postcode" : "K4Q 2U2", "coordinates" : { "latitude" : "9.4191", "longitude" : "-102.1065" }, "timezone" : { "offset" : "+9:00", "description" : "Tokyo, Seoul, Osaka, Sapporo, Yakutsk" } }, "email" : "maya.macdonald@example.com", "login" : { "uuid" : "934e8a54-0d46-4cd7-accd-a0a67f19299b", "username" : "bigfish793", "password" : "kiss", "salt" : "IYteMQWZ", "md5" : "6d975a2ef56a3f129949ee6133dca67e", "sha1" : "22a304b1577abe6b303f016d4069f81c4aac814c", "sha256" : "da09a9dff1d93bc54044e89c18df814f1bc651331708834a310458a96145260c" }, "dob" : { "date" : "1953-01-17T16:10:03Z", "age" : 65 }, "registered" : { "date" : "2009-10-08T16:00:18Z", "age" : 8 }, "phone" : "343-367-3594", "cell" : "329-394-0526", "id" : { "name" : "", "value" : null }, "picture" : { "large" : "https://randomuser.me/api/portraits/women/73.jpg", "medium" : "https://randomuser.me/api/portraits/med/women/73.jpg", "thumbnail" : "https://randomuser.me/api/portraits/thumb/women/73.jpg" }, "nat" : "CA" }
Type "it" for more
```

3. Understanding the Group Stage 
```bash
> db.persons.aggregate([
...         { $match: { gender: "female" } },
...         { $group: { _id: { state: "$location.state"}, totalPersons: { $sum: 1} } }
... ])
{ "_id" : { "state" : "berkshire" }, "totalPersons" : 1 }
{ "_id" : { "state" : "indre-et-loire" }, "totalPersons" : 1 }
{ "_id" : { "state" : "loiret" }, "totalPersons" : 1 }
{ "_id" : { "state" : "cornwall" }, "totalPersons" : 2 }
{ "_id" : { "state" : "sivas" }, "totalPersons" : 1 }
{ "_id" : { "state" : "uşak" }, "totalPersons" : 1 }
{ "_id" : { "state" : "drôme" }, "totalPersons" : 2 }
{ "_id" : { "state" : "leicestershire" }, "totalPersons" : 1 }
{ "_id" : { "state" : "puy-de-dôme" }, "totalPersons" : 1 }
{ "_id" : { "state" : "pas-de-calais" }, "totalPersons" : 1 }
{ "_id" : { "state" : "ankara" }, "totalPersons" : 3 }
{ "_id" : { "state" : "loir-et-cher" }, "totalPersons" : 1 }
{ "_id" : { "state" : "meurthe-et-moselle" }, "totalPersons" : 1 }
{ "_id" : { "state" : "kentucky" }, "totalPersons" : 2 }
{ "_id" : { "state" : "antalya" }, "totalPersons" : 1 }
{ "_id" : { "state" : "south karelia" }, "totalPersons" : 3 }
{ "_id" : { "state" : "ardennes" }, "totalPersons" : 1 }
{ "_id" : { "state" : "landes" }, "totalPersons" : 1 }
{ "_id" : { "state" : "bas-rhin" }, "totalPersons" : 2 }
{ "_id" : { "state" : "gwent" }, "totalPersons" : 1 }
Type "it" for more
> it
{ "_id" : { "state" : "eure-et-loir" }, "totalPersons" : 2 }
{ "_id" : { "state" : "haute-savoie" }, "totalPersons" : 1 }
{ "_id" : { "state" : "cleveland" }, "totalPersons" : 1 }
{ "_id" : { "state" : "sinop" }, "totalPersons" : 3 }
{ "_id" : { "state" : "morbihan" }, "totalPersons" : 2 }
{ "_id" : { "state" : "central" }, "totalPersons" : 2 }
{ "_id" : { "state" : "connecticut" }, "totalPersons" : 3 }
{ "_id" : { "state" : "county antrim" }, "totalPersons" : 1 }
{ "_id" : { "state" : "merseyside" }, "totalPersons" : 2 }
{ "_id" : { "state" : "creuse" }, "totalPersons" : 3 }
{ "_id" : { "state" : "nevşehir" }, "totalPersons" : 2 }
{ "_id" : { "state" : "gers" }, "totalPersons" : 2 }
{ "_id" : { "state" : "erzincan" }, "totalPersons" : 3 }
{ "_id" : { "state" : "california" }, "totalPersons" : 1 }
{ "_id" : { "state" : "vaucluse" }, "totalPersons" : 2 }
{ "_id" : { "state" : "county fermanagh" }, "totalPersons" : 2 }
{ "_id" : { "state" : "gard" }, "totalPersons" : 1 }
{ "_id" : { "state" : "seine-et-marne" }, "totalPersons" : 1 }
{ "_id" : { "state" : "pyrénées-atlantiques" }, "totalPersons" : 3 }
{ "_id" : { "state" : "آذربایجان شرقی" }, "totalPersons" : 2 }
Type "it" for more
```

```bash
> db.persons.find({gender: "female", "location.state": "south karelia"}).count()
3
```
4. Diving Deeper Into the Group Stage 
```bash
> db.persons.aggregate([
...         { $match: { gender: "female" } },
...         { $group: { _id: { state: "$location.state"}, totalPersons: { $sum: 1} } },
...         { $sort: { totalPersons: -1 }}
... ])
{ "_id" : { "state" : "midtjylland" }, "totalPersons" : 33 }
{ "_id" : { "state" : "nordjylland" }, "totalPersons" : 27 }
{ "_id" : { "state" : "australian capital territory" }, "totalPersons" : 24 }
{ "_id" : { "state" : "syddanmark" }, "totalPersons" : 24 }
{ "_id" : { "state" : "new south wales" }, "totalPersons" : 24 }
{ "_id" : { "state" : "south australia" }, "totalPersons" : 22 }
{ "_id" : { "state" : "hovedstaden" }, "totalPersons" : 21 }
{ "_id" : { "state" : "danmark" }, "totalPersons" : 21 }
{ "_id" : { "state" : "overijssel" }, "totalPersons" : 20 }
{ "_id" : { "state" : "queensland" }, "totalPersons" : 20 }
{ "_id" : { "state" : "sjælland" }, "totalPersons" : 19 }
{ "_id" : { "state" : "nova scotia" }, "totalPersons" : 17 }
{ "_id" : { "state" : "gelderland" }, "totalPersons" : 16 }
{ "_id" : { "state" : "yukon" }, "totalPersons" : 16 }
{ "_id" : { "state" : "canterbury" }, "totalPersons" : 16 }
{ "_id" : { "state" : "northwest territories" }, "totalPersons" : 16 }
{ "_id" : { "state" : "bayern" }, "totalPersons" : 15 }
{ "_id" : { "state" : "tasmania" }, "totalPersons" : 15 }
{ "_id" : { "state" : "northern territory" }, "totalPersons" : 15 }
{ "_id" : { "state" : "northern savonia" }, "totalPersons" : 14 }
Type "it" for more
```
5. Assignment - The aggregation framework

- Persons older than 50, group them by gender, obtain how many persons per gender and the average and sort them by the total persons per gender.

```bash
> db.persons.aggregate([
... { $match: { "dob.age": {$gt: 50} } },
... { $group: { _id: { gender: "$gender"}, totalPersons: { $sum: 1 }, average: {$avg: "$dob.age"} } },
... { $sort: { totalPersons: -1 }}
... ])
{ "_id" : { "gender" : "female" }, "totalPersons" : 1125, "average" : 61.90577777777778 }
{ "_id" : { "gender" : "male" }, "totalPersons" : 1079, "average" : 62.066728452270624 }
```


6. Working with $project

```bash
> db.persons.aggregate([
... { $project: { _id:0, gender: 1, fullname: { $concat: ["Hello", "World"]} } }
... ])
{ "gender" : "male", "fullname" : "HelloWorld" }
{ "gender" : "male", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "male", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "male", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "male", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "male", "fullname" : "HelloWorld" }
{ "gender" : "male", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
{ "gender" : "female", "fullname" : "HelloWorld" }
Type "it" for more
```
```bash
> db.persons.aggregate([
... { $project: { _id:0, gender: 1, fullname: { $concat: ["$name.first", " ", "$name.last"]} } }
... ]).pretty()
{ "gender" : "male", "fullname" : "carl jacobs" }
{ "gender" : "male", "fullname" : "harvey chambers" }
{ "gender" : "female", "fullname" : "پریا پارسا" }
{ "gender" : "male", "fullname" : "gideon van drongelen" }
{ "gender" : "female", "fullname" : "maeva wilson" }
{ "gender" : "male", "fullname" : "elijah lewis" }
{ "gender" : "female", "fullname" : "olav oehme" }
{ "gender" : "female", "fullname" : "shona kemperman" }
{ "gender" : "female", "fullname" : "louise graham" }
{ "gender" : "female", "fullname" : "madeleine till" }
{ "gender" : "male", "fullname" : "isolino viana" }
{ "gender" : "female", "fullname" : "mestan kaplangı" }
{ "gender" : "female", "fullname" : "katie welch" }
{ "gender" : "female", "fullname" : "sandra lorenzo" }
{ "gender" : "male", "fullname" : "بنیامین سالاری" }
{ "gender" : "male", "fullname" : "zachary lo" }
{ "gender" : "female", "fullname" : "anne ruiz" }
{ "gender" : "female", "fullname" : "delia durand" }
{ "gender" : "female", "fullname" : "anaëlle adam" }
{ "gender" : "female", "fullname" : "andreia arnaud" }
Type "it" for more
```
```bash
> db.persons.aggregate([
... { $project: { _id:0, gender: 1, fullname: { $concat: [ {$toUpper: "$name.first"}, " ", {$toUpper: "$name.last"}]} } }
... ])
{ "gender" : "male", "fullname" : "CARL JACOBS" }
{ "gender" : "male", "fullname" : "HARVEY CHAMBERS" }
{ "gender" : "female", "fullname" : "پریا پارسا" }
{ "gender" : "male", "fullname" : "GIDEON VAN DRONGELEN" }
{ "gender" : "female", "fullname" : "MAEVA WILSON" }
{ "gender" : "male", "fullname" : "ELIJAH LEWIS" }
{ "gender" : "female", "fullname" : "OLAV OEHME" }
{ "gender" : "female", "fullname" : "SHONA KEMPERMAN" }
{ "gender" : "female", "fullname" : "LOUISE GRAHAM" }
{ "gender" : "female", "fullname" : "MADELEINE TILL" }
{ "gender" : "male", "fullname" : "ISOLINO VIANA" }
{ "gender" : "female", "fullname" : "MESTAN KAPLANGı" }
{ "gender" : "female", "fullname" : "KATIE WELCH" }
{ "gender" : "female", "fullname" : "SANDRA LORENZO" }
{ "gender" : "male", "fullname" : "بنیامین سالاری" }
{ "gender" : "male", "fullname" : "ZACHARY LO" }
{ "gender" : "female", "fullname" : "ANNE RUIZ" }
{ "gender" : "female", "fullname" : "DELIA DURAND" }
{ "gender" : "female", "fullname" : "ANAëLLE ADAM" }
{ "gender" : "female", "fullname" : "ANDREIA ARNAUD" }
Type "it" for more
```
```bash
> db.persons.aggregate([
...     {
...       $project: {
...         _id: 0,
...         gender: 1,
...         fullName: {
...           $concat: [
...             { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.first',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.first' }, 1] }
...               ]
...             },
...             ' ',
...             { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.last',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.last' }, 1] }
...               ]
...             }
...           ]
...         }
...       }
...     }
...   ]).pretty();
{ "gender" : "male", "fullName" : "Carl Jacobs" }
{ "gender" : "male", "fullName" : "Harvey Chambers" }
{ "gender" : "female", "fullName" : "پریا پارسا" }
{ "gender" : "male", "fullName" : "Gideon Van drongelen" }
{ "gender" : "female", "fullName" : "Maeva Wilson" }
{ "gender" : "male", "fullName" : "Elijah Lewis" }
{ "gender" : "female", "fullName" : "Olav Oehme" }
{ "gender" : "female", "fullName" : "Shona Kemperman" }
{ "gender" : "female", "fullName" : "Louise Graham" }
{ "gender" : "female", "fullName" : "Madeleine Till" }
{ "gender" : "male", "fullName" : "Isolino Viana" }
{ "gender" : "female", "fullName" : "Mestan Kaplangı" }
{ "gender" : "female", "fullName" : "Katie Welch" }
{ "gender" : "female", "fullName" : "Sandra Lorenzo" }
{ "gender" : "male", "fullName" : "بنیامین سالاری" }
{ "gender" : "male", "fullName" : "Zachary Lo" }
{ "gender" : "female", "fullName" : "Anne Ruiz" }
{ "gender" : "female", "fullName" : "Delia Durand" }
{ "gender" : "female", "fullName" : "Anaëlle Adam" }
{ "gender" : "female", "fullName" : "Andreia Arnaud" }
Type "it" for more
```

7. Turning the Location Into a geoJSON Object 

```bash
> db.persons.aggregate([
...     {
...       $project: {
...         _id: 0,
...         name: 1,
...         email: 1,
...         location: {
...           type: 'Point',
...           coordinates: [
...             {
...               $convert: {
...                 input: '$location.coordinates.longitude',
...                 to: 'double',
...                 onError: 0.0,
...                 onNull: 0.0
...               }
...             },
...             {
...               $convert: {
...                 input: '$location.coordinates.latitude',
...                 to: 'double',
...                 onError: 0.0,
...                 onNull: 0.0
...               }
...             }
...           ]
...         }
...       }
...     },
...     {
...       $project: {
...         gender: 1,
...         email: 1,
...         location: 1,
...         fullName: {
...           $concat: [
...             { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.first',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.first' }, 1] }
...               ]
...             },
...             ' ',
...             { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.last',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.last' }, 1] }
...               ]
...             }
...           ]
...         }
...       }
...     }
...   ]);
{ "location" : { "type" : "Point", "coordinates" : [ -154.6037, -29.6721 ] }, "email" : "carl.jacobs@example.com", "fullName" : "Carl Jacobs" }
{ "location" : { "type" : "Point", "coordinates" : [ 168.9462, -22.5329 ] }, "email" : "harvey.chambers@example.com", "fullName" : "Harvey Chambers" }
{ "location" : { "type" : "Point", "coordinates" : [ 34.1689, 4.6625 ] }, "email" : "پریا.پارسا@example.com", "fullName" : "پریا پارسا" }
{ "location" : { "type" : "Point", "coordinates" : [ -54.1364, -86.1268 ] }, "email" : "gideon.vandrongelen@example.com", "fullName" : "Gideon Van drongelen" }
{ "location" : { "type" : "Point", "coordinates" : [ 111.3806, -31.6359 ] }, "email" : "maeva.wilson@example.com", "fullName" : "Maeva Wilson" }
{ "location" : { "type" : "Point", "coordinates" : [ -18.5996, -42.6128 ] }, "email" : "elijah.lewis@example.com", "fullName" : "Elijah Lewis" }
{ "location" : { "type" : "Point", "coordinates" : [ -67.5738, -52.8348 ] }, "email" : "olav.oehme@example.com", "fullName" : "Olav Oehme" }
{ "location" : { "type" : "Point", "coordinates" : [ -8.557, -14.4912 ] }, "email" : "shona.kemperman@example.com", "fullName" : "Shona Kemperman" }
{ "location" : { "type" : "Point", "coordinates" : [ 148.0944, 35.5726 ] }, "email" : "louise.graham@example.com", "fullName" : "Louise Graham" }
{ "location" : { "type" : "Point", "coordinates" : [ -172.3753, 83.3998 ] }, "email" : "madeleine.till@example.com", "fullName" : "Madeleine Till" }
{ "location" : { "type" : "Point", "coordinates" : [ 101.5995, 78.8545 ] }, "email" : "isolino.viana@example.com", "fullName" : "Isolino Viana" }
{ "location" : { "type" : "Point", "coordinates" : [ 43.9085, 25.1614 ] }, "email" : "mestan.kaplangı@example.com", "fullName" : "Mestan Kaplangı" }
{ "location" : { "type" : "Point", "coordinates" : [ 135.9359, 71.9851 ] }, "email" : "katie.welch@example.com", "fullName" : "Katie Welch" }
{ "location" : { "type" : "Point", "coordinates" : [ -83.3326, -88.6846 ] }, "email" : "sandra.lorenzo@example.com", "fullName" : "Sandra Lorenzo" }
{ "location" : { "type" : "Point", "coordinates" : [ -90.9499, 21.3388 ] }, "email" : "بنیامین.سالاری@example.com", "fullName" : "بنیامین سالاری" }
{ "location" : { "type" : "Point", "coordinates" : [ -70.2264, 76.4507 ] }, "email" : "zachary.lo@example.com", "fullName" : "Zachary Lo" }
{ "location" : { "type" : "Point", "coordinates" : [ 78.0207, -84.1572 ] }, "email" : "anne.ruiz@example.com", "fullName" : "Anne Ruiz" }
{ "location" : { "type" : "Point", "coordinates" : [ -90.4049, -65.0877 ] }, "email" : "delia.durand@example.com", "fullName" : "Delia Durand" }
{ "location" : { "type" : "Point", "coordinates" : [ 174.2405, 3.6559 ] }, "email" : "anaëlle.adam@example.com", "fullName" : "Anaëlle Adam" }
{ "location" : { "type" : "Point", "coordinates" : [ 59.5703, -67.6434 ] }, "email" : "andreia.arnaud@example.com", "fullName" : "Andreia Arnaud" }
Type "it" for more
```
8. Transforming the Birthdate
```bash
> db.persons.aggregate([
...     {
...       $project: {
...         _id: 0,
...         name: 1,
...         email: 1,
...         birthdate: { $convert: { input: '$dob.date', to: 'date' } },
...         age: "$dob.age",
...         location: {
...           type: 'Point',
...           coordinates: [
...             {
...               $convert: {
...                 input: '$location.coordinates.longitude',
...                 to: 'double',
...                 onError: 0.0,
...                 onNull: 0.0
...               }
...             },
...             {
...               $convert: {
...                 input: '$location.coordinates.latitude',
...                 to: 'double',
...                 onError: 0.0,
...                 onNull: 0.0
...               }
...             }
...           ]
...         }
...       }
...     },
...     {
...       $project: {
...         gender: 1,
...         email: 1,
...         location: 1,
...         birthdate: 1,
...         age: 1,
...         fullName: {
...           $concat: [
...             { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.first',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.first' }, 1] }
...               ]
...             },
...             ' ',
...             { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.last',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.last' }, 1] }
...               ]
...             }
...           ]
...         }
...       }
...     }
...   ]);
{ "location" : { "type" : "Point", "coordinates" : [ -154.6037, -29.6721 ] }, "email" : "carl.jacobs@example.com", "birthdate" : ISODate("1984-09-30T01:20:26Z"), "age" : 33, "fullName" : "Carl Jacobs" }
{ "location" : { "type" : "Point", "coordinates" : [ 168.9462, -22.5329 ] }, "email" : "harvey.chambers@example.com", "birthdate" : ISODate("1988-05-27T00:14:03Z"), "age" : 30, "fullName" : "Harvey Chambers" }
{ "location" : { "type" : "Point", "coordinates" : [ 34.1689, 4.6625 ] }, "email" : "پریا.پارسا@example.com", "birthdate" : ISODate("1962-01-10T05:26:30Z"), "age" : 56, "fullName" : "پریا پارسا" }
{ "location" : { "type" : "Point", "coordinates" : [ -54.1364, -86.1268 ] }, "email" : "gideon.vandrongelen@example.com", "birthdate" : ISODate("1971-03-28T04:47:21Z"), "age" : 47, "fullName" : "Gideon Van drongelen" }
{ "location" : { "type" : "Point", "coordinates" : [ 111.3806, -31.6359 ] }, "email" : "maeva.wilson@example.com", "birthdate" : ISODate("1962-08-11T20:51:07Z"), "age" : 56, "fullName" : "Maeva Wilson" }
{ "location" : { "type" : "Point", "coordinates" : [ -18.5996, -42.6128 ] }, "email" : "elijah.lewis@example.com", "birthdate" : ISODate("1986-03-29T06:40:18Z"), "age" : 32, "fullName" : "Elijah Lewis" }
{ "location" : { "type" : "Point", "coordinates" : [ -67.5738, -52.8348 ] }, "email" : "olav.oehme@example.com", "birthdate" : ISODate("1960-11-28T23:07:18Z"), "age" : 57, "fullName" : "Olav Oehme" }
{ "location" : { "type" : "Point", "coordinates" : [ -8.557, -14.4912 ] }, "email" : "shona.kemperman@example.com", "birthdate" : ISODate("1948-04-23T03:40:22Z"), "age" : 70, "fullName" : "Shona Kemperman" }
{ "location" : { "type" : "Point", "coordinates" : [ 148.0944, 35.5726 ] }, "email" : "louise.graham@example.com", "birthdate" : ISODate("1971-01-21T20:36:16Z"), "age" : 47, "fullName" : "Louise Graham" }
{ "location" : { "type" : "Point", "coordinates" : [ -172.3753, 83.3998 ] }, "email" : "madeleine.till@example.com", "birthdate" : ISODate("1954-05-01T02:34:40Z"), "age" : 64, "fullName" : "Madeleine Till" }
{ "location" : { "type" : "Point", "coordinates" : [ 101.5995, 78.8545 ] }, "email" : "isolino.viana@example.com", "birthdate" : ISODate("1959-03-22T14:53:41Z"), "age" : 59, "fullName" : "Isolino Viana" }
{ "location" : { "type" : "Point", "coordinates" : [ 43.9085, 25.1614 ] }, "email" : "mestan.kaplangı@example.com", "birthdate" : ISODate("1951-12-17T20:03:33Z"), "age" : 66, "fullName" : "Mestan Kaplangı" }
{ "location" : { "type" : "Point", "coordinates" : [ 135.9359, 71.9851 ] }, "email" : "katie.welch@example.com", "birthdate" : ISODate("1990-10-14T05:02:12Z"), "age" : 27, "fullName" : "Katie Welch" }
{ "location" : { "type" : "Point", "coordinates" : [ -83.3326, -88.6846 ] }, "email" : "sandra.lorenzo@example.com", "birthdate" : ISODate("1975-03-23T17:01:45Z"), "age" : 43, "fullName" : "Sandra Lorenzo" }
{ "location" : { "type" : "Point", "coordinates" : [ -90.9499, 21.3388 ] }, "email" : "بنیامین.سالاری@example.com", "birthdate" : ISODate("1984-03-10T22:12:43Z"), "age" : 34, "fullName" : "بنیامین سالاری" }
{ "location" : { "type" : "Point", "coordinates" : [ -70.2264, 76.4507 ] }, "email" : "zachary.lo@example.com", "birthdate" : ISODate("1988-10-17T03:45:04Z"), "age" : 29, "fullName" : "Zachary Lo" }
{ "location" : { "type" : "Point", "coordinates" : [ 78.0207, -84.1572 ] }, "email" : "anne.ruiz@example.com", "birthdate" : ISODate("1982-10-09T12:10:42Z"), "age" : 35, "fullName" : "Anne Ruiz" }
{ "location" : { "type" : "Point", "coordinates" : [ -90.4049, -65.0877 ] }, "email" : "delia.durand@example.com", "birthdate" : ISODate("1966-08-03T09:22:41Z"), "age" : 52, "fullName" : "Delia Durand" }
{ "location" : { "type" : "Point", "coordinates" : [ 174.2405, 3.6559 ] }, "email" : "anaëlle.adam@example.com", "birthdate" : ISODate("1987-10-20T11:33:44Z"), "age" : 30, "fullName" : "Anaëlle Adam" }
{ "location" : { "type" : "Point", "coordinates" : [ 59.5703, -67.6434 ] }, "email" : "andreia.arnaud@example.com", "birthdate" : ISODate("1960-01-31T05:16:10Z"), "age" : 58, "fullName" : "Andreia Arnaud" }
Type "it" for more
```
9. Using Shortcuts for Transformations
```bash
> db.persons.aggregate([
...     {
...       $project: {
...         _id: 0,
...         name: 1,
...         email: 1,
...         birthdate: { $toDate: '$dob.date' },
...         age: "$dob.age",
...         location: {
...           type: 'Point',
...           coordinates: [
...             {
...               $convert: {
...                 input: '$location.coordinates.longitude',
...                 to: 'double',
...                 onError: 0.0,
...                 onNull: 0.0
...               }
...             },
...             {
...               $convert: {
...                 input: '$location.coordinates.latitude',
...                 to: 'double',
...                 onError: 0.0,
...                 onNull: 0.0
...               }
...             }
...           ]
...         }
...       }
...     },
...     {
...       $project: {
...         gender: 1,
...         email: 1,
...         location: 1,
...         birthdate: 1,
...         age: 1,
...         fullName: {
...           $concat: [
...             { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.first',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.first' }, 1] }
...               ]
...             },
...             ' ',
...             { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.last',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.last' }, 1] }
...               ]
...             }
...           ]
...         }
...       }
...     }
...   ])
{ "location" : { "type" : "Point", "coordinates" : [ -154.6037, -29.6721 ] }, "email" : "carl.jacobs@example.com", "birthdate" : ISODate("1984-09-30T01:20:26Z"), "age" : 33, "fullName" : "Carl Jacobs" }
{ "location" : { "type" : "Point", "coordinates" : [ 168.9462, -22.5329 ] }, "email" : "harvey.chambers@example.com", "birthdate" : ISODate("1988-05-27T00:14:03Z"), "age" : 30, "fullName" : "Harvey Chambers" }
{ "location" : { "type" : "Point", "coordinates" : [ 34.1689, 4.6625 ] }, "email" : "پریا.پارسا@example.com", "birthdate" : ISODate("1962-01-10T05:26:30Z"), "age" : 56, "fullName" : "پریا پارسا" }
{ "location" : { "type" : "Point", "coordinates" : [ -54.1364, -86.1268 ] }, "email" : "gideon.vandrongelen@example.com", "birthdate" : ISODate("1971-03-28T04:47:21Z"), "age" : 47, "fullName" : "Gideon Van drongelen" }
{ "location" : { "type" : "Point", "coordinates" : [ 111.3806, -31.6359 ] }, "email" : "maeva.wilson@example.com", "birthdate" : ISODate("1962-08-11T20:51:07Z"), "age" : 56, "fullName" : "Maeva Wilson" }
{ "location" : { "type" : "Point", "coordinates" : [ -18.5996, -42.6128 ] }, "email" : "elijah.lewis@example.com", "birthdate" : ISODate("1986-03-29T06:40:18Z"), "age" : 32, "fullName" : "Elijah Lewis" }
{ "location" : { "type" : "Point", "coordinates" : [ -67.5738, -52.8348 ] }, "email" : "olav.oehme@example.com", "birthdate" : ISODate("1960-11-28T23:07:18Z"), "age" : 57, "fullName" : "Olav Oehme" }
{ "location" : { "type" : "Point", "coordinates" : [ -8.557, -14.4912 ] }, "email" : "shona.kemperman@example.com", "birthdate" : ISODate("1948-04-23T03:40:22Z"), "age" : 70, "fullName" : "Shona Kemperman" }
{ "location" : { "type" : "Point", "coordinates" : [ 148.0944, 35.5726 ] }, "email" : "louise.graham@example.com", "birthdate" : ISODate("1971-01-21T20:36:16Z"), "age" : 47, "fullName" : "Louise Graham" }
{ "location" : { "type" : "Point", "coordinates" : [ -172.3753, 83.3998 ] }, "email" : "madeleine.till@example.com", "birthdate" : ISODate("1954-05-01T02:34:40Z"), "age" : 64, "fullName" : "Madeleine Till" }
{ "location" : { "type" : "Point", "coordinates" : [ 101.5995, 78.8545 ] }, "email" : "isolino.viana@example.com", "birthdate" : ISODate("1959-03-22T14:53:41Z"), "age" : 59, "fullName" : "Isolino Viana" }
{ "location" : { "type" : "Point", "coordinates" : [ 43.9085, 25.1614 ] }, "email" : "mestan.kaplangı@example.com", "birthdate" : ISODate("1951-12-17T20:03:33Z"), "age" : 66, "fullName" : "Mestan Kaplangı" }
{ "location" : { "type" : "Point", "coordinates" : [ 135.9359, 71.9851 ] }, "email" : "katie.welch@example.com", "birthdate" : ISODate("1990-10-14T05:02:12Z"), "age" : 27, "fullName" : "Katie Welch" }
{ "location" : { "type" : "Point", "coordinates" : [ -83.3326, -88.6846 ] }, "email" : "sandra.lorenzo@example.com", "birthdate" : ISODate("1975-03-23T17:01:45Z"), "age" : 43, "fullName" : "Sandra Lorenzo" }
{ "location" : { "type" : "Point", "coordinates" : [ -90.9499, 21.3388 ] }, "email" : "بنیامین.سالاری@example.com", "birthdate" : ISODate("1984-03-10T22:12:43Z"), "age" : 34, "fullName" : "بنیامین سالاری" }
{ "location" : { "type" : "Point", "coordinates" : [ -70.2264, 76.4507 ] }, "email" : "zachary.lo@example.com", "birthdate" : ISODate("1988-10-17T03:45:04Z"), "age" : 29, "fullName" : "Zachary Lo" }
{ "location" : { "type" : "Point", "coordinates" : [ 78.0207, -84.1572 ] }, "email" : "anne.ruiz@example.com", "birthdate" : ISODate("1982-10-09T12:10:42Z"), "age" : 35, "fullName" : "Anne Ruiz" }
{ "location" : { "type" : "Point", "coordinates" : [ -90.4049, -65.0877 ] }, "email" : "delia.durand@example.com", "birthdate" : ISODate("1966-08-03T09:22:41Z"), "age" : 52, "fullName" : "Delia Durand" }
{ "location" : { "type" : "Point", "coordinates" : [ 174.2405, 3.6559 ] }, "email" : "anaëlle.adam@example.com", "birthdate" : ISODate("1987-10-20T11:33:44Z"), "age" : 30, "fullName" : "Anaëlle Adam" }
{ "location" : { "type" : "Point", "coordinates" : [ 59.5703, -67.6434 ] }, "email" : "andreia.arnaud@example.com", "birthdate" : ISODate("1960-01-31T05:16:10Z"), "age" : 58, "fullName" : "Andreia Arnaud" }
Type "it" for more
```
10. Understanding the `$isoWeekYear` Operator 
```bash
> db.persons.aggregate([
...     {
...       $project: {
...         _id: 0,
...         name: 1,
...         email: 1,
...         birthdate: { $toDate: '$dob.date' },
...         age: "$dob.age",
...         location: {
...           type: 'Point',
...           coordinates: [
...             {
...               $convert: {
...                 input: '$location.coordinates.longitude',
...                 to: 'double',
...                 onError: 0.0,
...                 onNull: 0.0
...               }
...             },
...             {
...               $convert: {
...                 input: '$location.coordinates.latitude',
...                 to: 'double',
...                 onError: 0.0,
...                 onNull: 0.0
...               }
...             }
...           ]
...         }
...       }
...     },
...     {
...       $project: {
...         gender: 1,
...         email: 1,
...         location: 1,
...         birthdate: 1,
...         age: 1,
...         fullName: {
...           $concat: [
...             { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.first',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.first' }, 1] }
...               ]
...             },
...             ' ',
...             { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.last',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.last' }, 1] }
...               ]
...             }
...           ]
...         }
...       }
...     },
...     { $group: { _id: { birthYear: { $isoWeekYear: "$birthdate" } }, numPersons: { $sum: 1 } } },
...     { $sort: { numPersons: -1 } }
...   ])
{ "_id" : { "birthYear" : NumberLong(1955) }, "numPersons" : 113 }
{ "_id" : { "birthYear" : NumberLong(1961) }, "numPersons" : 111 }
{ "_id" : { "birthYear" : NumberLong(1993) }, "numPersons" : 110 }
{ "_id" : { "birthYear" : NumberLong(1960) }, "numPersons" : 110 }
{ "_id" : { "birthYear" : NumberLong(1975) }, "numPersons" : 107 }
{ "_id" : { "birthYear" : NumberLong(1945) }, "numPersons" : 106 }
{ "_id" : { "birthYear" : NumberLong(1976) }, "numPersons" : 105 }
{ "_id" : { "birthYear" : NumberLong(1967) }, "numPersons" : 104 }
{ "_id" : { "birthYear" : NumberLong(1990) }, "numPersons" : 103 }
{ "_id" : { "birthYear" : NumberLong(1981) }, "numPersons" : 102 }
{ "_id" : { "birthYear" : NumberLong(1994) }, "numPersons" : 102 }
{ "_id" : { "birthYear" : NumberLong(1995) }, "numPersons" : 101 }
{ "_id" : { "birthYear" : NumberLong(1958) }, "numPersons" : 101 }
{ "_id" : { "birthYear" : NumberLong(1946) }, "numPersons" : 100 }
{ "_id" : { "birthYear" : NumberLong(1948) }, "numPersons" : 100 }
{ "_id" : { "birthYear" : NumberLong(1970) }, "numPersons" : 99 }
{ "_id" : { "birthYear" : NumberLong(1950) }, "numPersons" : 99 }
{ "_id" : { "birthYear" : NumberLong(1983) }, "numPersons" : 99 }
{ "_id" : { "birthYear" : NumberLong(1965) }, "numPersons" : 98 }
{ "_id" : { "birthYear" : NumberLong(1963) }, "numPersons" : 98 }
Type "it" for more
```
11. `$group` vs `$project`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Aggregation2.png)

12. Pushing Elements Into Newly Created Arrays
```bash
> db.friends.insertMany([
...   {
...     "name": "Max",
...     "hobbies": ["Sports", "Cooking"],
...     "age": 29,
...     "examScores": [
...       { "difficulty": 4, "score": 57.9 },
...       { "difficulty": 6, "score": 62.1 },
...       { "difficulty": 3, "score": 88.5 }
...     ]
...   },
...   {
...     "name": "Manu",
...     "hobbies": ["Eating", "Data Analytics"],
...     "age": 30,
...     "examScores": [
...       { "difficulty": 7, "score": 52.1 },
...       { "difficulty": 2, "score": 74.3 },
...       { "difficulty": 5, "score": 53.1 }
...     ]
...   },
...   {
...     "name": "Maria",
...     "hobbies": ["Cooking", "Skiing"],
...     "age": 29,
...     "examScores": [
...       { "difficulty": 3, "score": 75.1 },
...       { "difficulty": 8, "score": 44.2 },
...       { "difficulty": 6, "score": 61.5 }
...     ]
...   }
... ]
... )
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c31a7c8062abe175faba511"),
                ObjectId("5c31a7c8062abe175faba512"),
                ObjectId("5c31a7c8062abe175faba513")
        ]
}
> db.friends.find()
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "hobbies" : [ "Sports", "Cooking" ], "age" : 29, "examScores" : [ { "difficulty" : 4, "score" : 57.9 }, { "difficulty" : 6, "score" : 62.1 }, { "difficulty" : 3, "score" : 88.5 } ] }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "hobbies" : [ "Eating", "Data Analytics" ], "age" : 30, "examScores" : [ { "difficulty" : 7, "score" : 52.1 }, { "difficulty" : 2, "score" : 74.3 }, { "difficulty" : 5, "score" : 53.1 } ] }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "hobbies" : [ "Cooking", "Skiing" ], "age" : 29, "examScores" : [ { "difficulty" : 3, "score" : 75.1 }, { "difficulty" : 8, "score" : 44.2 }, { "difficulty" : 6, "score" : 61.5 } ] }
```
```bash
> db.friends.aggregate([
...     { $group: { _id: { age: "$age" }, allHobbies: { $push: "$hobbies" } } }
...   ])
{ "_id" : { "age" : 30 }, "allHobbies" : [ [ "Eating", "Data Analytics" ] ] }
{ "_id" : { "age" : 29 }, "allHobbies" : [ [ "Sports", "Cooking" ], [ "Cooking", "Skiing" ] ] }
```
13. Understanding the `$unwind` Stage 
```bash
> db.friends.aggregate([
...     { $unwind: "$hobbies" }
...   ])
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "hobbies" : "Sports", "age" : 29, "examScores" : [ { "difficulty" : 4, "score" : 57.9 }, { "difficulty" : 6, "score" : 62.1 }, { "difficulty" : 3, "score" : 88.5 } ] }
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "hobbies" : "Cooking", "age" : 29, "examScores" : [ { "difficulty" : 4, "score" : 57.9 }, { "difficulty" : 6, "score" : 62.1 }, { "difficulty" : 3, "score" : 88.5 } ] }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "hobbies" : "Eating", "age" : 30, "examScores" : [ { "difficulty" : 7, "score" : 52.1 }, { "difficulty" : 2, "score" : 74.3 }, { "difficulty" : 5, "score" : 53.1 } ] }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "hobbies" : "Data Analytics", "age" : 30, "examScores" : [ { "difficulty" : 7, "score" : 52.1 }, { "difficulty" : 2, "score" : 74.3 }, { "difficulty" : 5, "score" : 53.1 } ] }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "hobbies" : "Cooking", "age" : 29, "examScores" : [ { "difficulty" : 3, "score" : 75.1 }, { "difficulty" : 8, "score" : 44.2 }, { "difficulty" : 6, "score" : 61.5 } ] }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "hobbies" : "Skiing", "age" : 29, "examScores" : [ { "difficulty" : 3, "score" : 75.1 }, { "difficulty" : 8, "score" : 44.2 }, { "difficulty" : 6, "score" : 61.5 } ] }
```
```bash
> db.friends.aggregate([
...     { $unwind: "$hobbies" },
...     { $group: { _id: { age: "$age" }, allHobbies: { $push: "$hobbies" } } }
...   ])
{ "_id" : { "age" : 30 }, "allHobbies" : [ "Eating", "Data Analytics" ] }
{ "_id" : { "age" : 29 }, "allHobbies" : [ "Sports", "Cooking", "Cooking", "Skiing" ] }
```
14. Eliminating Duplicate Values 
```bash
> db.friends.aggregate([
...     { $unwind: "$hobbies" },
...     { $group: { _id: { age: "$age" }, allHobbies: { $addToSet: "$hobbies" } } }
...   ])
{ "_id" : { "age" : 30 }, "allHobbies" : [ "Data Analytics", "Eating" ] }
{ "_id" : { "age" : 29 }, "allHobbies" : [ "Skiing", "Cooking", "Sports" ] }
```
15. Using Projection with Arrays
```bash
> db.friends.find()
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "hobbies" : [ "Sports", "Cooking" ], "age" : 29, "examScores" : [ { "difficulty" : 4, "score" : 57.9 }, { "difficulty" : 6, "score" : 62.1 }, { "difficulty" : 3, "score" : 88.5 } ] }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "hobbies" : [ "Eating", "Data Analytics" ], "age" : 30, "examScores" : [ { "difficulty" : 7, "score" : 52.1 }, { "difficulty" : 2, "score" : 74.3 }, { "difficulty" : 5, "score" : 53.1 } ] }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "hobbies" : [ "Cooking", "Skiing" ], "age" : 29, "examScores" : [ { "difficulty" : 3, "score" : 75.1 }, { "difficulty" : 8, "score" : 44.2 }, { "difficulty" : 6, "score" : 61.5 } ] }
>
```
```bash
> db.friends.aggregate([
...     { $project: { _id: 0, examScore: { $slice: ["$examScores", 1] } } }
...   ]).pretty();
{ "examScore" : [ { "difficulty" : 4, "score" : 57.9 } ] }
{ "examScore" : [ { "difficulty" : 7, "score" : 52.1 } ] }
{ "examScore" : [ { "difficulty" : 3, "score" : 75.1 } ] }
```
```bash
> db.friends.aggregate([
...     { $project: { _id: 0, examScore: { $slice: ["$examScores", 2] } } }
...   ])
{ "examScore" : [ { "difficulty" : 4, "score" : 57.9 }, { "difficulty" : 6, "score" : 62.1 } ] }
{ "examScore" : [ { "difficulty" : 7, "score" : 52.1 }, { "difficulty" : 2, "score" : 74.3 } ] }
{ "examScore" : [ { "difficulty" : 3, "score" : 75.1 }, { "difficulty" : 8, "score" : 44.2 } ] }
```
```bash
> db.friends.aggregate([
...     { $project: { _id: 0, examScore: { $slice: ["$examScores",-2] } } }
...   ])
{ "examScore" : [ { "difficulty" : 6, "score" : 62.1 }, { "difficulty" : 3, "score" : 88.5 } ] }
{ "examScore" : [ { "difficulty" : 2, "score" : 74.3 }, { "difficulty" : 5, "score" : 53.1 } ] }
{ "examScore" : [ { "difficulty" : 8, "score" : 44.2 }, { "difficulty" : 6, "score" : 61.5 } ] }
```
```bash
> db.friends.aggregate([
...     { $project: { _id: 0, examScore: { $slice: ["$examScores", 2, 1] } } }
...   ])
{ "examScore" : [ { "difficulty" : 3, "score" : 88.5 } ] }
{ "examScore" : [ { "difficulty" : 5, "score" : 53.1 } ] }
{ "examScore" : [ { "difficulty" : 6, "score" : 61.5 } ] }
```
16. Getting the Length of an Array 
```bash
> db.friends.aggregate([
...     { $project: { _id: 0, numScores: { $size: "$examScores" } } }
...   ])
{ "numScores" : 3 }
{ "numScores" : 3 }
{ "numScores" : 3 }
```
17. Using the `$filter` Operator 
```bash
> db.friends.aggregate([
...     {
...       $project: {
...         _id: 0,
...         scores: { $filter: { input: '$examScores', as: 'sc', cond: { $gt: ["$$sc.score", 60] } } }
...       }
...     }
...   ])
{ "scores" : [ { "difficulty" : 6, "score" : 62.1 }, { "difficulty" : 3, "score" : 88.5 } ] }
{ "scores" : [ { "difficulty" : 2, "score" : 74.3 } ] }
{ "scores" : [ { "difficulty" : 3, "score" : 75.1 }, { "difficulty" : 6, "score" : 61.5 } ] }
```
18. Applying Multiple Operations to our Array 
```bash
>   db.friends.aggregate([
...     { $unwind: "$examScores" },
...     { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
...   ])
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "age" : 29, "score" : 57.9 }
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "age" : 29, "score" : 62.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "age" : 29, "score" : 88.5 }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "age" : 30, "score" : 52.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "age" : 30, "score" : 74.3 }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "age" : 30, "score" : 53.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "age" : 29, "score" : 75.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "age" : 29, "score" : 44.2 }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "age" : 29, "score" : 61.5 }
>
```
```bash
>   db.friends.aggregate([
...     { $unwind: "$examScores" },
...     { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
...     { $sort: { score: -1 } },
...   ])
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "age" : 29, "score" : 88.5 }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "age" : 29, "score" : 75.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "age" : 30, "score" : 74.3 }
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "age" : 29, "score" : 62.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "age" : 29, "score" : 61.5 }
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "age" : 29, "score" : 57.9 }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "age" : 30, "score" : 53.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "age" : 30, "score" : 52.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "age" : 29, "score" : 44.2 }
```
```bash
>   db.friends.aggregate([
...     { $unwind: "$examScores" },
...     { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
...     { $sort: { score: -1 } },
...     { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } },
...   ])
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "maxScore" : 75.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "maxScore" : 74.3 }
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "maxScore" : 88.5 }
```
```bash
> db.friends.aggregate([
...     { $unwind: "$examScores" },
...     { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
...     { $sort: { score: -1 } },
...     { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } },
...     { $sort: { maxScore: -1 } }
...   ])
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "maxScore" : 88.5 }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "maxScore" : 75.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "maxScore" : 74.3 }
>
```
```bash
>   db.friends.aggregate([
...     { $unwind: "$examScores" },
...     { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
...     { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } },
...     { $sort: { maxScore: -1 } }
...   ])
{ "_id" : ObjectId("5c31a7c8062abe175faba511"), "name" : "Max", "maxScore" : 88.5 }
{ "_id" : ObjectId("5c31a7c8062abe175faba513"), "name" : "Maria", "maxScore" : 75.1 }
{ "_id" : ObjectId("5c31a7c8062abe175faba512"), "name" : "Manu", "maxScore" : 74.3 }
```
19. Understanding `$bucket`
```bash
> db.persons.aggregate([
...     {
...       $bucket: {
...         groupBy: '$dob.age',
...         boundaries: [18, 30, 40, 50, 60, 120],
...         output: {
...           numPersons: { $sum: 1 },
...           averageAge: { $avg: '$dob.age' }
...         }
...       }
...     }
...   ])
{ "_id" : 18, "numPersons" : 868, "averageAge" : 25.101382488479263 }
{ "_id" : 30, "numPersons" : 910, "averageAge" : 34.51758241758242 }
{ "_id" : 40, "numPersons" : 918, "averageAge" : 44.42265795206972 }
{ "_id" : 50, "numPersons" : 976, "averageAge" : 54.533811475409834 }
{ "_id" : 60, "numPersons" : 1328, "averageAge" : 66.55798192771084 }
``` 
```bash
> db.persons.aggregate([
...     {
...       $bucket: {
...         groupBy: '$dob.age',
...         boundaries: [18, 30, 40, 50, 60, 120],
...         output: {
...           numPersons: { $sum: 1 },
...           averageAge: { $avg: '$dob.age' },
...    age: { $addToSet: "$dob.age" }
...         }
...       }
...     }
...   ])
{ "_id" : 18, "numPersons" : 868, "averageAge" : 25.101382488479263, "age" : [ 26, 28, 21, 23, 22, 24, 29, 27, 25 ] }
{ "_id" : 30, "numPersons" : 910, "averageAge" : 34.51758241758242, "age" : [ 37, 31, 39, 35, 34, 32, 36, 30, 38, 33 ] }
{ "_id" : 40, "numPersons" : 918, "averageAge" : 44.42265795206972, "age" : [ 41, 44, 49, 40, 45, 42, 48, 46, 43, 47 ] }
{ "_id" : 50, "numPersons" : 976, "averageAge" : 54.533811475409834, "age" : [ 50, 54, 51, 53, 52, 58, 56, 55, 59, 57 ] }
{ "_id" : 60, "numPersons" : 1328, "averageAge" : 66.55798192771084, "age" : [ 74, 60, 73, 63, 68, 69, 72, 67, 65, 61, 71, 66, 62, 64, 70 ] }
```
```bash
> db.persons.aggregate([
...     {
...       $bucketAuto: {
...         groupBy: '$dob.age',
...         buckets: 5,
...         output: {
...           numPersons: { $sum: 1 },
...           averageAge: { $avg: '$dob.age' }
...         }
...       }
...     }
...   ])
{ "_id" : { "min" : 21, "max" : 32 }, "numPersons" : 1042, "averageAge" : 25.99616122840691 }
{ "_id" : { "min" : 32, "max" : 43 }, "numPersons" : 1010, "averageAge" : 36.97722772277228 }
{ "_id" : { "min" : 43, "max" : 54 }, "numPersons" : 1033, "averageAge" : 47.98838334946757 }
{ "_id" : { "min" : 54, "max" : 65 }, "numPersons" : 1064, "averageAge" : 58.99342105263158 }
{ "_id" : { "min" : 65, "max" : 74 }, "numPersons" : 851, "averageAge" : 69.11515863689776 }
```
20. Diving Into Additional Stages 
```bash
> db.persons.aggregate([
...     { $match: { gender: "male" } },
...     { $project: { _id: 0, gender: 1, name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: { $toDate: "$dob.date" } } },
...     { $sort: { birthdate: 1 } },
...     { $limit: 10 }
...   ])
{ "gender" : "male", "name" : "عباس یاسمی", "birthdate" : ISODate("1944-09-12T07:49:20Z") }
{ "gender" : "male", "name" : "پرهام جعفری", "birthdate" : ISODate("1944-09-16T16:03:28Z") }
{ "gender" : "male", "name" : "eli henry", "birthdate" : ISODate("1944-09-17T15:04:13Z") }
{ "gender" : "male", "name" : "kirk brown", "birthdate" : ISODate("1944-09-18T11:03:05Z") }
{ "gender" : "male", "name" : "sebastian olsen", "birthdate" : ISODate("1944-10-13T15:29:05Z") }
{ "gender" : "male", "name" : "joseph thomas", "birthdate" : ISODate("1944-11-06T11:08:45Z") }
{ "gender" : "male", "name" : "conrad scheepbouwer", "birthdate" : ISODate("1944-11-08T02:15:17Z") }
{ "gender" : "male", "name" : "rafael velasco", "birthdate" : ISODate("1944-11-27T07:12:20Z") }
{ "gender" : "male", "name" : "jack jones", "birthdate" : ISODate("1944-12-08T13:03:12Z") }
{ "gender" : "male", "name" : "كيان سلطانی نژاد", "birthdate" : ISODate("1944-12-10T14:59:13Z") }
```

```bash
> db.persons.aggregate([
...     { $match: { gender: "male" } },
...     { $project: { _id: 0, gender: 1, name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: { $toDate: "$dob.date" } } },
...     { $sort: { birthdate: 1 } },
...     { $skip: 10 },
...     { $limit: 10 }
...   ])
{ "gender" : "male", "name" : "pierre boyer", "birthdate" : ISODate("1945-01-01T22:35:55Z") }
{ "gender" : "male", "name" : "emile noel", "birthdate" : ISODate("1945-01-10T03:05:21Z") }
{ "gender" : "male", "name" : "torgeir apeland", "birthdate" : ISODate("1945-01-13T17:04:33Z") }
{ "gender" : "male", "name" : "igor kvistad", "birthdate" : ISODate("1945-01-17T22:13:14Z") }
{ "gender" : "male", "name" : "mariusz gabler", "birthdate" : ISODate("1945-01-22T06:16:30Z") }
{ "gender" : "male", "name" : "lewis freeman", "birthdate" : ISODate("1945-01-28T20:15:28Z") }
{ "gender" : "male", "name" : "theodore moore", "birthdate" : ISODate("1945-02-10T03:34:29Z") }
{ "gender" : "male", "name" : "florian mercier", "birthdate" : ISODate("1945-02-22T04:18:31Z") }
{ "gender" : "male", "name" : "dursun schellekens", "birthdate" : ISODate("1945-02-22T07:28:00Z") }
{ "gender" : "male", "name" : "marcel rey", "birthdate" : ISODate("1945-02-28T02:18:01Z") }
```
21. Writing Pipeline Results Into a New Collection
```bash
> db.persons.aggregate([
...     {
...       $project: {
...         _id: 0,
...         name: 1,
...         email: 1,
...         birthdate: { $toDate: '$dob.date' },
...         age: "$dob.age",
...         location: {
...           type: 'Point',
...           coordinates: [
...             {
...               $convert: {
...                 input: '$location.coordinates.longitude',
...                 to: 'double',
...                 onError: 0.0,
...                 onNull: 0.0
...               }
...             },
...             {
...               $convert: {
...                 input: '$location.coordinates.latitude',
...                 to: 'double',
...                 onError: 0.0,
...                 onNull: 0.0
...               }
...             }
...           ]
...         }
...       }
...     },
...     {
...       $project: {
...         gender: 1,
...         email: 1,
...         location: 1,
...         birthdate: 1,
...         age: 1,
...         fullName: {
...           $concat: [
...             { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.first',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.first' }, 1] }
...               ]
...             },
...             ' ',
...             { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
...             {
...               $substrCP: [
...                 '$name.last',
...                 1,
...                 { $subtract: [{ $strLenCP: '$name.last' }, 1] }
...               ]
...             }
...           ]
...         }
...       }
...     },
...     { $out: "transformedPersons" }
...   ])
> show collections
friends
persons
transformedPersons
> db.transformedPersons.find().count()
5000
> db.transformedPersons.find()
{ "_id" : ObjectId("5c31bcf16f0e05074b81f21c"), "location" : { "type" : "Point", "coordinates" : [ -154.6037, -29.6721 ] }, "email" : "carl.jacobs@example.com", "birthdate" : ISODate("1984-09-30T01:20:26Z"), "age" : 33, "fullName" : "Carl Jacobs" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f21d"), "location" : { "type" : "Point", "coordinates" : [ 168.9462, -22.5329 ] }, "email" : "harvey.chambers@example.com", "birthdate" : ISODate("1988-05-27T00:14:03Z"), "age" : 30, "fullName" : "Harvey Chambers" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f21e"), "location" : { "type" : "Point", "coordinates" : [ 34.1689, 4.6625 ] }, "email" : "پریا.پارسا@example.com", "birthdate" : ISODate("1962-01-10T05:26:30Z"), "age" : 56, "fullName" : "پریا پارسا" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f21f"), "location" : { "type" : "Point", "coordinates" : [ -54.1364, -86.1268 ] }, "email" : "gideon.vandrongelen@example.com", "birthdate" : ISODate("1971-03-28T04:47:21Z"), "age" : 47, "fullName" : "Gideon Van drongelen" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f220"), "location" : { "type" : "Point", "coordinates" : [ 111.3806, -31.6359 ] }, "email" : "maeva.wilson@example.com", "birthdate" : ISODate("1962-08-11T20:51:07Z"), "age" : 56, "fullName" : "Maeva Wilson" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f221"), "location" : { "type" : "Point", "coordinates" : [ -18.5996, -42.6128 ] }, "email" : "elijah.lewis@example.com", "birthdate" : ISODate("1986-03-29T06:40:18Z"), "age" : 32, "fullName" : "Elijah Lewis" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f222"), "location" : { "type" : "Point", "coordinates" : [ -67.5738, -52.8348 ] }, "email" : "olav.oehme@example.com", "birthdate" : ISODate("1960-11-28T23:07:18Z"), "age" : 57, "fullName" : "Olav Oehme" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f223"), "location" : { "type" : "Point", "coordinates" : [ -8.557, -14.4912 ] }, "email" : "shona.kemperman@example.com", "birthdate" : ISODate("1948-04-23T03:40:22Z"), "age" : 70, "fullName" : "Shona Kemperman" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f224"), "location" : { "type" : "Point", "coordinates" : [ 148.0944, 35.5726 ] }, "email" : "louise.graham@example.com", "birthdate" : ISODate("1971-01-21T20:36:16Z"), "age" : 47, "fullName" : "Louise Graham" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f225"), "location" : { "type" : "Point", "coordinates" : [ -172.3753, 83.3998 ] }, "email" : "madeleine.till@example.com", "birthdate" : ISODate("1954-05-01T02:34:40Z"), "age" : 64, "fullName" : "Madeleine Till" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f226"), "location" : { "type" : "Point", "coordinates" : [ 101.5995, 78.8545 ] }, "email" : "isolino.viana@example.com", "birthdate" : ISODate("1959-03-22T14:53:41Z"), "age" : 59, "fullName" : "Isolino Viana" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f227"), "location" : { "type" : "Point", "coordinates" : [ 43.9085, 25.1614 ] }, "email" : "mestan.kaplangı@example.com", "birthdate" : ISODate("1951-12-17T20:03:33Z"), "age" : 66, "fullName" : "Mestan Kaplangı" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f228"), "location" : { "type" : "Point", "coordinates" : [ 135.9359, 71.9851 ] }, "email" : "katie.welch@example.com", "birthdate" : ISODate("1990-10-14T05:02:12Z"), "age" : 27, "fullName" : "Katie Welch" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f229"), "location" : { "type" : "Point", "coordinates" : [ -83.3326, -88.6846 ] }, "email" : "sandra.lorenzo@example.com", "birthdate" : ISODate("1975-03-23T17:01:45Z"), "age" : 43, "fullName" : "Sandra Lorenzo" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f22a"), "location" : { "type" : "Point", "coordinates" : [ -90.9499, 21.3388 ] }, "email" : "بنیامین.سالاری@example.com", "birthdate" : ISODate("1984-03-10T22:12:43Z"), "age" : 34, "fullName" : "بنیامین سالاری" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f22b"), "location" : { "type" : "Point", "coordinates" : [ -70.2264, 76.4507 ] }, "email" : "zachary.lo@example.com", "birthdate" : ISODate("1988-10-17T03:45:04Z"), "age" : 29, "fullName" : "Zachary Lo" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f22c"), "location" : { "type" : "Point", "coordinates" : [ 78.0207, -84.1572 ] }, "email" : "anne.ruiz@example.com", "birthdate" : ISODate("1982-10-09T12:10:42Z"), "age" : 35, "fullName" : "Anne Ruiz" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f22d"), "location" : { "type" : "Point", "coordinates" : [ -90.4049, -65.0877 ] }, "email" : "delia.durand@example.com", "birthdate" : ISODate("1966-08-03T09:22:41Z"), "age" : 52, "fullName" : "Delia Durand" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f22e"), "location" : { "type" : "Point", "coordinates" : [ 174.2405, 3.6559 ] }, "email" : "anaëlle.adam@example.com", "birthdate" : ISODate("1987-10-20T11:33:44Z"), "age" : 30, "fullName" : "Anaëlle Adam" }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f22f"), "location" : { "type" : "Point", "coordinates" : [ 59.5703, -67.6434 ] }, "email" : "andreia.arnaud@example.com", "birthdate" : ISODate("1960-01-31T05:16:10Z"), "age" : 58, "fullName" : "Andreia Arnaud" }
Type "it" for more
```
22. Working with the `$geoNear` Stage 
```bash
> db.transformedPersons.createIndex({location: "2dsphere"})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
> db.transformedPersons.aggregate([
...     {
...       $geoNear: {
...         near: {
...           type: 'Point',
...           coordinates: [-18.4, -42.8]
...         },
...         maxDistance: 10000000,
...         num: 10,
...         query: { age: { $gt: 30 } },
...         distanceField: "distance"
...       }
...     }
...   ])
{ "_id" : ObjectId("5c31bcf16f0e05074b81f221"), "location" : { "type" : "Point", "coordinates" : [ -18.5996, -42.6128 ] }, "email" : "elijah.lewis@example.com", "birthdate" : ISODate("1986-03-29T06:40:18Z"), "age" : 32, "fullName" : "Elijah Lewis", "distance" : 26473.52536319881 }
{ "_id" : ObjectId("5c31bcf16f0e05074b81fd9e"), "location" : { "type" : "Point", "coordinates" : [ -16.8251, -41.9369 ] }, "email" : "delores.thompson@example.com", "birthdate" : ISODate("1984-04-11T07:34:45Z"), "age" : 34, "fullName" : "Delores Thompson", "distance" : 161267.42830913173 }
{ "_id" : ObjectId("5c31bcf16f0e05074b8200de"), "location" : { "type" : "Point", "coordinates" : [ -19.5492, -44.8346 ] }, "email" : "kajus.moldskred@example.com", "birthdate" : ISODate("1978-09-12T00:25:23Z"), "age" : 39, "fullName" : "Kajus Moldskred", "distance" : 244569.7553327739 }
{ "_id" : ObjectId("5c31bcf16f0e05074b81fdb9"), "location" : { "type" : "Point", "coordinates" : [ -20.6738, -40.2524 ] }, "email" : "christian.møller@example.com", "birthdate" : ISODate("1967-07-18T04:08:25Z"), "age" : 51, "fullName" : "Christian Møller", "distance" : 341047.8914183129 }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f558"), "location" : { "type" : "Point", "coordinates" : [ -12.8517, -44.2241 ] }, "email" : "kübra.oraloğlu@example.com", "birthdate" : ISODate("1981-03-12T02:46:43Z"), "age" : 37, "fullName" : "Kübra Oraloğlu", "distance" : 475031.1813780212 }
{ "_id" : ObjectId("5c31bcf16f0e05074b81fefd"), "location" : { "type" : "Point", "coordinates" : [ -24.1976, -42.2063 ] }, "email" : "gökhan.topaloğlu@example.com", "birthdate" : ISODate("1954-04-17T19:24:48Z"), "age" : 64, "fullName" : "Gökhan Topaloğlu", "distance" : 480270.5071752365 }
{ "_id" : ObjectId("5c31bcf16f0e05074b81fdfd"), "location" : { "type" : "Point", "coordinates" : [ -15.6018, -38.2254 ] }, "email" : "ayşe.eliçin@example.com", "birthdate" : ISODate("1959-02-26T17:16:38Z"), "age" : 59, "fullName" : "Ayşe Eliçin", "distance" : 561521.5914865345 }
{ "_id" : ObjectId("5c31bcf16f0e05074b81f997"), "location" : { "type" : "Point", "coordinates" : [ -23.0621, -47.0624 ] }, "email" : "chloe.ennis@example.com", "birthdate" : ISODate("1956-07-16T00:28:06Z"), "age" : 62, "fullName" : "Chloe Ennis", "distance" : 599870.3100224736 }
{ "_id" : ObjectId("5c31bcf16f0e05074b8204c1"), "location" : { "type" : "Point", "coordinates" : [ -26.0729, -42.8626 ] }, "email" : "kuzey.berberoğlu@example.com", "birthdate" : ISODate("1984-08-27T19:20:20Z"), "age" : 34, "fullName" : "Kuzey Berberoğlu", "distance" : 626211.846542541 }
{ "_id" : ObjectId("5c31bcf16f0e05074b81fcc3"), "location" : { "type" : "Point", "coordinates" : [ -10.6398, -41.7477 ] }, "email" : "nellie.chapman@example.com", "birthdate" : ISODate("1982-12-27T07:32:35Z"), "age" : 35, "fullName" : "Nellie Chapman", "distance" : 649597.0679432369 }
```

23. Summary

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Aggregation3.png)

## Working with Numeric Data

1. Number Types - An Overview

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Numeric.png)

2. Understanding Programming Language Defaults 

For this Module, there's one important thing you have to keep in mind about the MongoDB Shell (which we're using via the mongo command): It is based on JavaScript, it's running on JavaScript.

Hence you can use JavaScript syntax in there and hence the default data types are the default JavaScript data types.

That matters especially for the numbers. JavaScript does NOT differentiate between integers and floating point numbers => Every number is a 64bit float instead.

So 12 and 12.0 are exactly the same number in JavaScript and therefore also in the Shell.

3. Working with int32
```bash
> use person
switched to db person
> db.persons.insertOne({ name: "Max", age: 29})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31d514062abe175faba516")
}
> db.persons.find()
{ "_id" : ObjectId("5c31d514062abe175faba516"), "name" : "Max", "age" : 29 }
```

- The current size is `49`

```bash
> db.persons.stats()
{
        "ns" : "person.persons",
        "size" : 49,
        "count" : 1,
        "avgObjSize" : 49,
        "storageSize" : 16384,
        "capped" : false,
        "wiredTiger" : {
                "metadata" : {
                        "formatVersion" : 1
                },
                "creationString" : "access_pattern_hint=none,allocation_size=4KB,app_metadata=(formatVersion=1),assert=(commit_timestamp=none,read_timestamp=none),block_allocation=best,block_compressor=snappy,cache_resident=false,checksum=on,colgroups=,collator=,columns=,dictionary=0,encryption=(keyid=,name=),exclusive=false,extractor=,format=btree,huffman_key=,huffman_value=,ignore_in_memory_cache_size=false,immutable=false,internal_item_max=0,internal_key_max=0,internal_key_truncate=true,internal_page_max=4KB,key_format=q,key_gap=10,leaf_item_max=0,leaf_key_max=0,leaf_page_max=32KB,leaf_value_max=64MB,log=(enabled=true),lsm=(auto_throttle=true,bloom=true,bloom_bit_count=16,bloom_config=,bloom_hash_count=8,bloom_oldest=false,chunk_count_limit=0,chunk_max=5GB,chunk_size=10MB,merge_custom=(prefix=,start_generation=0,suffix=),merge_max=15,merge_min=0),memory_page_image_max=0,memory_page_max=10m,os_cache_dirty_max=0,os_cache_max=0,prefix_compression=false,prefix_compression_min=4,source=,split_deepen_min_child=0,split_deepen_per_child=0,split_pct=90,type=file,value_format=u",
                "type" : "file",
                "uri" : "statistics:table:collection-8-8987709038367340113",
                "LSM" : {
                        "bloom filter false positives" : 0,
                        "bloom filter hits" : 0,
                        "bloom filter misses" : 0,
                        "bloom filter pages evicted from cache" : 0,
                        "bloom filter pages read into cache" : 0,
                        "bloom filters in the LSM tree" : 0,
                        "chunks in the LSM tree" : 0,
                        "highest merge generation in the LSM tree" : 0,
                        "queries that could have benefited from a Bloom filter that did not exist" : 0,
                        "sleep for LSM checkpoint throttle" : 0,
                        "sleep for LSM merge throttle" : 0,
                        "total size of bloom filters" : 0
                },
                "block-manager" : {
                        "allocations requiring file extension" : 3,
                        "blocks allocated" : 3,
                        "blocks freed" : 0,
                        "checkpoint size" : 4096,
                        "file allocation unit size" : 4096,
                        "file bytes available for reuse" : 0,
                        "file magic number" : 120897,
                        "file major version number" : 1,
                        "file size in bytes" : 16384,
                        "minor version number" : 0
                },
                "btree" : {
                        "btree checkpoint generation" : 306,
                        "column-store fixed-size leaf pages" : 0,
                        "column-store internal pages" : 0,
                        "column-store variable-size RLE encoded values" : 0,
                        "column-store variable-size deleted values" : 0,
                        "column-store variable-size leaf pages" : 0,
                        "fixed-record size" : 0,
                        "maximum internal page key size" : 368,
                        "maximum internal page size" : 4096,
                        "maximum leaf page key size" : 2867,
                        "maximum leaf page size" : 32768,
                        "maximum leaf page value size" : 67108864,
                        "maximum tree depth" : 3,
                        "number of key/value pairs" : 0,
                        "overflow pages" : 0,
                        "pages rewritten by compaction" : 0,
                        "row-store internal pages" : 0,
                        "row-store leaf pages" : 0
                },
                "cache" : {
                        "bytes currently in the cache" : 1134,
                        "bytes dirty in the cache cumulative" : 821,
                        "bytes read into cache" : 0,
                        "bytes written from cache" : 143,
                        "checkpoint blocked page eviction" : 0,
                        "data source pages selected for eviction unable to be evicted" : 0,
                        "eviction walk passes of a file" : 0,
                        "eviction walk target pages histogram - 0-9" : 0,
                        "eviction walk target pages histogram - 10-31" : 0,
                        "eviction walk target pages histogram - 128 and higher" : 0,
                        "eviction walk target pages histogram - 32-63" : 0,
                        "eviction walk target pages histogram - 64-128" : 0,
                        "eviction walks abandoned" : 0,
                        "eviction walks gave up because they restarted their walk twice" : 0,
                        "eviction walks gave up because they saw too many pages and found no candidates" : 0,
                        "eviction walks gave up because they saw too many pages and found too few candidates" : 0,
                        "eviction walks reached end of tree" : 0,
                        "eviction walks started from root of tree" : 0,
                        "eviction walks started from saved location in tree" : 0,
                        "hazard pointer blocked page eviction" : 0,
                        "in-memory page passed criteria to be split" : 0,
                        "in-memory page splits" : 0,
                        "internal pages evicted" : 0,
                        "internal pages split during eviction" : 0,
                        "leaf pages split during eviction" : 0,
                        "modified pages evicted" : 0,
                        "overflow pages read into cache" : 0,
                        "page split during eviction deepened the tree" : 0,
                        "page written requiring cache overflow records" : 0,
                        "pages read into cache" : 0,
                        "pages read into cache after truncate" : 1,
                        "pages read into cache after truncate in prepare state" : 0,
                        "pages read into cache requiring cache overflow entries" : 0,
                        "pages requested from the cache" : 2,
                        "pages seen by eviction walk" : 0,
                        "pages written from cache" : 2,
                        "pages written requiring in-memory restoration" : 0,
                        "tracked dirty bytes in the cache" : 0,
                        "unmodified pages evicted" : 0
                },
                "cache_walk" : {
                        "Average difference between current eviction generation when the page was last considered" : 0,
                        "Average on-disk page image size seen" : 0,
                        "Average time in cache for pages that have been visited by the eviction server" : 0,
                        "Average time in cache for pages that have not been visited by the eviction server" : 0,
                        "Clean pages currently in cache" : 0,
                        "Current eviction generation" : 0,
                        "Dirty pages currently in cache" : 0,
                        "Entries in the root page" : 0,
                        "Internal pages currently in cache" : 0,
                        "Leaf pages currently in cache" : 0,
                        "Maximum difference between current eviction generation when the page was last considered" : 0,
                        "Maximum page size seen" : 0,
                        "Minimum on-disk page image size seen" : 0,
                        "Number of pages never visited by eviction server" : 0,
                        "On-disk page image sizes smaller than a single allocation unit" : 0,
                        "Pages created in memory and never written" : 0,
                        "Pages currently queued for eviction" : 0,
                        "Pages that could not be queued for eviction" : 0,
                        "Refs skipped during cache traversal" : 0,
                        "Size of the root page" : 0,
                        "Total number of pages currently in cache" : 0
                },
                "compression" : {
                        "compressed pages read" : 0,
                        "compressed pages written" : 0,
                        "page written failed to compress" : 0,
                        "page written was too small to compress" : 2,
                        "raw compression call failed, additional data available" : 0,
                        "raw compression call failed, no additional data available" : 0,
                        "raw compression call succeeded" : 0
                },
                "cursor" : {
                        "bulk-loaded cursor-insert calls" : 0,
                        "close calls that result in cache" : 0,
                        "create calls" : 1,
                        "cursor operation restarted" : 0,
                        "cursor-insert key and value bytes inserted" : 50,
                        "cursor-remove key bytes removed" : 0,
                        "cursor-update value bytes updated" : 0,
                        "cursors reused from cache" : 1,
                        "insert calls" : 1,
                        "modify calls" : 0,
                        "next calls" : 2,
                        "prev calls" : 1,
                        "remove calls" : 0,
                        "reserve calls" : 0,
                        "reset calls" : 5,
                        "search calls" : 0,
                        "search near calls" : 0,
                        "truncate calls" : 0,
                        "update calls" : 0
                },
                "reconciliation" : {
                        "dictionary matches" : 0,
                        "fast-path pages deleted" : 0,
                        "internal page key bytes discarded using suffix compression" : 0,
                        "internal page multi-block writes" : 0,
                        "internal-page overflow keys" : 0,
                        "leaf page key bytes discarded using prefix compression" : 0,
                        "leaf page multi-block writes" : 0,
                        "leaf-page overflow keys" : 0,
                        "maximum blocks required for a page" : 1,
                        "overflow values written" : 0,
                        "page checksum matches" : 0,
                        "page reconciliation calls" : 2,
                        "page reconciliation calls for eviction" : 0,
                        "pages deleted" : 0
                },
                "session" : {
                        "cached cursor count" : 1,
                        "object compaction" : 0,
                        "open cursor count" : 0
                },
                "transaction" : {
                        "update conflicts" : 0
                }
        },
        "nindexes" : 1,
        "totalIndexSize" : 16384,
        "indexSizes" : {
                "_id_" : 16384
        },
        "ok" : 1
}
```

- The size with only the age is `35`
```bash
> db.persons.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.persons.insertOne({ age: 29})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31d5e8062abe175faba517")
}
> db.persons.stats()
{
        "ns" : "person.persons",
        "size" : 35,
        "count" : 1,
        "avgObjSize" : 35,
        "storageSize" : 32768,
        "capped" : false,
        "wiredTiger" : {
                "metadata" : {
                        "formatVersion" : 1
                },
                "creationString" : "access_pattern_hint=none,allocation_size=4KB,app_metadata=(formatVersion=1),assert=(commit_timestamp=none,read_timestamp=none),block_allocation=best,block_compressor=snappy,cache_resident=false,checksum=on,colgroups=,collator=,columns=,dictionary=0,encryption=(keyid=,name=),exclusive=false,extractor=,format=btree,huffman_key=,huffman_value=,ignore_in_memory_cache_size=false,immutable=false,internal_item_max=0,internal_key_max=0,internal_key_truncate=true,internal_page_max=4KB,key_format=q,key_gap=10,leaf_item_max=0,leaf_key_max=0,leaf_page_max=32KB,leaf_value_max=64MB,log=(enabled=true),lsm=(auto_throttle=true,bloom=true,bloom_bit_count=16,bloom_config=,bloom_hash_count=8,bloom_oldest=false,chunk_count_limit=0,chunk_max=5GB,chunk_size=10MB,merge_custom=(prefix=,start_generation=0,suffix=),merge_max=15,merge_min=0),memory_page_image_max=0,memory_page_max=10m,os_cache_dirty_max=0,os_cache_max=0,prefix_compression=false,prefix_compression_min=4,source=,split_deepen_min_child=0,split_deepen_per_child=0,split_pct=90,type=file,value_format=u",
                "type" : "file",
                "uri" : "statistics:table:collection-8-8987709038367340113",
                "LSM" : {
                        "bloom filter false positives" : 0,
                        "bloom filter hits" : 0,
                        "bloom filter misses" : 0,
                        "bloom filter pages evicted from cache" : 0,
                        "bloom filter pages read into cache" : 0,
                        "bloom filters in the LSM tree" : 0,
                        "chunks in the LSM tree" : 0,
                        "highest merge generation in the LSM tree" : 0,
                        "queries that could have benefited from a Bloom filter that did not exist" : 0,
                        "sleep for LSM checkpoint throttle" : 0,
                        "sleep for LSM merge throttle" : 0,
                        "total size of bloom filters" : 0
                },
                "block-manager" : {
                        "allocations requiring file extension" : 7,
                        "blocks allocated" : 7,
                        "blocks freed" : 1,
                        "checkpoint size" : 4096,
                        "file allocation unit size" : 4096,
                        "file bytes available for reuse" : 12288,
                        "file magic number" : 120897,
                        "file major version number" : 1,
                        "file size in bytes" : 32768,
                        "minor version number" : 0
                },
                "btree" : {
                        "btree checkpoint generation" : 308,
                        "column-store fixed-size leaf pages" : 0,
                        "column-store internal pages" : 0,
                        "column-store variable-size RLE encoded values" : 0,
                        "column-store variable-size deleted values" : 0,
                        "column-store variable-size leaf pages" : 0,
                        "fixed-record size" : 0,
                        "maximum internal page key size" : 368,
                        "maximum internal page size" : 4096,
                        "maximum leaf page key size" : 2867,
                        "maximum leaf page size" : 32768,
                        "maximum leaf page value size" : 67108864,
                        "maximum tree depth" : 3,
                        "number of key/value pairs" : 0,
                        "overflow pages" : 0,
                        "pages rewritten by compaction" : 0,
                        "row-store internal pages" : 0,
                        "row-store leaf pages" : 0
                },
                "cache" : {
                        "bytes currently in the cache" : 1307,
                        "bytes dirty in the cache cumulative" : 1990,
                        "bytes read into cache" : 0,
                        "bytes written from cache" : 272,
                        "checkpoint blocked page eviction" : 0,
                        "data source pages selected for eviction unable to be evicted" : 0,
                        "eviction walk passes of a file" : 0,
                        "eviction walk target pages histogram - 0-9" : 0,
                        "eviction walk target pages histogram - 10-31" : 0,
                        "eviction walk target pages histogram - 128 and higher" : 0,
                        "eviction walk target pages histogram - 32-63" : 0,
                        "eviction walk target pages histogram - 64-128" : 0,
                        "eviction walks abandoned" : 0,
                        "eviction walks gave up because they restarted their walk twice" : 0,
                        "eviction walks gave up because they saw too many pages and found no candidates" : 0,
                        "eviction walks gave up because they saw too many pages and found too few candidates" : 0,
                        "eviction walks reached end of tree" : 0,
                        "eviction walks started from root of tree" : 0,
                        "eviction walks started from saved location in tree" : 0,
                        "hazard pointer blocked page eviction" : 0,
                        "in-memory page passed criteria to be split" : 0,
                        "in-memory page splits" : 0,
                        "internal pages evicted" : 0,
                        "internal pages split during eviction" : 0,
                        "leaf pages split during eviction" : 0,
                        "modified pages evicted" : 0,
                        "overflow pages read into cache" : 0,
                        "page split during eviction deepened the tree" : 0,
                        "page written requiring cache overflow records" : 0,
                        "pages read into cache" : 0,
                        "pages read into cache after truncate" : 1,
                        "pages read into cache after truncate in prepare state" : 0,
                        "pages read into cache requiring cache overflow entries" : 0,
                        "pages requested from the cache" : 8,
                        "pages seen by eviction walk" : 0,
                        "pages written from cache" : 4,
                        "pages written requiring in-memory restoration" : 0,
                        "tracked dirty bytes in the cache" : 0,
                        "unmodified pages evicted" : 0
                },
                "cache_walk" : {
                        "Average difference between current eviction generation when the page was last considered" : 0,
                        "Average on-disk page image size seen" : 0,
                        "Average time in cache for pages that have been visited by the eviction server" : 0,
                        "Average time in cache for pages that have not been visited by the eviction server" : 0,
                        "Clean pages currently in cache" : 0,
                        "Current eviction generation" : 0,
                        "Dirty pages currently in cache" : 0,
                        "Entries in the root page" : 0,
                        "Internal pages currently in cache" : 0,
                        "Leaf pages currently in cache" : 0,
                        "Maximum difference between current eviction generation when the page was last considered" : 0,
                        "Maximum page size seen" : 0,
                        "Minimum on-disk page image size seen" : 0,
                        "Number of pages never visited by eviction server" : 0,
                        "On-disk page image sizes smaller than a single allocation unit" : 0,
                        "Pages created in memory and never written" : 0,
                        "Pages currently queued for eviction" : 0,
                        "Pages that could not be queued for eviction" : 0,
                        "Refs skipped during cache traversal" : 0,
                        "Size of the root page" : 0,
                        "Total number of pages currently in cache" : 0
                },
                "compression" : {
                        "compressed pages read" : 0,
                        "compressed pages written" : 0,
                        "page written failed to compress" : 0,
                        "page written was too small to compress" : 4,
                        "raw compression call failed, additional data available" : 0,
                        "raw compression call failed, no additional data available" : 0,
                        "raw compression call succeeded" : 0
                },
                "cursor" : {
                        "bulk-loaded cursor-insert calls" : 0,
                        "close calls that result in cache" : 0,
                        "create calls" : 2,
                        "cursor operation restarted" : 0,
                        "cursor-insert key and value bytes inserted" : 86,
                        "cursor-remove key bytes removed" : 1,
                        "cursor-update value bytes updated" : 0,
                        "cursors reused from cache" : 3,
                        "insert calls" : 2,
                        "modify calls" : 0,
                        "next calls" : 4,
                        "prev calls" : 2,
                        "remove calls" : 1,
                        "reserve calls" : 0,
                        "reset calls" : 13,
                        "search calls" : 2,
                        "search near calls" : 1,
                        "truncate calls" : 0,
                        "update calls" : 0
                },
                "reconciliation" : {
                        "dictionary matches" : 0,
                        "fast-path pages deleted" : 0,
                        "internal page key bytes discarded using suffix compression" : 0,
                        "internal page multi-block writes" : 0,
                        "internal-page overflow keys" : 0,
                        "leaf page key bytes discarded using prefix compression" : 0,
                        "leaf page multi-block writes" : 0,
                        "leaf-page overflow keys" : 0,
                        "maximum blocks required for a page" : 1,
                        "overflow values written" : 0,
                        "page checksum matches" : 0,
                        "page reconciliation calls" : 4,
                        "page reconciliation calls for eviction" : 0,
                        "pages deleted" : 0
                },
                "session" : {
                        "cached cursor count" : 2,
                        "object compaction" : 0,
                        "open cursor count" : 0
                },
                "transaction" : {
                        "update conflicts" : 0
                }
        },
        "nindexes" : 1,
        "totalIndexSize" : 32768,
        "indexSizes" : {
                "_id_" : 32768
        },
        "ok" : 1
}
```
- If we force the age to bin Int32 the size is `31`
```bash
> db.persons.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.persons.insertOne({ age: NumberInt(29)})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31d661062abe175faba518")
}
> db.persons.stats()
{
        "ns" : "person.persons",
        "size" : 31,
        "count" : 1,
        "avgObjSize" : 31,
        "storageSize" : 32768,
        "capped" : false,
        "wiredTiger" : {
                "metadata" : {
                        "formatVersion" : 1
                },
                "creationString" : "access_pattern_hint=none,allocation_size=4KB,app_metadata=(formatVersion=1),assert=(commit_timestamp=none,read_timestamp=none),block_allocation=best,block_compressor=snappy,cache_resident=false,checksum=on,colgroups=,collator=,columns=,dictionary=0,encryption=(keyid=,name=),exclusive=false,extractor=,format=btree,huffman_key=,huffman_value=,ignore_in_memory_cache_size=false,immutable=false,internal_item_max=0,internal_key_max=0,internal_key_truncate=true,internal_page_max=4KB,key_format=q,key_gap=10,leaf_item_max=0,leaf_key_max=0,leaf_page_max=32KB,leaf_value_max=64MB,log=(enabled=true),lsm=(auto_throttle=true,bloom=true,bloom_bit_count=16,bloom_config=,bloom_hash_count=8,bloom_oldest=false,chunk_count_limit=0,chunk_max=5GB,chunk_size=10MB,merge_custom=(prefix=,start_generation=0,suffix=),merge_max=15,merge_min=0),memory_page_image_max=0,memory_page_max=10m,os_cache_dirty_max=0,os_cache_max=0,prefix_compression=false,prefix_compression_min=4,source=,split_deepen_min_child=0,split_deepen_per_child=0,split_pct=90,type=file,value_format=u",
                "type" : "file",
                "uri" : "statistics:table:collection-8-8987709038367340113",
                "LSM" : {
                        "bloom filter false positives" : 0,
                        "bloom filter hits" : 0,
                        "bloom filter misses" : 0,
                        "bloom filter pages evicted from cache" : 0,
                        "bloom filter pages read into cache" : 0,
                        "bloom filters in the LSM tree" : 0,
                        "chunks in the LSM tree" : 0,
                        "highest merge generation in the LSM tree" : 0,
                        "queries that could have benefited from a Bloom filter that did not exist" : 0,
                        "sleep for LSM checkpoint throttle" : 0,
                        "sleep for LSM merge throttle" : 0,
                        "total size of bloom filters" : 0
                },
                "block-manager" : {
                        "allocations requiring file extension" : 7,
                        "blocks allocated" : 8,
                        "blocks freed" : 2,
                        "checkpoint size" : 0,
                        "file allocation unit size" : 4096,
                        "file bytes available for reuse" : 24576,
                        "file magic number" : 120897,
                        "file major version number" : 1,
                        "file size in bytes" : 32768,
                        "minor version number" : 0
                },
                "btree" : {
                        "btree checkpoint generation" : 310,
                        "column-store fixed-size leaf pages" : 0,
                        "column-store internal pages" : 0,
                        "column-store variable-size RLE encoded values" : 0,
                        "column-store variable-size deleted values" : 0,
                        "column-store variable-size leaf pages" : 0,
                        "fixed-record size" : 0,
                        "maximum internal page key size" : 368,
                        "maximum internal page size" : 4096,
                        "maximum leaf page key size" : 2867,
                        "maximum leaf page size" : 32768,
                        "maximum leaf page value size" : 67108864,
                        "maximum tree depth" : 3,
                        "number of key/value pairs" : 0,
                        "overflow pages" : 0,
                        "pages rewritten by compaction" : 0,
                        "row-store internal pages" : 0,
                        "row-store leaf pages" : 0
                },
                "cache" : {
                        "bytes currently in the cache" : 1099,
                        "bytes dirty in the cache cumulative" : 3695,
                        "bytes read into cache" : 0,
                        "bytes written from cache" : 272,
                        "checkpoint blocked page eviction" : 0,
                        "data source pages selected for eviction unable to be evicted" : 0,
                        "eviction walk passes of a file" : 0,
                        "eviction walk target pages histogram - 0-9" : 0,
                        "eviction walk target pages histogram - 10-31" : 0,
                        "eviction walk target pages histogram - 128 and higher" : 0,
                        "eviction walk target pages histogram - 32-63" : 0,
                        "eviction walk target pages histogram - 64-128" : 0,
                        "eviction walks abandoned" : 0,
                        "eviction walks gave up because they restarted their walk twice" : 0,
                        "eviction walks gave up because they saw too many pages and found no candidates" : 0,
                        "eviction walks gave up because they saw too many pages and found too few candidates" : 0,
                        "eviction walks reached end of tree" : 0,
                        "eviction walks started from root of tree" : 0,
                        "eviction walks started from saved location in tree" : 0,
                        "hazard pointer blocked page eviction" : 0,
                        "in-memory page passed criteria to be split" : 0,
                        "in-memory page splits" : 0,
                        "internal pages evicted" : 0,
                        "internal pages split during eviction" : 0,
                        "leaf pages split during eviction" : 0,
                        "modified pages evicted" : 1,
                        "overflow pages read into cache" : 0,
                        "page split during eviction deepened the tree" : 0,
                        "page written requiring cache overflow records" : 0,
                        "pages read into cache" : 0,
                        "pages read into cache after truncate" : 2,
                        "pages read into cache after truncate in prepare state" : 0,
                        "pages read into cache requiring cache overflow entries" : 0,
                        "pages requested from the cache" : 14,
                        "pages seen by eviction walk" : 0,
                        "pages written from cache" : 4,
                        "pages written requiring in-memory restoration" : 0,
                        "tracked dirty bytes in the cache" : 640,
                        "unmodified pages evicted" : 0
                },
                "cache_walk" : {
                        "Average difference between current eviction generation when the page was last considered" : 0,
                        "Average on-disk page image size seen" : 0,
                        "Average time in cache for pages that have been visited by the eviction server" : 0,
                        "Average time in cache for pages that have not been visited by the eviction server" : 0,
                        "Clean pages currently in cache" : 0,
                        "Current eviction generation" : 0,
                        "Dirty pages currently in cache" : 0,
                        "Entries in the root page" : 0,
                        "Internal pages currently in cache" : 0,
                        "Leaf pages currently in cache" : 0,
                        "Maximum difference between current eviction generation when the page was last considered" : 0,
                        "Maximum page size seen" : 0,
                        "Minimum on-disk page image size seen" : 0,
                        "Number of pages never visited by eviction server" : 0,
                        "On-disk page image sizes smaller than a single allocation unit" : 0,
                        "Pages created in memory and never written" : 0,
                        "Pages currently queued for eviction" : 0,
                        "Pages that could not be queued for eviction" : 0,
                        "Refs skipped during cache traversal" : 0,
                        "Size of the root page" : 0,
                        "Total number of pages currently in cache" : 0
                },
                "compression" : {
                        "compressed pages read" : 0,
                        "compressed pages written" : 0,
                        "page written failed to compress" : 0,
                        "page written was too small to compress" : 4,
                        "raw compression call failed, additional data available" : 0,
                        "raw compression call failed, no additional data available" : 0,
                        "raw compression call succeeded" : 0
                },
                "cursor" : {
                        "bulk-loaded cursor-insert calls" : 0,
                        "close calls that result in cache" : 0,
                        "create calls" : 2,
                        "cursor operation restarted" : 0,
                        "cursor-insert key and value bytes inserted" : 118,
                        "cursor-remove key bytes removed" : 2,
                        "cursor-update value bytes updated" : 0,
                        "cursors reused from cache" : 6,
                        "insert calls" : 3,
                        "modify calls" : 0,
                        "next calls" : 6,
                        "prev calls" : 3,
                        "remove calls" : 2,
                        "reserve calls" : 0,
                        "reset calls" : 21,
                        "search calls" : 4,
                        "search near calls" : 2,
                        "truncate calls" : 0,
                        "update calls" : 0
                },
                "reconciliation" : {
                        "dictionary matches" : 0,
                        "fast-path pages deleted" : 0,
                        "internal page key bytes discarded using suffix compression" : 0,
                        "internal page multi-block writes" : 0,
                        "internal-page overflow keys" : 0,
                        "leaf page key bytes discarded using prefix compression" : 0,
                        "leaf page multi-block writes" : 0,
                        "leaf-page overflow keys" : 0,
                        "maximum blocks required for a page" : 1,
                        "overflow values written" : 0,
                        "page checksum matches" : 0,
                        "page reconciliation calls" : 6,
                        "page reconciliation calls for eviction" : 1,
                        "pages deleted" : 2
                },
                "session" : {
                        "cached cursor count" : 2,
                        "object compaction" : 0,
                        "open cursor count" : 0
                },
                "transaction" : {
                        "update conflicts" : 0
                }
        },
        "nindexes" : 1,
        "totalIndexSize" : 32768,
        "indexSizes" : {
                "_id_" : 32768
        },
        "ok" : 1
}
```
4. Working with int64 
- Insert a company with a value of $ 5,000,000,000 with a Int32 type. The value inserted is not the expected one.
```bash
> db.companies.insertOne({ valuation: NumberInt("5000000000")})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31d817062abe175faba519")
}
> db.companies.find()
{ "_id" : ObjectId("5c31d817062abe175faba519"), "valuation" : 705032704 }
```
- We can try to insert the maximum Int32 value and increasing it by 1
```bash
> db.companies.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.companies.insertOne({ valuation: NumberInt("2147483647")})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31d893062abe175faba51a")
}
> db.companies.find()
{ "_id" : ObjectId("5c31d893062abe175faba51a"), "valuation" : 2147483647 }
> db.companies.insertOne({ valuation: NumberInt("2147483648")})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31d8b4062abe175faba51b")
}
> db.companies.find()
{ "_id" : ObjectId("5c31d893062abe175faba51a"), "valuation" : 2147483647 }
{ "_id" : ObjectId("5c31d8b4062abe175faba51b"), "valuation" : -2147483648 }
```
- If we insert the value without the NumberInt function it is inserted correctly (the command line for MongoDb is 64bit float  by default)
```bash
> db.companies.insertOne({ valuation: 2147483648})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31d8f6062abe175faba51c")
}
> db.companies.find()
{ "_id" : ObjectId("5c31d893062abe175faba51a"), "valuation" : 2147483647 }
{ "_id" : ObjectId("5c31d8b4062abe175faba51b"), "valuation" : -2147483648 }
{ "_id" : ObjectId("5c31d8f6062abe175faba51c"), "valuation" : 2147483648 }
```
- We have to use `NumberLong` to ensure it is inserted as Int64.
```bash
> db.companies.insertOne({ valuation: NumberLong(2147483648)})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31d9bf062abe175faba51d")
}
> db.companies.find()
{ "_id" : ObjectId("5c31d893062abe175faba51a"), "valuation" : 2147483647 }
{ "_id" : ObjectId("5c31d8b4062abe175faba51b"), "valuation" : -2147483648 }
{ "_id" : ObjectId("5c31d8f6062abe175faba51c"), "valuation" : 2147483648 }
{ "_id" : ObjectId("5c31d9bf062abe175faba51d"), "valuation" : NumberLong("2147483648") }
```
- We cannot insert the maximum Int64 value using NumberLong withour quotations in the shell
```bash
> db.companies.insertOne({ valuation: NumberLong(9223372036854775807)})
2019-01-06T10:36:35.963+0000 E QUERY    [js] Error: number passed to NumberLong must be representable as an int64_t :
@(shell):1:37
``` 
- We have to use quotations
```bash
> db.companies.insertOne({ valuation: NumberLong("9223372036854775807")})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31da96062abe175faba51e")
}
> db.companies.find()
{ "_id" : ObjectId("5c31d893062abe175faba51a"), "valuation" : 2147483647 }
{ "_id" : ObjectId("5c31d8b4062abe175faba51b"), "valuation" : -2147483648 }
{ "_id" : ObjectId("5c31d8f6062abe175faba51c"), "valuation" : 2147483648 }
{ "_id" : ObjectId("5c31d9bf062abe175faba51d"), "valuation" : NumberLong("2147483648") }
{ "_id" : ObjectId("5c31da96062abe175faba51e"), "valuation" : NumberLong("9223372036854775807") }
> db.companies.insertOne({ valuation: NumberLong("9223372036854775808")})
2019-01-06T10:38:26.449+0000 E QUERY    [js] Error: could not convert string to long long :
@(shell):1:37
```
5. Doing Maths with Floats int32s & int64s 
- We shouldn't store numbers as strings because any calculation will just fail
```bash
> db.accounts.insert({name: "Max", amount: "12345678903456784567893456784567"})
WriteResult({ "nInserted" : 1 })
> db.accounts.find()
{ "_id" : ObjectId("5c31dbaa062abe175faba51f"), "name" : "Max", "amount" : "12345678903456784567893456784567" }
> db.accounts.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
```
```bash
> db.accounts.insert({name: "Max", amount: "10"})
WriteResult({ "nInserted" : 1 })
> db.accounts.find()
{ "_id" : ObjectId("5c31dc0d062abe175faba520"), "name" : "Max", "amount" : "10" }
> db.accounts.updateOne({}, {$inc: {amount: 10}})
2019-01-06T10:45:42.971+0000 E QUERY    [js] WriteError: Cannot apply $inc to a value of non-numeric type. {_id: ObjectId('5c31dc0d062abe175faba520')} has the field 'amount' of non-numeric type string :
WriteError({
        "index" : 0,
        "code" : 14,
        "errmsg" : "Cannot apply $inc to a value of non-numeric type. {_id: ObjectId('5c31dc0d062abe175faba520')} has the field 'amount' of non-numeric type string",
        "op" : {
                "q" : {

                },
                "u" : {
                        "$inc" : {
                                "amount" : 10
                        }
                },
                "multi" : false,
                "upsert" : false
        }
})
WriteError@src/mongo/shell/bulk_api.js:461:48
Bulk/mergeBatchResults@src/mongo/shell/bulk_api.js:841:49
Bulk/executeBatch@src/mongo/shell/bulk_api.js:906:13
Bulk/this.execute@src/mongo/shell/bulk_api.js:1150:21
DBCollection.prototype.updateOne@src/mongo/shell/crud_api.js:572:17
@(shell):1:1
```
```bash
{ "acknowledged" : true, "deletedCount" : 1 }
> db.accounts.insert({name: "Max", amount: NumberInt("10")})
WriteResult({ "nInserted" : 1 })
> db.accounts.updateOne({}, {$inc: {amount: 10}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.accounts.find()
{ "_id" : ObjectId("5c31dca7062abe175faba521"), "name" : "Max", "amount" : 20 }
```
- To ensure it is stored as Int32 we have to use NumberInt with $inc
```bash
> db.accounts.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.accounts.insert({name: "Max", amount: NumberInt("10")})
WriteResult({ "nInserted" : 1 })
> db.accounts.updateOne({}, {$inc: {amount: NumberInt("10")}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.accounts.find()
{ "_id" : ObjectId("5c31dce5062abe175faba522"), "name" : "Max", "amount" : 20 }
```
![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Numeric2.png)
```bash
> db.companies.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 5 }
> db.companies.insertOne({valuation: NumberLong("123456789123456789")})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31de37062abe175faba523")
}
> db.companies.find()
{ "_id" : ObjectId("5c31de37062abe175faba523"), "valuation" : NumberLong("123456789123456789") }
```
- If we don't use `NumberLong` or `NumberInt` with `$inc` it is not stored correctly
```bash
> db.companies.updateOne({}, {$inc: {valuation: 1}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.companies.find()
{ "_id" : ObjectId("5c31de37062abe175faba523"), "valuation" : 123456789123456780 }
```
```bash
> db.companies.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.companies.insertOne({valuation: NumberLong("123456789123456789")})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31dec5062abe175faba524")
}
> db.companies.updateOne({}, {$inc: {valuation: NumberInt(1)}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.companies.find()
{ "_id" : ObjectId("5c31dec5062abe175faba524"), "valuation" : NumberLong("123456789123456790") }
> db.companies.updateOne({}, {$inc: {valuation: NumberLong(1)}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.companies.find()
{ "_id" : ObjectId("5c31dec5062abe175faba524"), "valuation" : NumberLong("123456789123456791") }
```
6. What's Wrong with Normal Doubles? 
- When we work with the default 64bit float types there can be a precission issue
```bash
> db.science.insertOne({a: 0.3, b: 0.1})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31e015062abe175faba525")
}
> db.science.find()
{ "_id" : ObjectId("5c31e015062abe175faba525"), "a" : 0.3, "b" : 0.1 }
> db.science.aggregate([$project: {result: {$subtract: ["$a","$b"]}}])
2019-01-06T11:03:31.837+0000 E QUERY    [js] SyntaxError: missing ] after element list @(shell):1:30
> db.science.aggregate([{$project: {result: {$subtract: ["$a","$b"]}}}])
{ "_id" : ObjectId("5c31e015062abe175faba525"), "result" : 0.19999999999999998 }
```
7. Working with Decimal 128bit 
```bash
> db.science.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 0 }
> db.science.insertOne({a: NumberDecimal("0.3"), b: NumberDecimal("0.1")})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31e9aa062abe175faba526")
}
> db.science.find()
{ "_id" : ObjectId("5c31e9aa062abe175faba526"), "a" : NumberDecimal("0.3"), "b" : NumberDecimal("0.1") }
> db.science.aggregate([{$project: {result: {$subtract: ["$a","$b"]}}}])
{ "_id" : ObjectId("5c31e9aa062abe175faba526"), "result" : NumberDecimal("0.2") }
```
```bash
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.science.find()
{ "_id" : ObjectId("5c31e9aa062abe175faba526"), "a" : NumberDecimal("0.400000000000000"), "b" : NumberDecimal("0.1") }
```
```bash
> db.science.updateOne({}, {$inc: {a: NumberDecimal("0.1")}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.science.find()
{ "_id" : ObjectId("5c31e9aa062abe175faba526"), "a" : NumberDecimal("0.500000000000000"), "b" : NumberDecimal("0.1") }
```
```bash
> db.nums.insertOne({a: 0.1})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31ead2062abe175faba527")
}
> db.nums.stats()
{
        "ns" : "person.nums",
        "size" : 33,
        "count" : 1,
        "avgObjSize" : 33,
        "storageSize" : 4096,
        "capped" : false,
        "wiredTiger" : {
                "metadata" : {
                        "formatVersion" : 1
                },
                "creationString" : "access_pattern_hint=none,allocation_size=4KB,app_metadata=(formatVersion=1),assert=(commit_timestamp=none,read_timestamp=none),block_allocation=best,block_compressor=snappy,cache_resident=false,checksum=on,colgroups=,collator=,columns=,dictionary=0,encryption=(keyid=,name=),exclusive=false,extractor=,format=btree,huffman_key=,huffman_value=,ignore_in_memory_cache_size=false,immutable=false,internal_item_max=0,internal_key_max=0,internal_key_truncate=true,internal_page_max=4KB,key_format=q,key_gap=10,leaf_item_max=0,leaf_key_max=0,leaf_page_max=32KB,leaf_value_max=64MB,log=(enabled=true),lsm=(auto_throttle=true,bloom=true,bloom_bit_count=16,bloom_config=,bloom_hash_count=8,bloom_oldest=false,chunk_count_limit=0,chunk_max=5GB,chunk_size=10MB,merge_custom=(prefix=,start_generation=0,suffix=),merge_max=15,merge_min=0),memory_page_image_max=0,memory_page_max=10m,os_cache_dirty_max=0,os_cache_max=0,prefix_compression=false,prefix_compression_min=4,source=,split_deepen_min_child=0,split_deepen_per_child=0,split_pct=90,type=file,value_format=u",
                "type" : "file",
                "uri" : "statistics:table:collection-16-8987709038367340113",
                "LSM" : {
                        "bloom filter false positives" : 0,
                        "bloom filter hits" : 0,
                        "bloom filter misses" : 0,
                        "bloom filter pages evicted from cache" : 0,
                        "bloom filter pages read into cache" : 0,
                        "bloom filters in the LSM tree" : 0,
                        "chunks in the LSM tree" : 0,
                        "highest merge generation in the LSM tree" : 0,
                        "queries that could have benefited from a Bloom filter that did not exist" : 0,
                        "sleep for LSM checkpoint throttle" : 0,
                        "sleep for LSM merge throttle" : 0,
                        "total size of bloom filters" : 0
                },
                "block-manager" : {
                        "allocations requiring file extension" : 0,
                        "blocks allocated" : 0,
                        "blocks freed" : 0,
                        "checkpoint size" : 0,
                        "file allocation unit size" : 4096,
                        "file bytes available for reuse" : 0,
                        "file magic number" : 120897,
                        "file major version number" : 1,
                        "file size in bytes" : 4096,
                        "minor version number" : 0
                },
                "btree" : {
                        "btree checkpoint generation" : 0,
                        "column-store fixed-size leaf pages" : 0,
                        "column-store internal pages" : 0,
                        "column-store variable-size RLE encoded values" : 0,
                        "column-store variable-size deleted values" : 0,
                        "column-store variable-size leaf pages" : 0,
                        "fixed-record size" : 0,
                        "maximum internal page key size" : 368,
                        "maximum internal page size" : 4096,
                        "maximum leaf page key size" : 2867,
                        "maximum leaf page size" : 32768,
                        "maximum leaf page value size" : 67108864,
                        "maximum tree depth" : 3,
                        "number of key/value pairs" : 0,
                        "overflow pages" : 0,
                        "pages rewritten by compaction" : 0,
                        "row-store internal pages" : 0,
                        "row-store leaf pages" : 0
                },
                "cache" : {
                        "bytes currently in the cache" : 822,
                        "bytes dirty in the cache cumulative" : 362,
                        "bytes read into cache" : 0,
                        "bytes written from cache" : 0,
                        "checkpoint blocked page eviction" : 0,
                        "data source pages selected for eviction unable to be evicted" : 0,
                        "eviction walk passes of a file" : 0,
                        "eviction walk target pages histogram - 0-9" : 0,
                        "eviction walk target pages histogram - 10-31" : 0,
                        "eviction walk target pages histogram - 128 and higher" : 0,
                        "eviction walk target pages histogram - 32-63" : 0,
                        "eviction walk target pages histogram - 64-128" : 0,
                        "eviction walks abandoned" : 0,
                        "eviction walks gave up because they restarted their walk twice" : 0,
                        "eviction walks gave up because they saw too many pages and found no candidates" : 0,
                        "eviction walks gave up because they saw too many pages and found too few candidates" : 0,
                        "eviction walks reached end of tree" : 0,
                        "eviction walks started from root of tree" : 0,
                        "eviction walks started from saved location in tree" : 0,
                        "hazard pointer blocked page eviction" : 0,
                        "in-memory page passed criteria to be split" : 0,
                        "in-memory page splits" : 0,
                        "internal pages evicted" : 0,
                        "internal pages split during eviction" : 0,
                        "leaf pages split during eviction" : 0,
                        "modified pages evicted" : 0,
                        "overflow pages read into cache" : 0,
                        "page split during eviction deepened the tree" : 0,
                        "page written requiring cache overflow records" : 0,
                        "pages read into cache" : 0,
                        "pages read into cache after truncate" : 1,
                        "pages read into cache after truncate in prepare state" : 0,
                        "pages read into cache requiring cache overflow entries" : 0,
                        "pages requested from the cache" : 1,
                        "pages seen by eviction walk" : 0,
                        "pages written from cache" : 0,
                        "pages written requiring in-memory restoration" : 0,
                        "tracked dirty bytes in the cache" : 640,
                        "unmodified pages evicted" : 0
                },
                "cache_walk" : {
                        "Average difference between current eviction generation when the page was last considered" : 0,
                        "Average on-disk page image size seen" : 0,
                        "Average time in cache for pages that have been visited by the eviction server" : 0,
                        "Average time in cache for pages that have not been visited by the eviction server" : 0,
                        "Clean pages currently in cache" : 0,
                        "Current eviction generation" : 0,
                        "Dirty pages currently in cache" : 0,
                        "Entries in the root page" : 0,
                        "Internal pages currently in cache" : 0,
                        "Leaf pages currently in cache" : 0,
                        "Maximum difference between current eviction generation when the page was last considered" : 0,
                        "Maximum page size seen" : 0,
                        "Minimum on-disk page image size seen" : 0,
                        "Number of pages never visited by eviction server" : 0,
                        "On-disk page image sizes smaller than a single allocation unit" : 0,
                        "Pages created in memory and never written" : 0,
                        "Pages currently queued for eviction" : 0,
                        "Pages that could not be queued for eviction" : 0,
                        "Refs skipped during cache traversal" : 0,
                        "Size of the root page" : 0,
                        "Total number of pages currently in cache" : 0
                },
                "compression" : {
                        "compressed pages read" : 0,
                        "compressed pages written" : 0,
                        "page written failed to compress" : 0,
                        "page written was too small to compress" : 0,
                        "raw compression call failed, additional data available" : 0,
                        "raw compression call failed, no additional data available" : 0,
                        "raw compression call succeeded" : 0
                },
                "cursor" : {
                        "bulk-loaded cursor-insert calls" : 0,
                        "close calls that result in cache" : 0,
                        "create calls" : 1,
                        "cursor operation restarted" : 0,
                        "cursor-insert key and value bytes inserted" : 34,
                        "cursor-remove key bytes removed" : 0,
                        "cursor-update value bytes updated" : 0,
                        "cursors reused from cache" : 0,
                        "insert calls" : 1,
                        "modify calls" : 0,
                        "next calls" : 0,
                        "prev calls" : 1,
                        "remove calls" : 0,
                        "reserve calls" : 0,
                        "reset calls" : 3,
                        "search calls" : 0,
                        "search near calls" : 0,
                        "truncate calls" : 0,
                        "update calls" : 0
                },
                "reconciliation" : {
                        "dictionary matches" : 0,
                        "fast-path pages deleted" : 0,
                        "internal page key bytes discarded using suffix compression" : 0,
                        "internal page multi-block writes" : 0,
                        "internal-page overflow keys" : 0,
                        "leaf page key bytes discarded using prefix compression" : 0,
                        "leaf page multi-block writes" : 0,
                        "leaf-page overflow keys" : 0,
                        "maximum blocks required for a page" : 0,
                        "overflow values written" : 0,
                        "page checksum matches" : 0,
                        "page reconciliation calls" : 0,
                        "page reconciliation calls for eviction" : 0,
                        "pages deleted" : 0
                },
                "session" : {
                        "cached cursor count" : 1,
                        "object compaction" : 0,
                        "open cursor count" : 0
                },
                "transaction" : {
                        "update conflicts" : 0
                }
        },
        "nindexes" : 1,
        "totalIndexSize" : 4096,
        "indexSizes" : {
                "_id_" : 4096
        },
        "ok" : 1
}
```
```bash
> db.nums.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.nums.insertOne({a: NumberLong("0.1")})
2019-01-06T11:49:04.513+0000 E QUERY    [js] Error: could not convert string to long long :
@(shell):1:23
> db.nums.insertOne({a: NumberDecimal("0.1")})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c31eb40062abe175faba528")
}
> db.nums.stats()
{
        "ns" : "person.nums",
        "size" : 41,
        "count" : 1,
        "avgObjSize" : 41,
        "storageSize" : 20480,
        "capped" : false,
        "wiredTiger" : {
                "metadata" : {
                        "formatVersion" : 1
                },
                "creationString" : "access_pattern_hint=none,allocation_size=4KB,app_metadata=(formatVersion=1),assert=(commit_timestamp=none,read_timestamp=none),block_allocation=best,block_compressor=snappy,cache_resident=false,checksum=on,colgroups=,collator=,columns=,dictionary=0,encryption=(keyid=,name=),exclusive=false,extractor=,format=btree,huffman_key=,huffman_value=,ignore_in_memory_cache_size=false,immutable=false,internal_item_max=0,internal_key_max=0,internal_key_truncate=true,internal_page_max=4KB,key_format=q,key_gap=10,leaf_item_max=0,leaf_key_max=0,leaf_page_max=32KB,leaf_value_max=64MB,log=(enabled=true),lsm=(auto_throttle=true,bloom=true,bloom_bit_count=16,bloom_config=,bloom_hash_count=8,bloom_oldest=false,chunk_count_limit=0,chunk_max=5GB,chunk_size=10MB,merge_custom=(prefix=,start_generation=0,suffix=),merge_max=15,merge_min=0),memory_page_image_max=0,memory_page_max=10m,os_cache_dirty_max=0,os_cache_max=0,prefix_compression=false,prefix_compression_min=4,source=,split_deepen_min_child=0,split_deepen_per_child=0,split_pct=90,type=file,value_format=u",
                "type" : "file",
                "uri" : "statistics:table:collection-16-8987709038367340113",
                "LSM" : {
                        "bloom filter false positives" : 0,
                        "bloom filter hits" : 0,
                        "bloom filter misses" : 0,
                        "bloom filter pages evicted from cache" : 0,
                        "bloom filter pages read into cache" : 0,
                        "bloom filters in the LSM tree" : 0,
                        "chunks in the LSM tree" : 0,
                        "highest merge generation in the LSM tree" : 0,
                        "queries that could have benefited from a Bloom filter that did not exist" : 0,
                        "sleep for LSM checkpoint throttle" : 0,
                        "sleep for LSM merge throttle" : 0,
                        "total size of bloom filters" : 0
                },
                "block-manager" : {
                        "allocations requiring file extension" : 4,
                        "blocks allocated" : 4,
                        "blocks freed" : 1,
                        "checkpoint size" : 0,
                        "file allocation unit size" : 4096,
                        "file bytes available for reuse" : 12288,
                        "file magic number" : 120897,
                        "file major version number" : 1,
                        "file size in bytes" : 20480,
                        "minor version number" : 0
                },
                "btree" : {
                        "btree checkpoint generation" : 399,
                        "column-store fixed-size leaf pages" : 0,
                        "column-store internal pages" : 0,
                        "column-store variable-size RLE encoded values" : 0,
                        "column-store variable-size deleted values" : 0,
                        "column-store variable-size leaf pages" : 0,
                        "fixed-record size" : 0,
                        "maximum internal page key size" : 368,
                        "maximum internal page size" : 4096,
                        "maximum leaf page key size" : 2867,
                        "maximum leaf page size" : 32768,
                        "maximum leaf page value size" : 67108864,
                        "maximum tree depth" : 3,
                        "number of key/value pairs" : 0,
                        "overflow pages" : 0,
                        "pages rewritten by compaction" : 0,
                        "row-store internal pages" : 0,
                        "row-store leaf pages" : 0
                },
                "cache" : {
                        "bytes currently in the cache" : 1264,
                        "bytes dirty in the cache cumulative" : 2761,
                        "bytes read into cache" : 0,
                        "bytes written from cache" : 127,
                        "checkpoint blocked page eviction" : 0,
                        "data source pages selected for eviction unable to be evicted" : 0,
                        "eviction walk passes of a file" : 0,
                        "eviction walk target pages histogram - 0-9" : 0,
                        "eviction walk target pages histogram - 10-31" : 0,
                        "eviction walk target pages histogram - 128 and higher" : 0,
                        "eviction walk target pages histogram - 32-63" : 0,
                        "eviction walk target pages histogram - 64-128" : 0,
                        "eviction walks abandoned" : 0,
                        "eviction walks gave up because they restarted their walk twice" : 0,
                        "eviction walks gave up because they saw too many pages and found no candidates" : 0,
                        "eviction walks gave up because they saw too many pages and found too few candidates" : 0,
                        "eviction walks reached end of tree" : 0,
                        "eviction walks started from root of tree" : 0,
                        "eviction walks started from saved location in tree" : 0,
                        "hazard pointer blocked page eviction" : 0,
                        "in-memory page passed criteria to be split" : 0,
                        "in-memory page splits" : 0,
                        "internal pages evicted" : 0,
                        "internal pages split during eviction" : 0,
                        "leaf pages split during eviction" : 0,
                        "modified pages evicted" : 0,
                        "overflow pages read into cache" : 0,
                        "page split during eviction deepened the tree" : 0,
                        "page written requiring cache overflow records" : 0,
                        "pages read into cache" : 0,
                        "pages read into cache after truncate" : 1,
                        "pages read into cache after truncate in prepare state" : 0,
                        "pages read into cache requiring cache overflow entries" : 0,
                        "pages requested from the cache" : 7,
                        "pages seen by eviction walk" : 0,
                        "pages written from cache" : 2,
                        "pages written requiring in-memory restoration" : 0,
                        "tracked dirty bytes in the cache" : 805,
                        "unmodified pages evicted" : 0
                },
                "cache_walk" : {
                        "Average difference between current eviction generation when the page was last considered" : 0,
                        "Average on-disk page image size seen" : 0,
                        "Average time in cache for pages that have been visited by the eviction server" : 0,
                        "Average time in cache for pages that have not been visited by the eviction server" : 0,
                        "Clean pages currently in cache" : 0,
                        "Current eviction generation" : 0,
                        "Dirty pages currently in cache" : 0,
                        "Entries in the root page" : 0,
                        "Internal pages currently in cache" : 0,
                        "Leaf pages currently in cache" : 0,
                        "Maximum difference between current eviction generation when the page was last considered" : 0,
                        "Maximum page size seen" : 0,
                        "Minimum on-disk page image size seen" : 0,
                        "Number of pages never visited by eviction server" : 0,
                        "On-disk page image sizes smaller than a single allocation unit" : 0,
                        "Pages created in memory and never written" : 0,
                        "Pages currently queued for eviction" : 0,
                        "Pages that could not be queued for eviction" : 0,
                        "Refs skipped during cache traversal" : 0,
                        "Size of the root page" : 0,
                        "Total number of pages currently in cache" : 0
                },
                "compression" : {
                        "compressed pages read" : 0,
                        "compressed pages written" : 0,
                        "page written failed to compress" : 0,
                        "page written was too small to compress" : 2,
                        "raw compression call failed, additional data available" : 0,
                        "raw compression call failed, no additional data available" : 0,
                        "raw compression call succeeded" : 0
                },
                "cursor" : {
                        "bulk-loaded cursor-insert calls" : 0,
                        "close calls that result in cache" : 0,
                        "create calls" : 2,
                        "cursor operation restarted" : 0,
                        "cursor-insert key and value bytes inserted" : 76,
                        "cursor-remove key bytes removed" : 1,
                        "cursor-update value bytes updated" : 0,
                        "cursors reused from cache" : 2,
                        "insert calls" : 2,
                        "modify calls" : 0,
                        "next calls" : 2,
                        "prev calls" : 2,
                        "remove calls" : 1,
                        "reserve calls" : 0,
                        "reset calls" : 11,
                        "search calls" : 2,
                        "search near calls" : 1,
                        "truncate calls" : 0,
                        "update calls" : 0
                },
                "reconciliation" : {
                        "dictionary matches" : 0,
                        "fast-path pages deleted" : 0,
                        "internal page key bytes discarded using suffix compression" : 0,
                        "internal page multi-block writes" : 0,
                        "internal-page overflow keys" : 0,
                        "leaf page key bytes discarded using prefix compression" : 0,
                        "leaf page multi-block writes" : 0,
                        "leaf-page overflow keys" : 0,
                        "maximum blocks required for a page" : 1,
                        "overflow values written" : 0,
                        "page checksum matches" : 0,
                        "page reconciliation calls" : 4,
                        "page reconciliation calls for eviction" : 0,
                        "pages deleted" : 2
                },
                "session" : {
                        "cached cursor count" : 2,
                        "object compaction" : 0,
                        "open cursor count" : 0
                },
                "transaction" : {
                        "update conflicts" : 0
                }
        },
        "nindexes" : 1,
        "totalIndexSize" : 20480,
        "indexSizes" : {
                "_id_" : 20480
        },
        "ok" : 1
}
```
8. Monetary Data

- We can see how to manage `Monetary Data` on [Model Monetary Data](https://docs.mongodb.com/manual/tutorial/model-monetary-data/)

## MongoDB & Security

1. Introduction

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security.png)

2. Understanding Role Based Access Control

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security2.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security3.png)

3. Roles - Examples

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security4.png)

4. Creating a User

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security5.png)

- We can start MongoDB with `--auth` to obligate users to authenticate

```bash
C:\Work\Git\vectorpayments>mongod --auth
2019-01-08T17:27:49.032+0000 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2019-01-08T17:27:49.061+0000 I CONTROL  [initandlisten] MongoDB starting : pid=23140 port=27017 dbpath=C:\data\db\ 64-bit host=RIMDUB-0232
2019-01-08T17:27:49.061+0000 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
2019-01-08T17:27:49.062+0000 I CONTROL  [initandlisten] db version v4.0.5
2019-01-08T17:27:49.063+0000 I CONTROL  [initandlisten] git version: 3739429dd92b92d1b0ab120911a23d50bf03c412
2019-01-08T17:27:49.064+0000 I CONTROL  [initandlisten] allocator: tcmalloc
2019-01-08T17:27:49.065+0000 I CONTROL  [initandlisten] modules: none
2019-01-08T17:27:49.066+0000 I CONTROL  [initandlisten] build environment:
2019-01-08T17:27:49.067+0000 I CONTROL  [initandlisten]     distmod: 2008plus-ssl
2019-01-08T17:27:49.067+0000 I CONTROL  [initandlisten]     distarch: x86_64
2019-01-08T17:27:49.069+0000 I CONTROL  [initandlisten]     target_arch: x86_64
2019-01-08T17:27:49.069+0000 I CONTROL  [initandlisten] options: { security: { authorization: "enabled" } }
2019-01-08T17:27:49.080+0000 I STORAGE  [initandlisten] exception in initAndListen: NonExistentPath: Data directory C:\data\db\ not found., terminating
2019-01-08T17:27:49.081+0000 I NETWORK  [initandlisten] shutdown: going to close listening sockets...
2019-01-08T17:27:49.082+0000 I CONTROL  [initandlisten] now exiting
2019-01-08T17:27:49.082+0000 I CONTROL  [initandlisten] shutting down with code:100
```

```bash
C:\Work\Git\vectorpayments>mongod --auth --dbpath "C:\Program Files\MongoDB\Server\4.0\data"
2019-01-08T17:35:54.096+0000 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2019-01-08T17:35:54.110+0000 I CONTROL  [initandlisten] MongoDB starting : pid=18152 port=27017 dbpath=C:\Program Files\MongoDB\Server\4.0\data 64-bit host=RIMDUB-0232
2019-01-08T17:35:54.110+0000 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
2019-01-08T17:35:54.111+0000 I CONTROL  [initandlisten] db version v4.0.5
2019-01-08T17:35:54.111+0000 I CONTROL  [initandlisten] git version: 3739429dd92b92d1b0ab120911a23d50bf03c412
2019-01-08T17:35:54.112+0000 I CONTROL  [initandlisten] allocator: tcmalloc
2019-01-08T17:35:54.113+0000 I CONTROL  [initandlisten] modules: none
2019-01-08T17:35:54.114+0000 I CONTROL  [initandlisten] build environment:
2019-01-08T17:35:54.115+0000 I CONTROL  [initandlisten]     distmod: 2008plus-ssl
2019-01-08T17:35:54.115+0000 I CONTROL  [initandlisten]     distarch: x86_64
2019-01-08T17:35:54.116+0000 I CONTROL  [initandlisten]     target_arch: x86_64
2019-01-08T17:35:54.117+0000 I CONTROL  [initandlisten] options: { security: { authorization: "enabled" }, storage: { dbPath: "C:\Program Files\MongoDB\Server\4.0\data" } }
2019-01-08T17:35:54.130+0000 I STORAGE  [initandlisten] Detected data files in C:\Program Files\MongoDB\Server\4.0\data created by the 'wiredTiger' storage engine, so setting the active storage engine to 'wiredTiger'.
2019-01-08T17:35:54.133+0000 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=7621M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
2019-01-08T17:35:54.358+0000 I STORAGE  [initandlisten] WiredTiger message [1546968954:358128][18152:140712355518336], txn-recover: Main recovery loop: starting at 1/120960 to 2/256
2019-01-08T17:35:54.482+0000 I STORAGE  [initandlisten] WiredTiger message [1546968954:482158][18152:140712355518336], txn-recover: Recovering log 1 through 2
2019-01-08T17:35:54.552+0000 I STORAGE  [initandlisten] WiredTiger message [1546968954:552125][18152:140712355518336], txn-recover: Recovering log 2 through 2
2019-01-08T17:35:54.612+0000 I STORAGE  [initandlisten] WiredTiger message [1546968954:612139][18152:140712355518336], txn-recover: Set global recovery timestamp: 0
2019-01-08T17:35:54.642+0000 I RECOVERY [initandlisten] WiredTiger recoveryTimestamp. Ts: Timestamp(0, 0)
2019-01-08T17:35:54.668+0000 I CONTROL  [initandlisten]
2019-01-08T17:35:54.668+0000 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2019-01-08T17:35:54.670+0000 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server.
2019-01-08T17:35:54.670+0000 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP
2019-01-08T17:35:54.671+0000 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2019-01-08T17:35:54.671+0000 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2019-01-08T17:35:54.672+0000 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2019-01-08T17:35:54.673+0000 I CONTROL  [initandlisten]
2019-01-08T17:35:57.224+0000 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory 'C:/Program Files/MongoDB/Server/4.0/data/diagnostic.data'
2019-01-08T17:35:57.234+0000 I NETWORK  [initandlisten] waiting for connections on port 27017
```

- We can put the user a password when opening the `mongo` command with `mongo -u username -p password`

- We can open the `mongo` command and authenticate with `db.auth('username', 'password')`

```bash
C:\Windows\system32>mongo
MongoDB shell version v4.0.5
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("8bca60f3-1f77-4e74-968d-180da860e119") }
MongoDB server version: 4.0.5
> show dbs
> show collections
Warning: unable to run listCollections, attempting to approximate collection names by parsing connectionStatus
```

- We need to create an user first to be able to see any information using `db.createuser()`
```bash
> use admin
switched to db admin
> db.createUser({user: "juan", pwd: "juan", roles: ["userAdminAnyDatabase"]})
Successfully added user: { "user" : "juan", "roles" : [ "userAdminAnyDatabase" ] }
```
- We need to authenticate to be able to see any data
```bash
> show dbs
2019-01-08T17:43:00.966+0000 E QUERY    [js] Error: listDatabases failed:{
        "ok" : 0,
        "errmsg" : "command listDatabases requires authentication",
        "code" : 13,
        "codeName" : "Unauthorized"
} :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
Mongo.prototype.getDBs@src/mongo/shell/mongo.js:124:1
shellHelper.show@src/mongo/shell/utils.js:876:19
shellHelper@src/mongo/shell/utils.js:766:15
@(shellhelp2):1:1
```

- When we authenticate
```bash
> db.auth('juan','juan')
1
```
- Then we can see on the second terminal
```bash
2019-01-08T17:44:13.631+0000 I ACCESS   [conn1] Successfully authenticated as principal juan on admin
2019-01-08T17:44:13.633+0000 I ACCESS   [conn1] Unauthorized: not authorized on admin to execute command { replSetGetStatus: 1.0, forShell: 1.0, $db: "admin" }
```
- We can see the databases now
```bash
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> show collections
>
```

5. Built-In Roles - An Overview

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security6.png)

- We can find more information on [Built-In Roles](https://docs.mongodb.com/manual/reference/built-in-roles/#built-in-roles)

6. Assigning Roles to Users & Databases

- We can authenticate from the command line
```bash
C:\Windows\system32>mongo -u juan -p juan
MongoDB shell version v4.0.5
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("b6c825a8-054e-4351-b025-60669a59ed63") }
MongoDB server version: 4.0.5
```
- Or we can provide in which database we want to authenticate
```bash
C:\Windows\system32>mongo -u juan -p juan --authenticationDatabase admin
MongoDB shell version v4.0.5
connecting to: mongodb://127.0.0.1:27017/?authSource=admin&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("60e80599-c6e2-45c9-be4d-8943f852451c") }
MongoDB server version: 4.0.5
```
- We can create another user with permission in just one database
```bash
> use shop
switched to db shop
> db.createUser({user: 'appdev', pwd: 'dev', roles: ["readWrite"]})
Successfully added user: { "user" : "appdev", "roles" : [ "readWrite" ] }
```
- on the other terminal
```bash
2019-01-08T18:01:44.449+0000 I ACCESS   [conn3] Successfully authenticated as principal appdev on shop
2019-01-08T18:01:44.451+0000 I ACCESS   [conn3] Unauthorized: not authorized on admin to execute command { replSetGetStatus: 1.0, forShell: 1.0, $db: "admin" }
```
- If we try to create a new document is the new database we receive an error
```bash
> db.products.insertOne({name: "book"})
2019-01-08T18:04:04.611+0000 E QUERY    [js] WriteCommandError: too many users are authenticated :
WriteCommandError({
        "ok" : 0,
        "errmsg" : "too many users are authenticated",
        "code" : 13,
        "codeName" : "Unauthorized"
})
WriteCommandError@src/mongo/shell/bulk_api.js:420:48
Bulk/executeBatch@src/mongo/shell/bulk_api.js:902:1
Bulk/this.execute@src/mongo/shell/bulk_api.js:1150:21
DBCollection.prototype.insertOne@src/mongo/shell/crud_api.js:252:9
@(shell):1:1
```
- We need to run `db.logout()` or exit and authenticate again from the command line
```bash
> db.logout()
{ "ok" : 1 }
```
```bash
C:\Windows\system32>mongo -u appdev -p dev --authenticationDatabase shop
MongoDB shell version v4.0.5
connecting to: mongodb://127.0.0.1:27017/?authSource=shop&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("6ca09c7b-cfaf-4e11-9058-c2183e02ecb6") }
MongoDB server version: 4.0.5
```
- If we try to create the document right away after entering on mongoDB we receive an error
```bash
> db.products.insertOne({name: "A Book"})
2019-01-08T18:08:07.188+0000 E QUERY    [js] WriteCommandError: not authorized on test to execute command { insert: "products", ordered: true, lsid: { id: UUID("6ca09c7b-cfaf-4e11-9058-c2183e02ecb6") }, $db: "test" } :
WriteCommandError({
        "ok" : 0,
        "errmsg" : "not authorized on test to execute command { insert: \"products\", ordered: true, lsid: { id: UUID(\"6ca09c7b-cfaf-4e11-9058-c2183e02ecb6\") }, $db: \"test\" }",
        "code" : 13,
        "codeName" : "Unauthorized"
})
WriteCommandError@src/mongo/shell/bulk_api.js:420:48
Bulk/executeBatch@src/mongo/shell/bulk_api.js:902:1
Bulk/this.execute@src/mongo/shell/bulk_api.js:1150:21
DBCollection.prototype.insertOne@src/mongo/shell/crud_api.js:252:9
@(shell):1:1
```
- The reason is because we are not in any database yet
```bash
> use local
switched to db local
> show collections
Warning: unable to run listCollections, attempting to approximate collection names by parsing connectionStatus
```
```bash
> use shop
switched to db shop
> show collections
>
```
```bash
> db.products.insertOne({name: "A Book"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c34e7c3202bf9566ebffdd5")
}
> db.products.find()
{ "_id" : ObjectId("5c34e7c3202bf9566ebffdd5"), "name" : "A Book" }
```
7. Updating & Extending Roles to Other Databases

- We can update an user privilages using the `db.updateUser()` command
```bash
> db.updateUser("appdev", {roles: ["readWrite", {role: "readWrite", db: "blog"}]})
2019-01-08T18:16:48.490+0000 E QUERY    [js] Error: Updating user failed: not authorized on shop to execute command { updateUser: "appdev", roles: [ "readWrite", { role: "readWrite", db: "blog" } ], writeConcern: { w: "majority", wtimeout: 600000.0 }, lsid: { id: UUID("6ca09c7b-cfaf-4e11-9058-c2183e02ecb6") }, $db: "shop" } :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
DB.prototype.updateUser@src/mongo/shell/db.js:1541:15
@(shell):1:1
```
```bash
> db.logout()
{ "ok" : 1 }
```
```bash
> db.auth('juan','juan')
Error: Authentication failed.
0
```
```bash
> db.auth('juan','juan')
1
```
```bash
>  db.updateUser("appdev", {roles: ["readWrite", {role: "readWrite", db: "blog"}]})
2019-01-08T18:19:52.738+0000 E QUERY    [js] Error: Updating user failed: User appdev@admin not found :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
DB.prototype.updateUser@src/mongo/shell/db.js:1541:15
@(shell):1:1
```
```bash
> use shop
switched to db shop
> db.updateUser("appdev", {roles: ["readWrite", {role: "readWrite", db: "blog"}]})
>
```
- We can use the `db.getUser("username")` to see all the information about a user
```bash
> db.getUser("appdev")
{
        "_id" : "shop.appdev",
        "user" : "appdev",
        "db" : "shop",
        "roles" : [
                {
                        "role" : "readWrite",
                        "db" : "shop"
                },
                {
                        "role" : "readWrite",
                        "db" : "blog"
                }
        ],
        "mechanisms" : [
                "SCRAM-SHA-1",
                "SCRAM-SHA-256"
        ]
}
```
```bash
> use shop
switched to db shop
> db.auth('appdev', 'dev')
1
> use blog
switched to db blog
> db.posts.insertOne({title: "This works!"})
2019-01-08T18:25:43.955+0000 E QUERY    [js] WriteCommandError: too many users are authenticated :
WriteCommandError({
        "ok" : 0,
        "errmsg" : "too many users are authenticated",
        "code" : 13,
        "codeName" : "Unauthorized"
})
WriteCommandError@src/mongo/shell/bulk_api.js:420:48
Bulk/executeBatch@src/mongo/shell/bulk_api.js:902:1
Bulk/this.execute@src/mongo/shell/bulk_api.js:1150:21
DBCollection.prototype.insertOne@src/mongo/shell/crud_api.js:252:9
@(shell):1:1
```
```bash
switched to db admin
> db.logout()
{ "ok" : 1 }
```
```bash
> use blog
switched to db blog
> db.posts.insertOne({title: "This works!"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c34eb64202bf9566ebffdd7")
}
> db.posts.find()
{ "_id" : ObjectId("5c34eb64202bf9566ebffdd7"), "title" : "This works!" }
```

8. Assignment - Security
- Authenticate to the admin database
```bash
C:\Windows\system32>mongo -u juan -p juan --authenticationDatabase admin
MongoDB shell version v4.0.5
connecting to: mongodb://127.0.0.1:27017/?authSource=admin&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("d2cc2b97-763d-4a59-a3c3-c587eaa96d1b") }
MongoDB server version: 4.0.5
```
- Create the Database Admin use
```bash
> use admin
switched to db admin
> db.createUser({user: 'databaseadmin', pwd: 'dbadmin', roles: ["dbAdminAnyDatabase"]})
Successfully added user: { "user" : "databaseadmin", "roles" : [ "dbAdminAnyDatabase" ] }
```
- Create the Admin user
```bash
> db.createUser({user: 'admin', pwd: 'admin', roles: ["userAdminAnyDatabase"]})
Successfully added user: { "user" : "admin", "roles" : [ "userAdminAnyDatabase" ] }
```
- Create the developer user
```bash
> use customers
switched to db customers
> db.createUser({user: 'dev', pwd: 'dev', roles: ["readWrite"]})
Successfully added user: { "user" : "dev", "roles" : [ "readWrite" ] }
> db.updateUser("dev", {roles: ["readWrite", {role: "readWrite", db: "sales"}]})
```

- We can also create a user with roles in more than one database like this:
```bash
> use login
switched to db login
> db.createUser({user: 'dev2', pwd: 'dev2', roles: [{role: "readWrite", db: "customers"},{role: "readWrite", db: "sales"}]})
Successfully added user: {
        "user" : "dev2",
        "roles" : [
                {
                        "role" : "readWrite",
                        "db" : "customers"
                },
                {
                        "role" : "readWrite",
                        "db" : "sales"
                }
        ]
}
```
9. Adding SSL Transport Encryption

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security7.png)

- We can find more information on [Configure mongod and mongos for TLS/SSL](https://docs.mongodb.com/manual/tutorial/configure-ssl/)

- For `Windows` we can obtain the `cert` on [Binaries-OpenSSL](https://wiki.openssl.org/index.php/Binaries) and access to the top one on [Win32OpenSSL](https://slproweb.com/products/Win32OpenSSL.html) and we can download it.

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security8.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security9.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security10.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security11.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security12.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security13.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security14.png)

```bash
C:\Windows\system32>cd "\Program Files\OpenSSL-Win64"

C:\Program Files\OpenSSL-Win64>dir
 Volume in drive C has no label.
 Volume Serial Number is 7A1F-74B3

 Directory of C:\Program Files\OpenSSL-Win64

08/01/2019  19:03    <DIR>          .
08/01/2019  19:03    <DIR>          ..
21/11/2018  07:51                89 acknowledgements.txt
21/11/2018  07:51               752 authors.txt
08/01/2019  19:03    <DIR>          bin
21/11/2018  07:51           585,855 changes.txt
21/11/2018  07:51             6,408 c_rehash.pl
21/11/2018  07:51                86 faq.txt
21/11/2018  07:51         3,398,144 libcrypto-1_1-x64.dll
21/11/2018  07:51           680,960 libssl-1_1-x64.dll
21/11/2018  07:51             6,253 license.txt
21/11/2018  07:51            41,695 news.txt
21/11/2018  07:51             3,251 readme.txt
08/01/2019  19:03            11,491 unins000.dat
08/01/2019  19:01           730,789 unins000.exe
              12 File(s)      5,465,773 bytes
               3 Dir(s)  354,604,036,096 bytes free

C:\Program Files\OpenSSL-Win64>cd bin
```

- We need to put on `Common Name` **localhost**

```bash
C:\Program Files\OpenSSL-Win64\bin>openssl req -newkey rsa:2048 -new -x509 -days 365 -nodes -out mongodb-cert.crt -keyout mongodb-cert.key
Generating a RSA private key
............+++++
........+++++
writing new private key to 'mongodb-cert.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:ES
State or Province Name (full name) [Some-State]:Madrid
Locality Name (eg, city) []:Madrid
Organization Name (eg, company) [Internet Widgits Pty Ltd]:peelmicro
Organizational Unit Name (eg, section) []:Dev
Common Name (e.g. server FQDN or YOUR name) []:localhost
Email Address []:juan@test.com
```
```bash
C:\Program Files\OpenSSL-Win64\bin>dir mongo*
 Volume in drive C has no label.
 Volume Serial Number is 7A1F-74B3

 Directory of C:\Program Files\OpenSSL-Win64\bin

08/01/2019  19:08             1,438 mongodb-cert.crt
08/01/2019  19:06             1,732 mongodb-cert.key
               2 File(s)          3,170 bytes
               0 Dir(s)  353,223,208,960 bytes free
```
```bash
C:\Program Files\OpenSSL-Win64\bin>type mongodb-cert.key mongodb-cert.crt > mongodb.pem

mongodb-cert.key



mongodb-cert.crt
```
```bash
C:\Program Files\OpenSSL-Win64\bin>dir mon*
 Volume in drive C has no label.
 Volume Serial Number is 7A1F-74B3

 Directory of C:\Program Files\OpenSSL-Win64\bin

08/01/2019  19:08             1,438 mongodb-cert.crt
08/01/2019  19:06             1,732 mongodb-cert.key
08/01/2019  19:10             3,170 mongodb.pem
               3 File(s)          6,340 bytes
               0 Dir(s)  353,178,234,880 bytes free
```

```bash
C:\Program Files\OpenSSL-Win64\bin>mongod --sslMode requireSSL --sslPEMKeyFile mongodb.pem --dbpath "C:\Program Files\MongoDB\Server\4.0\data"
2019-01-08T19:15:35.096+0000 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2019-01-08T19:15:35.102+0000 I CONTROL  [initandlisten] MongoDB starting : pid=7032 port=27017 dbpath=C:\Program Files\MongoDB\Server\4.0\data 64-bit host=RIMDUB-0232
2019-01-08T19:15:35.102+0000 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
2019-01-08T19:15:35.103+0000 I CONTROL  [initandlisten] db version v4.0.5
2019-01-08T19:15:35.104+0000 I CONTROL  [initandlisten] git version: 3739429dd92b92d1b0ab120911a23d50bf03c412
2019-01-08T19:15:35.105+0000 I CONTROL  [initandlisten] allocator: tcmalloc
2019-01-08T19:15:35.105+0000 I CONTROL  [initandlisten] modules: none
2019-01-08T19:15:35.106+0000 I CONTROL  [initandlisten] build environment:
2019-01-08T19:15:35.107+0000 I CONTROL  [initandlisten]     distmod: 2008plus-ssl
2019-01-08T19:15:35.107+0000 I CONTROL  [initandlisten]     distarch: x86_64
2019-01-08T19:15:35.108+0000 I CONTROL  [initandlisten]     target_arch: x86_64
2019-01-08T19:15:35.108+0000 I CONTROL  [initandlisten] options: { net: { ssl: { PEMKeyFile: "mongodb.pem", mode: "requireSSL" } }, storage: { dbPath: "C:\Program Files\MongoDB\Server\4.0\data" } }
2019-01-08T19:15:35.115+0000 I STORAGE  [initandlisten] Detected data files in C:\Program Files\MongoDB\Server\4.0\data created by the 'wiredTiger' storage engine, so setting the active storage engine to 'wiredTiger'.
2019-01-08T19:15:35.117+0000 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=7621M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
2019-01-08T19:15:35.371+0000 I STORAGE  [initandlisten] WiredTiger message [1546974935:370925][7032:140712355518336], txn-recover: Main recovery loop: starting at 2/84864 to 3/256
2019-01-08T19:15:35.507+0000 I STORAGE  [initandlisten] WiredTiger message [1546974935:506927][7032:140712355518336], txn-recover: Recovering log 2 through 3
2019-01-08T19:15:35.586+0000 I STORAGE  [initandlisten] WiredTiger message [1546974935:585936][7032:140712355518336], txn-recover: Recovering log 3 through 3
2019-01-08T19:15:35.670+0000 I STORAGE  [initandlisten] WiredTiger message [1546974935:669942][7032:140712355518336], txn-recover: Set global recovery timestamp: 0
2019-01-08T19:15:35.733+0000 I RECOVERY [initandlisten] WiredTiger recoveryTimestamp. Ts: Timestamp(0, 0)
2019-01-08T19:15:35.803+0000 I CONTROL  [initandlisten]
2019-01-08T19:15:35.804+0000 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2019-01-08T19:15:35.805+0000 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2019-01-08T19:15:35.805+0000 I CONTROL  [initandlisten]
2019-01-08T19:15:35.806+0000 I CONTROL  [initandlisten] ** WARNING: No client certificate validation can be performed since no CA file has been provided
2019-01-08T19:15:35.807+0000 I CONTROL  [initandlisten] **          and no sslCertificateSelector has been specified.
2019-01-08T19:15:35.808+0000 I CONTROL  [initandlisten] **          Please specify an sslCAFile parameter.
2019-01-08T19:15:35.809+0000 I CONTROL  [initandlisten]
2019-01-08T19:15:35.809+0000 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2019-01-08T19:15:35.810+0000 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server.
2019-01-08T19:15:35.810+0000 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP
2019-01-08T19:15:35.811+0000 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2019-01-08T19:15:35.812+0000 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2019-01-08T19:15:35.813+0000 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2019-01-08T19:15:35.814+0000 I CONTROL  [initandlisten]
2019-01-08T19:15:38.092+0000 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory 'C:/Program Files/MongoDB/Server/4.0/data/diagnostic.data'
2019-01-08T19:15:38.099+0000 I NETWORK  [initandlisten] waiting for connections on port 27017 ssl
```

```bash
C:\Program Files\OpenSSL-Win64>mongo
MongoDB shell version v4.0.5
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
2019-01-08T19:17:17.753+0000 E QUERY    [js] Error: network error while attempting to run command 'isMaster' on host '127.0.0.1:27017'  :
connect@src/mongo/shell/mongo.js:328:13
@(connect):1:6
exception: connect failed
```

```bash
2019-01-08T19:17:17.734+0000 I NETWORK  [listener] connection accepted from 127.0.0.1:51466 #1 (1 connection now open)
2019-01-08T19:17:17.749+0000 I NETWORK  [conn1] Error receiving request from client: SSLHandshakeFailed: The server is configured to only allow SSL connections. Ending connection from 127.0.0.1:51466 (connection id: 1)
2019-01-08T19:17:17.750+0000 I NETWORK  [conn1] end connection 127.0.0.1:51466 (0 connections now open)
```

```bash
C:\Program Files\OpenSSL-Win64>mongo --ssl --sslCAFile mongodb.pem
Failed global initialization: InvalidSSLConfiguration Failed to open PEM file: mongodb.pem
``` 

```bash
C:\Program Files\OpenSSL-Win64>mongo --ssl --sslCAFile mongodb.pem --host localhost
Failed global initialization: InvalidSSLConfiguration Failed to open PEM file: mongodb.pem
```

10. Encryption at REST

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security15.png)

11. Summary

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Security16.png)

## Performance, Fault Tolerancy & Deployment

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance.png)

1. What Influences Performance?

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance2.png)

2. Understanding Capped Collections

- Cap collections are collection where you have defined a limit of data they can contain

```bash
> use performance
switched to db performance
> db.createCollection("capped", {capped: true, size: 10000, max: 3})
{ "ok" : 1 }
```
```bash
> db.capped.insertOne({name: "Max"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c3588dfb3dfabf2981a37eb")
}
> db.capped.insertOne({name: "Manu"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c3588eab3dfabf2981a37ec")
}
> db.capped.insertOne({name: "Anna"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c3588f5b3dfabf2981a37ed")
}
> db.capped.find()
{ "_id" : ObjectId("5c3588dfb3dfabf2981a37eb"), "name" : "Max" }
{ "_id" : ObjectId("5c3588eab3dfabf2981a37ec"), "name" : "Manu" }
{ "_id" : ObjectId("5c3588f5b3dfabf2981a37ed"), "name" : "Anna" }
```
:::tip
The order used to show the documents on capped collection is the order the have been inserted. We need to use sort() if we want to change it. 
:::

```bash
> db.capped.find().sort({$natural: -1})
{ "_id" : ObjectId("5c3588f5b3dfabf2981a37ed"), "name" : "Anna" }
{ "_id" : ObjectId("5c3588eab3dfabf2981a37ec"), "name" : "Manu" }
{ "_id" : ObjectId("5c3588dfb3dfabf2981a37eb"), "name" : "Max" }
```

- When we insert a document once we reach the max value, the document is created and the first one is removed

```bash
> db.capped.insertOne({name: "Maria"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c358a0ab3dfabf2981a37ee")
}
> db.capped.find()
{ "_id" : ObjectId("5c3588eab3dfabf2981a37ec"), "name" : "Manu" }
{ "_id" : ObjectId("5c3588f5b3dfabf2981a37ed"), "name" : "Anna" }
{ "_id" : ObjectId("5c358a0ab3dfabf2981a37ee"), "name" : "Maria" }
```

3. What are Replica Sets?

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance3.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance4.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance5.png)

4. Understanding Sharding

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance6.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance7.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance8.png)

5. Deploying a MongoDB Server

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance9.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance10.png)

6. Using MongoDB Atlas

- We have to access to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance11.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance12.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance13.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance14.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance15.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance16.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance17.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance18.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance19.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance20.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance21.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance22.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance23.png)


7. Backups & Setting Alerts in MongoDB Atlas

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance24.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance25.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance26.png)

8. Connecting to our Cluster

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance27.png)

```bash
C:\Windows\system32>mongo "mongodb+srv://cluster0-ycwj8.mongodb.net/test" --username juan
MongoDB shell version v4.0.5
Enter password:
connecting to: mongodb://cluster0-shard-00-00-ycwj8.mongodb.net.:27017,cluster0-shard-00-01-ycwj8.mongodb.net.:27017,cluster0-shard-00-02-ycwj8.mongodb.net.:27017/test?authSource=admin&gssapiServiceName=mongodb&replicaSet=Cluster0-shard-0&ssl=true
2019-01-09T17:57:40.968+0000 I NETWORK  [js] Starting new replica set monitor for Cluster0-shard-0/cluster0-shard-00-00-ycwj8.mongodb.net.:27017,cluster0-shard-00-01-ycwj8.mongodb.net.:27017,cluster0-shard-00-02-ycwj8.mongodb.net.:27017
2019-01-09T17:57:41.547+0000 I NETWORK  [js] Successfully connected to cluster0-shard-00-01-ycwj8.mongodb.net.:27017 (1 connections now open to cluster0-shard-00-01-ycwj8.mongodb.net.:27017 with a 5 second timeout)
2019-01-09T17:57:41.548+0000 I NETWORK  [ReplicaSetMonitor-TaskExecutor] Successfully connected to cluster0-shard-00-02-ycwj8.mongodb.net.:27017 (1 connections now open to cluster0-shard-00-02-ycwj8.mongodb.net.:27017 with a 5 second timeout)
2019-01-09T17:57:42.236+0000 I NETWORK  [ReplicaSetMonitor-TaskExecutor] Successfully connected to cluster0-shard-00-00-ycwj8.mongodb.net.:27017 (1 connections now open to cluster0-shard-00-00-ycwj8.mongodb.net.:27017 with a 5 second timeout)
2019-01-09T17:57:42.236+0000 I NETWORK  [js] Successfully connected to cluster0-shard-00-00-ycwj8.mongodb.net:27017 (1 connections now open to cluster0-shard-00-00-ycwj8.mongodb.net:27017 with a 5 second timeout)
2019-01-09T17:57:42.357+0000 I NETWORK  [js] changing hosts to Cluster0-shard-0/cluster0-shard-00-00-ycwj8.mongodb.net:27017,cluster0-shard-00-01-ycwj8.mongodb.net:27017,cluster0-shard-00-02-ycwj8.mongodb.net:27017 from Cluster0-shard-0/cluster0-shard-00-00-ycwj8.mongodb.net.:27017,cluster0-shard-00-01-ycwj8.mongodb.net.:27017,cluster0-shard-00-02-ycwj8.mongodb.net.:27017
2019-01-09T17:57:42.859+0000 I NETWORK  [ReplicaSetMonitor-TaskExecutor] Successfully connected to cluster0-shard-00-01-ycwj8.mongodb.net:27017 (1 connections now open to cluster0-shard-00-01-ycwj8.mongodb.net:27017 with a 5 second timeout)
2019-01-09T17:57:43.513+0000 I NETWORK  [ReplicaSetMonitor-TaskExecutor] Successfully connected to cluster0-shard-00-02-ycwj8.mongodb.net:27017 (1 connections now open to cluster0-shard-00-02-ycwj8.mongodb.net:27017 with a 5 second timeout)
Implicit session: session { "id" : UUID("dc99e8e1-2959-4cfd-b3f3-32ccac980f3e") }
MongoDB server version: 4.0.5
MongoDB Enterprise Cluster0-shard-0:PRIMARY>
```

```bash
MongoDB Enterprise Cluster0-shard-0:PRIMARY> show dbs
admin  0.000GB
local  2.819GB
```

```bash
MongoDB Enterprise Cluster0-shard-0:PRIMARY> use shop
switched to db shop
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.products.insertOne({title: "A book", price: 12.99})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c3636f60713d82fc1c27bf8")
}
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.products.find()
{ "_id" : ObjectId("5c3636f60713d82fc1c27bf8"), "title" : "A book", "price" : 12.99 }
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance28.png)

9. Summary

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Performance29.png)

## Transactions

1. What are Transactions?

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Transactions.png)

2. A Typical Usecase

```bash
MongoDB Enterprise Cluster0-shard-0:PRIMARY> use blogs
switched to db blogs
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.users.insertOne({name: "Max"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c36d6c90371b2f7ec9a2f9e")
}
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.posts.insertMany([{title: "First Post", userId: ObjectId("5c36d6c90371b2f7ec9a2f9e")},{title: "Second Post", userId: ObjectId("5c36d6c90371b2f7ec9a2f9e")}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c36d7320371b2f7ec9a2f9f"),
                ObjectId("5c36d7320371b2f7ec9a2fa0")
        ]
}
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.users.find()
{ "_id" : ObjectId("5c36d6c90371b2f7ec9a2f9e"), "name" : "Max" }
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.posts.find()
{ "_id" : ObjectId("5c36d7320371b2f7ec9a2f9f"), "title" : "First Post", "userId" : ObjectId("5c36d6c90371b2f7ec9a2f9e") }
{ "_id" : ObjectId("5c36d7320371b2f7ec9a2fa0"), "title" : "Second Post", "userId" : ObjectId("5c36d6c90371b2f7ec9a2f9e") }
```
- Without transactions
```bash
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.users.deleteOne({_id: ObjectId("5c36d6c90371b2f7ec9a2f9e")})
{ "acknowledged" : true, "deletedCount" : 1 }
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.posts.deleteMany({userId: ObjectId("5c36d6c90371b2f7ec9a2f9e")})
{ "acknowledged" : true, "deletedCount" : 2 }
```

3. How Does a Transaction Work?

```bash
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.users.insertOne({name: "Max"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c36d82d0371b2f7ec9a2fa1")
}
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.posts.insertMany([{title: "First Post", userId: ObjectId("5c36d82d0371b2f7ec9a2fa1")},{title: "Second Post", userId:  ObjectId("5c36d82d0371b2f7ec9a2fa1")}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5c36d8540371b2f7ec9a2fa2"),
                ObjectId("5c36d8540371b2f7ec9a2fa3")
        ]
}
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.users.find()
{ "_id" : ObjectId("5c36d82d0371b2f7ec9a2fa1"), "name" : "Max" }
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.posts.find()
{ "_id" : ObjectId("5c36d8540371b2f7ec9a2fa2"), "title" : "First Post", "userId" : ObjectId("5c36d82d0371b2f7ec9a2fa1") }
{ "_id" : ObjectId("5c36d8540371b2f7ec9a2fa3"), "title" : "Second Post", "userId" : ObjectId("5c36d82d0371b2f7ec9a2fa1") }
```

- Create a session

It is not working

```bash
MongoDB Enterprise Cluster0-shard-0:PRIMARY> const session = db.getMongo().startSession()
MongoDB Enterprise Cluster0-shard-0:PRIMARY> session
session { "id" : UUID("9d736983-5d23-465f-bb86-14502a7bc78c") }
MongoDB Enterprise Cluster0-shard-0:PRIMARY>  const usersCol = session.getDatabase("blogs").users
MongoDB Enterprise Cluster0-shard-0:PRIMARY> usersCol
blogs.users
MongoDB Enterprise Cluster0-shard-0:PRIMARY> const postsCol = session.getDatabase("blogs").posts
MongoDB Enterprise Cluster0-shard-0:PRIMARY> postsCol
blogs.posts
MongoDB Enterprise Cluster0-shard-0:PRIMARY> usersCol.find()
{ "_id" : ObjectId("5c378509afee5ffe30a6d6f0"), "name" : "Max" }
MongoDB Enterprise Cluster0-shard-0:PRIMARY> postsCol.find()
{ "_id" : ObjectId("5c37878eafee5ffe30a6d6f1"), "title" : "First Post", "userId" : ObjectId("5c378509afee5ffe30a6d6f0") }
{ "_id" : ObjectId("5c37878eafee5ffe30a6d6f2"), "title" : "Second Post", "userId" : ObjectId("5c378509afee5ffe30a6d6f0") }
MongoDB Enterprise Cluster0-shard-0:PRIMARY> session.startTransaction()
MongoDB Enterprise Cluster0-shard-0:PRIMARY> usersCol.deleteOne({_id: ObjectId("5c378509afee5ffe30a6d6f0")})
{ "acknowledged" : true, "deletedCount" : 1 }
MongoDB Enterprise Cluster0-shard-0:PRIMARY> usersCol.find()
MongoDB Enterprise Cluster0-shard-0:PRIMARY>
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.users.find()
{ "_id" : ObjectId("5c378509afee5ffe30a6d6f0"), "name" : "Max" }
MongoDB Enterprise Cluster0-shard-0:PRIMARY> postsCol.deleteMany({userId: ObjectId("5c378509afee5ffe30a6d6f0")})
{ "acknowledged" : true, "deletedCount" : 2 }
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.posts.find()
{ "_id" : ObjectId("5c37878eafee5ffe30a6d6f1"), "title" : "First Post", "userId" : ObjectId("5c378509afee5ffe30a6d6f0") }
{ "_id" : ObjectId("5c37878eafee5ffe30a6d6f2"), "title" : "Second Post", "userId" : ObjectId("5c378509afee5ffe30a6d6f0") }
MongoDB Enterprise Cluster0-shard-0:PRIMARY> session.commitTransaction()
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.users.find()
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.posts.find()
MongoDB Enterprise Cluster0-shard-0:PRIMARY> show collections
posts
users
```
- To cancel the transaction we need to use `abort.Transaction()`

## From Shell to Driver

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application2.png)

1. Preparing our Project

- Create an with `readWriteAnyDatabase` priviledges on  for [Cloud MongDb Atlas](https://cloud.mongodb.com)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application3.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application4.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application5.png)

- Install `nodejs`

- Install from [Node.js](https://nodejs.org/en/)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application6.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application7.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application8.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application9.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application10.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application11.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application12.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application13.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application14.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application15.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application16.png)

```bash
Getting latest version of the Chocolatey package for download.
Getting Chocolatey from https://chocolatey.org/api/v2/package/chocolatey/0.10.11.
Downloading 7-Zip commandline tool prior to extraction.
Extracting C:\Users\JUANPA~1.PER\AppData\Local\Temp\chocolatey\chocInstall\chocolatey.zip to C:\Users\JUANPA~1.PER\AppData\Local\Temp\chocolatey\chocInstall...
Installing chocolatey on this machine
Creating ChocolateyInstall as an environment variable (targeting 'Machine')
  Setting ChocolateyInstall to 'C:\ProgramData\chocolatey'
WARNING: It's very likely you will need to close and reopen your shell
  before you can use choco.
Restricting write permissions to Administrators
We are setting up the Chocolatey package repository.
The packages themselves go to 'C:\ProgramData\chocolatey\lib'
  (i.e. C:\ProgramData\chocolatey\lib\yourPackageName).
A shim file for the command line goes to 'C:\ProgramData\chocolatey\bin'
  and points to an executable in 'C:\ProgramData\chocolatey\lib\yourPackageName'.

Creating Chocolatey folders if they do not already exist.

WARNING: You can safely ignore errors related to missing log files when
  upgrading from a version of Chocolatey less than 0.9.9.
  'Batch file could not be found' is also safe to ignore.
  'The system cannot find the file specified' - also safe.
chocolatey.nupkg file not installed in lib.
 Attempting to locate it from bootstrapper.
PATH environment variable does not have C:\ProgramData\chocolatey\bin in it. Adding...
WARNING: Not setting tab completion: Profile file does not exist at
'C:\Users\juan.pablo.perez\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1'.
Chocolatey (choco.exe) is now ready.
You can call choco from anywhere, command line or powershell by typing choco.
Run choco /? for a list of functions.
You may need to shut down and restart powershell and/or consoles
 first prior to using choco.
Ensuring chocolatey commands are on the path
Ensuring chocolatey.nupkg is in the lib folder
Chocolatey v0.10.11
Upgrading the following packages:
python2;visualstudio2017-workload-vctools
By upgrading you accept licenses for the packages.
python2 is not installed. Installing...
Progress: Downloading python2 2.7.15... 100%
Progress: Downloading python2 2.7.15... 100%

python2 v2.7.15 [Approved]
python2 package files upgrade completed. Performing other installation steps.
Downloading python2 64 bit
  from 'https://www.python.org/ftp/python/2.7.15/python-2.7.15.amd64.msi'
Progress: 100% - Completed download of C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\python2\2.7.15\python-2.7.15.amd64.msi (19.31 MB).
Download of python-2.7.15.amd64.msi (19.31 MB) completed.
Hashes match.
Installing python2...
python2 has been installed.
Installed to 'C:\Python27'
Adding C:\Python27 to PATH if needed
  python2 may be able to be automatically uninstalled.
Environment Vars (like PATH) have changed. Close/reopen your shell to
 see the changes (or in powershell/cmd.exe just type `refreshenv`).
 The upgrade of python2 was successful.
  Software installed as 'msi', install location is likely default.
visualstudio2017-workload-vctools is not installed. Installing...
Progress: Downloading chocolatey-visualstudio.extension 1.7.1... 100%
Progress: Downloading chocolatey-visualstudio.extension 1.7.1... 100%
Progress: Downloading chocolatey-visualstudio.extension 1.7.1... 100%
Progress: Downloading visualstudio2017-workload-vctools 1.3.1... 100%
Progress: Downloading visualstudio2017-workload-vctools 1.3.1... 100%
Progress: Downloading visualstudio2017-workload-vctools 1.3.1... 100%
Progress: Downloading vcredist2017 14.16.27024.1... 100%
Progress: Downloading vcredist2017 14.16.27024.1... 100%
Progress: Downloading vcredist2017 14.16.27024.1... 100%
Progress: Downloading vcredist140 14.16.27024.1... 100%
Progress: Downloading vcredist140 14.16.27024.1... 100%
Progress: Downloading vcredist140 14.16.27024.1... 100%
Progress: Downloading chocolatey-core.extension 1.3.3... 100%
Progress: Downloading chocolatey-core.extension 1.3.3... 100%
Progress: Downloading chocolatey-core.extension 1.3.3... 100%
Progress: Downloading KB3033929 1.0.4... 100%
Progress: Downloading KB3033929 1.0.4... 100%
Progress: Downloading KB3033929 1.0.4... 100%
Progress: Downloading chocolatey-windowsupdate.extension 1.0.3... 100%
Progress: Downloading chocolatey-windowsupdate.extension 1.0.3... 100%
Progress: Downloading chocolatey-windowsupdate.extension 1.0.3... 100%
Progress: Downloading KB3035131 1.0.2... 100%
Progress: Downloading KB3035131 1.0.2... 100%
Progress: Downloading KB3035131 1.0.2... 100%
Progress: Downloading KB2919355 1.0.20160915... 100%
Progress: Downloading KB2919355 1.0.20160915... 100%
Progress: Downloading KB2919355 1.0.20160915... 100%
Progress: Downloading KB2919442 1.0.20160915... 100%
Progress: Downloading KB2919442 1.0.20160915... 100%
Progress: Downloading KB2919442 1.0.20160915... 100%
Progress: Downloading KB2999226 1.0.20181019... 10%
Progress: Downloading KB2999226 1.0.20181019... 100%
Progress: Downloading KB2999226 1.0.20181019... 100%
Progress: Downloading KB2999226 1.0.20181019... 100%
Progress: Downloading visualstudio2017-installer 1.0.2... 100%
Progress: Downloading visualstudio2017-installer 1.0.2... 100%
Progress: Downloading visualstudio2017-installer 1.0.2... 100%
Progress: Downloading dotnet4.6.2 4.6.01590.20170129... 100%
Progress: Downloading dotnet4.6.2 4.6.01590.20170129... 100%
Progress: Downloading dotnet4.6.2 4.6.01590.20170129... 100%
Progress: Downloading visualstudio2017buildtools 15.9.4.0... 100%
Progress: Downloading visualstudio2017buildtools 15.9.4.0... 100%
Progress: Downloading visualstudio2017buildtools 15.9.4.0... 100%

chocolatey-visualstudio.extension v1.7.1 [Approved]
chocolatey-visualstudio.extension package files upgrade completed. Performing other installation steps.
 Installed/updated chocolatey-visualstudio extensions.
 The upgrade of chocolatey-visualstudio.extension was successful.
  Software installed to 'C:\ProgramData\chocolatey\extensions\chocolatey-visualstudio'

chocolatey-core.extension v1.3.3 [Approved]
chocolatey-core.extension package files upgrade completed. Performing other installation steps.
 Installed/updated chocolatey-core extensions.
 The upgrade of chocolatey-core.extension was successful.
  Software installed to 'C:\ProgramData\chocolatey\extensions\chocolatey-core'

chocolatey-windowsupdate.extension v1.0.3 [Approved]
chocolatey-windowsupdate.extension package files upgrade completed. Performing other installation steps.
 Installed/updated chocolatey-windowsupdate extensions.
 The upgrade of chocolatey-windowsupdate.extension was successful.
  Software installed to 'C:\ProgramData\chocolatey\extensions\chocolatey-windowsupdate'

KB3035131 v1.0.2 [Approved]
kb3035131 package files upgrade completed. Performing other installation steps.
Skipping installation because update KB3035131 does not apply to this operating system (Microsoft Windows 10 Pro).
 The upgrade of kb3035131 was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

KB3033929 v1.0.4 [Approved]
kb3033929 package files upgrade completed. Performing other installation steps.
Skipping installation because update KB3033929 does not apply to this operating system (Microsoft Windows 10 Pro).
 The upgrade of kb3033929 was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

KB2919442 v1.0.20160915 [Approved]
kb2919442 package files upgrade completed. Performing other installation steps.
Skipping installation because this hotfix only applies to Windows 8.1 and Windows Server 2012 R2.
Skipping installation because this hotfix only applies to Windows 8.1 and Windows Server 2012 R2.
 The upgrade of kb2919442 was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

KB2919355 v1.0.20160915 [Approved]
kb2919355 package files upgrade completed. Performing other installation steps.
Skipping installation because this hotfix only applies to Windows 8.1 and Windows Server 2012 R2.
 The upgrade of kb2919355 was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

KB2999226 v1.0.20181019 [Approved]
kb2999226 package files upgrade completed. Performing other installation steps.
Skipping installation because update KB2999226 does not apply to this operating system (Microsoft Windows 10 Pro).
 The upgrade of kb2999226 was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

vcredist140 v14.16.27024.1 [Approved]
vcredist140 package files upgrade completed. Performing other installation steps.
Downloading vcredist140-x86
  from 'https://download.visualstudio.microsoft.com/download/pr/6ea9376d-6ab0-45ac-a305-d76274c006ed/6a1eef0ca6e0de1c1b41b6202d2208b2/vc_redist.x86.exe'
Progress: 100% - Completed download of C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\vcredist140\14.16.27024.1\vc_redist.x86.exe (13.97 MB).
Download of vc_redist.x86.exe (13.97 MB) completed.
Hashes match.
Installing vcredist140-x86...
vcredist140-x86 has been installed.
Downloading vcredist140-x64 64 bit
  from 'https://download.visualstudio.microsoft.com/download/pr/46db022e-06ea-4d11-a724-d26d33bc63f7/2b635c854654745078d5577a8ed0f80d/vc_redist.x64.exe'
Progress: 100% - Completed download of C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\vcredist140\14.16.27024.1\vc_redist.x64.exe (14.62 MB).
Download of vc_redist.x64.exe (14.62 MB) completed.
Hashes match.
Installing vcredist140-x64...
vcredist140-x64 has been installed.
  vcredist140 may be able to be automatically uninstalled.
 The upgrade of vcredist140 was successful.
  Software installed as 'exe', install location is likely default.

vcredist2017 v14.16.27024.1 [Approved]
vcredist2017 package files upgrade completed. Performing other installation steps.
 The upgrade of vcredist2017 was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

dotnet4.6.2 v4.6.01590.20170129 [Approved]
dotnet4.6.2 package files upgrade completed. Performing other installation steps.
Microsoft .NET Framework 4.6.2 or later is already installed.
 The upgrade of dotnet4.6.2 was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

visualstudio2017-installer v1.0.2 [Approved]
visualstudio2017-installer package files upgrade completed. Performing other installation steps.
 The upgrade of visualstudio2017-installer was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

visualstudio2017buildtools v15.9.4.0 [Approved]
visualstudio2017buildtools package files upgrade completed. Performing other installation steps.
Downloading channel manifest
  from 'https://aka.ms/vs/15/release/channel'
Progress: 100% - Completed download of C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\chocolatey-visualstudio.extension\ChannelManifest_81725945.man (69.37 KB).
Download of ChannelManifest_81725945.man (69.37 KB) completed.
Downloading catalog manifest
  from 'https://download.visualstudio.microsoft.com/download/pr/4fc8c411-e870-4f7d-b573-89ca6c63db1b/9c810a435dacd3d038a0bd5c8c9309ef/visualstudio.vsman'
Progress: 100% - Completed download of C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\chocolatey-visualstudio.extension\Catalog_15378104.man (7.8 MB).
Download of Catalog_15378104.man (7.8 MB) completed.
Downloading visualstudio2017buildtools
  from 'https://download.visualstudio.microsoft.com/download/pr/a46d2db7-bd7b-43ee-bd7b-12624297e4ec/11b9c9bd44ec2b475f6da3d1802b3d00/vs_buildtools.exe'
Progress: 100% - Completed download of C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\visualstudio2017buildtools\15.9.4.0\vs_buildtools.exe (1.22 MB).
Download of vs_buildtools.exe (1.22 MB) completed.
Hashes match.
Installing visualstudio2017buildtools...
Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1028\help.html...
Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\2052\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1055\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1046\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1042\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1029\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1036\help.html...


Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\3082\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1040\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1031\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1045\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1033\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1041\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\HelpFile\1049\help.html...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\vs_setup_bootstrapper.exe...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\Microsoft.Diagnostics.Tracing.EventSource.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\Microsoft.VisualStudio.RemoteControl.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\Microsoft.VisualStudio.Setup.Common.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\Microsoft.VisualStudio.Setup.Configuration.Interop.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\Microsoft.VisualStudio.Setup.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\Microsoft.VisualStudio.Setup.Download.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\Microsoft.VisualStudio.Setup.Engine.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\Microsoft.VisualStudio.Telemetry.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\Microsoft.VisualStudio.Utilities.Internal.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\Newtonsoft.Json.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\zh-Hans\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\zh-Hant\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\es\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\pt-BR\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\cs\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\tr\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\de\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\fr\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\it\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\pl\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\ko\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\ja\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\ru\vs_setup_bootstrapper.resources.dll...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\vs_setup_bootstrapper.config...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\vs_setup_bootstrapper.exe.config...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\detection.json...

Preparing: C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\2aa44ad7d37e0fbcff399e\vs_bootstrapper_d15\vs_setup_bootstrapper.json...

visualstudio2017buildtools has been installed.
  visualstudio2017buildtools may be able to be automatically uninstalled.
 The upgrade of visualstudio2017buildtools was successful.
  Software installed to 'C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools'

visualstudio2017-workload-vctools v1.3.1 [Approved]
visualstudio2017-workload-vctools package files upgrade completed. Performing other installation steps.
Installing visualstudio2017-workload-vctools...
visualstudio2017-workload-vctools has been installed.
  visualstudio2017-workload-vctools may be able to be automatically uninstalled.
 The upgrade of visualstudio2017-workload-vctools was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

Chocolatey upgraded 15/15 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).

Upgraded:
 - kb2919355 v1.0.20160915
 - visualstudio2017-workload-vctools v1.3.1
 - chocolatey-core.extension v1.3.3
 - vcredist140 v14.16.27024.1
 - kb2919442 v1.0.20160915
 - chocolatey-visualstudio.extension v1.7.1
 - chocolatey-windowsupdate.extension v1.0.3
 - kb3033929 v1.0.4
 - visualstudio2017buildtools v15.9.4.0
 - vcredist2017 v14.16.27024.1
 - dotnet4.6.2 v4.6.01590.20170129
 - kb3035131 v1.0.2
 - kb2999226 v1.0.20181019
 - python2 v2.7.15
 - visualstudio2017-installer v1.0.2

Packages requiring reboot:
 - vcredist140 (exit code 3010)

The recent package changes indicate a reboot is necessary.
 Please reboot at your earliest convenience.
```

- Copy the source code and install dependencies
```bash
C:\Windows\system32>npm --version
6.5.0-next.0

C:\Windows\system32>node --version
v11.6.0

C:\Windows\system32>cd C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver
C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver>npm i

> uglifyjs-webpack-plugin@0.4.6 postinstall C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver\node_modules\uglifyjs-webpack-plugin
> node lib/post_install.js

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1287 packages from 745 contributors and audited 14755 packages in 114.016s
found 3 vulnerabilities (2 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

```bash
C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver>npm audit
npm ERR! code ENOAUDIT
npm ERR! audit Your configured registry (https://registry.npmjs.org/) does not support audit requests.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\juan.pablo.perez\AppData\Roaming\npm-cache\_logs\2019-01-10T19_26_15_328Z-debug.log
```

> C:\Users\juan.pablo.perez\AppData\Roaming\npm-cache\_logs\2019-01-10T19_26_15_328Z-debug.log
```
0 info it worked if it ends with ok
1 verbose cli [ 'C:\\Program Files\\nodejs\\node.exe',
1 verbose cli   'C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js',
1 verbose cli   'audit' ]
2 info using npm@6.5.0-next.0
3 info using node@v11.6.0
4 verbose npm-session 3d00ad00524446ba
5 timing audit compress Completed in 26ms
6 info audit Submitting payload of 71389 bytes
7 http fetch POST 503 https://registry.npmjs.org/-/npm/v1/security/audits 13379ms
8 verbose stack Error: Your configured registry (https://registry.npmjs.org/) does not support audit requests.
8 verbose stack     at Bluebird.all.spread.then.catch (C:\Program Files\nodejs\node_modules\npm\lib\audit.js:172:18)
8 verbose stack     at tryCatcher (C:\Program Files\nodejs\node_modules\npm\node_modules\bluebird\js\release\util.js:16:23)
8 verbose stack     at Promise._settlePromiseFromHandler (C:\Program Files\nodejs\node_modules\npm\node_modules\bluebird\js\release\promise.js:512:31)
8 verbose stack     at Promise._settlePromise (C:\Program Files\nodejs\node_modules\npm\node_modules\bluebird\js\release\promise.js:569:18)
8 verbose stack     at Promise._settlePromise0 (C:\Program Files\nodejs\node_modules\npm\node_modules\bluebird\js\release\promise.js:614:10)
8 verbose stack     at Promise._settlePromises (C:\Program Files\nodejs\node_modules\npm\node_modules\bluebird\js\release\promise.js:690:18)
8 verbose stack     at _drainQueueStep (C:\Program Files\nodejs\node_modules\npm\node_modules\bluebird\js\release\async.js:138:12)
8 verbose stack     at _drainQueue (C:\Program Files\nodejs\node_modules\npm\node_modules\bluebird\js\release\async.js:131:9)
8 verbose stack     at Async._drainQueues (C:\Program Files\nodejs\node_modules\npm\node_modules\bluebird\js\release\async.js:147:5)
8 verbose stack     at Immediate.Async.drainQueues [as _onImmediate] (C:\Program Files\nodejs\node_modules\npm\node_modules\bluebird\js\release\async.js:17:14)
8 verbose stack     at processImmediate (timers.js:632:19)
9 verbose cwd C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver
10 verbose Windows_NT 10.0.17763
11 verbose argv "C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "audit"
12 verbose node v11.6.0
13 verbose npm  v6.5.0-next.0
14 error code ENOAUDIT
15 error audit Your configured registry (https://registry.npmjs.org/) does not support audit requests.
16 verbose exit [ 1, true ]
```

```bash
C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver>npm audit fix
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

up to date in 18.296s
fixed 0 of 3 vulnerabilities in 14755 scanned packages
  1 package update for 3 vulns involved breaking changes
  (use `npm audit fix --force` to install breaking changes; or refer to `npm audit` for steps to fix these manually)
```
```bash
C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver>npm audit fix --force
npm WARN using --force I sure hope you know what you are doing.
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).

> fsevents@1.2.4 install C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver\node_modules\fsevents
> node install

+ react-scripts@2.1.3
added 974 packages from 348 contributors, removed 272 packages, updated 282 packages and moved 35 packages in 132.388s
fixed 3 of 3 vulnerabilities in 14755 scanned packages
  1 package update for 3 vulns involved breaking changes
  (installed due to `--force` option)
```

- Run the app to ensure it is working.
```bash
C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver>npm start

> mongodb-demo@0.1.0 start C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver
> react-scripts start

? We're unable to detect target browsers.

Would you like to add the defaults to your package.json? (Y/n)
Set target browsers: >0.2%, not dead, not ie <= 11, not op_mini all
Starting the development server...
Compiled successfully!

You can now view mongodb-demo in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.0.75.1:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application17.png)

- Open another terminal window and run the node.js server app

```bash
C:\Windows\system32>cd C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver

C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver>npm run start:server

> mongodb-demo@0.1.0 start:server C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver
> node ./backend/app.js
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application18.png)

2. Installing the Node.js Driver

- Go to [MongoDB Drivers and ODM](https://docs.mongodb.com/ecosystem/drivers/)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application19.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application20.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application21.png)

- As it can be seen on [Node.js MongDB Driver installation](http://mongodb.github.io/node-mongodb-native/3.1/installation-guide/installation-guide/) we have to use the `npm install mongodb --save` command.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/MongoDB/mongodb-the-complete-developers-guide/shell-to-driver
$ npm install mongodb --save
+ mongodb@3.1.10
added 8 packages from 6 contributors and audited 35963 packages in 44.126s
found 0 vulnerabilities
```

3. Connecting Node.js & the MongoDB Cluster

- We are going to use our MongoDb Atlas cluster.

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application22.png)

> SVR address:
```
mongodb+srv://juan:<PASSWORD>@cluster0-ycwj8.mongodb.net/test?retryWrites=true
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application23.png)

> example of how to connect using Node.js
```js
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/admin";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
 // perform actions on the collection object
  client.close();
});
```

- Modify the backend `app.js` file
> `app.js` 
```js
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;

const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  // Set CORS headers so that the React SPA is able to communicate with this server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/products', productRoutes);
app.use('/', authRoutes);

mongodb.connect('mongodb+srv://juan:xxxxxxxx9@cluster0-ycwj8.mongodb.net/shop?retryWrites=true')
  .then((client) => {
    console.log('Connected!');
  })
  .catch(err => {
    console.log(err);
  })
app.listen(3100);
```

- Start the server app
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/MongoDB/mongodb-the-complete-developers-guide/shell-to-driver
$ npm run start:server

> mongodb-demo@0.1.0 start:server C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver
> node ./backend/app.js

(node:6668) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
Connected!
```

4. Storing Products in the Database

> index.js
```js
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  // Set CORS headers so that the React SPA is able to communicate with this server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/products', productRoutes);
app.use('/', authRoutes);

app.listen(3100);
```

> product.js
```js
const Router = require('express').Router;

const router = Router();
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const Decimal128 = mongodb.Decimal128;

const uri = 'mongodb+srv://juan:xxxxxxxx@cluster0-ycwj8.mongodb.net/shop?retryWrites=true';
const client = new MongoClient(uri, { useNewUrlParser: true });

const products = [
  {
    _id: 'fasdlk1j',
    name: 'Stylish Backpack',
    description:
      'A stylish backpack for the modern women or men. It easily fits all your stuff.',
    price: 79.99,
    image: 'http://localhost:3100/images/product-backpack.jpg'
  },
  {
    _id: 'asdgfs1',
    name: 'Lovely Earrings',
    description:
      "How could a man resist these lovely earrings? Right - he couldn't.",
    price: 129.59,
    image: 'http://localhost:3100/images/product-earrings.jpg'
  },
  {
    _id: 'askjll13',
    name: 'Working MacBook',
    description:
      'Yes, you got that right - this MacBook has the old, working keyboard. Time to get it!',
    price: 1799,
    image: 'http://localhost:3100/images/product-macbook.jpg'
  },
  {
    _id: 'sfhjk1lj21',
    name: 'Red Purse',
    description: 'A red purse. What is special about? It is red!',
    price: 159.89,
    image: 'http://localhost:3100/images/product-purse.jpg'
  },
  {
    _id: 'lkljlkk11',
    name: 'A T-Shirt',
    description:
      'Never be naked again! This T-Shirt can soon be yours. If you find that buy button.',
    price: 39.99,
    image: 'http://localhost:3100/images/product-shirt.jpg'
  },
  {
    _id: 'sajlfjal11',
    name: 'Cheap Watch',
    description: 'It actually is not cheap. But a watch!',
    price: 299.99,
    image: 'http://localhost:3100/images/product-watch.jpg'
  }
];

// Get list of products products
router.get('/', (req, res, next) => {
  // Return a list of dummy products
  // Later, this data will be fetched from MongoDB
  const queryPage = req.query.page;
  const pageSize = 5;
  let resultProducts = [...products];
  if (queryPage) {
    resultProducts = products.slice(
      (queryPage - 1) * pageSize,
      queryPage * pageSize
    );
  }
  res.json(resultProducts);
});

// Get single product
router.get('/:id', (req, res, next) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

// Add new product
// Requires logged in user
router.post('', (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: Decimal128.fromString(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  client.connect(err => {
    if (err) {
      console.log(err);
      return;
    }
    client.db().collection("products").insertOne(newProduct)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
    client.close();
  });  
  res.status(201).json({ message: 'Product added', productId: 'DUMMY' });
});

// Edit existing product
// Requires logged in user
router.patch('/:id', (req, res, next) => {
  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  console.log(updatedProduct);
  res.status(200).json({ message: 'Product updated', productId: 'DUMMY' });
});

// Delete a product
// Requires logged in user
router.delete('/:id', (req, res, next) => {
  res.status(200).json({ message: 'Product deleted' });
});

module.exports = router;
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/MongoDB/mongodb-the-complete-developers-guide/shell-to-driver
$ npm run start:server

> mongodb-demo@0.1.0 start:server C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver
> node ./backend/app.js

CommandResult {
  result:
   { n: 1,
     opTime: { ts: [Timestamp], t: 1 },
     electionId: 7fffffff0000000000000001,
     ok: 1,
     operationTime:
      Timestamp { _bsontype: 'Timestamp', low_: 2, high_: 1547191910 },
     '$clusterTime': { clusterTime: [Timestamp], signature: [Object] } },
  connection:
   Connection {
     _events:
      [Object: null prototype] {
        error: [Function],
        close: [Function],
        timeout: [Function],
        parseError: [Function] },
     _eventsCount: 4,
     _maxListeners: undefined,
     options:
      { host: 'cluster0-shard-00-00-ycwj8.mongodb.net',
        port: 27017,
        size: 5,
        minSize: 0,
        connectionTimeout: 30000,
        socketTimeout: 360000,
        keepAlive: true,
        keepAliveInitialDelay: 300000,
        noDelay: true,
        ssl: true,
        checkServerIdentity: true,
        ca: null,
        crl: null,
        cert: null,
        key: null,
        passPhrase: null,
        rejectUnauthorized: false,
        promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false,
        reconnect: false,
        reconnectInterval: 1000,
        reconnectTries: 30,
        domainsEnabled: false,
        disconnectHandler: [Store],
        cursorFactory: [Function],
        emitError: true,
        monitorCommands: false,
        setName: 'Cluster0-shard-0',
        promiseLibrary: [Function: Promise],
        clientInfo: [Object],
        authProviders: [Object],
        monitoring: false,
        parent: [ReplSet],
        servers: [Array],
        retryWrites: true,
        authSource: 'admin',
        replicaSet: 'Cluster0-shard-0',
        caseTranslate: true,
        useNewUrlParser: true,
        username: 'juan',
        password: 'xxxxxxxx',
        db: 'admin',
        auth: [Object],
        user: 'juan',
        dbName: 'shop',
        socketTimeoutMS: 360000,
        connectTimeoutMS: 30000,
        bson: BSON {} },
     id: 0,
     logger: Logger { className: 'Connection' },
     bson: BSON {},
     tag: undefined,
     messageHandler: [Function],
     maxBsonMessageSize: 67108864,
     port: 27017,
     host: 'cluster0-shard-00-00-ycwj8.mongodb.net',
     family: undefined,
     keepAlive: true,
     keepAliveInitialDelay: 300000,
     noDelay: true,
     connectionTimeout: 30000,
     socketTimeout: 360000,
     destroyed: false,
     domainSocket: false,
     singleBufferSerializtion: true,
     serializationFunction: 'toBinUnified',
     ca: null,
     crl: null,
     cert: null,
     key: null,
     passphrase: null,
     ciphers: null,
     ecdhCurve: null,
     ssl: true,
     rejectUnauthorized: false,
     checkServerIdentity: true,
     responseOptions:
      { promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false },
     flushing: false,
     queue: [],
     connection:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: 'cluster0-shard-00-00-ycwj8.mongodb.net',
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 6,
        connecting: false,
        _hadError: false,
        _handle: [TLSWrap],
        _parent: null,
        _host: 'cluster0-shard-00-00-ycwj8.mongodb.net',
        _readableState: [ReadableState],
        readable: true,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: [TLSWrap],
        _requestCert: true,
        _rejectUnauthorized: false,
        timeout: 360000,
        [Symbol(res)]: [TLSWrap],
        [Symbol(asyncId)]: 65,
        [Symbol(lastWriteQueueSize)]: 39,
        [Symbol(timeout)]:
         Timeout {
           _idleTimeout: 360000,
           _idlePrev: [TimersList],
           _idleNext: [TimersList],
           _idleStart: 7517,
           _onTimeout: [Function: bound ],
           _timerArgs: undefined,
           _repeat: null,
           _destroyed: false,
           [Symbol(refed)]: false,
           [Symbol(asyncId)]: 161,
           [Symbol(triggerId)]: 65 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(connect-options)]: [Object] },
     writeStream: null,
     hashedName: 'b9111864e574e73f04c333bfb9415265a2d0aa46',
     workItems: [ [Object] ],
     buffer: null,
     sizeOfMessage: 0,
     bytesRead: 0,
     stubBuffer: null },
  message:
   Response {
     parsed: true,
     raw:
      <Buffer f5 00 00 00 93 96 79 02 0d 00 00 00 01 00 00 00 08 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 d1 00 00 00 10 6e 00 01 00 00 00 03 6f 70 ... 195 more bytes>,
     data:
      <Buffer 08 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 d1 00 00 00 10 6e 00 01 00 00 00 03 6f 70 54 69 6d 65 00 1c 00 00 00 11 74 73 00 02 00 00 ... 179 more bytes>,
     bson: BSON {},
     opts:
      { promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false },
     length: 245,
     requestId: 41522835,
     responseTo: 13,
     opCode: 1,
     fromCompressed: undefined,
     responseFlags: 8,
     cursorId: Long { _bsontype: 'Long', low_: 0, high_: 0 },
     startingFrom: 0,
     numberReturned: 1,
     documents: [ [Object] ],
     cursorNotFound: false,
     queryFailure: false,
     shardConfigStale: false,
     awaitCapable: true,
     promoteLongs: true,
     promoteValues: true,
     promoteBuffers: false,
     index: 229,
     hashedName: 'b9111864e574e73f04c333bfb9415265a2d0aa46' },
  ops:
   [ { name: 'Any product',
       description: 'Does it work?',
       price: [Decimal128],
       image: 'http://localhost:3100/product-backpack.jpg',
       _id: 5c384666dee44c3ef4f99ef2 } ],
  insertedCount: 1,
  insertedId: 5c384666dee44c3ef4f99ef2 }
```

```bash
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.products.find()
{ "_id" : ObjectId("5c3636f60713d82fc1c27bf8"), "title" : "A book", "price" : 12.99 }
{ "_id" : ObjectId("5c384666dee44c3ef4f99ef2"), "name" : "Any product", "description" : "Does it work?", "price" : NumberDecimal("12.99"), "image" : "http://localhost:3100/product-backpack.jpg" }
```

5. Fetching Data From the Database

> product.js
```js
const Router = require('express').Router;

const router = Router();
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const Decimal128 = mongodb.Decimal128;

const uri = 'mongodb+srv://juan:xxxxxxxx@cluster0-ycwj8.mongodb.net/shop?retryWrites=true';
const client = new MongoClient(uri, { useNewUrlParser: true });

const products = [
  {
    _id: 'fasdlk1j',
    name: 'Stylish Backpack',
    description:
      'A stylish backpack for the modern women or men. It easily fits all your stuff.',
    price: 79.99,
    image: 'http://localhost:3100/images/product-backpack.jpg'
  },
  {
    _id: 'asdgfs1',
    name: 'Lovely Earrings',
    description:
      "How could a man resist these lovely earrings? Right - he couldn't.",
    price: 129.59,
    image: 'http://localhost:3100/images/product-earrings.jpg'
  },
  {
    _id: 'askjll13',
    name: 'Working MacBook',
    description:
      'Yes, you got that right - this MacBook has the old, working keyboard. Time to get it!',
    price: 1799,
    image: 'http://localhost:3100/images/product-macbook.jpg'
  },
  {
    _id: 'sfhjk1lj21',
    name: 'Red Purse',
    description: 'A red purse. What is special about? It is red!',
    price: 159.89,
    image: 'http://localhost:3100/images/product-purse.jpg'
  },
  {
    _id: 'lkljlkk11',
    name: 'A T-Shirt',
    description:
      'Never be naked again! This T-Shirt can soon be yours. If you find that buy button.',
    price: 39.99,
    image: 'http://localhost:3100/images/product-shirt.jpg'
  },
  {
    _id: 'sajlfjal11',
    name: 'Cheap Watch',
    description: 'It actually is not cheap. But a watch!',
    price: 299.99,
    image: 'http://localhost:3100/images/product-watch.jpg'
  }
];

// Get list of products products
router.get('/', (req, res, next) => {
  // const queryPage = req.query.page;
  // const pageSize = 5;
  // let resultProducts = [...products];
  // if (queryPage) {
  //   resultProducts = products.slice(
  //     (queryPage - 1) * pageSize,
  //     queryPage * pageSize
  //   );
  // }
  client.connect(err => {
    const products = [];
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
      return;
    }
    client.db().collection("products")
      .find()
        .forEach(productDoc => {
          productDoc.price = productDoc.price.toString();
          products.push(productDoc);
        })
      .then(result => {
        client.close();
        res.status(200).json(products);
      })
      .catch(err => {
        console.log(err);
        client.close();
        res.status(500).json({ message: 'An error ocurred.' });  
      });
  });
});

// Get single product
router.get('/:id', (req, res, next) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

// Add new product
// Requires logged in user
router.post('', (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: Decimal128.fromString(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  client.connect(err => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' }); 
      client.close();
      return;
    }
    client.db().collection("products").insertOne(newProduct)
      .then(result => {
        console.log(result);
        client.close();
        res.status(201).json({ message: 'Product added', productId: result.insertedId });  
      })
      .catch(err => {
        console.log(err);
        client.close();
        res.status(500).json({ message: 'An error ocurred.' });  
      });
  });  
});

// Edit existing product
// Requires logged in user
router.patch('/:id', (req, res, next) => {
  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  console.log(updatedProduct);
  res.status(200).json({ message: 'Product updated', productId: 'DUMMY' });
});

// Delete a product
// Requires logged in user
router.delete('/:id', (req, res, next) => {
  res.status(200).json({ message: 'Product deleted' });
});

module.exports = router;
```
![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application24.png)

6. Creating a More Realistic Setup

> db.js
```js
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient;
const mongoDbUrl = 'mongodb+srv://juan:xxxxxxxx@cluster0-ycwj8.mongodb.net/shop?retryWrites=true';

let _db;

const initDb = callback => {
  if (_db) {
    console.log('Database is already initialize!');
    return callback(null, _db);
  }
  const client = new MongoClient(mongoDbUrl, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      callback(err)
    } else {
      _db = client;
      callback(null, _db);
    }
  })
}

const getDb = () => {
  if (!_db) {
    throw Error('Database not initialized!')
  }
  return _db;
}

module.exports = {
  initDb,
  getDb
}
```

> app.js
```js
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  // Set CORS headers so that the React SPA is able to communicate with this server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/products', productRoutes);
app.use('/', authRoutes);

db.initDb((err, db) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(3100);
  }
})
```

> product.js
```js
const Router = require('express').Router;

const router = Router();
const mongodb = require('mongodb')
const db = require('../db');
const Decimal128 = mongodb.Decimal128;

// Get list of products products
router.get('/', (req, res, next) => {
  // const queryPage = req.query.page;
  // const pageSize = 5;
  // let resultProducts = [...products];
  // if (queryPage) {
  //   resultProducts = products.slice(
  //     (queryPage - 1) * pageSize,
  //     queryPage * pageSize
  //   );
  // }
  const products = [];
  db.getDb()
    .db()
    .collection("products")
    .find()
      .forEach(productDoc => {
        productDoc.price = productDoc.price.toString();
        products.push(productDoc);
      })
    .then(result => {
      res.status(200).json(products);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });
});

// Get single product
router.get('/:id', (req, res, next) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

// Add new product
// Requires logged in user
router.post('', (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: Decimal128.fromString(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  db.getDb()
    .db()
    .collection("products").insertOne(newProduct)
    .then(result => {
      console.log(result);
      res.status(201).json({ message: 'Product added', productId: result.insertedId });  
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });
});

// Edit existing product
// Requires logged in user
router.patch('/:id', (req, res, next) => {
  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  console.log(updatedProduct);
  res.status(200).json({ message: 'Product updated', productId: 'DUMMY' });
});

// Delete a product
// Requires logged in user
router.delete('/:id', (req, res, next) => {
  res.status(200).json({ message: 'Product deleted' });
});

module.exports = router;
```

7. Getting a Single Product

> product.js
```js
const Router = require('express').Router;

const router = Router();
const mongodb = require('mongodb')
const db = require('../db');
const Decimal128 = mongodb.Decimal128;
const ObjectId = mongodb.ObjectId;

// Get list of products products
router.get('/', (req, res, next) => {
  // const queryPage = req.query.page;
  // const pageSize = 5;
  // let resultProducts = [...products];
  // if (queryPage) {
  //   resultProducts = products.slice(
  //     (queryPage - 1) * pageSize,
  //     queryPage * pageSize
  //   );
  // }
  const products = [];
  db.getDb()
    .db()
    .collection("products")
    .find()
      .forEach(productDoc => {
        productDoc.price = productDoc.price.toString();
        products.push(productDoc);
      })
    .then(result => {
      res.status(200).json(products);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });
});

// Get single product
router.get('/:id', (req, res, next) => {
  db.getDb()
    .db()
    .collection("products")
    .findOne({_id: new ObjectId(req.params.id) })  
    .then(productDoc => {
      productDoc.price = productDoc.price.toString();
      res.status(200).json(productDoc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });    
});

// Add new product
// Requires logged in user
router.post('', (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: Decimal128.fromString(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  db.getDb()
    .db()
    .collection("products").insertOne(newProduct)
    .then(result => {
      console.log(result);
      res.status(201).json({ message: 'Product added', productId: result.insertedId });  
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });
});

// Edit existing product
// Requires logged in user
router.patch('/:id', (req, res, next) => {
  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  console.log(updatedProduct);
  res.status(200).json({ message: 'Product updated', productId: 'DUMMY' });
});

// Delete a product
// Requires logged in user
router.delete('/:id', (req, res, next) => {
  res.status(200).json({ message: 'Product deleted' });
});

module.exports = router;
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application25.png)

8. Editing & Deleting Products
> product.js
```js
const Router = require('express').Router;

const router = Router();
const mongodb = require('mongodb')
const db = require('../db');
const Decimal128 = mongodb.Decimal128;
const ObjectId = mongodb.ObjectId;

// Get list of products products
router.get('/', (req, res, next) => {
  // const queryPage = req.query.page;
  // const pageSize = 5;
  // let resultProducts = [...products];
  // if (queryPage) {
  //   resultProducts = products.slice(
  //     (queryPage - 1) * pageSize,
  //     queryPage * pageSize
  //   );
  // }
  const products = [];
  db.getDb()
    .db()
    .collection("products")
    .find()
      .forEach(productDoc => {
        productDoc.price = productDoc.price.toString();
        products.push(productDoc);
      })
    .then(result => {
      res.status(200).json(products);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });
});

// Get single product
router.get('/:id', (req, res, next) => {
  db.getDb()
    .db()
    .collection("products")
    .findOne({_id: new ObjectId(req.params.id) })  
    .then(productDoc => {
      productDoc.price = productDoc.price.toString();
      res.status(200).json(productDoc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });    
});

// Add new product
// Requires logged in user
router.post('', (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: Decimal128.fromString(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  db.getDb()
    .db()
    .collection("products").insertOne(newProduct)
    .then(result => {
      console.log(result);
      res.status(201).json({ message: 'Product added', productId: result.insertedId });  
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });
});

// Edit existing product
// Requires logged in user
router.patch('/:id', (req, res, next) => {
  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: Decimal128.fromString(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  db.getDb()
    .db()
    .collection("products")
    .updateOne({_id: new ObjectId(req.params.id) }, {$set: updatedProduct})  
    .then(result => {
      res.status(200).json({ message: 'Product updated', productId: req.params.id });  
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });    
});

// Delete a product
// Requires logged in user
router.delete('/:id', (req, res, next) => {
  db.getDb()
    .db()
    .collection("products")
    .deleteOne({_id: new ObjectId(req.params.id) })  
    .then(result => {
      res.status(200).json({ message: 'Product deleted', productId: req.params.id });  
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });  
});

module.exports = router;
```

9. Implementing Pagination

> product.js
```js
const Router = require('express').Router;

const router = Router();
const mongodb = require('mongodb')
const db = require('../db');
const Decimal128 = mongodb.Decimal128;
const ObjectId = mongodb.ObjectId;

// Get list of products products
router.get('/', (req, res, next) => {
  const queryPage = req.query.page;
  const pageSize = 5;
  const products = [];
  db.getDb()
    .db()
    .collection("products")
    .find()
    .sort({price: -1})
    .skip((queryPage - 1) * pageSize )
    .limit(pageSize)
      .forEach(productDoc => {
        productDoc.price = productDoc.price.toString();
        products.push(productDoc);
      })
    .then(result => {
      res.status(200).json(products);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });
});

// Get single product
router.get('/:id', (req, res, next) => {
  db.getDb()
    .db()
    .collection("products")
    .findOne({_id: new ObjectId(req.params.id) })  
    .then(productDoc => {
      productDoc.price = productDoc.price.toString();
      res.status(200).json(productDoc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });    
});

// Add new product
// Requires logged in user
router.post('', (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: Decimal128.fromString(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  db.getDb()
    .db()
    .collection("products").insertOne(newProduct)
    .then(result => {
      console.log(result);
      res.status(201).json({ message: 'Product added', productId: result.insertedId });  
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });
});

// Edit existing product
// Requires logged in user
router.patch('/:id', (req, res, next) => {
  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: Decimal128.fromString(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  db.getDb()
    .db()
    .collection("products")
    .updateOne({_id: new ObjectId(req.params.id) }, {$set: updatedProduct})  
    .then(result => {
      res.status(200).json({ message: 'Product updated', productId: req.params.id });  
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });    
});

// Delete a product
// Requires logged in user
router.delete('/:id', (req, res, next) => {
  db.getDb()
    .db()
    .collection("products")
    .deleteOne({_id: new ObjectId(req.params.id) })  
    .then(result => {
      res.status(200).json({ message: 'Product deleted', productId: req.params.id });  
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error ocurred.' });  
    });  
});

module.exports = router;
```

- On the React client we can hardcode the page we want to show:
> Products.js
```js
import React, { Component } from 'react';
import axios from 'axios';

import Products from '../../components/Products/Products';

class ProductsPage extends Component {
  state = { isLoading: true, products: [] };
  componentDidMount() {
    this.fetchData();
  }

  productDeleteHandler = productId => {
    axios
      .delete('http://localhost:3100/products/' + productId)
      .then(result => {
        console.log(result);
        this.fetchData();
      })
      .catch(err => {
        this.props.onError(
          'Deleting the product failed. Please try again later'
        );
        console.log(err);
      });
  };

  fetchData = () => {
    axios
      .get('http://localhost:3100/products?page=1')
      .then(productsResponse => {
        this.setState({ isLoading: false, products: productsResponse.data });
      })
      .catch(err => {
        this.setState({ isLoading: false, products: [] });
        this.props.onError('Loading products failed. Please try again later');
        console.log(err);
      });    
  }

  render() {
    let content = <p>Loading products...</p>;

    if (!this.state.isLoading && this.state.products.length > 0) {
      content = (
        <Products
          products={this.state.products}
          onDeleteProduct={this.productDeleteHandler}
        />
      );
    }
    if (!this.state.isLoading && this.state.products.length === 0) {
      content = <p>Found no products. Try again later.</p>;
    }
    return <main>{content}</main>;
  }
}

export default ProductsPage;
```

10. Adding an Index
```bash
C:\Windows\system32>mongo "mongodb+srv://cluster0-ycwj8.mongodb.net/test" --username juan
MongoDB shell version v4.0.5
Enter password:
connecting to: mongodb://cluster0-shard-00-00-ycwj8.mongodb.net.:27017,cluster0-shard-00-01-ycwj8.mongodb.net.:27017,cluster0-shard-00-02-ycwj8.mongodb.net.:27017/test?authSource=admin&gssapiServiceName=mongodb&replicaSet=Cluster0-shard-0&ssl=true
2019-01-12T06:41:01.103+0000 I NETWORK  [js] Starting new replica set monitor for Cluster0-shard-0/cluster0-shard-00-00-ycwj8.mongodb.net.:27017,cluster0-shard-00-01-ycwj8.mongodb.net.:27017,cluster0-shard-00-02-ycwj8.mongodb.net.:27017
2019-01-12T06:41:01.691+0000 I NETWORK  [ReplicaSetMonitor-TaskExecutor] Successfully connected to cluster0-shard-00-01-ycwj8.mongodb.net.:27017 (1 connections now open to cluster0-shard-00-01-ycwj8.mongodb.net.:27017 with a 5 second timeout)
2019-01-12T06:41:01.698+0000 I NETWORK  [js] Successfully connected to cluster0-shard-00-02-ycwj8.mongodb.net.:27017 (1 connections now open to cluster0-shard-00-02-ycwj8.mongodb.net.:27017 with a 5 second timeout)
2019-01-12T06:41:02.362+0000 I NETWORK  [ReplicaSetMonitor-TaskExecutor] Successfully connected to cluster0-shard-00-00-ycwj8.mongodb.net:27017 (1 connections now open to cluster0-shard-00-00-ycwj8.mongodb.net:27017 with a 5 second timeout)
2019-01-12T06:41:02.421+0000 I NETWORK  [js] Successfully connected to cluster0-shard-00-00-ycwj8.mongodb.net.:27017 (1 connections now open to cluster0-shard-00-00-ycwj8.mongodb.net.:27017 with a 5 second timeout)
2019-01-12T06:41:02.480+0000 I NETWORK  [ReplicaSetMonitor-TaskExecutor] changing hosts to Cluster0-shard-0/cluster0-shard-00-00-ycwj8.mongodb.net:27017,cluster0-shard-00-01-ycwj8.mongodb.net:27017,cluster0-shard-00-02-ycwj8.mongodb.net:27017 from Cluster0-shard-0/cluster0-shard-00-00-ycwj8.mongodb.net.:27017,cluster0-shard-00-01-ycwj8.mongodb.net.:27017,cluster0-shard-00-02-ycwj8.mongodb.net.:27017
2019-01-12T06:41:02.787+0000 I NETWORK  [js] Marking host cluster0-shard-00-00-ycwj8.mongodb.net:27017 as failed :: caused by :: SocketException: can't authenticate against replica set node cluster0-shard-00-00-ycwj8.mongodb.net:27017 :: caused by :: socket exception [CONNECT_ERROR] server [cluster0-shard-00-00-ycwj8.mongodb.net:27017] connection pool error: network error while attempting to run command 'isMaster' on host 'cluster0-shard-00-00-ycwj8.mongodb.net:27017'
2019-01-12T06:41:02.958+0000 I NETWORK  [ReplicaSetMonitor-TaskExecutor] Successfully connected to cluster0-shard-00-02-ycwj8.mongodb.net:27017 (1 connections now open to cluster0-shard-00-02-ycwj8.mongodb.net:27017 with a 5 second timeout)
2019-01-12T06:41:03.253+0000 I NETWORK  [js] Successfully connected to cluster0-shard-00-01-ycwj8.mongodb.net:27017 (1 connections now open to cluster0-shard-00-01-ycwj8.mongodb.net:27017 with a 5 second timeout)
2019-01-12T06:41:03.618+0000 I NETWORK  [js] Marking host cluster0-shard-00-01-ycwj8.mongodb.net:27017 as failed :: caused by :: SocketException: can't authenticate against replica set node cluster0-shard-00-01-ycwj8.mongodb.net:27017 :: caused by :: socket exception [CONNECT_ERROR] server [cluster0-shard-00-01-ycwj8.mongodb.net:27017] connection pool error: network error while attempting to run command 'isMaster' on host 'cluster0-shard-00-01-ycwj8.mongodb.net:27017'
2019-01-12T06:41:03.855+0000 I NETWORK  [js] Marking host cluster0-shard-00-02-ycwj8.mongodb.net:27017 as failed :: caused by :: SocketException: can't authenticate against replica set node cluster0-shard-00-02-ycwj8.mongodb.net:27017 :: caused by :: socket exception [CONNECT_ERROR] server [cluster0-shard-00-02-ycwj8.mongodb.net:27017] connection pool error: network error while attempting to run command 'isMaster' on host 'cluster0-shard-00-02-ycwj8.mongodb.net:27017'
Implicit session: session { "id" : UUID("8dce8ad0-4176-4e14-8896-183b00e32c70") }
MongoDB server version: 4.0.5
MongoDB Enterprise Cluster0-shard-0:PRIMARY> show dbs
admin  0.000GB
blogs  0.000GB
local  2.914GB
shop   0.000GB
test   0.000GB
MongoDB Enterprise Cluster0-shard-0:PRIMARY> use shop
switched to db shop
MongoDB Enterprise Cluster0-shard-0:PRIMARY> show collections
products
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.products.createIndex({price: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1,
        "operationTime" : Timestamp(1547275317, 2),
        "$clusterTime" : {
                "clusterTime" : Timestamp(1547275317, 2),
                "signature" : {
                        "hash" : BinData(0,"WyGxc544p3owrACTOALabpEqSjQ="),
                        "keyId" : NumberLong("6644207230298095617")
                }
        }
}
MongoDB Enterprise Cluster0-shard-0:PRIMARY>
```

11. Signing Users Up

> auth.js
```js
const Router = require('express').Router;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../db');

const router = Router();

const createToken = () => {
  return jwt.sign({}, 'secret', { expiresIn: '1h' });
};

router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const pw = req.body.password;
  // Check if user login is valid
  // If yes, create token and return it to client
  const token = createToken();
  // res.status(200).json({ token: token, user: { email: 'dummy@dummy.com' } });
  res
    .status(401)
    .json({ message: 'Authentication failed, invalid username or password.' });
});

router.post('/signup', (req, res, next) => {
  const email = req.body.email;
  const pw = req.body.password;
  // Hash password before storing it in database => Encryption at Rest
  bcrypt
    .hash(pw, 12)
    .then(hashedPW => {
      // Store hashedPW in database
      db.getDb()
      .db()
      .collection("users").insertOne({
        email: email,
        password: hashedPW
      })
      .then(result => {
        console.log(result);
        const token = createToken();
        res.json({ token: token, user: { email: email } });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'An error ocurred.' });  
      });      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Creating the user failed.' });
    });
});

module.exports = router;
```

- Backend log:
```bash
CommandResult {
  result:
   { n: 1,
     opTime: { ts: [Timestamp], t: 1 },
     electionId: 7fffffff0000000000000001,
     ok: 1,
     operationTime:
      Timestamp { _bsontype: 'Timestamp', low_: 2, high_: 1547281556 },
     '$clusterTime': { clusterTime: [Timestamp], signature: [Object] } },
  connection:
   Connection {
     _events:
      [Object: null prototype] {
        error: [Function],
        close: [Function],
        timeout: [Function],
        parseError: [Function] },
     _eventsCount: 4,
     _maxListeners: undefined,
     options:
      { host: 'cluster0-shard-00-00-ycwj8.mongodb.net',
        port: 27017,
        size: 5,
        minSize: 0,
        connectionTimeout: 30000,
        socketTimeout: 360000,
        keepAlive: true,
        keepAliveInitialDelay: 300000,
        noDelay: true,
        ssl: true,
        checkServerIdentity: true,
        ca: null,
        crl: null,
        cert: null,
        key: null,
        passPhrase: null,
        rejectUnauthorized: false,
        promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false,
        reconnect: false,
        reconnectInterval: 1000,
        reconnectTries: 30,
        domainsEnabled: false,
        disconnectHandler: [Store],
        cursorFactory: [Function],
        emitError: true,
        monitorCommands: false,
        setName: 'Cluster0-shard-0',
        promiseLibrary: [Function: Promise],
        clientInfo: [Object],
        authProviders: [Object],
        monitoring: false,
        parent: [ReplSet],
        servers: [Array],
        retryWrites: true,
        authSource: 'admin',
        replicaSet: 'Cluster0-shard-0',
        caseTranslate: true,
        useNewUrlParser: true,
        username: 'juan',
        password: 'juan2019',
        db: 'admin',
        auth: [Object],
        user: 'juan',
        dbName: 'shop',
        socketTimeoutMS: 360000,
        connectTimeoutMS: 30000,
        bson: BSON {} },
     id: 0,
     logger: Logger { className: 'Connection' },
     bson: BSON {},
     tag: undefined,
     messageHandler: [Function],
     maxBsonMessageSize: 67108864,
     port: 27017,
     host: 'cluster0-shard-00-00-ycwj8.mongodb.net',
     family: undefined,
     keepAlive: true,
     keepAliveInitialDelay: 300000,
     noDelay: true,
     connectionTimeout: 30000,
     socketTimeout: 360000,
     destroyed: false,
     domainSocket: false,
     singleBufferSerializtion: true,
     serializationFunction: 'toBinUnified',
     ca: null,
     crl: null,
     cert: null,
     key: null,
     passphrase: null,
     ciphers: null,
     ecdhCurve: null,
     ssl: true,
     rejectUnauthorized: false,
     checkServerIdentity: true,
     responseOptions:
      { promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false },
     flushing: false,
     queue: [],
     connection:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: 'cluster0-shard-00-00-ycwj8.mongodb.net',
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 6,
        connecting: false,
        _hadError: false,
        _handle: [TLSWrap],
        _parent: null,
        _host: 'cluster0-shard-00-00-ycwj8.mongodb.net',
        _readableState: [ReadableState],
        readable: true,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: [TLSWrap],
        _requestCert: true,
        _rejectUnauthorized: false,
        timeout: 360000,
        [Symbol(res)]: [TLSWrap],
        [Symbol(asyncId)]: 12,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]:
         Timeout {
           _idleTimeout: 360000,
           _idlePrev: [TimersList],
           _idleNext: [Timeout],
           _idleStart: 19882,
           _onTimeout: [Function: bound ],
           _timerArgs: undefined,
           _repeat: null,
           _destroyed: false,
           [Symbol(refed)]: false,
           [Symbol(asyncId)]: 915,
           [Symbol(triggerId)]: 12 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(connect-options)]: [Object] },
     writeStream: null,
     hashedName: 'b9111864e574e73f04c333bfb9415265a2d0aa46',
     workItems: [],
     buffer: null,
     sizeOfMessage: 0,
     bytesRead: 0,
     stubBuffer: null },
  message:
   Response {
     parsed: true,
     raw:
      <Buffer f5 00 00 00 b7 2a 09 03 10 00 00 00 01 00 00 00 08 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 d1 00 00 00 10 6e 00 01 00 00 00 03 6f 70 ... 195 more bytes>,
     data:
      <Buffer 08 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 d1 00 00 00 10 6e 00 01 00 00 00 03 6f 70 54 69 6d 65 00 1c 00 00 00 11 74 73 00 02 00 00 ... 179 more bytes>,
     bson: BSON {},
     opts:
      { promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false },
     length: 245,
     requestId: 50932407,
     responseTo: 16,
     opCode: 1,
     fromCompressed: undefined,
     responseFlags: 8,
     cursorId: Long { _bsontype: 'Long', low_: 0, high_: 0 },
     startingFrom: 0,
     numberReturned: 1,
     documents: [ [Object] ],
     cursorNotFound: false,
     queryFailure: false,
     shardConfigStale: false,
     awaitCapable: true,
     promoteLongs: true,
     promoteValues: true,
     promoteBuffers: false,
     index: 229,
     hashedName: 'b9111864e574e73f04c333bfb9415265a2d0aa46' },
  ops:
   [ { email: 'test@test.com',
       password:
        '$2a$12$WmO4aE0UFhZ6zUB9997AVuEwvkAidXcif9vCAOpvEyjQ37hKMF7E.',
       _id: 5c39a4928bd6894af0d2487c } ],
  insertedCount: 1,
  insertedId: 5c39a4928bd6894af0d2487c }
```

- Querying MongoDB
```bash
MongoDB Enterprise Cluster0-shard-0:PRIMARY> show collections
products
users
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.users.find()
{ "_id" : ObjectId("5c39a4928bd6894af0d2487c"), "email" : "test@test.com", "password" : "$2a$12$WmO4aE0UFhZ6zUB9997AVuEwvkAidXcif9vCAOpvEyjQ37hKMF7E." }
```

12. Adding an Index to Make the Email Unique 

```bash
MongoDB Enterprise Cluster0-shard-0:PRIMARY> db.users.createIndex({email: 1}, {unique: true})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1,
        "operationTime" : Timestamp(1547281902, 2),
        "$clusterTime" : {
                "clusterTime" : Timestamp(1547281902, 2),
                "signature" : {
                        "hash" : BinData(0,"KWXVkYnwGlkzZWy+ILczFDHiVjc="),
                        "keyId" : NumberLong("6644207230298095617")
                }
        }
}
```

- If we try to insert the same record again an error is thrown

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application26.png)

```bash
{ MongoError: E11000 duplicate key error collection: shop.users index: email_1 dup key: { : "test@test.com" }
    at Function.create (C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver\node_modules\mongodb-core\lib\error.js:43:12)
    at toError (C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver\node_modules\mongodb\lib\utils.js:149:22)
    at coll.s.topology.insert (C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver\node_modules\mongodb\lib\operations\collection_ops.js:844:39)
    at handler (C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver\node_modules\mongodb-core\lib\topologies\replset.js:1195:22)
    at C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\shell-to-driver\node_modules\mongodb-core\lib\connection\pool.js:532:18
    at process.internalTickCallback (internal/process/next_tick.js:70:11)
  driver: true,
  name: 'MongoError',
  index: 0,
  code: 11000,
  errmsg:
   'E11000 duplicate key error collection: shop.users index: email_1 dup key: { : "test@test.com" }',
  [Symbol(mongoErrorContextSymbol)]: {} }
```

13. Adding User Sign In

> auth.js
```js
const Router = require('express').Router;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../db');

const router = Router();

const createToken = () => {
  return jwt.sign({}, 'secret', { expiresIn: '1h' });
};

router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const pw = req.body.password;
  // Check if user login is valid
  db.getDb()
  .db()
  .collection("users")
  .findOne({email: email})
  .then(userDoc => {
    return bcrypt.compare(pw, userDoc.password)
  })
  .then(result => {
    if (!result) {
      throw Error();       
    } 
    const token = createToken();
    res.json({ message: 'Authentication succedded.', token: token });
  })
  .catch(err => {
    console.log(err);
    res.status(401).json({ message: 'An error ocurred.' });  
  });   

});

router.post('/signup', (req, res, next) => {
  const email = req.body.email;
  const pw = req.body.password;
  // Hash password before storing it in database => Encryption at Rest
  bcrypt
    .hash(pw, 12)
    .then(hashedPW => {
      // Store hashedPW in database
      db.getDb()
      .db()
      .collection("users").insertOne({
        email: email,
        password: hashedPW
      })
      .then(result => {
        console.log(result);
        const token = createToken();
        res.json({ token: token, user: { email: email } });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'An error ocurred.' });  
      });      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Creating the user failed.' });
    });
});

module.exports = router;
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application27.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Application28.png)

## Introducing Stitch

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch.png)

1. What is Stitch?

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch2.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch3.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch4.png)

2. Preparations

- From [MongoDB Atlas](https://cloud.mongodb.com)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch5.png)

- Click on `Stitch Apps`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch6.png)

- Click on `Create New Application`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch7.png)

- Put the `Application Name` and the click on `Create`

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch8.png)

- Fix the `Application Name` and the click on `Create` again

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch9.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch10.png)

```bash
C:\Windows\system32>cd C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch

C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch>dir
 Volume in drive C has no label.
 Volume Serial Number is 7A1F-74B3

 Directory of C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch

12/01/2019  09:32    <DIR>          .
12/01/2019  09:32    <DIR>          ..
12/01/2019  09:32               285 .gitignore
12/01/2019  09:32               143 how-to-use.txt
12/01/2019  09:32           411,035 package-lock.json
12/01/2019  09:32               589 package.json
12/01/2019  09:32    <DIR>          public
12/01/2019  09:32           121,322 README.md
12/01/2019  09:32    <DIR>          src
12/01/2019  09:32           247,811 yarn.lock
               6 File(s)        781,185 bytes
               4 Dir(s)  316,131,663,872 bytes free

C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch>npm i

> uglifyjs-webpack-plugin@0.4.6 postinstall C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch\node_modules\uglifyjs-webpack-plugin
> node lib/post_install.js

npm WARN rollback Rolling back readable-stream@2.3.6 failed (this is probably harmless): EPERM: operation not permitted, scandir 'C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch\node_modules\fsevents\node_modules'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1295 packages from 749 contributors and audited 14766 packages in 55.778s
found 3 vulnerabilities (2 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details

C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch>npm audit fix --force
npm WARN using --force I sure hope you know what you are doing.
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).

> fsevents@1.2.4 install C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch\node_modules\fsevents
> node install

+ react-scripts@2.1.3
added 975 packages from 348 contributors, removed 272 packages, updated 281 packages and moved 35 packages in 119.59s
fixed 3 of 3 vulnerabilities in 14766 scanned packages
  1 package update for 3 vulns involved breaking changes
  (installed due to `--force` option)

C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch>
```

```bash
C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch>npm start

> mongodb-demo@0.1.0 start C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch
> react-scripts start

? We're unable to detect target browsers.

Would you like to add the defaults to your package.json? Yes

Set target browsers: >0.2%, not dead, not ie <= 11, not op_mini all
? Something is already running on port 3000.

Would you like to run the app on another port instead? No

C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch>npm start

> mongodb-demo@0.1.0 start C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch
> react-scripts start
Starting the development server...
Compiled with warnings.

./src/pages/Auth/ConfirmAccount.js
  Line 9:   'token' is assigned a value but never used    no-unused-vars
  Line 10:  'tokenId' is assigned a value but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch11.png)

3. Start Using Stitch

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch12.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch13.png)

```bash
C:\Work\Training\Pre\MongoDB\mongodb-the-complete-developers-guide\stitch>npm install --save mongodb-stitch-browser-sdk@"^4.1.1"
+ mongodb-stitch-browser-sdk@4.1.2
added 16 packages from 12 contributors and audited 36015 packages in 26.547s
found 0 vulnerabilities
```
- We don't need backend server anymore

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch14.png)

- We can have a look at the `Example Snippet` provided by MongoDB on the Web Page

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch15.png)

> App.js
```js
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Stitch } from 'mongodb-stitch-browser-sdk';

import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import ProductsPage from './pages/Product/Products';
import ProductPage from './pages/Product/Product';
import EditProductPage from './pages/Product/EditProduct';
import AuthPage from './pages/Auth/Auth';
import ConfirmAccountPage from './pages/Auth/ConfirmAccount';

class App extends Component {
  state = {
    isAuth: true,
    authMode: 'login',
    error: null
  };

  constructor() {
    super();
    Stitch.initializeDefaultAppClient('myshop-amicp');
  }

  logoutHandler = () => {
    this.setState({ isAuth: false });
  };

  authHandler = (event, authData) => {
    event.preventDefault();
    if (authData.email.trim() === '' || authData.password.trim() === '') {
      return;
    }
    // let request;
    // if (this.state.authMode === 'login') {
    //   request = axios.post('http://localhost:3100/login', authData);
    // } else {
    //   request = axios.post('http://localhost:3100/signup', authData);
    // }
    // request
    //   .then(authResponse => {
    //     if (authResponse.status === 201 || authResponse.status === 200) {
    //       const token = authResponse.data.token;
    //       console.log(token);
    //       // Theoretically, you would now store the token in localstorage + app state
    //       // and use it for subsequent requests to protected backend resources
    //       this.setState({ isAuth: true });
    //     }
    //   })
    //   .catch(err => {
    //     this.errorHandler(err.response.data.message);
    //     console.log(err);
    //     this.setState({ isAuth: false });
    //   });
  };

  authModeChangedHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'login' ? 'signup' : 'login'
      };
    });
  };

  errorHandler = message => {
    this.setState({
      error: message
    });
  };

  render() {
    let routes = (
      <Switch>
        <Redirect from="/" to="/products" exact />
        <Redirect from="/auth" to="/products" exact />
        <Redirect from="/signup" to="/products" exact />
        <Route
          path="/product/:mode"
          render={props => (
            <EditProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products/:id/:mode"
          render={props => (
            <EditProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products/:id"
          render={props => (
            <ProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products"
          render={props => (
            <ProductsPage {...props} onError={this.errorHandler} />
          )}
        />
      </Switch>
    );

    if (!this.state.isAuth) {
      routes = (
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Redirect from="/products" to="/auth" />
          <Redirect from="/product" to="/auth" />
          <Route path="/confirm-account" component={ConfirmAccountPage} />
          <Route
            path="/auth"
            render={() => (
              <AuthPage
                mode={this.state.authMode}
                onAuth={this.authHandler}
                onAuthModeChange={this.authModeChangedHandler}
              />
            )}
          />
        </Switch>
      );
    }

    return (
      <div className="App">
        <Modal
          open={!!this.state.error}
          title="An Error Occurred"
          onClose={() => this.errorHandler(null)}
        >
          <p>{this.state.error}</p>
        </Modal>
        <Backdrop show={!!this.state.error} />
        <Header
          authenticated={this.state.isAuth}
          onLogout={this.logoutHandler}
        />
        {routes}
      </div>
    );
  }
}

export default App;
```

> Products.js
```js
import React, { Component } from 'react';
import axios from 'axios';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

import Products from '../../components/Products/Products';

class ProductsPage extends Component {
  state = { isLoading: true, products: [] };
  componentDidMount() {
    this.fetchData();
  }

  productDeleteHandler = productId => {
    axios
      .delete('http://localhost:3100/products/' + productId)
      .then(result => {
        console.log(result);
        this.fetchData();
      })
      .catch(err => {
        this.props.onError(
          'Deleting the product failed. Please try again later'
        );
        console.log(err);
      });
  };

  fetchData = () => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
    mongodb.db('shop')
      .collection('products')
      .find()
      .asArray()
      .then(products => {
        this.setState({ isLoading: false, products: products });
      })
      .catch(err => {
        this.setState({ isLoading: false, products: [] });
        this.props.onError('Fetching the products failed. Please try again later');
        console.log(err);
      });
  };

  render() {
    let content = <p>Loading products...</p>;

    if (!this.state.isLoading && this.state.products.length > 0) {
      content = (
        <Products
          products={this.state.products}
          onDeleteProduct={this.productDeleteHandler}
        />
      );
    }
    if (!this.state.isLoading && this.state.products.length === 0) {
      content = <p>Found no products. Try again later.</p>;
    }
    return <main>{content}</main>;
  }
}

export default ProductsPage;
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch16.png)

4. Adding Authentication

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch17.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch18.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch19.png)

> App.js
```js
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk';

import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import ProductsPage from './pages/Product/Products';
import ProductPage from './pages/Product/Product';
import EditProductPage from './pages/Product/EditProduct';
import AuthPage from './pages/Auth/Auth';
import ConfirmAccountPage from './pages/Auth/ConfirmAccount';

class App extends Component {
  state = {
    isAuth: true,
    authMode: 'login',
    error: null
  };

  constructor() {
    super();
    const client = Stitch.initializeDefaultAppClient('myshop-amicp');
    client.auth.loginWithCredential(new AnonymousCredential());
  }

  logoutHandler = () => {
    this.setState({ isAuth: false });
  };

  authHandler = (event, authData) => {
    event.preventDefault();
    if (authData.email.trim() === '' || authData.password.trim() === '') {
      return;
    }
    // let request;
    // if (this.state.authMode === 'login') {
    //   request = axios.post('http://localhost:3100/login', authData);
    // } else {
    //   request = axios.post('http://localhost:3100/signup', authData);
    // }
    // request
    //   .then(authResponse => {
    //     if (authResponse.status === 201 || authResponse.status === 200) {
    //       const token = authResponse.data.token;
    //       console.log(token);
    //       // Theoretically, you would now store the token in localstorage + app state
    //       // and use it for subsequent requests to protected backend resources
    //       this.setState({ isAuth: true });
    //     }
    //   })
    //   .catch(err => {
    //     this.errorHandler(err.response.data.message);
    //     console.log(err);
    //     this.setState({ isAuth: false });
    //   });
  };

  authModeChangedHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'login' ? 'signup' : 'login'
      };
    });
  };

  errorHandler = message => {
    this.setState({
      error: message
    });
  };

  render() {
    let routes = (
      <Switch>
        <Redirect from="/" to="/products" exact />
        <Redirect from="/auth" to="/products" exact />
        <Redirect from="/signup" to="/products" exact />
        <Route
          path="/product/:mode"
          render={props => (
            <EditProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products/:id/:mode"
          render={props => (
            <EditProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products/:id"
          render={props => (
            <ProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products"
          render={props => (
            <ProductsPage {...props} onError={this.errorHandler} />
          )}
        />
      </Switch>
    );

    if (!this.state.isAuth) {
      routes = (
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Redirect from="/products" to="/auth" />
          <Redirect from="/product" to="/auth" />
          <Route path="/confirm-account" component={ConfirmAccountPage} />
          <Route
            path="/auth"
            render={() => (
              <AuthPage
                mode={this.state.authMode}
                onAuth={this.authHandler}
                onAuthModeChange={this.authModeChangedHandler}
              />
            )}
          />
        </Switch>
      );
    }

    return (
      <div className="App">
        <Modal
          open={!!this.state.error}
          title="An Error Occurred"
          onClose={() => this.errorHandler(null)}
        >
          <p>{this.state.error}</p>
        </Modal>
        <Backdrop show={!!this.state.error} />
        <Header
          authenticated={this.state.isAuth}
          onLogout={this.logoutHandler}
        />
        {routes}
      </div>
    );
  }
}

export default App;
```

- We don't receive an error for authentication but we cannot access the products.

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch20.png)

5. Sending Data Access Rules

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch21.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch22.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch23.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch24.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch25.png)

6. Fetching & Converting Data

> Products.js
```js
import React, { Component } from 'react';
import axios from 'axios';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

import Products from '../../components/Products/Products';

class ProductsPage extends Component {
  state = { isLoading: true, products: [] };
  componentDidMount() {
    this.fetchData();
  }

  productDeleteHandler = productId => {
    axios
      .delete('http://localhost:3100/products/' + productId)
      .then(result => {
        console.log(result);
        this.fetchData();
      })
      .catch(err => {
        this.props.onError(
          'Deleting the product failed. Please try again later'
        );
        console.log(err);
      });
  };

  fetchData = () => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
    mongodb.db('shop')
      .collection('products')
      .find()
      .asArray()
      .then(products => {
        const tranformedProducts = products.map(product => {
          product._id = product._id.toString();
          product.price = product.price.toString();
          return product;
        })
        this.setState({ isLoading: false, products: tranformedProducts });
      })
      .catch(err => {
        this.setState({ isLoading: false, products: [] });
        this.props.onError('Fetching the products failed. Please try again later');
        console.log(err);
      });
  };

  render() {
    let content = <p>Loading products...</p>;

    if (!this.state.isLoading && this.state.products.length > 0) {
      content = (
        <Products
          products={this.state.products}
          onDeleteProduct={this.productDeleteHandler}
        />
      );
    }
    if (!this.state.isLoading && this.state.products.length === 0) {
      content = <p>Found no products. Try again later.</p>;
    }
    return <main>{content}</main>;
  }
}

export default ProductsPage;
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch26.png)

7. Deleting Products

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/MongoDB/mongodb-the-complete-developers-guide/stitch
$ npm i --save bson
+ bson@4.0.1
added 2 packages from 4 contributors, updated 1 package and audited 36020 packages in 22.499s
found 0 vulnerabilities
```
> Products.js
```js
import React, { Component } from 'react';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import BSON from 'bson';
import Products from '../../components/Products/Products';

class ProductsPage extends Component {
  state = { isLoading: true, products: [] };
  componentDidMount() {
    this.fetchData();
  }

  productDeleteHandler = productId => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
    mongodb.db('shop')
      .collection('products')
      .deleteOne( {_id: new BSON.ObjectId(productId)})
      .then(result => {
        console.log(result);
        this.fetchData();
      })
      .catch(err => {
        this.props.onError('Deleting the product failed. Please try again later');
        console.log(err);
      });      
  };

  fetchData = () => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
    mongodb.db('shop')
      .collection('products')
      .find()
      .asArray()
      .then(products => {
        const tranformedProducts = products.map(product => {
          product._id = product._id.toString();
          product.price = product.price.toString();
          return product;
        })
        this.setState({ isLoading: false, products: tranformedProducts });
      })
      .catch(err => {
        this.setState({ isLoading: false, products: [] });
        this.props.onError('Fetching the products failed. Please try again later');
        console.log(err);
      });
  };

  render() {
    let content = <p>Loading products...</p>;

    if (!this.state.isLoading && this.state.products.length > 0) {
      content = (
        <Products
          products={this.state.products}
          onDeleteProduct={this.productDeleteHandler}
        />
      );
    }
    if (!this.state.isLoading && this.state.products.length === 0) {
      content = <p>Found no products. Try again later.</p>;
    }
    return <main>{content}</main>;
  }
}

export default ProductsPage;
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch27.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch28.png)

8. Finding a Single Product

> Product.js
```js
import React, { Component } from 'react';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import BSON from 'bson';

import './Product.css';

class ProductPage extends Component {
  state = { isLoading: true, product: null };

  componentDidMount() {

    const mongodb = Stitch.defaultAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
    mongodb.db('shop')
      .collection('products')
      .find( {_id: new BSON.ObjectId(this.props.match.params.id)})
      .asArray()
      .then(productResponse => {
        const product = productResponse[0];
        product._id = product._id.toString();
        product.price = product.price.toString();
        this.setState({ isLoading: false, product: product });
      })
      .catch(err => {
        this.props.onError('Fetching the product failed. Please try again later');
        console.log(err);
      });  
  }

  render() {
    let content = <p>Is loading...</p>;

    if (!this.state.isLoading && this.state.product) {
      content = (
        <main className="product-page">
          <h1>{this.state.product.name}</h1>
          <h2>{this.state.product.price}</h2>
          <div
            className="product-page__image"
            style={{
              backgroundImage: "url('" + this.state.product.image + "')"
            }}
          />
          <p>{this.state.product.description}</p>
        </main>
      );
    }
    if (!this.state.isLoading && !this.state.product) {
      content = (
        <main>
          <p>Found no product. Try again later.</p>
        </main>
      );
    }
    return content;
  }
}

export default ProductPage;
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch29.png)

9. Adding Products

> EditProduct.js
```js
import React, { Component } from 'react';
import axios from 'axios';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import BSON from 'bson';

import './EditProduct.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class ProductEditPage extends Component {
  state = {
    isLoading: true,
    title: '',
    price: '',
    imageUrl: '',
    description: ''
  };

  componentDidMount() {
    // Will be "edit" or "add"
    if (this.props.match.params.mode === 'edit') {
      axios
        .get('http://localhost:3100/products/' + this.props.match.params.id)
        .then(productResponse => {
          const product = productResponse.data;
          this.setState({
            isLoading: false,
            title: product.name,
            price: product.price.toString(),
            imageUrl: product.image,
            description: product.description
          });
        })
        .catch(err => {
          this.setState({ isLoading: false });
          console.log(err);
        });
    } else {
      this.setState({ isLoading: false });
    }
  }

  editProductHandler = event => {
    event.preventDefault();
    if (
      this.state.title.trim() === '' ||
      this.state.price.trim() === '' ||
      this.state.imageUrl.trim() === '' ||
      this.state.description.trim() === ''
    ) {
      return;
    }
    this.setState({ isLoading: true });
    const productData = {
      name: this.state.title,
      price: BSON.Decimal128.fromString(this.state.price.toString()),
      image: this.state.imageUrl,
      description: this.state.description
    };
    let request;
    if (this.props.match.params.mode === 'edit') {
      request = axios.patch(
        'http://localhost:3100/products/' + this.props.match.params.id,
        productData
      );
    } else {
      const mongodb = Stitch.defaultAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
      request = mongodb.db('shop')
        .collection('products')
        .insertOne( productData );
    }
    request
      .then(result => {
        console.log(result);
        this.setState({ isLoading: false });
        this.props.history.replace('/products');
      })
      .catch(err => {
        this.setState({ isLoading: false });
        console.log(err);
        this.props.onError(
          'Editing or adding the product failed. Please try again later'
        );
      });
  };

  inputChangeHandler = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    let content = (
      <form className="edit-product__form" onSubmit={this.editProductHandler}>
        <Input
          label="Title"
          config={{ type: 'text', value: this.state.title }}
          onChange={event => this.inputChangeHandler(event, 'title')}
        />
        <Input
          label="Price"
          config={{ type: 'number', value: this.state.price }}
          onChange={event => this.inputChangeHandler(event, 'price')}
        />
        <Input
          label="Image URL"
          config={{ type: 'text', value: this.state.imageUrl }}
          onChange={event => this.inputChangeHandler(event, 'imageUrl')}
        />
        <Input
          label="Description"
          elType="textarea"
          config={{ rows: '5', value: this.state.description }}
          onChange={event => this.inputChangeHandler(event, 'description')}
        />
        <Button type="submit">
          {this.props.match.params.mode === 'add'
            ? 'Create Product'
            : 'Update Product'}
        </Button>
      </form>
    );
    if (this.state.isLoading) {
      content = <p>Is loading...</p>;
    }
    return <main>{content}</main>;
  }
}

export default ProductEditPage;
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch30.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch31.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch32.png)

```bash
{insertedId: ObjectId}
insertedId: ObjectId {id: Uint8Array(12)}
__proto__: Object
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch33.png)

10. Updating Products

> EditProduct.js
```js
import React, { Component } from 'react';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import BSON from 'bson';

import './EditProduct.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class ProductEditPage extends Component {
  state = {
    isLoading: true,
    title: '',
    price: '',
    imageUrl: '',
    description: ''
  };

  componentDidMount() {
    // Will be "edit" or "add"
    if (this.props.match.params.mode === 'edit') {
      const mongodb = Stitch.defaultAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
      mongodb.db('shop')
        .collection('products')
        .find( {_id: new BSON.ObjectId(this.props.match.params.id)})
        .asArray()
        .then(productResponse => {
          const product = productResponse[0];
          this.setState({
            isLoading: false,
            title: product.name,
            price: product.price.toString(),
            imageUrl: product.image,
            description: product.description
          });
        })
        .catch(err => {
          this.setState({ isLoading: false });
          console.log(err);
        });        
    } else {
      this.setState({ isLoading: false });
    }
  }

  editProductHandler = event => {
    event.preventDefault();
    if (
      this.state.title.trim() === '' ||
      this.state.price.trim() === '' ||
      this.state.imageUrl.trim() === '' ||
      this.state.description.trim() === ''
    ) {
      return;
    }
    this.setState({ isLoading: true });
    const productData = {
      name: this.state.title,
      price: BSON.Decimal128.fromString(this.state.price.toString()),
      image: this.state.imageUrl,
      description: this.state.description
    };
    let request;
    const mongodb = Stitch.defaultAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
    if (this.props.match.params.mode === 'edit') {
      request = mongodb.db('shop')
        .collection('products')
        .updateOne({_id: new BSON.ObjectId(this.props.match.params.id) }, {$set: productData});
    } else {
      request = mongodb.db('shop')
        .collection('products')
        .insertOne( productData );
    }
    request
      .then(result => {
        console.log(result);
        this.setState({ isLoading: false });
        this.props.history.replace('/products');
      })
      .catch(err => {
        this.setState({ isLoading: false });
        console.log(err);
        this.props.onError(
          'Editing or adding the product failed. Please try again later'
        );
      });
  };

  inputChangeHandler = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    let content = (
      <form className="edit-product__form" onSubmit={this.editProductHandler}>
        <Input
          label="Title"
          config={{ type: 'text', value: this.state.title }}
          onChange={event => this.inputChangeHandler(event, 'title')}
        />
        <Input
          label="Price"
          config={{ type: 'number', value: this.state.price }}
          onChange={event => this.inputChangeHandler(event, 'price')}
        />
        <Input
          label="Image URL"
          config={{ type: 'text', value: this.state.imageUrl }}
          onChange={event => this.inputChangeHandler(event, 'imageUrl')}
        />
        <Input
          label="Description"
          elType="textarea"
          config={{ rows: '5', value: this.state.description }}
          onChange={event => this.inputChangeHandler(event, 'description')}
        />
        <Button type="submit">
          {this.props.match.params.mode === 'add'
            ? 'Create Product'
            : 'Update Product'}
        </Button>
      </form>
    );
    if (this.state.isLoading) {
      content = <p>Is loading...</p>;
    }
    return <main>{content}</main>;
  }
}

export default ProductEditPage;
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch34.png)

```bash
ObjectmatchedCount: 1
modifiedCount: 1
upsertedId: ...
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch35.png)

11. Switching to User Email & Password Authentication

- We have to change the `isAuth` mode to false.
> App.js
```js
.
.
.
class App extends Component {
  state = {
    isAuth: false,
    authMode: 'login',
    error: null
  };
.
.
.
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch36.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch37.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch38.png)

::: warning
Reset Password is not implemented
:::

12. Adding User Sign Up & Confirmation

> App.js
```js
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Stitch, UserPasswordAuthProviderClient } from 'mongodb-stitch-browser-sdk';

import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import ProductsPage from './pages/Product/Products';
import ProductPage from './pages/Product/Product';
import EditProductPage from './pages/Product/EditProduct';
import AuthPage from './pages/Auth/Auth';
import ConfirmAccountPage from './pages/Auth/ConfirmAccount';

class App extends Component {
  state = {
    isAuth: false,
    authMode: 'login',
    error: null
  };

  constructor() {
    super();
    this.client = Stitch.initializeDefaultAppClient('myshop-amicp');
  }

  logoutHandler = () => {
    this.setState({ isAuth: false });
  };

  authHandler = (event, authData) => {
    event.preventDefault();
    if (authData.email.trim() === '' || authData.password.trim() === '') {
      return;
    }
    const emailPassClient = this.client.auth.getProviderClient(UserPasswordAuthProviderClient.factory);
    emailPassClient.registerWithEmail(authData.email, authData.password)
      .then(() => {
        this.setState({ isAuth: true });
      })
      .catch(err => {
        console.log(err);
        this.errorHandler(err.response);
        this.setState({ isAuth: false });
      });
  };

  authModeChangedHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'login' ? 'signup' : 'login'
      };
    });
  };

  errorHandler = message => {
    this.setState({
      error: message
    });
  };

  render() {
    let routes = (
      <Switch>
        <Redirect from="/" to="/products" exact />
        <Redirect from="/auth" to="/products" exact />
        <Redirect from="/signup" to="/products" exact />
        <Route
          path="/product/:mode"
          render={props => (
            <EditProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products/:id/:mode"
          render={props => (
            <EditProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products/:id"
          render={props => (
            <ProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products"
          render={props => (
            <ProductsPage {...props} onError={this.errorHandler} />
          )}
        />
      </Switch>
    );

    if (!this.state.isAuth) {
      routes = (
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Redirect from="/products" to="/auth" />
          <Redirect from="/product" to="/auth" />
          <Route path="/confirm-account" component={ConfirmAccountPage} />
          <Route
            path="/auth"
            render={() => (
              <AuthPage
                mode={this.state.authMode}
                onAuth={this.authHandler}
                onAuthModeChange={this.authModeChangedHandler}
              />
            )}
          />
        </Switch>
      );
    }

    return (
      <div className="App">
        <Modal
          open={!!this.state.error}
          title="An Error Occurred"
          onClose={() => this.errorHandler(null)}
        >
          <p>{this.state.error}</p>
        </Modal>
        <Backdrop show={!!this.state.error} />
        <Header
          authenticated={this.state.isAuth}
          onLogout={this.logoutHandler}
        />
        {routes}
      </div>
    );
  }
}

export default App;
```

> ConfirmAccount.js
```js
import React, { Component } from 'react';
import { Stitch, UserPasswordAuthProviderClient } from 'mongodb-stitch-browser-sdk';

import './ConfirmAccount.css';

class AuthPage extends Component {
  componentDidMount() {
    const queryUrl = window.location.search;
    const queryParams = new URLSearchParams(queryUrl);
    const token = queryParams.get('token');
    const tokenId = queryParams.get('tokenId');
    const emailPassClient = Stitch.defaultAppClient.auth.getProviderClient(UserPasswordAuthProviderClient.factory);
    emailPassClient.confirmUser(token, tokenId)
      .then(() => {
        console.log('Account confirmed');
        this.props.history.replace('/');
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <main className="confirm-account-page">
        <p>Confirming Account...</p>
      </main>
    );
  }
}
export default AuthPage;
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch39.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch40.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch41.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch42.png)

13. Adding User Login

> App.js
```js
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Stitch, UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';

import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import ProductsPage from './pages/Product/Products';
import ProductPage from './pages/Product/Product';
import EditProductPage from './pages/Product/EditProduct';
import AuthPage from './pages/Auth/Auth';
import ConfirmAccountPage from './pages/Auth/ConfirmAccount';

class App extends Component {
  state = {
    isAuth: false,
    authMode: 'login',
    error: null
  };

  constructor() {
    super();
    this.client = Stitch.initializeDefaultAppClient('myshop-amicp');
  }

  logoutHandler = () => {
    this.setState({ isAuth: false });
  };

  authHandler = (event, authData) => {
    event.preventDefault();
    if (authData.email.trim() === '' || authData.password.trim() === '') {
      return;
    }
    let request;
    if (this.state.authMode === 'login') {
      const credential = new UserPasswordCredential(authData.email, authData.password);
      request = this.client.auth.loginWithCredential(credential);
    } else {
      const emailPassClient = this.client.auth.getProviderClient(UserPasswordAuthProviderClient.factory);
      request = emailPassClient.registerWithEmail(authData.email, authData.password);
    }
    request
      .then(result => {
        if (result) {
          console.log(result);
          this.setState({ isAuth: true });
        }
      })
      .catch(err => {
        console.log(err);
        this.errorHandler(err.response);
        this.setState({ isAuth: false });
      });
  };

  authModeChangedHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'login' ? 'signup' : 'login'
      };
    });
  };

  errorHandler = message => {
    this.setState({
      error: message
    });
  };

  render() {
    let routes = (
      <Switch>
        <Redirect from="/" to="/products" exact />
        <Redirect from="/auth" to="/products" exact />
        <Redirect from="/signup" to="/products" exact />
        <Route
          path="/product/:mode"
          render={props => (
            <EditProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products/:id/:mode"
          render={props => (
            <EditProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products/:id"
          render={props => (
            <ProductPage {...props} onError={this.errorHandler} />
          )}
        />
        <Route
          path="/products"
          render={props => (
            <ProductsPage {...props} onError={this.errorHandler} />
          )}
        />
      </Switch>
    );

    if (!this.state.isAuth) {
      routes = (
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Redirect from="/products" to="/auth" />
          <Redirect from="/product" to="/auth" />
          <Route path="/confirm-account" component={ConfirmAccountPage} />
          <Route
            path="/auth"
            render={() => (
              <AuthPage
                mode={this.state.authMode}
                onAuth={this.authHandler}
                onAuthModeChange={this.authModeChangedHandler}
              />
            )}
          />
        </Switch>
      );
    }

    return (
      <div className="App">
        <Modal
          open={!!this.state.error}
          title="An Error Occurred"
          onClose={() => this.errorHandler(null)}
        >
          <p>{this.state.error}</p>
        </Modal>
        <Backdrop show={!!this.state.error} />
        <Header
          authenticated={this.state.isAuth}
          onLogout={this.logoutHandler}
        />
        {routes}
      </div>
    );
  }
}

export default App;
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch43.png)

```bash
StitchUserImpl {id: "5c3a29cf2bdb123a185a36f4", loggedInProviderType: "local-userpass", loggedInProviderName: "local-userpass", profile: ApiCoreUserProfile, auth: StitchAuthImpl}
auth: StitchAuthImpl {requestClient: StitchAppRequestClient, authRoutes: StitchBrowserAppAuthRoutes, storage: LocalStorage, authInfo: AuthInfo, currentUser: StitchUserImpl, …}
id: "5c3a29cf2bdb123a185a36f4"
identities: (...)
loggedInProviderName: "local-userpass"
loggedInProviderType: "local-userpass"
profile: ApiCoreUserProfile {userType: "normal", data: {…}, identities: Array(1)}
userType: (...)
__proto__: CoreStitchUserImpl
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch44.png)

14. The Current State of Authentication

The Current State of Authentication
Section 18, Lecture 256
With the currently implemented authentication solution, we're NOT taking advantage of Stitch's automatically managed user tokens. Stitch does store the user tokens in the localStorage and it does detect whether a user is logged in (i.e. if such valid tokens can be found in localStorage) upon initialization.

But we're not using that in our app - instead, we always start off with isAuth: false in App.js.

You could of course change that!

You can add an [auth listener](https://s3.amazonaws.com/stitch-sdks/js/docs/4/interfaces/stitchauth.html#addauthlistener) to Stitch in the constructor (or componentDidMount) of App.js:

```js
Stitch.defaultAppClient.auth.addAuthListener(auth => {
    this.setState({isAuth: auth.isLoggedIn});
})
```

15. Functions & Triggers

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch45.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch46.png)

```js
exports = function(arg){
  /*
    Accessing application's values:
    var x = context.values.get("value_name");

    Accessing a mongodb service:
    var collection = context.services.get("mongodb-atlas").db("dbname").collection("coll_name");
    var doc = collection.findOne({owner_id: context.user.id});

    To call other named functions:
    var result = context.functions.execute("function_name", arg1, arg2);

    Try running in the console below.
  */
  console.log('Greet!', arg);
  return {arg: arg};
};
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch47.png)

- Add a call to the `Greet` function created on the `constructor`

> App.js
```js
class App extends Component {
  state = {
    isAuth: false,
    authMode: 'login',
    error: null
  };

  constructor() {
    super();
    this.client = Stitch.initializeDefaultAppClient('myshop-amicp');
    this.client.callFunction('Greet', ['Juan']);
  }
```

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch48.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch49.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch50.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch51.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch52.png)

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Stitch53.png)

## Course Roundup

![](/images/databases/mongodb-mongodb-the-complete-developers-guide/Roundup.png)


