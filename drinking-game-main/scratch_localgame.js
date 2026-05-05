  LocalGame = () => {
    let c = A_();
    let [deck, setDeck] = (0, b.useState)([]);
    let [drawnCards, setDrawnCards] = (0, b.useState)([]);
    let [currentCard, setCurrentCard] = (0, b.useState)(null);
    let [isDrawing, setIsDrawing] = (0, b.useState)(!1);

    (0, b.useEffect)(() => {
      let e = ['hearts', 'diamonds', 'clubs', 'spades'],
          t = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      let n = e.flatMap((suit) => t.map((val) => ({ suit: suit, value: val, id: `${val}-${suit}` })));
      for (let i = n.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [n[i], n[j]] = [n[j], n[i]];
      }
      setDeck(n);
    }, []);

    let drawCard = () => {
      if (isDrawing || deck.length === 0) return;
      setIsDrawing(!0);
      let n = [...deck];
      let card = n.pop();
      setDeck(n);
      setDrawnCards([...drawnCards, card]);
      setCurrentCard(card);
      setTimeout(() => setIsDrawing(!1), 1500);
    };

    return (0, A.jsxs)('div', {
        className: `min-h-screen bg-party-gradient p-4 relative overflow-x-hidden overflow-y-auto font-sans pb-20 custom-scrollbar`,
        children: [
           (0, A.jsx)('div', { className: `fixed top-10 left-10 text-6xl opacity-20 animate-float pointer-events-none`, children: `🎴` }),
           (0, A.jsx)('div', { className: `fixed top-32 right-16 text-5xl opacity-20 animate-float pointer-events-none`, style: { animationDelay: `1s` }, children: `🍻` }),
           (0, A.jsx)('div', { className: `fixed bottom-32 left-16 text-5xl opacity-20 animate-float pointer-events-none`, style: { animationDelay: `2s` }, children: `🎲` }),
           (0, A.jsx)('div', { className: `fixed bottom-10 right-20 text-6xl opacity-20 animate-float pointer-events-none`, style: { animationDelay: `0.5s` }, children: `✨` }),
           (0, A.jsx)('div', {
              className: `max-w-3xl mx-auto pt-6 relative z-10`,
              children: (0, A.jsxs)(SO.div, {
                  initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 },
                  className: `card-modern p-6 sm:p-10`,
                  children: [
                      (0, A.jsxs)('div', {
                          className: `flex flex-col sm:flex-row justify-between items-center mb-8 gap-4`,
                          children: [
                              (0, A.jsx)(SO.h1, {
                                  initial: { x: -20, opacity: 0 }, animate: { x: 0, opacity: 1 },
                                  className: `text-3xl sm:text-4xl font-black text-gradient drop-shadow-sm tracking-tight flex items-center gap-2 animate-heartbeat`,
                                  children: c.appTitle
                              }),
                              (0, A.jsx)(SO.div, {
                                  className: `bg-white/60 backdrop-blur border border-purple-200 px-5 py-2 rounded-2xl shadow-sm flex items-center gap-2`,
                                  children: (0, A.jsxs)('span', { className: 'text-gray-600 font-bold', children: [`Cards left: ${deck.length}/52`] })
                              })
                          ]
                      }),
                      (0, A.jsx)('div', {
                          className: `mb-10 perspective-1000 flex justify-center items-center`,
                          children: (0, A.jsx)(EE, {
                              mode: `wait`,
                              children: currentCard ? (0, A.jsxs)(SO.div, {
                                  initial: { rotateY: 180, scale: 0.8, opacity: 0, y: 50 },
                                  animate: { rotateY: isDrawing ? [0, 180, 360, 540, 720] : 0, scale: isDrawing ? 1.1 : 1, opacity: 1, y: 0 },
                                  transition: { duration: isDrawing ? 1.5 : 0.6, type: `spring`, stiffness: 100, damping: 15 },
                                  className: `relative preserve-3d`, style: { width: `220px`, height: `320px` },
                                  children: [
                                      (0, A.jsx)('div', {
                                          className: `absolute w-full h-full backface-hidden`,
                                          children: (0, A.jsxs)('div', {
                                              className: `w-full h-full bg-white border-8 border-gray-100 rounded-3xl flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 relative overflow-hidden`,
                                              children: [
                                                  (0, A.jsx)('div', { className: `absolute top-4 left-4 text-2xl font-black ${currentCard.suit === 'hearts' || currentCard.suit === 'diamonds' ? 'text-red-500' : 'text-gray-800'}`, children: TO(currentCard) }),
                                                  (0, A.jsx)('div', { className: `absolute bottom-4 right-4 text-2xl font-black rotate-180 ${currentCard.suit === 'hearts' || currentCard.suit === 'diamonds' ? 'text-red-500' : 'text-gray-800'}`, children: TO(currentCard) }),
                                                  (0, A.jsx)('span', { className: `text-8xl font-black mb-2 ${currentCard.suit === 'hearts' || currentCard.suit === 'diamonds' ? 'text-red-500' : 'text-gray-800'}`, children: currentCard.suit === 'hearts' ? '♥️' : currentCard.suit === 'diamonds' ? '♦️' : currentCard.suit === 'clubs' ? '♣️' : '♠️' }),
                                                  (0, A.jsx)('p', { className: `text-gray-700 text-center text-sm font-bold leading-relaxed px-2 bg-gray-50 rounded-xl py-2 w-full border border-gray-100`, children: c[`rule${currentCard.value}`] || c.ruleNone })
                                              ]
                                          })
                                      }),
                                      (0, A.jsx)('div', {
                                          className: `absolute w-full h-full backface-hidden`, style: { transform: `rotateY(180deg)` },
                                          children: (0, A.jsxs)('div', {
                                              className: `w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 border-8 border-white rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden`,
                                              children: [ (0, A.jsx)('div', { className: `text-white text-5xl opacity-50 font-black`, children: `?` }) ]
                                          })
                                      })
                                  ]
                              }, drawnCards.length) : (0, A.jsx)(SO.div, {
                                  initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 },
                                  className: `w-[220px] h-[320px] mx-auto bg-white/40 border-4 border-dashed border-white/60 rounded-3xl flex items-center justify-center shadow-inner`,
                                  children: (0, A.jsx)('p', { className: `text-white/80 font-bold text-lg`, children: c.drawCard })
                              })
                          })
                      }),
                      deck.length > 0 ? (0, A.jsxs)(SO.button, {
                          whileTap: isDrawing ? {} : { scale: 0.95 }, onClick: drawCard, disabled: isDrawing,
                          className: `w-full py-5 rounded-2xl font-black text-xl transition-all shadow-xl relative overflow-hidden ${isDrawing ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:-translate-y-1'}`,
                          children: [
                              (0, A.jsxs)('span', { className: `relative z-10 flex items-center justify-center gap-3`, children: [(0, A.jsx)('span', { className: `text-2xl`, children: isDrawing ? '⏳' : '🎴' }), isDrawing ? c.drawing : c.drawCard] })
                          ]
                      }) : (0, A.jsx)('div', {
                          className: `w-full py-5 rounded-2xl font-black text-xl text-center bg-gray-300 text-gray-600`,
                          children: '🎉 Game Over! 52 cards drawn. 🎉'
                      }),
                      drawnCards.length > 0 && (0, A.jsxs)('div', {
                          className: `mt-10 pt-8 border-t border-purple-200/50`,
                          children: [
                              (0, A.jsxs)('h2', { className: `text-lg font-bold mb-4 flex items-center gap-2 text-gray-800`, children: [(0, A.jsx)('span', { className: `bg-purple-100 p-1.5 rounded-lg`, children: `📜` }), (0, A.jsxs)('span', { children: [c.drawnCards, ` (${drawnCards.length})`] })] }),
                              (0, A.jsx)('div', {
                                  className: `flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar`,
                                  children: (0, A.jsx)(EE, {
                                      children: [...drawnCards].reverse().map((e, t) => (0, A.jsxs)(SO.div, {
                                          initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 },
                                          className: `px-3 py-1.5 rounded-xl text-sm font-black border-2 shadow-sm ${e.suit === 'hearts' || e.suit === 'diamonds' ? 'bg-red-50 text-red-600 border-red-200' : 'bg-gray-50 text-gray-800 border-gray-200'}`,
                                          children: [TO(e), ` `, e.suit === 'hearts' ? '♥️' : e.suit === 'diamonds' ? '♦️' : e.suit === 'clubs' ? '♣️' : '♠️']
                                      }, `${e.id}-${t}`))
                                  })
                              })
                          ]
                      })
                  ]
              })
           }),
           (0, A.jsx)('style', { dangerouslySetInnerHTML: { __html: `.perspective-1000 { perspective: 1000px; } .preserve-3d { transform-style: preserve-3d; } .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }` } })
        ]
    });
  };
