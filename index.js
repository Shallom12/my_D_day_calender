// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "주님의 은혜와 평강이 새해에도 가득하시길 기도합니다.(고린도후서 13:13)" },
  { "number": 2, "message": "희망찬 새해, 주님의 사랑 안에서 기쁨과 웃음 가득한 한 해 되세요! (로마서 15:13)" },
  { "number": 3, "message": " 새해에는 주님의 말씀대로 살아가며, 하나님의 뜻을 따라 행하는 한 해 되세요! (마태복음 7:24)" },
  { "number": 4, "message": " 2024년 주님의 뜻을 따라 행하며 풍성한 축복을 경험하는 한 해 되세요!(잠언 3:5-6)" },
  { "number": 5, "message": "예수 그리스도의 빛으로 세상을 비추는 따뜻한 사람이 되세요. 주님의 사랑을 베풀며 세상을 더욱 아름답게 만드는 한 해 되세요! ( (마태복음 5:14)" },
  { "number": 6, "message": "예수 그리스도의 부활처럼 새롭게 시작하는 새해, 주님의 영광을 위해 살아가는 한 해 되세요. 죄에서 벗어나 거룩한 삶으로 변화하는 은혜를 경험하세요!(고린도후서 5:17)" },
  { "number": 7, "message": "2024년 주님의 평강이 마음과 생각을 지켜주시길 기도합니다. (빌립보서 4:7)" },
  { "number": 8, "message": "새해에는 하나님의 말씀을 깊이 묵상하고, 그의 뜻에 따라 살아가는 신앙의 한 해 되세요. 주님의 말씀대로 행하며 풍성한 축복을 경험하세요!(시편 1:2)" },
  { "number": 9, "message": "2024년 주님의 뜻을 따라 행하며 축복받은 한 해 되세요!(잠언 3:5-6)" },
  { "number": 10, "message": "새해에는 주님의 사랑을 베풀며, 세상을 밝히는 한 해 되세요! (마태복음 5:14)" },
  { "number": 11, "message": " 주님의 사랑과 은혜가 함께하는 따뜻한 한 해 되세요. 하나님의 뜻을 따라 행하며 세상에 빛이 되는 존재가 되세요(요한복음 3:16)" },
  { "number": 12, "message": "믿음으로 나아가는 새해, 주님의 뜻을 따라 행하며 축복받은 한 해 되세요. 어려움 속에서도 흔들리지 않고 굳건한 믿음을 유지하세요! (히브리서 11:1)" },
  { "number": 13, "message": "2024년 설날, 주님의 말씀을 삶의 빛 삼아 걸어가는 한 해 되세요! (시편 119:105)" },
  { "number": 14, "message": "믿음과 사랑으로 가득한 새해, 주님의 영광을 드러내는 한 해 되세요! (고린도후서 3:18)" },
  { "number": 15, "message": " 주님의 말씀에 뿌리를 내리고, 믿음으로 성장하는 한 해 되세요! (마태복음 7:24)" },
  { "number": 16, "message": "새해에는 주님의 뜻을 구하며, 그의 인도하심을 따라 행하는 한 해 되세요!(야고보서 1:22)" },
  { "number": 17, "message": "새해에는 하나님의 넘치는 사랑과 평강이 당신의 삶을 가득 채우기를 기도합니다. 마치 에덴동산처럼 풍요롭고 행복한 한 해 되세요! (시편 23:1-6)" },
  { "number": 18, "message": "주님의 사랑과 긍휼이 당신의 삶을 가득 채우는 한 해 되세요. 마치 다윗처럼 주님의 사랑 안에서 용기와 지혜로 살아가세요!(시편 78:70-72)" },
  {
    "number": 19, "message":
      "새해에는 주님의 말씀을 삶의 양식으로 삼고, 그의 뜻에 따라 행하는 한 해 되세요. 마치 이스라엘 백성처럼 광야에서도 하나님의 말씀에 순종하며 축복을 경험하세요! (출애굽기 16장)"
  },
  { "number": 20, "message": "주님의 사랑과 은혜가 당신의 삶을 비추고 인도하는 한 해 되세요. 마치 이사야처럼 주님의 말씀을 선포하며 세상을 변화시키는 존재가 되세요! (이사야 6:1-8" },
  { "number": 21, "message": "새해에는 주님의 사랑을 세상에 전파하며 복음을 증거하는 한 해 되세요. 마치 바울처럼 끊임없이 복음을 전파하며 하나님의 나라를 확장하세요!(고린도후서 11:23-29)" },
  { "number": 22, "message": "믿음과 희망으로 가득한 새해, 주님의 뜻을 따라 행하며 축복받은 한 해 되세요. 마치 베드로처럼 주님의 사랑 안에서 흔들리지 않고 굳건한 믿음을 유지하세요!(마태복음 16:13-19)" },
  { "number": 23, "message": "2024년 설날, 주님의 사랑과 은혜가 당신의 삶을 비추고 인도하는 한 해 되세요. 마치 이사야처럼 주님의 말씀을 선포하며 세상을 변화시키는 존재가 되세요! (이사야 6:1-8)" },
  { "number": 24, "message": "주님의 말씀을 삶의 등불로 삼고, 그의 뜻에 따라 행하는 한 해 되세요. 마치 솔로몬처럼 지혜와 분별력으로 세상을 살아가세요! (열왕기상 3:5-15)" }
];
