const floorPlans = {
  "pharmacy": {
    "1F": "./assets/floors/pharmacy_1f.webp",
    "2F": "./assets/floors/pharmacy_2f.webp"
  },
  "bambino": {
  "1F": "./assets/floors/law_1f.webp",
  "2F": "./assets/floors/law_2f.webp",
  "3F": "./assets/floors/law_3f.webp"
  },
  "nicholls": {
    "1F": "./assets/floors/nicholls_1f.webp",
    "2F": "./assets/floors/nicholls_2f.webp",
    "3F": "./assets/floors/nicholls_3f.webp",
    "4F": "./assets/floors/nicholls_4f.webp",
    "5F": "./assets/floors/nicholls_5f.webp"
  },
  "maria": {
    "1F": "./assets/floors/maria_1f.webp",
    "2F": "./assets/floors/maria_2f.webp",
    "3F": "./assets/floors/maria_3f.webp",
    "4F": "./assets/floors/maria_4f.webp"
  },
  "virtus": {
    "1F": "./assets/floors/virtus_1f.webp",
    "2F": "./assets/floors/virtus_2f.webp",
    "3F": "./assets/floors/virtus_3f.webp"
  },
  "library": {
    "2F": "./assets/floors/library_2f.webp",
    "3F": "./assets/floors/library_3f.webp",
    "4F": "./assets/floors/library_4f.webp"
  },
  "mikael_admin": {
    "1F": "./assets/floors/future_1f.webp",
    "2F": "./assets/floors/future_2f.webp",
    "3F": "./assets/floors/future_3f.webp",
    "4F": "./assets/floors/future_4f.webp"
  },
  "mikael_faculty": {
    "B1": "./assets/floors/future_b1.webp"
  },
  "student": {
    "1F": "./assets/floors/student_1f.webp",
    "2F": "./assets/floors/student_2f.webp",
    "3F": "./assets/floors/student_3f.webp"
  },
  "kim": {
    "1F": "./assets/floors/kim_1f.webp",
    "2F": "./assets/floors/kim_2f.webp",
    "3F": "./assets/floors/kim_3f.webp",
    "GUIDE": "./assets/floors/kim_guide.webp"
  },
  "dasol": {
    "2F": "./assets/floors/dasol_2f.webp",
    "3F": "./assets/floors/dasol_3f.webp",
    "4F": "./assets/floors/dasol_4f.webp",
    "5F": "./assets/floors/dasol_5f.webp",
    "6F": "./assets/floors/dasol_6f.webp",
    "7F": "./assets/floors/dasol_7f.webp",
    "GUIDE": "./assets/floors/dasol_guide.webp"
  },
  "seongsim": {
    "B1": "./assets/floors/seongsim_b1.webp",
    "1F": "./assets/floors/seongsim_1f.webp",
    "2F": "./assets/floors/seongsim_2f.webp",
    "3F": "./assets/floors/seongsim_3f.webp",
    "4F": "./assets/floors/seongsim_4f.webp",
    "5F": "./assets/floors/seongsim_5f.webp",
    "ROOF": "./assets/floors/seongsim_roof.webp"
  },
  "concert": {
  "1F": "./assets/floors/concert_1f.webp"
  }
};

