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
} from "./components/ui";

export default function Page() {
  return (
    <PageWrapper>
      <Topbar>
        <TopbarInner>
          <Logo>MuseumBuddy</Logo>
          <IconRow>
            <IconBtn type="button" aria-label="View notifications">
              <span aria-hidden="true">🔔</span>
            </IconBtn>
            <IconBtn type="button" aria-label="Open profile menu">
              <span aria-hidden="true">👤</span>
            </IconBtn>
          </IconRow>
        </TopbarInner>
      </Topbar>

      <SearchRow>
        <SearchInput
          type="search"
          name="search"
          placeholder="Search exhibitions, artists, events"
          aria-label="Search exhibitions"
        />
        <FilterBtn type="button">Filters</FilterBtn>
      </SearchRow>

      <PageHeader>
        <span className="eyebrow">This week at the museum</span>
        <h1>Immersive Soundscapes</h1>
        <p>
          Follow the evolution of music from ancient rituals to modern experimentation in
          our newest multi-sensory exhibition.
        </p>
      </PageHeader>

      <SectionHeader>
        <h2>Featured exhibition</h2>
        <ChipIcon type="button" aria-label="Add exhibition to calendar">
          <span aria-hidden="true">📅</span>
        </ChipIcon>
      </SectionHeader>

      <ExpoCard>
        <Fab type="button" aria-label="Save exhibition">
          <span aria-hidden="true">⭐</span>
        </Fab>
        <ExpoMeta>
          <span>Immersive</span>
          <span>Audio Lab</span>
          <span>Ends July 12</span>
        </ExpoMeta>
        <ExpoTitle>Echoes of the Earth: Soundscapes of Ancient Civilisations</ExpoTitle>
        <p>
          Walk through interactive rooms that blend archaeological artefacts with
          responsive light and sound installations curated by our resident composers.
        </p>
        <CTA type="button">
          Reserve your spot
          <small>Guided experiences every hour</small>
        </CTA>
      </ExpoCard>

      <SectionHeader>
        <h2>Plan your visit</h2>
        <ChipIcon type="button" aria-label="Share visitor information">
          <span aria-hidden="true">🔗</span>
        </ChipIcon>
      </SectionHeader>

      <VisitorCard>
        <VisitorTitle>Welcome to MuseumBuddy</VisitorTitle>
        <p>
          Whether you are planning a family afternoon or bringing a school group, we will
          help you tailor the perfect experience for your visit.
        </p>
        <ButtonRow>
          <PrimaryLink id="tickets" href="#tickets">
            Buy tickets
          </PrimaryLink>
          <GhostLink id="calendar" href="#calendar">
            See calendar
          </GhostLink>
        </ButtonRow>

        <Label>Today's highlights</Label>
        <Value>
          Guided tours at 11:00 and 15:00 · Sound Lab workshops from 13:00 with guest
          artist Rina Okoye.
        </Value>

        <Label>Opening hours</Label>
        <Value>Tuesday – Sunday · 10:00 – 18:00 (late Thursdays until 21:00).</Value>

        <Label>Getting here</Label>
        <Value>
          Museumplein 221, Amsterdam. Tram 7 or Metro line A to Museumplein station, 2
          minute walk.
        </Value>

        <Credit>
          Need assistance? Email
          <a href="mailto:hello@museumbuddy.org"> hello@museumbuddy.org</a>
        </Credit>
      </VisitorCard>
    </PageWrapper>
  );
}
