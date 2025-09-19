'use client';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 24px 20px 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

export const Topbar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--bg);
`;

export const TopbarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const IconRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconBtn = styled.button`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: none;
  border-radius: 50%;
  background: var(--surface);
  box-shadow: var(--shadow);
  cursor: pointer;
`;

export const SearchRow = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: var(--r-md);
  border: 1px solid rgba(10, 10, 10, 0.08);
  background: var(--surface);
  font-size: 15px;
`;

export const FilterBtn = styled.button`
  padding: 12px 16px;
  border-radius: var(--r-md);
  border: none;
  background: var(--ink);
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export const PageHeader = styled.div`
  display: grid;
  gap: 8px;

  h1 {
    font-size: var(--h2);
    margin: 0;
  }

  p {
    color: var(--muted);
    margin: 0;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  color: var(--muted);
`;

export const ChipIcon = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: var(--chip);
  display: grid;
  place-items: center;
  font-size: 16px;
`;

export const ExpoCard = styled.article`
  background: var(--surface);
  border-radius: var(--r-lg);
  padding: 24px;
  box-shadow: var(--shadow);
  display: grid;
  gap: 12px;
`;

export const ExpoTitle = styled.h3`
  margin: 0;
  font-size: 20px;
`;

export const ExpoMeta = styled.div`
  color: var(--muted);
  font-size: 14px;
`;

export const CTA = styled.button`
  justify-self: start;
  padding: 10px 18px;
  border-radius: 999px;
  border: none;
  background: var(--accent);
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export const VisitorCard = styled.section`
  background: var(--surface);
  border-radius: var(--r-lg);
  padding: 24px;
  box-shadow: var(--shadow);
  display: grid;
  gap: 16px;
`;

export const VisitorTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: var(--muted);
`;

export const Value = styled.p`
  margin: 0;
  font-weight: 600;
  color: var(--ink);
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const linkBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
`;

export const PrimaryLink = styled.a`
  ${linkBase}
  background: var(--accent);
  color: white;
`;

export const GhostLink = styled.a`
  ${linkBase}
  background: rgba(14, 58, 58, 0.08);
  color: var(--accent);
`;

export const Fab = styled.button`
  position: fixed;
  right: 24px;
  bottom: 32px;
  padding: 18px 28px;
  border-radius: 999px;
  border: none;
  background: var(--accent);
  color: white;
  font-weight: 700;
  box-shadow: var(--shadowDeep);
  cursor: pointer;
`;

export const Credit = styled.p`
  text-align: center;
  color: var(--muted);
  font-size: 12px;
`;