const facultyFloorInfo = {
  "1F": ["특수교육과", "교육대학원"],
  "2F": ["프랑스어문화학과", "교직과", "일어일본문화전공"],
  "3F": ["사회복지학전공", "심리학전공"],
  "4F": ["심리학전공", "사회학전공"],
  "5F": ["사회학전공", "경영학전공"],
  "6F": ["회계학전공", "법학부"],
  "7F": ["행정학전공", "경제학전공", "국어국문학전공"],
  "8F": ["국어국문학전공", "철학전공", "국사학전공"],
  "9F": ["중국언어문화전공", "종교학과", "행정학전공"]
};
const nonInteractiveBuildingIds = new Set([1, 2, 12, 19, 20, 21, 22]);
const buildings = [
  { id:1, name:'정문', x:20.0, y:67.4 },
  { id:2, name:'창업보육센터', x:17.1, y:65.2 },
  { id:3, name:'K관', alias:'김수환관', x:24.4, y:56.9, planKey:'kim' },
  { id:4, name:'스테파노 기숙사', x:14.4, y:53.3 },
  { id:5, name:'안드레아 기숙사', x:26.6, y:51.3 },
  { id:6, name:'M관', alias:'마리아관', x:37.7, y:55.7, planKey:'maria' },
  { id:7, name:'N관', alias:'니콜스관', x:33.2, y:45.7, planKey:'nicholls' },
  { id:8, name:'BA관', alias:'밤비노관', x:34.6, y:40.2, planKey:'bambino' },
  { id:9, name:'D관', alias:'다솔관', x:33.5, y:33.4, planKey:'dasol' },
  { id:10, name:'V관', alias:'비르투스관', x:29.6, y:41.1, planKey:'virtus' },
  { id:11, name:'B관(소피이바라관)', alias:'학생미래인재관', x:44.7, y:36.0, planKey:'student' },
  { id:12, name:'하늘동산', x:49.8, y:47.2 },
  { id:13, name:'H관', alias:'미카엘관 - 행정동', x:53.0, y:26.7, planKey:'mikael_admin' },
  { id:14, name:'T관', alias:'미카엘관 - 교수연구동', x:46.6, y:26.2, planKey:'mikael_faculty', infoFloors:facultyFloorInfo },
  { id:15, name:'베리타스관', alias:'중앙도서관', x:63.2, y:26.9, planKey:'library' },
  { id:16, name:'SH관', alias:'성심관', x:82.1, y:17.9, planKey:'seongsim' },
  { id:17, name:'NP관', alias:'정진석 추기경 약학관', x:67.3, y:16.7, planKey:'pharmacy' },
  { id:18, name:'C관', alias:'콘서트홀', x:86.0, y:29.7, planKey:'concert' },
  { id:19, name:'대운동장', x:75.8, y:41.3 },
  { id:20, name:'바오로관(사제관)', x:21.0, y:34.7 },
  { id:21, name:'국제교류관', x:24.3, y:30.0 },
  { id:22, name:'예수성심성당', x:8.1, y:47.0 },

].map(b => {
  const plans = b.planKey ? floorPlans[b.planKey] : {};
  const floorOrder = ['B2','B1','1F','2F','3F','4F','5F','6F','7F','8F','9F','10F','ROOF','GUIDE'];
  const floors = [...new Set([...Object.keys(plans), ...Object.keys(b.infoFloors || {})])].sort((a,c)=>floorOrder.indexOf(a)-floorOrder.indexOf(c));
  return { ...b, floors, plans, nonInteractive: nonInteractiveBuildingIds.has(b.id) };
});
const mapHotspots = document.querySelector('#map-hotspots');
const walkingCat = document.querySelector('#walking-cat');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const directory = document.querySelector('#directory-list');
const searchInput = document.querySelector('#search');
const emptyState = document.querySelector('#empty-state');
const dialog = document.querySelector('#building-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogSubtitle = document.querySelector('#dialog-subtitle');
const floorTabs = document.querySelector('#floor-tabs');
const floorImage = document.querySelector('#floor-image');
const floorPlaceholder = document.querySelector('#floor-placeholder');
const floorInfoCard = document.querySelector('#floor-info-card');
const placeholderTitle = document.querySelector('#placeholder-title');
const viewer = document.querySelector('#floor-viewer');
const upload = document.querySelector('#preview-upload');
const floorStatus = document.querySelector('#floor-status');
const viewerToolbar = document.querySelector('#viewer-toolbar');
const viewerCaption = document.querySelector('#viewer-caption');
const zoomReset = document.querySelector('#zoom-reset');
let zoom = 1;
function setZoom(level) {
  zoom = Math.max(1, Math.min(3, Math.round(level * 4) / 4));
  floorImage.style.width = zoom === 1 ? '100%' : `${100 * zoom}%`;
  floorImage.style.maxWidth = zoom === 1 ? '100%' : 'none';
  zoomReset.textContent = `${Math.round(zoom * 100)}%`;
}
function resetZoom() { setZoom(1); viewer.scrollTop=0; viewer.scrollLeft=0; }
document.querySelector('#zoom-in').addEventListener('click', () => setZoom(zoom + .25));
document.querySelector('#zoom-out').addEventListener('click', () => setZoom(zoom - .25));
zoomReset.addEventListener('click', resetZoom);
document.querySelector('#open-image').addEventListener('click', () => {
  if (!floorImage.hidden && floorImage.src) window.open(floorImage.src,'_blank','noopener,noreferrer');
});
let selectedBuilding = null;
let selectedFloor = null;
let tempPreviewUrl = null;

let catPosition = { x: 20, y: 72 };
let pendingArrival = null;
function visitBuilding(b) {
  if (b.nonInteractive || b.directoryOnly) return;
  if (pendingArrival !== null) {
    clearTimeout(pendingArrival);
    pendingArrival = null;
  }

  const distance = Math.hypot(b.x - catPosition.x, b.y - catPosition.y);
  const duration = reduceMotion.matches ? 0 : Math.round(Math.min(1350, Math.max(650, distance * 18)));
  walkingCat.style.setProperty('--walk-duration', `${duration}ms`);
  walkingCat.classList.toggle('facing-right', b.x > catPosition.x);
  walkingCat.classList.toggle('is-moving', duration > 0 && distance > 0.5);
  walkingCat.style.left = `${b.x}%`;
  walkingCat.style.top = `${b.y}%`;
  catPosition = { x: b.x, y: b.y };

  if (duration === 0 || distance <= 0.5) {
    walkingCat.classList.remove('is-moving');
    openBuilding(b);
    return;
  }
  pendingArrival = window.setTimeout(() => {
    pendingArrival = null;
    walkingCat.classList.remove('is-moving');
    openBuilding(b);
  }, duration + 70);
}

function buildingLabel(b) { return `${b.id}번 ${b.name}${b.alias ? ` (${b.alias})` : ''}`; }

buildings.forEach(b => {
  if (!b.directoryOnly) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'map-hotspot';
  btn.style.left = `${b.x}%`;
  btn.style.top = `${b.y}%`;
  btn.setAttribute('aria-label', b.nonInteractive ? buildingLabel(b) : `${buildingLabel(b)} 안내 열기`);
  btn.disabled = b.nonInteractive;
  btn.title = buildingLabel(b);
  btn.innerHTML = `<span class="hotspot-ring"></span><span class="hotspot-tooltip"></span>`;
  btn.querySelector('.hotspot-tooltip').textContent = b.name;
  if (!b.nonInteractive) btn.addEventListener('click', () => visitBuilding(b));
  mapHotspots.appendChild(btn);
  }

  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'directory-item';
  item.dataset.id = String(b.id);
  item.disabled = b.nonInteractive;
  item.innerHTML = '<span class="building-number"></span><span class="building-label"><strong></strong><small></small></span><span class="item-arrow" aria-hidden="true">↗</span>';
  item.querySelector('.building-number').textContent = b.directoryOnly ? '＋' : String(b.id).padStart(2,'0');
  item.querySelector('strong').textContent = b.alias || b.name;
  
  const directoryDetail = item.querySelector('small');
  directoryDetail.textContent = b.nonInteractive
    ? ''
    : b.alias
      ? b.name
      : b.floors.length
        ? `${b.floors.length}개 층 도면`
        : '도면 준비 중';
  directoryDetail.hidden = b.nonInteractive;
  if (!b.nonInteractive) item.addEventListener('click', () => visitBuilding(b));
  directory.appendChild(item);
});

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().replace(/\s+/g,'').toLowerCase();
  let matches = 0;
  buildings.forEach(b => {
    const found = !q || `${b.id}${b.name}${b.alias || ''}`.replace(/\s+/g,'').toLowerCase().includes(q);
    const item = directory.querySelector(`[data-id="${b.id}"]`);
    item.hidden = !found;
    if (!b.directoryOnly) {
      const hotspot = mapHotspots.children[b.id-1];
      hotspot.classList.toggle('searched', Boolean(q) && found);
      hotspot.classList.toggle('dimmed', Boolean(q) && !found);
    }
    if (found) matches++;
  });
  emptyState.hidden = matches !== 0;
});

