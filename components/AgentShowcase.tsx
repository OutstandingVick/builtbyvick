"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Bot, Check, Github, ShieldCheck } from "lucide-react";

const agents = [
  {
    id: "goowa",
    name: "Goowa",
    category: "Research integrity agent",
    headline: "AI drafts the research. You approve every claim.",
    description:
      "Goowa turns factual sentences into live, verifiable claims. It ties each claim to supporting evidence, catches laundered citations, lets a human correct the agent in place, and publishes a tamper-evident receipt anyone can check.",
    metric: "Claim-level evidence",
    metricLabel: "for every factual sentence",
    outcome: "Every published article ships with proof.",
    image: "/agent-goowa.jpg",
    imageAlt: "Goowa editor showing claims, evidence, and verification verdicts",
    stack: ["Agent-Native", "TypeScript", "MCP", "Neon Postgres"],
    steps: [
      ["Draft", "The agent researches and extracts exact factual claims."],
      ["Verify", "Evidence is checked and weak or unsupported claims are surfaced."],
      ["Publish", "Only a human can approve the final draft and proof receipt."],
    ],
    repo: "https://github.com/OutstandingVick/goowa",
    live: "https://goowa.vercel.app",
  },
  {
    id: "dumen",
    name: "Dumen",
    category: "Payment safety agent",
    headline: "Money moves once—even when the confirmation disappears.",
    description:
      "Dumen protects refund and seller-payout agents from dangerous retries. Before money moves again, its verifier checks the live system of record, reconciles uncertain outcomes, and escalates anything it cannot prove.",
    metric: "0 duplicate payments",
    metricLabel: "across published benchmark runs",
    outcome: "Uncertain means verify or escalate—never pay on a guess.",
    image: "/agent-dumen.png",
    imageAlt: "Dumen operations dashboard comparing safe agent runs with a baseline",
    stack: ["TypeScript", "Nemotron", "Zetaris", "World Model"],
    steps: [
      ["Inspect", "The agent reads the request and the live financial record."],
      ["Verify", "Code checks whether each refund or payout already succeeded."],
      ["Resolve", "Safe actions continue; conflicts move to a human queue."],
    ],
    repo: "https://github.com/OutstandingVick/dumen",
    live: null,
  },
] as const;

type AgentId = (typeof agents)[number]["id"];

export default function AgentShowcase() {
  const [activeId, setActiveId] = useState<AgentId>("goowa");
  const activeAgent = agents.find((agent) => agent.id === activeId) ?? agents[0];

  return (
    <section className="agent-showcase" aria-labelledby="agent-showcase-title">
      <div className="agent-showcase-heading">
        <span className="agent-showcase-kicker font-mono">
          <Bot aria-hidden="true" size={16} />
          Agentic systems
        </span>
        <h3 id="agent-showcase-title" className="section-title">
          AI agents built for real consequences.
        </h3>
        <p className="font-mono">
          Two systems where an agent can do meaningful work—but proof, safety,
          and human control still decide the outcome.
        </p>
      </div>

      <div className="agent-switcher" role="tablist" aria-label="Choose an AI agent">
        {agents.map((agent) => (
          <button
            key={agent.id}
            id={`agent-tab-${agent.id}`}
            type="button"
            role="tab"
            aria-selected={activeId === agent.id}
            aria-controls="agent-showcase-panel"
            tabIndex={activeId === agent.id ? 0 : -1}
            onClick={() => setActiveId(agent.id)}
            className="agent-switcher-tab font-mono"
          >
            {agent.name}
          </button>
        ))}
      </div>

      <article
        id="agent-showcase-panel"
        role="tabpanel"
        aria-labelledby={`agent-tab-${activeAgent.id}`}
        className={`agent-panel agent-panel-${activeAgent.id}`}
        key={activeAgent.id}
      >
        <div className="agent-panel-copy">
          <div className="agent-panel-meta font-mono">
            <ShieldCheck aria-hidden="true" size={17} />
            {activeAgent.category}
          </div>

          <h4>{activeAgent.headline}</h4>
          <p className="agent-panel-description font-mono">{activeAgent.description}</p>

          <div className="agent-metric">
            <strong>{activeAgent.metric}</strong>
            <span className="font-mono">{activeAgent.metricLabel}</span>
          </div>

          <ol className="agent-steps">
            {activeAgent.steps.map(([title, detail]) => (
              <li key={title}>
                <span className="agent-step-icon" aria-hidden="true">
                  <Check size={15} strokeWidth={3} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p className="font-mono">{detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="agent-stack" aria-label={`${activeAgent.name} technology stack`}>
            {activeAgent.stack.map((technology) => (
              <span key={technology} className="font-mono">
                {technology}
              </span>
            ))}
          </div>

          <div className="agent-actions">
            {activeAgent.live ? (
              <a href={activeAgent.live} target="_blank" rel="noopener noreferrer">
                Explore live
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            ) : null}
            <a
              href={activeAgent.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="agent-action-secondary"
            >
              <Github aria-hidden="true" size={18} />
              View repository
            </a>
          </div>
        </div>

        <div className="agent-visual">
          <div className="agent-browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <div>{activeAgent.name.toLowerCase()}.agent</div>
          </div>
          <div className="agent-screenshot">
            <Image
              src={activeAgent.image}
              alt={activeAgent.imageAlt}
              fill
              sizes="(max-width: 980px) 92vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="agent-outcome font-mono">
            <span aria-hidden="true">✦</span>
            {activeAgent.outcome}
          </div>
        </div>
      </article>
    </section>
  );
}
