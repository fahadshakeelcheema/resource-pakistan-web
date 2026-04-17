# Manus to Independent Stack Migration Plan

## Executive Summary

This document outlines the complete strategy to migrate the Resource Pakistan website from the Manus platform to a fully independent, self-hosted solution using exclusively free and open-source technologies. The migration will maintain all current functionality while eliminating platform dependencies and ongoing costs.

## Current Architecture (Manus-Dependent)

| Component | Current Solution | Cost |
|-----------|------------------|------|
| **Authentication** | Manus OAuth | Free (platform-provided) |
| **Frontend Hosting** | Manus platform | Free tier |
| **Backend Hosting** | Manus platform | Free tier |
| **Database** | Manus MySQL (managed) | Free tier |
| **File Storage** | Manus S3 CDN | Free tier |
| **Email Service** | SendGrid (via Manus) | Free tier |
| **SSL/TLS** | Manus automatic | Included |
| **Domain Management** | GoDaddy (external) | Paid (user's responsibility) |

## Target Architecture (Independent Stack)

| Component | Replacement Solution | Cost | Notes |
|-----------|---------------------|------|-------|
| **Authentication** | JWT + bcrypt (self-hosted) | Free | Built into backend |
| **Frontend Hosting** | Render.com (free tier) | Free | 0.5 GB RAM, auto-deploys from Git |
| **Backend Hosting** | Render.com (free tier) | Free | Shared CPU, 0.5 GB RAM |
| **Database** | Neon PostgreSQL (free tier) | Free | 3 GB storage, serverless |
| **File Storage** | MinIO (self-hosted on Render) | Free | S3-compatible object storage |
| **Email Service** | Resend (free tier) | Free | 100 emails/day, or self-host Mailgun |
| **SSL/TLS** | Let's Encrypt (automatic via Render) | Free | Auto-renewed |
| **Domain Management** | GoDaddy (unchanged) | Paid (user's responsibility) | No change needed |

## Migration Phases

### Phase 1: Planning & Documentation ✓
- Document current Manus integrations
- Identify all dependencies
- Create migration checklist
- Plan rollback strategy

### Phase 2: Authentication System
**Current:** Manus OAuth via `/api/oauth/callback`
**Target:** JWT-based authentication with email/password login

**Changes Required:**
- Remove Manus OAuth routes
- Implement bcrypt password hashing
- Create JWT token generation/validation
- Add login/register endpoints
- Update frontend auth hooks
- Migrate user session management

**Files to Modify:**
- `server/_core/oauth.ts` → Remove Manus OAuth
- `server/routers.ts` → Add auth procedures
- `client/src/_core/hooks/useAuth.ts` → Update auth logic
- `drizzle/schema.ts` → Add password field to users table

### Phase 3: File Storage
**Current:** Manus S3 CDN (manuscdn.com URLs)
**Target:** MinIO self-hosted on Render

**Changes Required:**
- Replace S3 client with MinIO client
- Update storage endpoints
- Migrate existing CDN images to MinIO
- Update all image URLs in components
- Configure CORS for MinIO

**Files to Modify:**
- `server/storage.ts` → Use MinIO instead of AWS S3
- All component image references

### Phase 4: Email Service
**Current:** SendGrid via Manus
**Target:** Resend (free tier) or self-hosted Mailgun

**Changes Required:**
- Replace SendGrid client
- Update email templates
- Configure SMTP credentials
- Test contact form submissions

**Files to Modify:**
- `server/routers.ts` → Email sending logic
- Environment variables

### Phase 5: Remove Manus Integrations
**Current:** LLM, Maps, Notifications, Analytics
**Target:** Remove or replace with free alternatives

**Changes Required:**
- Remove `server/_core/llm.ts` (if not used)
- Remove `server/_core/map.ts` (if not used)
- Remove `server/_core/notification.ts` (if not used)
- Remove analytics integration
- Clean up unused dependencies

### Phase 6: Database Setup
**Current:** Manus MySQL
**Target:** Neon PostgreSQL (free tier)

**Changes Required:**
- Create Neon account and project
- Generate connection string
- Update DATABASE_URL
- Run migrations: `pnpm db:push`
- Verify data integrity

### Phase 7: Deployment
**Current:** Manus platform
**Target:** Render.com (free tier)

**Changes Required:**
- Create Render account
- Connect GitHub repository
- Configure environment variables
- Set up automatic deployments
- Configure custom domain
- Test live deployment

### Phase 8: Testing & Verification
- Test all pages and functionality
- Verify authentication flow
- Test contact form and email
- Check image loading
- Validate SEO elements
- Performance testing

### Phase 9: Documentation
- Create deployment guide
- Document environment variables
- Create maintenance procedures
- Document backup strategy

## Technology Stack Details

### Authentication (JWT + bcrypt)
```
Frontend: React hooks for login/logout/session
Backend: Express middleware for JWT validation
Database: User table with hashed passwords
Security: Secure HTTP-only cookies for tokens
```

### Database (Neon PostgreSQL)
```
Free Tier: 3 GB storage, 20 connections
Serverless: Auto-scales, no maintenance
Connection: Standard PostgreSQL connection string
Backup: Automatic daily backups (7-day retention)
```

### File Storage (MinIO)
```
Self-hosted: Runs on Render backend
S3-compatible: Drop-in replacement for AWS S3
Storage: Limited by Render disk space (~10 GB)
Access: Public bucket for static assets
```

### Email (Resend)
```
Free Tier: 100 emails/day
API: Simple REST API
Sender: noreply@resourcepakistan.com (custom domain)
Templates: HTML email support
```

### Hosting (Render.com)
```
Frontend: Static site (React build)
Backend: Node.js web service
Database: External (Neon)
Storage: External (MinIO)
SSL: Automatic Let's Encrypt
Deployments: Git-based (auto-deploy on push)
```

## Free Tier Limitations & Workarounds

| Limitation | Impact | Workaround |
|-----------|--------|-----------|
| Render spins down after 15 min inactivity | Cold start (30s) | Acceptable for low-traffic site |
| Neon 3 GB storage | Sufficient for current data | Monitor usage, archive old data if needed |
| Resend 100 emails/day | Limited contact form volume | Acceptable for institutional site |
| MinIO storage on Render | ~10 GB available | Sufficient for current 29 images + future assets |

## Rollback Strategy

If migration encounters critical issues:
1. Keep Manus deployment active during transition
2. Test independent stack thoroughly before cutover
3. Update DNS to point back to Manus if needed
4. Maintain database backups before migration

## Timeline Estimate

- Phase 1: 1 hour (planning)
- Phase 2: 3-4 hours (authentication)
- Phase 3: 2-3 hours (storage)
- Phase 4: 1-2 hours (email)
- Phase 5: 1 hour (cleanup)
- Phase 6: 1 hour (database)
- Phase 7: 2-3 hours (deployment)
- Phase 8: 2 hours (testing)
- Phase 9: 1 hour (documentation)

**Total: 14-18 hours of development work**

## Cost Analysis

### Current (Manus Free Tier)
- Manus platform: Free
- GoDaddy domain: ~$12/year
- **Total: ~$1/month**

### After Migration (Independent Stack)
- Render.com: Free
- Neon PostgreSQL: Free
- Resend email: Free (up to 100/day)
- GoDaddy domain: ~$12/year (unchanged)
- **Total: ~$1/month (no increase)**

## Success Criteria

- ✓ All pages load and render correctly
- ✓ Authentication system works (login/logout)
- ✓ Contact form submits and sends emails
- ✓ Images load from MinIO storage
- ✓ Database queries function properly
- ✓ SEO metadata and structured data intact
- ✓ Domain resolves correctly
- ✓ HTTPS/SSL working
- ✓ No Manus dependencies remain
- ✓ Deployment automated via Git

## Next Steps

1. Proceed with Phase 2 (Authentication System)
2. Create accounts on Neon, Render, Resend
3. Set up GitHub repository for deployment
4. Begin code refactoring
