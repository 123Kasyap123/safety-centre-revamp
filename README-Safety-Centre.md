# FRND Safety Centre - Documentation

## Overview

The FRND Safety Centre is a comprehensive, modular React application built with TypeScript, Tailwind CSS, and shadcn/ui components. It provides a complete safety information hub with transparency reports, community guidelines, compliance information, and external resources.

## Architecture

### Page Structure
- **Location**: `/src/pages/Safety.tsx`
- **Route**: `/safety`
- **Components**: Modular sections in `/src/components/safety/`
- **Content**: Editable JSON configuration in `/src/content/safety.json`

### Component Breakdown

| Component | File | Purpose |
|-----------|------|---------|
| `Hero` | `src/components/safety/Hero.tsx` | Main landing section with CTAs |
| `MultiLayerSafety` | `src/components/safety/MultiLayerSafety.tsx` | 4-card grid of safety features |
| `CommunityGuidelines` | `src/components/safety/CommunityGuidelines.tsx` | Guidelines with expandable restrictions |
| `TransparencyReports` | `src/components/safety/TransparencyReports.tsx` | Stats and downloadable reports |
| `ComplianceGovernance` | `src/components/safety/ComplianceGovernance.tsx` | Team contact information |
| `FAQs` | `src/components/safety/FAQs.tsx` | Accordion-style Q&A |
| `ExternalResources` | `src/components/safety/ExternalResources.tsx` | Government helplines and portals |

## Monthly Update Workflow

### 1. Updating Transparency Statistics

**File**: `src/content/safety.json`

Update these fields in the `config` section:

```json
{
  "config": {
    "latest_month": "January",           // Current report month
    "latest_year": "2025",               // Current report year  
    "latest_compliance_percent": "95.45", // Latest compliance %
    "alvarez_compliance_percent": "95"    // Alvarez study % (quarterly)
  }
}
```

### 2. Adding New Transparency Reports

**Location**: `src/components/safety/TransparencyReports.tsx`

Update the `mockReports` array (line ~18):

```typescript
const mockReports = [
  { 
    month: "January", 
    year: "2025", 
    compliance: "95.45%", 
    date: "2025-01" 
  },
  // ... existing reports
];
```

**PDF File Management**:
- Store PDF files in: `public/transparency-reports/`
- Naming convention: `YYYY-MM-transparency-report.pdf`
- Example: `2025-01-transparency-report.pdf`

### 3. Updating Contact Information

**File**: `src/content/safety.json`

Update officer details in the `config` section:

```json
{
  "config": {
    "cco_name": "Dr. Jane Smith",
    "cco_email": "compliance@frnd.app",
    "grievance_officer_name": "Mr. John Doe",
    "grievance_officer_email": "grievance@frnd.app",
    // ... other officer details
  }
}
```

### 4. Updating Helpline Information

**File**: `src/content/safety.json`

```json
{
  "config": {
    "helpline_number": "+91-XXXX-XXXXXX",
    "helpline_hours": "9 AM - 9 PM"
  }
}
```

## Content Management

### Editing Copy Without Code Changes

All user-facing text is stored in `src/content/safety.json`. No code changes required for:

- Headlines and descriptions
- FAQ questions and answers
- Contact information
- Statistics and percentages
- Button labels and CTAs

### Variable Substitution

The system automatically replaces placeholders with actual values:

- `{{helpline_number}}` → Actual phone number
- `{{latest_month}}` → Current report month
- `{{latest_compliance_percent}}` → Latest compliance percentage
- `{{cco_name}}` → Chief Compliance Officer name

## SEO & Analytics

### Meta Tags
The page includes comprehensive SEO meta tags:
- Title, description, keywords
- OpenGraph tags for social sharing
- Twitter Card tags

### Analytics Events
Built-in tracking for:
- `safety_centre_view` - Page loads
- `safety_cta_read_more` - Main CTA clicks
- `safety_cta_view_report` - Transparency report clicks
- `download_transparency_report` - PDF downloads
- `external_resource_click` - External link clicks

## Accessibility Features

### WCAG 2.1 AA Compliance
- Semantic HTML structure
- Proper heading hierarchy (H1 → H6)
- High contrast color ratios
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- ARIA labels and descriptions

### Testing
Run accessibility audits using:
```bash
npm run lighthouse
# Or use browser dev tools → Lighthouse → Accessibility
```

## Development

### Running Locally
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

### Adding New Sections

1. Create component in `src/components/safety/`
2. Add content structure to `safety.json`
3. Import and use in `src/pages/Safety.tsx`
4. Update this README

## Performance Optimization

### Image Handling
- All images should be optimized (WebP format preferred)
- Use lazy loading for images below the fold
- Implement proper alt text for accessibility

### Code Splitting
Components are automatically code-split by the build system.

### Lighthouse Targets
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥90
- SEO: ≥95

## Internationalization Ready

### Structure for Multiple Languages
Content is structured to support easy translation:

```
src/content/
├── safety-en.json    // English (default)
├── safety-hi.json    // Hindi
└── safety-te.json    // Telugu
```

Legal content (officer names, emails) should remain untranslated.

## Deployment Checklist

Before deploying updates:

- [ ] Update transparency statistics
- [ ] Add new PDF reports to public folder
- [ ] Test all download links
- [ ] Verify contact information
- [ ] Run Lighthouse audit
- [ ] Test accessibility with screen reader
- [ ] Verify mobile responsiveness
- [ ] Check analytics events in browser console

## Support

For technical issues or content updates:
- Development: Technical team
- Content updates: Content/Marketing team
- Compliance data: Legal/Compliance team

## Security Considerations

- All external links open in new tabs with `rel="noopener noreferrer"`
- Email links use `mailto:` protocol
- Phone links use `tel:` protocol
- PDF files served from secure CDN
- No sensitive data in client-side code

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions  
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Android Chrome

---

Last updated: December 2024
Version: 1.0.0
