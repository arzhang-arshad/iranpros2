import { FC } from 'react'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import type { Theme } from '@mui/material/styles'

interface NavigationLink {
  label: string
  href: string
}

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
}

interface Feature {
  title: string
  description: string
}

interface FeaturesSectionProps {
  features: Feature[]
}

interface PreviewMetric {
  label: string
  value: string
}

interface PreviewSectionProps {
  title: string
  subtitle: string
  metrics: PreviewMetric[]
}

interface FooterProps {
  company: string
  contactEmail: string
}

const navLinks: NavigationLink[] = [
  { label: 'ویژگی‌ها', href: '#features' },
  { label: 'قیمت‌گذاری', href: '#pricing' },
  { label: 'ورود', href: '#login' },
  { label: 'ثبت‌نام', href: '#signup' },
]

const features: Feature[] = [
  {
    title: 'اشتراک‌گذاری در هرجا',
    description: 'کارت خود را با لینک، QR یا NFC به سادگی و بدون محدودیت با دیگران به اشتراک بگذار.',
  },
  {
    title: 'طراحی قابل سفارشی‌سازی',
    description: 'رنگ، فونت و چیدمان کارت را مطابق هویت برند خود تنظیم کن و همیشه حرفه‌ای دیده شو.',
  },
  {
    title: 'تحلیل و آمار پیشرفته',
    description: 'بدان چه تعداد بازدید داشته‌ای و تصمیم‌های بهتر بازاریابی بگیر.',
  },
]

const previewMetrics: PreviewMetric[] = [
  { label: 'بازدید هفتگی', value: '۳۲۰+' },
  { label: 'اشتراک‌گذاری', value: '۹۸' },
  { label: 'نرخ تعامل', value: '۷۲٪' },
]

const HeroSection: FC<HeroSectionProps> = ({ title, subtitle, ctaLabel, ctaHref }) => (
  <Box
    component="section"
    sx={(theme: Theme) => ({
      py: { xs: 10, md: 14 },
      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      color: theme.palette.primary.contrastText,
    })}
  >
    <Container maxWidth="lg">
      <Stack spacing={3} sx={{ textAlign: { xs: 'center', md: 'center' }, alignItems: 'center' }}>
        <Typography component="h1" variant="h3" sx={{ fontWeight: 800, maxWidth: 720 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 300, maxWidth: 640, lineHeight: 1.8 }}>
          {subtitle}
        </Typography>
        <Button
          component="a"
          href={ctaHref}
          variant="contained"
          color="info"
          size="large"
          sx={{ px: 6, py: 2, borderRadius: 3, fontSize: '1.1rem', fontWeight: 600 }}
        >
          {ctaLabel}
        </Button>
      </Stack>
    </Container>
  </Box>
)

const FeatureCard: FC<Feature> = ({ title, description }) => (
  <Card
    elevation={0}
    sx={{
      height: '100%',
      borderRadius: 4,
      border: '1px solid',
      borderColor: 'divider',
      bgcolor: 'background.paper',
    }}
  >
    <CardContent>
      <Typography component="h3" variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
)

