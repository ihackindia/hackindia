# HackIndia - Routing and SEO Strategy

## 1. Routing Principles

HackIndia's routes should be stable, human-readable, predictable, SEO-friendly, and independent of storage implementation.

- Use short, descriptive paths that reflect the content type.
- Use stable slugs rather than opaque database IDs as the only visible URL identifier.
- Give every public record one canonical URL.
- Avoid unnecessary URL nesting and temporary path segments.
- Keep URL structures predictable across thousands of hackathons, problems, resources, and guides.
- Preserve backward compatibility with permanent redirects when a published URL must change.
- Avoid duplicating content through alternate paths, query parameters, or imported records.

A title may be corrected, clarified, or rebranded after publication. The internal ID and canonical slug should normally remain unchanged so bookmarks, search results, internal links, and shared references continue to work. URLs are long-term product identities, not disposable representations of the current display title.

## 2. Global Site Structure

The core public structure is:

```text
/
/hackathons
/problems
/resources
/guides
```

Planned supporting routes include:

- `/search`: Future site-wide search results. Search queries should use query parameters such as `/search?q=healthcare`; arbitrary result pages should usually not be indexable.
- `/categories/[slug]`: Future curated category landing pages, only for categories with substantial useful content.
- `/technologies/[slug]`: Future technology landing pages for reusable technical knowledge.
- `/organizations/[slug]`: Future profiles for recurring organizers and source organizations.
- `/hackindia`: Future landing area for HackIndia's own hackathons, challenges, and original content.

The MVP should begin with the homepage and the main collection/detail routes needed for hackathon discovery, problem pages, resources, guides, and SEO. Supporting taxonomy and organization routes should be added when they contain enough content to provide real discovery value, not merely to increase the route count.

## 3. Hackathon Routes

The canonical route for an individual hackathon is:

```text
/hackathons/[slug]
```

Examples:

```text
/hackathons/smart-india-hackathon-2026
/hackathons/example-college-hackathon-2026
```

Useful curated discovery routes may include:

```text
/hackathons/ongoing
/hackathons/upcoming
/hackathons/closing-soon
/hackathons/recently-ended
```

Category routes can be added when they represent durable, useful collections:

```text
/hackathons/national
/hackathons/college
/hackathons/government
/hackathons/corporate
/hackathons/online
```

Individual hackathon pages and carefully curated collection pages should be indexable when they contain substantial, maintained content. Arbitrary combinations such as status, mode, location, sorting, and tags should not produce thousands of indexable duplicate pages. Filtered views should normally use canonical metadata pointing to the base collection or be excluded from indexing, while important combinations can become intentionally curated landing pages later.

## 4. Problem Routes

The primary problem routes are:

```text
/problems
/problems/[slug]
```

The canonical example is:

```text
/problems/sih26001
```

If a student searches Google for `SIH26001`, the intended journey is:

```text
Google -> HackIndia -> /problems/sih26001
```

This is an architectural goal, provided the page is indexed, relevant, and useful. It is not a promise that Google will rank HackIndia first or display this URL for every query.

`SIH26001` is an external problem identifier assigned by its organizer. HackIndia's internal database ID is a separate stable identity, and `sih26001` is a separate public URL slug. Titles can change without breaking the canonical URL.

Examples:

```text
/problems/sih26001
/problems/sih26002
/problems/hackindia001
```

One dynamic route implementation should render all of these records. New content should not require a new React page component for every problem.

## 5. Problem Source and Parent Hackathon URLs

A problem page can link to its parent hackathon while keeping its own short canonical URL:

```text
/hackathons/smart-india-hackathon-2026
/problems/sih26001
```

The problem URL should not be forced to become:

```text
/hackathons/smart-india-hackathon-2026/problems/sih26001
```

The shorter path is easier to share, read, index, migrate, and preserve when event naming or relationships change. The relationship belongs in the data model, not necessarily in the URL hierarchy.

The problem page can still display a breadcrumb such as:

```text
Home -> Hackathons -> Smart India Hackathon 2026 -> SIH26001
```

An independent HackIndia Original Problem can use `/problems/hackindia001` without pretending to belong to an external event.

## 6. Resource Routes

Resource collection routes are:

```text
/resources
/resources/datasets
/resources/apis
/resources/research-papers
/resources/tools
/resources/tutorials
/resources/government-resources
```

Individual resources use:

```text
/resources/[slug]
```

Examples:

