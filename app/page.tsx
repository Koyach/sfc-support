import Image from "next/image";
import ScrollReveal from "./components/ScrollReveal";
import Loader from "./components/Loader";
import CampusGallery from "./components/CampusGallery";
import Header from "./components/Header";

const CALENDAR_URL = "https://calendar.app.google/riCES5AXDQzaAwF37";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollReveal />

      <Header />

      <main>
        {/* ───── Hero ───── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-50)] via-white to-white" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[var(--blue-100)] opacity-40 blur-[100px]" />

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="reveal text-[0.75rem] font-medium tracking-widest uppercase text-[var(--blue-600)] mb-4">
                  慶應SFC在学生による個別指導
                </p>
                <h1 className="reveal reveal-delay-1 text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.3] text-[var(--gray-900)]">
                  SFCに、合格する。<br />
                  <span className="text-[var(--blue-600)]">その挑戦に、伴走する。</span>
                </h1>
                <p className="reveal reveal-delay-2 mt-6 text-[1rem] leading-relaxed text-[var(--gray-600)] max-w-lg">
                  総合型選抜でSFCに合格した在学生が、活動計画から志望理由書まで1on1でサポート。
                  塾では得られない「中の人」の視点で、あなたの合格を導きます。
                </p>

                <div className="reveal reveal-delay-3 mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[var(--blue-600)] text-white font-medium px-8 py-4 rounded-xl hover:bg-[var(--blue-700)] hover:shadow-lg hover:shadow-blue-200 transition-all text-[0.95rem]"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    無料面談を予約する
                  </a>
                  <a
                    href="#support"
                    className="inline-flex items-center justify-center text-[var(--gray-600)] font-medium px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-[0.95rem]"
                  >
                    サポート内容を見る
                  </a>
                </div>
              </div>

              {/* Hero image */}
              <div className="reveal reveal-delay-2 relative hidden lg:block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="谷昊埜"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 0vw, 40vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-5 py-3 border border-gray-100">
                  <p className="text-[0.7rem] text-[var(--gray-500)]">合格率</p>
                  <p className="text-2xl font-bold text-[var(--blue-600)]">100%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Results / Stats ───── */}
        <section id="results" className="py-20 bg-[var(--gray-50)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "100", unit: "%", label: "合格率" },
                { num: "4", unit: "名", label: "合格実績" },
                { num: "1/4", unit: "", label: "塾と比較した費用" },
                { num: "1on1", unit: "", label: "完全個別指導" },
              ].map((stat, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1} text-center`}>
                  <div className="font-[family-name:var(--font-serif)] text-[clamp(2.5rem,6vw,3.5rem)] font-semibold text-[var(--blue-800)] leading-none">
                    {stat.num}
                    <span className="text-[0.6em] text-[var(--blue-500)]">{stat.unit}</span>
                  </div>
                  <p className="mt-2 text-[0.85rem] text-[var(--gray-500)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── For Who ───── */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="reveal text-[0.75rem] font-medium tracking-widest uppercase text-[var(--blue-600)] mb-3">Who is this for</p>
              <h2 className="reveal reveal-delay-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">こんな方におすすめ</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "SFCに行きたいけど\n何から始めればいいかわからない",
                  desc: "活動計画の立て方から一緒に考えます。SFCが求めている人物像を、在学生の視点でお伝えします。",
                },
                {
                  icon: "📝",
                  title: "活動実績の作り方・\n見せ方に悩んでいる",
                  desc: "活動の「量」ではなく「深さ」が大事。あなたの経験をSFCの言葉で語れるようにします。",
                },
                {
                  icon: "💡",
                  title: "塾に通っているけど\nSFC特化のアドバイスが欲しい",
                  desc: "一般的な総合型対策とSFC対策は違います。現役SFC生だからこそわかる視点を提供します。",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-100 transition-all duration-300`}
                >
                  <span className="text-3xl">{card.icon}</span>
                  <h3 className="mt-4 text-[1rem] font-bold leading-relaxed whitespace-pre-line text-[var(--gray-800)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--gray-500)]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Support Content ───── */}
        <section id="support" className="py-20 md:py-28 bg-[var(--blue-900)] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="reveal text-[0.75rem] font-medium tracking-widest uppercase text-blue-300 mb-3">Support</p>
              <h2 className="reveal reveal-delay-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">サポート内容</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  num: "01",
                  title: "活動計画の壁打ち",
                  desc: "SFCに刺さる活動とは何か。あなたの興味・経験を起点に、説得力のある活動計画を一緒に設計します。",
                },
                {
                  num: "02",
                  title: "志望理由書の添削",
                  desc: "構造・ロジック・表現を磨きます。SFCの求める「問い」の立て方を、合格者の視点でフィードバック。",
                },
                {
                  num: "03",
                  title: "SFC生との座談会",
                  desc: "2ヶ月に1回、あなたの分野に近い先輩（2〜4年生）をマッチング。リアルなSFC生活と研究を直接聞けます。",
                },
                {
                  num: "04",
                  title: "面接対策",
                  desc: "SFCの面接で問われるのは「知識」ではなく「思考のプロセス」。模擬面接で実践的に準備します。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} flex gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors`}
                >
                  <span className="font-[family-name:var(--font-serif)] text-3xl font-semibold text-blue-400 shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-[1.05rem] font-bold">{item.title}</h3>
                    <p className="mt-2 text-[0.875rem] leading-relaxed text-blue-200/80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Difference ───── */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="reveal text-[0.75rem] font-medium tracking-widest uppercase text-[var(--blue-600)] mb-3">Why us</p>
              <h2 className="reveal reveal-delay-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">塾との違い</h2>
            </div>

            <div className="reveal reveal-delay-2 max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[var(--gray-50)]">
                      <th className="px-6 py-4 text-[0.8rem] font-medium text-[var(--gray-500)]" />
                      <th className="px-6 py-4 text-[0.8rem] font-bold text-[var(--blue-600)]">本サポート</th>
                      <th className="px-6 py-4 text-[0.8rem] font-medium text-[var(--gray-500)]">総合型専門塾</th>
                    </tr>
                  </thead>
                  <tbody className="text-[0.875rem]">
                    {[
                      ["指導者", "SFC合格者（在学生）", "講師（外部）"],
                      ["SFC内部情報", "直接提供", "間接的"],
                      ["先輩との接点", "座談会あり", "なし"],
                      ["指導形式", "完全1on1", "集団 or 少人数"],
                      ["費用（総額目安）", "10〜20万円", "50〜150万円"],
                    ].map(([label, us, them], i) => (
                      <tr key={i} className="border-t border-gray-100">
                        <td className="px-6 py-4 font-medium text-[var(--gray-700)]">{label}</td>
                        <td className="px-6 py-4 text-[var(--blue-700)] font-medium">{us}</td>
                        <td className="px-6 py-4 text-[var(--gray-500)]">{them}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Pricing ───── */}
        <section id="pricing" className="py-20 md:py-28 bg-[var(--gray-50)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="reveal text-[0.75rem] font-medium tracking-widest uppercase text-[var(--blue-600)] mb-3">Pricing</p>
              <h2 className="reveal reveal-delay-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">料金プラン</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Free trial */}
              <div className="reveal reveal-delay-1 bg-white rounded-2xl border border-gray-200 p-8 flex flex-col">
                <p className="text-[0.75rem] font-medium tracking-widest uppercase text-[var(--gray-500)]">Trial</p>
                <h3 className="mt-2 text-xl font-bold">初回面談</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[var(--gray-900)]">無料</span>
                </div>
                <p className="mt-4 text-[0.85rem] text-[var(--gray-500)] leading-relaxed flex-1">
                  まずは相性確認から。現在の状況をヒアリングし、合格までのロードマップをお伝えします。
                </p>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center bg-white text-[var(--blue-600)] font-medium py-3.5 rounded-xl border-2 border-[var(--blue-600)] hover:bg-[var(--blue-50)] transition-colors text-[0.9rem]"
                >
                  予約する
                </a>
              </div>

              {/* Monthly 2x — recommended */}
              <div className="reveal reveal-delay-2 bg-[var(--blue-600)] text-white rounded-2xl p-8 flex flex-col relative shadow-xl shadow-blue-200">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--blue-800)] text-white text-[0.65rem] font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                  おすすめ
                </div>
                <p className="text-[0.75rem] font-medium tracking-widest uppercase text-blue-200">Standard</p>
                <h3 className="mt-2 text-xl font-bold">月2回コース</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">20,000</span>
                  <span className="text-lg ml-1">円/月</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-[0.85rem] text-blue-100 flex-1">
                  {[
                    "月2回 x 1時間の1on1面談",
                    "活動計画・志望理由書のフィードバック",
                    "SFC生との座談会（2ヶ月に1回）",
                    "チャットでの質問対応",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <svg className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center bg-white text-[var(--blue-700)] font-bold py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-[0.9rem]"
                >
                  無料面談を予約する
                </a>
              </div>

              {/* Monthly 1x */}
              <div className="reveal reveal-delay-3 bg-white rounded-2xl border border-gray-200 p-8 flex flex-col">
                <p className="text-[0.75rem] font-medium tracking-widest uppercase text-[var(--gray-500)]">Light</p>
                <h3 className="mt-2 text-xl font-bold">月1回コース</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[var(--gray-900)]">25,000</span>
                  <span className="text-lg ml-1 text-[var(--gray-500)]">円/月</span>
                </div>
                <p className="mt-4 text-[0.85rem] text-[var(--gray-500)] leading-relaxed flex-1">
                  月1回の面談で方向性を確認。自分のペースで進めたい方向け。追加面談は10,000円/回。
                </p>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center bg-white text-[var(--blue-600)] font-medium py-3.5 rounded-xl border-2 border-[var(--blue-600)] hover:bg-[var(--blue-50)] transition-colors text-[0.9rem]"
                >
                  予約する
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Campus Gallery ───── */}
        <CampusGallery />

        {/* ───── Profile ───── */}
        <section id="profile" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="reveal text-[0.75rem] font-medium tracking-widest uppercase text-[var(--blue-600)] mb-3">Instructor</p>
              <h2 className="reveal reveal-delay-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">講師プロフィール</h2>
            </div>

            <div className="reveal reveal-delay-2 max-w-3xl mx-auto flex flex-col md:flex-row gap-10 items-center">
              <div className="w-56 h-56 rounded-full shrink-0 relative overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="谷昊埜"
                  fill
                  className="object-cover object-[center_20%] scale-125"
                  sizes="224px"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">谷昊埜<span className="text-[var(--gray-400)] font-normal text-base ml-3">Koya Tani</span></h3>
                <p className="mt-1 text-[0.85rem] text-[var(--blue-600)] font-medium">慶應義塾大学 総合政策学部（SFC）在学</p>
                <p className="mt-4 text-[0.9rem] text-[var(--gray-600)] leading-relaxed">
                  2025年、総合型選抜でSFCに合格。学生団体ミラコエ代表として55名の組織を率い、超党派の国会議員を招いた271名規模のイベントを実現。Bedrock Space COO。元フリースタイルスキーヤー（ジュニアワールドツアー2位）。これまで4名の受験生をサポートし、全員がSFCに合格。
                </p>

                {/* Specialties */}
                <div className="mt-5">
                  <p className="text-[0.75rem] font-medium tracking-widest uppercase text-[var(--gray-500)] mb-2">得意分野</p>
                  <div className="flex flex-wrap gap-2">
                    {["地方創生", "起業・アントレ", "問題解決", "教育", "AI・プログラミング"].map((tag) => (
                      <span key={tag} className="text-[0.75rem] text-[var(--blue-700)] bg-[var(--blue-50)] px-3 py-1.5 rounded-full border border-[var(--blue-100)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <a href="https://koyatani.com" target="_blank" rel="noopener noreferrer" className="text-[0.8rem] text-[var(--blue-600)] hover:underline">
                    ポートフォリオ →
                  </a>
                  <a href="https://www.instagram.com/koyatani_0828/" target="_blank" rel="noopener noreferrer" className="text-[0.8rem] text-[var(--gray-500)] hover:underline">
                    @koyatani_0828
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Testimonials ───── */}
        <section id="voices" className="py-20 md:py-28 bg-[var(--gray-50)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="reveal text-[0.75rem] font-medium tracking-widest uppercase text-[var(--blue-600)] mb-3">Voices</p>
              <h2 className="reveal reveal-delay-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">合格者の声</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: "A.Kさん",
                  result: "SFC 総合政策学部 合格",
                  comment: "ここにコメントが入ります。教えてもらった子からの実際の声を記載してください。",
                },
                {
                  name: "B.Mさん",
                  result: "SFC 環境情報学部 合格",
                  comment: "ここにコメントが入ります。教えてもらった子からの実際の声を記載してください。",
                },
                {
                  name: "C.Tさん",
                  result: "SFC 総合政策学部 合格",
                  comment: "ここにコメントが入ります。教えてもらった子からの実際の声を記載してください。",
                },
                {
                  name: "D.Sさん",
                  result: "SFC 環境情報学部 合格",
                  comment: "ここにコメントが入ります。教えてもらった子からの実際の声を記載してください。",
                },
              ].map((voice, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} bg-white rounded-2xl border border-gray-200 p-7`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--blue-100)] flex items-center justify-center text-[var(--blue-600)] font-bold text-sm">
                      {voice.name[0]}
                    </div>
                    <div>
                      <p className="text-[0.9rem] font-bold text-[var(--gray-800)]">{voice.name}</p>
                      <p className="text-[0.75rem] text-[var(--blue-600)]">{voice.result}</p>
                    </div>
                  </div>
                  <p className="text-[0.875rem] text-[var(--gray-600)] leading-relaxed">
                    &ldquo;{voice.comment}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Real Materials ───── */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal max-w-2xl mx-auto text-center">
              <p className="text-[0.75rem] font-medium tracking-widest uppercase text-[var(--blue-600)] mb-3">Real Examples</p>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold mb-4">
                合格者の出願書類を<br />お見せできます
              </h2>
              <p className="text-[0.95rem] text-[var(--gray-600)] leading-relaxed mb-6">
                実際にSFCに合格した受験生の自由記述・活動報告を、本人の許可を得た上でお見せしています。「どこまで書けばいいのか」「どんなレベルが求められるのか」が具体的にわかります。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-3 bg-[var(--blue-50)] border border-[var(--blue-100)] rounded-xl px-6 py-4">
                  <svg className="w-6 h-6 text-[var(--blue-600)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[0.8rem] font-bold text-[var(--blue-800)]">実際の自由記述</p>
                    <p className="text-[0.7rem] text-[var(--gray-500)]">合格者本人の許可済み</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[var(--blue-50)] border border-[var(--blue-100)] rounded-xl px-6 py-4">
                  <svg className="w-6 h-6 text-[var(--blue-600)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[0.8rem] font-bold text-[var(--blue-800)]">活動報告書</p>
                    <p className="text-[0.7rem] text-[var(--gray-500)]">具体的なレベル感がわかる</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[0.8rem] text-[var(--gray-400)]">
                ※ 資料は初回面談時にお見せします
              </p>
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <section id="faq" className="py-20 md:py-28 bg-[var(--gray-50)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="reveal text-[0.75rem] font-medium tracking-widest uppercase text-[var(--blue-600)] mb-3">FAQ</p>
              <h2 className="reveal reveal-delay-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">よくある質問</h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {[
                {
                  q: "オンラインで受けられますか？",
                  a: "はい、全てオンライン（Zoom）で実施します。全国どこからでも受講可能です。",
                },
                {
                  q: "いつから始めるのがベストですか？",
                  a: "高2の冬〜高3の春が理想です。活動計画を練る時間が十分に取れます。ただし高3の夏からでも間に合うケースはあります。",
                },
                {
                  q: "SFC以外の大学も対応していますか？",
                  a: "現在はSFC（総合政策学部・環境情報学部）に特化しています。SFCに絞ることで、質の高いサポートを提供しています。",
                },
                {
                  q: "保護者への説明はありますか？",
                  a: "初回面談に保護者の方も同席いただけます。サポート内容・料金・進め方について丁寧にご説明します。",
                },
                {
                  q: "途中でやめることはできますか？",
                  a: "月額制のため、いつでも解約可能です。契約期間の縛りはありません。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} bg-white rounded-xl border border-gray-200 p-6`}
                >
                  <h3 className="text-[0.95rem] font-bold text-[var(--gray-800)] flex gap-3">
                    <span className="text-[var(--blue-500)] shrink-0">Q.</span>
                    {item.q}
                  </h3>
                  <p className="mt-3 text-[0.875rem] text-[var(--gray-600)] leading-relaxed pl-7">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Final CTA ───── */}
        <section className="py-20 md:py-28 bg-[var(--blue-800)] text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="reveal text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight">
              まずは無料面談から。<br />
              SFCへの第一歩を、一緒に。
            </h2>
            <p className="reveal reveal-delay-1 mt-4 text-blue-200 text-[0.95rem]">
              現在の状況をお聞きし、合格までのロードマップをお伝えします。
            </p>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal reveal-delay-2 inline-flex items-center gap-2 mt-8 bg-white text-[var(--blue-800)] font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors text-[1rem]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              無料面談を予約する
            </a>
          </div>
        </section>
      </main>

      {/* ───── Footer ───── */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.75rem] text-[var(--gray-400)]">
            &copy; 2026 谷昊埜. All rights reserved.
          </p>
          <a
            href="https://koyatani.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] text-[var(--gray-400)] hover:text-[var(--gray-600)] transition-colors"
          >
            koyatani.com
          </a>
        </div>
      </footer>
    </>
  );
}
