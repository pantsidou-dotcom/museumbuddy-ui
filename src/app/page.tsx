import {
  PageWrapper,
  Topbar,
  TopbarInner,
  Logo,
  IconRow,
  IconBtn,
  SearchRow,
  SearchInput,
  FilterBtn,
  PageHeader,
  SectionHeader,
  ChipIcon,
  ExpoCard,
  Fab,
  ExpoMeta,
  ExpoTitle,
  CTA,
  VisitorCard,
  VisitorTitle,
  ButtonRow,
  PrimaryLink,
  GhostLink,
  Label,
  Value,
  Credit,
} from "@/components/ui";

const exhibitions = [
  {
    id: "immersive-journeys",
    title: "Immersive Journeys",
    meta: "Until 24 November • Gallery 2",
    cta: "Reserve tickets",
  },
  {
    id: "art-of-sound",
    title: "The Art of Sound",
    meta: "Opens 2 December • Theater",
    cta: "Get notified",
  },
  {
    id: "lightscapes",
    title: "Lightscapes",
    meta: "Daily • Atrium",
    cta: "Plan visit",
  },
];

const visitorStats = [
  { id: "today", label: "Visitors today", value: "1,248" },
  { id: "members", label: "Active members", value: "5,731" },
  { id: "satisfaction", label: "Satisfaction score", value: "4.8/5" },
];

export default function HomePage() {
  return (
    <PageWrapper>
      <Topbar>
        <TopbarInner>
          <Logo>MuseumBuddy</Logo>
          <IconRow>
            <IconBtn aria-label="View notifications">🔔</IconBtn>
            <IconBtn aria-label="Open profile">🙂</IconBtn>
          </IconRow>
        </TopbarInner>
      </Topbar>

      <main>
        <SearchRow>
          <SearchInput type="search" placeholder="Search exhibitions, artists or events" />
          <FilterBtn type="button">Filters</FilterBtn>
        </SearchRow>

        <PageHeader>
          <h1>Discover what&apos;s new</h1>
          <p>Curated highlights and realtime visitor insights from the museum floor.</p>
        </PageHeader>

        <SectionHeader>
          <ChipIcon aria-hidden>★</ChipIcon>
          <span>Featured exhibitions</span>
        </SectionHeader>

        {exhibitions.map((expo) => (
          <ExpoCard key={expo.id}>
            <ExpoTitle>{expo.title}</ExpoTitle>
            <ExpoMeta>{expo.meta}</ExpoMeta>
            <CTA type="button">{expo.cta}</CTA>
          </ExpoCard>
        ))}

        <SectionHeader>
          <ChipIcon aria-hidden>👥</ChipIcon>
          <span>Visitor insights</span>
        </SectionHeader>

        <VisitorCard>
          <VisitorTitle>Today&apos;s snapshot</VisitorTitle>
          {visitorStats.map((stat) => (
            <Label key={stat.id}>
              <span>{stat.label}</span>
              <Value>{stat.value}</Value>
            </Label>
          ))}
          <ButtonRow>
            <PrimaryLink href="#">Download report</PrimaryLink>
            <GhostLink href="#">Share dashboard</GhostLink>
          </ButtonRow>
        </VisitorCard>
      </main>

      <Fab type="button">Ask Muse</Fab>
      <Credit>Data refreshed 5 minutes ago</Credit>
    </PageWrapper>
  );
}
