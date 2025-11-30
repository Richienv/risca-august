# Implementation Plan: Landing Page Transformation

This plan outlines the steps to transform the current landing page into a single-page brochure focused on "Financial Consultant" career opportunities, removing specific "Asuransi" branding, and updating income details as requested.

## Phase 1: Structural Simplification (Single Page Brochure)
- [ ] **Remove WebGL Animation**: 
  - Remove `<WebGLShader />` from `webgl-hero.tsx` and other sections to ensure a clean, static background.
- [ ] **Consolidate Navigation**: 
  - Update `Navbar` to remove links to separate pages (`/pricing`, `/benefits`, etc.).
  - Ensure the page functions as a single continuous scroll.
- [ ] **Simplify Call-to-Actions**: 
  - Redirect buttons to scroll to the contact section or open a WhatsApp link instead of navigating to internal pages.

## Phase 2: Rebranding & SEO (Financial Consultant Focus)
- [ ] **Update Metadata (`src/app/layout.tsx`, `src/lib/config.ts`)**:
  - **Title**: "Risca Agustine - Financial Consultant & Career Opportunity"
  - **Keywords**: Focus on "Financial Consultant", "Peluang Karir", "Bisnis", "Mentoring", "Jakarta".
  - **Description**: Emphasize "Peluang Karir", "Mentoring Langsung", and "Income Unlimited".
- [ ] **Text Replacement**:
  - Replace "Asuransi" / "Manulife" with "Bisnis", "Consultancy", "Partner", or "Program" in visible text.
  - Replace "Agen" with "Consultant" or "Business Partner".

## Phase 3: Content & Income Detail Updates
### A. Hero & Key Selling Points
- [ ] **Update Hero Text**:
  - Highlight: "Di Mentorin Langsung", "Penghasilan Besar Waktu Flexible".
  - Subtext: "Kerja penuh makna, bisa bantu orang, bisa produksi terbaik."
  - Feature: "Karir Jangka Panjang & Bisa Delegasi".

### B. Income Breakdown & Benefits (New Structure)
- [ ] **Add/Update Income Details**:
  - **Monthly Allowance**: "3.5 Jt + 1 Jt".
  - **Target**: Rename "FYP" to "Target Bulanan" (4.2 Jt/bulan).
  - **Quarterly Bonus (QBP)**: Rename to "Bonus 3 Bulan". Detail: "Total income 17.5 Jt (setengah)".
  - **Referral Bonus**: "Bonus Referral 25%".
  - **Special Track**: "Khusus Banking & Insurance: Gaji Pokok 3-12 Jt (Target Kecil)".
  - **Personal Sales**: "Hitungan penghasilan jadi 4.5 Jt, Target 300 Jt, Bonus 5 Jt (jika capai 2 bulan)".
- [ ] **Income Comparison Visual**:
  - Add a section showing "Income Sebelum vs Sesudah Join" (2x / 3x / 4x lipat).
- [ ] **Remove/Hide**:
  - Remove "13 Level Tier" table.
  - Remove "Financing Development Program".
  - Remove "Life Entrepreneur" (Less preneu).

## Phase 4: Testimonial Refinement
- [ ] **Sanitize Testimonials (`public/testimonial-infomration.json`)**:
  - Remove specific income figures (e.g., "Rp 45 Juta/Bulan", "1M").
  - Focus stories on lifestyle changes, freedom, and personal growth.

## Phase 5: Final Cleanup
- [ ] **Remove Unused Sections**: 
  - Ensure no "orphan" sections remain from the old multi-page layout.
- [ ] **Visual Polish**: 
  - Verify the design looks premium and clean without the background animation.
