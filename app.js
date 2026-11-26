const floorPlans = {
  "pharmacy": {
    "1F": "./assets/floors/pharmacy_1f.webp",
    "2F": "./assets/floors/pharmacy_2f.webp",
    "GUIDE": "./assets/floors/pharmacy_guide.webp"
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
const nonInteractiveBuildingIds = new Set([1, 2, 4, 5, 12, 19, 20, 21, 22]);
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


// Campus facilities: add verified names, locations and image paths to these arrays.
const facilityCategories = {
  cafe: { title: '카페', items: [
  {
    "name": "카페드림 (café dream)",
    "location": "중앙도서관 2층",
    "image": "./assets/facilities/cafe-dream.webp"
  },
  {
    "name": "GOURMET PLACE X PAUL BASSETT",
    "location": "학생미래인재관 2층",
    "hours": "월요일~토요일 08:00~18:00\n\u3000\u3000\u3000\u3000\u3000라스트오더 17:30\n\u3000\u3000\u3000\u3000\u3000일요일 휴무",
    "image": "./assets/facilities/paul-bassett-student.webp"
  },
  {
    "name": "카페 하랑 (café harang)",
    "location": "니콜스관 4층",
    "hours": "평일 08:30~16:30\n\u3000\u3000\u3000\u3000\u3000주말 휴무",
    "image": "./assets/facilities/cafe-harang.webp"
  },
  {
    "name": "CLUB 1847",
    "location": "안드레아관 1층",
    "hours": "08:00~18:30",
    "image": "./assets/facilities/club1847.webp"
  },
  {
    "name": "GOURMET PLACE X PAUL BASSETT",
    "location": "김수환관 1층 카페 멘사 (Café Mensa) 내부",
    "image": "./assets/facilities/paul-bassett-kim.webp"
  },
  {
    "name": "매머드 익스프레스",
    "location": "학교 정문 앞",
    "hours": "학기 중 08:00~20:00\n\u3000\u3000\u3000\u3000\u3000라스트오더 19:30\n\u3000\u3000\u3000\u3000\u3000방학 중 주말 09:00~18:00\n\u3000\u3000\u3000\u3000\u3000라스트오더 17:30",
    "image": "./assets/facilities/mammoth-express.webp"
  }
] },
  restaurant: { title: '식당', items: [
  {
    "name": "부온 프란조 (Buon Pranzo)",
    "location": "학생미래인재관 2층",
    "hours": "조식 08:00~09:30\n\u3000\u3000\u3000\u3000\u3000중식 11:30~14:00\n\u3000\u3000\u3000\u3000\u3000석식 17:30~19:00",
    "image": "./assets/facilities/buon-pranzo.webp",
    "phone": "02-2164-4736"
  },
  {
    "name": "카페 보나 (Café Bona)",
    "location": "학생미래인재관 1층",
    "hours": "중식 11:30~14:00",
    "image": "./assets/facilities/cafe-bona.webp",
    "phone": "02-2164-4729"
  },
  {
    "name": "카페 멘사 (Café Mensa)",
    "location": "김수환관 1층",
    "hours": "10:30~14:30",
    "image": "./assets/facilities/cafe-mensa.webp"
  }
] },
  'cup-return': { title: '다회용컵 반납함', items: [
  {
    "name": "김수환관 (K관)",
    "location": "1층 카페멘사 출입구 옆",
    "image": "./assets/facilities/cup-return-01.webp"
  },
  {
    "name": "학생미래인재관 (B관)",
    "location": "2층 부온프란조 식당 옆",
    "image": "./assets/facilities/cup-return-02.webp"
  },
  {
    "name": "학생미래인재관 (B관)",
    "location": "1층 카페보나 옆",
    "image": "./assets/facilities/cup-return-03.webp"
  },
  {
    "name": "콘서트홀 (C관)",
    "location": "1층 CH108 음악과 학과사무실 옆",
    "image": "./assets/facilities/cup-return-04.webp"
  },
  {
    "name": "중앙도서관 (베리타스관)",
    "location": "2층 카페드림 옆 휴게실 내부",
    "image": "./assets/facilities/cup-return-05.webp"
  },
  {
    "name": "중앙도서관 (베리타스관)",
    "location": "2층 미디어실 옆",
    "image": "./assets/facilities/cup-return-06.webp"
  },
  {
    "name": "약학관 (NP관)",
    "location": "1층 NP115 생약표본실 옆",
    "image": "./assets/facilities/cup-return-07.webp"
  },
  {
    "name": "안드레아관",
    "location": "카페 클럽 1847 맞은편",
    "image": "./assets/facilities/cup-return-08.webp"
  },
  {
    "name": "스테파노관",
    "location": "기숙사 출입구 앞",
    "image": "./assets/facilities/cup-return-09.webp"
  },
  {
    "name": "스테파노관",
    "location": "기숙사 안내데스크 옆",
    "image": "./assets/facilities/cup-return-10.webp"
  },
  {
    "name": "성심관 (SH관)",
    "location": "2층 엘리베이터 맞은편",
    "image": "./assets/facilities/cup-return-11.webp"
  },
  {
    "name": "미카엘관",
    "location": "1층 우리은행 ATM 옆",
    "image": "./assets/facilities/cup-return-12.webp"
  },
  {
    "name": "다솔관 (D관)",
    "location": "2층 정문 출입구 앞",
    "image": "./assets/facilities/cup-return-13.webp"
  },
  {
    "name": "니콜스관 (N관)",
    "location": "4층 카페하랑 맞은편 휴게공간",
    "image": "./assets/facilities/cup-return-14.webp"
  },
  {
    "name": "니콜스관 (N관)",
    "location": "4층 여자화장실 옆",
    "image": "./assets/facilities/cup-return-15.webp"
  },
  {
    "name": "니콜스관 (N관)",
    "location": "1층 남자화장실 앞",
    "image": "./assets/facilities/cup-return-16.webp"
  },
  {
    "name": "김수환관 (K관)",
    "location": "매머드커피 앞",
    "image": "./assets/facilities/cup-return-17.webp"
  },
  {
    "name": "김수환관 (K관)",
    "location": "2층 흡연실 출입구 옆",
    "image": "./assets/facilities/cup-return-18.webp"
  },
  {
    "name": "김수환관 (K관)",
    "location": "2층 인커라 방면 엘리베이터 옆",
    "image": "./assets/facilities/cup-return-19.webp"
  },
  {
    "name": "김수환관 (K관)",
    "location": "1층 카페멘사 내부",
    "image": "./assets/facilities/cup-return-20.webp"
  }
] },
  convenience: { title: '편의점', items: [
  {
    "name": "이마트24",
    "location": "김수환관(K관) 1층 카페 멘사 내부",
    "image": "./assets/facilities/emart24-kim.webp"
  },
  {
    "name": "GS25",
    "location": "학생미래인재관 (B관) 1층",
    "image": "./assets/facilities/gs25-student.webp"
  }
] }
};
// Item format: { name: '시설명', location: '건물명 · 층수 · 상세 위치', image: './assets/facilities/photo.webp' }
const facilityDialog = document.querySelector('#facility-dialog');
const facilityTitle = document.querySelector('#facility-title');
const facilityList = document.querySelector('#facility-list');
function openFacility(key) {
  const category = facilityCategories[key];
  if (!category) return;
  // Prevent a previously scheduled building popup from opening over this dialog.
  if (pendingArrival !== null) {
    clearTimeout(pendingArrival);
    pendingArrival = null;
    walkingCat.classList.remove('is-moving');
  }
  facilityTitle.textContent = `${category.title} 안내`;
  facilityList.replaceChildren();
  if (key === 'cup-return') {
  const mapCard = document.createElement('section');
  mapCard.className = 'facility-overview';

  const mapTitle = document.createElement('h3');
  mapTitle.textContent = '캠퍼스컵 전체 위치 안내';

  const mapImage = document.createElement('img');
  mapImage.src = './assets/facilities/campus-cup-map.webp';
  mapImage.alt = '캠퍼스컵 전체 반납함 위치 지도';

  const mapNotice = document.createElement('p');
  mapNotice.textContent = '2025.10.01 기준';

  mapCard.append(mapTitle, mapImage, mapNotice);
  facilityList.appendChild(mapCard);
}
  if (!category.items.length) {
    const message = document.createElement('p');
    message.className = 'facility-empty';
    message.textContent = '시설 사진과 위치 정보를 준비 중입니다.';
    facilityList.appendChild(message);
  }
  category.items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'facility-card';
    const name = document.createElement('h3');
    name.textContent = item.name;
    const location = document.createElement('p');
    location.textContent = item.location;
    card.appendChild(name);
    if (item.image) {
      const photo = document.createElement('img');
      photo.alt = `${item.name} 사진`;
      photo.addEventListener('error', () => {
        const note = document.createElement('p');
        note.textContent = '사진을 불러올 수 없습니다.';
        photo.replaceWith(note);
      }, { once: true });
      photo.src = item.image;
      card.appendChild(photo);
    }
    card.appendChild(location);
    if (item.hours) {
      const hours = document.createElement('p');
      hours.textContent = `운영시간: ${item.hours}`;
      hours.style.whiteSpace = 'pre-wrap';
      card.appendChild(hours);
    }
    if (item.phone) {
      const phone = document.createElement('p');
      phone.textContent = `전화번호: ${item.phone}`;
      card.appendChild(phone);
    }
    facilityList.appendChild(card);
  });
  if (!facilityDialog.open) facilityDialog.showModal();
  facilityDialog.scrollTop = 0;
}
document.querySelectorAll('.facility-btn').forEach(button => {
  button.addEventListener('click', () => openFacility(button.dataset.facility));
});
document.querySelector('#close-facility-dialog').addEventListener('click', () => facilityDialog.close());
facilityDialog.addEventListener('click', event => {
  if (event.target === facilityDialog) facilityDialog.close();
});

