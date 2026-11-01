const TIPS = {
  deploy: ["先确认回滚方案再点发布。","灰度观察至少覆盖一个完整业务高峰。","发布后核对监控、日志和关键告警是否静默。"],
  incident: ["先止血，再找根因。","把时间线写清楚：发现、影响、动作、结果。","改配置前先备份当前值。"],
  cost: ["闲置公网 IP 和按量盘最容易漏关。","实验资源当天用完当天删。","大规格机器先问是否真需要，再谈优化。"]
};
const note = document.getElementById("note");
const tip = document.getElementById("tip");
const savedHint = document.getElementById("savedHint");
const KEY = "ops-tip-board-note";
note.value = localStorage.getItem(KEY) || "";
document.getElementById("save").onclick = () => {
  localStorage.setItem(KEY, note.value.trim());
  savedHint.hidden = false;
};
document.getElementById("clear").onclick = () => {
  note.value = "";
  localStorage.removeItem(KEY);
  savedHint.hidden = true;
};
document.getElementById("draw").onclick = () => {
  const scene = document.getElementById("scene").value;
  const list = TIPS[scene] || [];
  tip.textContent = list[Math.floor(Math.random() * list.length)] || "暂无提示";
};
