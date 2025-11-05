import WorkItem from "./components/WorkItem";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-20">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-2">Cailyn Yong</h1>
          <div className="flex items-center gap-1 text-gray-600 text-sm mb-4">
            <span>🌍</span>
            <span>Seoul | SF</span>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/cailynyongyong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/cailyn-yong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/cailynyongyong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/cailyn_momo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@yong1000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </header>

        {/* Bio */}
        <section className="mb-12 space-y-4 text-black leading-relaxed text-sm">
          <p>
            I&apos;m currently building{" "}
            <a href="https://www.usemomo.com" className="underline">
              Momo
            </a>
            , an unified inbox with context awareness so that it never misses
            high-value deals. I previously built{" "}
            <a href="https://www.youtube.com/@10xaiclub" className="underline">
              10X AI Club (33K subscribers)
            </a>
            , an AI community for non-devs to learn how to build their own AI
            agents. Also published a{" "}
            <a href="https://www.youtube.com/@10xaiclub" className="underline">
              best-selling book
            </a>{" "}
            on building AI agents.
          </p>

          <p>
            Previously, I built a multimodal video search engine called CtrlX,
            built for podcasters to auto generate short form reels. Some other
            projects I built are{" "}
            <a
              href="https://github.com/cailynyongyong/solidity-copilot"
              className="underline"
            >
              Solidity Copliot,
            </a>{" "}
            for Solidity devs to automate smart contract auditing.{" "}
          </p>

          <p>
            I&apos;m aiming to build the world&apos;s best Jarvis. I&apos;ve
            been an Ironman fan since I was 10.
            <br></br>Nothing excites me more than buildling Momo.
          </p>

          <div>
            <p className="mb-2">Some other random stuff about me:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                contacted head of Nvidia Korea to be my mentor, and built custom
                GPUs with his team
              </li>
              <li>
                wanted to save corals from bleaching and built a ML pipeline to
                detect heat-resilient microbiomes that live in corals{" "}
                <a
                  href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4NiCCEQAAAAJ&citation_for_view=4NiCCEQAAAAJ:u5HHmVD_uO8C"
                  className="underline"
                >
                  (paper published)
                </a>
              </li>
              <li>
                played flag football for 9 years, got selected as national team
                athelete for 2028 Olympics
              </li>
              <li>
                you may have seen me on{" "}
                <a
                  href="https://www.instagram.com/cailyn_momo/"
                  className="underline"
                >
                  Instagram
                </a>{" "}
                somewhere (6.3K followers, total 2.5M views)
              </li>
            </ul>
          </div>

          <p>
            I host a Founders Weekly Coworking club in Korea. <br></br>
            <strong>
              If you&apos;re building something cool, let&apos;s get in touch!{" "}
            </strong>
          </p>
        </section>

        {/* Work */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Work</h2>
          <div>
            <WorkItem
              company="Current Company"
              role="Co-Founder & CEO"
              icon="🏢"
              isActive={true}
              description="Building the world's first AI-powered product. A self-learning platform that improves user experience in real-time."
            />
            <WorkItem
              company="Previous Startup"
              role="Founding Engineer"
              icon="🚀"
              description="Built the core product as the first engineer. Scaled the platform to thousands of users."
            />
            <WorkItem
              company="Tech Company"
              role="Software Engineer"
              icon="💼"
              description="Worked on large-scale distributed systems and data infrastructure."
            />
            <WorkItem
              company="University Name"
              role="Research Assistant"
              icon="🎓"
              description="Conducted research in machine learning and computer vision."
            />
          </div>
        </section> */}

        {/* Writings */}
        <section className="mb-12 text-sm">
          <h2 className="text-2xl font-bold text-black mb-6">Writings</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <a href="#" className="hover:underline">
                My First Blog Post
              </a>
              <span className="text-sm text-gray-500">2025-01-15</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <a href="#" className="hover:underline">
                Thoughts on Software Development
              </a>
              <span className="text-sm text-gray-500">2024-12-20</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <a href="#" className="hover:underline">
                Building Better Products
              </a>
              <span className="text-sm text-gray-500">2024-11-10</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