```text
/resources/india-health-dataset
/resources/open-maps-api
/resources/fundamentals-of-machine-learning
```

The examples are route patterns only and require verification before use as published content. Resources are canonical reusable records. A dataset, API, or paper can be linked from multiple problem pages and guides without copying it into each page or creating duplicate URLs. Resource type pages should be indexable when they provide useful curated content; arbitrary filtered combinations should generally not be indexable.

## 7. Guide and Research Routes

Research and guide collection routes are:

```text
/guides
/guides/technology
/guides/hackathons
/guides/winning-strategies
/guides/project-building
```

Individual guides use:

```text
/guides/[slug]
```

Examples:

```text
/guides/react-for-hackathons
/guides/how-to-win-a-hackathon
/guides/building-ai-projects
```

Guide pages should be independent, reusable knowledge resources. They may link to technologies, resources, problems, and hackathons, but they should not duplicate the full content of those records. Research and guide pages are indexable when they offer original, maintained value rather than thin collections of links.

## 8. Organization Routes

Organizations may include government organizations, ministries, companies, colleges, universities, HackIndia, and other hackathon organizers.

A future public route could be:

```text
/organizations/[slug]
```

Organization pages can help users discover all events, problems, resources, and guides associated with one trusted organization. They also reduce duplicate organization names and improve internal linking.

Organization pages are future functionality rather than an MVP requirement. The MVP should store reusable organization records and link to official organization URLs, but should create public organization pages only when profiles contain enough verified content to be useful and indexable.

## 9. Technology and Category Routes

Scalable taxonomy routes may include:

```text
/technologies/react
/technologies/python
/technologies/artificial-intelligence
/categories/healthcare
/categories/fintech
```

Technology pages are useful when they provide a substantial overview, related guides, resources, and relevant problems. Category pages are useful when they curate a meaningful body of problems, hackathons, or resources. These pages can become SEO entry points for broad searches, but should not be created as empty tag pages.

Categories, technologies, and tags must remain distinct. Do not create overlapping route systems that publish substantially identical pages for the same content. A category is a broad controlled classification, a technology is a specific technical entity, and a tag is a flexible discovery label.

## 10. Search Architecture

Future site search should be available at a predictable query URL such as:

```text
/search?q=smart-india
```

Search should discover hackathons, problems, resources, guides, organizations, and technologies. Results can support filters and facets such as content type, domain, category, status, mode, technology, organizer, and tags. Ranking should prefer relevant, published, maintained canonical records, with exact identifiers and titles receiving strong weight.

Future capabilities may include:

- query normalization and typo tolerance
- autocomplete for identifiers, titles, and organizations
- filtering without changing canonical record URLs
- relevance ranking with freshness and content quality signals
- semantic or AI-assisted search after the structured search foundation is reliable

Search results and arbitrary filtered result pages should usually carry `noindex` directives or canonicalize to a useful collection page. Search functionality is not implemented by this document.

## 11. Navigation and Information Architecture

The main navigation should reflect the product ecosystem:

- Discover Hackathons
- Explore Problems
- Resources
- Research & Guides
- HackIndia

The content graph should support these journeys:

```text
Hackathon -> Problems
Problem -> Resources
Problem -> Guides
Resource -> Related Problems
Guide -> Related Problems and Hackathons
```

A hackathon page should make associated problems easy to find. A problem page should expose its parent hackathon, related problems, resources, technologies, research, and guides. Resources and guides should link back to the problems and events they support. HackIndia's own challenges and hackathons should be visibly separated from external official content.

## 12. Breadcrumb Strategy

Breadcrumbs should reflect the user's meaningful path through the content graph, not necessarily every URL segment.

Examples:

```text
Home -> Problems -> SIH26001
Home -> Hackathons -> Smart India Hackathon 2026
Home -> Resources -> Datasets -> [Dataset]
Home -> Guides -> Technology -> React for Hackathons
```

Breadcrumbs help users understand location and move upward to broader collections. They strengthen internal linking and provide useful context to search engines when represented with appropriate structured data such as `BreadcrumbList`. Labels should be descriptive, accessible, and derived from canonical records.

## 13. SEO Metadata Strategy

Every indexable public page should derive metadata from canonical content rather than manually duplicating strings across routes. Metadata should include, where appropriate:

- meaningful page title
- accurate meta description
- canonical URL
- Open Graph title, description, URL, and image
- Twitter/X card metadata
- robots directives

