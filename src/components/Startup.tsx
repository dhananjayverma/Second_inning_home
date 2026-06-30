import { Reveal, SectionHeading } from './Reveal';
import {
  loveCompanions, grandkidsActivities, aroundIndiaThemes, dreamPassportStamps,
  brainGymActivities, memoryCafeActivities, celebrityTypes, personalTVContent,
  hallOfLegends, legacyProjects, workshopActivities, gamingZone, safeAdventures,
  dressUpDays, foodFestivalCuisines, nightExperiences, timeCapsuleOptions,
  socialImpactOptions, wisdomLibraryTopics, brandIdentityUSPs,
} from '../data';
import { Heart, Sparkles, Stamp, Tv, Video, Crown, Clock, BellRing, ChefHat, ScanLine, Globe2, Library } from 'lucide-react';

// ===== LOVE & RELATIONSHIPS =====
export function LoveRelationships() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-cream-50 to-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold-500/60" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-600">Love & Relationships</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.08] tracking-tight text-forest-900">
              No one should feel<br /><span className="italic text-gradient-forest">alone here</span>
            </h2>
            <p className="mt-6 text-base md:text-lg leading-[1.7] text-forest-700/65">
              For seniors who feel alone, our Life Companion Program creates friendship circles
              and compatible companions — always consent-based, always respectful. Because
              connection is not a luxury. It's a necessity.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {loveCompanions.map((c) => (
                <div key={c.label} className="flex items-center gap-3 bg-white border border-forest-100 rounded-xl p-4 card-hover">
                  <div className="w-10 h-10 rounded-lg bg-forest-50 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-forest-700" />
                  </div>
                  <span className="text-sm font-medium text-forest-800">{c.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Seniors enjoying companionship"
                className="rounded-3xl shadow-2xl w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-forest-800 text-cream-50 rounded-2xl p-6 max-w-[240px] hidden md:block">
                <Heart className="w-6 h-6 text-gold-400 mb-2" />
                <p className="font-serif text-lg leading-snug">Couple Renewal Ceremony — vow renewals for couples who've spent 40–50 years together.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== GRANDKIDS EXPERIENCE =====
export function GrandkidsExperience() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src="https://images.pexels.com/photos/8430352/pexels-photo-8430352.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Grandparents with grandchildren"
              className="rounded-3xl shadow-2xl w-full h-[440px] object-cover order-2 lg:order-1"
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold-400/60" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-300">Grandkids Experience</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.08] tracking-tight text-white">
              Where generations<br /><span className="italic text-gradient-gold">meet and grow</span>
            </h2>
            <p className="mt-6 text-base md:text-lg leading-[1.7] text-cream-200/65">
              Grandkids Summer Camp brings grandchildren to stay with their grandparents —
              story nights, farming, pottery, tree plantation, and camping. And our
              Adopt-a-Grandparent program connects nearby students with seniors every weekend.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {grandkidsActivities.map((a) => (
                <div key={a.label} className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                  <a.icon className="w-6 h-6 text-gold-300 mb-2" />
                  <span className="text-sm font-medium text-cream-100">{a.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== AROUND INDIA CLUB + DREAM PASSPORT =====
export function AroundIndiaClub() {
  return (
    <section className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Around India Club"
            title={<>Every month, a new<br /><span className="italic">world to explore</span></>}
            subtitle="Each month we transform the campus around a theme — the food, the music, the culture, the workshops. Punjab, Kerala, Japan, and beyond."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {aroundIndiaThemes.map((theme, i) => (
            <Reveal key={theme.region} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl h-80 card-hover">
                <img src={theme.img} alt={theme.region} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white font-medium mb-3">{theme.region}</h3>
                  <div className="flex flex-wrap gap-2">
                    {theme.items.map((item) => (
                      <span key={item} className="text-xs bg-white/15 backdrop-blur-sm text-cream-100 px-3 py-1.5 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Dream Passport */}
        <Reveal delay={200}>
          <div className="mt-12 bg-gradient-to-r from-forest-800 to-forest-950 rounded-3xl p-8 lg:p-10 border border-forest-700">
            <div className="flex items-center gap-3 mb-6">
              <Stamp className="w-6 h-6 text-gold-400" />
              <h3 className="font-serif text-2xl text-white font-medium">Dream Passport</h3>
            </div>
            <p className="text-cream-200/70 mb-6 max-w-2xl">
              Every experience earns a passport stamp. Collect 100 stamps and enter the Hall of Memories.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {dreamPassportStamps.map((stamp) => (
                <span key={stamp} className="flex items-center gap-1.5 bg-gold-500/15 border border-gold-400/30 text-gold-200 text-sm px-4 py-2 rounded-full">
                  <Stamp className="w-3.5 h-3.5" />
                  {stamp}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ===== BRAIN WELLNESS =====
export function BrainWellness() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Brain Wellness"
            title={<>A gym for the mind,<br /><span className="italic">a café for the soul</span></>}
            subtitle="Cognitive fitness is treated with the same seriousness as physical fitness. Daily brain gym, memory cafés, and dementia prevention activities."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Memory Café */}
          <Reveal>
            <div className="bg-white border border-forest-100 rounded-3xl p-8 card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-serif text-2xl text-forest-900 font-medium">Memory Café</h3>
              </div>
              <p className="text-forest-700/65 mb-6 leading-relaxed">Special activities for dementia prevention — designed to trigger joy, recognition, and connection.</p>
              <div className="grid grid-cols-2 gap-3">
                {memoryCafeActivities.map((a) => (
                  <div key={a.label} className="flex items-center gap-2.5 bg-sand-50 border border-forest-100 rounded-xl p-3">
                    <a.icon className="w-5 h-5 text-forest-600" />
                    <span className="text-sm font-medium text-forest-800">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Brain Gym */}
          <Reveal delay={150}>
            <div className="bg-forest-800 rounded-3xl p-8 card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-gold-300" />
                </div>
                <h3 className="font-serif text-2xl text-white font-medium">Brain Gym</h3>
              </div>
              <p className="text-cream-200/65 mb-6 leading-relaxed">Daily cognitive exercises that keep the mind sharp, curious, and engaged.</p>
              <div className="grid grid-cols-2 gap-3">
                {brainGymActivities.map((a) => (
                  <div key={a.label} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3">
                    <a.icon className="w-5 h-5 text-gold-300" />
                    <span className="text-sm font-medium text-cream-100">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== CELEBRITY + TV + DOCUMENTARY + HALL OF LEGENDS =====
export function CelebrityExperiences() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-forest-900 to-forest-950 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/8 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Celebrity Experiences"
            title={<>Meet the people<br /><span className="italic">who inspired you</span></>}
            subtitle="Singers, actors, army officers, motivational speakers, authors, and spiritual leaders — invited for meet & greets throughout the year."
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {celebrityTypes.map((c, i) => (
            <Reveal key={c.label} delay={i * 50}>
              <div className="group flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-gold-400/40 transition-all card-hover">
                <div className="w-12 h-12 rounded-xl bg-gold-500/15 flex items-center justify-center mb-3">
                  <c.icon className="w-6 h-6 text-gold-300" />
                </div>
                <span className="text-sm font-medium text-cream-100">{c.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Personal TV + Documentary */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <Tv className="w-6 h-6 text-gold-300" />
                <h3 className="font-serif text-xl text-white font-medium">Personal TV Channel</h3>
              </div>
              <p className="text-cream-200/60 text-sm mb-5">An internal TV channel with daily content for and by residents.</p>
              <div className="flex flex-wrap gap-2">
                {personalTVContent.map((c) => (
                  <span key={c} className="text-xs bg-white/5 border border-white/10 text-cream-100 px-3 py-1.5 rounded-full">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <Video className="w-6 h-6 text-gold-300" />
                <h3 className="font-serif text-xl text-white font-medium">Documentary Team</h3>
              </div>
              <p className="text-cream-200/60 text-sm mb-3">Every resident gets a professionally edited mini-documentary — "My Life Journey" — as a gift to their family.</p>
              <p className="text-gold-200/80 text-sm italic">"My Journey" · "My Love Story" · "Life Lessons" · "Army Experience"</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function HallOfLegends() {
  return (
    <section className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Hall of Legends"
            title={<>A wall that honors<br /><span className="italic">a lifetime of achievement</span></>}
            subtitle="Teachers, army officers, doctors, entrepreneurs, scientists, and artists — every resident's legacy displayed with pride."
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {hallOfLegends.map((h, i) => (
            <Reveal key={h.label} delay={i * 60}>
              <div className="group flex flex-col items-center text-center bg-gradient-to-b from-forest-50 to-cream-50 border border-forest-100 rounded-2xl p-6 card-hover">
                <div className="w-14 h-14 rounded-full bg-forest-800 flex items-center justify-center mb-3 group-hover:bg-gold-500 transition-colors">
                  <h.icon className="w-7 h-7 text-gold-300 group-hover:text-forest-950 transition-colors" />
                </div>
                <span className="text-sm font-medium text-forest-800">{h.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== LEGACY + WORKSHOP + GAMING =====
export function LegacyWorkshopGaming() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Legacy Projects */}
          <Reveal>
            <div className="bg-white border border-forest-100 rounded-3xl p-7 card-hover h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-serif text-xl text-forest-900 font-medium">Legacy Projects</h3>
              </div>
              <p className="text-forest-700/60 text-sm mb-5">Every resident chooses a legacy to leave behind.</p>
              <div className="space-y-2.5">
                {legacyProjects.map((l) => (
                  <div key={l.label} className="flex items-center gap-2.5 bg-sand-50 border border-forest-100 rounded-lg p-2.5">
                    <l.icon className="w-4 h-4 text-forest-600" />
                    <span className="text-sm text-forest-800">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Workshop Studio */}
          <Reveal delay={100}>
            <div className="bg-forest-800 rounded-3xl p-7 card-hover h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-gold-300" />
                </div>
                <h3 className="font-serif text-xl text-white font-medium">Workshop Studio</h3>
              </div>
              <p className="text-cream-200/60 text-sm mb-5">Hands-on making — because creating with your hands never gets old.</p>
              <div className="space-y-2.5">
                {workshopActivities.map((w) => (
                  <div key={w.label} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg p-2.5">
                    <w.icon className="w-4 h-4 text-gold-300" />
                    <span className="text-sm text-cream-100">{w.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Gaming Zone */}
          <Reveal delay={200}>
            <div className="bg-white border border-forest-100 rounded-3xl p-7 card-hover h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-serif text-xl text-forest-900 font-medium">Gaming Zone</h3>
              </div>
              <p className="text-forest-700/60 text-sm mb-5">Senior-friendly games — virtual travel, bowling, golf, and classics.</p>
              <div className="space-y-2.5">
                {gamingZone.map((g) => (
                  <div key={g.label} className="flex items-center gap-2.5 bg-sand-50 border border-forest-100 rounded-lg p-2.5">
                    <g.icon className="w-4 h-4 text-forest-600" />
                    <span className="text-sm text-forest-800">{g.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== SAFE ADVENTURE + MEMORY SCANNER + DRESS-UP =====
export function SafeAdventure() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-700/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Safe Adventure"
            title={<>Thrills that know<br /><span className="italic">no age limit</span></>}
            subtitle="Senior-friendly adventures — designed for excitement without compromising safety."
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
          {safeAdventures.map((a, i) => (
            <Reveal key={a.label} delay={i * 40}>
              <div className="group flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-gold-400/40 transition-all card-hover">
                <div className="w-12 h-12 rounded-xl bg-gold-500/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <a.icon className="w-6 h-6 text-gold-300" />
                </div>
                <span className="text-sm font-medium text-cream-100 text-center">{a.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MemoryScannerDressUp() {
  return (
    <section className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Digital Memory Scanner */}
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold-500/60" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-600">Digital Memory Scanner</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-forest-900">
              Old photos,<br /><span className="italic text-gradient-forest">newly alive</span>
            </h2>
            <p className="mt-6 text-base md:text-lg leading-[1.7] text-forest-700/65">
              Bring your old albums. Our AI scanner restores faded photos, black & white
              images, and wedding pictures — preserving them digitally for generations.
            </p>
            <div className="mt-8 flex items-center gap-4 bg-white border border-forest-100 rounded-2xl p-5 card-hover">
              <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center">
                <ScanLine className="w-6 h-6 text-forest-700" />
              </div>
              <div>
                <div className="font-serif text-lg text-forest-900 font-medium">AI Photo Restoration</div>
                <div className="text-sm text-forest-600">Scan · Restore · Preserve · Share</div>
              </div>
            </div>
          </Reveal>

          {/* Dress-up Days */}
          <Reveal delay={150}>
            <div className="bg-gradient-to-br from-forest-800 to-forest-950 rounded-3xl p-8 border border-forest-700">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-gold-400" />
                <h3 className="font-serif text-2xl text-white font-medium">Dress-Up Days</h3>
              </div>
              <p className="text-cream-200/60 text-sm mb-6">Every day a new theme — because playfulness has no age.</p>
              <div className="space-y-2">
                {dressUpDays.map((d) => (
                  <div key={d.day} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
                    <span className="text-gold-300 text-sm font-semibold w-20">{d.day}</span>
                    <span className="text-cream-100 text-sm">{d.theme}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== FOOD FESTIVAL + NIGHT + TIME CAPSULE + SURPRISE =====
export function FoodFestival() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Food Festival"
            title={<>A new cuisine<br /><span className="italic">every week</span></>}
            subtitle="Our chefs take residents on a global culinary journey — no passport required."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {foodFestivalCuisines.map((cuisine) => (
              <span
                key={cuisine}
                className="bg-white border border-forest-100 text-forest-800 text-base font-medium px-6 py-3 rounded-full card-hover"
                style={{ animation: `fadeIn 0.5s ease-out both` }}
              >
                {cuisine}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function NightExperiences() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-forest-900 to-forest-950 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold-500/8 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Night Experiences"
            title={<>When the stars come out,<br /><span className="italic">the magic begins</span></>}
            subtitle="Bonfires, telescope sessions, moon walks, live guitar, open mic, and poetry — the nights here are as alive as the days."
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {nightExperiences.map((n, i) => (
            <Reveal key={n.label} delay={i * 50}>
              <div className="group flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-gold-400/40 transition-all card-hover">
                <div className="w-12 h-12 rounded-xl bg-gold-500/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <n.icon className="w-6 h-6 text-gold-300" />
                </div>
                <span className="text-sm font-medium text-cream-100">{n.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Time Capsule + Surprise Engine */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-gold-300" />
                <h3 className="font-serif text-xl text-white font-medium">Time Capsule</h3>
              </div>
              <p className="text-cream-200/60 text-sm mb-5">Residents write letters to the future. Opened after 5 years, 10 years, on a birthday, or an anniversary.</p>
              <div className="flex flex-wrap gap-2">
                {timeCapsuleOptions.map((t) => (
                  <span key={t} className="text-xs bg-gold-500/15 border border-gold-400/30 text-gold-200 px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <BellRing className="w-6 h-6 text-gold-300" />
                <h3 className="font-serif text-xl text-white font-medium">Surprise Engine</h3>
              </div>
              <p className="text-cream-200/60 text-sm mb-5">AI remembers birthdays, anniversaries, favorite songs, and favorite foods — then automatically plans surprises.</p>
              <div className="flex flex-wrap gap-2">
                {['Birthday', 'Anniversary', 'Favorite Song', 'Favorite Food'].map((t) => (
                  <span key={t} className="text-xs bg-white/5 border border-white/10 text-cream-100 px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== SOCIAL IMPACT + ALUMNI + MASTERCHEF + WISDOM LIBRARY + DIGITAL TWIN =====
export function SocialImpactAlumni() {
  return (
    <section className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold-500/60" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-600">Social Impact</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-forest-900">
              Purpose doesn't retire<br /><span className="italic text-gradient-forest">when you do</span>
            </h2>
            <p className="mt-6 text-base md:text-lg leading-[1.7] text-forest-700/65">
              Residents volunteer to teach poor children, mentor startups, give career guidance,
              teach language classes, and share financial literacy. And our alumni network keeps
              former residents' families connected through annual reunions and memory events.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {socialImpactOptions.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 bg-white border border-forest-100 rounded-xl p-3.5 card-hover">
                  <s.icon className="w-5 h-5 text-forest-600" />
                  <span className="text-sm font-medium text-forest-800">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-1 gap-6">
              {/* MasterChef Seniors */}
              <div className="bg-gradient-to-br from-gold-50 to-sand-50 border border-gold-200 rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <ChefHat className="w-7 h-7 text-gold-600" />
                  <h3 className="font-serif text-xl text-forest-900 font-medium">MasterChef Seniors</h3>
                </div>
                <p className="text-forest-700/65 text-sm">Cooking competitions, published recipe books, and a YouTube series — residents become culinary stars.</p>
              </div>
              {/* Wisdom Library */}
              <div className="bg-white border border-forest-100 rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <Library className="w-7 h-7 text-forest-700" />
                  <h3 className="font-serif text-xl text-forest-900 font-medium">Wisdom Library</h3>
                </div>
                <p className="text-forest-700/65 text-sm mb-4">Every resident contributes quotes, advice, life lessons, mistakes, and success stories — searchable by topic.</p>
                <div className="flex flex-wrap gap-2">
                  {wisdomLibraryTopics.map((t) => (
                    <span key={t} className="text-xs bg-forest-50 text-forest-700 px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              {/* Digital Twin */}
              <div className="bg-forest-800 rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <Globe2 className="w-7 h-7 text-gold-300" />
                  <h3 className="font-serif text-xl text-white font-medium">Digital Twin of the Campus</h3>
                </div>
                <p className="text-cream-200/60 text-sm">An interactive 3D map — walk through gardens, enter rooms, visit the café, see the event hall, and explore virtually before admission.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== BRAND IDENTITY (10 USPs) =====
export function BrandIdentity() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-forest-950 to-forest-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/8 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="The Second Innings Promise"
            title={<>Ten reasons this becomes<br /><span className="italic text-gradient-gold">India's most premium senior living brand</span></>}
            subtitle="These aren't features. They're the foundation of a movement — a life-after-retirement movement."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {brandIdentityUSPs.map((usp, i) => (
            <Reveal key={usp.title} delay={i * 50}>
              <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold-400/40 transition-all card-hover">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl text-gold-400/40 font-light editorial-num">{usp.num}</span>
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <usp.icon className="w-5 h-5 text-gold-300" />
                  </div>
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-2 leading-tight">{usp.title}</h3>
                <p className="text-sm text-cream-200/60 leading-relaxed">{usp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Final promise */}
        <Reveal delay={300}>
          <div className="mt-16 text-center">
            <p className="font-serif italic text-2xl md:text-3xl text-gold-200/90 font-light max-w-3xl mx-auto leading-snug">
              "No one grows old here. Everyone keeps living."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