function clearTempPreview() {
  if (tempPreviewUrl) URL.revokeObjectURL(tempPreviewUrl);
  tempPreviewUrl = null;
  upload.value = '';
}

function openBuilding(b) {
  if (b.nonInteractive) return;
  clearTempPreview();
  selectedBuilding = b;
  selectedFloor = b.floors.find(f => f !== 'GUIDE') || b.floors[0] || null;
  dialogTitle.textContent = b.name;
  dialogSubtitle.textContent = b.directoryOnly ? '도면 제공 · 지도 위치 미확인' : `캠퍼스 지도 ${String(b.id).padStart(2,'0')}번${b.alias ? ` · ${b.alias}` : ''}`;
  drawTabs();
  drawFloor();
  if (!dialog.open) dialog.showModal();
}

function drawTabs() {
  floorTabs.replaceChildren();
  if (!selectedBuilding.floors.length) {
    const msg = document.createElement('span');
    msg.className = 'floor-empty';
    msg.textContent = '등록된 층 정보가 없습니다.';
    floorTabs.appendChild(msg);
    return;
  }
  selectedBuilding.floors.forEach(floor => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'floor-tab';
    tab.role = 'tab';
    tab.textContent = floor === 'GUIDE' ? '층별 안내' : floor === 'ROOF' ? '옥탑층' : floor;
    tab.setAttribute('aria-selected', String(floor === selectedFloor));
    tab.addEventListener('click', () => {
      clearTempPreview();
      selectedFloor = floor;
      drawTabs();
      drawFloor();
    });
    floorTabs.appendChild(tab);
  });
}

