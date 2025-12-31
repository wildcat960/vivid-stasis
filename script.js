const byIndex = [];
const prefs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3];
const data = {};
const cts = ["", "FC", "AC", "AAC"];
const ctCounts = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
const colours = ["#1aff55", "#1ab9ff", "#ff1a4a", "#c342ff", "#000000"];
const tabs = [["charts", "block"], ["stats", "flex"], ["save", "flex"], ["info", "block"]];
const ctColours =
[
    [
        "linear-gradient(grey)",
        "linear-gradient(violet, blue, violet)",
        "linear-gradient(pink, purple, blue, cyan, green, yellow, red, yellow, green, cyan, blue, purple, pink)",
        "linear-gradient(cyan, pink, white, pink, cyan)"
    ],
    [
        "linear-gradient(grey)",
        "linear-gradient(blue)",
        "linear-gradient(green)",
        "linear-gradient(orange)"
    ]
]
const list = document.getElementById("list");
function updateStats()
{
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 5; j++)
            ctCounts[i][j] = 0;
    }
    for (let i in original)
    {
        for (let j = 0; j < original[i].length; j++)
        {
            for (let k = 5 - data[i][j].ct; k < 6; k++)
                ctCounts[k][j]++;
            ctCounts[1][j] += data[i][j].crits;
            ctCounts[0][j] += 1010000 - data[i][j].crits * 10000 / original[i][j].notes;
        }
    }
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 4; j++)
            ctCounts[i][4] += ctCounts[i][j];
    }
    const counts = document.getElementById("stats").children;
    for (let i = 0; i < 5; i++)
    {
        const countsT = counts[i + 1].children;
        for (let j = 1; j < 6; j++)
            countsT[j].textContent = ctCounts[j][i];
        countsT[0].textContent = Math.round(ctCounts[0][i]);
    }
}
function updateScore(li, chart, orig)
{
    const stats = li.children;
    let score = stats[4].value;
    score = Math.max(0, Math.min(score, 1010000));
    chart.crits = 101 * orig.notes - Math.round(score * orig.notes / 10000);
    let rate = 0;
    if (score >= 600000)
    {
        rate = orig.lv * 1000;
        if (score < 950000)
            rate += (score - 1000000) / 50;
        else if (score < 980000)
            rate += (score - 980000) / 30;
        else if (score < 1000000)
            rate += (score - 980000) / 20;
        else if (score < 1008000)
            rate += (score - 990000) / 10;
        else
            rate += 1800;
        rate = Math.max(rate, 0);
    }
    if (chart.ct == 1)
        rate += 100;
    else if (chart.ct)
        rate += 200;
    stats[3].value = chart.crits;
    stats[6].textContent = Math.round(rate);
    stats[5].textContent = cts[chart.ct];
    stats[5].style.backgroundImage = ctColours[prefs[4]][chart.ct];
    updateStats();
}
function updateCrits(li, chart, orig)
{
    const stats = li.children;
    chart.crits = stats[3].value;
    chart.crits = Math.max(0, Math.min(chart.crits, 101 * orig.notes));
    let score = 1010000 - chart.crits * 10000 / orig.notes;
    let rate = 0;
    if (score >= 600000)
    {
        rate = orig.lv * 1000;
        if (score < 950000)
            rate += (score - 1000000) / 50;
        else if (score < 980000)
            rate += (score - 980000) / 30;
        else if (score < 1000000)
            rate += (score - 980000) / 20;
        else if (score < 1008000)
            rate += (score - 990000) / 10;
        else
            rate += 1800;
        rate = Math.max(rate, 0);
    }
    if (chart.ct == 1)
        rate += 100;
    else if (chart.ct)
        rate += 200;
    stats[4].value = Math.round(score);
    stats[6].textContent = Math.round(rate);
    stats[5].textContent = cts[chart.ct];
    stats[5].style.backgroundImage = ctColours[prefs[4]][chart.ct];
    updateStats();
}
function getScore(i, diff)
{
    const chart = data[i][diff];
    const orig = original[i][diff];
    const li = document.getElementById("c" + orig.index);
    const a = parseInt(li.children[4].value);
    if (isNaN(a) || a < 0 || a > 1010000)
        return;
    updateScore(li, chart, orig);
    if (localStorage)
        localStorage.data = JSON.stringify(data);
}
function getCrits(i, diff)
{
    const chart = data[i][diff];
    const orig = original[i][diff];
    const li = document.getElementById("c" + orig.index);
    const a = parseInt(li.children[3].value);
    if (isNaN(a) || a < 0 || a > 101 * orig.notes)
        return
    updateCrits(li, chart, orig);
    if (localStorage)
        localStorage.data = JSON.stringify(data);
}
function updateCt(i, diff)
{
    const chart = data[i][diff];
    const orig = original[i][diff];
    const li = document.getElementById("c" + orig.index);
    chart.ct++;
    if (chart.ct > 3)
    {
        chart.score = 0;
        li.children[4].value = 0;
        chart.ct = 0;
    }
    if (chart.ct == 3)
    {
        chart.score = 1010000;
        li.children[4].value = 1010000;
    }
    if (prefs[chart.ct + 5])
        li.style.display = "flex";
    else
        li.style.display = "none";
    updateScore(li, chart, orig);
    if (localStorage)
        localStorage.data = JSON.stringify(data);
}
function save()
{
    if (navigator.clipboard && navigator.clipboard.writeText)
        navigator.clipboard.writeText(JSON.stringify(data));
    else
        alert("CLIPBOARD ERROR");
}
function manual()
{
    if (localStorage)
        localStorage.data = JSON.stringify(data);
    else
        alert("LOCAL STORAGE ERROR");
}
function copyData(b)
{
    for (let i in b)
    {
        if (original.hasOwnProperty(i))
        {
            for (let j = 0; j < b[i].length; j++)
            {
                if (j < data[i].length)
                {
                    data[i][j].ct = b[i][j].ct;
                    const li = document.getElementById("c" + original[i][j].index);
                    if (b[i][j].hasOwnProperty("score"))
                    {
                        li.children[4].value = Math.round(b[i][j].score);
                        updateScore(li, data[i][j], original[i][j]);
                    }
                    else
                    {
                        li.children[3].value = b[i][j].crits;
                        updateCrits(li, data[i][j], original[i][j]);
                    }
                }
            }
        }
    }
}
function actuallyLoad(a)
{
    try
    {
        copyData(JSON.parse(a));
        localStorage.data = JSON.stringify(data);
    }
    catch (e)
    {
        return;
    }
}
function load()
{
    if (navigator.clipboard && navigator.clipboard.readText)
        navigator.clipboard.readText().then(function(A) {actuallyLoad(A)});
    else
        actuallyLoad(prompt());
}
function reset()
{
    for (let i in original)
    {
        for (let j = 0; j < original[i].length; j++)
        {
            const li = document.getElementById("c" + original[i][j].index);
            li.children[4].value = 0;
            data[i][j].ct = 0;
            updateScore(li, data[i][j], original[i][j]);
        }
    }
    localStorage.data = JSON.stringify(data);
}
function toggleDiff(a)
{
    prefs[a] = 1 - prefs[a];
    localStorage.prefs = JSON.stringify(prefs);
    if (prefs[a])
    {
        if (a < 5)
            document.getElementById("pref" + a).style.backgroundColor = colours[a];
        else if (a < 9)
            document.getElementById("pref" + a).style.backgroundImage = ctColours[prefs[4]][a - 5];
        else
            document.getElementById("pref" + a).style.backgroundColor = "green";
    }
    else
    {
        if (a < 5)
            document.getElementById("pref" + a).style.backgroundColor = "black";
        else if (a < 9)
            document.getElementById("pref" + a).style.backgroundImage = "linear-gradient(black)";
        else
            document.getElementById("pref" + a).style.backgroundColor = "black";
    }
    for (let i in original)
    {
        for (let j = 0; j < original[i].length; j++)
        {
            const orig = original[i][j];
            const chart = data[i][j];
            const li = document.getElementById("c" + orig.index);
            if (prefs[j] && prefs[chart.ct + 5])
            {
                for (let k = 0; k < 11; k++)
                {
                    if (packs[k] <= orig.index && orig.index < packs[k + 1])
                    {
                        if (prefs[k + 9])
                            li.style.display = "flex";
                        else
                            li.style.display = "none";
                        break;
                    }
                }
            }
            else
                li.style.display = "none";
            li.children[5].style.backgroundImage = ctColours[prefs[4]][chart.ct];
        }
    }
    const charts = document.getElementById("stats").children[0].children;
    for (let i = 0; i < 4; i++)
        charts[i + 2].style.backgroundImage = ctColours[prefs[4]][3 - i];
    for (let i = 0; i < 4; i++)
    {
        if (prefs[i + 5])
            document.getElementById("pref" + (i + 5)).style.backgroundImage = ctColours[prefs[4]][i];
    }
}
function switchTab(a)
{
    prefs[prefs.length - 1] = a;
    localStorage.prefs = JSON.stringify(prefs);
    let u = document.getElementById("tabs").children;
    for (let i = 0; i < tabs.length; i++)
    {
        let t = document.getElementById(tabs[i][0]);
        if (i == a)
        {
            t.style.display = tabs[i][1];
            u[i].style.backgroundColor = "coral";
        }
        else
        {
            t.style.display = "none";
            u[i].style.backgroundColor = "black";
        }
    }
}
function loadPrefs(b)
{
    for (let i = 0; i < b.length; i++)
    {
        if (i < prefs.length - 1)
        {
            toggleDiff(i);
            if (b[i])
                toggleDiff(i);
        }
        else if (i < prefs.length)
            switchTab(b[i]);
    }
}
function init()
{
    document.getElementById("ver").textContent = ver;
    document.getElementById("upd").textContent = upd
    const charts = document.getElementById("stats").children;
    const chartsT = charts[0].children;
    for (let i = 0; i < 4; i++)
    {
        charts[i + 1].style.color = colours[i];
        chartsT[i + 2].style.backgroundImage = ctColours[prefs[4]][3 - i];
    }
    for (let i in original)
    {
        data[i] = [];
        for (let j = 0; j < original[i].length; j++)
        {
            data[i].push({crits: 101 * original[i][j].notes, ct: 0});
            byIndex[original[i][j].index] = [i, j];
        }
    }
    for (let i in original)
    {
        for (let diff = 0; diff < original[i].length; diff++)
        {
            const orig = original[i][diff];
            const chart = data[i][diff];
            const li = document.createElement("li");
            li.id = "c" + orig.index;
            li.classList.add("chart");
            const name = document.createElement("span");
            name.textContent = i;
            name.classList.add("stat");
            name.classList.add("name");
            name.classList.add("clickable");
            name.addEventListener("click", function() {list.appendChild(li)});
            const lv = document.createElement("span");
            lv.textContent = orig.lv.toFixed(1);
            lv.classList.add("stat");
            lv.classList.add("lv");
            lv.style.backgroundColor = colours[diff];
            const notes = document.createElement("span");
            notes.textContent = orig.notes;
            notes.classList.add("stat");
            notes.classList.add("notes");
            const crits = document.createElement("input");
            crits.classList.add("stat");
            crits.classList.add("crits");
            crits.classList.add("clickable");
            crits.oninput = function() {getCrits(i, diff)};
            const score = document.createElement("input");
            score.classList.add("stat");
            score.classList.add("score");
            score.classList.add("clickable");
            score.oninput = function() {getScore(i, diff)};
            score.value = 0;
            const ct = document.createElement("span");
            ct.classList.add("stat");
            ct.classList.add("ct");
            ct.classList.add("clickable");
            ct.onclick = function() {updateCt(i, diff)};
            const rate = document.createElement("span");
            rate.classList.add("stat");
            rate.classList.add("rate");
            li.appendChild(lv);
            li.appendChild(name);
            li.appendChild(notes);
            li.appendChild(crits);
            li.appendChild(score);
            li.appendChild(ct);
            li.appendChild(rate);
            updateScore(li, data[i][diff], original[i][diff]);
            list.appendChild(li);
        }
    }
    try
    {
        copyData(JSON.parse(localStorage.data));
    }
    catch (e)
    {
        if (localStorage)
            localStorage.data = JSON.stringify(data);
    }
    try
    {
        loadPrefs(JSON.parse(localStorage.prefs));
    }
    catch (e)
    {
        loadPrefs(prefs);
        if (localStorage)
            localStorage.prefs = JSON.stringify(prefs);
    }
}
function sortBy(aa, bb, stat)
{
    a = byIndex[aa.id.slice(1)];
    b = byIndex[bb.id.slice(1)];
    const origA = original[a[0]][a[1]];
    const origB = original[b[0]][b[1]];
    const chartA = data[a[0]][a[1]];
    const chartB = data[b[0]][b[1]];
    const scoreA = 1010000 - chartA.crits * 10000 / origA.notes;
    let rateA;
    if (scoreA < 600000)
        rateA = 0;
    else
    {
        rateA = origA.lv * 1000;
        if (scoreA < 950000)
            rateA += (scoreA - 1000000) / 50;
        else if (scoreA < 980000)
            rateA += (scoreA - 980000) / 30;
        else if (scoreA < 1000000)
            rateA += (scoreA - 980000) / 20;
        else if (scoreA < 1008000)
            rateA += (scoreA - 990000) / 10;
        else
            rateA += 1800;
        rateA = Math.max(rateA, 0);
    }
    if (chartA.ct == 1)
        rateA += 100;
    else if (chartA.ct)
        rateA += 200;
    const scoreB = 1010000 - chartB.crits * 10000 / origB.notes;
    let rateB;
    if (scoreB < 600000)
        rateB = 0;
    else
    {
        rateB = origB.lv * 1000;
        if (scoreB < 950000)
            rateB += (scoreB - 1000000) / 50;
        else if (scoreB < 980000)
            rateB += (scoreB - 980000) / 30;
        else if (scoreB < 1000000)
            rateB += (scoreB - 980000) / 20;
        else if (scoreB < 1008000)
            rateB += (scoreB - 990000) / 10;
        else
            rateB += 1800;
        rateB = Math.max(rateB, 0);
    }
    if (chartB.ct == 1)
        rateB += 100;
    else if (chartB.ct)
        rateB += 200;
    if (stat == "name")
    {
        if (a[0] == b[0])
            return 0;
        if (a[0] > b[0])
            return 1;
        return -1;
    }
    if (stat == "lv")
        return origA.lv - origB.lv;
    if (stat == "diff")
        return a[1] - b[1];
    if (stat == "ct")
        return chartA.ct - chartB.ct;
    if (stat == "notes")
        return origA.notes - origB.notes;
    if (stat == "crits")
        return chartA.crits - chartB.crits;
    if (stat == "rate")
        return rateA - rateB;
    if (stat == "score")
        return scoreA - scoreB;
    return origA.index - origB.index;
}
function sortCharts(stat)
{
    const t = list.children;
    const charts = [];
    for (let i of t)
        charts.push(i);
    charts.sort(function(a, b) {return sortBy(a, b, stat)});
    for (let i of charts)
        list.appendChild(i);
}
function reverseCharts()
{
    const t = list.children;
    const charts = [];
    for (let i of t)
        charts.push(i);
    charts.reverse();
    for (let i of charts)
        list.appendChild(i);
}
function shuffleCharts()
{
    const t = list.children;
    const charts = [];
    for (let i of t)
        charts.push(i);
    for (let i = charts.length; i > 0; i--)
    {
        const j = Math.floor(Math.random() * i);
        [charts[i - 1], charts[j]] = [charts[j], charts[i - 1]];
    }
    for (let i of charts)
        list.appendChild(i);

}
