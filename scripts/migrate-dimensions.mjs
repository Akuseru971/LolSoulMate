import fs from "fs";

const OLD_TO_NEW = {
  ambition: "ambition",
  empathy: "empathy",
  independence: "independence",
  loyalty: "loyalty",
  discipline: "discipline",
  impulsivity: "impulsivity",
  idealism: "idealism",
  pragmatism: "pragmatism",
  emotionalOpenness: "emotionalSensitivity",
  resilience: "resilience",
  desireForRecognition: "needForRecognition",
  protectiveInstinct: "protectiveInstinct",
  leadershipTendency: "relationshipWithAuthority",
  moralFlexibility: "moralFlexibility",
  needForControl: "desireForPower",
  relationshipWithDestiny: "relationshipWithDestiny",
};

function migrateWeights(w) {
  const out = {};
  for (const [k, v] of Object.entries(w)) {
    const nk = OLD_TO_NEW[k];
    if (nk) out[nk] = (out[nk] ?? 0) + v;
  }
  if (w.leadershipTendency)
    out.courage = (out.courage ?? 0) + w.leadershipTendency * 0.35;
  if (w.empathy) out.socialConnection = (out.socialConnection ?? 0) + w.empathy * 0.25;
  if (w.protectiveInstinct)
    out.capacityForSacrifice = (out.capacityForSacrifice ?? 0) + w.protectiveInstinct * 0.2;
  if (w.independence)
    out.desireForFreedom = (out.desireForFreedom ?? 0) + w.independence * 0.35;
  if (w.idealism) out.courage = (out.courage ?? 0) + w.idealism * 0.15;
  return out;
}

function migrateBlock(inner) {
  const obj = {};
  inner.replace(/(\w+):\s*([\d.]+)/g, (_, k, v) => {
    obj[k] = parseFloat(v);
    return "";
  });
  const nw = migrateWeights(obj);
  return Object.entries(nw)
    .map(([k, v]) => `${k}: ${Math.round(v * 100) / 100}`)
    .join(", ");
}

for (const file of ["data/questions.ts", "data/champions/profiles.ts"]) {
  let src = fs.readFileSync(file, "utf8");
  src = src.replace(/weights: \{([^}]+)\}/g, (_, inner) => {
    return `weights: { ${migrateBlock(inner)} }`;
  });
  src = src.replace(/vector: \{([^}]+)\}/g, (_, inner) => {
    return `vector: { ${migrateBlock(inner)} }`;
  });
  fs.writeFileSync(file, src);
}
console.log("done");