const FeaturesSection: FC<FeaturesSectionProps> = ({ features: featureItems }) => (
  <Box
    component="section"
    id="features"
    sx={{
      py: { xs: 8, md: 10 },
      bgcolor: 'background.default',
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={6} sx={{ textAlign: 'center' }}>
        <Stack spacing={1}>
          <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
            چرا کارت دیجیتال؟
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            با ابزارهای هوشمند ما، ارتباطات خود را موثرتر و حرفه‌ای‌تر مدیریت کن.
          </Typography>
        </Stack>
        <Grid2 container spacing={3}>
          {featureItems.map((featureItem) => (
            <Grid2 key={featureItem.title} size={{ xs: 12, md: 4 }}>
              <FeatureCard {...featureItem} />
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </Container>
  </Box>
)

const PreviewSection: FC<PreviewSectionProps> = ({ title, subtitle, metrics }) => (
  <Box
    component="section"
    id="preview"
    sx={{
      py: { xs: 8, md: 10 },
    }}
  >
    <Container maxWidth="lg">
      <Grid2 container spacing={6} alignItems="center">
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Stack spacing={2}>
            <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              {subtitle}
            </Typography>
            <Divider sx={{ my: 2, borderColor: 'divider' }} />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              {metrics.map((metric) => (
                <Paper
                  key={metric.label}
                  variant="outlined"
                  sx={{
                    flex: 1,
                    px: 3,
                    py: 2,
                    borderRadius: 3,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {metric.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {metric.label}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={8}
            sx={(theme: Theme) => ({
              p: 4,
              borderRadius: 4,
              background: `linear-gradient(160deg, ${theme.palette.secondary.light} 0%, #ffffff 90%)`,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            })}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'primary.contrastText',
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                م
              </Box>
              <Stack spacing={0.5}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  مهسا عباسی
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  مدیر توسعه بازار | Mahsa.co
                </Typography>
              </Stack>
            </Stack>
            <Divider sx={{ borderColor: 'divider' }} />
            <Stack spacing={1.5}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                اطلاعات تماس
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">تلفن: ۰۹۱۲۱۲۳۴۵۶۷</Typography>
                <Typography variant="body2">ایمیل: hello@mahsa.co</Typography>
                <Typography variant="body2">وب‌سایت: mahsa.co</Typography>
              </Stack>
            </Stack>
            <Divider sx={{ borderColor: 'divider' }} />
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              «با کارت دیجیتال ایران‌پروس در کمتر از یک دقیقه ارتباط برقرار کن و همیشه یک قدم جلوتر باش!»
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: 3 }}>
                ذخیره در مخاطبین
              </Button>
              <Button variant="outlined" color="primary" fullWidth sx={{ borderRadius: 3 }}>
                اشتراک‌گذاری
              </Button>
            </Stack>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  </Box>
)

const FooterSection: FC<FooterProps> = ({ company, contactEmail }) => (
  <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'grey.100', py: 4, mt: 'auto' }}>
    <Container maxWidth="lg">
      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
      >
        <Typography variant="body2">© {new Date().getFullYear()} {company}. همهٔ حقوق محفوظ است.</Typography>
        <Link
          href={`mailto:${contactEmail}`}
          color="inherit"
          underline="hover"
          sx={{ fontWeight: 500 }}
        >
          تماس: {contactEmail}
        </Link>
      </Stack>
    </Container>
  </Box>
)

const LandingPage: FC = () => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'background.default',
      color: 'text.primary',
    }}
  >
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          ایران‌پروس کارت
        </Typography>
        <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component="a"
              href={link.href}
              variant="text"
              color="inherit"
              sx={{ borderRadius: 2, fontWeight: 500 }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
          <Button
            component="a"
            href="#login"
            variant="text"
            color="inherit"
            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
          >
            ورود
          </Button>
          <Button
            component="a"
            href="#signup"
            variant="contained"
            color="primary"
            sx={{ borderRadius: 999, px: 3 }}
          >
            ثبت‌نام
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>

    <Box component="main" sx={{ flexGrow: 1 }}>
      <HeroSection
        title="کارت ویزیت دیجیتالی خودت رو بساز!"
        subtitle="در کمتر از چند دقیقه کارت دیجیتالی خود را طراحی کن، به اشتراک بگذار و هرجا که هستی حرفه‌ای دیده شو."
        ctaLabel="شروع کن"
        ctaHref="#signup"
      />
      <FeaturesSection features={features} />
      <PreviewSection
        title="پیش‌نمایش کارت هوشمند"
        subtitle="تمام اطلاعات کلیدی کسب‌وکار تو در یک کارت زیبا و تعاملی نمایش داده می‌شود. با یک لمس ساده، دیگران شماره تلفن، ایمیل و شبکه‌های اجتماعی تو را ذخیره می‌کنند."
        metrics={previewMetrics}
      />
    </Box>

    <FooterSection company="ایران‌پروس" contactEmail="support@iranpros.ir" />
  </Box>
)

export default LandingPage

