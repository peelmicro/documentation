# 104 - Babelway - Run a B2B Integration Project

The [104 - Run a B2B Integration Project](https://academy.babelway.com/p/104-how-to-run-a-b2b-integration-project) Babelway course will cover the basic structure of implementing a new B2B connection with a trading partner.

Now that you have all the Babelway tools to build basic channels, we'll cover the basic concepts of running an integration project.

This will include:

**Plan** - What important pieces need to be considered in a successful implementation

**Build** - How to work through complex project plans and ensure all the pieices are in place.

**Test** - Understanding the best practices for testing and troubleshooting, ensuring a succesful deployment

**Deploy** - What final steps that must be taken to launch a project go-live, stabilization, and closure.

## Plan

> Table of contents
> [[toc]]

### Setting a Project Scope

A Project Scope can be one of the most important things created when running a B2B Integration project. Because of the inherent complexity of projects, it's important that all parties agree during the initial phase on what is to be accomplished.

When creating a project scope, there are a few things to consider:

- **Project Objectives** - What is the main purpose behind the project?
  Success Conditions (aka Deliverables) - How will each invested party qualify a successful implementation?
- **Dependencies** - What other things are relied on in order for the main project to be completed?
- **Responsible Parties** - Who is responsible for what part of the project? Are these responsibilities clearly communicated?
  Budget - What is the budget to complete the project? How will payment be managed?
- **Deadlines** - What is the duration allowed to complete the project? What happens if the deadlines are not met?

It's important that all of these topics are discussed during the planning phase of a project. Once all parties have a definitive answer to each topic, a project scope can begin. Though not always necessary, it can be very valuable to document the answer to all of these questions so there is no chance for ambiguity if future concerns arise from the project.

In addition to the more business-level topics in a project scope, there is also a heavy technical component to a project scope. The following should be well documented:

- Exactly what each data flow will accomplish
- The source and destination of each data flow
- The message specifications for inbound and outbound messages
- The specific communication protocols for inbound and outbound
- Each testing scenario to be considered for each data flow
- Other technical details of project requirements

Depending on the project, there may be other technical requirements worth documenting.

This phase of the project is where all the details of the implementation need to be worked out. The more clearly these topics are documented, the easier a project implementation will go, and the less 'scope-creep' will occur from missed requirements. In later lectures we'll go over how to better document each project and what to do when things don't go as planned.

### Gathering Information

Gathering information for a Project Specification document or Project Scope can be very challenging, so it's important to allocate reasonable time and effort to this task.

In a typical B2B integration project, you'll have a project that looks like this:

Trading Partner > 3rd Party Integrator / Consultant > Babelway > Customer / You

There are potentially 4 different parties for each B2B integration, so it's important to ensure that all parties are aligned with the project specifics discussed in the earlier lecture.

**Contacts**

Because of the many parties involved, you should gather contact information from each. Examples of who is important to keep involved are:

- Trading Partner

1.  Business Manager / Decision Maker
2.  IT Resource
3.  Escalation Manager

- 3rd Party Integrator

1. Account Manager
2. Support Contact

- Babelway

1. Consultant
2. Support Contact

- Customer / You

1. Your Business Manager
2. Relationship Manager for the Trading Partner
3. Escalation Managera
4. ERP or Systems Manager

Not everyone on this list will need to be involved in the project, but know who each of these contacts are can help speed up a successful integration. If there are issues that arise, either on the technical side or the business side, the respective managers or escalation persons can be brought in to resolve the issue.

**Gathering Information**

In addition to contacts for the project, there is also a lot of technical data that needs to be gathered. Some of the contacts above may be the right resource for this information, but it largely depends on your specific project landscape.

In order to organize information needed, it's important to layout what needs to be accomplished. In most B2B integration cases, you'll have data flows between a trading partner and a customer or system. There may be multiple transaction types (invoice, PO, etc.) exchanged between the two parties.

For each transaction, you'll need to gather the following:

- Trading partner message format, message specifications, and samples
- Trading partner communication protocol and setup specification (credentials, IDs, etc.)
- Customer system message format, Message specifications, and samples
- Customer system communication protocol and setup specifications (credentials, IDs, etc.)
- Relevant information not contained in message data (Ex: Vendor Tables, Shipping Address IDs, etc.)
- Testing scenarios and sample information used to run scenarios
- Non-message information related to the data flow (Ex: Notification persons, escalation process after go-live, etc.)

As you can guess, if you have all this information for each transaction, it can be quite a lot to gather and manager.

**It's important that you keep all this information well documented, stored, and shared with involved parties.**

### Documenting Project Specifications (3:30)

![](/images/other/edi-babelway-run-a-b2b-integration-project/DocumentingProjectSpecifications.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/DocumentingProjectSpecifications2.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/DocumentingProjectSpecifications3.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/DocumentingProjectSpecifications4.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/DocumentingProjectSpecifications5.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/DocumentingProjectSpecifications6.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/DocumentingProjectSpecifications7.png)

## Build

### Adhering to Project Specifications (3:17)

![](/images/other/edi-babelway-run-a-b2b-integration-project/AdheringToProjectSpecifications.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/AdheringToProjectSpecifications2.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/AdheringToProjectSpecifications3.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/AdheringToProjectSpecifications4.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/AdheringToProjectSpecifications5.png)

AdheringToProjectSpecifications6

AdheringToProjectSpecifications7

### Dealing with Scope Creep

It's very often that during a project, unforeseen requirements will be discovered. You can mitigate this by spending a lot of time in the planning phase and discussing all the necessary parts of the project, but it is sometimes unavoidable that invested parties need to add more work to the overall project. This is known as 'Scope Creep' .

The basic concept of Scope Creep is simply that a B2B project has added work based on requirements not initially determined during the planning phase. It's inevitable that some assumptions must be made during planning and when these assumptions are wrong, a project must adapt to the new information and often times more requirements are added to implementation.

**Responding to Scope Creep**

Regardless of the cause, the new requirements must be dealt with. There are 3 options to take when new requirements are added

1. **Resisting Scope Creep** - Sometimes, trading partners may find they want additional functionality throughout project implementation. This is not due to some crucial part of the equation, but perhaps come convenience or added benefit to the party not originally planned. In these scenarios, it is more than reasonable to implementation managers to resist these added requirements. If a project is well documented from the beginning, it is easy to deny these requests because they are 'out of scope'.

2. **Amending Project Specifications** - Depending on the complexity of the added requirement, the best course of action may to give in to the request and add the addition work to the project. If the additional requirement requires a minimal amount of effort, it may require less time adding the new features than it would to fight off the request. This is up to the discretion of the implementation manager.

3. **Change Request** - If the added requirement is crucial to the success of the project, but the complexity of the request adds a significant amount of work to the project, a change request is necessary. These are well documented requests that amend the project scope and specifications. All the considerations that go into an initial project planning should be considered when dealing with a change request (including objectives, responsible parties, budget, deadlines, etc.)

Each one of these options can help you deal with scope creep. As you can see it's largely situational to know which course of action is best for the overall success of the project.

## Test

### Identifying Testing Scenarios (3:59)

![](/images/other/edi-babelway-run-a-b2b-integration-project/IdentifyingTestingScenarios.png)

As it can be seen in the specs, we'll have for the `RS_ORDERS_CUSTOMER` scenario two tests cases:

- One order per file
- Multiple orders per file.

![](/images/other/edi-babelway-run-a-b2b-integration-project/IdentifyingTestingScenarios2.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/IdentifyingTestingScenarios3.png)

- Another scenario.

![](/images/other/edi-babelway-run-a-b2b-integration-project/IdentifyingTestingScenarios4.png)

### Testing within Babelway

When testing your project, it's important to reference a **Test Plan**. This is a document that lays out each individual test on a channel, a success condition, and a course of action upon failure. Often, Test Plans can be approved by invested parties to ensure that the project has covered the considerations of each party.

Before you begin testing with external parties, you can verify testing within Babelway using `Test Cases`.

`Test Cases` are used to verify your mapping setup. They run through the latest 'Save' (not the last deployment). This gives you the ability to test your mappings without deployed a channel into a live state.

`Test cases` also show up in the monitoring section, so you can verify their successful processing status. They provide an easier way to testing channels than using external gateways (like having to upload a file to an FTP site just to test the mapping).

To create a `Test case`, click on **Test cases** on the upper right hand side of the page:

![](/images/other/edi-babelway-run-a-b2b-integration-project/TestingWithinBabelway.png)

Then click on **Add a test case**

![](/images/other/edi-babelway-run-a-b2b-integration-project/TestingWithinBabelway2.png)

Then, upload a sample file you wish to test:

![](/images/other/edi-babelway-run-a-b2b-integration-project/TestingWithinBabelway3.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/TestingWithinBabelway4.png)

Once uploaded, you can click **Run Test Case** to start the test. The result will show you success or failure and give you access to download the output file to verify the results.

![](/images/other/edi-babelway-run-a-b2b-integration-project/TestingWithinBabelway5.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/TestingWithinBabelway6.png)

![](/images/other/edi-babelway-run-a-b2b-integration-project/TestingWithinBabelway7.png)

You can upload multiple Test Cases per channel. This is a good way to have each channel's testing aligned with you Test Plan.

![](/images/other/edi-babelway-run-a-b2b-integration-project/TestingWithinBabelway8.png)

### External Party Testing

Once you've completed internal testing within Babelway, the next step is to do external testing with trading partners and external systems. Because there are more parties involved, organization and coordination have a bigger importance during external testing. Following these steps will help ease the process.

1. **Ensure that Babelway channels are enabled and deployed.**

Babelway cannot conduct tests with external systems unless each channel is enabled and deployed. This creates the server connections for each gateways in the real world and allows external parties to send/retrieve test documents.

2. **Announce testing commencement and share the Test Plan.**

When starting external testing, you can leverage a Test Plan to lay out all that will be done. This gives everyone notice that they should expect test documents and are expected to receive, review, and approve each testing scenario.

3. **Initiate first testing scenario.**

After all parties are ready, it's time to begin testing. Your test plan should identify who will be initiating the test (if not you or your company). Once the test files has been initiated, it should be communicated to the party responsible for the next step. Each test scenario should explain the expected outcome and the responsible party on the receiving end.

4. **Verify testing receipt and approval.**

Once the test has been initiated, the receiving end party should confirm that they received the test and that it is working as expected. If all is working as expected, they should approve the test and that specific scenario can be marked as complete.

5. **Identify errors if test was not approved.**

Anywhere along the test scenario, something can go wrong or a file might not be up to specification. It's then important to focus on the stage where the error occurs. Was the file not received? Perhaps there's something wrong with the connection. Did the file not meet specification? Perhaps there is an issue with the file transformation. Whatever is needed to fix the scenario largely depends on what part of the chain it had an error.

6. **Re-initiate test after errors have been corrected.**

Once identify and corrected, the test can begin anew. Hopefully the next time around it will be successful and the testing scenario can be marked complete.

7. **Repeat steps 3-6 for each test scenario.**

Once one scenario is marked complete, the team can move down the list on the test plan to do so for each testing scenario. It may be possible to test multiple scenarios at once, but it's important to keep these organized so that each scenario can be reviewed and approved.

8. **Sign-off on the Test Plan.**

Once all scenarios have been marked complete, all parties can 'Sign-off' on the Test Plan. This signifies the approval of each party that the testing and building is up to specifications and that a go-live discussion can begin.

## Deploy

### Coordinating Go-Live

Once the Test Plan has been signed-off, a discussion around Go-Live can begin. The term 'Go-Live' is just the signify moment where the implementation project will begin sending actual documents. It's the moment the data flows move from 'Test' to 'Production'. When coordinating a Go-Live, there are a few things to consider:

**Agree upon a Go-Live date and time.**

All parties should be involved in determining when the Go-Live will occur. This ensures that everyone is coordinated and will be switching there systems into production at the same time.

**Discuss dependencies of other systems.**

In some cases, there may be other systems that need to interact with the new data flows. It's important to discuss these potential dependencies to ensure that they are also coordinated with the new data flows.

**Consider a phased approach.**

Some projects might be too large or too complex to launch an all out Go-Live. In these cases, it's possible to agree on a phased approach. Perhaps only a few data flows will be moved into production at one time. Then after a short period of stabilization where everything is shown to be working, the next phase can be launch. This mitigates the risk of error on large deployment changes.

**Ensure each system is 'Production Ready'**

In many cases, there are some changes in system setup between 'Test' and 'Production' . It's therefor important to ensure that these configurations are made before the Go-Live date. In Babelway's case, you may have a Test environment and a Production Environment. To prepare Babelway for the Go-Live, you'll have to migrate channels from one environment to another, and adjust any connection details that change from each environment (for example, an AS2 gateway has different IDs for each environment, these need to be adjusted on both ends for a Go-Live).

**Initiate the Go-Live**

Once all of these pieces have been planned and considered, the last step is to conduct the Go-Live migration. Sometimes this is as simple as a deployment within Babelway, other times it requires manual migration of data into a production system. Other times, it may be coordinating with 3rd party companies to migrate an account within their system.

**Stabilization**

After the Go-Live has occurred, it's important to maintain a close watch on the flow of data within each system. This period is known as 'Stabilization' and serves to respond to unforeseen errors quickly. Since the data is real data, an error can mean serious impact to business activity. After several instances of data have gone through the system without error, each party can consider the project live and stable.

### Project Closure

Congratulations! At this point, you should have gone through a project completion. The first step is to take a moment and celebrate the accomplishment!

After all parts of the project have been completed, the last important step is to close the project. There are a few tips you can do during this stage to ensure a smooth transition to support and avoid any headaches in the future.

**Announce the closure of the project**

This is an important part of the project, especially for business managers and other invested parties. It's very helpful for those to check off this project from their list so they can comfortably feel it's completion. This step can take place after the stabilization period has ended.

**Layout a support plan**

In tandem with the announcement of the project close, a support plan should be specifically explained. This let all parties know who is responsible for what part of the data flow. It's possible that issues will arise in the future and each party needs to understand who they should contact if something is to go wrong. As an implementation manager, you will likely be the first go-to person they will think of when something goes wrong, so if you are not the one handling support, you need to communicate who they should contact in case of any issue.

**Set the stage for future collaboration**

The closing of a successful implementation project is hopefully a positive moment for all involved parties. It is then a good spring board for further collaboration. This depends largely on the relationship between each party, but it may be worth considering what other automation can be built to the benefit of all parties.

**Archive project documentation**

The last piece is to archive all relevant documentation to the project. This is important for future issues that may arise where someone (perhaps after you've moved on to other projects) needs to investigate the original project setup. This includes the Project Specification Document, Scope Plan or SOW, Test Plan (including sign-off documentation), Change Requests, Message Specifications and Samples, and other project related information. Have a long-lasting organized place for this information is crucial to long term success of the implementation project, as well as the relationship with the trading partner.