function showPlaceholder() {
  floorImage.hidden = true;
  floorImage.removeAttribute('src');
  floorPlaceholder.hidden = false;
  floorInfoCard.hidden = true;
  placeholderTitle.textContent = selectedFloor ? `${selectedFloor} 도면 준비 중` : '층별 도면 준비 중';
  viewerToolbar.hidden = true;
  floorStatus.textContent = '도면 미등록';
  resetZoom();
}

function drawFloor() {
  const path = selectedFloor && selectedBuilding?.plans[selectedFloor];
  viewer.setAttribute('aria-label', `${selectedBuilding.name} ${selectedFloor || ''} 층별 도면`);
  resetZoom();
  if (path) {
    floorInfoCard.hidden = true;
    floorImage.src = path;
    floorImage.alt = `${selectedBuilding.name} ${selectedFloor} 층별 도면`;
    floorImage.hidden = false;
    floorPlaceholder.hidden = true;
    viewerToolbar.hidden = false;
    viewerCaption.textContent = selectedFloor === 'GUIDE' ? '건물 층별 시설 안내표' : `${selectedFloor === 'ROOF' ? '옥탑층' : selectedFloor} · 층별 도면`;
    floorStatus.textContent = '도면 등록됨';
  } else if (selectedBuilding?.infoFloors?.[selectedFloor]) {
    showFacultyInfo(selectedFloor, selectedBuilding.infoFloors[selectedFloor]);
  } else showPlaceholder();
}

function showFacultyInfo(floor, departments) {
  floorImage.hidden = true;
  floorImage.removeAttribute('src');
  floorPlaceholder.hidden = true;
  viewerToolbar.hidden = true;
  floorStatus.textContent = '교수연구실 안내';
  floorInfoCard.replaceChildren();
  const icon = document.createElement('span');
  icon.className = 'floor-info-symbol';
  icon.textContent = '⌂';
  const title = document.createElement('h4');
  title.textContent = `${floor} · 교수연구실`;
  const description = document.createElement('p');
  description.textContent = '미카엘관 교수연구동 층별 안내';
  const list = document.createElement('ul');
  departments.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
  });
  floorInfoCard.append(icon, title, description, list);
  floorInfoCard.hidden = false;
}

floorImage.addEventListener('error', showPlaceholder);
upload.addEventListener('change', () => {
  const file = upload.files?.[0];
  if (!file || !file.type.startsWith('image/')) return;
  clearTempPreviewURLOnly();
  tempPreviewUrl = URL.createObjectURL(file);
  floorImage.src = tempPreviewUrl;
  floorImage.alt = `${selectedBuilding.name} ${selectedFloor} 임시 미리보기: ${file.name}`;
  floorImage.hidden = false;
  floorPlaceholder.hidden = true;
  floorInfoCard.hidden = true;
  viewerToolbar.hidden = false;
  floorStatus.textContent = '임시 미리보기';
  viewerCaption.textContent = file.name;
  resetZoom();
});
function clearTempPreviewURLOnly() {
  if (tempPreviewUrl) URL.revokeObjectURL(tempPreviewUrl);
  tempPreviewUrl = null;
}

document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', clearTempPreview);
