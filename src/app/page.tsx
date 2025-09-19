'use client';

import {
  Topbar, TopbarInner, Logo, IconRow, IconBtn,
  SearchRow, SearchInput, FilterBtn,
  PageHeader, SectionHeader, ChipIcon,
  ExpoCard, Fab, ExpoMeta, ExpoTitle, CTA,
  VisitorCard, VisitorTitle, ButtonRow, PrimaryLink, GhostLink, Label, Value, Credit
} from "@/components/ui";

const EXHIBITIONS = [
  { id:"1", title:"Yellow. More than Van Gogh’s Favourite Colour", start:"FEB 13", end:"MAY 17" },
  { id:"2", title:"LEGO® Yellow House", start:"JUN 19", end:"SEP 28" }
];

export default function Home() {
  return (
    <>
      <Topbar>
        <TopbarInner>
          <Logo>MUSEUM BUDDY</Logo>
          <IconRow>
            <IconBtn aria-label="Language">EN</IconBtn>
            <IconBtn aria-label="Theme">☾</IconBtn>
            <IconBtn aria-label="Menu">≡</IconBtn>
            <IconBtn aria-label="Favorites">♡</IconBtn>
          </IconRow>
        </TopbarInner>
        <SearchRow>
          <SearchInput placeholder="Search" aria-label="Search"/>
          <FilterBtn>Filters</FilterBtn>
        </SearchRow>
      </Topbar>

      <PageHeader>
        <div className="eyebrow">Amsterdam, Noord-Holland</div>
        <h1>Van Gogh Museum</h1>
        <p>Van Gogh’s paintings and letters.</p>
      </PageHeader>

      <SectionHeader>
        <h2>Expositions</h2>
        <IconRow>
          <ChipIcon aria-label="Share">⤴︎</ChipIcon>
          <ChipIcon aria-label="Save">♡</ChipIcon>
        </IconRow>
      </SectionHeader>

      {EXHIBITIONS.map(x=>(
        <ExpoCard key={x.id}>
          <Fab aria-label="Add to favorites">♡</Fab>
          <ExpoMeta><span>DURATION</span><span>{x.start} — {x.end}</span></ExpoMeta>
          <ExpoTitle>{x.title}</ExpoTitle>
          <CTA>Buy Ticket<small>Affiliate link</small></CTA>
        </ExpoCard>
      ))}

      <VisitorCard aria-labelledby="visitor-info-title">
        <VisitorTitle id="visitor-info-title">Visitor Information</VisitorTitle>
        <ButtonRow>
          <PrimaryLink href="#" target="_blank" rel="noopener">Buy Ticket</PrimaryLink>
          <GhostLink href="#" target="_blank" rel="noopener">Website</GhostLink>
        </ButtonRow>
        <Label>Opening Hours</Label><Value>Daily 9:00–18:00</Value>
        <Label>Location</Label><Value>Amsterdam<br/>Noord-Holland</Value>
        <Label>Image Credit</Label>
        <Credit>Van Gogh Museum via <a href="#" target="_blank" rel="noopener">Van Gogh Museum</a></Credit>
      </VisitorCard>
    </>
  );
}
