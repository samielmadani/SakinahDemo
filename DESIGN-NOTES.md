# Sakinah Community Trust — redesign audit and Squarespace plan

This document accompanies the linked-page visual prototype in this folder. It is based on a review of the public Trust website and Unity Week NZ site on 21 October 2026. It is a design handoff, not a change to the live website.

## First: what the current site contains

The live `sakinahtrust.org` is a WordPress site (WordPress 6.8.3, Ave theme, WPBakery), not a Squarespace site. This folder contains no Squarespace export or account access. The prototype uses the live site as a content and approved-media source and is intentionally built from ordinary pages and simple layouts that can be recreated with Squarespace 7.1 sections and Fluid Engine.

### Content audit

| Source page/content | Verified material | Proposed destination / action |
|---|---|---|
| Home | “Restoring Tranquility / Calmness / Peace / Belonging”; “To the Communities of Christchurch”; client-supplied themes of experience, learning, building and participation. | Home becomes an editorial introduction with direct paths to funding, events, story and service, plus a moving strip of collaborator marks supplied in event materials. Keep the existing wordmark and non-event hero image. |
| Our Story | 15 March 2019 mosque attacks in Christchurch; 51 people killed and many injured; community compassion and solidarity; meaning of sakinah; women as agents of change; stewardship of entrusted donations as an amānah. | Our Story page, with a bold photo-led timeline and the existing history. No sensational imagery or unsupported dates. |
| Our Purpose | Relevant governance; trust’s bridging role; governance principles; grant management and the Christchurch Foundation legacy; four connected aims: strengthening community, promoting wellbeing, building social cohesion and creating opportunity; Te Whare Tapa Whā dimensions. | Our Purpose page. Preserve all themes, with sections and visual groupings rather than a single text block. |
| Our Trustees | Women-led Trust; family members of people lost in the attacks; seven named board members and five role labels; strategy and governance responsibilities. | Our Team page. Names/roles use current board page wording; bios are condensed from profile pages. Confirm current board and permissions before migration. |
| Trustee profiles | Profile posts for Dr Hamimah Tuyan, Angela Armstrong, Ambreen Naeem, Dr Kiran Munir, Salwa Mohamad and Farhiya Abdukadir Abdi; bios include education, experience and hopes. Separate board roster lists Dr Hamimah Ahmat as Chair, Raesha Ismail as Secretary, Dr Kiran Munir as Treasurer, and four Trustees. | Use the profile information where it remains relevant. Preserve Raesha Ismail as a board member; no biography was found. Resolve the Dr Hamimah Ahmat / Dr Hamimah Tuyan discrepancy with the Trust. |
| Funding | Matching grant, full grants up to NZ$2,000 for small projects, partial funding; applicant eligibility; not for individuals; check purpose and contact for an application form; spend within 3 calendar months; possible return if project does not proceed; brief report and event photos requested. | Apply Now page. Keep each condition and clearly state that matching rates, deadlines and response times are not published. |
| Contact Us | Collaboration invitation; contact form fields (name, email, message); privacy reassurance; bank account `06-0665-0556070-00`; Trust Facebook link. | Contact page and footer. Form and bank details must be reconnected/reconfirmed before launch. No email address, phone number or postal address was present in the reviewed page. |
| Unity Week NZ | External site describes it as launched in 2022 and award-winning; reflection on 15 March; values: Understanding, Nationhood, Integrity, Trust and You; invites attendance and Unity Week Champions to organise activities. | Dedicated Unity Week NZ hub linking to its official site for dates, registration, current programme and approved partner marks. |
| Events | No Sakinah event listing or future dates appeared in the reviewed sitemap or primary pages. Client materials include historical gathering and programme photos. | Use a Squarespace Events collection for confirmed dates and a small archive of supplied historical photos. Do not show invented future events or dates. |
| Khidmah | No established network page, volunteer roster, identities, role list or form was found on the public Trust site. | Proposed supporting page only. Confirm programme status, who can join, roles, screening and safeguarding, contact ownership and form workflow before publishing. |
| Site posts / downloads / forms | WordPress sitemap lists six pages and seven posts (six trustee profiles plus the default “Hello world!” post). Contact has a legacy Contact Form 7 form. No downloadable application form, public policy/legal pages or accessibility statement were found in the reviewed sitemap/pages. | Retire the default post. Locate any unpublished documents and policies with the Trust; migrate and link them if still current. Rebuild the contact form as a Squarespace Form Block. |
| Footer / social | Facebook link and donation account are published on Contact Us. The reviewed pages did not expose a postal address, phone number or general email address. | Keep verified donation and social details only after reconfirmation; do not manufacture missing contact data. |

