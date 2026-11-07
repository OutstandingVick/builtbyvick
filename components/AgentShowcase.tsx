"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { ArrowUpRight, Bot, Check, ShieldCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const agents = [
  {
    id: "goowa",
    name: "Goowa",
    category: "Research integrity agent",
    headline: "AI drafts the research. You approve every claim.",
    processLead:
      "Goowa keeps evidence attached from the first draft through the final human-approved receipt.",
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
    processLead:
      "Dumen checks live financial truth before every retry and escalates anything it cannot prove.",
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

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % agents.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + agents.length) % agents.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = agents.length - 1;
    if (nextIndex === index) return;

    event.preventDefault();
    const nextAgent = agents[nextIndex];
    setActiveId(nextAgent.id);
    document.getElementById(`agent-tab-${nextAgent.id}`)?.focus();
  };

  return (
    <section className="agent-showcase" aria-labelledby="agent-showcase-title">
      <div className="agent-showcase-heading">
        <span className="agent-showcase-kicker font-mono">
          <Bot aria-hidden="true" size={16} />
          The agent process
        </span>
        <h3 id="agent-showcase-title" className="section-title">
          From prompt to proven action.
        </h3>
        <p className="font-mono">
          Choose an agent and follow how it turns an uncertain request into a
          result that can be checked, trusted, and handed back to a human.
        </p>
      </div>

      <div className="agent-switcher" role="tablist" aria-label="Choose an AI agent">
        {agents.map((agent, index) => (
          <button
            key={agent.id}
            id={`agent-tab-${agent.id}`}
            type="button"
            role="tab"
            aria-selected={activeId === agent.id}
            aria-controls="agent-showcase-panel"
            tabIndex={activeId === agent.id ? 0 : -1}
            onClick={() => setActiveId(agent.id)}
            onKeyDown={(event) => onTabKeyDown(event, index)}
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
              <FaGithub aria-hidden="true" size={18} />
              View repository
            </a>
          </div>
        </div>

        <div className="agent-visual">
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
