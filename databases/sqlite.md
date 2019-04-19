# Introduction

[SQLite](https://en.wikipedia.org/wiki/SQLite) is a relational database management system contained in a C programming library. In contrast to many other database management systems, SQLite is not a client–server database engine. Rather, it is embedded into the end program.

SQLite is ACID-compliant and implements most of the SQL standard, generally following PostgreSQL syntax. However, SQLite uses a dynamically and weakly typed SQL syntax that does not guarantee the domain integrity. This means that one can, for example, insert a string into a column defined as an integer. SQLite will attempt to convert data between formats where appropriate, the string "123" into an integer in this case, but does not guarantee such conversions, and will store the data as-is if such a conversion is not possible.

SQLite is a popular choice as embedded database software for local/client storage in application software such as web browsers. It is arguably the most widely deployed database engine, as it is used today by several widespread browsers, operating systems, and embedded systems (such as mobile phones), among others. SQLite has bindings to many programming languages.

## Courses

| Course                                                                                                             | Date       | Source Code                                                                                             |
| ------------------------------------------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------- |
| [Full-Stack React, Python, and GraphQL](/other/graphql-full-stack-react-python-and-graphql.md)                     | 19/04/2019 | [full-stack-react-python-and-graphql](https://github.com/peelmicro/full-stack-react-python-and-graphql) |
| [Build an app with ASPNET Core and Angular from scratch](/backend/dotnetcore-asp-net-core-angular-from-scratch.md) | 19/08/2018 | [asp-net-core-angular-from-scratch](https://github.com/peelmicro/asp-net-core-angular-from-scratch)     |
