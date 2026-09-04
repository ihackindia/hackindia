# HackIndia - Content Architecture

## 1. Content Architecture Overview

HackIndia is a knowledge, discovery, research, and problem-intelligence platform for hackathon builders in India. It is not limited to Smart India Hackathon or to problem statements alone. The long-term ecosystem includes hackathon discovery, problem intelligence, resources, research and guides, HackIndia's own events and challenges, and future community capabilities.

HackIndia contains multiple independent content types rather than treating everything as a problem statement:

```text
HackIndia
|
|-- Discover Hackathons
|-- Explore Problems
|-- Resources
|-- Research and Guides
|-- HackIndia Hackathons
|-- HackIndia Challenges
`-- Future Community
```

Content should be structured independently from UI components. A problem record describes what is known about a problem; components decide how that information is presented. This separation allows one dynamic page implementation to render hundreds or thousands of problem pages without creating a separate React component for each problem.

The content layer should provide typed records and focused access functions to routes. The route receives a slug, retrieves the relevant published record, generates metadata, and passes the content to reusable presentation components. Content authors should be able to add or update a record without changing the route or page component.

The content architecture should also preserve provenance. Official event information, HackIndia research, HackIndia analysis, recommendations, and future community contributions must be distinguishable both in storage and in the rendered experience.

The finalized ecosystem is described in detail in the HackIndia Content Ecosystem section below. These are content areas and relationships, not a requirement to implement every feature in the MVP.

## 2. Hackathon Discovery Architecture

HackIndia should eventually function as a dedicated hackathon discovery platform focused on hackathons in India. It should be able to display:

- Ongoing hackathons
- Upcoming hackathons
- Closing-soon hackathons
- Recently ended hackathons
- National hackathons
- College or institute hackathons
- Government hackathons
- Corporate hackathons
- Online hackathons

Discovery status and category or type are different concepts and must not be mixed.

### Discovery status

- `upcoming`
- `registration-open`
- `closing-soon`
- `ongoing`
- `ended`

### Category or type

- `national`
- `college`
- `government`
- `corporate`
- `online`

An event can have one discovery status and multiple categories or descriptors. For example, an online government hackathon can be `registration-open`, `government`, and `online`. Status calculation is conceptual at this stage and should not be implemented yet.

### Conceptual hackathon model

A hackathon record may contain:

- `id`
- `slug`
- `name`
- `organizer`
- `description`
- `logoOrImage`
- `category`
- `mode`
- `location`
- `registrationUrl`
- `officialUrl`
- `registrationStart`
- `registrationDeadline`
- `eventStart`
- `eventEnd`
- `eligibility`
- `prizeInformation`
- `status`
- `problemCount`
- `tags`
- `lastUpdated`

The `/hackathons` page will use these records for discovery, while `/hackathons/[slug]` will render one canonical detail page. Important dates, deadlines, registration links, and official sources should be clear and easy to verify.

## 3. Problem Statement Content Model

Every problem statement should follow a consistent model. Fields can begin as local structured content and later be represented in a CMS or database without changing their public meaning.

### Core identity and classification

- `id`: Stable internal identifier.
- `slug`: URL-safe, stable identifier used in the public URL.
- `title`: Human-readable problem title.
- `sourceType`: `official`, `hackindia-original`, or `community`.
- `organizer`: Organization responsible for the problem or event.
- `event`: Related hackathon or competition.
- `eventYear`: Year associated with the event, if applicable.
- `officialUrl`: Official source URL, if applicable.
- `category`: Broad classification used for browsing.
- `domain`: Subject area, such as health, education, agriculture, or mobility.
- `tags`: Searchable labels for topics, technologies, audiences, and themes.
- `lastUpdated`: Date the published HackIndia record was last materially updated.

### Problem understanding

- `officialProblemStatement`: The source problem statement, preserved accurately and attributed to its official source.
- `problemSummary`: A concise overview for scanning and metadata.
- `problemExplanation`: A plain-language explanation prepared by HackIndia.
- `whyTheProblemMatters`: Context explaining the significance of the problem, with supporting sources where factual claims are made.
- `targetUsers`: People or organizations affected by the problem or expected to use a solution.

### Research and building guidance

- `research`: Background research, findings, and relevant evidence.
- `existingSolutions`: Existing products, projects, methods, or approaches.
- `analysis`: HackIndia's interpretation and comparison of the problem and research.
- `proposedSolutionDirections`: Possible directions a builder could investigate. These are guidance, not official requirements or guaranteed winning solutions.
- `recommendedTechnologies`: Technologies that may fit the problem and constraints, with reasoning and links where appropriate.
- `datasets`: Relevant datasets and their source, access conditions, license, and limitations.
- `apis`: Relevant APIs and their provider, purpose, access requirements, and limitations.
- `usefulResources`: Curated documentation, tutorials, tools, standards, and other material that helps a builder proceed.
- `references`: Sources supporting the official context, research, recommendations, or other factual claims.
- `faqs`: Common questions and accurate answers about the problem, event, research, or implementation considerations.

### Source and authorship distinction

Each substantial content section should carry a source or authorship classification:

| Content type | Meaning | Editorial treatment |
| --- | --- | --- |
| Official information | Information published by the organizer or official event source, such as the original statement, rules, dates, or eligibility. | Preserve the meaning, attribute the source, and do not present HackIndia interpretation as official. |
| HackIndia research | Analysis, summaries, comparisons, and findings prepared by HackIndia from cited sources. | Label as HackIndia research and include source attribution for factual claims. |
| HackIndia recommendations | Suggested technologies, features, architectures, or solution directions. | Clearly label as recommendations or opinions; they are not official requirements. |
| Community or user contributions | Future submissions such as project ideas, corrections, showcases, and discussions. | Attribute the contributor, moderate before publication, and distinguish the contribution from verified editorial content. |

A practical implementation can model long-form sections as structured blocks with fields such as `content`, `sourceType`, `sources`, `author`, and `reviewStatus`. The exact storage format can evolve, but the distinction must remain explicit.

## 4. Problem Sources and Provenance

HackIndia will contain problems from multiple sources. Provenance is critical because a student must be able to tell what an organizer published from what HackIndia researched or recommended.

Supported conceptual source types are:

- **`official`:** A problem officially published by an external organization or hackathon.
- **`hackindia-original`:** A problem or challenge created by HackIndia itself.
- **`community`:** A problem or challenge content contributed by the future HackIndia community.

The editorial distinction is:

```text
Official Information
	|