Collection pages need stable defaults, while detail pages should generate record-specific metadata. Metadata must not claim facts absent from the underlying verified content.

Conceptual metadata for SIH26001:

```text
Title: SIH26001 - [Verified Problem Title] | HackIndia
Description: Understand SIH26001 with a verified problem statement, HackIndia research, relevant resources, and possible solution directions.
Canonical: https://hackindia.dev/problems/sih26001
Open Graph type: article
Robots: index, follow
```

The bracketed title and description content require verification and should be generated from the actual published record. Draft, private, duplicate, and temporary pages should use appropriate non-indexing directives.

## 14. Structured Data / Schema.org Strategy

Structured data may eventually reinforce the meaning of canonical pages:

- **`Event`:** Individual hackathon pages with verified dates, location or mode, organizer, and official URLs.
- **`Article`:** Editorial problem intelligence, research summaries, and general guides when they meet article requirements.
- **`TechArticle`:** Technology-focused guides with genuine technical instructional content.
- **`Dataset`:** Dataset resource pages with sufficient metadata about the dataset, provider, distribution, and access conditions.
- **`Organization`:** Organization pages or authoritative organization references when the page contains appropriate organization information.
- **`BreadcrumbList`:** Breadcrumb navigation on applicable public pages.

Schema must describe visible, accurate page content and must not be used to mark recommendations as official facts. FAQ structured data should only be used where the page contains eligible, visible FAQs and search-engine guidelines permit it. Schema code is not implemented by this document.

## 15. Internal Linking Strategy

HackIndia should build a strong internal-link graph from canonical records:

- A problem page links to its parent hackathon, related problems, relevant datasets, APIs, research papers, technologies, and guides.
- A hackathon page links to all associated problems, its organizer, official registration and event pages, and related resources.
- A guide links to its technologies, resources, relevant problems, and related hackathons.
- A resource links to the problems, technologies, guides, and hackathons it supports.
- Organization and category pages link to their canonical related records when those pages exist.

Links should use descriptive anchor text and point directly to canonical URLs. This helps users move from discovery to understanding to building, helps crawlers find deeper content, and distributes context across the knowledge base. Related links must be based on real relationships rather than generated link farms.

## 16. Canonicalization and Duplicate Content

Canonicalization rules should prevent multiple URLs from representing the same content:

- Query parameters for search, filters, tracking, or sorting should not create new canonical content pages.
- Temporary filtered views should canonicalize to the relevant collection or use `noindex`.
- Only curated category combinations with unique value should become indexable landing pages.
- Duplicate imported hackathons should be merged into one canonical record with one stable slug.
- Duplicate problems should be matched using organizer, external identifier, event, source, and content before publication.
- A title change should update the display title but normally preserve the slug.
- Alternate paths should redirect to the canonical URL where possible.

Canonical tags are a signal, not permission to publish thin duplicate pages. The source and content model must resolve duplicate records before they become competing public pages.

## 17. Dynamic vs Indexable Pages

### Indexable

The following should generally be indexable when published content is substantial and maintained:

- Individual hackathons
- Individual problems
- Individual resources
- Individual guides and research pages
- Useful curated category pages
- Useful curated technology pages
- Selected collection pages such as `/hackathons/upcoming`

### Usually Not Indexable

The following should usually not be indexable:

- Arbitrary search results
- Temporary filter combinations
- Sorting URLs
- Tracking-parameter variants
- Internal admin pages
- Private or user-specific pages
- Duplicate query-parameter combinations

Indexing is a content-quality decision. A static or dynamic page should be indexable only when it provides a stable, useful answer for searchers and has a canonical identity.

## 18. Sitemap Strategy

The conceptual sitemap structure is:

```text
/sitemap.xml
/sitemap-hackathons.xml
/sitemap-problems.xml
/sitemap-resources.xml
/sitemap-guides.xml
```

The root sitemap can act as a sitemap index when collections become large. Each content sitemap should contain only published canonical URLs and their meaningful update timestamps. Draft, archived-as-hidden, private, duplicate, and `noindex` pages should be excluded.

Large collections can later be split into multiple sitemap files per entity type or range, subject to search-engine limits. Sitemap generation should come from the same canonical content layer used by routes and metadata. Sitemaps are not implemented now.

## 19. Robots and Crawl Strategy

High-level crawl rules are:

- Allow crawling of public, canonical problem, hackathon, resource, guide, research, and useful taxonomy pages.
- Keep admin areas out of the public crawl surface.
- Usually exclude search results, temporary filters, sorting variants, and tracking-parameter combinations.
- Keep private, user-specific, draft, and unpublished pages out of indexing.
- Do not rely on `robots.txt` as the only protection for private information; access control belongs in the application.
- Avoid blocking canonical public resources needed to render or understand pages.

A future `robots.txt` should point crawlers to the sitemap and express these high-level preferences. It is not implemented by this document.

## 20. URL Change Policy

The canonical URL should change as rarely as possible.

- **Title changes:** Update the title while preserving the slug unless the existing slug is harmful or misleading.
- **Organizer changes:** Update the organization relationship and source information; preserve the event slug unless its identity truly changed.
- **Hackathon year changes:** Treat a new yearly event as a new record and slug when it is a distinct event. Correct an incorrectly recorded year in place when it is the same event.
- **Imported record corrections:** Correct the canonical record and provenance rather than creating another URL. Merge or redirect duplicates.
- **Archived problems:** Preserve the canonical problem URL where useful, show its archived state, and avoid presenting outdated information as current.

If a published URL must change, use a permanent redirect from the old URL to the new canonical URL, update internal links, metadata, and sitemaps, and retain the old identity in migration records.

## 21. SEO Content Quality Principles

HackIndia should not simply copy external problem statements and publish thin duplicate pages. Its value should come from:

- structured presentation of official information
- clear official source attribution
- plain-language problem explanation
- relevant technologies
- datasets and APIs
- research and existing-solution analysis
- implementation resources
- related guides
- solution research and possible directions
- contextual information for builders

Official information must remain visibly separate from HackIndia editorial research, analysis, and recommendations. Content should be accurate, maintained, sourced, and useful to a student deciding what to build. Search optimization must support the knowledge experience rather than replace it with keyword-filled pages.

## 22. Example Complete User Journey

A realistic problem-discovery journey is:

```text
Google Search
      |
      v
SIH26001
      |
      v
HackIndia problem page: /problems/sih26001
      |
      v
Parent Smart India Hackathon
      |
      v
Problem understanding
      |
      v
Relevant datasets
      |
      v
APIs
      |
      v
Research papers
      |
      v
Technology guides
      |
      v
Project-building resources
```

The problem page acts as an independently discoverable entry point. Its canonical links, breadcrumbs, related content, and parent-hackathon link let a student move from identifying the problem to researching it and finding practical material for building. The same architecture supports a user entering through a hackathon, resource, guide, category, or organization page.

## 23. MVP Route Table

| Route | Purpose | Rendering | Indexing | Phase |
| --- | --- | --- | --- | --- |
| `/` | Main product entry point and discovery links. | Static/server | Yes | MVP |
| `/hackathons` | Browse hackathons in India. | Server/dynamic data | Yes | MVP |
| `/hackathons/[slug]` | Canonical hackathon detail page. | Dynamic | Yes | MVP |
| `/problems` | Browse published problem records. | Server/dynamic data | Yes | MVP |
| `/problems/[slug]` | Canonical problem intelligence page. | Dynamic | Yes | MVP |
| `/resources` | Browse reusable resources. | Server/dynamic data | Yes | MVP |
| `/resources/[slug]` | Canonical resource page. | Dynamic | Yes | MVP |
| `/guides` | Browse research and guides. | Server/dynamic data | Yes | MVP |
| `/guides/[slug]` | Canonical guide or research page. | Dynamic | Yes | MVP |
| `/search?q=...` | Site-wide search results. | Dynamic | Usually no | Future |
| `/organizations/[slug]` | Organizer and source profile. | Dynamic | When substantial | Future |
| `/technologies/[slug]` | Technology landing page. | Dynamic | When substantial | Future |
| `/categories/[slug]` | Curated category landing page. | Dynamic | When substantial | Future |
| `/hackindia` | HackIndia-owned events and challenges. | Static/dynamic | When populated | Future |

This table describes intended routing, not routes to implement in this documentation task.

## 24. Future SEO Expansion

The architecture can eventually support:

- thousands of hackathons
- tens of thousands of problem statements
- large resource libraries
- organization profiles
- technology landing pages
- AI-powered discovery
- personalized recommendations
- community content
- HackIndia Original Hackathons

Growth should come from canonical structured records, dynamic routes, generated metadata, curated internal links, crawlable sitemaps, and controlled indexing. New capabilities should preserve stable URLs and clear provenance. None of these future expansions are implemented by this document.
