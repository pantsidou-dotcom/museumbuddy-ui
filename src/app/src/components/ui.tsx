'use client';
import styled from 'styled-components';

/* Topbar */
export const Topbar = styled.header`
  position: sticky; top: 0; z-index: 10;
  background: var(--bg);
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid rgba(0,0,0,.05);
`;
export const TopbarInner = styled.div`
  display:flex; align-items:center; justify-content:space-between;
  gap: 12px; padding: 12px 24px;
`;
export const Logo = styled.div` font-weight:900; letter-spacing:.02em; `;
export const IconRow = styled.div` display:flex; gap:10px; `;
export const IconBtn = styled.button`
  width:40px; height:40px; display:grid; place-items:center; cursor:pointer;
  border-radius:12px; background:#fff; border:1px solid rgba(0,0,0,.06);
  box-shadow: var(--shadow);
`;

/* Search + Filters */
export const SearchRow = styled.div`
  display:flex; gap:14px; padding: 16px 24px 10px;
`;
export const SearchInput = styled.input`
  flex:1; background: var(--surface); border:1px solid rgba(0,0,0,.06);
  border-radius:16px; padding:14px 16px; box-shadow: var(--shadow);
  outline:none; font-size:16px;
`;
export const FilterBtn = styled.button`
  border: none; cursor: pointer; border-radius: 16px; padding: 12px 16px;
  background: var(--accent); color: #fff; font-weight:700;
  box-shadow: 0 8px 20px rgba(14,58,58,.25);
`;

/* Page Header */
export const PageHeader = styled.div`
  padding: 26px 24px 8px;
  .eyebrow{ color: var(--muted); letter-spacing:.12em; text-transform:uppercase; font-size: var(--label); }
  h1{ font-size: var(--h1); font-weight:800; line-height:1.05; letter-spacing:-.02em; margin:.25rem 0 .75rem; }
  p{ color:#374151; }
`;

/* Section header */
export const SectionHeader = styled.div`
  display:flex; align-items:center; justify-content:space-between;
  padding: 8px 24px 6px; margin: 6px 0 8px;
  h2{ font-size: var(--h2); font-weight:800; letter-spacing:-.02em; }
`;
export const ChipIcon = styled.button`
  width:44px; height:44px; display:grid; place-items:center; cursor:pointer;
  border-radius:12px; background:#fff; border:1px solid rgba(0,0,0,.06);
  box-shadow: var(--shadow);
`;

/* Exposition card */
export const ExpoCard = styled.article`
  background: var(--teal-900); color:#fff; border-radius: var(--r-lg);
  margin: 0 24px 20px; padding: 22px; position: relative;
  box-shadow: var(--shadowDeep); transition: transform .2s ease;
  &:hover{ transform: translateY(-2px); }
`;
export const Fab = styled.button`
  position:absolute; right:16px; top:16px; width:46px; height:46px; cursor:pointer;
  border-radius:999px; display:grid; place-items:center;
  background: rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.18);
  color:#fff; backdrop-filter: blur(6px);
`;
export const ExpoMeta = styled.div`
  display:flex; gap:10px; flex-wrap:wrap;
  font-size: var(--label); letter-spacing:.12em; text-transform: uppercase;
  color: rgba(255,255,255,.85);
`;
export const ExpoTitle = styled.h3`
  margin: 10px 0 16px; font-size: 22px; font-weight:800; line-height:1.25;
`;
export const CTA = styled.button`
  width:100%; border:0; border-radius:18px; padding:16px 18px; cursor:pointer;
  background:#0A0A0A; color:#fff; font-weight:700;
  box-shadow: 0 10px 20px rgba(0,0,0,.35);
  small{ display:block; font-size:13px; font-weight:500; opacity:.8; }
  &:active{ transform: translateY(1px) scale(.99); background:#0C0C0C; }
`;

/* Visitor Information */
export const VisitorCard = styled.section`
  background:#FFFFFF; color:#0A0A0A; border-radius:var(--r-lg);
  margin: 6px 24px 26px; padding: 22px;
  border: 1px solid rgba(0,0,0,.05); box-shadow: var(--shadow);
`;
export const VisitorTitle = styled.h3` font-size:22px; font-weight:800; margin: 4px 0 18px; letter-spacing:-.01em; `;
export const ButtonRow = styled.div`
  display:grid; grid-template-columns:1fr; gap:12px; margin-bottom:18px;
  @media(min-width:480px){ grid-template-columns:1fr 1fr; }
`;
export const PrimaryLink = styled.a`
  display:inline-flex; align-items:center; justify-content:center; text-decoration:none;
  padding:14px 16px; border-radius:18px; background:#0A0A0A; color:#fff; font-weight:700;
  box-shadow: 0 10px 22px rgba(0,0,0,.25);
`;
export const GhostLink = styled.a`
  display:inline-flex; align-items:center; justify-content:center; text-decoration:none;
  padding:14px 16px; border-radius:18px; background:#F3F4F6; color:#111827; font-weight:700;
  border:1px solid rgba(0,0,0,.06);
`;
export const Label = styled.div`
  margin-top:8px; color:var(--muted); letter-spacing:.12em; text-transform:uppercase; font-size:var(--label);
`;
export const Value = styled.p` margin:6px 0 14px; font-size:17px; line-height:1.5; `;
export const Credit = styled.p`
  margin-top:10px; font-size:14px; color:#4B5563;
  a{ color:var(--accent); font-weight:600; text-decoration:underline; }
`;