// Campus onboarding: reuse the existing building dialog for the floor example.
(() => {
  const root = document.querySelector('#campus-tour');
  const help = document.querySelector('#tour-help');
  const spot = document.querySelector('#tour-spotlight');
  const card = document.querySelector('#tour-card');
  const next = document.querySelector('#tour-next');
  const prev = document.querySelector('#tour-prev');
  const skip = document.querySelector('#tour-skip');
  const close = document.querySelector('#tour-close');
  const key = 'campusTourCompleted';
  const steps = [
    { title:'가대 ZIP에 오신 것을 환영해요!', text:'건물별 층별 도면부터 교내 편의시설까지, 가대 ZIP에서 한눈에 확인해 보세요.' },
    { target:'.map-hotspot:not(:disabled)', title:'캠퍼스 전체 지도', text:'지도에 표시된 건물 번호를 누르면 고양이가 이동하고, 이용 가능한 건물의 층별 도면이 열려요.' },
    { target:'#floor-tabs', demo:true, title:'층별 도면 확인', text:'팝업 상단에서 원하는 층을 선택하면 강의실과 시설 위치를 확인할 수 있어요. 도면 확대도 가능해요.' },
    { target:'.facility-menu', title:'교내 편의시설', text:'지도 아래 아이콘을 누르면 카페, 식당, 다회용컵 반납함, 편의점의 사진과 위치, 등록된 운영시간을 확인할 수 있어요.' },
    { target:'.search-field', title:'건물 검색', text:'건물 이름이나 약어를 입력하면 원하는 건물을 빠르게 찾을 수 있어요.' },
    { target:'.directory-item:not(:disabled)', title:'건물 목록', text:'건물 목록에서도 원하는 건물을 선택할 수 있어요. 안내가 다시 필요하면 상단의 ? 버튼을 눌러 주세요!' }
  ];
  let index = -1, demoOpen = false, oldFocus = null, oldOverflow = '', locked = [], frame = 0;
  function unlock() { locked.forEach(el => { el.inert = false; }); locked = []; }
  function lock(elements) { elements.forEach(el => { if (el && !el.inert) { el.inert = true; locked.push(el); } }); }
  function leaveDemo() {
    if (!demoOpen) return;
    document.body.appendChild(root);
    demoOpen = false;
    if (dialog.open) dialog.close();
  }
  function position() {
    if (index < 0) return;
    const w = root.clientWidth, h = root.clientHeight;
    if (!w || !h) return;
    const target = document.querySelector(steps[index].target || '#page-title');
    const r = target?.getBoundingClientRect();
    const base = root.getBoundingClientRect();
    const clamp = (v,min,max) => Math.max(min,Math.min(max,v));
    const x = r ? clamp(r.left-base.left-6,0,w) : w/2;
    const y = r ? clamp(r.top-base.top-6,0,h) : h/2;
    const right = r ? clamp(r.right-base.left+6,0,w) : x;
    const bottom = r ? clamp(r.bottom-base.top+6,0,h) : y;
    const visible = index !== 0 && r && right>x && bottom>y;
    Object.assign(spot.style,{left:`${visible?x:w/2}px`,top:`${visible?y:h/2}px`,width:`${visible?right-x:0}px`,height:`${visible?bottom-y:0}px`,borderWidth:visible?'2px':'0'});
    const cw=card.offsetWidth,ch=card.offsetHeight;
    let left=(w-cw)/2, top=(h-ch)/2;
    if (visible) {
      left=clamp((x+right-cw)/2,12,w-cw-12);
      if (h-bottom >= ch+20) top=bottom+12;
      else if (y >= ch+20) top=y-ch-12;
      else if (w-right >= cw+20) {left=right+12;top=clamp(y,12,h-ch-12);}
      else if (x >= cw+20) {left=x-cw-12;top=clamp(y,12,h-ch-12);}
      else top=(y > h-bottom)?12:h-ch-12;
    }
    card.style.left=`${clamp(left,12,w-cw-12)}px`;
    card.style.top=`${clamp(top,12,h-ch-12)}px`;
  }
  function schedulePosition() { cancelAnimationFrame(frame); frame=requestAnimationFrame(position); }
  function show(i) {
    unlock(); leaveDemo(); index=i;
    const step=steps[i];
    if(step.demo) {
      const example=buildings.find(b=>!b.nonInteractive && b.plans['1F']);
      if(example) { openBuilding(example); demoOpen=true; dialog.appendChild(root); lock([...dialog.children].filter(el=>el!==root)); }
    }
    if(!demoOpen) lock([document.querySelector('.site-header'),document.querySelector('.page-shell')]);
    root.hidden=false;
    document.querySelector('#tour-title').textContent=step.title;
    document.querySelector('#tour-description').textContent=step.text;
    document.querySelector('#tour-count').textContent=`${i+1} / ${steps.length}`;
    document.querySelector('#tour-progress').replaceChildren(...steps.map((_,n)=>{const el=document.createElement('span');if(n<=i)el.className='current';return el;}));
    prev.hidden=i===0; next.textContent=i===steps.length-1?'완료':'다음';
    const target=document.querySelector(step.target||'.intro');
    target?.scrollIntoView({block:'center',inline:'nearest',behavior:'instant'});
    position(); schedulePosition(); next.focus({preventScroll:true});
  }
  function start() {
    if(index>=0 || dialog.open || facilityDialog.open) return;
    if(pendingArrival!==null) {clearTimeout(pendingArrival);pendingArrival=null;walkingCat.classList.remove('is-moving');}
    oldFocus=document.activeElement;oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
    show(0);
  }
  function finish() {
    if(index<0)return;
    index=-1;root.hidden=true;cancelAnimationFrame(frame);unlock();leaveDemo();document.body.style.overflow=oldOverflow;
    try{localStorage.setItem(key,'true');}catch{}
    if(oldFocus===help) help.focus(); else {window.scrollTo(0,0);help.focus({preventScroll:true});}
  }
  help.addEventListener('click',start);
  next.addEventListener('click',()=>index===steps.length-1?finish():show(index+1));
  prev.addEventListener('click',()=>{if(index>0)show(index-1);});
  skip.addEventListener('click',finish);close.addEventListener('click',finish);
  document.addEventListener('keydown',e=>{
    if(index<0)return;
    if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();finish();}
    if(e.key==='Tab'){
      const buttons=[close,skip,prev,next].filter(b=>!b.hidden);
      const n=buttons.indexOf(document.activeElement);
      if(n<0||(e.shiftKey&&n===0)||(!e.shiftKey&&n===buttons.length-1)){e.preventDefault();buttons[e.shiftKey?buttons.length-1:0].focus();}
    }
  },true);
  dialog.addEventListener('cancel',e=>{if(index>=0&&demoOpen){e.preventDefault();finish();}});
  window.addEventListener('resize',schedulePosition);
  window.addEventListener('scroll',schedulePosition,true);
  window.visualViewport?.addEventListener('resize',schedulePosition);
  const map=document.querySelector('.campus-map');
  map.addEventListener('load',schedulePosition);
  function autoStart(){let seen=false;try{seen=localStorage.getItem(key)==='true';}catch{}if(!seen)start();}
  if(document.readyState==='complete')autoStart();else window.addEventListener('load',autoStart,{once:true});
})();

