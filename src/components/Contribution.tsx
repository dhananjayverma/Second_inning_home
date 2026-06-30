import { useState } from 'react';
import { Reveal, SectionHeading } from './Reveal';
import { creativeFeatures, contributionPrograms, sustainabilityFeatures, rewardActions, rewardRedemptions } from '../data';
import { Medal, Coins, Sparkles } from 'lucide-react';

export function CreativeEcosystem() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Creative Ecosystem"
            title={<>A stage for every<br />hidden talent</>}
            subtitle="Art galleries, talent shows, a podcast studio, and a YouTube studio — residents don't just pass time here, they create."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creativeFeatures.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 80}>
              <div className="group h-full bg-sand-50 border border-forest-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-forest-300 transition-all hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-forest-700" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-forest-900 font-semibold mb-1.5">{feat.title}</h3>
                  <p className="text-sm text-forest-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContributionEcosystem() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-forest-50 to-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contribution Programs"
            title={<>Wisdom shared is<br />wisdom multiplied</>}
            subtitle="Retired professionals mentor startups, teach the next generation, and volunteer — because purpose doesn't retire when you do."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {contributionPrograms.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 100}>
              <div className="group h-full bg-white border border-forest-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-forest-300 transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-forest-700" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-forest-900 font-semibold mb-2">{feat.title}</h3>
                  <p className="text-sm text-forest-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Sustainability() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-700/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Sustainability"
            title={<>A campus that gives back<br />to the earth</>}
            subtitle="Solar energy, rainwater harvesting, organic farming, plastic-free living, electric vehicles, and composting — we're building a future, not just living in one."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {sustainabilityFeatures.map((feat, i) => (
            <Reveal key={feat.label} delay={i * 50}>
              <div className="group flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-gold-400/40 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-forest-700/50 group-hover:bg-gold-500/30 flex items-center justify-center mb-3 transition-colors">
                  <feat.icon className="w-6 h-6 text-gold-300" />
                </div>
                <span className="text-sm font-medium text-forest-50">{feat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RewardSystem() {
  const [points, setPoints] = useState(0);

  const earn = (amount: number) => {
    setPoints((p) => p + amount);
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gold-50 via-sand-50 to-forest-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            eyebrow="Reward System"
            title={<>Joy has a currency,<br />and it's called living</>}
            subtitle="Residents earn points for attending yoga, joining events, planting trees, reading books, and helping others — redeemable for trips, spa sessions, special dinners, and gift hampers."
          />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Earn points */}
          <Reveal>
            <div className="bg-white rounded-3xl shadow-xl p-7 border border-forest-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center">
                  <Medal className="w-6 h-6 text-forest-700" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-forest-900 font-semibold">Earn Points</h3>
                  <p className="text-sm text-forest-600">Tap an action to simulate earning</p>
                </div>
              </div>
              <div className="space-y-3">
                {rewardActions.map((action) => (
                  <button
                    key={action.action}
                    onClick={() => earn(action.points)}
                    className="w-full flex items-center justify-between gap-3 p-4 bg-sand-50 border border-forest-100 rounded-xl hover:bg-forest-50 hover:border-forest-300 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-forest-100 group-hover:bg-forest-700 flex items-center justify-center transition-colors">
                        <action.icon className="w-5 h-5 text-forest-700 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-forest-800">{action.action}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold text-gold-600">
                      <Coins className="w-4 h-4" />
                      +{action.points}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Redeem points */}
          <Reveal delay={150}>
            <div className="bg-gradient-to-br from-forest-800 to-forest-950 rounded-3xl shadow-xl p-7 border border-forest-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-gold-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white font-semibold">Redeem Points</h3>
                    <p className="text-sm text-forest-100/60">Your rewards balance</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-3xl text-gold-300 font-semibold">{points}</div>
                  <div className="text-xs text-forest-100/60">points</div>
                </div>
              </div>
              <div className="space-y-3">
                {rewardRedemptions.map((reward) => {
                  const canRedeem = points >= reward.cost;
                  return (
                    <button
                      key={reward.reward}
                      onClick={() => canRedeem && setPoints((p) => p - reward.cost)}
                      disabled={!canRedeem}
                      className={`w-full flex items-center justify-between gap-3 p-4 rounded-xl transition-all ${
                        canRedeem
                          ? 'bg-white/10 border border-gold-400/30 hover:bg-white/15 cursor-pointer'
                          : 'bg-white/5 border border-white/5 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <reward.icon className="w-5 h-5 text-gold-300" />
                        </div>
                        <span className="text-sm font-medium text-white">{reward.reward}</span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-bold text-gold-300">
                        <Coins className="w-4 h-4" />
                        {reward.cost}
                      </span>
                    </button>
                  );
                })}
              </div>
              {points === 0 && (
                <p className="mt-4 text-center text-sm text-forest-100/50 italic">
                  Earn points on the left to start redeeming rewards
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