HackIndia Research
	|
HackIndia Analysis
	|
HackIndia Recommendations
	|
Community Contributions
```

HackIndia must never present its own analysis, recommendations, or generated content as official information. Official statements, event rules, eligibility, dates, and organizer claims should be attributed to authoritative sources. HackIndia explanations, research, and recommendations should be visibly labeled as such.

Each substantial content section should preserve source and authorship information. A structured block may eventually include `content`, `sourceType`, `sources`, `author`, and `reviewStatus` fields.

## 5. Example Problem

`SIH26001` is used here only as a fictional/example problem reference. No factual information about this identifier is implied.

The public URL would be:

```text
/problems/sih26001
```

That URL maps the slug `sih26001` to one structured record in the content layer. A placeholder representation might look like this:

```text
Problem
- id: "[internal-id]"
- slug: "sih26001"
- title: "[Official problem title]"
- sourceType: "official"
- organizer: "[Official organizer]"
- event: "[Official hackathon or competition]"
- eventYear: "[Year or placeholder]"
- officialUrl: "[Verified official URL or placeholder]"
- category: "[Category]"
- domain: "[Domain]"
- officialProblemStatement: "[Verified official statement or approved excerpt]"
- problemSummary: "[Neutral summary based on verified information]"
- problemExplanation: "[HackIndia explanation]"
- whyTheProblemMatters: "[Cited context, or placeholder until researched]"
- targetUsers: ["[Target user or stakeholder]"]
- existingSolutionsResearch: "[Cited research, or placeholder]"
- research: "[Cited research, or placeholder]"
- existingSolutions: "[Verified existing solutions, or placeholder]"
- analysis: "[HackIndia analysis]"
- proposedSolutionDirections: ["[HackIndia recommendation]"]
- recommendedTechnologies: ["[Technology recommendation with rationale]"]
- datasets: ["[Verified dataset or placeholder]"]
- apis: ["[Verified API or placeholder]"]
- usefulResources: ["[Resource with source URL]"]
- references: ["[Official source or research reference]"]
- faqs: ["[Question and verified answer]"]
- tags: ["[Tag]"]
- lastUpdated: "[YYYY-MM-DD]"
```

The dynamic problem page would use the same route and component composition for `SIH26001`, `SIH26002`, and future records. Only the structured data changes. A record should not be published with fabricated placeholders presented as facts; placeholders indicate content still awaiting research or official confirmation.

## 6. Hackathon and Problem Relationships

A hackathon can contain many problems. A problem has zero or one primary hackathon or event, though it may link to other related events or content where useful.

```text
Hackathon
	|
	`-- many Problems

Problem
	|
	`-- zero or one primary Hackathon/Event