### Content that needs human review

- Confirm the current trustee list, role titles, preferred names and bios. The trustee page names the Chair as **Dr Hamimah Ahmat** while the linked profile URL/title says **Dr Hamimah Tuyan**.
- Confirm whether the existing trustee and community photos are current, approved for reuse, and available at higher resolution. Existing images have no useful descriptive alt text in the source HTML.
- Confirm the funding criteria, matching percentage, current application windows, form, decision timeframe and contact route. Do not infer these from the old page.
- Confirm Unity Week NZ dates, current event programme, image rights, partner/supporter marks and direct registration links.
- Confirm permission to publish the supplied event photos and collaborator marks, and that the marks do not imply current sponsorship or endorsement.
- Confirm whether Khidmah is an active programme and approve its scope, volunteer roles, screening and privacy process.
- Confirm bank account details, privacy wording, social links, policy/legal pages and accessibility statement.
- No verified impact statistics, approved testimonials, public project case studies, event archive or volunteer biographies were found. The prototype uses no invented metrics or testimonials.

## Proposed sitemap and navigation

**Primary navigation:** Home · Our Story · Our Purpose · Our Trustees · Our Events · **Apply Now** (persistent button).

**Supporting pages:** Unity Week NZ · Khidmah Network · Contact.

```text
Home /
├── Our Story /story
├── Our Purpose /purpose
├── Our Trustees /trustees
├── Our Events /events
│   ├── Upcoming events (Squarespace Events collection)
│   └── Past events (same collection, archive filter)
├── Apply Now /apply
├── Unity Week NZ /unity-week
├── Khidmah Network /khidmah
└── Contact /contact
    ├── Privacy policy (confirm current version)
    ├── Terms / charity or funding policy (confirm what exists)
    └── Accessibility statement (create/approve before launch)
```

Keep Events, Apply Now and Contact separate. Unity Week remains its own hub and links to `unityweek.co.nz` for live programme details. If there are approved detailed grant terms, put them under Apply Now rather than burying them in the homepage.

## Creative direction and system

**Direction:** An immersive, photographic editorial site inspired by the user's Tengile MalaMala, SEE ME Creative and Wild AG references. Every page opens with a full-screen Trust photograph and shared transparent navigation. The rest of the experience uses oversized clean type, short editorial copy, image-led sections and structured content that unfolds as the visitor scrolls. Use the references' pacing and interaction patterns—not their imagery, wording, logos, or exact compositions. Keep Sakinah's wordmark, verified content and existing community photography.

