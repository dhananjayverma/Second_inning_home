import { useState } from 'react';
import { Reveal, SectionHeading } from './Reveal';
import { Link } from 'react-router-dom';
import { testimonials, pricingPlans, faqs } from '../data';
import { Star, Quote, Check, Plus, Minus, Phone, Mail, MapPin, Send } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title={<>Hear from those who<br />live this life every day</>}
            subtitle="Residents and families share what Second Innings House means to them."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="h-full bg-white border border-forest-100 rounded-2xl p-7 hover:shadow-xl transition-all relative">
                <Quote className="w-10 h-10 text-gold-300 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="font-serif italic text-lg text-forest-800 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-forest-100">
                  <div className="w-12 h-12 rounded-full bg-forest-700 flex items-center justify-center text-white font-serif text-lg font-semibold">
                    {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-forest-900">{t.name}</div>
                    <div className="text-sm text-forest-600">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title={<>Transparent, all-inclusive<br />monthly living</>}
            subtitle="No hidden costs. Everything — meals, care, activities, and community — is included. Choose the home that fits your life."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <div
                className={`relative h-full rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-forest-800 to-forest-950 shadow-2xl scale-105 border-2 border-gold-400'
                    : 'bg-sand-50 border border-forest-100 shadow-md hover:shadow-xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`font-serif text-2xl font-semibold ${
                    plan.highlighted ? 'text-white' : 'text-forest-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1.5 ${
                    plan.highlighted ? 'text-forest-100/70' : 'text-forest-600'
                  }`}
                >
                  {plan.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-serif text-4xl font-semibold ${
                      plan.highlighted ? 'text-gold-300' : 'text-forest-800'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${plan.highlighted ? 'text-forest-100/60' : 'text-forest-500'}`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-gold-300' : 'text-forest-600'
                        }`}
                      />
                      <span
                        className={`text-sm ${plan.highlighted ? 'text-forest-50' : 'text-forest-700'}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-8 block text-center py-3.5 rounded-full font-semibold text-sm transition-all ${
                    plan.highlighted
                      ? 'bg-gold-500 hover:bg-gold-600 text-white'
                      : 'bg-forest-700 hover:bg-forest-800 text-white'
                  }`}
                >
                  Book a Visit
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-forest-600">
            Trial stays available (3–7 days) · All plans include family app access ·
            Custom care plans on request
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title={<>Questions, answered<br />with honesty</>}
          />
        </Reveal>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="bg-white border border-forest-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-forest-50/50 transition-colors"
                >
                  <span className="font-serif text-lg text-forest-900 font-semibold">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-forest-50 flex items-center justify-center shrink-0">
                    {open === i ? (
                      <Minus className="w-4 h-4 text-forest-700" />
                    ) : (
                      <Plus className="w-4 h-4 text-forest-700" />
                    )}
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-forest-700 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-forest-900 to-forest-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Contact"
              title={<>Come see for yourself.<br />Stay for a lifetime.</>}
              subtitle="Book a visit, request a virtual tour, or simply ask a question. We'd love to show you what a second innings can look like."
              center={false}
            />

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, label: 'Call us', value: '+91 98765 43210' },
                { icon: Mail, label: 'Email us', value: 'hello@secondinningshouse.in' },
                { icon: MapPin, label: 'Visit us', value: 'Green Valley Road, Hill District, India' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-gold-300" />
                  </div>
                  <div>
                    <div className="text-xs text-forest-100/60 uppercase tracking-wider">{c.label}</div>
                    <div className="text-white font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-forest-100 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-forest-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-forest-900 font-semibold">Thank you!</h3>
                  <p className="mt-2 text-forest-600">
                    We'll be in touch within 24 hours to arrange your visit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-forest-700 font-semibold hover:text-gold-600 transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <h3 className="font-serif text-2xl text-forest-900 font-semibold mb-2">
                    Book a Visit
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-forest-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-sand-50 border border-forest-100 rounded-xl px-4 py-3 text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-sand-50 border border-forest-100 rounded-xl px-4 py-3 text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-all"
                        placeholder="+91 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-sand-50 border border-forest-100 rounded-xl px-4 py-3 text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">
                      I'm interested in
                    </label>
                    <select className="w-full bg-sand-50 border border-forest-100 rounded-xl px-4 py-3 text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-all">
                      <option>Book a visit</option>
                      <option>Virtual tour</option>
                      <option>Trial stay (3-7 days)</option>
                      <option>Pricing details</option>
                      <option>General enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">
                      Message (optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-sand-50 border border-forest-100 rounded-xl px-4 py-3 text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-all resize-none"
                      placeholder="Tell us a bit about what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-800 text-white py-3.5 rounded-full font-semibold transition-all hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Request a Visit
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