```

Examples:

```text
Smart India Hackathon
	|-- SIH26001
	|-- SIH26002
	`-- SIH26003

HackIndia Original Problems
	|-- HACKINDIA001
	`-- HACKINDIA002
```

Relationships should use stable identifiers or slugs rather than duplicated content. An independent HackIndia Original Challenge should not be forced into an external hackathon relationship.

## 7. HackIndia Content Ecosystem

The finalized high-level content architecture is:

```text
HackIndia
|
|-- Discover Hackathons
|   |-- Ongoing Hackathons
|   |-- Upcoming Hackathons
|   |-- Closing Soon
|   |-- Recently Ended
|   |-- National Hackathons
|   |-- College Hackathons
|   |-- Government Hackathons
|   |-- Corporate Hackathons
|   `-- Online Hackathons
|
|-- Explore Problems
|   |-- Official Hackathon Problems
|   |   |-- Smart India Hackathon
|   |   |   |-- SIH26001
|   |   |   |-- SIH26002
|   |   |   `-- ...
|   |   |-- Other National Hackathons
|   |   |-- College Hackathons
|   |   `-- Government Hackathons
|   |-- HackIndia Original Problems
|   |   |-- HACKINDIA001
|   |   |-- HACKINDIA002
|   |   `-- ...
|   `-- Community Problems
|
|-- Resources
|   |-- Datasets
|   |-- APIs
|   |-- Research Papers
|   |-- Tools
|   |-- Tutorials
|   `-- Government Resources
|
|-- Research and Guides
|   |-- Technology Guides
|   |-- Hackathon Guides
|   |-- Winning Strategies
|   `-- Project Building Guides
|
`-- HackIndia
	|-- HackIndia Hackathons
	|-- HackIndia Challenges
	`-- Future Community
```

HackIndia Original Problems, HackIndia Challenges, and HackIndia Hackathons must be clearly separated from external official hackathons. For example, `HACKINDIA001` must be identified as a **HackIndia Original Challenge**, never as an official government or external hackathon problem.

## 8. Hackathon Content Model

Hackathon records describe the event that contains or relates to problem statements. A standard record should include:

- `slug`: Stable URL-safe identifier.
- `name`: Official event name.
- `organizer`: Organization responsible for the event.
- `description`: Verified summary and, where needed, fuller description.
- `dates`: Event start and end dates, including timezone when relevant.
- `registrationInformation`: Registration process, eligibility link, registration URL, and any required steps.
- `eligibility`: Who can participate and any restrictions.
- `officialWebsite`: Canonical official event URL.
- `locationOrMode`: Physical location, online, or hybrid mode.
- `importantDeadlines`: Registration, submission, shortlisting, and other verified deadlines.
- `problemStatements`: References to related problem records rather than duplicated problem content.
- `status`: For example, upcoming, open, ongoing, completed, or archived.
- `tags`: Searchable labels for event type, domain, audience, and geography.

The `/hackathons` page can use these records for discovery, while `/hackathons/[slug]` renders the canonical detail page. Each record should make important dates and registration links easy to find and should identify the official source for changing event information.

## 9. Resource Content Model

Resources help builders research and implement solutions. They should be stored as records rather than pasted into individual problem pages so that one resource can be reused and updated centrally.

A resource record may include:

- `id` and `slug`
- `title`
- `type`
- `description`
- `url`
- `providerOrAuthor`
- `relatedDomains`
- `relatedTechnologies`
- `relatedProblems`
- `relatedHackathons`
- `accessRequirements`
- `licenseOrUsageNotes`
- `sourceAndAttribution`
- `lastUpdated`
- `status`

The `type` field should support categories including:

- Datasets
- APIs
- Research papers
- Documentation
- Tutorials
- Government resources
- Technical references

Resources can appear on `/resources`, on relevant problem pages, and on hackathon pages through relationships. Access restrictions, licenses, and link validity should be recorded where relevant. A link should not be described as free, open, official, or unrestricted unless that claim has been verified.

## 10. Content Categories

HackIndia's major content categories are:

- **Problems:** Detailed, structured pages that help builders understand and work on hackathon problem statements.
- **Hackathons:** Discovery and detail pages for competitions, events, deadlines, participation requirements, and related problems.
- **Resources:** Curated datasets, APIs, papers, documentation, tutorials, government sources, and technical references.
- **Research:** Evidence-based background, existing solutions, findings, comparisons, and domain context that help explain why a problem matters.
- **Technologies:** Practical information about tools, frameworks, platforms, standards, and technical approaches relevant to hackathon building.
- **Guides:** Reusable learning and implementation guidance, such as architecture planning, prototyping, research methods, and project delivery.

Categories describe the role of content in the knowledge base. A problem page can link to research, technologies, resources, and guides without duplicating their full records.

## 11. Research and Guides

Research and Guides are an independent content category, not content tied only to one problem. These pages can serve many students and can connect the knowledge base to multiple domains, technologies, hackathons, and problems.

Possible content includes:

- Technology guides
- Hackathon guides
- Winning strategies
- Project-building guides
- Research summaries
- Technical explainers

These pages should use structured records with stable slugs, titles, summaries, body sections, references, related technologies, related resources, related problems, tags, publication status, and update dates. They can link to problem and hackathon pages without duplicating their content.

## 12. URL and Slug Strategy

Public URLs should be short, readable, stable, and SEO-friendly:

```text
/problems/sih26001
/hackathons/smart-india-hackathon
/hackathons/hack4india
/problems/hack4india-001
/problems/hackindia-001
/resources/datasets
/resources/apis
/guides/winning-strategies
```

Slug rules:

- Use lowercase words separated by hyphens.
- Keep slugs stable after publication.
- Use a problem's official identifier when it is the clearest stable reference.
- Use a readable event or resource slug rather than an opaque database ID.
- Avoid dates, temporary status labels, tracking parameters, and unnecessary nesting.
- Do not reuse a slug for a different record.
- Redirect an intentional rename from the old slug to the canonical slug when redirects are later supported.

The public slug is a routing and discovery identifier, not the only identity of a record. Internal `id` values and relationships should remain stable if a display title changes. Problem IDs and slugs should preferably be globally unique.

`/problems/sih26001` is intentionally short and useful. If a student searches for `SIH26001`, the stable direct URL gives the page a clear opportunity to be independently indexed and discovered. The architecture should make the page highly discoverable through useful content, metadata, internal links, and a sitemap, but search engines determine ranking and no particular ranking or first-place result is guaranteed.

## 13. Content Lifecycle

Content should move through an explicit editorial lifecycle:

```text
Research -> Draft -> Fact Check -> Review -> Publish -> Update -> Archive
```

- **Research:** Collect official sources, supporting references, and relevant technical material. Record provenance while researching.
- **Draft:** Assemble the structured record, identify unknowns, and separate official information from HackIndia analysis and recommendations.
- **Fact Check:** Verify official information against authoritative sources, including event dates, eligibility, rules, problem statements, deadlines, and URLs.
- **Review:** Check factual accuracy, source links, clarity, completeness, attribution, and whether recommendations are labeled correctly.
- **Publish:** Make only approved content publicly available, generate its canonical metadata, and include it in applicable indexes and sitemaps.
- **Update:** Recheck dates, links, event status, technical resources, and research as information changes. Update `lastUpdated` for material changes.
- **Archive:** Remove outdated content from active discovery when appropriate while preserving a clear historical state or redirect policy. Do not silently present expired information as current.

Publication status should be represented in the content model so drafts and archived records cannot accidentally appear as public content.

## 14. Initial Content Storage

For the MVP, HackIndia should use simple structured local content. No database or CMS should be introduced at this stage.

Content can begin as version-controlled typed data modules or structured files with a small access layer. The important constraints are that records have stable slugs, follow a consistent model, keep source information, and remain separate from JSX and UI components.

The intended migration path is:

```text
Local structured content
	|
Structured content system
	|
Database/CMS
	|
API
	|
Large-scale platform
```

The route and component layers should consume a content interface such as "get problem by slug" rather than depending on whether the record comes from a file, CMS, or database. When editorial volume or collaboration justifies a CMS or database, the underlying storage can change while the public models, URLs, and frontend composition remain stable. An API can be added later when other clients, integrations, or services need the content.

This approach keeps the MVP cost-conscious and easy to review while leaving room for validation, indexing, search, publishing workflows, and richer relationships later.

