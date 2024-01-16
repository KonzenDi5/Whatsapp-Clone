import React, { useState } from "react";

export const ChatContext = React.createContext();

export function ChatProvider({ children }) {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "José de Arlindo",
      messages: [
        { text: "Boa tarde, José tudo bem?", time: "16:23" },
        { text: "Tudo bem lucas, como posso te ajudar?", time: "16:24" },
        { text: "Minha internet está horrivel", time: "16:25" },
        { text: "Estamos com um problema massivo na sua regiao", time: "16:26" },
        { text: "Qual a estimativa?", time: "16:27" },
        { text: "OS profissionais ja estão se deslocando para os locais", time: "16:28" },
        { text: "beleza, fico no aguardo", time: "16:29" },
      ],
      lastMessage: "beleza fico no aguardo",
      time: "16:29",
      lastSeen: "Visto por último hoje às 16:21",
      image: "https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?w=740&t=st=1705301198~exp=1705301798~hmac=8f2ae140e49eab6ead10228b926a4e0344f46cce27a05f4b34b6487e1366bacc",
    },
    {
      id: 2,
      name: "Bruno Irmão",
      messages: [
        { text: "Almoco domingo?", time: "14:13" },
        { text: "na sua casa?", time: "14:14" },
        { text: "Vamos na mãe, ela está de aniversário", time: "14:15" },
        { text: "Beleza, consegue passar aqui? o palio ta na mecanica kkk", time: "14:16" },
        { text: "De novo loco kkkkkkkk", time: "14:17" },
        { text: "Acontece kkkkkkkk", time: "14:18" },
        { text: "Beleza, passo as 11:20", time: "14:19" },
      ],
      lastMessage: "Beleza, passo as 11:20",
      time: "14:19",
      lastSeen: "Visto por último hoje às 16:21",
      image: "https://img.freepik.com/psd-premium/conceito-confiavel-nutural-do-homem-adulto_53876-22253.jpg?w=740",
    },
    {
      id: 3,
      name: "Júlia Fernanda",
      messages: [
        { text: "Opa bão, ana castela lançou mais uma ", time: "14:56" },
        { text: "kkkkkkkkkkk aquela", time: "14:57" },
        { text: "sim so fala em fivela", time: "14:58" },
        { text: "kkkkkkkk mesma coisa de sempre", time: "14:59" },
        { text: "kkkkkkkkkkksim", time: "15:00" },
        { text: "ja to sem ideia e sao 02:37 kkkkkkkkkkkkk", time: "15:01" },
        { text: "putz kkk", time: "15:02" },
      ],
      lastMessage: "putz kkk",
      time: "15:02",
      lastSeen: "Visto por último hoje às 16:21",
      image: "https://img.freepik.com/fotos-gratis/mulher-sorridente-de-vista-frontal-a-beira-mar_23-2149455861.jpg?w=1380",
    },
    {
      id: 4,
      name: "Nandinha",
      messages: [
        { text: "Sabia que esse chat foi feito em 2 dias?", time: "15:56" },
        { text: "Nao eram duas noites?", time: "15:57" },
        { text: "se for para pra pensar kkkkkkkkkkkkkk", time: "15:58" },
        { text: "verdade", time: "15:59" },
        { text: "o cara so tem tempo de noite kkkkkkkkk", time: "16:00" },
        { text: "entendo ele ", time: "16:01" },
        { text: "pois é, não é facil", time: "16:02" },
      ],
      lastMessage: "pois é, não é facil",
      lastSeen: "Visto por último hoje às 16:34",
      time: "16:02",
      image: "https://img.freepik.com/fotos-gratis/close-up-sorridente-mulher-posando_23-2149178089.jpg?w=740",
    },
    {
      id: 5,
      name: "Yuri Chefe",
      messages: [
        { text: "Me ligou?", time: "16:30" },
        { text: "Sim, cliente avisou que parou o faturamento", time: "16:31" },
        { text: "Beleza, vou dar uma olhada aqui", time: "16:32" },
        { text: "Conseguiu?", time: "16:56" },
        { text: "Sim, voltou", time: "16:56" },
        { text: "Cliente disse que ta parado ainda", time: "16:58" },
        { text: "Kkkkk na minha maquina funciona", time: "16:59" },
      ],
      lastMessage: "kkk na minha maquina funciona",
      time: "16:59",
      lastSeen: "Visto por último hoje às 16:26",
      image: "https://img.freepik.com/fotos-gratis/foto-ao-ar-livre-de-jovem-homem-branco-com-barba-relaxando-ao-ar-livre-cercado-por-um-belo-cenario-de-montanha-e-floresta-tropical_273609-1855.jpg?w=1380",
    },
    {
      id: 6,
      name: "Bernadete DEV",
      messages: [
        { text: "Cliente ta querendo sua maquina", time: "13:12" },
        { text: "Por que doida kkkkk", time: "13:13" },
        { text: "Ce disse q só rodava na sua kkkk", time: "13:14" },
        { text: "Até voce kkkkkkkkk", time: "13:15" },
        { text: "Acontece, mas brincadeiras a parte, precisamos verificar por que parou", time: "13:16" },
        { text: "Claro, vou te ligar", time: "13:17" },
        { text: "Beleza", time: "13:18" },
      ],
      lastMessage: "Beleza",
      time: "13:18",
      lastSeen: "Visto por último hoje às 16:29",
      image: "https://img.freepik.com/fotos-gratis/mulher-expressiva-posando-ao-ar-livre_344912-3096.jpg?w=1380",
    },
    {
      id: 7,
      name: "Caroline Silva",
      messages: [
        { text: "Tudo certo para sexta?", time: "13:54" },
        { text: "Claro, vou passar no mercado", time: "13:55" },
        { text: "Feito, faz tempo que não nos vemos", time: "13:56" },
        { text: "Realmente, desde as boas da nossa tia", time: "13:57" },
        { text: "kkkkkkkkkk E foi legal", time: "13:58" },
        { text: "Até sexta então, abraço", time: "13:59" },
        { text: "Abraço!", time: "14:00" },
      ],
      lastMessage: "Abraço!",
      time: "14:00",
      lastSeen: "Visto por último hoje às 16:15",
      image: "https://img.freepik.com/fotos-gratis/retrato-de-caucasiano-mulher-sorri_53876-24998.jpg?w=996",
    },
    {
      id: 8,
      name: "Natalia Pacheco",
      messages: [
        { text: "kkkkkk e o neymar", time: "11:35" },
        { text: "kkk joga nada", time: "11:36" },
        { text: "to falando do cruzeiro menn", time: "11:37" },
        { text: "ataakkkk", time: "11:38" },
        { text: "o cara lesionado mentendo role", time: "11:39" },
        { text: "acontece, jogador caro", time: "11:40" },
        { text: "kkkkkkkkkkkkkk", time: "11:41" },
      ],
      lastMessage: "kkkkkkkkkkkkkk",
      time: "11:41",
      lastSeen: "Visto por último hoje às 16:21",
      image: "https://img.freepik.com/fotos-premium/jovem-mulher-tomando-selfie_58466-6991.jpg?w=1380",
    },
  ]);

  const [currentChat, setCurrentChat] = useState(null);

  // No ChatContext
const changeChat = (chatId) => {
  const chat = chats.find((chat) => chat.id === chatId);
  if (chat) {
    setCurrentChat(chat);
  }
};

  
  return (
    <ChatContext.Provider value={{ chats, currentChat, changeChat }}>
      {children}
    </ChatContext.Provider>
  );
}