The current prototype also borrows selected cues from [Wolverine Worldwide](https://wolverineworldwide.com/): open full-width sections, fine divider lines, oversized concise headings and a header that becomes a short, centered floating pill after scrolling. Do not wrap every section in a card or overlap adjacent sections. Use rounding only where it helps an image or feature feel intentional.

| Token | Hex | Use |
|---|---|---|
| Deep green ink | `#1f3934` | Headings, dark panels and footer |
| Soft white | `#fbfcfb` | Main background |
| Pale green | `#eaf2ed` | Alternating sections and supporting panels |
| Sakinah logo green | `#0d7f6c` | Primary brand accent and interactive states |
| Muted blue trim | `#35566a` | Logo-inspired dividers, timeline and process markers |

Use Manrope for the clean, uppercase display treatment and DM Sans for body/navigation; both are Google Fonts available in Squarespace. Keep body copy around 17–18px desktop and at least 16px mobile, with comfortable 1.6–1.7 line height. The prototype uses reversible, scroll-linked motion for sections, image carousels and timeline progress; same-origin navigation transitions; image hover motion; and a reading-progress line. Respect reduced-motion preferences and retain a readable static fallback.

### Visual references

- [Tengile MalaMala Collection](https://tengilemalamala.com/) — full-screen photography, minimal overlay navigation, large hero statement, spacious brand storytelling, and image-led page rhythm.
- [SEE ME Creative](https://seemecreative.com/) — full-bleed film/photography, numbered navigation, concise brand statements and a visual work index.
- [Wild AG](https://wild-ag.ch/) — large image panels, numbered service/process sequences, scroll-led pacing and clear section navigation.
- [Wolverine Worldwide](https://wolverineworldwide.com/) — fine divider lines, sparse oversized headings and a header that collapses into a compact floating bar while scrolling.

The Sakinah version remains practical in Squarespace 7.1: use approved Trust photographs rather than copying reference videos, build open image/text sections with Fluid Engine, and use Squarespace's native menu and accordion patterns. The prototype uses reversible scroll-linked movement, interactive photo and trustee carousels, image hover motion and same-origin page transitions where supported. Recreate the compact floating header and carousel controls with small Squarespace code-injection scripts and custom CSS; keep static fallbacks and honor reduced-motion settings. Collaborator marks are cropped from supplied event materials; confirm permission and relationship wording before launch, and do not imply current sponsorship or endorsement.

## Homepage wireframe and copy direction

1. **Immersive hero:** full-screen Trust photograph, subtle olive overlay, transparent header and uppercase “Restoring belonging” headline. Offer “Explore our work” and “Read our story.”
2. **Editorial introduction:** explain what Sakinah means, the women-led Trust and its Christchurch community purpose.
3. **Image-led pathways:** A large swipeable carousel for Come together / Bring an idea to life / Offer what you can / Start a conversation. Use existing Trust images and link to Events, Apply, Khidmah and Contact.
4. **Unity Week feature:** large photo-and-copy section, with no event date unless confirmed.
5. **Partners:** a restrained moving strip of the marks present in supplied event materials; the Our Team page uses the same marks as linked, static images.
6. **Trustees preview:** approved portraits, confirmed role labels and concise bios under “Our Trustees.”
7. **Funding and service links:** a concise grant invitation and a direct link to the proposed Khidmah Network; do not imply the network is already active.

## Page-by-page plan and Squarespace build notes

Pages share the same overlay header, typography, color system, section spacing and motion treatment. Use page-specific Trust imagery to distinguish destinations; keep factual material in short sections, visual lists and accessible accordions rather than removing verified detail. Alternate section backgrounds deliberately to avoid adjacent blocks blending into an accidental blank strip.

| Page | Sections and content | Squarespace 7.1 implementation |
|---|---|---|
| Home | Full-screen photographic hero; Arabic meaning and colored logo; image-led ways to take part; Unity Week feature; Partners; Our Trustees; funding and Khidmah links. | Fluid Engine image section with overlay text; simple header/menu; image and text blocks; summary blocks for events and trustees; standard button blocks. |
| Our Story | Title/intro; approved archive image; large 2019 → ongoing-response timeline; faith-informed meaning of Sakinah; current work and related links. | Fluid Engine image + text sections; bold date/story panels and approved photos for the timeline; quote block; use custom CSS for scroll-linked progress where supported. |
| Our Purpose | Four connected aims; holistic wellbeing dimensions; a relevant community planting image and concise funding link. | Fluid Engine sections; summary/cards from text and image blocks; accordion for definitions and detailed policy content if needed. |
| Our Team | Accessible trustee portraits; names, roles and concise biographies; board responsibilities; linked Partners marks. | Summary block backed by a blog/collection or Fluid Engine grid. Use current approved portraits and individual profile pages only if helpful. |
| Our Events | Featured Unity Week; upcoming and past event views; date/time, location, accessibility, image, registration, details. | Squarespace Events collection and summary blocks, with separate detail pages and a past-events archive. |
| Apply Now | Three grant types; applicant eligibility; purpose check and application-form request; three-month spending period and reporting; existing FAQs; request-form CTA. | Fluid Engine sections with a compact numbered path; preserve the existing FAQ accordion; linked Form Block only after the Trust supplies the official form and route. |
| Unity Week NZ | What/why; approved imagery; five values; participation; current activities and partner marks; direct external CTA. | Image + text sections; gallery; summary block for events; logo strip only with partner permission; CTA button to Unity Week NZ. |
| Khidmah | Meaning/service; clearly marked concept, not an established programme; contact link pending approved roles and sign-up details. | Fluid Engine; add volunteer stories or a Form Block only after scope, consent and recipient are approved. |
| Contact | Collaboration invitation; name/email/message form; confirmed donation details; Facebook; contact FAQs. | Squarespace Form Block; text/link blocks. Verify bank details and form recipient before publish. |

## Image plan and migration notes

Use the Trust’s own image files where appropriate; preserve their aspect ratios and crop only with focal-point checks. The prototype references:

- Original horizontal logo: `logo-with-text@0.5x.png` (also available as a `@2x` source).
- Homepage hero: `01-Janneth-Gil-1072-2.jpg`.
- Existing story/purpose/community panels: `NR5H2PGGQP4K4XC6GCXEAN655I.jpg`, `XTCMUG6GZ4RNATL5EUA2EA5NNI.jpg`, `IMG-20210127-WA0064-1.jpg`, and `image00053-e1618823755137.jpg`.
- Trustee portraits: existing board page sources for Dr Hamimah Ahmat, Dr Kiran Munir, Ambreen Naeem, Salwa Mohamad, Farhiye Abdukadir Abdi, Angela Armstrong and Raesha Ismail.

The prototype references source URLs for preview only. In the Squarespace build, upload approved original files to the site’s own asset library rather than hotlinking the old WordPress media server. The footer uses the official wordmark in white against a deep-green field; the FAQ answers animate open and closed while retaining native `details` semantics.

**Replacement check:** current trustee images range from 129px to 1,536px square. The 129px, 239px, 324px and 430px source portraits are not suitable for large desktop cards or retina displays; obtain approved high-resolution replacements. Inspect each existing wide image at desktop/mobile crop points. Source alt text is mostly empty, so write meaningful alt text for informative photographs and empty alt text only for decorative images. Do not replace any photo with unrelated stock.

### Migration checklist

- [ ] Replace the current homepage with the new short intro and keep all story, purpose, trustee and funding content on separate pages.
- [ ] Migrate Our Story’s 15 March 2019 context, name meaning, community response and women’s leadership.
- [ ] Migrate every Our Purpose theme: strengthening community; social, spiritual, physical and psycho-emotional wellbeing; inclusion, social capital and mobility; governance; grant management; funding legacy.
- [ ] Migrate each trustee profile, image, role and family context after personal approval; resolve the name discrepancy and confirm the list.
- [ ] Migrate the exact public funding types, eligibility, NZ$2,000 full-grant cap, spend period, project non-delivery term and reporting/photos request; have the Trust revalidate.
- [ ] Migrate Contact form, privacy notice, donation details and Facebook link; verify form routing and bank account.
- [ ] Link Unity Week NZ to its dedicated hub and official external site; use confirmed date/partner information only.
- [ ] Find and review any unpublished applications, policies, legal notices, archived events, photos and accessibility content before retirement of the WordPress site.
- [ ] Redirect legacy URLs (`/funding/`, `/contact-us/`, profile URLs, and other indexed pages) to their corresponding Squarespace destinations.
- [ ] Remove the default “Hello world!” post if it is not intentionally retained.

## Responsive, access and editorial checks

- Desktop: 12-column Fluid Engine grid; 2-column story sections; 3-column trustee and theme grids; full-width photography with natural crop.
- Tablet: two-column editorial layouts where text remains readable; maintain comfortable gutters and an inset floating header.
- Mobile: one-column editorial sections, touch-friendly horizontal carousels, a full-height slide-in menu, full-width form controls, and no page-level sideways scrolling.
- Keep one H1 per page and a logical H2/H3 sequence; use descriptive link names, labelled form fields, visible focus, sufficient contrast, keyboard navigation and reduced-motion support.
- Provide concise descriptive alt text, captions/credits where needed, and never use colour alone to convey status.
- Avoid autoplay, unnecessary animation, long text walls and unsupported placeholder imagery.

## Proposed page metadata

| Page | SEO title | Meta description |
|---|---|---|
| Home | Sakinah Community Trust \| Restoring belonging | Sakinah Community Trust supports community-led initiatives that grow belonging, wellbeing and connection in Christchurch. Find a way to take part. |
| Our Story | Our Story \| Sakinah Community Trust | Learn how Sakinah Community Trust grew from a community response to 15 March 2019 into a commitment to peace, belonging and shared action. |
| Our Purpose | Our Purpose \| Sakinah Community Trust | Explore how Sakinah supports inclusion, connection, wellbeing and opportunity through community-led projects in Christchurch. |
| Our Trustees | Our Trustees \| Sakinah Community Trust | Meet the women-led Sakinah Community Trust board and learn about its governance roles and community commitment. |
| Our Events | Events \| Sakinah Community Trust | Find events that bring Christchurch communities together with Sakinah Community Trust, including Unity Week NZ. |
| Apply Now | Apply for Support \| Sakinah Community Trust | Check who can apply for Sakinah Community Trust funding, what support may be available and how to request an application form. |
| Unity Week NZ | Unity Week NZ \| Sakinah Community Trust | Join Unity Week NZ in remembering the lessons of 15 March and building a stronger, more compassionate Aotearoa New Zealand. |
| Khidmah | Khidmah Network \| Sakinah Community Trust | Learn about the proposed Sakinah Khidmah Network and how people may offer their time and skills in service to community. |
| Contact | Contact \| Sakinah Community Trust | Contact Sakinah Community Trust about funding, partnerships, events and ways to support the Christchurch community. |

## Reusable sections and quality assurance

**Reusable set:** global header with persistent Apply Now button; full-bleed photo hero; editorial intro; image/text pair; swipeable community-photo and trustee carousels; three-theme content grid; pull quote; scroll-linked story timeline; events summary; grant-step strip; FAQ accordion; open editorial invitation; three-column footer.

**Launch QA:** verify all copy, names, dates, roles, grant rules and financial details with the Trust; check photo rights, resolution, alt text and focal points; test all internal and external links; test desktop/tablet/mobile at real breakpoints; keyboard-test navigation, accordion and forms; verify contrast/focus/reduced motion; connect and test every Squarespace form with the correct recipient; add current policies/accessibility statement; configure redirects, SEO metadata, social previews, analytics/privacy consent as required; remove all “preview” and approval notices only after every item is resolved.

## Visual refinements

- Match the Sakinah Trust logo palette: use logo green (`#0d7f6c`) as the sole colour accent, with pale green-tinted backgrounds and deep green text instead of dark-blue panels.
- Keep the homepage hero image-led and quiet; rotate the original Trust's “Tranquility / Calmness / Peace / Belonging” words instead of using a generic caption and CTA stack.
- Give the Arabic word سكينة a prominent typographic treatment with a plain-language explanation.
- Use the official colored Trust logo in the footer; keep the header mark white over photography.
- Center carousel slides with neighboring-image previews; keep duplicate edge slides decorative to assistive technology.
- Keep the full-height side navigation above the page dimmer so every page's links remain clickable; animate the menu icon into a close symbol.
- Keep the header logo white over photography; use a translucent Sakinah-green compact header and a text-only Apply Now action with a small document icon.
- On the funding page, use a concise three-step path and compact eligibility summary without dropping grant or reporting details; leave the existing FAQ accordion unchanged.