## 15. Search and Discovery

Search is a future capability and should be designed around the structured fields already present in content records. Do not implement search functionality as part of this documentation update.

Users should eventually be able to search and filter hackathons by:

- name
- organizer
- category
- status
- mode
- location
- deadline
- tags

Problems should eventually be searchable and filterable by:

- problem ID
- title
- domain
- category
- technology
- organizer
- hackathon
- difficulty
- tags

Resources should eventually be searchable and filterable by:

- type
- technology
- problem
- tags

Difficulty is not required in every initial record, but the model should allow it when it can be defined consistently and supported by evidence or editorial criteria.

The first implementation can search local structured records in a server-side application layer. At larger scale, normalized fields can feed a dedicated search index or database query. Search results should link to canonical pages and should not become a second source of truth.

## 16. Google Discovery Strategy

HackIndia should have independently indexable pages for hackathons, problems, resources, guides, and research. Each substantial problem statement should have an independently indexable page because builders are likely to search for an identifier, title, solution idea, prototype, technology stack, or implementation guidance directly. A canonical page such as `/problems/sih26001` can answer that intent with structured, relevant content.

Problem pages do not need to appear prominently on the homepage or be listed in full there. They should remain discoverable through:

- Google search
- direct URL
- internal search
- related content links
- hackathon pages

Each published page should have a stable URL, meaningful title and description, semantic headings, accurate content, source references, canonical metadata, and sitemap coverage. Internal links from hackathon, resource, category, and related-problem pages help users and crawlers discover the wider knowledge graph.

The goal is useful independent pages, not keyword-filled duplicates. Indexing quality depends on original, accurate, maintained content that genuinely helps builders understand and research a problem.

## 17. Content Quality and Trust

HackIndia content must follow these rules:

- **Factual accuracy:** Verify official details, dates, eligibility, technical claims, and research findings before publication.
- **Source attribution:** Link to and identify official sources, research papers, datasets, APIs, and other references used to support a claim.
- **Official-source separation:** Preserve the distinction between what an organizer says and what HackIndia explains, analyzes, or recommends.
- **No fabricated information:** Do not invent problem details, event facts, citations, datasets, APIs, research results, quotes, or user contributions. Mark unknown information as pending verification or omit it.
- **Keep information updated:** Review changing deadlines, links, event status, access conditions, and technology resources. Show update dates where useful.
- **Mark recommendations and opinions:** Label proposed solution directions, technology choices, architecture ideas, and other editorial judgments as HackIndia recommendations rather than requirements.
- **Label HackIndia Original content:** Identify HackIndia-created problems and challenges as HackIndia Original content, never as official external or government problems.
- **Use authoritative references:** Prefer primary official sources and reputable research or technical references, and preserve the source relationship in the record.
- **Respect access and licensing:** Record usage restrictions and avoid implying that a resource may be used in ways its license does not permit.
- **Write for builders:** Prefer clear explanations, useful structure, and practical context without sacrificing precision.

## 18. Future Community

Community contributions are a future feature only. No authentication, submission workflow, moderation system, or community functionality should be implemented as part of the current content architecture.

Potential future capabilities include:

- community submissions
- problem discussions
- resource submissions
- corrections
- solution ideas
- project showcases
- ratings and reviews

If introduced, contributions should enter a review workflow, be attributed to their authors, and remain visibly distinct from official information and HackIndia editorial content. Contributors should be able to suggest corrections without gaining permission to change canonical content directly. Moderation, abuse prevention, licensing, privacy, and authentication requirements would need to be designed before launch.

Until then, HackIndia should build trust through carefully researched, structured, and maintained content.

## 19. MVP Boundary

Not everything in this architecture will be implemented initially. The MVP should prioritize:

- Core website foundation
- Hackathon discovery foundation
- Problem content foundation
- Resource foundation
- Research and guides foundation
- SEO-friendly individual pages

The following remain future phases:

- Authentication
- Community contributions
- Database or CMS
- AI
- Recommendations
- Personalization

The MVP should remain simple, maintainable, SEO-friendly, reusable, scalable, and cost-conscious. It should establish the content models and relationships needed for growth without introducing infrastructure before the product requires it.

## 20. Final Product Principle

HackIndia should help a student move through:

```text
Discover
	-> Understand
	-> Research
	-> Find Resources
	-> Build
	-> Compete
```

The platform should become a central destination for hackathon discovery and hackathon problem intelligence in India.
