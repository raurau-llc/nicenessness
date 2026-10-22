# Editorial audit of the 20-article public-site gap

- Review model: `gpt-6-luna`
- Exact reviewed main head: `704e0d3fe5305caa05f73485fd1f5328914b80a2`
- Compared with Sites version 14 source `b72039181196960518420e3a8deaaf05c17cc314` (197 articles), main contains 20 additional ready records.
- Review scope: all 20 records in `content/revalidation.v20.json`.
- Images: no new image assets were added.

## Eligible after the audit

T010, T238, T239, T250, T264, T269, T270, T271, T272, T274, T293, T298, T299, T302, T314, T316, T318, and T327. Their primary-source mappings, article scope, overlap with the 197 existing public stories, and Japanese copy were checked. Source-access limits for T239, T264, T270, T271, T293, and T327 are recorded in `content/revalidation.v20.json`; each article text narrows its statements to the accessible evidence.

T238's “柔らかな裏起毛” was changed to “柔らかなフリース裏地”, matching the cited 1963 advertisement's “Soft Fleece Lining”.

## Pending exact-head check

T263's original opening described the Danish National Museum's British-made 1952 parka as an M-1951 parka. The museum record identifies the object as a British 1952 parka and separately transcribes an interior label reading “Parka Shell, M 1951”. The opening and section keep those claims separate; its period metadata is now `1952年の収蔵品・1995年版規格`, avoiding the implication that the parka's type is established by its label. T263 remains `review` without a publication date until the final wording receives an exact-head independent check.

## Held

T289 remains `review` without a publication date. The cited Library of Congress newspaper PDF returned 403 during independent review, and the draft generalized from a single 1952 advertisement. Direct confirmation of that primary source and a narrower interpretation are required before publication.

The review found nearby but distinct subjects in T263/T189 (detachable hoods), T302/T318 (waist adjustment), and T327/T161/T163 (khaki trousers). The separate records and questions did not amount to a duplicate story.
