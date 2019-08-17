/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/

var getPathname = function getPathname() {
  var reg = /(\w+-\w+)\/(.*)/;
  var result = [];
  var tmpPathname = reg.exec(window.location.pathname);
  tmpPathname && tmpPathname[1]
    ? result.push(tmpPathname[1])
    : result.push("en");
  return result[0];
};
var currentLang = getPathname();
window.currentLang = currentLang;

var mingyan = new Array();
if (currentLang === "en") {
  // english
  mingyan.push(
    "{'index':774,'content':'Be a little kinder than you have to.</br> - </br> E. Lockhart, We Were Liars'}"
  );
  mingyan.push(
    "{'index':774,'content':'Everything in moderation, including moderation.</br> - </br> Oscar Wilde'}"
  );
  mingyan.push(
    "{'index':774,'content':'Life before Death.</br>Strength before Weakness.</br>Journey before Destination.</br> - </br> Brandon Sanderson, The Way of Kings'}"
  );
  mingyan.push(
    "{'index':774,'content':'Always do what you're afraid to do.</br> - </br> E. Lockhart, We Were Liars'}"
  );
  mingyan.push(
    "{'index':774,'content':'Draco Dormiens Nunquam Titillandus</br>[never tickle a sleeping dragon]</br> - </br> J.K. Rowling, Harry Potter and the Sorcerer's Stone'}"
  );
  mingyan.push(
    "{'index':774,'content':'All hope abandon, ye who enter here.</br> - </br> Dante Alighieri, The Divine Comedy'}"
  );
  mingyan.push(
    "{'index':774,'content':'Fighting for peace, is like fucking for chastity</br> - </br> Stephen King, Hearts in Atlantis'}"
  );
  mingyan.push(
    "{'index':774,'content':'My name is Celaena Sardothien,\" she whispered, \"and I will not be afraid.</br> - </br> Sarah J. Maas, The Assassin's Blade'}"
  );
  mingyan.push(
    "{'index':774,'content':'Always do what you're afraid to do. </br>I will prove myself strong when they think I am sick. </br>I will prove myself brave when they think I am weak.</br> - </br> E. Lockhart, We Were Liars'}"
  );
  mingyan.push(
    "{'index':774,'content':'VI VERI VENIVERSUM VIVUS VICI.</br>By the Power of Truth, I, while living, have Conquered the Universe.</br> - </br> Alan Moore, V for Vendetta, Vol. II of X'}"
  );
  mingyan.push(
    "{'index':774,'content':'Hide yourself in God, so when a man wants to find you he will have to go there first.</br> - </br> Shannon L. Alder'}"
  );
  mingyan.push(
    "{'index':774,'content':'the road is life</br> - </br> jack kerouac'}"
  );
  mingyan.push(
    "{'index':774,'content':'Don’t wait to be hunted to hide, that was always my motto.</br> - </br> Samuel Beckett, Molloy'}"
  );
  mingyan.push(
    "{'index':774,'content':'Be prepared,' that's my motto.\" He smiled smugly at me. \"That, and 'Sleep whenever possible.' Oh, and 'If you don't notice it's gone, what's the harm in me taking it?</br> - </br> Kiersten White, Supernaturally'}"
  );
  mingyan.push(
    "{'index':774,'content':'The gull sees farthest who flies highest</br> - </br> Richard Bach, Jonathan Livingston Seagull'}"
  );
  mingyan.push(
    "{'index':774,'content':'We shall overcome.</br> - </br> Martin Luther King, Jr.'}"
  );
  mingyan.push(
    "{'index':774,'content':'To begin with, let us take the following motto...Literature is Love. Now we can continue.</br> - </br> Vladimir Nabokov, Despair'}"
  );
  mingyan.push(
    "{'index':774,'content':'Eight hours work, eight hours sleep, and eight hours recreation - Brigham Young</br> - </br> Susa Young Gates, The Life Story Of Brigham Young'}"
  );
  mingyan.push(
    "{'index':774,'content':'Good riddance to bad rubbish.</br> - </br> Rodman Philbrick, Freak the Mighty'}"
  );
  mingyan.push(
    "{'index':774,'content':'Sober or blotto, this is your motto: keep muddling through.</br> - </br> P.G. Wodehouse, A Damsel in Distress'}"
  );
  mingyan.push(
    "{'index':774,'content':'Don't write off a book (or person, or movie) just because it had a pink, sparkly cover.</br> - </br> Abby McDonald, Getting Over Garrett Delaney'}"
  );
  mingyan.push(
    "{'index':774,'content':'Be sweet and carry a sharp knife, was her motto.</br> - </br> Barbara Kingsolver, Flight Behavior'}"
  );
} else {
  mingyan.push(
    "{'index':1165,'content':'失眠就像是，一个无人认领的梦，一段言无所向的人生，和一场明知故犯的恋情。你不愿这些发生，但你也清楚这些早晚要发生，就像终于盼来了困意，却也迎来了黎明。</br> - </br>郑执'}"
  );
  mingyan.push(
    "{'index':1212,'content':'道路虽然拥挤，却是寂寞的，因为它不是被爱的。 </br> - </br>《像个孩子》'}"
  );
  mingyan.push(
    "{'index':563,'content':'如果我不想被悲伤和怀疑打倒，就非得好好吃饭不可。</br> - </br>方悄悄'}"
  );
  mingyan.push(
    "{'index':1291,'content':'每个人都是孤独发光的星体，至亲、爱人、朋友，构成了我们的星系。星辰会陨落，轨道会迁移，或许再也见不到你。我会记得，你的光芒温暖过我的眼睛。而我，也曾闪耀在你的夜空里。 </br> - </br>路明'}"
  );
  mingyan.push(
    "{'index':855,'content':'我觉得世界上所有事情都在你没有准备好的时候，就开始；在你准备好的时候，就结束了。</br> - </br>《年华似水》'}"
  );
  mingyan.push(
    "{'index':1068,'content':'天青色等烟雨，而我在等你。</br> - </br>方文山'}"
  );
  mingyan.push(
    "{'index':435,'content':'不能一直踮着脚爱一个人，重心不稳，撑不了太久的。</br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':342,'content':'没有深夜痛哭过的人，不足以谈人生。</br> - </br>高秉涵'}"
  );
  mingyan.push(
    "{'index':918,'content':'毁掉我们的不是我们所憎恨的东西，而恰恰是我们所热爱的东西。</br> - </br>尼尔·波兹曼'}"
  );
  mingyan.push(
    "{'index':1258,'content':'信任这种东西有时候挺奇怪的，就是那种你在我背后开了一枪，我依然觉得是枪走了火的感觉。</br> - </br>暖小团'}"
  );
  mingyan.push(
    "{'index':889,'content':'原来生命从头到尾都是一场浪费，你需要判断的仅仅在于，这次浪费是否是“美好”的。后来，当我每做一件事情的时候，我便问自己，你认为它是美好的吗？如果是，那就去做吧，从这里出发，我们去抵抗命运，享受生活。</br> - </br>吴晓波'}"
  );
  mingyan.push(
    "{'index':449,'content':'世上只有一种真正的英雄主义，那就是认清生活的真相后依然热爱生活。</br> - </br>罗曼·罗兰'}"
  );
  mingyan.push(
    "{'index':1164,'content':'有时候我们认为生活背叛了我们，但是很久以后我们才发现，其实是我们自己背叛了自己。 </br> - </br>《西伯利亚的理发师》'}"
  );
  mingyan.push(
    "{'index':717,'content':'所有的悲伤，总会留下一丝欢乐的线索。所有的遗憾，总会留下一处完美的角落。我在冰封的深海，找寻希望的缺口。却在午夜惊醒时，蓦然瞥见绝美的月光。</br> - </br>《缺口》'}"
  );
  mingyan.push(
    "{'index':1048,'content':'我要一步一步往上爬，在最高点乘着叶片往前飞。小小的天留过的泪和汗，总有一天我有属于我的天。 </br> - </br>周杰伦《蜗牛》'}"
  );
  mingyan.push(
    "{'index':834,'content':'如今的天空空空如也，仿佛被拭去了一切，但那时银河像尘土一样常见。星光让一切都成了迷人的黑白电影。无论你处于人生中的什么位置，无论你心情如何，倘若夜里有一片布满星斗的天空，你就会觉得自己很富有。 </br> - </br>托妮·莫里森'}"
  );
  mingyan.push(
    "{'index':151,'content':'人生唯一可以肯定的失败和最大的悲哀，莫过于从不敢冒险。</br> - </br>肯恩·格林伍德'}"
  );
  mingyan.push(
    "{'index':1199,'content':'有些人选择先戒备，收到足够关爱之后再友善；我却天生热情爱讨好，一味付出直到受伤害了才学乖。很难讲究竟哪种方式更高明，他们或许杜绝了未知的伤心，我却遇见了你。 </br> - </br>八月长安'}"
  );
  mingyan.push(
    "{'index':235,'content':'很多事不用问值不值得，只用问，它对你来说，是不是有如珍宝。</br> - </br>柴静'}"
  );
  mingyan.push(
    "{'index':1299,'content':'很想打一个不说话的电话，只要你在电话那端，我可以枕着电话筒就好。 </br> - </br>《蒙马特遗书》'}"
  );
  mingyan.push(
    "{'index':1128,'content':'我喜新厌旧到什么程度呢，每见到你一次就觉得你又新了一点。 </br> - </br>乌冬'}"
  );
  mingyan.push(
    "{'index':876,'content':'那些可以轻而易举伤害我们的人，那些一再以痛楚和挫败试探我们的人，那些举起旗子引导我们走入迷途深林的人，那些在削弱我们的力量的人，那些让我们深深触动和粉碎自我的人，他们才是生命中最有力量的老师。</br> - </br>安妮宝贝'}"
  );
  mingyan.push(
    "{'index':213,'content':'每一个不曾起舞的日子，都是对生命的辜负。</br> - </br>尼采'}"
  );
  mingyan.push(
    "{'index':1340,'content':'每当两个人相遇时，实际上有六个人存在。那就是各自眼中的自己，各自在对方眼中的自己和各自真实的自我。</br> - </br>劳伦斯·彼得'}"
  );
  mingyan.push(
    "{'index':861,'content':'我爱你，不光因为你的样子，还因为，和你在一起时，我的样子。 </br> - </br>罗伊·克利夫特'}"
  );
  mingyan.push(
    "{'index':1251,'content':'失去一个人最伤悲的是，那个人带走了一部分其他人都不认识的你。</br> - </br>郑执'}"
  );
  mingyan.push(
    "{'index':148,'content':'爱情能够体现一个人的最高智慧和最低道德。 </br> - </br>赵丽华'}"
  );
  mingyan.push(
    "{'index':468,'content':'和很多人告别时，我都会说后会无期，我总觉得有期只是约好了一个久远的时间，而无期也许就会是下一分钟相见。</br> - </br>韩寒'}"
  );
  mingyan.push(
    "{'index':623,'content':'有时候当一个渺小的人，他不知道自己渺小，他就能做大事。</br> - </br>《奔腾年代》'}"
  );
  mingyan.push(
    "{'index':1064,'content':'这个世界上，从来就没有最好的，只有最合适的。比如云朵和天空，微风和草地，比如我眼中的你，以及，你眼中的我。 </br> - </br>烟波人长安《我有个恋爱想和你谈下》'}"
  );
  mingyan.push(
    "{'index':303,'content':'我亦只有一个一生，不能慷慨赠与我不爱的人。</br> - </br>网络'}"
  );
  mingyan.push(
    "{'index':176,'content':'孤独有时是最好的交际。</br> - </br>约翰·弥尔顿'}"
  );
  mingyan.push(
    "{'index':221,'content':'时空日日过，何曾停留过，猛回头，时光难再回。</br> - </br>麒麟法师'}"
  );
  mingyan.push(
    "{'index':277,'content':'如果没有老师，学校会是世界上最美好的地方。</br> - </br>《我们都是坏孩子》'}"
  );
  mingyan.push(
    "{'index':368,'content':'再如何对你细述心事呢，你就是心事。</br> - </br>叶三'}"
  );
  mingyan.push(
    "{'index':1175,'content':'唯一让我不对自己年少无知生气的方法，就是安慰自己还好不是年老无知。 </br> - </br>贾彬彬'}"
  );
  mingyan.push(
    "{'index':649,'content':'我不会讨人喜欢，我从小就不会讨人喜欢，后来我知道了如何讨人喜欢，我决定就不讨人喜欢。 </br> - </br>崔永元'}"
  );
  mingyan.push(
    "{'index':963,'content':'心里有就有，心里没有才是真的没有了。</br> - </br>《周渔的火车》'}"
  );
  mingyan.push(
    "{'index':658,'content':'生命是华丽错觉，时间是贼偷走一切，七岁的那一年抓住那只蝉，以为能抓住夏天，十七岁的那年吻过他的脸，就以为和他能永远。</br> - </br>五月天《如烟》'}"
  );
  mingyan.push(
    "{'index':1239,'content':'改变是为了更好地陪伴。 </br> - </br>韩寒'}"
  );
  mingyan.push(
    "{'index':190,'content':'不到园林，怎知春色几许？</br> - </br>《牡丹亭》'}"
  );
  mingyan.push(
    "{'index':955,'content':'知足，知爱，才能知生命的朴质本源。人心都满是破洞。洞外是暖腻的浮光，洞内是隐忍的真相。</br> - </br>王臣'}"
  );
  mingyan.push(
    "{'index':755,'content':'这世界只有一种乡愁，是你不在身边的时候。 </br> - </br>my little airport'}"
  );
  mingyan.push(
    "{'index':329,'content':'人如果总逃避的话，眼神会先于生命失去光彩的。</br> - </br>《尽管如此，也要活下去》'}"
  );
  mingyan.push(
    "{'index':1201,'content':'我生活在妙不可言的等待中，等待随便哪种未来。 </br> - </br>安德烈·纪德'}"
  );
  mingyan.push(
    "{'index':1138,'content':'爱是一念之差，最幸福的不过是，你曾温柔呼唤，而我恰好有过应答。 </br> - </br>朝小诚'}"
  );
  mingyan.push(
    "{'index':562,'content':'小小羚羊过山冈，九根马尾渡江。想想大地上一石一鸟都不可乱放。有人喊过一嗓。</br> - </br>张子选《藏北三行诗》'}"
  );
  mingyan.push(
    "{'index':644,'content':'什么都不是爱的对手，除了爱。</br> - </br>王小波'}"
  );
  mingyan.push(
    "{'index':582,'content':'你呀，你别再关心灵魂了，那是神明的事。你所能做的，是些小事情，诸如热爱时间，思念母亲，静悄悄地做人，像早晨一样清白。</br> - </br>《我是你流浪过的一个地方》'}"
  );
  mingyan.push(
    "{'index':969,'content':'我想体会螺旋般下降的命运，想将自己置于无解也没有退路之地，在不断的主动放弃中握出一个拳头的自我。</br> - </br>淡豹'}"
  );
  mingyan.push(
    "{'index':18,'content':'台下谁看到了童年，台上谁虚构了童年，爸爸妈妈说，唇红齿白真让人爱怜。</br> - </br>金丹华'}"
  );
  mingyan.push(
    "{'index':523,'content':'一弦是酸楚的泪，二弦是方糖，三弦点燃篝火，四弦黑色的光，五弦那么的忧伤，六弦有山一般的信仰。</br> - </br>大冰'}"
  );
  mingyan.push(
    "{'index':1050,'content':'人生就是一列开往坟墓的列车，路途上会有很多站，很难有人可以自始至终陪着走完。当陪你的人要下车时，即使不舍也该心存感激，然后挥手道别。</br> - </br>宫崎骏'}"
  );
  mingyan.push(
    "{'index':1220,'content':'今年的我们已与去年不同，我们的爱人亦是如此。如果变化中的我们依旧爱着那个变化中的人，这可真是个令人欣喜的意外。 </br> - </br>毛姆'}"
  );
  mingyan.push(
    "{'index':39,'content':'兄弟曾离去，似在公元前。今日归故里，不知是何年。</br> - </br>老树画画'}"
  );
  mingyan.push(
    "{'index':689,'content':'愿你比别人更不怕一个人独处，愿日后谈起时你会被自己感动。</br> - </br>刘同《你的孤独，虽败犹荣》'}"
  );
  mingyan.push(
    "{'index':1079,'content':'这个世界上最痛苦的离别方式是，从你们分开的那一刻开始，你没有办法再次走进他的生活，他却仍在你的生活中无处不在。 </br> - </br>王宇昆'}"
  );
  mingyan.push(
    "{'index':1065,'content':'我是个平常的人，我不能盼望在人海中值得你一转眼的注意。 </br> - </br>《爱的灵感》'}"
  );
  mingyan.push(
    "{'index':90,'content':'风雨雷电，日月星辰，他们一定只是为了赶来迎接你的到来。</br> - </br>一言'}"
  );
  mingyan.push(
    "{'index':1343,'content':'人总有想哭的欲望，读什么故事、听什么歌、看什么电影，只是在找一个借口。 </br> - </br>苏更生'}"
  );
  mingyan.push(
    "{'index':739,'content':'恋爱的纪念物，从来就不是那些你送给我的手表和项链，甚至也不是那些甜蜜的短信和合照。恋爱最珍贵的纪念物，是你留在我身上的，如同河川留给地形的，那些你对我造成的改变。</br> - </br>蔡康永'}"
  );
  mingyan.push(
    "{'index':590,'content':'不要忘记人生是要战斗到死。</br> - </br>芥川龙之介'}"
  );
  mingyan.push(
    "{'index':1038,'content':'一个人做的梦，就只能是个梦；一群人怀着同一个梦想，便是真实。 </br> - </br>约翰·列侬'}"
  );
  mingyan.push(
    "{'index':69,'content':'今年没几个梦了，每个都必须做好。</br> - </br>史航'}"
  );
  mingyan.push(
    "{'index':236,'content':'旅行的一大益处是：客中种种辛苦不便，叫人回家觉得平时住厌了的家挺好。</br> - </br>思果'}"
  );
  mingyan.push(
    "{'index':166,'content':'我今晨坐在窗前，世界如一个路人似的，停留了一会，向我点点头又走过去了。</br> - </br>泰戈尔《飞鸟集》'}"
  );
  mingyan.push(
    "{'index':965,'content':'大部分人在二三十岁就已经死去了，因为过了这个年龄，他们只是自己的影子，此后的余生则是在模仿自己中度过，更机械，更装腔作势地重复他们在有生之年的所作所为，所思所想，所爱所恨。 </br> - </br>罗曼·罗兰'}"
  );
  mingyan.push(
    "{'index':87,'content':'大脑的速度一定是超时间的，所以做梦才可以梦到一生。</br> - </br>察察'}"
  );
  mingyan.push(
    "{'index':1254,'content':'在我看来，一个人仿佛是一个包得紧紧的蓓蕾。一个人所读的书或所做的事，在大多数情况下，对他毫无作用。然而，有些事情对一个人来说确实具有一种特殊意义，这些具有特殊意义的事情使得蓓蕾绽开一片花瓣，花瓣一片片接连开放，最后便开成一朵鲜花。</br> - </br>毛姆'}"
  );
  mingyan.push(
    "{'index':682,'content':'我喜爱你忽然捂住我喋喋不休的口，教我沉默。</br> - </br>张定浩'}"
  );
  mingyan.push(
    "{'index':733,'content':'九月里，平淡无聊，一切都好，只缺烦恼。</br> - </br>王菲《浮躁》'}"
  );
  mingyan.push(
    "{'index':292,'content':'红尘滚滚，我们这种小人物也就靠着爱过让自己光辉伟岸了。</br> - </br>张晓晗《刺青》'}"
  );
  mingyan.push(
    "{'index':54,'content':'不管黑猪白猪，都是猪。不管笨猪蠢猪，在一起就不孤独。</br> - </br>韩寒'}"
  );
  mingyan.push(
    "{'index':201,'content':'我们即使发了一千次短信，心与心之间大概也只能靠近一厘米。</br> - </br>《秒速五厘米》'}"
  );
  mingyan.push(
    "{'index':486,'content':'有些人，才遇见一下子，就好像认识了很久似的，什么事都想和他说。</br> - </br>《你好，陌生人》'}"
  );
  mingyan.push(
    "{'index':152,'content':'我们要占有这个世界干什么呢？它本就是我们。</br> - </br>何禾'}"
  );
  mingyan.push(
    "{'index':666,'content':'“为什么我和我爱的人，都选择了不在乎我们的人？”“因为我们只接受自己认为配得上的爱。” </br> - </br>《壁花少年》'}"
  );
  mingyan.push(
    "{'index':1108,'content':'我开始学会逢场作戏，虽然很多都是露水情缘，不过没关系，哪来那么多一生一世。 </br> - </br>《2046》'}"
  );
  mingyan.push(
    "{'index':697,'content':'这世间有一种使我们感到幸福的可能性：在最遥远的、最陌生的地方发现一个故乡，并对那些似乎极隐秘和最难接近的东西产生热爱。</br> - </br>赫尔曼·黑塞'}"
  );
  mingyan.push(
    "{'index':73,'content':'开始终结总是没变改，天边的你漂泊在白云外。 </br> - </br>《一生所爱》'}"
  );
  mingyan.push(
    "{'index':225,'content':'每个人都在自己的生命中，孤独地过冬。</br> - </br>刘亮程'}"
  );
  mingyan.push(
    "{'index':583,'content':'我为你翻山越岭，却无心看风景。</br> - </br>林夕'}"
  );
  mingyan.push(
    "{'index':406,'content':'今天将要结束，明天也将结束，难以结束的是昨天。</br> - </br>安东尼奥·波契亚'}"
  );
  mingyan.push(
    "{'index':973,'content':'如今虽然自甘寂寞，远避山上，但却依然时常会有些身不由己的悲哀。可是最近我已经懂了，人生本来就是这样子的。</br> - </br>古龙'}"
  );
  mingyan.push(
    "{'index':1000,'content':'很奇怪，我们不屑与他人为伍，却害怕自己与众不同。 </br> - </br>保罗·柯艾略'}"
  );
  mingyan.push(
    "{'index':947,'content':'诚实的生活方式，其实是按照自己身体的意愿行事，饿的时候才吃饭，爱的时候不必撒谎。</br> - </br>《霍乱时期的爱情》'}"
  );
  mingyan.push(
    "{'index':957,'content':'我们花了很多时间来找寻最便捷的沟通方式，却忘了面对面的一个眼神一句话才是最贴心的交流。 </br> - </br>《不过，一场生活》'}"
  );
  mingyan.push(
    "{'index':1334,'content':'祝你遇到那个对的人和那件对的事，让之前种种狼狈不堪都成伏笔。 </br> - </br>方慧'}"
  );
  mingyan.push(
    "{'index':853,'content':'不管全世界所有人怎么说，我都认为自己的感受才是正确的。无论别人怎么看，我绝不打乱自己的节奏。喜欢的事自然可以坚持，不喜欢怎么也长久不了。</br> - </br>村上春树'}"
  );
  mingyan.push(
    "{'index':109,'content':'世间所有的相遇，都是久别重逢。</br> - </br>《一代宗师》'}"
  );
  mingyan.push(
    "{'index':667,'content':'如果你自己没有改变，那么你在任何地方都是痛苦的。如果你没有什么地方要去，那么你就到达了。</br> - </br>《去印度学倒立》'}"
  );
  mingyan.push(
    "{'index':436,'content':'生活和电影不一样，生活难多了。</br> - </br>《天堂电影院》'}"
  );
  mingyan.push(
    "{'index':524,'content':'我这半世未算赶，何妨迷路看风光。</br> - </br>黄伟文'}"
  );
  mingyan.push(
    "{'index':1373,'content':'时光驯服一切，我与往事之间，像回声，再怎么千回百转，终究消失在山谷。 </br> - </br>七堇年'}"
  );
  mingyan.push(
    "{'index':790,'content':'我一直以为最糟糕的情况是你离开我，其实最令我难过的，是你不快乐。</br> - </br>《怪物旅社》'}"
  );
  mingyan.push(
    "{'index':580,'content':'爱情里最需要的，是想象力。每个人必须用尽全力和全部的想象力形塑对方，并丝毫不向现实低头。那么，当双方的幻想相遇，就再也没有比这更美的景象了。</br> - </br>罗曼·加里'}"
  );
  mingyan.push(
    "{'index':1072,'content':'一个远行的人要寻找什么呢？可能他自己也不知道，他只是寻找，张望，直到最后，寻找成了他的命运。就像我在你身上，寻找我的命运，那不能把握没法参透的一部分，就是我们的真爱。 </br> - </br>田艺苗《旅人》'}"
  );
  mingyan.push(
    "{'index':613,'content':'你是什么人便会遇上什么人；你是什么人便会选择什么人。总是挂在嘴上的人生，就是你的人生，人总是很容易被自己说出的话所催眠。我多怕你总是挂在嘴上的许多抱怨，将会成为你所有的人生。 </br> - </br>竹久梦二'}"
  );
  mingyan.push(
    "{'index':936,'content':'夜里不睡的人，白天多多少少总有什么逃避掩饰的吧。白昼解不开的结，黑夜慢慢耗。</br> - </br>雷蒙德·卡佛'}"
  );
  mingyan.push(
    "{'index':1154,'content':'有多少场失恋是由你喜欢上一个不喜欢你的人而开始的。</br> - </br>暖小团'}"
  );
  mingyan.push(
    "{'index':432,'content':'我还年轻，我渴望上路。</br> - </br>杰克·凯鲁亚克《在路上》'}"
  );
  mingyan.push(
    "{'index':578,'content':'真正的绝望跟痛苦、跟悲伤、跟惨痛都没有什么关系，真正的绝望让人心平气和。</br> - </br>刘瑜《适应孤独，就像适应一种残疾》'}"
  );
  mingyan.push(
    "{'index':896,'content':'你跳不出这个世界，是因为你不知道这个世界有多大，一旦你知道了，你就超出了它。 </br> - </br>今何在'}"
  );
  mingyan.push(
    "{'index':1267,'content':'旷日持久不容易，一切物事的美好在于没时间变坏。 </br> - </br>李碧华'}"
  );
  mingyan.push(
    "{'index':1097,'content':'在无处落脚的人海里，你的停靠成为岛屿，成为陆地，成为具体。</br> - </br>陈粒《远辰》'}"
  );
  mingyan.push(
    "{'index':798,'content':'生命里第一个爱恋的对象应该是自己，写诗给自己，与自己对话，在一个空间里安静下来，聆听自己的心跳与呼吸，我相信，这个生命走出去时不会慌张。相反的，一个在外面如无头苍蝇乱闯的生命，最怕孤独。</br> - </br>蒋勋'}"
  );
  mingyan.push(
    "{'index':1152,'content':'应该的事有很多，牙刷应该放在牙缸里，枕头应该放在床上，西瓜应该切开再吃，炒菜应该最后放盐，可是，在一起，却未必。 </br> - </br>烟波人长安'}"
  );
  mingyan.push(
    "{'index':466,'content':'一个人工作，一个人看书，一个人吃饭，一个人看着电视乐，一个人睡觉。感觉寂寞难耐的，定会找个人同住吧。但我并没觉得寂寞难耐。要说难耐的，反倒是想一个人的时候无法一个人。 </br> - </br>山本文绪'}"
  );
  mingyan.push(
    "{'index':1030,'content':'很久以后我才明白，想让你记住我，并不是需要在告别的时候大声念三遍我的名字，而是拼命向上与你等高，让你一侧过头一转过身就会知道，我是谁。 </br> - </br>张瑞琪'}"
  );
  mingyan.push(
    "{'index':44,'content':'每当和自己擦不出火花，就开始痛恨太安逸。 </br> - </br>金怡玉玲'}"
  );
  mingyan.push(
    "{'index':1136,'content':'星星发亮是为了让每一个人有一天都能找到属于自己的星星。 </br> - </br>《小王子》'}"
  );
  mingyan.push(
    "{'index':718,'content':'我和这个世界不熟，这并非是我虚假的原因。我依旧有很多真诚，离不开，放不下，活下去，爱得起。</br> - </br>等待如果'}"
  );
  mingyan.push(
    "{'index':593,'content':'你是我温暖的手套，冰冷的啤酒，带着阳光味道的衬衫，日复一日的梦想。</br> - </br>《恋爱的犀牛》'}"
  );
  mingyan.push(
    "{'index':422,'content':'所谓孤独，就是你面对的那个人，他的情绪和你自己的情绪不在同一个频率。 </br> - </br>理查德·耶茨'}"
  );
  mingyan.push(
    "{'index':332,'content':'每天呆在这里，会把这里当成是全世界，不再追寻，不再拥有。你得离开一阵子。</br> - </br>《天堂电影院》'}"
  );
  mingyan.push(
    "{'index':1371,'content':'当我7岁时，我感到我父亲是天底下最聪明的人；当我14岁时，我感到我父亲是天底下最不通情达理的人；当我21岁时，我忽然发现我父亲还是很聪明的。 </br> - </br>马克·吐温'}"
  );
  mingyan.push(
    "{'index':502,'content':'多和家人聊聊天吧，别老玩我们。</br> - </br>手机和电视'}"
  );
  mingyan.push(
    "{'index':570,'content':'我所认为最深沉的爱，莫过于分开以后，我将自己，活成了你的样子。 </br> - </br>《这个杀手不太冷》'}"
  );
  mingyan.push(
    "{'index':1377,'content':'使我们视而不见的光亮，对于我们就是黑暗。当我们清醒时，曙光才会破晓。来日方长，太阳只是颗启明星。 </br> - </br>《瓦尔登湖》'}"
  );
  mingyan.push(
    "{'index':347,'content':'你不能把这个世界，让给你所鄙视的人。</br> - </br>安·兰德《源泉》'}"
  );
  mingyan.push(
    "{'index':392,'content':'什么都无法舍弃的人，什么都无法改变。</br> - </br>《进击的巨人》'}"
  );
  mingyan.push(
    "{'index':530,'content':'当我爱你时，风中的松树，要以他们丝线般的叶子唱你的名字。 </br> - </br>聂鲁达'}"
  );
  mingyan.push(
    "{'index':862,'content':'我拒绝更好更圆的月亮，拒绝未知的疯狂，拒绝声色的张扬，不拒绝你。 </br> - </br>陈粒'}"
  );
  mingyan.push(
    "{'index':243,'content':'旅行是为了迷路，迷路是为了遇上美好。</br> - </br>马家辉'}"
  );
  mingyan.push(
    "{'index':553,'content':'我们都是白痴，才会这样钻牛角尖。不管是什么狗屁事，我们总是，总是，总是忘不了我们那点叫人作呕的、微不足道的自我。 </br> - </br>塞林格'}"
  );
  mingyan.push(
    "{'index':278,'content':'我的妻子很不成熟。当我在浴缸里洗澡的时候，她会走进来弄沉我的船。</br> - </br>伍迪·艾伦'}"
  );
  mingyan.push(
    "{'index':1194,'content':'我们曾如此渴望命运的波澜，到最后才发现，人生最曼妙的风景，竟是内心的淡定与从容。我们曾如此期盼外界的认可，到最后才知道，世界是自己的，与他人毫无关系。</br> - </br>网络'}"
  );
  mingyan.push(
    "{'index':609,'content':'不介意孤独，比爱你舒服。</br> - </br>林夕'}"
  );
  mingyan.push(
    "{'index':573,'content':'这便是爱情：大概一千万人之中，才有一双梁祝，才可以化蝶。其他的只化为蛾、蟑螂、蚊蚋、苍蝇、金龟子……就是化不成蝶，并无想象中的美丽。</br> - </br>《胭脂扣》'}"
  );
  mingyan.push(
    "{'index':218,'content':'对于苹果来说，被大口吃掉才是最重要的。</br> - </br>郭小寒'}"
  );
  mingyan.push(
    "{'index':70,'content':'远行前，请随我在纷乱的岁月，再羁留一会儿吧。</br> - </br>钟鸣'}"
  );
  mingyan.push(
    "{'index':1069,'content':'跟爱过的人，如果对方已不再爱，即便你还有情，也要永远保持一个合适的距离。这是一种对已然逝去之爱的尊重，也是你们之间，最好的结局。 </br> - </br>《不婚女王》'}"
  );
  mingyan.push(
    "{'index':1018,'content':'你那么擅长安慰他人，一定度过了很多自己安慰自己的日子吧。 </br> - </br>陈亚豪'}"
  );
  mingyan.push(
    "{'index':421,'content':'你知道雪为什么是白色的吗？因为它忘记了自己曾经的颜色。</br> - </br>《叛逆的鲁鲁修》'}"
  );
  mingyan.push(
    "{'index':1324,'content':'作为一个平凡人，无论多辛苦的事，对外人都是不足道的。所以爱人啊，要有爱人，也要成为被爱的人。要创造魔法，要让微不足道变得重若千钧，要让细枝末节变成缠盘硕枝。 </br> - </br>大斯'}"
  );
  mingyan.push(
    "{'index':776,'content':'到死之前，我们都是需要发育的孩子，从未长大，也从未停止生长。就算改变不了这个世界，这个世界也别想将我们改变。</br> - </br>大冰'}"
  );
  mingyan.push(
    "{'index':793,'content':'不要愁老之将至，你老了一定很可爱。而且，假如你老了十岁，我当然也同样老了十岁，世界也老了十岁，上帝也老了十岁，一切都是一样。 </br> - </br>朱生豪'}"
  );
  mingyan.push(
    "{'index':427,'content':'春天还没有来，我怎么能先你老去。</br> - </br>剃度尘欢'}"
  );
  mingyan.push(
    "{'index':1312,'content':'很多人觉得“爱”是比“喜欢”严重的事，不能轻易说出口。但我就是要说，我爱你。如果不能让你动心，起码吓吓你，让你无法忘记。 </br> - </br>乌冬'}"
  );
  mingyan.push(
    "{'index':926,'content':'你若咬定了人只活一次，便更没有随波逐流的理由。</br> - </br>帕蒂·史密斯'}"
  );
  mingyan.push(
    "{'index':796,'content':'如果全世界都对你恶语相加，我就对你说上一世情话。</br> - </br>马頔《傲寒》'}"
  );
  mingyan.push(
    "{'index':635,'content':'我何尝不想设计自己的命运，但仅凭这点任性，是撑不过余生的。</br> - </br>陶立夏'}"
  );
  mingyan.push(
    "{'index':906,'content':'这是应该听到爱情瞬间的时刻，因为我们在彼此的眼睛里看到了故乡。 </br> - </br>拉斯克许勒《致米尔》'}"
  );
  mingyan.push(
    "{'index':1131,'content':'十二年来，有笑泪，有阴晴，相伴一场，人来人往，只是日常。 </br> - </br>蔡康永'}"
  );
  mingyan.push(
    "{'index':138,'content':'人类之所以有进步的主要原因是下一代不听上一代的话。</br> - </br>倪匡'}"
  );
  mingyan.push(
    "{'index':1219,'content':'你讨厌的人我绝不和他做朋友，你说别人坏话我也附和，你分手的男友我见一次打一次。别问为什么。这就是女生之间的友情，我不知道能陪你多久，看你嫁人成家当妈妈。愚笨的我，持之以恒地做这些愚笨的事，为了那句逃课后漫不经心说出“一辈子做朋友”的承诺。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':1089,'content':'抱紧你的我，比国王富有。失去你的我，比乞丐落魄。</br> - </br>《国王与乞丐》'}"
  );
  mingyan.push(
    "{'index':630,'content':'头脑可以接受劝告，但心却不能，而爱，因为没学地理，所以不识边界。 </br> - </br>卡波特'}"
  );
  mingyan.push(
    "{'index':1058,'content':'我不知道世间有什么是确定不变的，我只知道，只要一看到星星，我就会开始做梦。 </br> - </br>文森特·梵高'}"
  );
  mingyan.push(
    "{'index':595,'content':'一生至少该有一次，为了某个人而忘了自己，不求有结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇到你。</br> - </br>徐志摩'}"
  );
  mingyan.push(
    "{'index':323,'content':'萍水相逢的滋味很难受，我们成了好朋友，却不可避免要永远分手。</br> - </br>《中央车站》'}"
  );
  mingyan.push(
    "{'index':854,'content':'每个人的眼泪不一样，但想哭的念头是一样的。</br> - </br>《推拿》'}"
  );
  mingyan.push(
    "{'index':137,'content':'交流是通往爱的唯一途径。</br> - </br>卡森·麦卡勒斯'}"
  );
  mingyan.push(
    "{'index':161,'content':'如果你是条船，漂泊就是你的命运，可别靠岸。</br> - </br>北岛'}"
  );
  mingyan.push(
    "{'index':1027,'content':'其实从未迷路，只是有人孤独。</br> - </br>《远在天边》'}"
  );
  mingyan.push(
    "{'index':223,'content':'我们一路奋战，不是为了改变世界，而是不让世界改变我们。</br> - </br>《熔炉》'}"
  );
  mingyan.push(
    "{'index':673,'content':'你一直在练习微笑，倒不是说变成了自己讨厌的人，而是在世故中变得沉稳，总不能累了就放弃，痛了就喊疼。相信别人不如依赖自己，他人报以伤害，时光会给你温暖。</br> - </br>张皓宸'}"
  );
  mingyan.push(
    "{'index':746,'content':'童年是漫无边际的，劳动是光荣的，长大成人是迫切的。</br> - </br>李娟'}"
  );
  mingyan.push(
    "{'index':1286,'content':'如果你过得不幸福，我所做的一切才是徒劳。 </br> - </br>东野圭吾'}"
  );
  mingyan.push(
    "{'index':484,'content':'这世间，唯有梦想与好姑娘不可辜负。</br> - </br>郭斯特'}"
  );
  mingyan.push(
    "{'index':1133,'content':'风可以吹起一大张白纸，却无法吹走一只蝴蝶，因为生命的力量在于不顺从。</br> - </br>冯骥才'}"
  );
  mingyan.push(
    "{'index':488,'content':'不管你了不了解这个世界，这个世界都不会让着你。</br> - </br>《来自星星的你》'}"
  );
  mingyan.push(
    "{'index':1226,'content':'当你不够强大的时候，你想要一个小小的机会，都没有。当你足够牛逼的时候，你的面前有一万个机会，你挡都挡不住。当你足够优秀的时候，你想要的一切都会主动来找你。</br> - </br>咪蒙'}"
  );
  mingyan.push(
    "{'index':261,'content':'在薄情的世界里深情地活着，胜之不武。</br> - </br>曾奇峰'}"
  );
  mingyan.push(
    "{'index':629,'content':'我不要孤独，孤独是丑的，令人作呕的，灰色的。我要和你相通，共存，还有你的温暖，都是迷人的啊！可惜我不漂亮。</br> - </br>王小波《爱你就像爱生命》'}"
  );
  mingyan.push(
    "{'index':1177,'content':'因为遇到你，我开始觉得孤单了。原来这世界上依旧有我想要得到的东西，一念之间，意识到自己活着。活着，真是寂寞。</br> - </br>陶立夏'}"
  );
  mingyan.push(
    "{'index':200,'content':'一个人拥有此生此世是不够的，他还应该拥有诗意的世界。</br> - </br>王小波'}"
  );
  mingyan.push(
    "{'index':88,'content':'不如我们猜一猜，末日和明天哪个先到来。</br> - </br>「一个」工作室全体'}"
  );
  mingyan.push(
    "{'index':404,'content':'哪里会有人喜欢孤独，不过是不喜欢失望罢了。 </br> - </br>村上春树'}"
  );
  mingyan.push(
    "{'index':299,'content':'海明威说，这是个美好的世界，值得我们为之奋斗。我同意后半句。</br> - </br>《七宗罪》'}"
  );
  mingyan.push(
    "{'index':495,'content':'是谁把空中明月，捻得如钩？待我来抟钩作镜，看永久团圆，能否？</br> - </br>刘大白'}"
  );
  mingyan.push(
    "{'index':224,'content':'我们的小缺点让我们找到对的人。</br> - </br>《心灵捕手》'}"
  );
  mingyan.push(
    "{'index':534,'content':'听到一些事，明明不相干的，也会在心中拐好几个弯，想到你。</br> - </br>张爱玲'}"
  );
  mingyan.push(
    "{'index':129,'content':'但愿爱像割过的草地一样会重新长出来。应该以别样的方式生长，好比小孩子换牙，好比头发，好比指甲。它应该按自己的意愿生长。</br> - </br>赫塔·米勒'}"
  );
  mingyan.push(
    "{'index':1017,'content':'我为自己分分秒秒地疏漏万物向时间致歉。我为将新欢视为初恋向旧爱致歉。 </br> - </br>辛波斯卡《在一颗小星星下》'}"
  );
  mingyan.push(
    "{'index':738,'content':'越是低谷的时候，越能看出一个人的本质。最差的结果无非是失败，有人等着失败，有人骂着失败，有人尽了力仍然失败。在这样的环境里，心态就是每个人自身的光，你颓唐就是颓唐，你顽强就是顽强。 </br> - </br>刘同'}"
  );
  mingyan.push(
    "{'index':504,'content':'唯一有效的安慰方式，就是你在我身边。</br> - </br>张嘉佳'}"
  );
  mingyan.push(
    "{'index':794,'content':'人们在狭小的生活圈里互相模仿。为什么他们不尽量远离些，做个真实的自己呢？</br> - </br>大卫·梭罗《远行》'}"
  );
  mingyan.push(
    "{'index':1070,'content':'也许，机遇不会出现在前进的路上，但返回不是我们的方向。 </br> - </br>长期新'}"
  );
  mingyan.push(
    "{'index':1248,'content':'我们都是一群多么可怜的人，喜欢的人得不到，得到的不珍惜，在一起的怀疑，失去的怀念，怀念的想相见，相见的恨晚，终其一生，都满是遗憾。 </br> - </br>牛轰轰'}"
  );
  mingyan.push(
    "{'index':714,'content':'当我沉默地面对着你，你又怎么知道我曾在心里对你说了多少话。当我一成不变地站在你面前，你又怎么知道我内心早已为你千回百转。 </br> - </br>里则林'}"
  );
  mingyan.push(
    "{'index':1174,'content':'其实我希望你对我说谎，因为人只会为了非常害怕失去一样东西才说谎。</br> - </br>奥尔罕·帕慕克'}"
  );
  mingyan.push(
    "{'index':1295,'content':'我渴望能见你一面，但请你记得，我不会开口要求见你。这不是因为骄傲，你知道我在你面前毫无骄傲可言，而是因为，唯有你也想见我的时候，我们见面才有意义。 </br> - </br>《越洋情书》'}"
  );
  mingyan.push(
    "{'index':498,'content':'我唯一锲而不舍，愿意以自己的生命去努力的，只不过是保守我个人的心怀意念，在我有生之日，做一个真诚的人，不放弃对生活的热爱和执着。 </br> - </br>三毛'}"
  );
  mingyan.push(
    "{'index':968,'content':'你的谎言，其实往往就是你的梦想。</br> - </br>大冰'}"
  );
  mingyan.push(
    "{'index':850,'content':'草在结它的种子，风在摇它的叶子。我们站着，不说话，就十分美好。</br> - </br>顾城《门前》'}"
  );
  mingyan.push(
    "{'index':589,'content':'生命里面很多事情，沉重婉转至不可说。我想你明白。正如我想我明白你。 </br> - </br>黄碧云'}"
  );
  mingyan.push(
    "{'index':753,'content':'那时你还是一个孩子，你认为你拥有了许多朋友，但事实上，你拥有的仅仅是伙伴而已。所谓的伙伴就是那些站在你身边，看着你长大成人，然后又渐渐淡出你的生活的人。于是，你开始了新的生活。 </br> - </br>朱利安·巴恩斯'}"
  );
  mingyan.push(
    "{'index':1311,'content':'一个尊重商业和科技的社会总是会进步的。 </br> - </br>韩寒 有事相告上海发布会'}"
  );
  mingyan.push(
    "{'index':624,'content':'我要花一生的精力去忘记，去与想念与希望斗争；事情从来都不公平，我在玩一场必输的赌局，赔上一生的情动。</br> - </br>黄碧云'}"
  );
  mingyan.push(
    "{'index':1170,'content':'回忆会从内侧温暖你的身体，同时又从内侧剧烈切割你的身体。</br> - </br>《海边的卡夫卡》'}"
  );
  mingyan.push(
    "{'index':713,'content':'爱是一颗幸福的子弹，没有爱就没有伤害。</br> - </br>汪峰《爱是一颗幸福的子弹》'}"
  );
  mingyan.push(
    "{'index':41,'content':'世界荆棘，无鹿可逃。</br> - </br>张冠仁'}"
  );
  mingyan.push(
    "{'index':81,'content':'十分羡慕那些算盘打得特别精的人，而我却连计算器都会按错。</br> - </br>徐大发'}"
  );
  mingyan.push(
    "{'index':68,'content':'这世界上不合理的事太多了。浴缸洗完我，我还要洗浴缸。</br> - </br>周云哲'}"
  );
  mingyan.push(
    "{'index':645,'content':'在失去你的风景里面，你却占据了每一条街。 </br> - </br>《步步》'}"
  );
  mingyan.push(
    "{'index':1274,'content':'愿生活里有热汤和甜食，背包里有纸，笔，书。书里故事如迷宫，迷宫通向海。沟通使误解消除，善意如星辰。枝头常有喜鹊歇脚，目明心亮。走很远的路回家，混沌中生出新的自己。</br> - </br>吕彦妮'}"
  );
  mingyan.push(
    "{'index':519,'content':'所有花都为你开，所有景物也为了你安排，我们是如此的不同，肯定前世就已经深爱过。</br> - </br>伍佰'}"
  );
  mingyan.push(
    "{'index':1132,'content':'如果我能少喜欢你一点，你会发现我是个特别好的人。有时候，爱会让人面目可憎。 </br> - </br>八月长安'}"
  );
  mingyan.push(
    "{'index':195,'content':'我们要飞到那遥远地方，看一看，这世界并非那么凄凉。</br> - </br>《张三的歌》'}"
  );
  mingyan.push(
    "{'index':1230,'content':'你看，浪漫的海绵体生物会交媾，冰冷海湾的生蚝、鳕鱼、水母都分男女，电鳗忍着相互电击的痛接吻。如果可以只徇着荷尔蒙恋爱，我和你一定比现在更快乐。</br> - </br>木村夏'}"
  );
  mingyan.push(
    "{'index':207,'content':'朋友知道我心中的歌，在我忘记时唱给我听。</br> - </br>多娜·罗伯茨'}"
  );
  mingyan.push(
    "{'index':779,'content':'我一生中最幸运的两件事，一件是时间终于将我对你的爱消耗殆尽。一件是很久很久以前有一天，遇见你。</br> - </br>顾漫'}"
  );
  mingyan.push(
    "{'index':1180,'content':'当一首歌跟你的某段经历某场感情纠缠在一起的时候，你就再也没法自主地控制情绪。只要这个旋律响起，你都可能会掉眼泪。咖啡馆听到会哭出来，商场里逛街会哭出来，甚至在家里洗澡放歌都可能会掉眼泪。不是忘不掉什么人，只是始终对自己那场无果的付出和被浪费的太炽热的爱耿耿于怀。</br> - </br>暖小团'}"
  );
  mingyan.push(
    "{'index':140,'content':'旧年山中知雪重，新春世间觉情浓。「一个」工作室祝大家春节快乐！'}"
  );
  mingyan.push(
    "{'index':390,'content':'旅行是消除无知和仇恨的最好方法。</br> - </br>马克·吐温'}"
  );
  mingyan.push(
    "{'index':1277,'content':'我们人生中最艰巨的任务就是自我分析、试图领悟我们的人性并化解其中的一切纷争。 </br> - </br>罗伯特·麦基《故事》'}"
  );
  mingyan.push(
    "{'index':1316,'content':'树在。山在。大地在。岁月在。我在。你还要怎样更好的世界?  </br> - </br>《我在》'}"
  );
  mingyan.push(
    "{'index':537,'content':'所有的爱情都是悲哀的，可尽管悲哀，依然是我们知道的最美好的事。</br> - </br>廖一梅'}"
  );
  mingyan.push(
    "{'index':52,'content':'长假结束，万物复苏。今日宜开张。</br> - </br>小饭'}"
  );
  mingyan.push(
    "{'index':545,'content':'我发现一个人在放弃给别人留下好印象的负担之后，原来心里会如此踏实。一个人不必再讨人欢喜，就可以像我此刻这样，停止受累。</br> - </br>严歌苓'}"
  );
  mingyan.push(
    "{'index':56,'content':'秋日渐短，木马来袭，请翼装飞行，勿电话会议。</br> - </br>蔡蕾'}"
  );
  mingyan.push(
    "{'index':256,'content':'我在人生道路上迷失了方向。</br> - </br>《火影忍者》'}"
  );
  mingyan.push(
    "{'index':193,'content':'不乱于心，不困于情，不畏将来，不念过往，如此，安好。</br> - </br>丰子恺'}"
  );
  mingyan.push(
    "{'index':369,'content':'我并不是每次吃完饭就看电视，有时我边吃边看电视，生活中有些改变会增加乐趣。</br> - </br>《加菲猫》'}"
  );
  mingyan.push(
    "{'index':319,'content':'这世界不只有眼前的苟且，还有诗与远方。</br> - </br>高晓松'}"
  );
  mingyan.push(
    "{'index':53,'content':'再见，再次见到。嘿，朋友，我们又见面了。</br> - </br>小饭'}"
  );
  mingyan.push(
    "{'index':209,'content':'爱是这么短，遗忘是这么长。</br> - </br>巴勃鲁•聂鲁达'}"
  );
  mingyan.push(
    "{'index':63,'content':'如果你想让人们羡慕你，那么你就应表现出一副为你的悲哀和羞惭感到自豪的样子。</br> - </br>列夫·舍斯托夫'}"
  );
  mingyan.push(
    "{'index':1375,'content':'自学者和学生的区别，不在于知识的广度，而在于生命力和自信心的差异。 </br> - </br>米兰·昆德拉'}"
  );
  mingyan.push(
    "{'index':429,'content':'大部分的痛苦，都是不肯离场的结果，没有命定的不幸，只有死不放手的执着。 </br> - </br>素黑'}"
  );
  mingyan.push(
    "{'index':910,'content':'我好久没有以小步紧跑去迎接一个人的那种快乐了。</br> - </br>木心《琼美卡随想录》'}"
  );
  mingyan.push(
    "{'index':1142,'content':'一个人生活，觉得日子都变长了。 </br> - </br>小津安二郎'}"
  );
  mingyan.push(
    "{'index':531,'content':'这世界不会被那些作恶多端的人毁灭，而是冷眼旁观、选择保持缄默的人。</br> - </br>爱因斯坦'}"
  );
  mingyan.push(
    "{'index':418,'content':'生活总会给你答案，但不会马上把一切都告诉你。</br> - </br>马德'}"
  );
  mingyan.push(
    "{'index':1186,'content':'我们共同经历过的每一件小事，在当时看来也许毫无意义，但注定会成为彼此毕生的秘密，因为在未来的日子里，哪怕各自努力想要诉说给任何一个外人听，都必然无法还原当时的景状，即使能说得清眼里曾看到的，也说不清心里曾掠过的。</br> - </br>郑执'}"
  );
  mingyan.push(
    "{'index':1333,'content':'人，即使活到八九十岁，有母亲便可以多少还有点孩子气。失了慈母便像花插在瓶子里，虽然还有色有香，却失去了根。有母亲的人，心里是安定的。 </br> - </br>老舍'}"
  );
  mingyan.push(
    "{'index':1135,'content':'我们的爱若是错误，愿你我没有白白受苦。</br> - </br>《领悟》'}"
  );
  mingyan.push(
    "{'index':1007,'content':'美貌、青春、财富、甚至爱情本身，都不能让深得上帝恩宠的人免于焦虑和痛苦，远离哀愁，也无法让他们避免失去自己最爱的东西。因为，一生中，有些雨必然得下。</br> - </br>《小妇人》'}"
  );
  mingyan.push(
    "{'index':676,'content':'如果我又遇见你，隔着岁月悠长。我将如何向你致意？以眼泪，以沉默。</br> - </br>拜伦。'}"
  );
  mingyan.push(
    "{'index':355,'content':'生命里的VIP，总是让你甘愿把自己的原则一再打折。</br> - </br>一蚊丁'}"
  );
  mingyan.push(
    "{'index':923,'content':'旅行的乐趣是什么，就是即使到了几乎一无所知的地方，那里也必定有耀眼之处，而自己要亲自将这些光芒一个个拾起、收集起来。</br> - </br>松浦弥太郎'}"
  );
  mingyan.push(
    "{'index':465,'content':'这世界不是那么好，也不是那么坏。2013，白白。</br> - </br>「一个」工作室'}"
  );
  mingyan.push(
    "{'index':1023,'content':'错误的开始，未必不能走到完美的结束，人生没有什么事是一定的。都是在碰，在等，在慢慢寻找。</br> - </br>《流苏与娜拉》'}"
  );
  mingyan.push(
    "{'index':174,'content':'我们今天在此是因为这是匹永不投降的马，就算命运以毫厘之差击败了它。</br> - </br>《奔腾年代》'}"
  );
  mingyan.push(
    "{'index':980,'content':'阳光照耀大地，绿叶涌出树枝，犹如电影镜头中万物飞快生长。那熟悉的信念又回到我的心中，夏日来临，新生活开始了。 </br> - </br>《了不起的盖茨比》'}"
  );
  mingyan.push(
    "{'index':450,'content':'离全年结束还有18天。</br> - </br>「一个」工作室'}"
  );
  mingyan.push(
    "{'index':1221,'content':'一个人吃饭也没有什么不好，不过是空出来一个座，邀请了寂寞。 </br> - </br>周宏翔'}"
  );
  mingyan.push(
    "{'index':1290,'content':'读书多了，容颜自然改变，许多时候，自己可能以为许多看过的书籍都成了过眼云烟，不复记忆，其实他们仍是潜在的。在气质里，在谈吐上，在胸襟的无涯，当然也可能显露在生活和文字里。 </br> - </br>三毛'}"
  );
  mingyan.push(
    "{'index':222,'content':'小时候，谁都觉得自己的未来闪闪发光，不是吗？</br> - </br>《被嫌弃的松子的一生》'}"
  );
  mingyan.push(
    "{'index':64,'content':'英雄会成为英雄，总是因为想被人记住。</br> - </br>夜X'}"
  );
  mingyan.push(
    "{'index':339,'content':'遗忘是小丑的使命。</br> - </br>《悲情城市》'}"
  );
  mingyan.push(
    "{'index':1059,'content':'喜欢一个人怎么会是这样，前一秒钟你恨不得撕碎了他，下一秒却蹲在地上边哭边捡，不知道该怎么拼起来。 </br> - </br>八月长安'}"
  );
  mingyan.push(
    "{'index':116,'content':'生命短促，没有时间可以再浪费，一切随心自由才是应该努力去追求的，别人如何想我便是那么的无足轻重了。</br> - </br>三毛'}"
  );
  mingyan.push(
    "{'index':1367,'content':'人情世故的阻路栅栏无外乎两个词：回头、改天。一回头就是杳无音信，一改天就没了下文。</br> - </br>大冰'}"
  );
  mingyan.push(
    "{'index':485,'content':'我们居住的地球是好是坏，全取决于我们变好还是变坏。 </br> - </br>《牧羊少年奇幻之旅》'}"
  );
  mingyan.push(
    "{'index':1332,'content':'喜欢坐火车，喜欢一站一站的慢慢南下或者北上，喜欢在旅途中间的我。只因为，在旅途的中间，我就可以不属于起点或者终点，不属于任何地方和任何人，在这个单独的时刻里，我只需要属于我自己就够了。 </br> - </br>席慕蓉'}"
  );
  mingyan.push(
    "{'index':433,'content':'我只希望，祈祷，我的心境不要再粗糙下去，荒芜下去，这就是我的最大愿望。 </br> - </br>周作人'}"
  );
  mingyan.push(
    "{'index':927,'content':'世界上的任何东西，都能轻而易举地背叛你，哪怕是一片阿司匹林也可以在你生龙活虎的日子里默默过期，在你头疼欲裂的时候失去作用。唯独记忆太过忠诚。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':460,'content':'每当我找不到存在的意义，每当我迷失在黑夜里，夜空中最亮的星，请照亮我前行。</br> - </br>逃跑计划《夜空中最亮的星》'}"
  );
  mingyan.push(
    "{'index':696,'content':'喜欢就会评论，但爱就是转发。</br> - </br>方慧'}"
  );
  mingyan.push(
    "{'index':661,'content':'别人给的从来不叫安全感，勉强算是廉价的依赖。安全感基于独立，你赞扬一棵树迎风挺拔，却忘了它年复一年形单影只的孤苦。</br> - </br>乔小囧'}"
  );
  mingyan.push(
    "{'index':579,'content':'像一朵向日葵，在夜里默默地坚持，一直爱着你，用我自己的方式。</br> - </br>蓝又时《孤单心事》'}"
  );
  mingyan.push(
    "{'index':914,'content':'有些人快乐地施与，这快乐就是他们的回报。有些人痛苦地施与，这痛苦就是他们的洗礼。 </br> - </br>纪伯伦《先知》'}"
  );
  mingyan.push(
    "{'index':622,'content':'我知道，那些夏天就像你一样回不来，我也不会再对谁满怀期待。我知道，这个世界每天都有太多遗憾。所以，你好，再见。</br> - </br>宋冬野《安和桥》'}"
  );
  mingyan.push(
    "{'index':275,'content':'青春就是不停地告别，告别就是死亡一点点。</br> - </br>赵西栋'}"
  );
  mingyan.push(
    "{'index':826,'content':'愿生活可以如诗般自由，吃想吃的饭，见想见的人，看喜欢的风景，做可以做的事。心不老，有人一起胡闹，你还在，我依然。</br> - </br>张皓宸'}"
  );
  mingyan.push(
    "{'index':1150,'content':'有时觉得“如约而至”是个多么美好的词。等的很苦，却从不辜负。 </br> - </br>路明'}"
  );
  mingyan.push(
    "{'index':304,'content':'历史一直企图把所有人用黑色和白色来区分。可这世界从来都没有单纯的黑色与白色。</br> - </br>释戒嗔《张邦昌说》'}"
  );
  mingyan.push(
    "{'index':909,'content':'有一种鸟，最擅长恋爱。自己是自己的情人，跳着刚刚发明的舞蹈，跳着跳着就忘了睡觉。</br> - </br>万晓利《孤独鸟》'}"
  );
  mingyan.push(
    "{'index':467,'content':'为过去的相遇说再见，为现在的相处说感谢。为未来的相助说拜托，为无间的友谊说永存。</br> - </br>《小小事件》'}"
  );
  mingyan.push(
    "{'index':210,'content':'梦里出现的人，醒来时就该去见他，生活就是那么简单。 </br> - </br>《新桥恋人》'}"
  );
  mingyan.push(
    "{'index':434,'content':'当世界年纪还小的时候，洋葱、萝卜和西红柿，不相信世界上有南瓜这种东西。它们认为那是一种空想。南瓜不说话，默默地成长着。 </br> - </br>《当世界年纪还小的时候》'}"
  );
  mingyan.push(
    "{'index':239,'content':'如果你再走近一些，我就不会再让你走了。</br> - </br>《爱情无线牵》'}"
  );
  mingyan.push(
    "{'index':535,'content':'她那时候还太年轻，不知道所有命运赠送的礼物，早已在暗中标好了价格。</br> - </br>茨威格'}"
  );
  mingyan.push(
    "{'index':1015,'content':'一件事无论太晚或者太早，都不会阻拦你成为你想成为的那个人，这个过程没有时间的期限，只要你想，随时都可以开始。</br> - </br>《返老还童》'}"
  );
  mingyan.push(
    "{'index':1035,'content':'你背对着山河一步步走向我，你脚踏着山河一步步走近我，你打开了我的躯壳，你唤醒了我的耳朵，带走我。 </br> - </br>陈粒'}"
  );
  mingyan.push(
    "{'index':26,'content':'跟我去北方吧，逃离爱情的肤浅，南方的江山太妩媚，腐蚀了我的热血。</br> - </br>左小祖咒《爱情的枪》'}"
  );
  mingyan.push(
    "{'index':775,'content':'最理想的情况是，所有人必须将人生的每个瞬间视为最后一瞬间。 如果下一个瞬间就是最后一瞬间，那么任何瞬间都将是最闪耀的极致时光。</br> - </br>白石一文'}"
  );
  mingyan.push(
    "{'index':61,'content':'我把我的人生看作是一次长假。</br> - </br>孙甘露'}"
  );
  mingyan.push(
    "{'index':858,'content':'人们爱的是一些人，与之结婚生子的，又是另外一些人。</br> - </br>亦舒'}"
  );
  mingyan.push(
    "{'index':532,'content':'如果当初我勇敢，结局是不是不一样。如果当时你坚持，回忆会不会不一般。最终我还是没说，你还是忽略。</br> - </br>岩井俊二'}"
  );
  mingyan.push(
    "{'index':411,'content':'记得是最好的原谅，原谅是最美的遗忘。</br> - </br>迟遇'}"
  );
  mingyan.push(
    "{'index':808,'content':'每片海，沉浮着不同的景致，也翻滚着各自的危险。生活也是、人的欲望也是。以前以为节制或者自我用逻辑框住，甚至掩耳盗铃地掩藏住，是最好的方法，然而，无论如何，它终究永远在那躁动起伏。</br> - </br>蔡崇达《皮囊》'}"
  );
  mingyan.push(
    "{'index':1046,'content':'你让我觉得，面对这个世界只是观看而不试图去理解，是种莫大的浪费。 </br> - </br>陶立夏《如果没有你》'}"
  );
  mingyan.push(
    "{'index':1110,'content':'我假装无情，其实是痛恨自己的深情。 </br> - </br>卡尔维诺'}"
  );
  mingyan.push(
    "{'index':425,'content':'我们领教了世界是何等凶顽，同时又得知世界也可以变得温存和美好。 </br> - </br>村上春树'}"
  );
  mingyan.push(
    "{'index':1102,'content':'你知道吗？如果我明天就死掉的话，我会因为今天见到你，而觉得无憾。</br> - </br>《不再让你孤单》'}"
  );
  mingyan.push(
    "{'index':572,'content':'在这不长的生命中可以遇见一个闪闪发光的人，是多好的事吧，就算你们没有在一起，也至少把他当成信仰一般遥远地爱过，这青春就无悔了吧。</br> - </br>张皓宸'}"
  );
  mingyan.push(
    "{'index':92,'content':'无所谓从哪儿来，也无所谓到哪儿去。 为活着找个理由，只为更好的活着。From 史铁生《命若琴弦》'}"
  );
  mingyan.push(
    "{'index':1093,'content':'后来我把很多人都称作老师，但是像你一样担心我的，没有一个。 </br> - </br>乌冬'}"
  );
  mingyan.push(
    "{'index':995,'content':'过去都是假的，回忆是一条没有归途的路。 </br> - </br>《百年孤独》'}"
  );
  mingyan.push(
    "{'index':1235,'content':'当人们说“我爱你”，喜悦的有很多，悲伤的不是没有。世间这两句话，总是那样意味深长：“我爱你”、“好久不见”。 </br> - </br>Letich'}"
  );
  mingyan.push(
    "{'index':575,'content':'当时的他是最好的他，后来的我是最好的我，可是最好的我们之间，隔了一整个青春。怎么奔跑也跨不过的青春，只好伸出手道别。</br> - </br>八月长安'}"
  );
  mingyan.push(
    "{'index':305,'content':'挫折，是老天在帮你规划更长远的东西，只是现在还不能告诉你。</br> - </br>周杰伦'}"
  );
  mingyan.push(
    "{'index':84,'content':'繁华世界里孤独的人，就像咖啡杯里怎么搅拌也融化不掉的那支小调羹。</br> - </br>金丹华。'}"
  );
  mingyan.push(
    "{'index':967,'content':'别跟我说人生海海，我只想认识你，然后留下一段热泪盈眶的回忆。 </br> - </br>《向阳处的她》'}"
  );
  mingyan.push(
    "{'index':1190,'content':'一个人没有信心，第二天都不想起床。 </br> - </br>康德'}"
  );
  mingyan.push(
    "{'index':1189,'content':'什么是爱情里的甜？是相看两不厌。即使吵架即使委屈，但想想那是你，便也是心甘情愿的。 </br> - </br>咸贵人'}"
  );
  mingyan.push(
    "{'index':185,'content':'你想没想过，你越装聪明，别人越骗你。</br> - </br>暖小团'}"
  );
  mingyan.push(
    "{'index':752,'content':'不知不觉就长到了要爱要哀愁要纠结要迟疑要理性要偷泣要分别的年龄。</br> - </br>野夫《1980年代的爱情》'}"
  );
  mingyan.push(
    "{'index':1307,'content':'少女心是永远不会老的，等到了七十岁，八十岁，还可以为年轻的壮举发笑，还可以继续热爱世界，像十七八岁时热爱自己一样。</br> - </br>陈大力'}"
  );
  mingyan.push(
    "{'index':1114,'content':'我们交换彼此的故乡，在陌生中获得短暂的精彩，然后回到各自的城市，扛起熟悉的一切。我爱你。 </br> - </br>熊德启'}"
  );
  mingyan.push(
    "{'index':214,'content':'如果还有明天，你想怎样装扮你的脸。</br> - </br>刘伟仁'}"
  );
  mingyan.push(
    "{'index':1029,'content':'你不珍惜那个人，命运就会给他安排更好的人。 </br> - </br>苑子豪'}"
  );
  mingyan.push(
    "{'index':33,'content':'很多人可以走进你的生活，很少人可以走进你的生命。</br> - </br>朱威廉'}"
  );
  mingyan.push(
    "{'index':489,'content':'什么是爱？这其实很简单。凡是提高、充实、丰富我们生活的东西就是爱。通向一切高度和深度的东西就是爱。</br> - </br>卡夫卡'}"
  );
  mingyan.push(
    "{'index':892,'content':'还记得你说世界美好事情真的特别多，只是很容易擦肩而过。</br> - </br>《吟游诗人》'}"
  );
  mingyan.push(
    "{'index':415,'content':'通常百年也难出一个伽利略或爱因斯坦，凡夫俗子最好安分点，别老想吃天鹅肉。</br> - </br>阿瑟·克拉克'}"
  );
  mingyan.push(
    "{'index':417,'content':'口是心非的人，总是在夜里翻来覆去的。</br> - </br>《电车计划》'}"
  );
  mingyan.push(
    "{'index':971,'content':'我不想再拘泥于一种颜色了，而是想去了解更多的颜色。</br> - </br>《暗杀教室》'}"
  );
  mingyan.push(
    "{'index':996,'content':'把你的影子，加点盐，腌起来，风干。老的时候，下酒。 </br> - </br>《甜蜜的复仇》'}"
  );
  mingyan.push(
    "{'index':1098,'content':'感情最怕的就是自私，可是人心不像纸箱，会被逐渐填满，如果你爱得更多，心的容量也会变得越来越大。 </br> - </br>《她》'}"
  );
  mingyan.push(
    "{'index':251,'content':'在我小时候，我极力装得像个大人，当我已经不再是小孩的时候，我又希望像个孩子。</br> - </br>列夫·托尔斯泰'}"
  );
  mingyan.push(
    "{'index':1224,'content':'“爱情”的定义，简单到不能再简单——只要在一起就好。附加的形容词越多，离它的本意就越远。</br> - </br>灰鸽'}"
  );
  mingyan.push(
    "{'index':559,'content':'但凡未得到，但凡是过去，总是最登对 。</br> - </br>《似是故人来》'}"
  );
  mingyan.push(
    "{'index':1010,'content':'夏天要是一直这样就好了，一会儿梨花带雨，一会儿晚来风急，空气濡湿清洌，一头撞进风里像撞进什么人怀里。 </br> - </br>郭大侠'}"
  );
  mingyan.push(
    "{'index':801,'content':'任何人都是这样，处理别人的事情总是大刀阔斧一把抓住主要问题，轮到自己却沉浸在细枝末节不肯放手。</br> - </br>《橘生淮南·暗恋》'}"
  );
  mingyan.push(
    "{'index':868,'content':'我知，日后，路上或没有更美的邂逅。但当你智慧都酿成红酒，仍可一醉自救。 </br> - </br>《葡萄成熟时》'}"
  );
  mingyan.push(
    "{'index':671,'content':'总以为爱不过是逢场作戏。谁都以为自己可以是观众席中的一位，结果灯光亮起，还不都是戏假情真落了泪。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':831,'content':'命运就是，无论怎么重来，我们依然会义无反顾相爱和分开。但我感谢这安排。</br> - </br>琦殿'}"
  );
  mingyan.push(
    "{'index':961,'content':'你那么爱谈恋爱，爱错几个人又如何。 </br> - </br>魏天一'}"
  );
  mingyan.push(
    "{'index':983,'content':'我们都是寂寞惯了的人。</br> - </br>《十八春》'}"
  );
  mingyan.push(
    "{'index':799,'content':'别因为一句话爱一个人，别因为一件事恨一个人。</br> - </br>李志'}"
  );
  mingyan.push(
    "{'index':549,'content':'就这样我慢慢等待，等待你的身影破雾走来。 </br> - </br>安德雷森'}"
  );
  mingyan.push(
    "{'index':674,'content':'旅行的意义就在于，它允许我错误地理解生活，在这种生活里，我们都是毋需承担的过客，是心情轻松的旁观者，是满心期待的异乡人。</br> - </br>陶立夏'}"
  );
  mingyan.push(
    "{'index':372,'content':'时间一天天过去，好像什么都没变，但当你某天回首，却发现一切怎么都不同了。</br> - </br>《生活大爆炸》'}"
  );
  mingyan.push(
    "{'index':1278,'content':'我们以为，惊喜是刻意制造的浪漫，但很多时候，惊喜可能只是一个温暖的小发现。惊喜就是，你用你独有的方式，爱着我。 </br> - </br>咪蒙'}"
  );
  mingyan.push(
    "{'index':462,'content':'如果我们不争取，如果我们不配拥有未来，我们就得永远活在现状。或者更糟，得活在过去。我想爱的用意大概就在这里，爱是争取未来的方式。 </br> - </br>格里高利·大卫·罗伯兹'}"
  );
  mingyan.push(
    "{'index':693,'content':'时间是熟睡的脸，说着梦的语言。我小心地翻译着一字一句，原来它说，重复地说，是爱你让我的时间停留，停留。</br> - </br>陈绮贞《时间的歌》'}"
  );
  mingyan.push(
    "{'index':22,'content':'爱是：看到你就开心，跟你睡在一起就满足。</br> - </br>小饭'}"
  );
  mingyan.push(
    "{'index':247,'content':'从前的日色变得慢。车，马，邮件都慢。一生只够爱一个人。</br> - </br>木心'}"
  );
  mingyan.push(
    "{'index':1287,'content':'感情这个东西，你爱我，我就更爱你。你讨厌我，我就自觉别过头去。 </br> - </br>小饭'}"
  );
  mingyan.push(
    "{'index':766,'content':'为了一个不知能否实现的愿望，人有时会豁出一辈子的。笑其愚蠢的人，毕竟只是人生中的过客而已。</br> - </br>芥川龙之介'}"
  );
  mingyan.push(
    "{'index':702,'content':'多活十年又如何。你最多能比别人多活80或90岁那十年。不能多活20岁这十年。</br> - </br>三坨土'}"
  );
  mingyan.push(
    "{'index':916,'content':'任何不能杀了我的，只会令我更强。</br> - </br>尼采'}"
  );
  mingyan.push(
    "{'index':416,'content':'明白在情爱的范畴中是决无韬略可施的，为王，为奴，都是虚空，都是捕风。</br> - </br>木心'}"
  );
  mingyan.push(
    "{'index':959,'content':'那些无足轻重的人，那些听任自己变得无足轻重的人，在世界上没有位置。</br> - </br>《河湾》'}"
  );
  mingyan.push(
    "{'index':1313,'content':'世界就像个巨大的马戏团，它让你兴奋，却让我惶恐，因为我知道散场永远是——有限温存，无限辛酸。 </br> - </br>卓别林'}"
  );
  mingyan.push(
    "{'index':352,'content':'我爱你，爱了整整一个曾经。</br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':508,'content':'告白的力量非常强大，那个勇气会左右对方的心理。喜欢的心理得胜过怕被拒绝而害怕的心理，才能叫做告白。</br> - </br>《恋爱操作团》'}"
  );
  mingyan.push(
    "{'index':680,'content':'所谓成功，就是按你自己喜欢的方式，过你的一生。 </br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':469,'content':'一粒麦子不落在地里死了，仍旧是一粒麦子；若是死了，就结出许多粒子来。</br> - </br>《圣经》'}"
  );
  mingyan.push(
    "{'index':726,'content':'希望死后的墓志铭可以有底气刻上：一生努力，一生被爱。想要的都拥有，得不到的都释怀。</br> - </br>八月长安'}"
  );
  mingyan.push(
    "{'index':1104,'content':'人生何必如初见，但求相看两不厌。</br> - </br>蔡康永'}"
  );
  mingyan.push(
    "{'index':1339,'content':'希望我们都是只争朝夕，计较的人。永远不会说，来日方长。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':867,'content':'每个人的心里，有多么长的一个清单，这些清单里写着多少美好的事，可是，它们总是被推迟，被搁置，在时间的阁楼上腐烂。为什么勇气的问题总是被误以为是时间的问题，而那些沉重、抑郁的、不得已的，总是被叫做生活本身。</br> - </br>《被搁置的生活》'}"
  );
  mingyan.push(
    "{'index':631,'content':'今夜我不关心人类，我只想你。</br> - </br>海子'}"
  );
  mingyan.push(
    "{'index':1176,'content':'此刻，我多想拥抱你，可惜时光之里山南水北，可惜你我中间人来人往。 </br> - </br>鸢喜'}"
  );
  mingyan.push(
    "{'index':364,'content':'真的，单单你的名字就够我爱一世了。</br> - </br>王小波'}"
  );
  mingyan.push(
    "{'index':72,'content':'五楼那只蓝胖子居然还没来表白？为什么！ </br> - </br>张冠仁'}"
  );
  mingyan.push(
    "{'index':158,'content':'人的眼睛所看到的事情，不是唯一的。因为有时候你一辈子记住的事，不是眼睛看到的事。</br> - </br>吴明益'}"
  );
  mingyan.push(
    "{'index':625,'content':'按自己希望的方式生活不叫自私，要求別人按照自己希望的方式生活才叫自私。 </br> - </br>鲁斯·伦德尔'}"
  );
  mingyan.push(
    "{'index':687,'content':'全世界好像只有我疲惫，但愿绝望和无奈远走高飞。</br> - </br>《世界末日》'}"
  );
  mingyan.push(
    "{'index':496,'content':'我们只是一直学着笑嘻嘻地面对荒谬古怪的浮世，因为如果真能学会这样生活，艰辛的步伐有时也能成为小小的舞蹈。</br> - </br>蔡康永'}"
  );
  mingyan.push(
    "{'index':1005,'content':'有些人对时间的流逝，感到遗憾；有些人则深陷其中，永远也逃不出来。</br> - </br>《沉睡的青春》'}"
  );
  mingyan.push("{'index':230,'content':'很高兴见到你。还是去你家玩吧。'}");
  mingyan.push(
    "{'index':1021,'content':'最美的不是下雨天，是曾与你躲过雨的屋檐。</br> - </br>方文山'}"
  );
  mingyan.push(
    "{'index':707,'content':'你等的不是那个还没出现的人，而是忘不掉的人。</br> - </br>《摩斯探长前传》'}"
  );
  mingyan.push(
    "{'index':366,'content':'这个世界上唯有两样东西能让我们的心灵感到深深的震撼：一是我们头顶上灿烂的星云，二是我们心中崇高的道德法则。</br> - </br>康德'}"
  );
  mingyan.push(
    "{'index':356,'content':'我们遗憾的并不是错过了最好的人，而是遇到再好的人，却已经把最好的自己用完了。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':1231,'content':'如果真有一段可以称之为青春的岁月，我想，那指的并非某段期间的一般状态，而是一段通过青涩内在，在阳光照射下轻飘摇晃、接近透明而无为的时间吧。也是被丢进自我意识泛滥之大海时所遭遇的瞬间陶醉。换句话说，那是一种光荣的贫瘠、伟大的缺席。</br> - </br>森山大道'}"
  );
  mingyan.push(
    "{'index':1139,'content':'去过的地方越多，越知道自己想回到什么地方去。见过的人越多，越知道自己真正想待在什么人身边。 </br> - </br>夏正正'}"
  );
  mingyan.push(
    "{'index':818,'content':'有些事，只能一个人做。有些关，只能一个人过。有些路啊，只能一个人走。</br> - </br>龙应台'}"
  );
  mingyan.push(
    "{'index':233,'content':'你没有如期归来，而这正是离别的意义。</br> - </br>北岛'}"
  );
  mingyan.push(
    "{'index':76,'content':'人生就是不断地放下，但痛心的是我还没来得及与他们好好告别。</br> - </br>《少年Pi的奇幻漂流》'}"
  );
  mingyan.push(
    "{'index':308,'content':'我们生来就是孤独。</br> - </br>李志《梵高先生》'}"
  );
  mingyan.push(
    "{'index':620,'content':'小孩儿说话大人不要插嘴。</br> - </br>蔡蕾'}"
  );
  mingyan.push(
    "{'index':281,'content':'与你年轻时的面貌相比，我更爱你现在备受摧残的容颜。</br> - </br>杜拉斯《情人》'}"
  );
  mingyan.push(
    "{'index':875,'content':'我要和你在一起，直到我不爱你。宝贝，人和人一场游戏。</br> - </br>李志'}"
  );
  mingyan.push(
    "{'index':792,'content':'如果别人让你感到不满或者不快，或者他们的行为不如意，你需要理解，不是每个人都像你这样，受到了良好的教育。</br> - </br>菲茨杰拉德'}"
  );
  mingyan.push(
    "{'index':446,'content':'钱没了可以挣回来，今天过了就再也没有了。</br> - </br>《无人区》'}"
  );
  mingyan.push(
    "{'index':1111,'content':'说谎和沉默可以说是现在人类社会里日渐蔓延的两大罪恶。事实上，我们经常说谎，动不动就沉默不语。</br> - </br>村上春树《且听风吟》'}"
  );
  mingyan.push(
    "{'index':146,'content':'用一颗浏览的心，去看待人生，一切的得与失，隐与显，都是风景与风情。</br> - </br>扎西拉姆多多'}"
  );
  mingyan.push(
    "{'index':336,'content':'你会等我的。因为，我让自己等了你很久。</br> - </br>《去年在马里昂巴德》'}"
  );
  mingyan.push(
    "{'index':317,'content':'我想用我的双手把我的爱人紧紧地拥在怀中，哪怕只有一次。</br> - </br>《剪刀手爱德华》'}"
  );
  mingyan.push(
    "{'index':748,'content':'或许你还会想起我，就像想起一朵不重开的花朵。</br> - </br>叶赛宁'}"
  );
  mingyan.push(
    "{'index':893,'content':'你在我身边也好，在天边也罢，想到世界的角落有一个你，觉得整个世界也变得温柔安定了。</br> - </br>琦殿'}"
  );
  mingyan.push(
    "{'index':1234,'content':'沉默寡言的人，也许是不愿意被粗暴拆开的礼物；复杂难解的心，其实在等待一个耐心打磨钥匙的人。 </br> - </br>乌冬'}"
  );
  mingyan.push(
    "{'index':772,'content':'也许你我时常出现在彼此梦里，可醒来后又要重新调整距离。</br> - </br>窦唯'}"
  );
  mingyan.push(
    "{'index':567,'content':'抱歉，现在不流行感人肺腑，只求刀枪不入。</br> - </br>李宇春《酷》'}"
  );
  mingyan.push(
    "{'index':1328,'content':'幸福是每一个微小的生活愿望达成。当你想吃的时候有得吃，想被爱的时候有人来爱你。 </br> - </br>《飞屋环游记》'}"
  );
  mingyan.push(
    "{'index':1276,'content':'所有的懦弱都出自于没有爱，或者爱得不彻底，这两者都一样。 </br> - </br>《午夜巴黎》'}"
  );
  mingyan.push(
    "{'index':276,'content':'这辈子决定你悲欢的就是你身边的几个人。</br> - </br>柴静'}"
  );
  mingyan.push(
    "{'index':58,'content':'即使头上长出鹿角，口琴的魔力依然无法停止。今日宜留齐刘海，忌独立小桥。</br> - </br>张冠仁'}"
  );
  mingyan.push(
    "{'index':899,'content':'无论男女，作为动物活在世上，一粒果子迸溅在嘴里的滋味是一样的，为对方梳理皮毛的眷恋是一样的，被命运碾过的痛苦是一样的，生之狂喜和死之无可奈何也是一样的。</br> - </br>柴静'}"
  );
  mingyan.push(
    "{'index':295,'content':'当然要迷失方向，才能到达一个无人能找到的地方。</br> - </br>《加勒比海盗》'}"
  );
  mingyan.push(
    "{'index':805,'content':'对面走过来一个人，你撞上去了，那是爱情；对面开过来一辆车，你撞上去了，是车祸。但是呢，车和车总是撞，人和人总是让。 </br> - </br>《推拿》'}"
  );
  mingyan.push(
    "{'index':1289,'content':'那些男人们觉得超无趣的小事，就是女人的爱情。 </br> - </br>傅首尔'}"
  );
  mingyan.push(
    "{'index':1055,'content':'有些乐趣和人生际遇或许我们永远不会有。然而正是在这些“得不到”和“有所得”之间，我们确立了自己在这个世界上的位置。 </br> - </br>荞麦'}"
  );
  mingyan.push(
    "{'index':987,'content':'所谓人生，就是为了后悔而过的。 </br> - </br>《Dr.伦太郎》'}"
  );
  mingyan.push(
    "{'index':1205,'content':'而到如今，我明白过来，无论怎样肆无忌惮地去过这一场青春，都不可能在白发苍苍时觉得这一切无愧于心。所有故事都会有遗憾，这才是实实在在的人生，值得被想起，庆幸曾经历。</br> - </br>猫力'}"
  );
  mingyan.push(
    "{'index':1253,'content':'世界上没有什么东西能拿我们怎么样，可是我们自己老是想恢复失去的东西，老想着过去，就会毁了我们自己。 </br> - </br>玛格丽特·米切尔'}"
  );
  mingyan.push(
    "{'index':1120,'content':'我也不懂为什么世界上就是有这种感情，因为第一眼的一点点动心，赌上一生的羁绊。我很瞧不起，却也不过就是活成这样的人。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':343,'content':'我想在大地上画满窗子，让所有习惯黑暗的眼睛都习惯光明。</br> - </br>顾城'}"
  );
  mingyan.push(
    "{'index':37,'content':'我们喜欢哪门课，考哪所大学，学什么专业，想成为什么样的自己，都可能是某个老师修改后的结果。</br> - </br>咪蒙'}"
  );
  mingyan.push(
    "{'index':492,'content':'人生最糟糕的事，一个是饥饿 ，一个是孤独。</br> - </br>《夏日大作战》'}"
  );
  mingyan.push(
    "{'index':379,'content':'没有足够的勇气去冒险的人，人生将一事无成。</br> - </br>拳王阿里'}"
  );
  mingyan.push(
    "{'index':785,'content':'幸福就是，生活中不必时时恐惧。幸福就是，寻常的人儿依旧。幸福就是，早上挥手说“再见”的人，晚上又平平常常地回来了，书包丢在同一个角落，臭球鞋塞在同一张椅下。</br> - </br>龙应台'}"
  );
  mingyan.push(
    "{'index':1173,'content':'爱情就是罗生门，我们各自解释，没人知道真相。 </br> - </br>薛诗汉'}"
  );
  mingyan.push(
    "{'index':463,'content':'可不可以买你的不快乐，我们一起唱歌、一起牵手、一起听音乐，把你的不快乐卖给我，然后抱一下，好不好？ </br> - </br>魏如萱'}"
  );
  mingyan.push(
    "{'index':29,'content':'仓廪实而知礼节，衣食足而知荣辱。</br> - </br>《管子·牧民》'}"
  );
  mingyan.push(
    "{'index':1301,'content':'梦想不是挂在嘴边炫耀的空气，而是需要认真的实践，等到对的风，我们展翅翱翔。 </br> - </br>九把刀'}"
  );
  mingyan.push(
    "{'index':548,'content':'我觉得生命是最重要的，所以在我心里，没有事情是解决不了的。不是每一个人都可以幸运地过自己理想中的生活，有楼有车当然好了，没有难道哭吗？所以呢，我们一定要享受我们所过的生活。</br> - </br>《新不了情》'}"
  );
  mingyan.push(
    "{'index':979,'content':'人生既不能延长，也没有赞美。既然这样，就觉得不如做些想都没想过的事，当做回忆也好啊。</br> - </br>伊坂幸太郎'}"
  );
  mingyan.push(
    "{'index':395,'content':'有些人能清楚地听到自己内心深处的声音，并以此行事。这些人要么变成了疯子，要么成为传奇。</br> - </br>《燃情岁月》'}"
  );
  mingyan.push(
    "{'index':633,'content':'你都如何回忆我，带着笑或是很沉默，这些年来有没有人能让你不寂寞。</br> - </br>《后来》'}"
  );
  mingyan.push(
    "{'index':473,'content':'宇宙间只有一个永不改变的法则，那就是一切都在改变，一切都是无常。</br> - </br>佛陀'}"
  );
  mingyan.push(
    "{'index':334,'content':'你们一直抱怨这个地方，但是你们却没有勇气走出这里。</br> - </br>《飞越疯人院》'}"
  );
  mingyan.push(
    "{'index':155,'content':'痛苦分两种，一种让你变得更强；另一种则毫无价值，只是徒增折磨。</br> - </br>《纸牌屋》'}"
  );
  mingyan.push(
    "{'index':616,'content':'我渴望一种爱情，不会因为爱的卑微而心生疲惫，也不会因爱的无耻而滋生轻蔑。他与我棋逢对手见招拆招，他看穿我的轮廓、亲吻我的奋勇，然后原谅我的无耻，和那些无法启齿的卑贱。</br> - </br>孙小美'}"
  );
  mingyan.push(
    "{'index':85,'content':'其实任何人，在经历时，都不会知道自己正在经历一生中最幸福的时刻。</br> - </br>奥尔罕·帕慕克'}"
  );
  mingyan.push(
    "{'index':1143,'content':'我们生活中所拥有的恐慌，绝大多数都是来源于陌生，而大部分不能言说的伤痛，常来自于失去，我们很难了解彼此，或者说，感同身受本身就是一个伪命题。 </br> - </br>杨幂'}"
  );
  mingyan.push(
    "{'index':838,'content':'人生若无悔，那该多无趣啊。</br> - </br>《一代宗师》'}"
  );
  mingyan.push(
    "{'index':701,'content':'他不羁的脸，像天色将晚。她洗过的发，像心中火焰。短暂的狂欢，以为一生绵延。漫长的告别，是青春盛宴。 </br> - </br>《致青春》'}"
  );
  mingyan.push(
    "{'index':706,'content':'你在南方的艳阳里，大雪纷飞，我在北方的寒夜里，四季如春，如果天黑之前来得及，我要忘了你的眼睛，穷极一生，做不完一场梦。</br> - </br>马頔《南山南》'}"
  );
  mingyan.push(
    "{'index':1067,'content':'幸运的人会知道，幸运并不是富贵成功，抑或毫无痛苦地快乐着，而是无论喜怒哀乐，都被爱着。</br> - </br>熊德启'}"
  );
  mingyan.push(
    "{'index':525,'content':'亲爱的小孩，今天有没有哭？是否朋友都已经离去，留下了带不走的孤独？</br> - </br>苏芮《亲爱的小孩》'}"
  );
  mingyan.push(
    "{'index':162,'content':'毕竟只是太短的梦，彼此终于退回陌生，我加上你两个人并不等于我们。</br> - </br>王力宏《两个人并不等于我们》'}"
  );
  mingyan.push(
    "{'index':917,'content':'人生一世，有许多缘分，有些缘分是一辈子，有些却只是短短一程，即使仅仅同行一段、赏过同一处风景，亦是缘分。缘来珍惜，缘尽离去。是为随缘。</br> - </br>蒋晓云'}"
  );
  mingyan.push(
    "{'index':647,'content':'世界小得像一条街的布景，我们相遇了，你点点头，省略了所有的往事，省略了问候。 也许欢乐只是一个过程，一切都已经结束。</br> - </br>北岛'}"
  );
  mingyan.push(
    "{'index':1315,'content':'书这种东西，买了就等于读了。衣服这种东西，没拍照就等于没穿过。但拍过两次照就等于快没衣服穿了。 </br> - </br>狠狠红'}"
  );
  mingyan.push(
    "{'index':331,'content':'人间最大的不快乐无非源于两件事，一是受限，二是变迁。</br> - </br>「一个」读者 小武'}"
  );
  mingyan.push(
    "{'index':1264,'content':'你是烧烤摊的啤酒，秋凉里的露脐新装，能把头发染成大红色的药水，半夜冰箱里的浓巧克力蛋糕，读了一半通宵才能看完的推理小说。欲罢不能不宜身体健康，是风是雨不是倦鸟归处。 </br> - </br>刘音希'}"
  );
  mingyan.push(
    "{'index':297,'content':'如果额头终将刻上皱纹，你只能做到不让皱纹刻在你的心上。</br> - </br>《中国合伙人》'}"
  );
  mingyan.push(
    "{'index':998,'content':'时间也许不会给你答案，但一定会让你忘记曾经问过什么。</br> - </br>飞行官小北'}"
  );
  mingyan.push(
    "{'index':843,'content':'你因欲望在这个世界所受的苦，不要算到梦想头上。 </br> - </br>花大钱'}"
  );
  mingyan.push(
    "{'index':1360,'content':'你不要以为手中拿着枪就是勇敢，真正的勇敢是你知道什么是正义，并坚持不做不义的事。 </br> - </br>苏更生'}"
  );
  mingyan.push(
    "{'index':1378,'content':'我们太容易把生活视作线性的、前进的、向上的过程。但生活恰恰是螺旋的、有进有退、迂回曲折的。所以，尽情享受没有答案的人生，未尝不是一项优雅而高贵的事业。 </br> - </br>赫恩曼尼'}"
  );
  mingyan.push(
    "{'index':611,'content':'我跑上门，打开楼梯。说完睡衣，穿上祷告，关上床，钻进灯。所有这一切都是因为，道晚安时你给我的一吻。</br> - </br>《吻》'}"
  );
  mingyan.push(
    "{'index':837,'content':'让今天把明天变特殊，未必因为幸福，因为我们努力不服输，尽管失误。</br> - </br>《明天的记忆》'}"
  );
  mingyan.push(
    "{'index':228,'content':'如果每一个混蛋的内心都住着一个天使该有多好。</br> - </br>《菊次郎的夏天》'}"
  );
  mingyan.push(
    "{'index':454,'content':'一个人的心房要承载多少毁灭，才会遇到另一颗复活它的心。</br> - </br>bonpan'}"
  );
  mingyan.push(
    "{'index':690,'content':'每当觉得跟世界格格不入，你会不会躲进角落里？或者找个树洞倾诉？没关系，知道出来就好。</br> - </br>几米'}"
  );
  mingyan.push(
    "{'index':113,'content':'那时我们有梦,关于文学,关于爱情,关于穿越世界的旅行。如今我们深夜饮酒,杯子碰到一起,都是梦破碎的声音。</br> - </br>北岛'}"
  );
  mingyan.push(
    "{'index':640,'content':'每一个拥抱，都是疲倦时的一张床。</br> - </br>颜茹玉'}"
  );
  mingyan.push(
    "{'index':351,'content':'不要和总是不接电话的人交朋友。</br> - </br>丁丁张'}"
  );
  mingyan.push(
    "{'index':1218,'content':'终有一天会出现一个人，让你像流沙，像落雪，那些别人在上面划了又划的痕迹，他轻轻一抹，就平了。 </br> - </br>陈亚豪'}"
  );
  mingyan.push(
    "{'index':781,'content':'决定去做一件事情，或是去养成一种习惯，甚至是去爱一个人；开始这些事情最好的时机，一般都是——此时此刻。 </br> - </br>里则林'}"
  );
  mingyan.push(
    "{'index':1374,'content':'梦想的伏线如此之长，不以月计、不以年计，而动辄十年。更年轻时，梦想对于我们，是奢侈品；如今，梦想是一个朴素的事情，需要你同样朴素踏实地完成。</br> - </br>绿妖'}"
  );
  mingyan.push(
    "{'index':479,'content':'你有没有一个感觉，我们的十七岁，好像不过才是去年的事。</br> - </br>《我可能不会爱你》'}"
  );
  mingyan.push(
    "{'index':943,'content':'人们总说要怎么抓住时间，你知道吗？我觉得恰恰相反，是时间抓住了我们。</br> - </br>《少年时代》'}"
  );
  mingyan.push(
    "{'index':797,'content':'慢慢，也就明白文字语言无非求个明白。若找不到明白的人，你识的字便没有意义；若有一个明白的人在，你所说的什么也就有了意义。我想，生活的意义也许就是这样，就是要找到这样的一个人。 </br> - </br>《突然十年便过去》'}"
  );
  mingyan.push(
    "{'index':810,'content':'人生如此无意义，只能想尽一切办法，用爱把无聊的日子填满。</br> - </br>《有一个地方只有我们知道》'}"
  );
  mingyan.push(
    "{'index':588,'content':'我爱你是以悲剧形式肯定人生。 </br> - </br>《恋人絮语》'}"
  );
  mingyan.push(
    "{'index':1376,'content':'察觉你喜欢怎样的我，就送给你怎样的我。因为我想做你生命中的礼物。伪装不好吗？那是我可爱的包装纸啊。 </br> - </br>乌冬'}"
  );
  mingyan.push(
    "{'index':400,'content':'我们别无选择，只能从这个流感盛行的世界出发。</br> - </br>宫崎骏'}"
  );
  mingyan.push(
    "{'index':921,'content':'如果一艘船不知道该驶去哪个港口，那么任何方向吹来的风都不会是顺风。 </br> - </br>《塔木德》'}"
  );
  mingyan.push(
    "{'index':1195,'content':'“爱你”二字说出口时多是真心话，后来却无一例外沦为大冒险。</br> - </br>齐鸣宇'}"
  );
  mingyan.push(
    "{'index':655,'content':'一个人下定决心实现愿望，总是有办法的，可是大多数人终其一生都未尝过愿望成真的滋味。人们假装没有钱，没有时间，没有愿望，没有不顾一切的决心，直到真的一无所有。</br> - </br>《藏地情人》'}"
  );
  mingyan.push(
    "{'index':511,'content':'情到深处人孤独。</br> - </br>《是否》'}"
  );
  mingyan.push(
    "{'index':1153,'content':'对异地恋的人来说，失去联系就是人口失踪，就是世界末日，就是一切可以想到的最坏的事。</br> - </br>方慧'}"
  );
  mingyan.push(
    "{'index':556,'content':'但愿我可以没成长，完全凭直觉觅对象，模糊地迷恋你一场。</br> - </br>张国荣《有心人》'}"
  );
  mingyan.push(
    "{'index':770,'content':'我喜欢你，我不难过；我希望你也喜欢我，我才难过。 </br> - </br>八月长安'}"
  );
  mingyan.push(
    "{'index':685,'content':'只怕爱情的箴言听太多，用脑筋多于用情。经验是钥匙而不是枷锁。每一次恋爱都好像没受伤过，像孩子天真地享受花火，想做什么就做。</br> - </br>林夕'}"
  );
  mingyan.push(
    "{'index':186,'content':'我本不该在世界上生活，我第一次打开小方盒，鸟就飞了，飞向阴暗的火焰，我第一次打开。</br> - </br>顾城'}"
  );
  mingyan.push(
    "{'index':273,'content':'寂寞，多半是假寂寞。</br> - </br>木心'}"
  );
  mingyan.push(
    "{'index':1076,'content':'其实活着还真是件美好的事，不在于风景多美多壮观，而是在于遇见了谁，被温暖了一下，然后希望有一天自己也成为一个小太阳，去温暖别人。</br> - </br>三毛'}"
  );
  mingyan.push(
    "{'index':747,'content':'我知道这世上有人在等我，尽管我不知道他是谁。但是因为这样，我每天都非常快乐。</br> - </br>《返老还童》'}"
  );
  mingyan.push(
    "{'index':500,'content':'爱一个人最好的方式，是经营好自己，给对方一个优质的爱人。</br> - </br>苏岑'}"
  );
  mingyan.push(
    "{'index':743,'content':'现在的我，并不是真实的我，只要活在这个世上，每个人都在扮演着某个角色，我成为别人时，是最为自然的，请给这样的我，取一个新名字。 </br> - </br>《不求上进的玉子》'}"
  );
  mingyan.push(
    "{'index':679,'content':'任何事物的美都源于一个事实：它们终将消失。</br> - </br>《特丽丝苔莎》'}"
  );
  mingyan.push(
    "{'index':1054,'content':'我很像你，你也没有爱的能力，否则你怎么能把爱作为一种技艺来从事呢。可能我们这样的人都没有爱的能力。天真的人们能够爱，这是他们的秘密。</br> - </br>《悉达多》'}"
  );
  mingyan.push(
    "{'index':678,'content':'我这一生遇到过很多人，他们如同指间的烟火，忽明忽暗，最后只沦为一抹灰烬，而你不同，你如北斗，闪耀在我的整个人生。</br> - </br>扶南'}"
  );
  mingyan.push(
    "{'index':1304,'content':'当你的笑容给我礼貌的招呼，当我想诉说这些年来的感触，你却点了满桌我最爱的食物，介绍我看一本天文学的书。若无其事，原来是最狠的报复。</br> - </br>《想哭》'}"
  );
  mingyan.push(
    "{'index':670,'content':'我曾经像你像他像那野草野花，绝望着渴望着哭着笑着平凡着。</br> - </br>《平凡之路》'}"
  );
  mingyan.push(
    "{'index':108,'content':'懂越多就越像这世界的孤儿，走越远就越明白世界本是孤儿院。</br> - </br>韩寒'}"
  );
  mingyan.push(
    "{'index':441,'content':'以后还有很漫长很漫长的路途，都要一个人走完。都要靠自己。凭借自己的能力去完成，而不是依靠谁。</br> - </br>《千与千寻》'}"
  );
  mingyan.push(
    "{'index':346,'content':'时间是亳不留情的，它真使人在自己制造的镜子里照见自己的真相。</br> - </br>季羡林'}"
  );
  mingyan.push(
    "{'index':988,'content':'你是你自己的裁决者。你过去和现在做得有多好，由你自己说了算。别人永远不能审判你，就算是神。 </br> - </br>《与神对话》'}"
  );
  mingyan.push(
    "{'index':932,'content':'生活的最好状态是冷冷清清的风风火火。 </br> - </br>木心'}"
  );
  mingyan.push(
    "{'index':378,'content':'爱就是永远不必说对不起。</br> - </br>《爱情故事》'}"
  );
  mingyan.push(
    "{'index':1351,'content':'我倒宁愿你“怕”的事情越来越多，怕老怕丑怕出洋相，唯有这样自制，才能真正成长为体面的、顶天立地的人。 </br> - </br>陈大力'}"
  );
  mingyan.push(
    "{'index':626,'content':'情感的发生一定能找得出缘由吗？喜欢就是一个坏掉的水龙头，理智告诉你不值得，可怎么拧紧都是徒劳，感情覆水难收。</br> - </br>八月长安'}"
  );
  mingyan.push(
    "{'index':314,'content':'世上有两样东西不可直视，一是太阳，二是人心。</br> - </br>东野圭吾'}"
  );
  mingyan.push(
    "{'index':114,'content':'太平盛时，人易为乐。</br> - </br>《马伶传》'}"
  );
  mingyan.push(
    "{'index':424,'content':'别轻蔑少年时期感动过的东西。</br> - </br>黄永玉'}"
  );
  mingyan.push(
    "{'index':712,'content':'若不问来路与去程，人生就容易得多。</br> - </br>陶立夏'}"
  );
  mingyan.push(
    "{'index':954,'content':'我想保有爱的神与魂，使之存活在我的肉体中，熬过那副肉体蒙受屈辱的漫长岁月。</br> - </br>《自深深处》'}"
  );
  mingyan.push(
    "{'index':1236,'content':'或许思念和肌肉一样，长久不动就可以缓缓消失在身体里。</br> - </br>韩今谅'}"
  );
  mingyan.push(
    "{'index':897,'content':'我愿意把时间给你，你也愿意把时间给我，我们愿意一起玩，这是一切爱的原型。 </br> - </br>连岳'}"
  );
  mingyan.push(
    "{'index':407,'content':'每个人都会死，但不是每个人都真正活过。</br> - </br>《勇敢的心》'}"
  );
  mingyan.push(
    "{'index':789,'content':'那些与你毫无关系的人，就是毫无关系的，永远是毫无关系的。从认识的第一天开始，其实你就知道。就算是笑得甜甜蜜蜜，就算是有过无关痒痛的来往，就算你努力经营这段关系。而那些与你有关的，就是与你有关的，是逃也逃不掉的，就算你们只见过三次，就算你们三年彼此才搭理一次，就算是你简直想不起他或者她的样子，就算是你们隔着十万八千里。</br> - </br>《送你一颗子弹》'}"
  );
  mingyan.push(
    "{'index':1130,'content':'也许喜欢怀念你多于看见你，也许喜欢想象你多于得到你。</br> - </br>王菲《怀念》'}"
  );
  mingyan.push(
    "{'index':539,'content':'你的本性在阻碍你，是时候赶走她，释放你自己。</br> - </br>《黑天鹅》'}"
  );
  mingyan.push(
    "{'index':1366,'content':'人天生就懂得忠于自己，拒绝自己是一件痛苦的事情。如果你经常性地违背自己的意愿行事，也就是不得不抛弃本真而对自己虚伪，就只有一种情况，那就是你还未强大到能不依赖于任何人。 </br> - </br>蔡垒磊'}"
  );
  mingyan.push(
    "{'index':283,'content':'我同情所有不想上床睡觉的人，同情所有夜里要有亮光的人。</br> - </br>海明威'}"
  );
  mingyan.push(
    "{'index':1250,'content':'一无所知的人什么都不爱，一无所能的人什么都不懂。什么都不懂的人是毫无价值的。但是懂得很多的人，却能爱，有见识，有眼光……对一件事了解得越深，爱的程度也越深。如果有人以为，所有的水果都同草莓一起成熟，那他对葡萄就一无所知。</br> - </br>《爱的艺术》'}"
  );
  mingyan.push(
    "{'index':175,'content':'我来不及认真地年轻，待明白过来时，只能选择认真地老去。</br> - </br>三毛'}"
  );
  mingyan.push(
    "{'index':181,'content':'不管你拥有了多么惊人的武器，也不管你操纵着多少可怜的机器人，只要离开土地就无法生存。</br> - </br>《天空之城》'}"
  );
  mingyan.push(
    "{'index':603,'content':'人生总有这么一个阶段，一个做什么也快乐的阶段，一个说什么也真诚的阶段。笑他们，皆因我们曾经荒唐过，爱他们，皆因我们曾经甜蜜过。</br> - </br>《六楼后座》'}"
  );
  mingyan.push(
    "{'index':405,'content':'世界上有那么多的城镇，城镇中有那么多的酒馆，她却偏偏走进了我的。</br> - </br>《卡萨布兰卡》'}"
  );
  mingyan.push(
    "{'index':1271,'content':'我们似乎总会在某一年，爆发性地长大，爆发性地觉悟，爆发性地知道某个真相，让原本没有什么意义的时间的刻度，成了一道分界线。 </br> - </br>《老灵魂》'}"
  );
  mingyan.push(
    "{'index':704,'content':'回来，本身就是充满悲情色彩的一个词，因为无论最终他有没有回来，都说明他曾经离开过你。</br> - </br>马思纯'}"
  );
  mingyan.push(
    "{'index':78,'content':'我不知道庆典之后的日子该怎么过。 </br> - </br>村上龙'}"
  );
  mingyan.push(
    "{'index':974,'content':'醉过才知酒浓，爱过才知情重。你不能做我的诗，正如我不能做你的梦。 </br> - </br>胡适《梦与诗》'}"
  );
  mingyan.push(
    "{'index':1156,'content':'“一瞬，一剎，一弹指，一须臾”不是形容时间的。是形容快乐的。 </br> - </br>郭大侠'}"
  );
  mingyan.push(
    "{'index':442,'content':'永远不要认为我们可以逃避，我们的每一步都决定着最后的结局，我们的脚正在走向我们自己选定的终点。</br> - </br>米兰·昆德拉'}"
  );
  mingyan.push(
    "{'index':128,'content':'暴躁是人类卑劣天性之一，发脾气就等于在人类进步的阶梯上倒退一步。</br> - </br>达尔文【往期精选】'}"
  );
  mingyan.push(
    "{'index':23,'content':'不主动的人是好人的概率大于坏人。</br> - </br>何禾'}"
  );
  mingyan.push(
    "{'index':730,'content':'人们说当你遇上你的挚爱时，时间会暂停，那是真的。但人们没有告诉你，当时针再度恢复转动，它会无比飞快，让人无法赶上。《大鱼》'}"
  );
  mingyan.push(
    "{'index':902,'content':'完美和不完美都是我，对自己，我总是说Yes。</br> - </br>凯特·布兰切特'}"
  );
  mingyan.push(
    "{'index':75,'content':'任何一个地方都不比另一个地方拥有更多的天空。</br> - </br>辛波斯卡'}"
  );
  mingyan.push(
    "{'index':639,'content':'为什么要挣扎？倘若那正是我要到的去处，用不着使力挣扎的。我一定放弃任何抵抗愿望。一直向下沉。不管它是带咸味的海水，还是带苦味的人生，我要沉到底为止。这才像是生活，是生命。</br> - </br>沈从文'}"
  );
  mingyan.push(
    "{'index':857,'content':'一年三百六十五天分了四季，五谷是花生红枣眼泪和小米，想一想邻居女儿听听收音机，看一看我的理想还埋在土里。</br> - </br>张楚《蚂蚁蚂蚁》'}"
  );
  mingyan.push(
    "{'index':989,'content':'小时候大人说，做噩梦了掐一下自己，如果不痛就说明在做梦，那都是假的，也就不用害怕。后来她在噩梦里过了一辈子，正因为不痛，便不容易醒来。</br> - </br>嚜子'}"
  );
  mingyan.push(
    "{'index':173,'content':'醒在梦境上，梦在清晨上，晨在川流上，流在船岛下。</br> - </br>苏打绿《日光》'}"
  );
  mingyan.push(
    "{'index':1200,'content':'世界上最美妙的莫过于此，在不谙世事的年纪，对生活的全部期待就是绚烂的理想本身。</br> - </br>赫恩曼尼'}"
  );
  mingyan.push(
    "{'index':322,'content':'你相信么，在这样一个世界里，用脑子想过的事情，你总是以为你已经做过了。</br> - </br>《1988：我想和这个世界谈谈》'}"
  );
  mingyan.push(
    "{'index':546,'content':'初恋就是和自己谈恋爱，之后的每次恋爱都是被伤害。</br> - </br>姬霄'}"
  );
  mingyan.push("{'index':38,'content':'今日无事。 </br> - </br>路易十六'}");
  mingyan.push(
    "{'index':780,'content':'我只愿蓬勃生活在此时此刻，无所谓去哪，无所谓见谁，那些我将要去的地方，都是我从未谋面的故乡；那些我将要见的人，都会成为我的朋友。我不能选择怎么生，怎么死，但我能决定怎么爱，怎么活。</br> - </br>《黄金时代》'}"
  );
  mingyan.push(
    "{'index':757,'content':'成长就是将你哭声调成静音的过程。</br> - </br>读解人生'}"
  );
  mingyan.push(
    "{'index':344,'content':'童年就是让你能够忍受暮年的那股力量。</br> - </br>阿多尼斯'}"
  );
  mingyan.push(
    "{'index':117,'content':'没有不可治愈的伤痛，没有不能结束的沉沦，所有失去的，会以另一种方式归来。</br> - </br>约翰•肖尔斯'}"
  );
  mingyan.push(
    "{'index':1193,'content':'作为一名真正的强者，有的时候你要允许那些比你弱的人吹牛，有的时候对别人宽容一点，幸运就会从天而降。</br> - </br>恶棍天使·莫非里'}"
  );
  mingyan.push(
    "{'index':167,'content':'你锋芒太露，这是你的弱点，你像把无鞘刀，锋利，但好刀应在刀鞘里。</br> - </br>黑泽明《穿心剑》'}"
  );
  mingyan.push(
    "{'index':652,'content':'罐头是在1810年发明出来的，可是开罐器却在1858年才被发明出来，很奇怪吧。可有时候就是这样的，重要的东西有时也会迟来一步，无论是爱情还是生活。</br> - </br>《Saikou no Rikon》'}"
  );
  mingyan.push(
    "{'index':456,'content':'每个人做任何事，都只是为了自己，虽然有人会说，我希望能为哪个人做些什么，但事实上，也只不过是希望看到别人幸福时，自己也有份幸福感罢了。</br> - </br>《东京巴比伦》'}"
  );
  mingyan.push(
    "{'index':80,'content':'我们最深的恐惧，就好像是龙，护卫着我们内心最深处的珍宝。</br> - </br>里尔克'}"
  );
  mingyan.push(
    "{'index':241,'content':'做一个世界的水手，游遍每一个港口。</br> - </br>沃尔特•惠特曼'}"
  );
  mingyan.push(
    "{'index':659,'content':'人需要有真爱，真爱得是真的爱，爱她感受她，从自己的小世界里跳出来，一起创造一个大的世界。而这个大世界可以给你很多启发，让你进步，让你得到不傻不二的幸福。</br> - </br>那可'}"
  );
  mingyan.push(
    "{'index':100,'content':'好吃好睡，新年快乐。</br> - </br>「一个」工作室'}"
  );
  mingyan.push(
    "{'index':325,'content':'有一天你会遇到一个彩虹般绚丽的人，从此以后，其他人就不过是匆匆浮云。</br> - </br>《怦然心动》'}"
  );
  mingyan.push(
    "{'index':1033,'content':'和朋友最舒服的相处模式不是无话不说，而是可以不说话。 </br> - </br>姬霄'}"
  );
  mingyan.push(
    "{'index':600,'content':'那一年我二十一岁，在我一生的黄金时代，我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。</br> - </br>王小波'}"
  );
  mingyan.push(
    "{'index':105,'content':'生活总像是个把我们击倒的敌人。但也许它更可以成为让我们倾倒的情人。</br> - </br>金丹华  今日「一个」工作室专辑'}"
  );
  mingyan.push(
    "{'index':1284,'content':'不应该一味地追求安稳，能够扼杀两人关系的恰恰是缺少任何挑战，是那种了无新意的感觉。我们需要时刻让对方在我们身上看到惊喜，找到新鲜的感觉。 </br> - </br>《背叛》'}"
  );
  mingyan.push(
    "{'index':1370,'content':'人生的困扰大抵来自四个方面：不可避免的死亡，内心深处的孤独感，我们追求的自由以及生活并无显而易见的意义可言。 </br> - </br>欧文·亚隆'}"
  );
  mingyan.push(
    "{'index':445,'content':'「一个」官网（wufazhuce.com）今日上线。「一个」论坛（wufazhuce.org）开放注册中。（测试版）'}"
  );
  mingyan.push(
    "{'index':856,'content':'要想面对一个新的开始，一个人必须有梦想、有希望、有对未来的憧憬。如果没有这些，就不叫新的开始，而叫逃亡。</br> - </br>玛丽亚·杜埃尼亚斯《时间的针脚》'}"
  );
  mingyan.push(
    "{'index':1320,'content':'鸡汤常讲人要学会失去，遗憾才是完整，伤害是成长最宝贵的一课……那是因为我们别无选择。已经发生的一切，如果不给它一个温暖的意义，你又能怎样？强装欢笑的大人不必嘲讽痛哭的小孩不懂事，当我们一起对流星许愿时，都只祈祷健康快乐应有尽有。我祝愿你学会接受，也祝愿这项技能，永远没有用武之地。 </br> - </br>八月长安'}"
  );
  mingyan.push(
    "{'index':324,'content':'我不想谋生，我想生活。</br> - </br>奥斯卡·王尔德'}"
  );
  mingyan.push(
    "{'index':35,'content':'孤独是关上灯，与发光的灵魂为伴。</br> - </br>贺伊曼'}"
  );
  mingyan.push(
    "{'index':48,'content':'疼痛是这个世界对你的挽留。</br> - </br>何禾'}"
  );
  mingyan.push(
    "{'index':538,'content':'当一个人爱着你，他说你名字的方式都跟别人不一样。你知道你的名字放在他嘴里是最安全的。</br> - </br>比利'}"
  );
  mingyan.push(
    "{'index':388,'content':'在幻变的生命里，岁月，原是最大的小偷。</br> - </br>《岁月神偷》'}"
  );
  mingyan.push(
    "{'index':179,'content':'孤独是我们自找的，因为我们太珍惜自我。</br> - </br>宗萨蒋扬钦哲'}"
  );
  mingyan.push(
    "{'index':803,'content':'我们有时候，感觉眼前的山谷好深，迎面刮来的风好强，我们忽然有了鹰的觉悟，于是，对爱展开羽翅，纵身跃去，放手一搏。</br> - </br>蔡康永'}"
  );
  mingyan.push(
    "{'index':1298,'content':'一辈子，有多少真心话，是以玩笑的方式说了出去？ </br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':134,'content':'一个人假装开心，但声音就装不了。细心一听就知道了。</br> - </br>《春光乍泄》'}"
  );
  mingyan.push(
    "{'index':472,'content':'当你在深夜醒来，发现自己因为想念某人而胸口发疼，你，把它叫做什么？</br> - </br>《冷山》'}"
  );
  mingyan.push(
    "{'index':1063,'content':'眼睛为她下着雨，心却为她打着伞，这就是爱情。 </br> - </br>泰戈尔'}"
  );
  mingyan.push(
    "{'index':617,'content':'做你自己，因为别人都有人做了。</br> - </br>奥斯卡·王尔德'}"
  );
  mingyan.push(
    "{'index':1192,'content':'旧的坏日子已经过去，新的坏日子还在赶来的路上，而所谓的幸福就是这两种日子中间的那段时光吧。 </br> - </br>夏正正'}"
  );
  mingyan.push(
    "{'index':832,'content':'没有什么比时间更具有说服力了，因为时间无需通知我们就可以改变一切。</br> - </br>余华《活着》'}"
  );
  mingyan.push(
    "{'index':759,'content':'相聚离开都有时候，没有什么会永垂不朽。</br> - </br>林夕'}"
  );
  mingyan.push(
    "{'index':1268,'content':'总有那么一些时年。怀揣着急切被他人检阅的悲伤和激情，对路途有过分单纯的幻想和过分执拗的回忆。</br> - </br>七堇年'}"
  );
  mingyan.push(
    "{'index':835,'content':'有些人注定是你生命里的癌症，而有些人只是一个喷嚏而已。这一切，据说都是“因了冥冥中的缘分”。</br> - </br>刘瑜'}"
  );
  mingyan.push(
    "{'index':1211,'content':'18岁爱的那个人，爱我爱得那样少的一个人。我不同意，我不甘心，我问了自己一百次“怎么回事”，但我至今仍然觉得这个可恨的人，有一点点迷人。</br> - </br>乌冬'}"
  );
  mingyan.push(
    "{'index':1087,'content':'这世界是如此喧哗，让沉默的人显得有点傻。 </br> - </br>李宗盛'}"
  );
  mingyan.push(
    "{'index':67,'content':'在我眼里没有好人坏人，只有暂时被情绪左右的未觉醒的圣人。</br> - </br>陈坤'}"
  );
  mingyan.push(
    "{'index':220,'content':'回首往事，不过是虚惊一场。</br> - </br>李樯'}"
  );
  mingyan.push(
    "{'index':255,'content':'我们都生活在阴沟里，但仍有人仰望星空。</br> - </br>王尔德'}"
  );
  mingyan.push(
    "{'index':1172,'content':'遇见是一场阴差阳错的好运气，恰好路口遇到你。能陪伴在身边，就没辜负你在遇见之前的那一路奔袭。 </br> - </br>卢思浩'}"
  );
  mingyan.push(
    "{'index':286,'content':'留下来，或者我跟你走。</br> - </br>《海角七号》'}"
  );
  mingyan.push(
    "{'index':259,'content':'每一段无法继续的爱情，都有负责保存它的人，才能让另一个人安心往前。</br> - </br>九把刀'}"
  );
  mingyan.push(
    "{'index':1223,'content':'人要么就是好看，要么就是丑陋，中间不美不丑的，只能说可爱。 </br> - </br>《年轻气盛》'}"
  );
  mingyan.push(
    "{'index':529,'content':'被爱的人也许不知道，他的一句晚安可媲美满天星光。</br> - </br>十三空'}"
  );
  mingyan.push(
    "{'index':49,'content':'志望幼海，东望榑木。无草木，多风。是山也，广员百里。</br> - </br>《山海经》'}"
  );
  mingyan.push(
    "{'index':32,'content':'万圣谢幕，百鬼犹存。</br> - </br>贺伊曼'}"
  );
  mingyan.push(
    "{'index':1151,'content':'真正能证明你是谁的，只有正在做的事和正爱着的人。往事只是往事，不再刻有你的名字。</br> - </br>姬霄'}"
  );
  mingyan.push(
    "{'index':408,'content':'在那些夜晚，照亮我们黑暗的心，究竟是什么。</br> - </br>万能青年旅店《秦皇岛》'}"
  );
  mingyan.push(
    "{'index':878,'content':'正如故乡是用来怀念的，青春是用来追忆的，当你怀揣着它时，它一文不值，只有将它耗尽后再回过头看，一切才有意义，爱过我们的人和伤害过我们的人，都是我们青春存在的意义。</br> - </br>《致我们终将逝去的青春》'}"
  );
  mingyan.push(
    "{'index':804,'content':'我生命里最大的突破之一，就是我不再为别人对我的看法而担忧。此后，我真的能自由地去做我认为对自己最好的事。只有在我们不需要外来的赞许时，才会变得自由。</br> - </br>罗伊·马丁纳'}"
  );
  mingyan.push(
    "{'index':1244,'content':'价值混乱，钱就会变成尺度。 </br> - </br>陈丹青'}"
  );
  mingyan.push(
    "{'index':212,'content':'爱情就像一条河，谁不是摸着石头过河呢。</br> - </br>《致我们终将逝去的青春》'}"
  );
  mingyan.push(
    "{'index':952,'content':'命运像深广河流，就算曲折也会最终去往它该去的地方。不要为做错的决定懊悔，我们没有如果。</br> - </br>陶立夏'}"
  );
  mingyan.push(
    "{'index':206,'content':'了解一个人并不代表什么，今天他喜欢凤梨，明天他可以喜欢别的。</br> - </br>《重庆森林》'}"
  );
  mingyan.push(
    "{'index':751,'content':'兴高采烈地迎接每一场空欢喜，是我最少年的事。</br> - </br>哈德门烟头'}"
  );
  mingyan.push(
    "{'index':729,'content':'等你到了一定的年龄，彼此的过去已经不再重要，那些曾经令你无比在乎的东西就好像半途而退的潮汐一般似乎没有了提及的必要。这个世上没有命运这回事，同时也没有意外。</br> - </br>西蒙·范·布伊'}"
  );
  mingyan.push(
    "{'index':930,'content':'痛苦这东西，天生应该用来藏在心底，悲伤天生是要被努力节制的，受到的伤害和欺骗总得去原谅，满不在乎的人不是无情的人。最安静与最孤独的成长，也是能使人踏实、自信、强大、善良的，大不了，吐吐舌头而已。</br> - </br>李娟《我的阿勒泰》'}"
  );
  mingyan.push(
    "{'index':1047,'content':'当所有等待都变成曾经，我会说好多精彩的故事给你听。</br> - </br>《远行》'}"
  );
  mingyan.push(
    "{'index':1187,'content':'诀别诗烈酒入喉，生死与共情意重，再聚首。</br> - </br>陈坤'}"
  );
  mingyan.push(
    "{'index':1126,'content':'我觉得我爱了你了，从此以后，不管什么时候我都不能对你无动于衷。</br> - </br>王小波'}"
  );
  mingyan.push(
    "{'index':521,'content':'恋爱有时真的很随机，早点晚点多爱点少爱点勇敢点怂点，一念之差就是另一个不同的人生。</br> - </br>赵小姐失眠中'}"
  );
  mingyan.push(
    "{'index':196,'content':'二十丽姝，请来吻我，衰草枯杨，青春易过。</br> - </br>莎士比亚'}"
  );
  mingyan.push(
    "{'index':564,'content':'人不只有一种颜色，有很多种颜色，真正的颜色，自己的颜色，谁也不知道。多姿多彩就行，请多姿多彩地活下去吧。</br> - </br>《意外的幸运签》'}"
  );
  mingyan.push(
    "{'index':507,'content':'陆上的人喜欢寻根究底，虚度很多的光阴。冬天忧虑夏天的迟来，夏天担心冬天的将至。所以你们不停到处去追求一个遥不可及、四季如夏的地方——我并不羡慕。</br> - </br>《海上钢琴师》'}"
  );
  mingyan.push(
    "{'index':720,'content':'有些感情纠缠久了，到后来你已经分不清楚，到底你是要爱，还是要赢。</br> - </br>独木舟葛婉仪'}"
  );
  mingyan.push(
    "{'index':814,'content':'给喜欢的人发每一条消息都是冒险，赌注是接下来一整天的心情好坏。</br> - </br>方慧'}"
  );
  mingyan.push(
    "{'index':1129,'content':'别嫉妒成功，别怜悯失败，因为你不知道在灵魂的权衡中，什么算成功，什么算失败。 </br> - </br>《与神对话》'}"
  );
  mingyan.push(
    "{'index':819,'content':'时间并不能淡化一切。事实上，一个曾经占据过你生活的人不是别的，他是你的蓝天，你的阳光，你的空气。一旦失去，没有什么可以取代，可以弥补。他将覆盖你的生命，直到永远。</br> - </br>《半生为人》'}"
  );
  mingyan.push(
    "{'index':594,'content':'即使没有人为你鼓掌，也要优雅地谢幕，并感谢自己的认真付出。</br> - </br>权志龙'}"
  );
  mingyan.push(
    "{'index':1364,'content':'极不切实际的梦想即使没有实际权力做后盾，一样可以让人产生最大无畏的胆气。这是因为，怀有大希望者的力量可以有最荒谬的来源：一个口号、一句话或一枚徽章。 </br> - </br>《狂热分子》'}"
  );
  mingyan.push(
    "{'index':641,'content':'我们每个人来到世界上，都是独自旅行，即使有人相伴，终究各奔东西。</br> - </br>《练习曲》'}"
  );
  mingyan.push(
    "{'index':1052,'content':'你最可爱，我说时来不及思索，但思索之后，还是这样说。 </br> - </br>普希金'}"
  );
  mingyan.push(
    "{'index':1157,'content':'你不用重现生命中的每一秒，每次欲求的细节，每个委曲求全的过程，那么多看电视、等公车、挖鼻屎的时间。那些不过是用来填补空白的。只有少数瞬间才有价值，才能构建和定义人生。 </br> - </br>杰夫•戴尔'}"
  );
  mingyan.push(
    "{'index':1270,'content':'爱情，其实是一种姿态，就像一个人的时间，你可以用感觉把它拉长，也可以把它缩短。 </br> - </br>蒋一谈'}"
  );
  mingyan.push(
    "{'index':94,'content':'只要想起一生中后悔的事，梅花就落满了南山。</br> - </br>张枣'}"
  );
  mingyan.push(
    "{'index':1348,'content':'大概是小学写作文的时候，把“最开心的一天”和“最难过的一天”份额都用光了，后来的人生才会显得如此平淡而无趣吧。 </br> - </br>花大钱'}"
  );
  mingyan.push(
    "{'index':703,'content':'你从来不讲真心话，叫我如何大冒险。</br> - </br>袁远'}"
  );
  mingyan.push("{'index':192,'content':'今日送别赵长天先生（1947-2013）。'}");
  mingyan.push(
    "{'index':1040,'content':'有时想想，独居斗室和天涯浪迹好像是一件事情，身处寂寞和身处喧嚣其实也没什么两样，身外的整个世界都是镜子，我们必须自己认得自己。 </br> - </br>马良《人间卧底》'}"
  );
  mingyan.push(
    "{'index':1101,'content':'我们暂时拥有，随后失去。从每一段失去中，我越来越懂得人生究竟是怎么一回事。 </br> - </br>荞麦《当一切在我们周围暗下来》'}"
  );
  mingyan.push(
    "{'index':951,'content':'这么多年我一个人一直在走，走过了人性的背后和白云苍狗。总以为答案会出现在下一个车站，随后的事情我不说你也能明白。</br> - </br>李志'}"
  );
  mingyan.push(
    "{'index':890,'content':'感谢我不可以拥抱你的背影，所以才能变成你的背影。躲在安静角落，如果你回头看，不用在意。</br> - </br>《背影》'}"
  );
  mingyan.push(
    "{'index':288,'content':'为了记住你的笑容，我拼命按下心中的快门。</br> - </br>《美丽人生》'}"
  );
  mingyan.push(
    "{'index':483,'content':'你相信孤独，也相信隐退；你浪漫得起，因为你自给自足。</br> - </br>《一轮月亮与六颗星星》'}"
  );
  mingyan.push(
    "{'index':491,'content':'当你无精打采的时候，人们总是会说到兴头上。 </br> - </br>《麦田里的守望者》'}"
  );
  mingyan.push(
    "{'index':614,'content':'遇到好事坏事我都当作是注定，注定遇到这些课程让我来学习。如果逃避不久之后又得再来一次，唯有看透面对做人会遇到的问题。</br> - </br>范晓萱《你》'}"
  );
  mingyan.push(
    "{'index':981,'content':'再好的朋友也应该保持一点距离，因为人最应该学会相处的那个人不是别人，而是自己。 </br> - </br>王乌乌'}"
  );
  mingyan.push(
    "{'index':171,'content':'我去过很多地方，但我只遇到过很少的我们。</br> - </br>卡森·麦卡勒斯'}"
  );
  mingyan.push(
    "{'index':20,'content':'活出你的文艺。今日送上编辑部作品特辑。</br> - </br>《一个》全体'}"
  );
  mingyan.push(
    "{'index':1171,'content':'你要来了，我对谁都微笑，对讨厌的人也有礼貌。恨不得把每一个等待你的黄昏都蘸了糖吃掉。 </br> - </br>宋小君'}"
  );
  mingyan.push(
    "{'index':864,'content':'让以前的事都过去吧，和以前的世界一刀两断，再不想听到它的任何情况，任何消息，到一个新的世界，新的地方去，从此不再回头！</br> - </br>陀思妥耶夫斯基'}"
  );
  mingyan.push(
    "{'index':1331,'content':'少年的情感由不得人来控制，自由得像湖面的风，此刻忽然想见了，如果见不到，便沮丧起来。沮丧之中，才隐约懂得些人生的道理。 </br> - </br>熊德启'}"
  );
  mingyan.push(
    "{'index':1338,'content':'多年前飞走的那只鸽子，你在每个下雨的黄昏还是会习惯性担惊受怕片刻，毕竟所有怀念都源于世事更迭的不再拥有。不知需要多久你才能明白，对往日虔诚默哀，远比缅怀有力。 </br> - </br>张瑞琪'}"
  );
  mingyan.push(
    "{'index':127,'content':'珍惜黄昏的村庄，珍惜雨水的村庄，万里无云如同我永恒的悲伤。</br> - </br>海子《村庄》'}"
  );
  mingyan.push(
    "{'index':543,'content':'如果有一天，我们之间的记忆被删除掉，你还会不会像从前一样爱我，就像我们之间没有彼此伤害过一样？</br> - </br>《美丽心灵的永恒阳光》'}"
  );
  mingyan.push(
    "{'index':376,'content':'把心事留在那堆喝空的酒瓶子里，然后，生活将继续，将异乡当作故乡，将流放当作远航。</br> - </br>老六'}"
  );
  mingyan.push(
    "{'index':846,'content':'别太依赖任何一个人，等哪天他不找你不陪你不哄你了，你会很难受的。</br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':1303,'content':'反正人生不是在此处失败，就是在彼处失败。失败者才不管别的有多重要。任性一回，不然一辈子都憋屈。 </br> - </br>毛利'}"
  );
  mingyan.push(
    "{'index':1049,'content':'自以为了解对方的阶段是一段感情关系中最美好的时光。</br> - </br>蔡蕾'}"
  );
  mingyan.push(
    "{'index':240,'content':'每个只记住仇恨的人，过得都不快乐。</br> - </br>张晶'}"
  );
  mingyan.push(
    "{'index':458,'content':'你的青春就像摆在货架上的罐头，添加再多的防腐剂，也难逃下架的命运。超市老板根本不给你反应的时间，一夜之间，你依旧穿着二十岁的衣服，留着二十岁的刘海，还是像二十岁那年一无所有，但是你再也说不出“我到了一百岁还可爱”这句话。</br> - </br>《女王乔安》'}"
  );
  mingyan.push(
    "{'index':420,'content':'故事的主人走了，不过，故事还在。</br> - </br>yuqingtk'}"
  );
  mingyan.push(
    "{'index':1261,'content':'差一年一个月一天一个时辰都不算一辈子。</br> - </br>《霸王别姬》'}"
  );
  mingyan.push(
    "{'index':310,'content':'把我们带到过去的是回忆，将我们带向未来的是梦想。</br> - </br>《时间机器》'}"
  );
  mingyan.push(
    "{'index':628,'content':'如果你留在这里，这里就变成你的现在，不久以后，你就会开始想象另一个时代才是黄金时代，这才是现实，不尽如人意，因为生活本来就是不尽如人意的。</br> - </br>《午夜巴黎》'}"
  );
  mingyan.push(
    "{'index':1006,'content':'我如此依赖城市，依赖一切陌生的事物。我不停地去适应一场又一场变故，随波逐流，顺从一切，接受一切。但是我心里有秘密。</br> - </br>李娟'}"
  );
  mingyan.push(
    "{'index':881,'content':'你的晚安是一根灯绳，轻轻一拉，“咔嗒”一声，就熄灭了整个城市的灯，然后夜晚才真的到来。</br> - </br>玍几'}"
  );
  mingyan.push(
    "{'index':550,'content':'和所有以梦为马的诗人一样，我借此火得度一生的茫茫黑夜。</br> - </br>海子《以梦为马》'}"
  );
  mingyan.push(
    "{'index':813,'content':'过一个平凡无趣的人生实在太容易了，你可以不读书，不冒险，不运动，不写作，不外出，不折腾……但是，人生最后悔的事情就是：我本可以。</br> - </br>陈素封'}"
  );
  mingyan.push(
    "{'index':268,'content':'如果世界上曾经有那个人出现过，其他人都会变成将就。</br> - </br>顾漫'}"
  );
  mingyan.push(
    "{'index':481,'content':'关于郑州我想的全是你，想来想去都是忏悔和委屈。</br> - </br>《关于郑州的记忆》'}"
  );
  mingyan.push(
    "{'index':1259,'content':'时间是让人猝不及防的东西，晴时有风阴有时雨，争不过朝夕，又念着往昔。偷走了青丝却留住一个你。</br> - </br>《岁月神偷》'}"
  );
  mingyan.push(
    "{'index':383,'content':'所谓的世间，不就是你吗？</br> - </br>太宰治《人间失格》'}"
  );
  mingyan.push(
    "{'index':627,'content':'我在千寻之下等你。水来我在水中等你，火来我在灰烬中等你。</br> - </br>洛夫'}"
  );
  mingyan.push(
    "{'index':544,'content':'人经常会感受到内心的召唤，如果不去回应它，人就始终不能平静下来，如果去回应它，就意味着必须放弃很多心爱的人和物。</br> - </br>《碧海蓝天》'}"
  );
  mingyan.push(
    "{'index':1209,'content':'你可以去做一切事情，但前提是不会为结果伤悲。一个人的强大，并非看他能做什么，而是看他能承担什么。</br> - </br>石田衣良'}"
  );
  mingyan.push(
    "{'index':197,'content':'时间才不管谁跑得多快多慢呢。</br> - </br>刘亮程'}"
  );
  mingyan.push(
    "{'index':817,'content':'别为不属于你的观众，演不擅长的人生。</br> - </br>姬霄'}"
  );
  mingyan.push(
    "{'index':172,'content':'伤感就要在满的时候倒掉。</br> - </br>刀刀'}"
  );
  mingyan.push(
    "{'index':938,'content':'每个人都想把手伸向夜空，去捕捉那属于自己的星星。但却极少有人能正确地知道自己的星星在哪一个位置。 </br> - </br>田中芳树'}"
  );
  mingyan.push(
    "{'index':459,'content':'真爱的第一个征兆，在男孩身上是胆怯，在女孩身上是大胆。</br> - </br>《悲惨世界》'}"
  );
  mingyan.push(
    "{'index':229,'content':'如果我多一张船票，你会不会跟我一起走？</br> - </br>《花样年华》'}"
  );
  mingyan.push(
    "{'index':1024,'content':'当我对所有事情都厌倦的时候，我就会想到你，想到你在世界某个地方生活着、存在着，我就愿意去承受一切。你的存在对我很重要。 </br> - </br>《美国往事》'}"
  );
  mingyan.push(
    "{'index':728,'content':'心里有个人放在那里，是件收藏，如此才填充了生命的空白，太阳尚远，但必有太阳。</br> - </br>七堇年《蓝颜》'}"
  );
  mingyan.push(
    "{'index':1045,'content':'我们每个人好像一直都在跑，却总觉得自己把心和最后一点安全感落在了千里之遥的家乡。</br> - </br>暖小团'}"
  );
  mingyan.push(
    "{'index':677,'content':'说什么王权富贵，怕什么戒律清规，只愿天长地久，与我意中人儿紧相随。 </br> - </br>《女儿情》'}"
  );
  mingyan.push(
    "{'index':393,'content':'有天变成了被对抗的大人，也别忘记今晚。</br> - </br>1976乐团《撒野俱乐部》'}"
  );
  mingyan.push(
    "{'index':453,'content':'生命有如渡过一重大海，我们相遇在这同一狭船里。死时，我们同登彼岸，又向不同的世界各奔前程。 </br> - </br>泰戈尔'}"
  );
  mingyan.push(
    "{'index':1140,'content':'梦想破碎是没有声音的，它只是缓慢又沉默地离开了。 </br> - </br>苏更生'}"
  );
  mingyan.push(
    "{'index':1134,'content':'总有一些人，他们伤害过你，把你推入万劫不复，可真正面对面，是依旧恨不起来的。他们是命里的劫，也是恩赐。 </br> - </br>自由极光'}"
  );
  mingyan.push(
    "{'index':821,'content':'偶尔我们就像黄昏和黎明，在某些时刻是如此相似，但中间却隔了一整个黑夜。 </br> - </br>里则林'}"
  );
  mingyan.push(
    "{'index':604,'content':'此生，是为了发现自己而来。此生，是为了与自己相见而来。 </br> - </br>河井宽次郎'}"
  );
  mingyan.push(
    "{'index':267,'content':'如果我用他的原子笔，一直写他的名字，把水写干了，他就会爱上我。</br> - </br>《蓝色大门》'}"
  );
  mingyan.push(
    "{'index':141,'content':'心也甘情也愿，才叫不浪费生命。</br> - </br>小饭'}"
  );
  mingyan.push(
    "{'index':1082,'content':'当我忘了你的时候，我就忘了我自己。 </br> - </br>《呼啸山庄》'}"
  );
  mingyan.push(
    "{'index':348,'content':'生而为人，我很抱歉。</br> - </br>《被嫌弃的松子的一生》'}"
  );
  mingyan.push(
    "{'index':750,'content':'人总是在接近幸福时倍感幸福，在幸福进行时却患得患失。</br> - </br>张爱玲'}"
  );
  mingyan.push(
    "{'index':391,'content':'我们要不就让自己悲伤，要不就让自己强大，其所需要的工作量是一样的。</br> - </br>卡洛斯·卡斯塔尼达'}"
  );
  mingyan.push(
    "{'index':1306,'content':'生命中任何一天的结束，便永不重来。 </br> - </br>《诱僧》'}"
  );
  mingyan.push(
    "{'index':102,'content':'记忆往往是靠苦难建立起来的。</br> - </br>黄崇凯'}"
  );
  mingyan.push(
    "{'index':131,'content':'以外表选朋友，以智慧选敌人。你太聪明，不能当朋友。</br> - </br>《天堂电影院》'}"
  );
  mingyan.push(
    "{'index':1105,'content':'我最爱你的一刹那给你打电话你没接，等你看到来电提醒再打回来的时候很可能我就不爱你了。 </br> - </br>暖小团'}"
  );
  mingyan.push(
    "{'index':1345,'content':'初恋就是一点点笨拙外加许许多多好奇。 </br> - </br>萧伯纳'}"
  );
  mingyan.push(
    "{'index':1285,'content':'所以，要好好努力然后多挣钱，才养得起自己这个爱吃的胃，爱玩儿的心，爱逛爱买的习惯。一个人往，一个人来，也能生活得很好。 </br> - </br>德卡先生'}"
  );
  mingyan.push(
    "{'index':688,'content':'在这个城市里，我坚持的相信一定会有那么一个人，想着同样的事情，怀着相似的频率，在某站寂寞的出口，安排好了与我相遇。</br> - </br>《写给城市的诗》'}"
  );
  mingyan.push(
    "{'index':40,'content':'我们记得应该勇敢，但承受不了这个不善良不友好不负责的世界加诸勇敢者的额外损失。</br> - </br>夜X'}"
  );
  mingyan.push(
    "{'index':912,'content':'我曾做过一个小梦，怪他一声不响地忽然走了。他现在故意慢慢走，让我一程一程送，尽量多聚聚，把一个小梦拉成一个万里长梦。这我愿意。送一程，说一声再见，又能见到一面。离别拉得长，是增加痛苦还是减少痛苦呢？我算不清。但是我陪他走的愈远，愈怕从此不见。</br> - </br>杨绛'}"
  );
  mingyan.push(
    "{'index':1275,'content':'年轻的朋友，我们总是这样太慌张，满天的星光是我的家。你要去哪里，我去哪里，我也不在意。以后我们各自还有一生的奇迹。  </br> - </br>后海大鲨鱼乐队'}"
  );
  mingyan.push("{'index':231,'content':'汶川大地震5周年。'}");
  mingyan.push(
    "{'index':494,'content':'过年了，你们都能吃肉，而我还是得吃草。</br> - </br>马'}"
  );
  mingyan.push(
    "{'index':423,'content':'相呴以湿，相濡以沫，不若相忘于江湖。</br> - </br>《庄子》'}"
  );
  mingyan.push(
    "{'index':1090,'content':'你不了解真正的失去。唯有爱别人胜过爱自己才能体会。 </br> - </br>《心灵捕手》'}"
  );
  mingyan.push(
    "{'index':1203,'content':'真正爱一个人，是不需要坚持的。而是自然而然，想要一直去爱。</br> - </br>咪蒙'}"
  );
  mingyan.push(
    "{'index':168,'content':'酒进到嘴里，爱进到眼里，这就是在衰朽和死亡之前，我们应该学会的全部真理。</br> - </br>叶芝'}"
  );
  mingyan.push(
    "{'index':177,'content':'我行过许多地方的桥，看过许多次的云，喝过许多种类的酒，却只爱过一个正当最好年龄的人。</br> - </br>沈从文'}"
  );
  mingyan.push(
    "{'index':581,'content':'如果有天我们湮没在人潮之中，庸碌一生，那是因为我们没有努力要活得丰盛。 </br> - </br>黄碧云'}"
  );
  mingyan.push(
    "{'index':571,'content':'你来人间一趟，你要看看太阳，和你的心上人，一起走在街上。</br> - </br>海子《夏天的太阳》'}"
  );
  mingyan.push(
    "{'index':886,'content':'觉得以前美好，是因为那时想着慢慢来还有好长的日子，现在觉着疲惫，是因为已经少了那样的耐心，想要极速赶往未来美好的样子，殊不知，一个不小心的当下，便会造就一个不复从前的未来 。</br> - </br>德卡先生'}"
  );
  mingyan.push(
    "{'index':298,'content':'忘掉一个女人最好的办法就是把她变成文学。</br> - </br>《和莎莫的500天》'}"
  );
  mingyan.push(
    "{'index':1107,'content':'如果我们有机会重返青春现场，一定发现，那个青春，与我们相携终身，不断怀念，惊鸿照影的青春有异，我们对它的怀念，是一种刻骨的高估。 </br> - </br>韩松落'}"
  );
  mingyan.push(
    "{'index':311,'content':'欢迎来到现实世界，它糟糕得要命，但你会爱上它的。</br> - </br>《老友记》'}"
  );
  mingyan.push(
    "{'index':153,'content':'我们的本质，就如同梦一般虚幻不实，而我们渺小的生命，以一场睡眠圆满落幕。</br> - </br>莎士比亚'}"
  );
  mingyan.push(
    "{'index':823,'content':'我避开无事时过分热络的友谊，这使我少些负担和承诺。我不多说无谓的闲言，这使我觉得清畅。我尽可能不去缅怀往事，因为来时的路不可能回头。我当心地去爱别人，因为比较不会泛滥。我爱哭的时候便哭，想笑的时候便笑，只要这一切出于自然。 </br> - </br>《送你一匹马》'}"
  );
  mingyan.push(
    "{'index':28,'content':'这世界也并不是非白即黑，做一个属于红白蓝的梦吧。</br> - </br>贺伊曼'}"
  );
  mingyan.push(
    "{'index':1281,'content':'一个人生气蓬勃的时候决不问为什么生活，只是为生活而生活——为了生活是桩美妙的事而生活。 </br> - </br>《约翰·克里斯朵夫》'}"
  );
  mingyan.push(
    "{'index':1149,'content':'时间飞逝，人生百味杂陈，无法言说。仿佛一个人写了长长的信，但未等到那个可以投递的人。</br> - </br>《一封信》'}"
  );
  mingyan.push(
    "{'index':266,'content':'年轻的时候，我也曾经以为自己是风。可是最后遍体鳞伤，我才知道我们原来都只是草。</br> - </br>《艋舺》'}"
  );
  mingyan.push(
    "{'index':118,'content':'我就是我。如果必须以头撞墙来真实待己，那么我愿意。</br> - </br>马龙·白兰度'}"
  );
  mingyan.push(
    "{'index':648,'content':'如果有一天海枯石烂，有一匹斑马向我奔来，轻柔的呼吸将我召唤，给我无边的温暖。</br> - </br>简·迷离 《结冰的女孩儿》'}"
  );
  mingyan.push(
    "{'index':692,'content':'男女之间，最难的不是情爱的发生，不是熊熊烈火的燃起，而是能将这烈火隐忍成清明的星光，照耀各自一生或繁华或寂寥的长夜。</br> - </br>张定浩'}"
  );
  mingyan.push(
    "{'index':1109,'content':'不管以什么名义，毁灭个性的做法就是专制。 </br> - </br>约翰·斯图尔特·穆勒'}"
  );
  mingyan.push(
    "{'index':1144,'content':'感情最沉重的一步：我仍愿意听，你却不愿讲。 </br> - </br>咸贵人'}"
  );
  mingyan.push(
    "{'index':732,'content':'有些人恐惧父母离去，或者江郎才尽还有衰老。我比较恐惧的是怕以后会埋怨自己，就是在力所能及时没有努力做一件事，当没有机会再去做时，会责备年轻的自己。 </br> - </br>李娜'}"
  );
  mingyan.push(
    "{'index':1094,'content':'那些曾让你哭的事有一天你会笑着讲出来。 </br> - </br>《我们都是坏孩子》'}"
  );
  mingyan.push(
    "{'index':638,'content':'水滴的特别之处在于，它们总能找到阻力最小的道路，对人类而言，情况刚刚相反。</br> - </br>《少年斯派维的奇异旅行》'}"
  );
  mingyan.push(
    "{'index':948,'content':'我们要像月光一样，通宵守着静静的春天之夜，我们要像两个儿童。你把我用你的生命裹住，教我像你一样展开笑容。</br> - </br>拉斯克·许勒《春天》'}"
  );
  mingyan.push(
    "{'index':542,'content':'我离你很远，我没有什么可以跟你说的，可是我就在这里，而且我知道你在那里。</br> - </br>米兰·昆德拉'}"
  );
  mingyan.push(
    "{'index':178,'content':'认识一个城市的最好办法，就是去认识里面的人们如何工作、如何相爱、以及如何死亡。</br> - </br>阿尔贝·加缪'}"
  );
  mingyan.push(
    "{'index':740,'content':'爱不是我们要去的方向，而是我们出发的地方。</br> - </br>徐超斌'}"
  );
  mingyan.push(
    "{'index':316,'content':'那些沉默的人，往往藏着特别大的梦。</br> - </br>李宇春'}"
  );
  mingyan.push(
    "{'index':765,'content':'我们拼命划桨，奋力与波浪抗争，最终却被冲回到我们的往昔。</br> - </br>菲茨杰拉德《了不起的盖茨比》'}"
  );
  mingyan.push(
    "{'index':187,'content':'就像一碗热汤的关怀，不可能随身携带。</br> - </br>王菲《蝴蝶》'}"
  );
  mingyan.push(
    "{'index':1146,'content':'你有太多我艳羡不及的能力，然而其中最让我咬牙嫉妒的，就是能够如此轻易得到我的真心。 </br> - </br>张瑞琪'}"
  );
  mingyan.push(
    "{'index':1112,'content':'当对幸福的憧憬过于急切，那痛苦就在人的心灵深处升起。 </br> - </br>加缪'}"
  );
  mingyan.push(
    "{'index':1362,'content':'只有在夜晚我们才能像个孩子那样天真地入睡，然而天亮后，仍旧必须像个大人那样认真地醒来。 </br> - </br>周一周二'}"
  );
  mingyan.push(
    "{'index':121,'content':'你看过了许多美景，你看过了许多美女，你迷失在地图上每一道短暂的光阴。 </br> - </br>陈绮贞《旅行的意义》'}"
  );
  mingyan.push(
    "{'index':1356,'content':'不懂的事情，你自然会多加小心，惹祸上身的是你自以为懂的事。 </br> - </br>马克·吐温'}"
  );
  mingyan.push(
    "{'index':1330,'content':'有时候一天长得像一生，有时候一生短得像一天。世界上没有两个相同的一天，但每一天都适合开始，适合离别，适合爱。 </br> - </br>周一周二'}"
  );
  mingyan.push(
    "{'index':1247,'content':'当你老了，回顾一生，就会发觉：什么时候出国读书，什么时候决定做第一份职业、何时选定了对象而恋爱、什么时候结婚，其实都是命运的巨变。只是当时站在三岔路口，眼见风云千樯，你作出选择的那一日，在日记上，相当沉闷和平凡，当时还以为是生命中普通的一天。 </br> - </br>陶杰'}"
  );
  mingyan.push("{'index':16,'content':'很高兴见到你。</br> - </br>韩寒'}");
  mingyan.push(
    "{'index':513,'content':'如果你很肯定了就去行动吧，说出自己的感受是很重要的。</br> - </br>《听见天堂》'}"
  );
  mingyan.push(
    "{'index':1086,'content':'人们说的荒唐，却是我的心中的天堂。 </br> - </br>五月天'}"
  );
  mingyan.push(
    "{'index':787,'content':'仰望星空时，我们知道这些星星距离我们成百上千光年，有些甚至已经不存在了。它们的光花了很长很长时间才到达地球，而在此期间，他们本身已经消失或爆炸瓦解成红矮星了。这些事实会让人觉得自己很渺小，如果生活中遇到了困难，不妨想想这些，你就会明白什么叫微不足道。 </br> - </br>马克·哈登'}"
  );
  mingyan.push(
    "{'index':764,'content':'你连想改变别人的念头都不要有。要学习太阳一样，只是发出光和热，每个人接收阳光的反应有所不同，有人觉得刺眼有人觉得温暖，有人甚至躲开阳光。种子破土发芽前没有任何的迹象，是因为没到那个时间点。只有自己才是自己的拯救者。 </br> - </br>荣格'}"
  );
  mingyan.push(
    "{'index':360,'content':'每一个生命都有灵魂，只是怎样唤醒他们。</br> - </br>《百年孤独》'}"
  );
  mingyan.push(
    "{'index':566,'content':'人，要么庸俗，要么孤独。</br> - </br>叔本华'}"
  );
  mingyan.push(
    "{'index':451,'content':'每个人都有属于自己的一片森林，也许我们从来不曾走过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。</br> - </br>《挪威的森林》'}"
  );
  mingyan.push(
    "{'index':320,'content':'如果忘了，就不重要。</br> - </br>张大春'}"
  );
  mingyan.push(
    "{'index':47,'content':'有人翩翩求记住，有人起舞求忘记。</br> - </br>《加州旅馆》'}"
  );
  mingyan.push(
    "{'index':340,'content':'25岁的我，也许什么也没有，但命运就在我手中。</br> - </br>马克·塞雷纳'}"
  );
  mingyan.push(
    "{'index':1159,'content':'当我陈列出你的缺点，却发现自己，已成为一座想念的博物馆。 </br> - </br>吴青峰'}"
  );
  mingyan.push(
    "{'index':439,'content':'万千心语，谁知其详？唯尔寂静，轻声永传。</br> - </br>《寂静之声》'}"
  );
  mingyan.push(
    "{'index':144,'content':'爱可以抵御风雪，爱可以挽救一切。「一个」工作室祝天下有情人终成眷属！'}"
  );
  mingyan.push(
    "{'index':1088,'content':'跟你注定要斗一辈子的那个敌人，是你自己。 </br> - </br>马徐骏'}"
  );
  mingyan.push(
    "{'index':1061,'content':'战士不会去煽情战争，他们只是战斗。致敬消防战士们。 </br> - </br>韩寒'}"
  );
  mingyan.push(
    "{'index':258,'content':'爱情像鲜花，它总不开放，欲望像野草，疯狂地生长。</br> - </br>许巍《在别处》'}"
  );
  mingyan.push(
    "{'index':307,'content':'当你爱一个人的时候你就应该说出来。生命只是时间中的一个停顿，一切的意义都只在它发生的那一时刻。不要等。</br> - </br>珍妮特·温特森'}"
  );
  mingyan.push(
    "{'index':945,'content':'上学后，人们问我长大了要做什么，我写下“快乐”。他们告诉我，我理解错了题目，我告诉他们，他们理解错了人生。 </br> - </br>约翰·列侬'}"
  );
  mingyan.push(
    "{'index':1305,'content':'谁可相依？近处，要有可以依傍的亲人朋友，远处，要有神或者佛；实处，要有金钱，虚处，要有信仰。远近都有，虚实结合，才能填补人生的各种窟窿，抵挡生命中各种不妥，不至于凄云惨雾。 </br> - </br>韩松落'}"
  );
  mingyan.push(
    "{'index':25,'content':'很多人并非喜欢文艺，而是享受当一个“喜欢文艺”的人。</br> - </br>贺伊曼'}"
  );
  mingyan.push(
    "{'index':382,'content':'太阳出来，为了生活出去，太阳落了，为了爱情回去。</br> - </br>周云蓬《鱼相忘于江湖》'}"
  );
  mingyan.push(
    "{'index':727,'content':'一个人也要好好吃饭。</br> - </br>《一人食》'}"
  );
  mingyan.push(
    "{'index':1141,'content':'人类的一个大麻烦，在于我们无法拥有说一不二的感情，敌人身上总有让我们喜欢的地方，我们的爱人身上总会有让我们讨厌之处。</br> - </br>叶芝'}"
  );
  mingyan.push(
    "{'index':705,'content':'人总是不得不跟那些庞大或细微的痛苦战斗，输掉也是英雄。每个人的痛苦，都是所有人的痛苦。每个人的失败，都是所有人的失败。每个人离去，都是为所有人牺牲。</br> - </br>荞麦'}"
  );
  mingyan.push(
    "{'index':271,'content':'我们所得到的一切，只是将我们送回童年。</br> - </br>《午夜牛郎》'}"
  );
  mingyan.push(
    "{'index':330,'content':'浪荡天涯的孩子，忽晴忽雨的江湖，祝你有梦为马，永远随处可栖。</br> - </br>大冰'}"
  );
  mingyan.push(
    "{'index':1100,'content':'是谁说伟大才值得被歌颂，乘风破浪后也不一定成功。生命只能向前，坚定信念的人都是英雄。</br> - </br>《Reloaded I》'}"
  );
  mingyan.push(
    "{'index':1263,'content':'洗手台上并排着的牙刷，被窝中碰到的脚，不知何时消失掉的冰箱中的布丁，先下楼梯，和在你的后面上楼梯……恋爱总有一天会变成生活，生活会变成喜悦。 </br> - </br>《最完美的离婚》'}"
  );
  mingyan.push(
    "{'index':350,'content':'幸好不是你， 陪我到最后。</br> - </br>蔡康永'}"
  );
  mingyan.push(
    "{'index':79,'content':'正因为痛苦难以回避，你更要在它到来时仔细端详。</br> - </br>何禾'}"
  );
  mingyan.push(
    "{'index':1041,'content':'我们都曾失去过，也知道失去并不代表什么，得到也是。</br> - </br>血条禾'}"
  );
  mingyan.push(
    "{'index':762,'content':'不要那么孤独，请相信，这个世界上真的有人在过着你想要的生活。</br> - </br>大冰'}"
  );
  mingyan.push(
    "{'index':944,'content':'远离，不是放弃你，只是无法再接受你以我不愿意、不适合的方式来对待我。不愿意待在一个一点都不美丽，一点都不符合我本性的关系里。 </br> - </br>《蒙马特遗书》'}"
  );
  mingyan.push(
    "{'index':370,'content':'二十几岁坠入爱河，结婚生子，三十几岁买下了房子，又突然间意识到：我不要再这样生活下去了。</br> - </br>《美食，祈祷，恋爱》'}"
  );
  mingyan.push(
    "{'index':1073,'content':'一个人，没有同类。 </br> - </br>《刺客聂隐娘》'}"
  );
  mingyan.push(
    "{'index':1358,'content':'即使在清贫的岁月，也不能失去对幸福美好的向往，那些摆脱平庸的梦总能编制我们简单的生活，为我们简单的时光点缀希望。不能说我们总要多热爱生活，但总要有一颗懂得欣赏和珍惜的心。 </br> - </br>《布鲁克林有棵树》'}"
  );
  mingyan.push(
    "{'index':1310,'content':'很多少年刚开始的时候多么的特立独行啊，最后都要为一个女孩而平庸。</br> - </br>孔龙'}"
  );
  mingyan.push(
    "{'index':514,'content':'世界上本没有路，有了腿便有了路。</br> - </br>《让子弹飞》'}"
  );
  mingyan.push(
    "{'index':1197,'content':'人生不只是坐着等待，好运就会从天而降。就算命中注定，也要自己去把它找出来。 </br> - </br>李安'}"
  );
  mingyan.push(
    "{'index':672,'content':'“你知道人类最大的武器是什么吗？”“是豁出去的决心。” </br> - </br>伊坂幸太郎'}"
  );
  mingyan.push(
    "{'index':328,'content':'钻牛角尖的过程是琐碎无趣的，但钻出头就是一个新世界了。</br> - </br>马良'}"
  );
  mingyan.push(
    "{'index':1185,'content':'没人可以永远的活在青春里，但还好，如若有心，我们能见证一代又一代的年轻。这种见证，也便成了一种参与。 </br> - </br>自由极光'}"
  );
  mingyan.push(
    "{'index':291,'content':'我经常卖萌，可是从没人买。</br> - </br>李瑶瑶'}"
  );
  mingyan.push(
    "{'index':1196,'content':'从来就没有跨不过去的坎，但总有人要重蹈覆辙。周而复始，愈演愈烈。</br> - </br>张瑞琪'}"
  );
  mingyan.push(
    "{'index':1053,'content':'我曾听人说过，当你不能够再拥有，你唯一可以做的，就是令自己不要忘记。 </br> - </br>《东邪西毒》'}"
  );
  mingyan.push(
    "{'index':1288,'content':'我们最终都要远行，最终都要跟稚嫩的自己告别。</br> - </br>海子'}"
  );
  mingyan.push(
    "{'index':643,'content':'我依赖大海，并且信仰高山，最好你经过我身旁，你也喜欢我这一种简单。</br> - </br>张楚《到达》'}"
  );
  mingyan.push(
    "{'index':598,'content':'五月是残忍的。所有的猫都在叫春，而我爱的你还在冬眠。520。</br> - </br>「好多条短裤」'}"
  );
  mingyan.push(
    "{'index':430,'content':'在地图上，标记你到过的地方，勾画你途经的路线，看你我究竟相隔多少河流山川，多少湖泊海洋，多少草原沙漠。最后计算距离时才恍悟，也不过心上一步之遥。</br> - </br>-我是这海底的咸鱼-'}"
  );
  mingyan.push(
    "{'index':795,'content':'谁会真正帮助你，谁会真正陪在你身边，谁会说一声“我马上就到”。纵使知道孤独是常态人生总要自己面对，当确确实实有这样的人出现在身边，你突然发现，他们从来就不是那群天天说爱你爱得要死的人。</br> - </br>琦殿'}"
  );
  mingyan.push(
    "{'index':586,'content':'生命来到窗前，不吭一声，拎走了我们，谁为情所困，谁为爱牺牲，谁比谁深刻。</br> - </br>吴青峰'}"
  );
  mingyan.push(
    "{'index':272,'content':'记住这每天每夜，你要永远感到你很自由。</br> - </br>《随心所欲》'}"
  );
  mingyan.push(
    "{'index':501,'content':'两条道路分散在树林里，而我选择的那条更少人迹，从此决定了我人生的迥异。</br> - </br>罗伯特·弗罗斯特'}"
  );
  mingyan.push(
    "{'index':215,'content':'你那能叫活着么？你那只能叫没死。</br> - </br>《疯狂原始人》'}"
  );
  mingyan.push(
    "{'index':1322,'content':'爱情是现代社会唯一的狩猎活动，而猎物只有回忆。 </br> - </br>苏更生'}"
  );
  mingyan.push(
    "{'index':1215,'content':'如果人生丧失欲望，在生活面前几乎等同于束手就擒。</br> - </br>巴伐利亚酒神'}"
  );
  mingyan.push(
    "{'index':962,'content':'有时我想，所有人都是一样的。在各自粉饰的外表下都有千疮百孔的人生和一个暗黑的深渊。如果了知这些，不会觉得自己特别，也不会觉得自己无辜。</br> - </br>安妮宝贝《一封信》'}"
  );
  mingyan.push(
    "{'index':877,'content':'有时候，你对人生所有的规划，抵不过命运一次不怀好意的安排。</br> - </br>扶南'}"
  );
  mingyan.push(
    "{'index':1246,'content':'多想和你一样臭不要脸，墨镜和表情都挂在脸上，穿什么吃什么玩什么都可以，今天爱他明天恨他也可以。 </br> - </br>《定西》'}"
  );
  mingyan.push(
    "{'index':1282,'content':'世间最好的默契，并非有人懂你的言外之意，而是有人懂你的欲言又止。 </br> - </br>瑞卡斯'}"
  );
  mingyan.push(
    "{'index':1020,'content':'这里没有陌路，你从不曾孤独。</br> - </br>韩寒'}"
  );
  mingyan.push(
    "{'index':681,'content':'好的时光是哪一段并无太大意义，因为所有的时光都是被辜负被浪费的，也只有在辜负浪费之后，才能从记忆里将某一段拎出，拍拍上面沉积的灰尘，感叹它是最好的时光。</br> - </br>《最好的时光》'}"
  );
  mingyan.push(
    "{'index':569,'content':'世界无论如何混乱肮脏，坚定的理想主义者也能胜出。</br> - </br>连岳'}"
  );
  mingyan.push(
    "{'index':1297,'content':'你知道这世界本就是欠缺激情与逻辑的，我们才不甘心平淡，所以我们发疯的姿态才会那么好看。爱你的时候，错的也是对的。爱你的时候，只有我愿意，没有不可以。</br> - </br>郑执'}"
  );
  mingyan.push(
    "{'index':464,'content':'即使以为自己的感情已经干涸得无法给予，也总会有一个时刻一样东西能拨动心灵深处的弦。我们毕竟不是生来就享受孤独的。</br> - </br>加西亚·马尔克斯'}"
  );
  mingyan.push(
    "{'index':431,'content':'我理解的爱情，似乎要有些惊心动魄伤筋动骨的东西。如果没有痛感，而只有快感，那就是成年人的一种两性关系而已。</br> - </br>《1980年代的爱情》'}"
  );
  mingyan.push(
    "{'index':731,'content':'来年陌生的，是昨日最亲的某某。</br> - </br>黄伟文'}"
  );
  mingyan.push(
    "{'index':401,'content':'年华似水匆匆一瞥，多少岁月轻描淡写。</br> - </br>黄磊'}"
  );
  mingyan.push(
    "{'index':359,'content':'爱是想触碰又收回手。</br> - </br>塞林格《破碎故事之心》'}"
  );
  mingyan.push(
    "{'index':1125,'content':'满以为这些年我们终于跑赢了时间，却再也追不回最初的种种遇见。那些不断在岁月里翻滚颠簸、看起来割舍不掉的耿耿于怀，也不过是寂寞十足的内心戏。 </br> - </br>张瑞琪'}"
  );
  mingyan.push(
    "{'index':1122,'content':'我们无法做到完美，所以我评价一个人就看他在做不可能完成的事情时，失败得有多精彩。 </br> - </br>威廉·福克纳'}"
  );
  mingyan.push(
    "{'index':66,'content':'人生一大憾事是其始也至善，一日不如一日，至其终则坏无可坏。</br> - </br>马克·吐温'}"
  );
  mingyan.push(
    "{'index':135,'content':'没有“生活”，从来只有“忍耐”。</br> - </br>贺伊曼'}"
  );
  mingyan.push(
    "{'index':15,'content':'如果快乐是一种发明，它很容易被一再发明。</br> - </br>小饭'}"
  );
  mingyan.push(
    "{'index':592,'content':'我觉得中国需要一些非常彪悍的个性的人，彪悍到可以独立的与这个时代共舞，参与到里面，改变它，影响它。而不是穿上盔甲，说我是独立的，眼睁睁看着所有的事情覆水难收。</br> - </br>贾樟柯'}"
  );
  mingyan.push(
    "{'index':59,'content':'他不在了，不再存在，进入他根本不知道的乌有乡。正如他当初的恐惧。</br> - </br>菲利普·罗斯'}"
  );
  mingyan.push(
    "{'index':1019,'content':'说过很多潇洒的话，做过很多打脸的事。 </br> - </br>许灵子'}"
  );
  mingyan.push(
    "{'index':1380,'content':'人永远都无法知道自己该要什么，因为人只能活一次，既不能拿它跟前世相比，也不能在来生加以修正。没有任何方法可以检验哪种抉择是好的，因为不存在任何比较。一切都是马上经历，仅此一次，不能准备。</br> - </br>《不能承受的生命之轻》'}"
  );
  mingyan.push(
    "{'index':1014,'content':'人与人的缘分总是长长短短，像削铅笔。越是适切，消耗越是大。</br> - </br>张怡微《哀眠》'}"
  );
  mingyan.push(
    "{'index':1329,'content':'不再迷恋时光机这种存在，因为已经明白，无论再给我多少次机会，我还是会把一切搞砸的；因为我怕万一选了别的路，就无法遇见你了。 </br> - </br>李珊珊'}"
  );
  mingyan.push(
    "{'index':50,'content':'你知道么，青春可短暂了。</br> - </br>《与青春有关的日子》'}"
  );
  mingyan.push(
    "{'index':1302,'content':'生活哪里是一层一层上台阶或下台阶，生活分明是踩着一块浮冰去另一块浮冰，却永不知岸在何处。 </br> - </br>吕彦妮'}"
  );
  mingyan.push(
    "{'index':560,'content':'让我感谢你，赠我空欢喜。</br> - </br>林夕'}"
  );
  mingyan.push(
    "{'index':721,'content':'活得匆忙，来不及感受。</br> - </br>维亚塞姆斯基'}"
  );
  mingyan.push(
    "{'index':345,'content':'多余的财富只能购买多余的东西，人的灵魂必需的东西，是不需要花钱买的。</br> - </br>亨利·戴维·梭罗'}"
  );
  mingyan.push(
    "{'index':1222,'content':'青春期的小姑娘对于爱情幻想的太满，往往因为得到的太寥寥而攒下失望。但是我从未后悔。直到现在我也觉得那些我日复一日写的关于他的日记，牵手时的汗滴，拥抱过后的别离，都是青春给我为数不多的糖。 </br> - </br>山支'}"
  );
  mingyan.push(
    "{'index':607,'content':'你们必须努力寻找自己的声音，因为你越迟开始寻找，找到的可能性就越小。</br> - </br>《死亡诗社》'}"
  );
  mingyan.push(
    "{'index':960,'content':'你有时会站在自己的那座孤独山丘，以为风尘滚滚也会比别人高瞻远瞩。 </br> - </br>编号223'}"
  );
  mingyan.push(
    "{'index':1034,'content':'生命的复杂，就在于不可预期，不容解释，不能厘清。好像走在迷雾里，看不见任何方向，没有人可以判别前面是否断崖或绝路。生命只能持续走下去，直到雾散了，答案才终得明白。</br> - </br>《谁在暗中眨眼睛》'}"
  );
  mingyan.push(
    "{'index':476,'content':'你既有所求，便要拿天真来换。</br> - </br>翟永明'}"
  );
  mingyan.push(
    "{'index':1121,'content':'为了给遗憾找个借口，我们从一开始就把一些人放在了等待怀念的位置。</br> - </br>郑执'}"
  );
  mingyan.push(
    "{'index':825,'content':'我们为什么如此热爱未来，是因为我们将生活在那里。</br> - </br>短裤君'}"
  );
  mingyan.push(
    "{'index':907,'content':'初见你时你给我你的心，里面是一个春天的早晨。再见你时你给我你的话，说不出的是炽烈的火夏。三次见你你给我你的手，里面藏着个叶落的深秋。最后见你是我做的短梦，梦里有你还有一群冬风。 </br> - </br>邵洵美《季候》'}"
  );
  mingyan.push(
    "{'index':541,'content':'我遇见你，我记得你，这座城市天生就适合恋爱，你天生就适合我的灵魂。 </br> - </br>杜拉斯'}"
  );
  mingyan.push(
    "{'index':908,'content':'所谓生活的滋味不一定是在你住在高级酒店的一刻，也不一定都是你一览众山小时的感慨，而是我们乏味似水的时时刻刻。</br> - </br>朱白'}"
  );
  mingyan.push(
    "{'index':725,'content':'听过冬雪夏蝉，不管说了什么总有什么说不出。尝过悲欢离合，不管留下什么总有什么留不住。就算一路走来，不管是好是坏只怕都是不归路。就算一步一步一步的走下去，只怕走不到最初。</br> - </br>《最初》'}"
  );
  mingyan.push(
    "{'index':1003,'content':'我可以锁住笔，为什么却锁不住爱和忧伤。在长长的一生里，为什么欢乐总是乍现就凋落。走得最急的都是最美的时光。</br> - </br>席慕蓉《为什么》'}"
  );
  mingyan.push(
    "{'index':516,'content':'父母总是以为我不会长大，他们错了。我总是以为父母不会变老，我也错了。</br> - </br>《蓝鱼手绘日记》'}"
  );
  mingyan.push(
    "{'index':844,'content':'当时间到来，我们不得不挥手告别熟悉的世界，告别我们深知的一切，告别认为会永不抛弃我们的人，当这些改变最终发生的时候，当熟悉远离而陌生来临的时候，我们所能做到的，就是说声“你好，欢迎”。</br> - </br>《绝望的主妇》'}"
  );
  mingyan.push(
    "{'index':65,'content':'世界上那么多纷纷扰扰，能真正和你产生关系的不多；外面那么冷，你更要记住那个帮你暖被窝的。</br> - </br>韩寒'}"
  );
  mingyan.push(
    "{'index':1188,'content':'自由自在地思想，自由自在地瞎想，自由自在地少想，自由自在地选择我自己的生活，选择我自身。</br> - </br>弗朗索瓦丝·萨冈'}"
  );
  mingyan.push(
    "{'index':1228,'content':'对任何的异地恋来说，也许关怀与温暖鞭长莫及，但是冷漠与疏离却可以翻山越岭而来。 </br> - </br>金国栋'}"
  );
  mingyan.push(
    "{'index':994,'content':'初恋就像一壶白开水，不管当初多么沸腾，放得久了，终究是一壶凉白开。 </br> - </br>午歌'}"
  );
  mingyan.push(
    "{'index':1123,'content':'和云朵相比，生活牢固多了。经久不变，近乎永恒。</br> - </br>辛波斯卡'}"
  );
  mingyan.push(
    "{'index':668,'content':'你选择和谁在一起，就是选择了一种生活方式和价值观。 </br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':683,'content':'我想很多人都有这种经验。你不能主动，你不能做任何事，你只能等他心血来潮问候几句的时候平淡和缓不慌地应答，你不该成为逼迫的力量，你是一株等待季节性阵雨的沙漠植物。</br> - </br>梁文道'}"
  );
  mingyan.push(
    "{'index':337,'content':'冒一次想冒的险，带着全心理好的花朵或礼物，在途上送给自己。</br> - </br>杨宗纬'}"
  );
  mingyan.push(
    "{'index':1372,'content':'人的出场顺序很重要，陪你喝醉的人注定没办法送你回家。</br> - </br>暖小团'}"
  );
  mingyan.push(
    "{'index':381,'content':'我们周年纪念只是为了提醒大家，又一年了，别拖延了。</br> - </br>韩寒'}"
  );
  mingyan.push(
    "{'index':1028,'content':'有很多事 ，不用解释，时间会让我懂事；傻瓜才在年轻时候不做傻事，羡慕别人有故事。 </br> - </br>邵夷贝'}"
  );
  mingyan.push(
    "{'index':306,'content':'大学就像养老院，而且事实上，更多人死在了大学里。</br> - </br>鲍勃·迪伦'}"
  );
  mingyan.push(
    "{'index':845,'content':'需要很多力量，很多傲气，或者很多爱，才能相信人的行动是有价值的，相信生命胜过死亡。</br> - </br>西蒙娜·德·波伏娃'}"
  );
  mingyan.push("{'index':31,'content':'人世间，不离骚。</br> - </br>小饭'}");
  mingyan.push(
    "{'index':949,'content':'心，生来就是要碎的。</br> - </br>王尔德'}"
  );
  mingyan.push("{'index':318,'content':'300击。</br> - </br>韩寒'}");
  mingyan.push(
    "{'index':198,'content':'冬天以后，我们就都要张开双手，让风吹过童年的无忧。</br> - </br>《Michelle的第一天》'}"
  );
  mingyan.push(
    "{'index':341,'content':'有时候，一个人的业余活动也许比他的职业还更重要。</br> - </br>胡适'}"
  );
  mingyan.push(
    "{'index':1042,'content':'爱恋不过是一场高烧，思念是紧跟着的好不了的咳。</br> - </br>李宗盛'}"
  );
  mingyan.push(
    "{'index':587,'content':'时间会带你去最正确的人身边。请先好好爱着自己。然后那个还不知道在哪里的人，会来接你。</br> - </br>《岁月的童话》'}"
  );
  mingyan.push(
    "{'index':93,'content':'聪明从来都是把事情归纳得更简单。</br> - </br>何禾'}"
  );
  mingyan.push(
    "{'index':993,'content':'所谓教育，也许就是这样，爱与耐心，加上孩子能明白的方式。这世界不是那么好，也不是那么坏，但这世界上的很多东西不能只用好或者坏来形容。 </br> - </br>《这里会长出一朵花》'}"
  );
  mingyan.push(
    "{'index':1210,'content':'你要等的人，也许并不是和你在人群中谈笑嬉闹，把酒言欢的那一个，而是能在安静的时光里，与你认真分享彼此孤独的人。 </br> - </br>午歌'}"
  );
  mingyan.push(
    "{'index':260,'content':'最近几年的经历教会我一个道理，那就是，只要你努力，世界上没有什么事是搞不砸的。</br> - </br>尼克·霍恩比'}"
  );
  mingyan.push(
    "{'index':475,'content':'多少人，以朋友的名义，爱着一个人。</br> - </br>《One Day》'}"
  );
  mingyan.push(
    "{'index':184,'content':'在你恋爱的地方，所有的家具都得清除出房间，所有的树木，所有的山脉，所有的海洋。这世界太狭窄了。</br> - </br>耶胡达·阿米亥'}"
  );
  mingyan.push(
    "{'index':132,'content':'没有以前的过去，就不会成就现在的自己。</br> - </br>萧敬腾'}"
  );
  mingyan.push(
    "{'index':242,'content':'不能忍受无聊的一代人，将是平庸的一代人。</br> - </br>罗素'}"
  );
  mingyan.push(
    "{'index':232,'content':'应该像一只鸟儿那样轻，而不是像一根羽毛。</br> - </br>保尔•瓦莱里'}"
  );
  mingyan.push(
    "{'index':716,'content':'我所理解的生活，就是和喜欢的一切在一起。</br> - </br>韩寒'}"
  );
  mingyan.push(
    "{'index':773,'content':'小孩子才问你为什么不理我了，是不是不喜欢我了，成年人都是默契地相互疏远。</br> - </br>玍几'}"
  );
  mingyan.push(
    "{'index':217,'content':'你最好不要爱上我，因为游侠是不需要女人的，游侠非常孤独。</br> - </br>《森林好小子》'}"
  );
  mingyan.push(
    "{'index':526,'content':'你以为挑起生活的担子是勇气，其实去过自己真正想要的生活才更需要勇气。 </br> - </br>《革命之路》'}"
  );
  mingyan.push(
    "{'index':36,'content':'心事是很难隐藏的，把嘴巴捂住它就会从眼睛里冒出来。</br> - </br>飞机'}"
  );
  mingyan.push(
    "{'index':863,'content':'城市是一个几百万人一起孤独地生活的地方。</br> - </br>梭罗'}"
  );
  mingyan.push(
    "{'index':452,'content':'每个人都会经过这个阶段，看见一座山，就想知道山后面是什么。我很想告诉他，可能翻过去山后面，你会发觉没有什么特别。</br> - </br>《东邪西毒》'}"
  );
  mingyan.push(
    "{'index':1099,'content':'这么多年过去，你依然是我愿意绕很远很远的路去接近的人。 </br> - </br>花大钱'}"
  );
  mingyan.push(
    "{'index':410,'content':'我什么也没忘，但有些事只适合收藏。</br> - </br>史铁生'}"
  );
  mingyan.push(
    "{'index':101,'content':'游子的心是风霜剥蚀的残碑，碑上已经漶漫了家乡的字迹。</br> - </br>闻一多'}"
  );
  mingyan.push(
    "{'index':363,'content':'长的是磨难，短的是人生。</br> - </br>张爱玲'}"
  );
  mingyan.push(
    "{'index':163,'content':'曾感到过寂寞，也曾被别人冷落 ，却从未有感觉我无地自容。</br> - </br>黑豹《无地自容》'}"
  );
  mingyan.push(
    "{'index':656,'content':'继续跑，带着赤子的骄傲，生命的闪耀不坚持到底怎能看到，与其苟延残喘不如纵情燃烧，为了心中的美好，不妥协直到变老。</br> - </br>《追梦赤子心》'}"
  );
  mingyan.push(
    "{'index':497,'content':'我们必须在爱中成长，为此我们必须不停地去爱，去给予，直至成伤。 </br> - </br>特蕾莎修女'}"
  );
  mingyan.push(
    "{'index':956,'content':'人就是这样，一旦有了信仰，他就有决心与毅力去浪费时光。</br> - </br>《推拿》'}"
  );
  mingyan.push(
    "{'index':1145,'content':'你要做一个不动声色的大人了。不准情绪化，不准偷偷想念，不准回头看。去过自己另外的生活。 </br> - </br>村上春树'}"
  );
  mingyan.push(
    "{'index':851,'content':'不知何时起，我们开始不惮以最坏的恶意推测爱情，拷问它的不堪一击，讥讽它的变质过期，却发现泪水反而更加四溢，当爱情再度来临，仍然奋不顾身前去。那并没有什么丢脸。因为爱，即是人性。 </br> - </br>蒋话《杀手的礼物》'}"
  );
  mingyan.push(
    "{'index':361,'content':'我经常有种奇特的感觉，我觉得自己仿佛是一个躺在床上垂死的老妇人，而我的一生就是她的回忆。</br> - </br>《爱在黎明破晓前》'}"
  );
  mingyan.push(
    "{'index':95,'content':'我把我整个的灵魂都给你，连同它的怪癖，耍小脾气，忽明忽暗，一千八百种坏毛病。它真讨厌，只有一点好，爱你。</br> - </br>王小波'}"
  );
  mingyan.push(
    "{'index':941,'content':'把微笑放在，眼泪干枯了的地方。 </br> - </br>小沙弥'}"
  );
  mingyan.push(
    "{'index':1216,'content':'过去理解的爱情，不过是相互纠缠撕扯的一次晕头转向。而真正对的那个人，应该有势均力敌的气力，让彼此看到生活的平静与欣喜。</br> - </br>残小雪'}"
  );
  mingyan.push(
    "{'index':448,'content':'人啊，根据重新振作的方法，大概可以分为两种：一种是看着比自己卑微的东西，找寻垫底的借以自慰；另一种是看着比自己伟大的东西，狠狠地踢醒毫无气度的自己。</br> - </br>《银魂》'}"
  );
  mingyan.push(
    "{'index':457,'content':'人充满劳绩，但还诗意地安居于这块大地之上。</br> - </br>荷尔德林'}"
  );
  mingyan.push(
    "{'index':191,'content':'爱上一匹野马，可我的家里没有草原。</br> - </br>宋冬野《董小姐》'}"
  );
  mingyan.push(
    "{'index':14,'content':'是狼是人，日久见心。</br> - </br>小饭'}"
  );
  mingyan.push(
    "{'index':1160,'content':'真正的爱，就是两份孤独，相护，相抚，喜相逢。</br> - </br>聂华苓'}"
  );
  mingyan.push(
    "{'index':901,'content':'我愿意深深地扎入生活，吮尽生活的骨髓，过得扎实，简单，把一切不属于生活的内容剔除得干净利落，把生活逼到绝处，简单最基本的形式，简单，简单，再简单。 </br> - </br>《瓦尔登湖》'}"
  );
  mingyan.push(
    "{'index':42,'content':'走开，让一个单身胖子悲伤一会儿。</br> - </br>张冠仁'}"
  );
  mingyan.push(
    "{'index':1369,'content':'“夏令营”这个词此后在我的生活里再没有出现过，有些词在人生里是有时态的，过一定的年纪之后，这个词便和你无关了。 </br> - </br>马良'}"
  );
  mingyan.push(
    "{'index':935,'content':'知道么，心有灵犀，倾盖如故。我想，你和我是很多年很多年前，宇宙爆炸时，同一个灵魂的两枚碎片。</br> - </br>庄雅婷'}"
  );
  mingyan.push(
    "{'index':1202,'content':'爱的反义词不是恨，是厌倦 。人生的反义词也不是死亡，而是别人的人生。 </br> - </br>贾彬彬'}"
  );
  mingyan.push(
    "{'index':665,'content':'人一老，对于自己是不是被别人多余最为敏感，他们整天都在看儿女们甚至孙儿孙女们的脸色，看看自己在他们生活里的定位错了没有，错了就是多余。没有比发现自己多余更凄惨的事。</br> - </br>严歌苓《陆犯焉识》'}"
  );
  mingyan.push(
    "{'index':1217,'content':'暧昧的美妙在于彼此试探、相互猜忌、想前进又后退了几步，在情意中兜转，但它的坏处是，最后你不是输给了爱不爱，而是败在了狠不狠。 </br> - </br>苏更生'}"
  );
  mingyan.push(
    "{'index':882,'content':'切记不要与自身的平凡为敌，也没有必要把自己变得不像自己。</br> - </br>许钧'}"
  );
  mingyan.push(
    "{'index':470,'content':'你好，2014。</br> - </br>「一个」工作室'}"
  );
  mingyan.push(
    "{'index':1181,'content':'灵魂只能独行，陪伴不是把别人拉到你的生活轨迹上，或者强行进入别人的世界找到一个位置，陪伴是一种心灵的在场，就好像我不用问候一声，也知道你一定随时会回应我的召唤。</br> - </br>大将军郭'}"
  );
  mingyan.push(
    "{'index':599,'content':'我有太多的方向，以至于总是习惯回头看，看见我只有一个出发的地方，这就是我去哪里都不怕错的理由了。</br> - </br>陈绮贞'}"
  );
  mingyan.push(
    "{'index':321,'content':'忠诚的意义在于我们不应该忘记爱过的每一个人。</br> - </br>《忠犬八公》'}"
  );
  mingyan.push(
    "{'index':929,'content':'永远要记得，被命运打趴下的时候，我们还是要爬起来，拍拍身上的土说，来，咱们三局两胜。</br> - </br>八月长安'}"
  );
  mingyan.push(
    "{'index':975,'content':'你始终不明白，一万个美丽的未来，抵不上一个温暖的现在。 </br> - </br>《关于现在关于未来》'}"
  );
  mingyan.push(
    "{'index':440,'content':'爱吃东西的人，都是好人。因为他们拼命追求美食，没有时间去害人。</br> - </br>网络'}"
  );
  mingyan.push(
    "{'index':180,'content':'谁会坚强与我并肩同行？某时某地，越过街垒，是否有个你渴求的新世界？</br> - </br>《悲惨世界》'}"
  );
  mingyan.push(
    "{'index':884,'content':'出发总是美丽的，尤其是在一个阳光普照的清晨上路。</br> - </br>三毛'}"
  );
  mingyan.push(
    "{'index':1075,'content':'我在快乐这两个字都不知道怎么写的年纪最快乐。 </br> - </br>夏正正'}"
  );
  mingyan.push(
    "{'index':394,'content':'什么叫多余？夏天的棉袄，冬天的蒲扇，还有等我已经心冷后你的殷勤。</br> - </br>李碧华'}"
  );
  mingyan.push(
    "{'index':1117,'content':'深思熟虑的结果往往就是说不清楚。</br> - </br>王小波'}"
  );
  mingyan.push(
    "{'index':1056,'content':'两个人之间最好的感觉就是，表面相互嫌弃，心中不离不弃。 </br> - </br>李云龙'}"
  );
  mingyan.push(
    "{'index':156,'content':'你一天只吃3顿饭，睡1张床，要那么多钱干嘛？</br> - </br>温格'}"
  );
  mingyan.push(
    "{'index':357,'content':'这个城市有八百万个故事在上演，这只是其中一个。</br> - </br>《裸露城市》'}"
  );
  mingyan.push(
    "{'index':254,'content':'这是一个很悲伤的故事。</br> - </br>走走《孟加拉虎》'}"
  );
  mingyan.push(
    "{'index':27,'content':'想拥有更爱这个世界的能力。天冷了，请各位注意保暖。</br> - </br>《一个》全体'}"
  );
  mingyan.push(
    "{'index':282,'content':'我喜欢这种暴风雨前短暂的平静。</br> - </br>《这个杀手不太冷》'}"
  );
  mingyan.push(
    "{'index':327,'content':'每个人都有失恋的时候，而每一次我失恋，我都会去跑步。</br> - </br>《重庆森林》'}"
  );
  mingyan.push(
    "{'index':136,'content':'我们是夏天的爱人，冬天只是一个童话。</br> - </br>顾城'}"
  );
  mingyan.push(
    "{'index':1191,'content':'孤独与生俱来，谈恋爱只是有个人陪你孤独，不代表就能幸免于难。</br> - </br>贾彬彬'}"
  );
  mingyan.push(
    "{'index':887,'content':'生活的真实情况很简单。最初我们什么都怕，怕动物、天气、树木、夜空，但就是不怕同类。如今我们怕同类，却几乎不怕其他东西。 </br> - </br>《项塔兰》'}"
  );
  mingyan.push(
    "{'index':1036,'content':'错的事只会在最对的时候发生。 </br> - </br>《杀破狼2》'}"
  );
  mingyan.push(
    "{'index':1363,'content':'相互欺骗，却又令人惊奇地不受到任何伤害，甚至于就好象没有察觉到彼此在欺骗似的，这种不加掩饰从而显得清冽、豁达的互不信任的例子，在人类生活中比比皆是。 </br> - </br>太宰治'}"
  );
  mingyan.push(
    "{'index':43,'content':'万人如海只身藏, 你和世界的距离感决定了你能得到什么。</br> - </br>马一木'}"
  );
  mingyan.push(
    "{'index':413,'content':'“大丈夫何患无妻。”</br> - </br>「一个」工作室'}"
  );
  mingyan.push(
    "{'index':1326,'content':'我劝大家口味不要太窄，什么都要尝尝，不管是古代的还是异地的食物，比如葵和薤，都吃一点。一个一年到头吃大白菜的人是没有口福的。 </br> - </br>汪曾祺'}"
  );
  mingyan.push(
    "{'index':591,'content':'我从出生那天起就是我自己。如果你不能理解，那是你的失败，不是我的。</br> - </br>《大鱼》'}"
  );
  mingyan.push(
    "{'index':412,'content':'若非心里有人，怎会暗里有光。</br> - </br>Sandy King'}"
  );
  mingyan.push(
    "{'index':719,'content':'青春是人生的实验课，错也错得很值得。</br> - </br>《笑忘歌》'}"
  );
  mingyan.push(
    "{'index':1012,'content':'先变成更喜欢的自己，然后遇到一个不需要取悦的人。 </br> - </br>卢思浩 《愿有人陪你颠沛流离》'}"
  );
  mingyan.push(
    "{'index':741,'content':'从今以后，别再过你应该过的人生，去过你想过的人生吧！</br> - </br>梭罗'}"
  );
  mingyan.push(
    "{'index':695,'content':'这世上有成千上万种爱，但从来没有一种爱可以重来。 </br> - </br>菲茨杰拉德'}"
  );
  mingyan.push(
    "{'index':953,'content':'命运是任何人也无法改变的，但他可以决定是等死还是面对。 </br> - </br>《幽灵公主》'}"
  );
  mingyan.push(
    "{'index':767,'content':'关于爱情的路，我们都曾经走过，关于爱情的歌，我们已听的太多，关于我们的事，他们统统都猜错，关于心中的话，只对你一个人说。</br> - </br>《生命中的精灵》'}"
  );
  mingyan.push(
    "{'index':997,'content':'人生不仅要能享受那些成功时刻让人激情澎湃的成名天下扬，也要能承受之前若干年漫长岁月里寂寞冷淡带来的寒窗无人问。</br> - </br>暖小团'}"
  );
  mingyan.push(
    "{'index':1106,'content':'男女之间不可能存在友谊，有的只是爱恨情仇。 </br> - </br>王尔德'}"
  );
  mingyan.push(
    "{'index':1013,'content':'如果我真的存在，也是因为你需要我。 </br> - </br>克莱尔•麦克福尔'}"
  );
  mingyan.push(
    "{'index':122,'content':'你不会失去从来就没占有过的东西。</br> - </br>托妮·莫里森'}"
  );
  mingyan.push(
    "{'index':568,'content':'在吗？在干嘛？想你了。晚安。搅乱你的生活，这四句足矣。</br> - </br>十三空'}"
  );
  mingyan.push(
    "{'index':461,'content':'最端正的杯子，是橘子，它在树上跳舞，一滴水也不洒出来。</br> - </br>顾城'}"
  );
  mingyan.push(
    "{'index':1241,'content':'老了之后才懂得一些最质朴的人生真谛，比如：茫茫人海中，就数讨厌我的人最讨厌。</br> - </br>咪蒙'}"
  );
  mingyan.push(
    "{'index':536,'content':'人们总是喜欢用“如果”去勾勒一些莫须有的奇迹。可大部分“如果”都不可兑现，不过是从希望到绝望的一个缓冲地带。</br> - </br>《阿司匹林》'}"
  );
  mingyan.push(
    "{'index':924,'content':'重要的事往往最难以启齿，因为言语会缩小其重要性；要让素昧平生的人在意你生命中的美好事物，原本就不容易。</br> - </br>斯蒂芬·金'}"
  );
  mingyan.push(
    "{'index':885,'content':'一望可相见，一步如重城。所爱隔山海，山海不可平。 </br> - </br>Littlesen'}"
  );
  mingyan.push(
    "{'index':551,'content':'没有玩具的孩子最落寞，可是没有梦的男人是什么。</br> - </br>《关于男人》'}"
  );
  mingyan.push(
    "{'index':778,'content':'从来都无法得知，人们是究竟为什么会爱上另一个人。我猜也许我们心上都有一个缺口，呼呼往灵魂里灌着寒风，我们急切需要一个正好形状的心来填上它，就算你是太阳一样完美正圆形，可是我心里的缺口，或许恰恰是个歪歪扭扭的锯齿形，你填不了。</br> - </br>毛姆《面纱》'}"
  );
  mingyan.push(
    "{'index':505,'content':'不怕路长，只怕心老。</br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':522,'content':'杯中的水是亮闪闪的，海里的水是黑沉沉的。小道理可用文字说清楚，大道理却只有伟大的沉默。</br> - </br>泰戈尔'}"
  );
  mingyan.push(
    "{'index':1296,'content':'每一次身心俱疲的恋情后，总会尾随着下一次的爱与被爱。心永远没有用完的那天。就像小时候哭得停不下来，那时以为是一场喘不上气的灾难，哪会知道，原来还有一辈子的眼泪要流。 </br> - </br>贾彬彬'}"
  );
  mingyan.push(
    "{'index':333,'content':'虽然花会零落，但会重开。</br> - </br>《一生所爱》'}"
  );
  mingyan.push(
    "{'index':684,'content':'生活嘛，慢慢去做好了。更多的变化会在更短的时间里涤荡这片大地，然而哪怕是世界翻了个个儿，古老的心灵仍然耐心地走在命运的道路上。 </br> - </br>李娟《走夜路请放声歌唱》'}"
  );
  mingyan.push(
    "{'index':1179,'content':'你要学会克制，因为只有这样，放纵起来才会更好玩儿呢。 </br> - </br>花大钱'}"
  );
  mingyan.push(
    "{'index':1077,'content':'我知道在我将命运的改变希冀在幸运上的时候，我就是一个失败者。 </br> - </br>乔诗伟'}"
  );
  mingyan.push(
    "{'index':833,'content':'这城市真他妈痛苦，但她越痛苦我就越爱她。活着，是主旋律，我们像一粒石子，打磨着这个世界，也被这个世界打磨。认真活着，吃饭，喝茶，做爱，做爱做的事，永远选择难走的路。</br> - </br>Aly Song'}"
  );
  mingyan.push(
    "{'index':130,'content':'真正重要的东西，总是没有的人比拥有的人更清楚，所以，可要好好珍惜啊。</br> - </br>《银魂》'}"
  );
  mingyan.push(
    "{'index':371,'content':'我爱你却更爱自由。</br> - </br>汪峰《旅途》'}"
  );
  mingyan.push(
    "{'index':654,'content':'一举一动，都是承诺，会被另一个人看在眼里，记在心上的。</br> - </br>《悬崖上的金鱼姬》'}"
  );
  mingyan.push(
    "{'index':1365,'content':'有的时候我真觉得全世界都像海上撞沉了船，最要紧的还是救出自己。 </br> - </br>易卜生'}"
  );
  mingyan.push(
    "{'index':783,'content':'如果没有那么多的感动，那么多的痛苦，在狂喜和绝望的两极来来回回，活着还有什么意思呢？</br> - </br>《恋爱的犀牛》'}"
  );
  mingyan.push(
    "{'index':119,'content':'一枝枯萎的鲜花，不会再盛开。人、鸟、虫……光辉的星星都只有一次生命。</br> - </br>白银圣斗士奥路菲'}"
  );
  mingyan.push(
    "{'index':880,'content':'在我生命中曾有过那么一个时刻，那时我多年轻啊，早上睁开眼睛，会想，这是一个开始，未来的一切都会更好，这是所有幸福的开始。现在我才明白，其实那就是幸福了。</br> - </br>《时时刻刻》'}"
  );
  mingyan.push(
    "{'index':1044,'content':'只恨我当时年纪小，看不懂她那小小花招背后的一片柔情。 </br> - </br>《小王子》'}"
  );
  mingyan.push(
    "{'index':188,'content':'没有你，良辰美景可与何人说。</br> - </br>《天使爱美丽》'}"
  );
  mingyan.push(
    "{'index':1166,'content':'我喜欢在大街上闲逛，无所事事。在成人的世界中有一种被忽略的安全感。只要不仰视，看到的都是胸以下的部分，不必为长得太丑的人难过，也不必为人间喜怒哀乐分心。</br> - </br>北岛《城门开》'}"
  );
  mingyan.push(
    "{'index':777,'content':'世间最痛苦之事，莫过于泯然众人，默默无闻。</br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':606,'content':'真心对你好的人不会很多，一个也别弄丢了。</br> - </br>张嘉佳'}"
  );
  mingyan.push(
    "{'index':51,'content':'是谁来自山川湖海，却囿于昼夜、厨房与爱。 </br> - </br>《揪心的玩笑与漫长的白日梦》'}"
  );
  mingyan.push(
    "{'index':265,'content':'人生如路，须在荒凉中走出繁华的风景来。</br> - </br>七堇年'}"
  );
  mingyan.push(
    "{'index':169,'content':'成熟这个过程是那么必然，果实总会落地。</br> - </br>何禾'}"
  );
  mingyan.push(
    "{'index':262,'content':'眼泪的存在，是为了证明悲伤不是一场幻觉。</br> - </br>《恋人絮语》'}"
  );
  mingyan.push(
    "{'index':335,'content':'活着就意味必须要做点什么，请好好努力。</br> - </br>村上春树《地下》'}"
  );
  mingyan.push(
    "{'index':17,'content':'有比孤独更紧迫的事，云存储的使用空间到期了。</br> - </br>蔡蕾'}"
  );
  mingyan.push(
    "{'index':1327,'content':'努力改变不了命运，苦难也不会变成财富，真正能改变命运的是你的状态。同样的粗茶淡饭起早摸黑，有人如饮毒酒也有人奋起直追。你的努力不能决定未来，但可以决定当下你是充满朝气和期望的侠客。你要知道，命运从不是未来的那个结果，而是此时此刻。 </br> - </br>姬霄'}"
  );
  mingyan.push(
    "{'index':120,'content':'谁陪你一起长大，谁就是你的朋友。</br> - </br>小饭【往期精选】'}"
  );
  mingyan.push(
    "{'index':493,'content':'信仰是沉重的负担，你知道吗？就像一个躲在黑暗中的爱人，无论你怎样呼唤，她都不会出现。</br> - </br>《第七封印》'}"
  );
  mingyan.push(
    "{'index':950,'content':'象棋比生活好。在这个世界上，根本没有全身而退这种事情。</br> - </br>《一切破碎，一切成灰》'}"
  );
  mingyan.push(
    "{'index':1118,'content':'我知道你眼中的我不是我自己。 </br> - </br>《冒险乐园》'}"
  );
  mingyan.push(
    "{'index':999,'content':'爱上一个人，会亢奋，爱着一个人，会沉溺，爱错一个人，会痛，而爱过的那个人，最有理由去遗忘。 </br> - </br>王云超'}"
  );
  mingyan.push(
    "{'index':375,'content':'人一生会遇到约2920万人，两个人相爱的概率是0.000049，所以你不爱我，我不怪你。</br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':499,'content':'人们常常会欺骗你，是为了让你明白，有时候，你唯一应该相信的人就是你自己。</br> - </br>《千与千寻》'}"
  );
  mingyan.push(
    "{'index':1243,'content':'你不是人，你是天使，遇到你是我这辈子最大的狗屎运。 </br> - </br>《美人鱼》'}"
  );
  mingyan.push(
    "{'index':226,'content':'来啊，快活啊，反正有，大把时光。</br> - </br>《痒》'}"
  );
  mingyan.push(
    "{'index':636,'content':'一些人想要改变世界，而另外一些人想要保护她。</br> - </br>NASA中文'}"
  );
  mingyan.push(
    "{'index':1314,'content':'时间决定你会在生命中遇见谁，你的心决定你想要谁出现在你的生命里，而你的行为决定最后谁能留下。 </br> - </br>《瓦尔登湖》'}"
  );
  mingyan.push(
    "{'index':107,'content':'热忱之心不可泯灭，相互帮助，体恤弱者，无论哪国人都可能成为朋友。不要放弃感情，纵使它被背叛过千百回。</br> - </br>某个奥特曼'}"
  );
  mingyan.push(
    "{'index':1321,'content':'人总是老得太快，而又聪明得太慢。 </br> - </br>《与神为友》'}"
  );
  mingyan.push(
    "{'index':824,'content':'爱任何事物的方法，就是要意识到你可能会失去它。</br> - </br>G.K.切斯特顿'}"
  );
  mingyan.push(
    "{'index':802,'content':'生活总是让我们遍体鳞伤，但到后来，那些受伤的地方一定会变成我们最强壮的地方。</br> - </br>《老人与海》'}"
  );
  mingyan.push(
    "{'index':605,'content':'当赤道留住雪花，眼泪融掉细沙，你肯珍惜我吗？ </br> - </br>《当这地球没有花》'}"
  );
  mingyan.push(
    "{'index':1293,'content':'即使热恋者的情感是错觉、幻象或自恋行为，那又何妨，所谓人生就是一段不断追求情爱的路程。 </br> - </br>森山大道'}"
  );
  mingyan.push(
    "{'index':353,'content':'决定我们成为什么样人的，不是我们的能力，而是我们的选择。</br> - </br>《哈利波特》'}"
  );
  mingyan.push(
    "{'index':478,'content':'有些人，我们把他留在回忆里，是为了要藉由他们，来怀念当时的自己。</br> - </br>蔡康永'}"
  );
  mingyan.push(
    "{'index':374,'content':'我拥有的都是侥幸，失去的都是人生。</br> - </br>张悬《关于我爱你》'}"
  );
  mingyan.push(
    "{'index':216,'content':'要是没有你，今天的心情只是昨天的头皮屑。</br> - </br>《天使爱美丽》'}"
  );
  mingyan.push(
    "{'index':723,'content':'长大后谁不是离家出走，茫茫人海里游。</br> - </br>《大人中》'}"
  );
  mingyan.push(
    "{'index':984,'content':'所有你们不相信的事情我都要一一地去做一遍，亲自体验一下不可理喻的成功，或早已注定的失败。 </br> - </br>《坦白书》'}"
  );
  mingyan.push(
    "{'index':165,'content':'感情的世界里，越是索取，便越是贫瘠。所有的迫不及待，都等不来期待。</br> - </br>《冷山》'}"
  );
  mingyan.push(
    "{'index':1096,'content':'使人觉得遥远的不是时间长，而是两三件不可挽回的事。 </br> - </br>博尔赫斯《等待》'}"
  );
  mingyan.push(
    "{'index':205,'content':'该记得的不会忘记，会忘记的应该就是不重要的东西。</br> - </br>吴念真'}"
  );
  mingyan.push(
    "{'index':873,'content':'我说不出为什么，特别喜欢跟这种冷静平和的人待在一起。热情让我害怕，一是怕让我要回报相同的热情，那是件很辛苦的事情，承不起来，让人虚脱；二是害怕热情总是快速褪去，因为差距而更加落寞。</br> - </br>《时间不老，我们不散》'}"
  );
  mingyan.push(
    "{'index':338,'content':'我一点都不遗憾没有在最好的时光遇到你，因为遇到你之后最好的时光才开始。</br> - </br>杜小明'}"
  );
  mingyan.push(
    "{'index':784,'content':'每个人在他的人生发轫之初，总有一段时光，没有什么可留恋，只有抑制不住的梦想，没有什么可凭仗，只有他的好身体，没有地方可去，只想到处流浪。</br> - </br>E·B·怀特'}"
  );
  mingyan.push(
    "{'index':398,'content':'在所有人事已非的景色里，我最喜欢你。</br> - </br>张悬《喜欢》'}"
  );
  mingyan.push(
    "{'index':660,'content':'他们彼此深信，是瞬间迸发的热情让他们相遇，这样的确定是美丽的，但变幻无常更为美丽。 </br> - </br>《一见钟情》'}"
  );
  mingyan.push(
    "{'index':202,'content':'这个环里，没有入口没有出口，只有喜怒哀乐循环往复。</br> - </br>何禾'}"
  );
  mingyan.push(
    "{'index':557,'content':'生为冰山，就该淡淡地爱海流、爱风，并且在偶然接触时，全心全意地爱另一块冰山。</br> - </br>王小波《似水柔情》'}"
  );
  mingyan.push(
    "{'index':399,'content':'你一直希望自己勇敢而真实，那么现在做个深呼吸，用猛烈的孤独，开始你伟大的历险。</br> - </br>莱昂纳德·科恩'}"
  );
  mingyan.push(
    "{'index':879,'content':'我需要你的时候，你不是不在，而是不在意。所以你需要我的时候，我不是不想，而是不想理。 </br> - </br>刘同'}"
  );
  mingyan.push(
    "{'index':786,'content':'每个优秀的人都有一段沉默的时光。那一段时光是付出了很多努力，忍受孤独和寂寞，不抱怨不诉苦，日后说起时，连自己都能被感动的日子。</br> - </br>《关于这个世界，你不快乐什么》'}"
  );
  mingyan.push(
    "{'index':211,'content':'犯不着千辛万苦求新，无论衣服还是朋友。</br> - </br>《瓦尔登湖》'}"
  );
  mingyan.push(
    "{'index':699,'content':'爱是一个长久的诺言，平淡的故事要用一生讲完，光阴的眼中你我只是一段插曲。</br> - </br>《诺言》'}"
  );
  mingyan.push(
    "{'index':985,'content':'小时候我们的城市像郊外，我们的脚步很轻快，那时天空很蓝心很小路很宽，长大后我们的存在像尘埃，我们的距离被拉开。 </br> - </br>吴青峰'}"
  );
  mingyan.push(
    "{'index':294,'content':'我们若声称喜欢与孤独为伴，是为关照骄傲和自私的本性。</br> - </br>「一个」读者丁书奇'}"
  );
  mingyan.push(
    "{'index':1294,'content':'我们用味道搭讪，用一块蛋糕说你好。我们用味道疗伤，用一杯烈酒说再见。唇齿是连接生命个体与世界的大门，味道是钥匙。 </br> - </br>吴惠子'}"
  );
  mingyan.push(
    "{'index':182,'content':'一个人需要隐藏多少秘密，才能巧妙地度过一生。</br> - </br>仓央嘉措'}"
  );
  mingyan.push(
    "{'index':1260,'content':'没有一点儿疯狂，生活就不值得过。听凭内心呼声的引导吧，为什么要把我们的每一个行动像一块饼似的在理智的煎锅上翻来覆去地煎呢？ </br> - </br>米兰·昆德拉'}"
  );
  mingyan.push(
    "{'index':396,'content':'白色的野鹤啊，请将飞的本领借我一用。</br> - </br>仓央嘉措'}"
  );
  mingyan.push(
    "{'index':1325,'content':'我从不把活着和对生活的期待混为一谈。我对生命无所期待。我没有预先想过要什么。生活本身就够激动人心的了。 </br> - </br>萨冈'}"
  );
  mingyan.push(
    "{'index':124,'content':'温柔要有，但不是妥协，我们要在安静中，不慌不忙地坚强。</br> - </br>林徽因'}"
  );
  mingyan.push(
    "{'index':57,'content':'你想要一个熊，还是一个熊抱？这问题没那么简单。今日宜系怀旧红领巾。</br> - </br>蔡蕾'}"
  );
  mingyan.push(
    "{'index':248,'content':'要有礼貌。不管他是不是坏人，真正的妖侠要有妖侠的风度。</br> - </br>《魁拔II》'}"
  );
  mingyan.push(
    "{'index':1352,'content':'你还年轻，肯定记得自己犯过这种毛病：某人的缺席反而使他在你心里完美无缺。</br> - </br>《寄居者》'}"
  );
  mingyan.push(
    "{'index':920,'content':'读一些无用的书，做一些无用的事，花一些无用的时间，都是为了在一切已知之外，保留一个超越自己的机会，人生中一些很了不起的变化，就是来自这种时刻。</br> - </br>梁文道'}"
  );
  mingyan.push(
    "{'index':722,'content':'生命中总会有那么一段时光，充满不安，可是除了勇敢面对，我们别无选择。 </br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':437,'content':'我们在同一个世界里入睡，却在不同的世界里醒来。</br> - </br>《尤利西斯的凝视》'}"
  );
  mingyan.push(
    "{'index':966,'content':'在有生的瞬间能遇到你，竟花光所有运气。 </br> - </br>《明年今日》'}"
  );
  mingyan.push(
    "{'index':520,'content':'有些事情我不看透，不是我太笨，只是我太善良。</br> - </br>《樱桃小丸子》'}"
  );
  mingyan.push(
    "{'index':1022,'content':'这世上多一个人笑，就少一个人哭。</br> - </br>《煎饼侠》'}"
  );
  mingyan.push(
    "{'index':883,'content':'很多年后我再度归来，终于又见到了你，我从前的情人。那些你的容颜散发出的光芒，那些被掩饰的甜蜜的微笑，那些深夜时分对坐在咖啡馆里加速的心跳，那些伤心的记忆，全都回来了。你应该知道的，我永远不可能忘记你。</br> - </br>帕慕克'}"
  );
  mingyan.push(
    "{'index':763,'content':'生活不可能像你想象的那么好，但也不会像你想象的那么糟。我觉得人的脆弱和坚强都超乎自己的想象。有时，我可能脆弱得一句话就泪流满面；有时，也发现自己咬着牙走了很长的路。</br> - </br>莫泊桑'}"
  );
  mingyan.push(
    "{'index':992,'content':'世间也需要没用的东西，如果一切事物都必须有其意义，会让人喘不过气来。</br> - </br>是枝裕和'}"
  );
  mingyan.push(
    "{'index':806,'content':'人在面临幸福时会突然变得胆怯，抓住幸福其实比忍受痛苦更需要勇气。 </br> - </br>《下妻物语》'}"
  );
  mingyan.push(
    "{'index':1344,'content':'不管你用什么方式活着，我们只有一个目的，别违心，以及别后悔，还有，去他的人言可畏。</br> - </br>暖小团'}"
  );
  mingyan.push(
    "{'index':1011,'content':'前方蜿蜒无边的路再漫长，也比不上你我之间的记忆。</br> - </br>披头士'}"
  );
  mingyan.push(
    "{'index':664,'content':'愿你我可以带着最微薄的行李和最丰盛的自己在世间流浪。</br> - </br>大冰'}"
  );
  mingyan.push(
    "{'index':737,'content':'某天，你无端想起一个人，她曾让你对明天有所期许，但却完全没有出现在你的明天里。</br> - </br>《再见金华站》'}"
  );
  mingyan.push(
    "{'index':815,'content':'没人能挽留你在这个世界，就像没人能阻止你来到这个世界。如果非要说害怕什么，我只是害怕上帝丢给我太多理想，却忘了给我完成理想的时间。</br> - </br>《站在两个世界的边缘》'}"
  );
  mingyan.push(
    "{'index':246,'content':'我们注定要失去我们所爱的人，要不然我们怎么会知道他们对我们多么的重要。</br> - </br>《本杰明巴顿奇事》'}"
  );
  mingyan.push(
    "{'index':480,'content':'你带来欢笑，我有幸得到。</br> - </br>《野鹅敢死队》'}"
  );
  mingyan.push(
    "{'index':490,'content':'你的过去我不愿过问，那是你的事情。你的未来我希望参与，这是我的荣幸。</br> - </br>《神探夏洛克》'}"
  );
  mingyan.push(
    "{'index':1245,'content':'长期以来，我一直期望着过上真正的生活，可手头总有做不完的事、不断发生的混乱、毫无头绪的忙碌，后来我才知道，这些就是生活呀。 </br> - </br>苏更生'}"
  );
  mingyan.push(
    "{'index':1214,'content':'我们终其一生，就是要摆脱别人的期待，找到真正的自己。 </br> - </br>《无声告白》'}"
  );
  mingyan.push(
    "{'index':1308,'content':'爱情是一种偏见。你爱你需要的，你爱使你感觉好的，你爱使你感觉方便的。当你知道只要有机会认识，世界上还有一万个人可以让你更爱，怎么能说你只爱一个人？只不过你永远无法认识他们。 </br> - </br>《苦水音乐》'}"
  );
  mingyan.push(
    "{'index':618,'content':'哪怕最不幸的人生也会有阳光明媚的时光，也会在沙砾石缝中长出小小的幸福之花。</br> - </br>赫尔曼·黑塞'}"
  );
  mingyan.push(
    "{'index':978,'content':'时常想到过去的自己，羞耻到无法自拔。所以顺带着，便原谅了很多人。仿佛原谅了他们，也就原谅了过去的那个自己。</br> - </br>自由极光'}"
  );
  mingyan.push(
    "{'index':734,'content':'或许我们犯的错误，造就我们的命运。没有错误，哪来的人生。如果不偏离轨道，或许就不会坠入爱河。毕竟，季节会更换，城市也会，有人走进你的生命，有人离开。但令人欣慰的是，我们爱的人永远会在我们心里，够幸运的话，一趟飞机就可以见面了。</br> - </br>《欲望都市》'}"
  );
  mingyan.push(
    "{'index':1342,'content':'我们总喜欢回忆往事，但不一定真想去重复。 </br> - </br>陈染'}"
  );
  mingyan.push(
    "{'index':1001,'content':'从我做了家长以后，不幸是我立即发现我老，老到寻不见一丝不负责任的赤子之心了。</br> - </br>李健吾'}"
  );
  mingyan.push(
    "{'index':21,'content':'终点当然是存在的，只是和最初的想象不一样而已。</br> - </br>蔡蕾'}"
  );
  mingyan.push(
    "{'index':903,'content':'让我们决定彼此靠近的，是表面的阳光；但让我们决定彼此亲近的，却是内心的脆弱。 </br> - </br>里则林'}"
  );
  mingyan.push(
    "{'index':471,'content':'长长的路上我想我们是朋友，如果有期待我想最好是不说。</br> - </br>阿信《纯真》'}"
  );
  mingyan.push(
    "{'index':194,'content':'你知道，有些鸟儿是注定不会被关在牢笼里的，它们的每一片羽毛都闪耀着自由的光辉。</br> - </br>《肖申克的救赎》'}"
  );
  mingyan.push(
    "{'index':74,'content':'朋友多年不见，手里一张照片。看着旧日样子，心中跟他聊天。</br> - </br>老树画画'}"
  );
  mingyan.push(
    "{'index':608,'content':'做你最喜欢的，其他都他妈是扯淡。</br> - </br>《阳光小美女》'}"
  );
  mingyan.push(
    "{'index':760,'content':'有时你期待一切如新，有时候你希望，一切如常。</br> - </br>丁丁张'}"
  );
  mingyan.push(
    "{'index':183,'content':'当你年轻时，以为什么都有答案，可是老了的时候，你可能又觉得其实人生并没有所谓的答案。</br> - </br>《堕落天使》'}"
  );
  mingyan.push(
    "{'index':1178,'content':'童年是不会死去的，它藏在每个人的心中小声喊着：让我出去玩会儿吧！ </br> - </br>乌冬'}"
  );
  mingyan.push(
    "{'index':809,'content':'你知道，一个配不上你的世界的最简单标志就是一些配不上你的人总想跟你共饮一杯啤酒。</br> - </br>《佛祖在一号线》'}"
  );
  mingyan.push(
    "{'index':698,'content':'年轻时无数次心急火燎地说“我能”，只不过是为了此刻能够风轻云淡地说声“我可以”。</br> - </br>姬霄'}"
  );
  mingyan.push(
    "{'index':691,'content':'现在回头看过去，不快乐总是很长的一段时候，而快乐都只是在某个时刻，是稍纵即逝的点缀，是蛋糕上的水果。如果碰到能让你快乐的人，一定要一口一口慢慢吃。</br> - </br>颜茹玉'}"
  );
  mingyan.push(
    "{'index':768,'content':'世界上最厉害的本领是什么？是以愉悦的心情老去，是在想工作的时候能选择休息，是在想说话的时候保持沉默，是在失望的时候又燃起希望。</br> - </br>《使者》'}"
  );
  mingyan.push(
    "{'index':312,'content':'不管世界变得怎样，只要能和你在一起，哪怕是悲伤也会闪闪发亮。</br> - </br>江国香织'}"
  );
  mingyan.push(
    "{'index':1113,'content':'其实分别也没有这么可怕。65万个小时后，当我们氧化成风，就能变成同一杯啤酒上两朵相邻的泡沫，就能变成同一盏路灯下两粒依偎的尘埃。宇宙中的原子并不会湮灭，而我们，也终究会在一起。 </br> - </br>花大钱'}"
  );
  mingyan.push(
    "{'index':596,'content':'饥饿是最好的调味，孤独是最强的催眠。</br> - </br>五月天《夜访吸血鬼》'}"
  );
  mingyan.push(
    "{'index':1257,'content':'正因为老了。没有更多时间可以挥霍，我才要更珍惜现在，极致专注，爱我所爱，做我所想。因为我深信，最痛苦的事，不是失败，是我本可以。 </br> - </br>咪蒙'}"
  );
  mingyan.push(
    "{'index':849,'content':'有些爱，只能止于唇齿，掩于岁月。 </br> - </br>《甜蜜蜜》'}"
  );
  mingyan.push(
    "{'index':1252,'content':'也许孤独是爱的最意味深长的赠品，受此赠礼的人从此学会了爱自己，也学会了理解别的孤独的灵魂和深藏于它们之中的深透的爱。 </br> - </br>《爱与孤独》'}"
  );
  mingyan.push(
    "{'index':71,'content':'长跑前要记得检查鞋带。</br> - </br>《一个》编辑部'}"
  );
  mingyan.push(
    "{'index':651,'content':'如果年轻凝成泪水，很快就会吹干，青春正是长长的风，来自无垠，去向无踪。</br> - </br>《风柜来的人》'}"
  );
  mingyan.push(
    "{'index':89,'content':'当喜悦飞去而吻别它的人，将活在永恒的朝阳之中。</br> - </br>威廉·布莱克'}"
  );
  mingyan.push(
    "{'index':219,'content':'逻辑会把你从A带到B，想象力能带你去任何地方。</br> - </br>爱因斯坦'}"
  );
  mingyan.push(
    "{'index':1240,'content':'我想知道的是，我们是否真的能够互相懂得。不是包容、不是照看，也不是原谅或宠爱，而是懂得，像解一道数学题那样，经过曲折和明暗去明白一个人的内心。 </br> - </br>陶立夏'}"
  );
  mingyan.push(
    "{'index':601,'content':'在我看来这无情世界，因为有热情的蠢货，才有些浪漫。</br> - </br>马良'}"
  );
  mingyan.push(
    "{'index':1127,'content':'你该知道此刻我正在想念着你，回想我们拥有的美好的回忆。一切欢乐和不如意瞬间逝去，现在只是孤单的我和遥远的你。 </br> - </br>窦唯'}"
  );
  mingyan.push(
    "{'index':533,'content':'如果你要驯服一个人，就要冒着掉眼泪的危险。</br> - </br>《小王子》'}"
  );
  mingyan.push(
    "{'index':709,'content':'你走了，此座城市就是拔掉牙齿的牙床，舔时痛，不舔时空荡。你归来，又如新镶的假牙，忐忑陌生，好久才能亲近。总之你记得，离别是不对的。</br> - </br>叶三'}"
  );
  mingyan.push(
    "{'index':860,'content':'死亡是，你加上这个世界再减去你。 </br> - </br>卡尔维诺'}"
  );
  mingyan.push(
    "{'index':438,'content':'你怎么就不明白呢？这个世界是不会为你而改变的。我和这个世界一样，是不会为你而改变的。</br> - </br>《牯岭街少年杀人事件》'}"
  );
  mingyan.push(
    "{'index':872,'content':'我只是你生活里的一个影子，你却在我的生命里占有重要地位。如果我只是个单纯的过客，为何要让我闯入你的生活？我千百次想过要离开你，但仅凭一己之力我做不到。</br> - </br>《偷影子的人》'}"
  );
  mingyan.push(
    "{'index':1355,'content':'人有一种可怕的欲望，想窥探别人内心，传递自己的恐慌，为别人同自己一样悲伤恐惧而感到安慰，想要操纵别人，在得知别人受到自己影响时的自鸣得意。这些都是难以启齿的，我们心中的恶魔。 </br> - </br>帕慕克'}"
  );
  mingyan.push(
    "{'index':111,'content':'有时候生活会送你一张幸运彩票，能拿到它当然很棒，但也就是如此了。</br> - </br>大卫·米切尔'}"
  );
  mingyan.push(
    "{'index':584,'content':'在天黑以后，往热闹地方躲，跟着别人努力快活， 可惜心里头，有定时的闹钟，提醒你有多寂寞。</br> - </br>《迷失东京》'}"
  );
  mingyan.push(
    "{'index':1318,'content':'生命是因为一次又一次的等待才显得漫长的，如果有谁一生中都没有等待过谁，那他一定是个短命鬼。 </br> - </br>夏正正'}"
  );
  mingyan.push(
    "{'index':1051,'content':'告别时都爱强装洒脱，告别后都在强忍想念，躲得了对酒当歌的夜，躲不了四下无人的街。 </br> - </br>卢思浩 《离开前请叫醒我》'}"
  );
  mingyan.push(
    "{'index':976,'content':'一个不成熟男子的标志是他愿意为某种事业英勇地死去，一个成熟男子的标志是他愿意为某种事业卑贱地活着。 </br> - </br>《麦田守望者》'}"
  );
  mingyan.push(
    "{'index':309,'content':'为你，千千万万遍。</br> - </br>《追风筝的人》'}"
  );
  mingyan.push(
    "{'index':160,'content':'我们都是伟大的，因为我们重复自己是很难的。</br> - </br>韩寒'}"
  );
  mingyan.push(
    "{'index':646,'content':'其实你知道，烦恼会解决烦恼，新的刚来到，旧的就忘掉。</br> - </br>陈奕迅《你给我听好》'}"
  );
  mingyan.push(
    "{'index':866,'content':'雨声潺潺，像住在溪边。宁愿天天下雨，以为你是因为下雨不来。</br> - </br>《小团圆》'}"
  );
  mingyan.push(
    "{'index':1147,'content':'他说他爱她就像拳击手爱蝴蝶，歌唱家爱沉寂，强盗爱上了村里的小学老师，他说他爱她就像屠夫爱上小牛犊那惊惧的眼神，闪电爱上了屋顶的宁静。 </br> - </br>《生活在别处》'}"
  );
  mingyan.push(
    "{'index':986,'content':'没有任何一种逃避能得到赞赏，喜欢就去追，饿了就吃饭，管它失败或是发胖。 </br> - </br>长期新新'}"
  );
  mingyan.push(
    "{'index':1242,'content':'过去、现在、未来的每一天，组成了我们的故事。每一个认真对待的日子，都是美的一天。 </br> - </br>过去的每一天'}"
  );
  mingyan.push(
    "{'index':891,'content':'如今我终于明白，会说话并不是件必须的事情。生活之海，长风击浪固然风流，在水下深潜也是件美妙的事情。一直很怀念自己口不能言一个人沉在水底的青春岁月，后悔太早挣扎着想浮上来。</br> - </br>《坦白书》'}"
  );
  mingyan.push(
    "{'index':1167,'content':'后来明白，我们永远无法成为别人满意的那个自己，可如果坚持做喜欢的自己，终会遇见喜欢你的人。其实到最后，我们都是在寻找同类，就像溪流汇入江海，光束拥抱彩虹。 </br> - </br>陈亚豪'}"
  );
  mingyan.push(
    "{'index':547,'content':'世界那么微妙，有那么多种不可思议，你却把自己定义在那里，杀死了所有的可能性。</br> - </br>仲尼Johnny'}"
  );
  mingyan.push(
    "{'index':1008,'content':'生活是世上最罕见的事情，大多数人只是存在，仅此而已。 </br> - </br>王尔德'}"
  );
  mingyan.push(
    "{'index':296,'content':'如果以后再也见不到你，那祝你早安，午安，晚安。</br> - </br>《楚门的世界》'}"
  );
  mingyan.push(
    "{'index':377,'content':'你永远也不晓得自己有多喜欢一个人，除非你看见他和别的人在一起。</br> - </br>《天使爱美丽》'}"
  );
  mingyan.push(
    "{'index':653,'content':'在这可恶的世界，什么也无法长久，哪怕是我们的烦恼。</br> - </br>查理·卓别林'}"
  );
  mingyan.push(
    "{'index':528,'content':'如果，有醒不了的梦，我一定去做；如果，有走不完的路，我一定去走；如果，有变不了的爱，我一定去求。让懂的人懂，让不懂的人不懂；让世界是世界，我甘心是我的茧。</br> - </br>《美丽的茧》'}"
  );
  mingyan.push(
    "{'index':487,'content':'我们习惯逃避选择，因为答案太多；我们不得不面对选择，因为生活所迫。于是，我们在选择中纠结，在纠结中选择。后来，纠结变成了一种病，在这个城市很流行。 </br> - </br>番茄女王'}"
  );
  mingyan.push(
    "{'index':576,'content':'我最快乐那一年，是你陪我经历一切。</br> - </br>《最快乐那一年》'}"
  );
  mingyan.push(
    "{'index':1039,'content':'错误的人什么都没有留下，只教会了我们惩罚对的人的方法。比如一段突如其来的倔强，比如一场没有终结的冷漠，比如一次轻而易举的离开。 </br> - </br>飞行官小北'}"
  );
  mingyan.push(
    "{'index':1262,'content':'好的爱情是不需要刻意创造什么新的东西，而是把古老而久已熟悉的事情一桩桩清晰化，现实化。听到一首老歌不由自主地哼唱起来，干枯了一整个冬天的树枝重新抽出嫩芽，回到久别的故乡，邻居见你都欢喜地喊你的小名。爱是不需要发出请求，它让你原形毕露，做一切该做的事情。 </br> - </br>吕彦妮'}"
  );
  mingyan.push(
    "{'index':865,'content':'每个人心中都有一团火，但路过的人只看到烟。但是总有一个人，总有那么一个人能看到这团火，然后走过来，陪我一起……从你叫什么名字开始，后来，有了一切。 </br> - </br>梵高'}"
  );
  mingyan.push(
    "{'index':782,'content':'你曾经对我说你永远爱着我。爱情这东西我明白，但永远是什么？</br> - </br>《恋曲1980》'}"
  );
  mingyan.push(
    "{'index':1183,'content':'世上大体分成好坏两种人，好人晚上睡得踏实，而坏人更享受醒着的时间。 </br> - </br>伍迪·艾伦'}"
  );
  mingyan.push(
    "{'index':847,'content':'有一个可以想念的人，就是幸福。</br> - </br>《情书》'}"
  );
  mingyan.push(
    "{'index':1078,'content':'越想敲的门，叩的声越轻。</br> - </br>张怡微'}"
  );
  mingyan.push(
    "{'index':694,'content':'你看，在野蛮的战场上还是有些文明的微光在闪动，那就是人性所在，确实，那就是我们仅有的谦卑的温和的方式。</br> - </br>《布达佩斯大饭店》'}"
  );
  mingyan.push(
    "{'index':510,'content':'我一直在想，我到底是喜欢你， 还是需要一个影子，放在心里，让我喜欢。 </br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':574,'content':'如果有一刹那，上帝忘记我是一只布偶并赋予我片刻生命，我可能不会说出我心中的一切所想，但我必定会思考我所说的一切。</br> - </br>马尔克斯《告别信》'}"
  );
  mingyan.push(
    "{'index':280,'content':'如果你不能应付我最差的一面，那么你也不值得拥有我最好的一面。</br> - </br>玛丽莲·梦露'}"
  );
  mingyan.push(
    "{'index':871,'content':'我想和你互相浪费，一起虚度短的沉默，长的无意义，一起消磨精致而苍老的宇宙。</br> - </br>李元胜'}"
  );
  mingyan.push(
    "{'index':852,'content':'每个人都有自己的世界，这个世界不是你想进就能进来的。进不来的就别硬闯了，还不如客客气气的当个客人，敲门敲不开就算了，可能别处更适合你。</br> - </br>痞人日记'}"
  );
  mingyan.push(
    "{'index':1249,'content':'年轻的时候，我认为我肯定能成为伟大的艺术家，但我现在并不是。我有我的局限性。但是你知道，即便你自身有局限性，只要你尽了全力，只要你不出卖自己，不被不值得的东西收买，你仍然可以过上美好的生活。你不必一生都鞭挞自己，你又不是达芬奇，我也不是。</br> - </br>伍迪·艾伦'}"
  );
  mingyan.push(
    "{'index':387,'content':'等一个不爱你的人，就像在机场等一艘船。</br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':807,'content':'脚步不能达到的地方，眼光可以到达；眼光不能到达的地方，精神可以飞到。</br> - </br>《悲惨世界》'}"
  );
  mingyan.push(
    "{'index':104,'content':'我要赚钱建一个自己的小木屋，余生就在那度过……我要定个规矩，谁都不能在这做什么虚伪的事，谁要做谁就滚。</br> - </br>《麦田里的守望者》'}"
  );
  mingyan.push(
    "{'index':150,'content':'对生活可以谈得很多。对幸福没什么好谈的，否则它就不再是幸福了。</br> - </br>赫塔·米勒'}"
  );
  mingyan.push(
    "{'index':426,'content':'我越是逃离，却越是靠近你，我越是背过脸，却越是看见你。我是一座孤岛，处在相思之水中，四面八方，隔绝我通向你。一千零一面镜子，转映着你的容颜，我从你开始，我在你结束。 </br> - </br>埃姆朗·萨罗希'}"
  );
  mingyan.push(
    "{'index':1361,'content':'如果雨之后还是雨，如果忧伤之后仍是忧伤，请让我从容面对这别离之后的别离。微笑地继续去寻找，一个不可能再出现的你。</br> - </br>《雨中的了悟》'}"
  );
  mingyan.push(
    "{'index':1381,'content':'如果有一天，你想起了一个人，以及和他在一起吃的食物。那个时候，你就知道，孤独的味道尝起来是如何的。 </br> - </br>村上龙'}"
  );
  mingyan.push(
    "{'index':1350,'content':'生活的担子从来都是一样重，你觉得轻松时，不过是多了个人替你扛，当一个选择离开，剩下的那个还得继续扛，而且还要扛住。所以，那个人来了或是没来，或是来过又走了，都没区别，你永远要时刻做好一个人扛着的准备。</br> - </br>郑执'}"
  );
  mingyan.push(
    "{'index':650,'content':'年轻时总以为能遇上许许多多的人。而后你就明白，所谓机缘，其实也不过那么几次。</br> - </br>《爱在日落黄昏时》'}"
  );
  mingyan.push(
    "{'index':745,'content':'我们终究都会和别人过上我们本来想要一起过的生活。分手是我们一步步走出彼此的梦。</br> - </br>淡豹'}"
  );
  mingyan.push(
    "{'index':958,'content':'我不知将去向何方，但我已在路上。</br> - </br>宫崎骏'}"
  );
  mingyan.push(
    "{'index':1137,'content':'你的人生永远不会辜负你的。那些转错的弯，那些走错的路，那些流下的泪水，那些滴下的汗水，那些留下的伤痕，全都让你成为独一无二的自己。</br> - </br>朱学恒'}"
  );
  mingyan.push(
    "{'index':1148,'content':'把光鲜的道理、礼貌的寒暄留给别人，把琐碎的废话都留给你。 </br> - </br>陶立夏'}"
  );
  mingyan.push(
    "{'index':301,'content':'我想，恋爱的最佳年龄大概在十六岁到二十一岁之间。</br> - </br>村上春树'}"
  );
  mingyan.push(
    "{'index':373,'content':'爱得不够，才借口多多。</br> - </br>亦舒'}"
  );
  mingyan.push(
    "{'index':761,'content':'人越长大越会明白，世界上有种最好的东西，叫得不到。</br> - </br>九夜茴《匆匆那年》'}"
  );
  mingyan.push(
    "{'index':634,'content':'我不希望有一天发现自己是在为了别人活，我愿意承担后果，就算偶尔寂寞甚至孤独而终，我都能接受。</br> - </br>《走出非洲》'}"
  );
  mingyan.push(
    "{'index':1009,'content':'爱一人，有时候甚至可以为他去死，但是却好像不可能从不怀疑、动摇、猜忌、怨恨，人天生就是反复多疑，这就注定了，很多事情往往只在一念之间。 </br> - </br>《朔云飞渡》'}"
  );
  mingyan.push(
    "{'index':474,'content':'你和那些好东西，总有一天会相遇。</br> - </br>环玥'}"
  );
  mingyan.push(
    "{'index':112,'content':'风拍小帘灯晕舞，对闲影，冷清清，忆旧游。 旧游旧游今在不？花外楼，柳下舟。梦也梦也，梦不到，寒水空流。</br> - </br>蒋捷《梅花引·荆溪阻雪》'}"
  );
  mingyan.push(
    "{'index':577,'content':'听着，依我说，最靠谱的事情是去找这么个人，他爱真实的你，好心情，坏心情，丑点儿，美点儿，帅点儿，放个屁他都找出点灿烂来，这样的人才值得你去跟。</br> - </br>《朱诺》'}"
  );
  mingyan.push(
    "{'index':170,'content':'既不能被安慰，也不能被夸，会尴尬。</br> - </br>沈大成'}"
  );
  mingyan.push(
    "{'index':642,'content':'仍然自由自我，永远高唱我歌，走遍千里。</br> - </br>《海阔天空》'}"
  );
  mingyan.push(
    "{'index':1092,'content':'在年轻的时候，在那些充满了阳光的长长的下午，我无所事事，也无所惧怕，只因为我知道，在我的生命里有一种永远的等待。挫折会来，也会过去，热泪会流下，也会收起。没有什么可以让我气馁，因为，我有着长长的一生，而你，你一定会来。</br> - </br>席慕容《写给幸福》'}"
  );
  mingyan.push(
    "{'index':133,'content':'世上的人可以分为两大类：一种人有朋友，另一种人很寂寞。</br> - </br>《黄金三镖客》'}"
  );
  mingyan.push(
    "{'index':386,'content':'真实的世界使我感兴趣，因为它是可塑的。</br> - </br>纪德'}"
  );
  mingyan.push(
    "{'index':1066,'content':'有走的理由，却愿意停留，才是爱的最好理由。</br> - </br>姚若龙'}"
  );
  mingyan.push(
    "{'index':238,'content':'世上只有一件事比被人议论更糟糕，那就是没有人议论你。</br> - </br>王尔德'}"
  );
  mingyan.push(
    "{'index':245,'content':'人一切的痛苦，本质上都是对自己的无能的愤怒。</br> - </br>王小波'}"
  );
  mingyan.push(
    "{'index':503,'content':'我今天才知道，我之所以漂泊就是在向你靠近。</br> - </br>《廊桥遗梦》'}"
  );
  mingyan.push(
    "{'index':1309,'content':'人有振作奋斗的时候，也有应该放弃的时候。一切已成事实，只有傻子才会执迷不悟，但事实上，我一直都是个傻子。</br> - </br>《大鱼》'}"
  );
  mingyan.push(
    "{'index':455,'content':'一个彻底诚实的人是从不面对选择的，那条路永远会清楚无二地呈现在你面前，这和你的憧憬无关，就像你是一棵苹果树，你憧憬结橘子，但是你还是诚实地结出苹果一样。</br> - </br>顾城'}"
  );
  mingyan.push(
    "{'index':45,'content':'我们容易被“孤零零”的意象吸引，却不愿和它们沾上半点关系。</br> - </br>贺伊曼'}"
  );
  mingyan.push(
    "{'index':791,'content':'“说，你除了吃还会什么？” “还会饿。” </br> - </br>夏正正'}"
  );
  mingyan.push(
    "{'index':669,'content':'没有秘密，我们就不是自己。</br> - </br>《纸牌屋》'}"
  );
  mingyan.push(
    "{'index':428,'content':'你从远方来，我到远方去，遥远的路程经过这里。天空一无所有，为何给我安慰？</br> - </br>海子《黑夜的献诗》'}"
  );
  mingyan.push(
    "{'index':1161,'content':'我钢筋铁骨，我刀枪不入，我杀出一条血路。不是我成熟了，是我知道“救命”喊得再大声，你都不会出现了。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':990,'content':'想得却不可得，你奈人生何。该舍的舍不得，只顾着跟往事瞎扯。 </br> - </br>李宗盛'}"
  );
  mingyan.push(
    "{'index':928,'content':'我们称之为路的，其实不过是彷徨。</br> - </br>卡夫卡'}"
  );
  mingyan.push(
    "{'index':1335,'content':'生活不是我们活过的日子，而是我们记住的日子，我们为了讲述而在记忆中重现的日子。 </br> - </br>《活着为了讲述》'}"
  );
  mingyan.push(
    "{'index':982,'content':'喜欢你的理由，因为是你，那就是你。除了这个还有别的理由吗？如果我能知道原因的话就好了，那就能找到不喜欢你的办法了。 </br> - </br>《请回答1997》'}"
  );
  mingyan.push(
    "{'index':1269,'content':'现在想想，最美妙的时刻不是热恋，而是有人忽然闯进你心里的那一瞬间。仿佛拥有了新的世界，叫人相信所有的剧本都是为你我而写。 </br> - </br>蒋话'}"
  );
  mingyan.push(
    "{'index':800,'content':'一见钟情的感觉是这样的：我们在很久以前就已经相爱，只是在相识的那一刻才刚刚见面。 </br> - </br>曹畅洲'}"
  );
  mingyan.push(
    "{'index':663,'content':'人生没有什么事情是给别人做的。工作不是为了老板，是为了自己长本事赚钱。变美不是为了另一半，是为了自己得瑟摇摆。所有的努力都是你自己的选择，所有的荣耀和耻辱、成长和眼泪都由自己来担。</br> - </br>琦殿'}"
  );
  mingyan.push(
    "{'index':362,'content':'对爱的人说心里话，不要等太久。</br> - </br>《双雄》'}"
  );
  mingyan.push(
    "{'index':788,'content':'有些人的生命没有风景，是因为他只在别人造好的、最方便的水管里流过来流过去。你不要理那些水管，你要真的流经一个又一个风景，你才会是一条河。</br> - </br>《有一天啊，宝宝》'}"
  );
  mingyan.push(
    "{'index':397,'content':'那些想看又没看的书，在心里摆满一座图书馆。</br> - </br>一蚊丁'}"
  );
  mingyan.push(
    "{'index':269,'content':'我们都是戏子，在别人的故事里，流着自己的眼泪。</br> - </br>席慕容'}"
  );
  mingyan.push(
    "{'index':970,'content':'我们都喜欢这光，虽然转瞬即逝。但你还是你，有我一喊就心颤的名字。</br> - </br>《风吹》'}"
  );
  mingyan.push(
    "{'index':894,'content':'以前总是担心自己长大后会怎么样。赚多少钱。会不会有一天出人头地。有时候你最是盼星星盼月亮的事儿就是不会发生，可意想不到的那些却自然而然地来了。我说不清楚为什么，你遇见过千百个人，而他们只不过是匆匆过客。接着你就邂逅了那么一个人，改变了你的生命直到永远。</br> - </br>《爱情与灵药》'}"
  );
  mingyan.push(
    "{'index':34,'content':'“喂，我还在路上。” </br> - </br>韩春萍'}"
  );
  mingyan.push(
    "{'index':77,'content':'我喜欢你是寂静的，仿佛你消失了一样。 </br> - </br>聂鲁达'}"
  );
  mingyan.push(
    "{'index':1206,'content':'要脸别谈心，自卑别谈情。 </br> - </br>大斯'}"
  );
  mingyan.push(
    "{'index':1359,'content':'当你身无分文时经历的世界更彻底。 </br> - </br>《巴黎伦敦落魄记》'}"
  );
  mingyan.push(
    "{'index':1071,'content':'你的快乐一直不缺观众，也愿你的无邪有人真懂。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':888,'content':'答案在最需要的时候总是不肯出现，而很多时候唯一可能的答案却是，你必须耐心等待。</br> - </br>若泽·萨拉马戈'}"
  );
  mingyan.push(
    "{'index':82,'content':'命运的事情我管不了，它干它的，我干我的，不过是相逢一笑泯恩仇。</br> - </br>周云蓬'}"
  );
  mingyan.push(
    "{'index':1116,'content':'爱应该有着诸多的条件和限制，爱需要双方无时无刻保持完美状态。无条件的爱是一种散漫无纪的爱，正如大家眼见的那样，散漫无纪的爱是一场灾难。 </br> - </br>《消失的爱人》'}"
  );
  mingyan.push(
    "{'index':285,'content':'如果不想浪费光阴的话，要么静下心来读点书，要么去赚点钱。</br> - </br>熊培云'}"
  );
  mingyan.push(
    "{'index':1002,'content':'我想当一个人的时候，我就失去了我自己。在你什么都不想要的时候，一切如期而至。</br> - </br>《执者失之》'}"
  );
  mingyan.push(
    "{'index':253,'content':'我一直以为人是慢慢变老的。其实不是，人是一瞬间变老的。</br> - </br>村上春树'}"
  );
  mingyan.push(
    "{'index':710,'content':'我的勇气和你的勇气加起来，对付这个世界总够了吧？去向世界发出我们的声音，我一个人是不敢的，有了你，我就敢。 </br> - </br>《爱你就像爱生命》'}"
  );
  mingyan.push(
    "{'index':934,'content':'一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。 </br> - </br>三毛'}"
  );
  mingyan.push(
    "{'index':585,'content':'人总会离开也总会在意想不到的时刻与某个人相遇，唯一不曾变的是我们刻意夸大了的心情，刻意宣泄的曾经。</br> - </br>吴念真'}"
  );
  mingyan.push(
    "{'index':1032,'content':'任性的人大多都幸福，所以才敢挥霍无度。 </br> - </br>刘同'}"
  );
  mingyan.push(
    "{'index':365,'content':'我没有时间讨厌你。</br> - </br>可可·香奈儿'}"
  );
  mingyan.push(
    "{'index':126,'content':'世界上有207个主权国家，大概有180个是自由的。</br> - </br>《新闻编辑室》'}"
  );
  mingyan.push(
    "{'index':1208,'content':'回忆都会褪色，平凡不时与我们相遇，但是总会有闪光的时刻让我们变得与众不同，让过去变得有迹可循，我愿意在那些时刻到来之时，放下日复一日和循规蹈矩，让庸常破功，赦免自己的孤独。 </br> - </br>大将军郭'}"
  );
  mingyan.push(
    "{'index':552,'content':'当我们相信自己对这个世界已经相当重要的时候，其实这个世界才刚准备原谅我们的幼稚。</br> - </br>《青春梦工场》'}"
  );
  mingyan.push(
    "{'index':293,'content':'比活着更可怕的是成熟，它用成功学这剂甜蜜的毒药让社会的大多数安静地腐烂。</br> - </br>内陆飞鱼'}"
  );
  mingyan.push(
    "{'index':55,'content':'今日东风西渡，文曲星闪烁。宜论功过，不宜下注。</br> - </br>马一木'}"
  );
  mingyan.push(
    "{'index':1319,'content':'最迷人的不是路，是被禁锢的自我与未知撞击的声音。 </br> - </br>陈坤·狂禅'}"
  );
  mingyan.push(
    "{'index':637,'content':'希望你可以记住我，记住我这样活过，这样在你身边呆过。</br> - </br>《挪威的森林》'}"
  );
  mingyan.push(
    "{'index':384,'content':'这个世界上肯定有另一个我，做着我不敢做的事，过着我想过的生活。</br> - </br>《蓝，另一种蓝》'}"
  );
  mingyan.push(
    "{'index':367,'content':'我一直觉得，自己同时在两个地方，既在这里，又在那里。</br> - </br>《维罗妮卡的双重生命》'}"
  );
  mingyan.push(
    "{'index':1057,'content':'相爱就是，无论是一米八还是两米二宽的床，我们都只睡一米。</br> - </br>肖诗瑶'}"
  );
  mingyan.push(
    "{'index':1317,'content':'所有爱情都需要有人注视它，承认它，赋予它价值，否则，它就可能被当作一个误会。 </br> - </br>《黑与银》'}"
  );
  mingyan.push(
    "{'index':315,'content':'青涩的岁月常常是一生人最缅念的岁月。</br> - </br>董桥'}"
  );
  mingyan.push(
    "{'index':836,'content':'真没想到我们在这样一个地方告别，但跟人告别的时候吧，还是得用力一点，因为你多说一句，说不定就是最后一句，多看一眼，弄不好就是最后一眼。</br> - </br>《后会无期》'}"
  );
  mingyan.push(
    "{'index':558,'content':'风还是一样地吹，花还是一样地开，太阳还是一样地升起，可是有些事情已经变得不一样了。</br> - </br>几米'}"
  );
  mingyan.push(
    "{'index':284,'content':'你学过的每一样东西，你遭受的每一次苦难，都会在你一生中某个时候派上用场。</br> - </br>菲茨杰拉德'}"
  );
  mingyan.push(
    "{'index':686,'content':'一个人就像一支队伍，对着自己的头脑和心灵招兵买马，不气馁，有召唤，爱自由。</br> - </br>刘瑜《送你一颗子弹》'}"
  );
  mingyan.push(
    "{'index':715,'content':'你觉得“我们从未在一起过”和“最后我们没有在一起”哪个更遗憾？</br> - </br>插班生杜明明'}"
  );
  mingyan.push(
    "{'index':1095,'content':'生命很短暂。在游戏，幻梦，谎言，戏剧，妄想之中，活在当下，这是唯一的意义。然后应该忘记，继续往前走。</br> - </br>安妮宝贝'}"
  );
  mingyan.push(
    "{'index':264,'content':'只有不快乐的人才想知道未来。</br> - </br>凯特·莫顿'}"
  );
  mingyan.push(
    "{'index':414,'content':'天真的人们能够爱——这就是他们的秘密。</br> - </br>赫尔曼•黑塞'}"
  );
  mingyan.push(
    "{'index':103,'content':'我愿意把我所有的科技去换取和苏格拉底相处的一个下午。</br> - </br>史蒂夫·乔布斯'}"
  );
  mingyan.push(
    "{'index':1169,'content':'当你昭告天下乞求关心的时候，得先做好受到冷遇的准备。人真正要学习的，是如何与冷遇相处。 </br> - </br>王路'}"
  );
  mingyan.push(
    "{'index':816,'content':'不要停止奔跑，不要回顾来路，来路无可眷恋，值得期待的只有前方。</br> - </br>《马男波杰克》'}"
  );
  mingyan.push(
    "{'index':1204,'content':'但愿你的旅途漫长，但愿你拥抱的人正泪流不止。但愿你付出的爱，有着某种恰到好处的形状，恰能完好地镶嵌在她的灵魂空缺处，毫厘不差。但愿你心底的关怀，杯满四溢，又正在被另一个孤独的灵魂渴望着。 </br> - </br>七堇年'}"
  );
  mingyan.push(
    "{'index':1346,'content':'我所理解的美好生活是，不做礼貌的禽兽，不做自由的走狗。 </br> - </br>马頔'}"
  );
  mingyan.push(
    "{'index':1280,'content':'人生不就是先进攻再撤退，中间夹上一句我爱你。</br> - </br>菲茨杰拉德'}"
  );
  mingyan.push(
    "{'index':540,'content':'我一直急着想学会骑车，我以为学会以后，爱去哪里就去哪里。现在会骑了，又不知道要去哪里了。</br> - </br>《光阴的故事·指望》'}"
  );
  mingyan.push(
    "{'index':24,'content':'有些人什么都不想给我，但我什么都想要。我是一个女儿。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':736,'content':'相爱的人们，上辈子大概只见过一面，所以这辈子要不断地再见，再见，直到不再见。</br> - </br>田艺苗'}"
  );
  mingyan.push(
    "{'index':326,'content':'回顾我有生以来的岁月，发现还是孤独的时间最多。我对世界呼喊了那么久，才知道自己的声带有问题，喊声的频率不对，没有人能听到。人生不就是如此吗？</br> - </br>和菜头'}"
  );
  mingyan.push(
    "{'index':1026,'content':'你曾经是一整个时代，事实上你永远是，那段生命历程永远属于你，为你发光，但我不再怀有难抑的热情、倾注我所有梦想地，想去征服你。 </br> - </br>贾彬彬'}"
  );
  mingyan.push(
    "{'index':244,'content':'只在尘世上走了一遭，我们既不能和前世相比，也无法对来世加以完善。</br> - </br>米兰•昆德拉'}"
  );
  mingyan.push(
    "{'index':106,'content':'花开堪折直须折，莫待无花空折枝。</br> - </br>杜秋娘'}"
  );
  mingyan.push(
    "{'index':1060,'content':'我是你夜里的太阳，也是你，影子里的悲伤。</br> - </br>陈绮贞'}"
  );
  mingyan.push(
    "{'index':911,'content':'在隆冬，我终于知道，我身上有一个不可战胜的夏天。 </br> - </br>加缪'}"
  );
  mingyan.push(
    "{'index':898,'content':'失去一个女人，就是这样。当你失去一个女人时，就好似失去了所有女人。 </br> - </br>《没有女人的男人们》'}"
  );
  mingyan.push(
    "{'index':922,'content':'除掉睡眠，人的一辈子只有一万多天。人与人的不同在于：你是真的活了一万多天，还是仅仅生活了一天，却重复了一万多次。 </br> - </br>费尔南多·佩索阿'}"
  );
  mingyan.push(
    "{'index':199,'content':'我爱你，但我更爱说谎。</br> - </br>飞机'}"
  );
  mingyan.push(
    "{'index':1349,'content':'大部分时候，所谓生活的抉择，无非就是选择要在一场古典悲剧里演一个执迷不悔的小丑，或是在一出肥皂剧里演一个愚蠢的没有悬念的英雄。 </br> - </br>马良'}"
  );
  mingyan.push(
    "{'index':840,'content':'我们自己心里的痛苦不会因为这个世界有更大或者更“值得”的痛苦而变得微不足道；它对别人也许微不足道，对我们自己，每一次痛苦都是绝对的，真实的，很重大，很痛。</br> - </br>龙应台'}"
  );
  mingyan.push(
    "{'index':749,'content':'无论你怎么与他人控制距离，你依然会失去控制，因为这个世界上总有人能让你乖乖交心和伤心。</br> - </br>韩寒《告白与告别》'}"
  );
  mingyan.push(
    "{'index':517,'content':'人生的一大挑战是，在一个丧失自我的世界中保持自我。 </br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':1225,'content':'要进入另一个人的孤独，是不可能的。如果我们真的可以逐渐认识另一个人，即使是很少的程度，也只能到他愿意被了解的程度为止。 </br> - </br>保罗·奥斯特'}"
  );
  mingyan.push(
    "{'index':512,'content':'似水流年才是一个人的一切，其余的全是片刻的欢娱和不幸。</br> - </br>王小波'}"
  );
  mingyan.push(
    "{'index':632,'content':'结局很美妙的事情，开头并非如此。 </br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':227,'content':'世界上最容易的事，就是和别人失去联系。</br> - </br>张彤禾'}"
  );
  mingyan.push(
    "{'index':1074,'content':'漂洋过海的来看你，为了这次相聚，我连见面时的呼吸，都曾反复练习，言语从来没能将我的情意，表达千万分之一。 </br> - </br>李宗盛'}"
  );
  mingyan.push(
    "{'index':279,'content':'说出来会被嘲笑的梦想，才有实现的价值。</br> - </br>九把刀'}"
  );
  mingyan.push(
    "{'index':1383,'content':'不为一段关系消磨和损耗，无论爱是多么值得歌颂的美德，都不值得你为此变成另一个人。答应我，要留住灵气，轻盈，要随时可以独自一人，暗夜里走路回家心里还哼着歌。答应我，要善待自己。 </br> - </br>吕彦妮'}"
  );
  mingyan.push(
    "{'index':250,'content':'等到达彼岸，至少我们知道曾并肩走过。</br> - </br>加思·斯坦'}"
  );
  mingyan.push(
    "{'index':1237,'content':'有时觉得，自己正在经历人生中最幸福的岁月，但只把这种感觉存放在脑海的一个角落里，因为担心，如果总想着自己幸福，就可能失去它。 </br> - </br>《我脑袋里的怪东西》'}"
  );
  mingyan.push(
    "{'index':735,'content':'用我一生，再换你十年天真无邪。</br> - </br>南派三叔'}"
  );
  mingyan.push(
    "{'index':933,'content':'我们共用的那个太阳，已经很老了吧；我们共用的风，却是新鲜的。</br> - </br>张怡微'}"
  );
  mingyan.push(
    "{'index':925,'content':'自从我们相遇的那一刻， 你是我白天黑夜不落的星。 </br> - </br>莱蒙托夫《乌黑的眼睛》'}"
  );
  mingyan.push(
    "{'index':1229,'content':'飘零做归宿，爱无法解读，有些话不说因为于事无补。 </br> - </br>傅首尔'}"
  );
  mingyan.push(
    "{'index':1158,'content':'我们的唇必定是一朵梅花的两半，所以你该来吻我，或者我该去吻你。没人能把一朵梅花劈开，再让她孤零零落在土里。 </br> - </br>骆瑞生'}"
  );
  mingyan.push(
    "{'index':841,'content':'月亏了能再盈，花谢了能再开。可是，人别了，能否再见却未可知。</br> - </br>周国平'}"
  );
  mingyan.push(
    "{'index':1341,'content':'也许我们终其一生要做的并非是为了占有什么或者赢得什么，而是为了克服，克服自己，克服时代，或是克服自身天性中的局限。好好谈一场情是为了认清自己，努力做一件事是想要冲破限制。某种程度上来说，克服，即是意义。 </br> - </br>吕彦妮'}"
  );
  mingyan.push(
    "{'index':98,'content':'孤独守着看不见的你，或者孤独失去守不住的你。爱情，怎么可能会没有悲伤。</br> - </br>金丹华。'}"
  );
  mingyan.push(
    "{'index':1155,'content':'我要在你平庸无奇的回忆里，做一个闪闪发光的神经病。 </br> - </br>马良'}"
  );
  mingyan.push(
    "{'index':234,'content':'在这一小段时空里，我们交付了彼此的孤独，又用信任填补了它。</br> - </br>帕蒂•史密斯'}"
  );
  mingyan.push(
    "{'index':742,'content':'在这世上，有些东西是石头无法刻成的，在我们心里，有一块地方是无法锁住的，那块地方叫做希望。</br> - </br>《肖申克的救赎》'}"
  );
  mingyan.push(
    "{'index':380,'content':'如果爱必须用言语表达，那么哑巴如何相爱？</br> - </br>《比悲伤更悲伤的故事》'}"
  );
  mingyan.push(
    "{'index':675,'content':'很多人害怕独处，一旦不处于热闹中，便觉得整个世界要抛弃他去寻欢作乐。那是一种自我逃避。有时候，人越多反而越寂寞，那是一种折磨。善待自己，只有傻瓜才煞费苦心地自虐。</br> - </br>祝小兔'}"
  );
  mingyan.push(
    "{'index':515,'content':'爱就是一个你压根找不到优点的人，在你心里迷了路，自说自话地停在了最柔软的那个地方。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':123,'content':'你要知道，你的头脑，你的内心，不是酒店的厨房，可以把里面的东西像旧罐头一样扔掉。它更像是一条河流，每时每刻都在流动和变化。你无法矫直一条河流。</br> - </br>伊恩·麦克尤恩'}"
  );
  mingyan.push(
    "{'index':1292,'content':'与其因为泯然众人而惶恐不已，不如在众生中觅得自我，学会接受最普通的生活。 </br> - </br>傅踢踢'}"
  );
  mingyan.push(
    "{'index':1162,'content':'说一辈子简单，过一辈子太难。年轻的嘴唇说出天长地久，如此的美好与荒唐。</br> - </br>路明'}"
  );
  mingyan.push(
    "{'index':204,'content':'在那做梦的人的梦中，被梦见的人醒了。</br> - </br>博尔赫斯'}"
  );
  mingyan.push(
    "{'index':1091,'content':'我觉得最大的孤独是：行走在如此密集的人群中却没有一个人可以倾诉。 </br> - </br>俞敏洪'}"
  );
  mingyan.push(
    "{'index':919,'content':'我要在你身上做，春天对樱桃树做的事。</br> - </br>聂鲁达'}"
  );
  mingyan.push("{'index':1119,'content':'三年了。 </br> - </br>一个工作室'}");
  mingyan.push(
    "{'index':744,'content':'任何一种环境或一个人，初次见面就预感到离别的隐痛时，你必定是爱上他了。</br> - </br>《沿着塞纳河到翡冷翠》'}"
  );
  mingyan.push(
    "{'index':555,'content':'得到了再失去，总比从来就没有得到更伤人。</br> - </br>《追风筝的人》'}"
  );
  mingyan.push(
    "{'index':249,'content':'你欢笑，这世界陪你一起欢笑；你哭泣，却只能独自黯然神伤。</br> - </br>埃拉·惠勒·威尔科克斯'}"
  );
  mingyan.push(
    "{'index':385,'content':'我常常思考为何鸟儿拥有整片天空，却老是停留在一个地方。然后我问了自己同样的问题。</br> - </br>Harun Yahya'}"
  );
  mingyan.push(
    "{'index':149,'content':'如果你反复被人需要，你基本是一个善良的人。</br> - </br>小饭'}"
  );
  mingyan.push(
    "{'index':619,'content':'我们听过无数的道理，却仍旧过不好这一生。</br> - </br>《后会无期》'}"
  );
  mingyan.push(
    "{'index':110,'content':'每个人都是自己的神，爱你者的神，你所支配的世界里的神。</br> - </br>《我所理解的生活》'}"
  );
  mingyan.push(
    "{'index':827,'content':'我曾赤诚天真地爱过你，除了伤心难过，一无所得。若干年后我想起，能够说出“我曾赤诚天真地爱过一个人”，这是一生之中，我最为安慰的事情。 </br> - </br>葛婉仪'}"
  );
  mingyan.push(
    "{'index':444,'content':'所有漂泊的人生都梦想着平静、童年、杜鹃花，正如所有平静的人生都幻想伏特加、乐队和醉生梦死。 </br> - </br>萨冈'}"
  );
  mingyan.push(
    "{'index':91,'content':'男人也好，女人也好，如果没有自己过好日子的能力，那他也没有和别人过好日子的能力。</br> - </br>梁文道'}"
  );
  mingyan.push(
    "{'index':189,'content':'如果看不清自己，就看看身边的人。你只是你周围的事物。</br> - </br>《亲爱的野兽先生》'}"
  );
  mingyan.push(
    "{'index':1037,'content':'高兴就又跑又跳，悲伤就又哭又喊，那是上野动物园猴子干的事。笑在脸上，哭在心里，说出心里相反的语言，做出心里相反的脸色，这才叫人哪。</br> - </br>小津安二郎'}"
  );
  mingyan.push(
    "{'index':1043,'content':'分别是，从此就一个人站在茫茫人群中，一个人站在世界上。我的每句话、每件事，都不能再说给你听。 </br> - </br>苏更生'}"
  );
  mingyan.push(
    "{'index':1379,'content':'爱情大概是这世上最变化多端也最循规蹈矩的存在，一开始只想多看你一眼，于是想每天看你很多遍，于是只想一个人看你很多遍，于是占有，争执，绑架，歇斯底里，于是我们都忘了，一开始我只想多看你一眼。</br> - </br>郑执'}"
  );
  mingyan.push(
    "{'index':900,'content':'我终于感到，我们之间的全部通信只是一个大大的幻影，我们每人只是在给自己写信。我深刻地爱着你，但却绝望地不得不承认：当你远离我时，我爱你更深。</br> - </br>纪德《窄门》'}"
  );
  mingyan.push(
    "{'index':946,'content':'现在过的每一天，都是余生中最年轻的一天。 </br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':554,'content':'我爱你不是因为你是谁，而是我在你面前可以是谁。</br> - </br>《剪刀手爱德华》'}"
  );
  mingyan.push(
    "{'index':565,'content':'在硝烟中想起冰棒汽水的味道，和那些无所事事一整个夏天的年少。</br> - </br>《最后的战役》'}"
  );
  mingyan.push(
    "{'index':942,'content':'所以要等，所以要忍，一直要到春天过去，到灿烂平息，到雷霆把他们轻轻放过，到幸福不请自来，才笃定，才坦然，才能在街头淡淡一笑。春有春的好，春天过去，有过去的好。 </br> - </br>韩松落 《我们的她们》'}"
  );
  mingyan.push(
    "{'index':939,'content':'冰啤酒只有第一口好喝，香烟只有第一口好闻，人生若只如初见俗套而准确，你该把我扔掉，在序幕结束，在所有量多的第二天。</br> - </br>嚜子'}"
  );
  mingyan.push(
    "{'index':972,'content':'仰望星空，我想知道：有人正从世界的某个地方朝我走来吗？ 像光那样，从一颗星达到另外一颗星。</br> - </br>几米'}"
  );
  mingyan.push(
    "{'index':97,'content':'地震时天空很安全，伴侣很安全，喝醉时酒杯很安全，心很安全。</br> - </br>海子'}"
  );
  mingyan.push(
    "{'index':290,'content':'你每天都在做很多看起来毫无意义的决定,但某天你的某个决定就能改变你的一生。</br> - </br>《西雅图夜未眠》'}"
  );
  mingyan.push(
    "{'index':662,'content':'这是一个流行离开的世界，但是我们都不擅长告别。</br> - </br>米兰·昆德拉'}"
  );
  mingyan.push(
    "{'index':389,'content':'回忆本来是非常美好的，只要你能让过去的都过去。</br> - </br>《爱在黄昏日落时》'}"
  );
  mingyan.push(
    "{'index':358,'content':'所有的光鲜亮丽都敌不过时间，并且一去不复返。</br> - </br>《了不起的盖茨比》'}"
  );
  mingyan.push(
    "{'index':1103,'content':'我们过得不快乐，一部分原因是我们不够诚恳。敢爱敢恨不容易，跨过人潮拥抱你和不顾一切撕破脸皮都需要勇气。 </br> - </br>咸贵人'}"
  );
  mingyan.push(
    "{'index':1031,'content':'我们都爱过注定不会爱我们的人，这没什么，因为总有那么一天，我们会突然发现原来自己这么多年不过是钻牛角尖而已，我们对往事的种种不忿，只是觉得自己受了委屈。 </br> - </br>王云超'}"
  );
  mingyan.push(
    "{'index':419,'content':'等待的姿势里，人们模样各不相同。而我倒情愿你能带着笑坐在长椅上，剥一颗橘子，哼一段曲，不必忧虑，不必前后张望。因为你知道，等的那列火车一定会来，纵使满身尘嚣，纵使山高水长。</br> - </br>段劈柴'}"
  );
  mingyan.push(
    "{'index':874,'content':'那些固然很好，可我不想要，你不必劝；这些我不喜欢，但你心仪，我绝不出言扫兴。 </br> - </br>八月长安'}"
  );
  mingyan.push(
    "{'index':828,'content':'不在任何东西面前失去自我，哪怕是教条，哪怕是别人的目光，哪怕是爱情。</br> - </br>《成为简·奥斯汀》'}"
  );
  mingyan.push(
    "{'index':1016,'content':'并不顾忌表达不开心，才算得上真的过得开心。 </br> - </br>方慧'}"
  );
  mingyan.push(
    "{'index':349,'content':'我们能做的，仅仅是在这条路上走得更远，绝不能回头。天堂未必在前方，但地狱一定在身后。</br> - </br>程浩'}"
  );
  mingyan.push(
    "{'index':1182,'content':'一无所知的人什么都不爱。一无所能的人什么都不懂。什么都不懂的人是毫无价值的。但是懂得很多的人，却能爱，有见识，有眼光……对一件事了解得越深，爱的程度也越深。 </br> - </br>巴拉塞尔士'}"
  );
  mingyan.push(
    "{'index':1273,'content':'我想爱情里最残忍的部分是，在狂热的时候，觉得可以为他做一切，摘星星射太阳赚大钱跳悬崖，但总有一天，你发现自己并不能。所有嘴上的我爱你，变成了心里的凭什么。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':154,'content':'我从没被谁知道，所以也没被谁忘记。在别人的回忆中生活，并不是我的目的。 </br> - </br>顾城'}"
  );
  mingyan.push(
    "{'index':157,'content':'坏情绪是打不死的，但摸摸他的头，他就会安静地睡过去。</br> - </br>琦殿'}"
  );
  mingyan.push(
    "{'index':1062,'content':'成熟意味着看到差异，但又意识到差异并不重要。 </br> - </br>特德·姜'}"
  );
  mingyan.push(
    "{'index':830,'content':'人不曾老去，直到悔恨取代了梦想。</br> - </br>约翰·巴里摩'}"
  );
  mingyan.push(
    "{'index':1004,'content':'我愿意舍弃一切，以想念你终此一生。 </br> - </br>朱生豪'}"
  );
  mingyan.push(
    "{'index':869,'content':'你最愿意做的那件事，才是你真正的天赋所在。</br> - </br>摩西奶奶'}"
  );
  mingyan.push(
    "{'index':60,'content':'世界上最强有力的人就是那最孤立的人。</br> - </br>胡适'}"
  );
  mingyan.push(
    "{'index':724,'content':'秋天该很好，你若尚在场。</br> - </br>张国荣《春夏秋冬》'}"
  );
  mingyan.push(
    "{'index':139,'content':'岁月掩不住爹娘淳朴的笑容，梦中的姑娘依然长发迎空。</br> - </br>罗大佑《鹿港小镇》'}"
  );
  mingyan.push(
    "{'index':252,'content':'青春是一个短暂的美梦，当你醒来时，它早已消失无踪。</br> - </br>莎士比亚'}"
  );
  mingyan.push(
    "{'index':1283,'content':'小时候收到人家送的巧克力总是小心翼翼地藏在口袋里 ，最后全都融化。长大后见多了不经意间路过的风景，无意间抿到的美酒，没有留下电话号码的人。学会了从第一眼到最后一眼，好好享用，把人爱够，把酒喝光，不去瞻前顾后。学会了在最快乐时说，我们干了这杯，不为什么，就现在。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':1198,'content':'我从小就怕热闹，现在也依然，因为热闹之后必有冷清，它们格外的会令我感到人生如梦。 </br> - </br>朱天心'}"
  );
  mingyan.push(
    "{'index':1163,'content':'无论听来多么平凡的爱情，那都是属于他们的、独一无二的史诗，是他们自己的桃花源传说。 </br> - </br>张佳玮《爱情故事》'}"
  );
  mingyan.push(
    "{'index':313,'content':'别让心房沾染尘埃，要一种干净的相爱。</br> - </br>王菲《云端》'}"
  );
  mingyan.push(
    "{'index':657,'content':'你发现说真话容易犯错，便不再说话；你发现愤怒、轻视与得意时都会影响人际关系，便省略表情；你发现手舞足蹈会影响形象，便不再做任何夸张动作——你终于活得如同一部人类学行为规范，去掉了表情，隐藏了情绪，不带一丝人气，成了橡皮人。</br> - </br>《我的病就是没有感觉》'}"
  );
  mingyan.push(
    "{'index':859,'content':'别灰心啦，人生不就是这样吗？起起落落落落落落落落落落落落的。</br> - </br>丁丁张'}"
  );
  mingyan.push(
    "{'index':754,'content':'如果有更美的风景，更多不需要妥协的选择，如果能这样热切地过每一天。</br> - </br>陈绮贞'}"
  );
  mingyan.push(
    "{'index':164,'content':'没有比远去的苦难更甜蜜的事了。</br> - </br>铁头'}"
  );
  mingyan.push(
    "{'index':237,'content':'抛弃你的逻辑，跟随你的感受。</br> - </br>《星际迷航》'}"
  );
  mingyan.push(
    "{'index':19,'content':'“正常”就是一种缺陷。很多例子都告诫我，有点问题比没有问题好很多。 </br> - </br>何禾'}"
  );
  mingyan.push(
    "{'index':142,'content':'与人相处，或许参考天体力学是一个好办法，因为天上的星星们一直很融洽。</br> - </br>何禾'}"
  );
  mingyan.push(
    "{'index':506,'content':'长日尽处，我站在你的面前，你将看到我的伤痕，知道我曾经受伤，也曾经痊愈。 </br> - </br>泰戈尔'}"
  );
  mingyan.push(
    "{'index':1337,'content':'在我们的一生中，遇到爱，遇到性都不稀罕，稀罕的是遇到了解。 </br> - </br>廖一梅'}"
  );
  mingyan.push(
    "{'index':1184,'content':'后来我不再去谈论理想和现实，因为我相信对于真正优秀的人来说，它们是一样的。 </br> - </br>熊德启'}"
  );
  mingyan.push(
    "{'index':409,'content':'世界以痛吻我，要我报之以歌。</br> - </br>泰戈尔'}"
  );
  mingyan.push(
    "{'index':1323,'content':'所谓青春就是尚未得到某种东西的状态，就是渴望的状态，憧憬的状态，也是具有可能性的状态。他们眼前展现着人生广袤的原野和恐惧，尽管他们还一无所有，但他们偶尔也能在幻想中具有一种拥有一切的感觉。</br> - </br>三岛由纪夫'}"
  );
  mingyan.push(
    "{'index':1353,'content':'我们总是喜欢拿“顺其自然”来敷衍人生道路上的荆棘坎坷，却很少承认，真正的顺其自然，其实是竭尽所能之后的不强求，而非两手一摊的不作为。 </br> - </br>瑞卡斯'}"
  );
  mingyan.push(
    "{'index':447,'content':'这世上一定还藏着很多很多只要坚持寻找，就能找到的东西。</br> - </br>小川糸'}"
  );
  mingyan.push(
    "{'index':62,'content':'残酷有一颗人的心，嫉妒有一张人的脸。</br> - </br>威廉•布莱克'}"
  );
  mingyan.push(
    "{'index':1255,'content':'你说世界很大，总有展翅的地方，那是游乐场，那里有梦想。我说世界再大，没有你在的地方，不过是寂寞，寂寞的流浪。</br> - </br>《只怕不够时间看你白头》'}"
  );
  mingyan.push(
    "{'index':125,'content':'当头发已斑白的时候，你是否还依然能牢记我。</br> - </br>陈升《然而》'}"
  );
  mingyan.push(
    "{'index':870,'content':'在这个世界上，再也没有比置身于人群之中，却又得孤独生活更可怕的事了。 </br> - </br>斯蒂芬·茨威格'}"
  );
  mingyan.push(
    "{'index':711,'content':'你涉世未深，所以你与众不同。</br> - </br>叶辰'}"
  );
  mingyan.push(
    "{'index':839,'content':'所有你乐于挥霍的时间都不能算作是浪费。</br> - </br>约翰·列侬'}"
  );
  mingyan.push(
    "{'index':482,'content':'等待亦是约会的一部分。</br> - </br>古贺春华'}"
  );
  mingyan.push(
    "{'index':931,'content':'一个人对幸福的全部的感受，就蕴藏在一个吻和一次散步，就在对晚餐和读一本书的期待之中。 </br> - </br>迈克尔·坎宁安'}"
  );
  mingyan.push(
    "{'index':756,'content':'我心中已经听到来自远方的呼唤，再不需要回过头去关心身后的种种是非与议论。我已无暇顾及过去，我要向前走。</br> - </br>米兰·昆德拉'}"
  );
  mingyan.push(
    "{'index':147,'content':'破的城市，平淡日子，他要不停寻找着，生活的刺。</br> - </br>韩寒《空城计》'}"
  );
  mingyan.push(
    "{'index':615,'content':'从来，爱不知道自己的深度，直到别离的时刻。</br> - </br>纪伯伦'}"
  );
  mingyan.push(
    "{'index':758,'content':'一个人逛街，一个人吃饭，一个人旅行，一个人做很多事。一个人的日子固然寂寞，但更多时候是因寂寞而快乐。极致的幸福，存在于孤独的深海。在这样日复一日的生活里，我逐渐与自己达成和解。</br> - </br>《然后，我就一个人了》'}"
  );
  mingyan.push(
    "{'index':964,'content':'我妈妈总有办法搞定一切，我总有办法搞砸一切。 </br> - </br>《麦兜我和我妈妈》'}"
  );
  mingyan.push(
    "{'index':1025,'content':'用笔写一句我爱你，胜过一万个微信表情。 </br> - </br>ONE BOX 《无用之诗》'}"
  );
  mingyan.push(
    "{'index':904,'content':'那些真正发生过的事，或许不在这世上而在我们内心。</br> - </br>陶立夏'}"
  );
  mingyan.push(
    "{'index':402,'content':'希望是件好东西，也许是世上最好的东西。好东西从来不会流逝。</br> - </br>《肖申克的救赎》'}"
  );
  mingyan.push(
    "{'index':1115,'content':'世界让我挫败，我还舍不得离开。</br> - </br>《奥丽芙·基特里奇》'}"
  );
  mingyan.push(
    "{'index':1207,'content':'谁都不要告诉好吗？清晨庭院的角落里，花儿悄悄掉眼泪的事。 </br> - </br>《给孩子读诗》'}"
  );
  mingyan.push(
    "{'index':1256,'content':'用可以想到的一切方法都无法取悦一个人，那只能放弃，这就是最好的取悦。 </br> - </br>《自由》'}"
  );
  mingyan.push(
    "{'index':895,'content':'我宁愿因做自己而招人厌恶，也不愿为了迎合他人而伪装自己。</br> - </br>科特·柯本'}"
  );
  mingyan.push(
    "{'index':1272,'content':'有时候女人买衣服、买鞋子、买包包，买的就是对自己的幻想。 </br> - </br>苏更生'}"
  );
  mingyan.push(
    "{'index':203,'content':'如何让一滴水永不干涸，答案是让它流入大海。</br> - </br>释迦牟尼'}"
  );
  mingyan.push(
    "{'index':937,'content':'所谓幸福，是在于认识一个人的界限而爱这个界限。 </br> - </br>《约翰·克里斯朵夫》'}"
  );
  mingyan.push("{'index':30,'content':'很高兴又见到你。</br> - </br>韩寒'}");
  mingyan.push(
    "{'index':270,'content':'愿你被很多人爱，如果没有，愿你在寂寞中学会宽容。</br> - </br>刘瑜'}"
  );
  mingyan.push(
    "{'index':977,'content':'真正的输家是那些害怕失败，连尝试都不敢尝试的人。</br> - </br>《阳光小美女》'}"
  );
  mingyan.push(
    "{'index':257,'content':'时间从来不回答，生命从来不喧哗。</br> - </br>吴青峰'}"
  );
  mingyan.push(
    "{'index':612,'content':'曾经以为生命中最糟糕的事，就是孤独终老。其实不是。最糟糕的是与那些让你感到孤独的人一起终老。</br> - </br>《世界上最伟大的父亲》'}"
  );
  mingyan.push(
    "{'index':443,'content':'人之所以悲哀，是因为我们留不住岁月，更无法不承认，青春，有一日是要这么自然的消失过去。</br> - </br>三毛'}"
  );
  mingyan.push(
    "{'index':1354,'content':'人虽然渺小，人生虽然短促，但是人能学，人能修身，人能自我完善，人的可贵在人自身。 </br> - </br>杨绛'}"
  );
  mingyan.push(
    "{'index':1266,'content':'有时候我在清晨醒来，我的灵魂甚至还是湿的，远远的，海洋鸣响并且发出回声，这是一个港口，我在这里爱你。 </br> - </br>聂鲁达'}"
  );
  mingyan.push(
    "{'index':1238,'content':'永远都不要为了目的而忘了初衷。就像给风命名的，不是它要去的方向，而是它来时的方向。 </br> - </br>夏正正'}"
  );
  mingyan.push(
    "{'index':621,'content':'我们知道他们在演戏，他们也知道自己在演戏，他们也知道我们知道他们在演戏，我们也知道他们知道我们知道他们在演戏。</br> - </br>佚名'}"
  );
  mingyan.push(
    "{'index':597,'content':'每个孩子来到世上都有自己的使命，其中之一，就是帮助父母成长为更好的生命。 </br> - </br>《下乡养儿》'}"
  );
  mingyan.push(
    "{'index':274,'content':'我们曾经互相拥抱，认为能忘记世界的荒芜。</br> - </br>安妮宝贝'}"
  );
  mingyan.push(
    "{'index':708,'content':'人生最可怕的事，是一边后悔一边生活。</br> - </br>《55岁开始的Hello Life》'}"
  );
  mingyan.push(
    "{'index':1382,'content':'只有少数特别幸运的人生来就自信满满，多数的你我，一辈子，最幸运的事，就是遇见个把赏识你的人，把你于不自信的苍茫之中叫醒，让你发现，原来我也并非一无是处。 </br> - </br>《男人相对论》'}"
  );
  mingyan.push(
    "{'index':302,'content':'好的爱情是你通过一个人看到整个世界，坏的爱情是你为了一个人舍弃世界。</br> - </br>《两小无猜》'}"
  );
  mingyan.push(
    "{'index':1368,'content':'喜欢就是，夏天可真棒，可以吃冰玩水，坐在海边看书打发时光，一刀劈开一个西瓜一人一半，吹着晚上七八点钟的风闲逛在街上，那么开心，谁也找不到散场回家的理由。而爱呢，是我和夏天挥手告别，小声告诉它，我爱上一个人，纵然如此喜欢你，我还是想陪他去秋冬春看一看。</br> - </br>张晓晗'}"
  );
  mingyan.push(
    "{'index':403,'content':'每一个黄昏，都有我爱你的影子。</br> - </br>jaycee'}"
  );
  mingyan.push(
    "{'index':527,'content':'很久很久没你的消息，就像很久很久没晴朗的城市。</br> - </br>薛诗汉'}"
  );
  mingyan.push(
    "{'index':115,'content':'尽管有天我们会变老，老得可能都模糊了眼睛，但是我要写出人间最美丽的歌送给你。</br> - </br>陈升《不再让你孤单》【往期精选】'}"
  );
  mingyan.push(
    "{'index':1265,'content':'在这世界上我不想占有任何东西，我知道没有一个人值得我嫉妒。 </br> - </br>米沃什'}"
  );
  mingyan.push(
    "{'index':940,'content':'春风沉醉的夜晚，遇见过你，从此东西南北风一样了，清晨也是夜晚了，不想你也是想你了。</br> - </br>郑执'}"
  );
  mingyan.push(
    "{'index':848,'content':'等你发现时间是贼了，它早已偷光你的选择。</br> - </br>李宗盛'}"
  );
  mingyan.push(
    "{'index':143,'content':'我们的生命是不朽的，我们所说的话，所做的事，将会影响我们的每一次人生。</br> - </br>《云图》'}"
  );
  mingyan.push(
    "{'index':518,'content':'你走，我不送你。你来，无论多大风多大雨，我要去接你。</br> - </br>梁实秋'}"
  );
  mingyan.push(
    "{'index':477,'content':'没有任何事物能被遗忘，能被丢失。宇宙本身就是一个巨大的记忆系统。往回看，你能发现世界的开端。 </br> - </br>珍妮特·温特森'}"
  );
  mingyan.push(
    "{'index':771,'content':'努力想得到什么东西，其实只要沉着镇静、实事求是，就可以轻易地、神不知鬼不觉地达到目的。而如果过于使劲，闹得太凶，太幼稚，太没有经验，就哭啊，抓啊，拉啊，像一个小孩扯桌布，结果却是一无所获，只不过把桌上的好东西都扯到地上，永远也得不到了。</br> - </br>卡夫卡'}"
  );
  mingyan.push(
    "{'index':300,'content':'人常犯的错，就是花费时间去在乎不怎么在乎你的人。</br> - </br>吴青峰'}"
  );
  mingyan.push(
    "{'index':811,'content':'对相爱的人来说，对方的心才是最好的房子。</br> - </br>村上春树'}"
  );
  mingyan.push(
    "{'index':509,'content':'我们不远万里去寻求的东西，常常就在我们触手可及的地方。</br> - </br>卡莉娜·斯蒂芬诺娃'}"
  );
  mingyan.push(
    "{'index':208,'content':'有很长的路要走的时候，反倒不能太用力。</br> - </br>老古竹斋'}"
  );
  mingyan.push(
    "{'index':46,'content':'敏感而拙言的人们，盈积了全宇宙的辛酸与秘密。</br> - </br>张冠仁'}"
  );
  mingyan.push(
    "{'index':991,'content':'我们命中注定要失去所爱之人，不然我们怎么知道，他们在我们生命中有多重要？</br> - </br>《返老还童》'}"
  );
  mingyan.push(
    "{'index':96,'content':'我注意过，即使是那些声称“一切都是命中注定的，而且我们无力改变”的人，在过马路前都会左右看。</br> - </br>史蒂芬·霍金'}"
  );
  mingyan.push(
    "{'index':263,'content':'人的自由并不仅仅在于做他愿意做的事，而在于永远不做他不愿意做的事。</br> - </br>卢梭'}"
  );
  mingyan.push(
    "{'index':354,'content':'所谓父女母子一场，只不过意味着，你和他的缘分就是今生今世不断地在目送他的背影渐行渐远。</br> - </br>龙应台'}"
  );
  mingyan.push(
    "{'index':1083,'content':'我们都是突然长大。那个瞬间，在无可挽回的事实前，学会了从容不迫；在大势所趋时，学会了不动声色。开始保守地给予，迅速地放弃，游刃有余地周旋。在那些众口一辞的节日里，将最好的情感夹杂在寻常祝福中，试图蒙蔽隐秘的初衷。 </br> - </br>姬霄'}"
  );
  mingyan.push(
    "{'index':145,'content':'虽然我不是主打歌，但我是B面第一首。</br> - </br>《女朋友·男朋友》'}"
  );
  mingyan.push(
    "{'index':774,'content':'所有的大人都曾经是小孩，虽然，只有少数的人记得。</br> - </br>《小王子》'}"
  );
  mingyan.push(
    "{'index':86,'content':'当你年轻时，以为什么都有答案，可是老了的时候，你可能又觉得其实人生并没有所谓的答案。 </br> - </br>《堕落天使》'}"
  );
  mingyan.push(
    "{'index':289,'content':'如果我们没有才华，那努力就足以使我们幸福了。</br> - </br>朱肖影《喜欢，就继续下去》'}"
  );
  mingyan.push(
    "{'index':700,'content':'不管你曾经被伤害得有多深，总会有一个人的出现，让你原谅之前生活对你所有的刁难。</br> - </br>宫崎骏《幽灵公主》'}"
  );
  mingyan.push(
    "{'index':99,'content':'人的注意力是一把匕首，不是插在别人的胸膛就是揣在自己的腰间。</br> - </br>何禾'}"
  );
  mingyan.push(
    "{'index':1168,'content':'此刻当你陷入黑暗的绝境，才懂光明多遥不可及。 </br> - </br>何洁'}"
  );
  mingyan.push(
    "{'index':812,'content':'如果我们能接着进化，进化到不用说话，就可以知道对方的心思，头顶上的红、蓝箭头一目了然，那该有多好。说到一半的话，也能知道什么意思。 可是，我们都太不成熟，互相伤害，只能带着一脸生涩的笑容天真地走下去。 </br> - </br>市川拓司'}"
  );
  mingyan.push(
    "{'index':1300,'content':'自以为用这颗小小的心脏包裹住了波澜壮阔，给这片山川湖海围上了栅栏，不放出那匹脱缰野马，这样就不会有人从我假意的冷淡里，拎出些滚烫的秘密。 </br> - </br>陈大力'}"
  );
  mingyan.push(
    "{'index':1347,'content':'未曾身临绝境，真是不知道爱究竟是什么样的东西。它可以让你那么温暖，也可以让你那么锋利，可以让你那么宽容，也可以让你那么自私。 </br> - </br>《四幕戏》'}"
  );
  mingyan.push(
    "{'index':1124,'content':'如果没有天赋的话，其实好人比坏人好做。</br> - </br>张怡微'}"
  );
  mingyan.push(
    "{'index':159,'content':'生活总在不经意的时候泼你满头满脸的狗血，没关系，我还是会回你一个血色狰狞的笑。</br> - </br>Double青'}"
  );
  mingyan.push(
    "{'index':561,'content':'你一直是我生命中永远都不可能重复的一场遭遇。 </br> - </br>安·兰德'}"
  );
  mingyan.push(
    "{'index':905,'content':'爱是一种力量，让我们超越时空的维度感知它的存在。</br> - </br>《星际穿越》'}"
  );
  mingyan.push(
    "{'index':1357,'content':'世界没有悲剧和喜剧之分，如果你能从悲剧中走出来，那就是喜剧；如果你沉缅于喜剧之中，那它就是悲剧。 </br> - </br>上德若谷'}"
  );
  mingyan.push(
    "{'index':1233,'content':'明知分离苦，相遇也难挡得住。难在不愿放弃遇见，难在没有勇气道别，这就是人生。</br> - </br>符嘉超'}"
  );
  mingyan.push(
    "{'index':610,'content':'你爱上一个人的那个瞬间，是会永远永远留在心里的，这瞬间，便是生活的勇气，便是黑夜里点亮的一盏明灯。</br> - </br>《东京爱情故事》'}"
  );
  mingyan.push(
    "{'index':829,'content':'人世就是这样，会静静地突然想到忽略了极熟的东西。我有个朋友一天忽然说，好久没有吃醋了，当即到小铺里买了一瓶山西老陈醋，坐在街边喝，喝得眼泪流出来。</br> - </br>阿城'}"
  );
  mingyan.push(
    "{'index':769,'content':'人不应该是插在花瓶里供人观赏的静物，而是蔓延在草原上随风起舞的韵律。生命不是安排，而是追求，人生的意义也许永远没有答案，但也要尽情感受这种没有答案的人生。</br> - </br>弗吉尼亚·伍尔芙'}"
  );
  mingyan.push(
    "{'index':842,'content':'你在乎谁，你说了算。谁在乎你，你说了不算，时间说了算。</br> - </br>郑执'}"
  );
  mingyan.push(
    "{'index':1227,'content':'时光因为在你眼中流过而显得不再那样面目可憎，因为我从你眼中看到的不是苍老，是自己年轻但有限的生命被人紧紧抓牢。</br> - </br>郑执'}"
  );
  mingyan.push(
    "{'index':1279,'content':'不管怎么费尽心力，人会受伤的时候就会受伤。</br> - </br>村上春树'}"
  );
  mingyan.push(
    "{'index':913,'content':'有人说：真正的爱情，背后没有秘密。说这话的人，既不明白爱情，也不明白秘密。</br> - </br>《北京乐与路》'}"
  );
}

/**
    随机获取名言.

    直接调用此函数即可.
*/

function getMingYan() {
  return mingyan[parseInt(Math.random() * (mingyan.length - 1) + 1)];
}

/*
  获取名言,并链接至One.
*/
function getMingYanHref() {
  var item = getItem();
  return (
    "<a href='https://wufazhuce.com/one/" +
    item.index +
    "' target='_blank'>" +
    item.content +
    "</a>"
  );
}

function getItem() {
  return eval(
    "(" + mingyan[parseInt(Math.random() * (mingyan.length - 1) + 1)] + ")"
  );
}

/*
  只获取内容.
*/
function getMingYanContent() {
  var item ={'index':774,'content':'Be a little kinder than you have to.</br> - </br> E. Lockhart, We Were Liars'};
  try{
    item = getItem();
  } catch(e){
    
  }
  var mottoString = item["content"];
  var tmpTransObj = {"zh-CN": "s", "zh-TW": "t", "en": ""};
  if (tmpTransObj[currentLang]){    
    return mottoString.translate(tmpTransObj[currentLang]);  
  }
  return mottoString;
}
