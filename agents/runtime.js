const AGENT_DATA = {
  sourceAuditor: {
    status: "READY",
    job: "Audit uploaded PSC papers and preserve exam rules",
    outputs: ["exam scheme", "marks", "time", "negative marking", "source flags"]
  },
  syllabusMapper: {
    status: "READY",
    job: "Map Paper I, II and III into a study tree",
    outputs: ["topic tree", "checklist", "coverage map"]
  },
  questionEngine: {
    status: "READY",
    job: "Build source-linked MCQs and subjective prompts",
    outputs: ["MCQ bank", "answer explanations", "subjective bank"]
  },
  examCoach: {
    status: "READY",
    job: "Turn attempts and mistakes into daily practice",
    outputs: ["daily set", "mock exam", "revision queue"]
  }
};

function showAgents() {
  const p = document.getElementById("panel");
  p.classList.remove("hidden");
  const cards = Object.entries(AGENT_DATA).map(([id, a]) =>
    '<div class="griditem"><b>' + id.replace(/([A-Z])/g, " $1") +
    '</b><p>' + a.job + '</p><span class="tag">' + a.status + '</span><p>' +
    a.outputs.join(" • ") + '</p></div>'
  ).join("");
  p.innerHTML =
    '<h2>Study Agent Command Center</h2>' +
    '<p>Four agents are now defined for the Nom LokSewa study pipeline.</p>' +
    cards +
    '<h3>Source snapshot</h3>' +
    '<p>Preliminary: 100 marks, 50 MCQs, 45 minutes, pass mark 45. Main written stage: 200 marks. Final stage: 40 marks.</p>' +
    '<p>Paper II: Office Management — Sections A 40, B 30, C 30. Paper III includes public service management, accounting/financial administration and public procurement/inventory topics in the supplied source.</p>';
}
