const byIndex = [];
const prefs = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const data = {};
const cts = ["", "FC", "AC", "AAC"];
const ctCounts = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
const colours = ["#1aff55", "#1ab9ff", "#ff1a4a", "#c342ff", "#000000"];
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
function update(li, chart, orig)
{
    chart.score = Math.max(0, Math.min(chart.score, 1010000));
    const t = Math.round(chart.score * orig.notes / 10000);
    const lost = 101 * orig.notes - t;
    chart.score = t * 10000 / orig.notes;
    let rate = 0;
    if (chart.score >= 600000)
    {
        rate = orig.lv * 1000;
        if (chart.score < 950000)
            rate += (chart.score - 1000000) / 50;
        else if (chart.score < 980000)
            rate += (chart.score - 980000) / 30;
        else if (chart.score < 1000000)
            rate += (chart.score - 980000) / 20;
        else if (chart.score < 1008000)
            rate += (chart.score - 990000) / 10;
        else
            rate += 1800;
        rate = Math.max(rate, 0);
    }
    if (chart.ct == 1)
        rate += 100;
    else if (chart.ct)
        rate += 200;
    const stats = li.children;
    stats[3].textContent = lost;
    stats[6].textContent = Math.round(rate);
    stats[5].textContent = cts[chart.ct];
    stats[5].style.backgroundImage = ctColours[prefs[4]][chart.ct];
    for (let i = 0; i < 5; i++)
    {
        for (let j = 0; j < 4; j++)
            ctCounts[i][j] = 0;
    }
    for (let i in original)
    {
        for (let j = 0; j < original[i].length; j++)
        {
            for (let k = 4 - data[i][j].ct; k < 5; k++)
                ctCounts[k][j]++;
            ctCounts[0][j] += data[i][j].score;
        }
    }
    const counts = document.getElementById("stats").children;
    for (let i = 0; i < 4; i++)
    {
        const countsT = counts[i + 1].children;
        for (let j = 1; j < 5; j++)
            countsT[j].textContent = ctCounts[j][i];
        countsT[0].textContent = Math.round(ctCounts[0][i]);
    }
}
function getScore(i, diff)
{
    const chart = data[i][diff];
    const orig = original[i][diff];
    const li = document.getElementById("c" + orig.index);
    const a = parseInt(li.children[4].value);
    if (!isNaN(a))
        chart.score = a;
    update(li, chart, orig);
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
    update(li, chart, orig);
    if (localStorage)
        localStorage.data = JSON.stringify(data);
}
function save()
{
    if (navigator.clipboard && navigator.clipboard.writeText)
        navigator.clipboard.writeText(JSON.stringify(data));
    else
        alert(JSON.stringify(data));
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
                    data[i][j].score = b[i][j].score;
                    data[i][j].ct = b[i][j].ct;
                    const li = document.getElementById("c" + original[i][j].index);
                    li.children[4].value = Math.round(data[i][j].score);
                    update(li, data[i][j], original[i][j]);
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
    {
        const a = navigator.clipboard.readText();
        a.then(function(A) {actuallyLoad(A)});
    }
    else
        actuallyLoad(JSON.parse(prompt()));
        
}
function reset()
{
    for (let i in original)
    {
        for (let j = 0; j < original[i].length; j++)
        {
            data[i][j].score = 0;
            data[i][j].ct = 0;
            update(document.getElementById("c" + original[i][j].index), data[i][j], original[i][j]);
        }
    }
    localStorage.data = JSON.stringify(data);
}
function init()
{
    const charts = document.getElementById("stats").children;
    const chartsT = charts[0].children;
    for (let i = 0; i < 4; i++)
    {
        charts[i + 1].style.color = colours[i];
        chartsT[i + 1].style.backgroundImage = ctColours[prefs[4]][3 - i];
    }
    for (let i in original)
    {
        data[i] = [];
        for (let j = 0; j < original[i].length; j++)
        {
            data[i].push({score: 0, ct: 0});
            byIndex[original[i][j].index] = [i, j];
        }
    }
    for (let i = 0; i < 5; i++)
        document.getElementById("pref" + i).style.backgroundColor = colours[i];
    for (let i = 0; i < 4; i++)
        document.getElementById("pref" + (i + 5)).style.backgroundImage = ctColours[prefs[4]][i];
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
            const lost = document.createElement("span");
            lost.classList.add("stat");
            lost.classList.add("lost");
            const score = document.createElement("input");
            score.classList.add("stat");
            score.classList.add("score");
            score.classList.add("clickable");
            score.oninput = function() {getScore(i, diff)};
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
            li.appendChild(lost);
            li.appendChild(score);
            li.appendChild(ct);
            li.appendChild(rate);
            update(li, chart, orig);
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
}
function sortBy(aa, bb, stat)
{
    a = byIndex[aa.id.slice(1)];
    b = byIndex[bb.id.slice(1)];
    const origA = original[a[0]][a[1]];
    const origB = original[b[0]][b[1]];
    const chartA = data[a[0]][a[1]];
    const chartB = data[b[0]][b[1]];
    const tA = Math.round(chartA.score * origA.notes / 10000);
    const lostA = 101 * origA.notes - tA;
    chartA.score = tA * 10000 / origA.notes;
    let rateA;
    if (chartA.score < 600000)
        rateA = 0;
    else
    {
        rateA = origA.lv * 1000;
        if (chartA.score < 950000)
            rateA += (chartA.score - 1000000) / 50;
        else if (chartA.score < 980000)
            rateA += (chartA.score - 980000) / 30;
        else if (chartA.score < 1000000)
            rateA += (chartA.score - 980000) / 20;
        else if (chartA.score < 1008000)
            rateA += (chartA.score - 990000) / 10;
        else
            rateA += 1800;
    }
    if (chartA.ct == 1)
        rateA += 100;
    else if (chartA.ct)
        rateA += 200;
    const tB = Math.round(chartB.score * origB.notes / 10000);
    const lostB = 101 * origB.notes - tB;
    chartB.score = tB * 10000 / origB.notes;
    let rateB;
    if (chartB.score < 600000)
        rateB = 0;
    else
    {
        rateB = origB.lv * 1000;
        if (chartB.score < 950000)
            rateB += (chartB.score - 1000000) / 50;
        else if (chartB.score < 980000)
            rateB += (chartB.score - 980000) / 30;
        else if (chartB.score < 1000000)
            rateB += (chartB.score - 980000) / 20;
        else if (chartB.score < 1008000)
            rateB += (chartB.score - 990000) / 10;
        else
            rateB += 1800;
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
    if (stat == "lost")
        return lostA - lostB;
    if (stat == "rate")
        return rateA - rateB;
    if (stat == "score")
        return chartA.score - chartB.score;
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
function toggleDiff(a)
{
    prefs[a] = 1 - prefs[a];
    if (prefs[a])
    {
        if (a < 5)
            document.getElementById("pref" + a).style.backgroundColor = colours[a];
        else
            document.getElementById("pref" + a).style.backgroundImage = ctColours[prefs[4]][a - 5];
    }
    else
    {
        if (a < 5)
            document.getElementById("pref" + a).style.backgroundColor = "#000000";
        else
            document.getElementById("pref" + a).style.backgroundImage = "linear-gradient(black)";
    }
    for (let i in original)
    {
        for (let j = 0; j < original[i].length; j++)
        {
            const orig = original[i][j];
            const chart = data[i][j];
            const li = document.getElementById("c" + orig.index);
            if (prefs[j] && prefs[data[i][j].ct + 5])
                li.style.display = "flex";
            else
                li.style.display = "none";
            li.children[5].style.backgroundImage = ctColours[prefs[4]][chart.ct];
        }
    }
    const charts = document.getElementById("stats").children[0].children;
    for (let i = 0; i < 4; i++)
        charts[i + 1].style.backgroundImage = ctColours[prefs[4]][3 - i];
    for (let i = 0; i < 4; i++)
    {
        if (prefs[i + 5])
            document.getElementById("pref" + (i + 5)).style.backgroundImage = ctColours[prefs[4]][i];
    }
}