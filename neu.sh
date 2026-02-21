#!/usr/bin/env bash
set -euo pipefail

echo "Creating elite research design..."

mkdir -p assets/css assets/js

cat > assets/css/core.css <<'EOF'
:root{
  --bg:#050505;
  --panel:#0d0d0d;
  --text:#e6e6e6;
  --muted:#7a7a7a;
  --accent:#00f0ff;
  --border:#1c1c1c;
}
*{margin:0;padding:0;box-sizing:border-box;}
body{
  background:var(--bg);
  color:var(--text);
  font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display",system-ui,sans-serif;
  line-height:1.6;
  letter-spacing:.02em;
}
.container{
  max-width:900px;
  margin:120px auto;
  padding:40px;
}
h1{
  font-weight:300;
  font-size:42px;
  letter-spacing:.12em;
}
.subtitle{
  color:var(--muted);
  margin-top:10px;
  font-size:14px;
}
.grid{
  margin-top:80px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:20px;
}
.card{
  padding:24px;
  border:1px solid var(--border);
  background:var(--panel);
  transition:.2s ease;
}
.card:hover{
  border-color:var(--accent);
  transform:translateY(-3px);
}
a{color:inherit;text-decoration:none;}
.footer{
  margin-top:120px;
  color:var(--muted);
  font-size:12px;
  border-top:1px solid var(--border);
  padding-top:20px;
}
EOF

cat > assets/js/site.js <<'EOF'
document.querySelectorAll("[data-year]").forEach(el=>{
  el.textContent=new Date().getFullYear()
})
EOF

cat > index.html <<'EOF'
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Spencer K. Cottrell — Research Systems</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/assets/css/core.css">
</head>
<body>
<div class="container">
  <h1>SPENCER K. COTTRELL</h1>
  <div class="subtitle">Machine Intelligence · Systems · Infrastructure</div>

  <div class="grid">
    <a class="card" href="/research"><strong>Research</strong><div class="subtitle">active directions</div></a>
    <a class="card" href="/papers"><strong>Papers</strong><div class="subtitle">publications</div></a>
    <a class="card" href="/models"><strong>Models</strong><div class="subtitle">model cards</div></a>
    <a class="card" href="/infrastructure"><strong>Infrastructure</strong><div class="subtitle">systems</div></a>
    <a class="card" href="/demos"><strong>Demos</strong><div class="subtitle">proofs</div></a>
    <a class="card" href="/philosophy"><strong>Philosophy</strong><div class="subtitle">principles</div></a>
  </div>

  <div class="footer">© <span data-year></span> Spencer K. Cottrell</div>
</div>
<script src="/assets/js/site.js"></script>
</body>
</html>
EOF

git add assets index.html
git commit -m "Elite cyber research homepage" || true
git push --force-with-lease origin main

echo "DONE. Deploying..."
