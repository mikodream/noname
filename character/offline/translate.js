const translates = {
	yj_tianchuan: "田钏",
	pshuying: "狐影",
	pshuying_info: "锁定技，游戏开始时/其他角色死亡后，你从游戏外获得两/一张【荆鞭】；【荆鞭】不计入你的手牌上限，其他角色计算与你的距离+X（X为场上的【荆鞭】数）。",
	psqianjing: "潜荊",
	psqianjing_info: "当你造成或受到伤害后，你可以将手牌中的一张【荆鞭】置入一名角色的任意装备栏，若为你则摸一张牌。你可以将场上或你手牌中的一张【荆鞭】当作不计入次数限制的【杀】使用。",
	psbianchi: "鞭笞",
	psbianchi_info: "限定技，结束阶段，你可以弃置场上所有【荆鞭】，并令以此法失去牌的所有其他角色依次选择一项：1.令你操控其执行一个额外出牌阶段，此阶段至多使用两张牌；2.失去2点体力。",
	jingbian: "荆鞭",
	jingbian_info: "锁定技，你装备区每有一张【荆鞭】，你的攻击范围便+1；此牌可置入任意装备栏；你的出牌阶段开始时，若场上存在“田钏”，其为你指定一名其他角色，结束阶段若你本回合未对其使用【杀】或造成伤害，你对自己造成1点伤害。",
	jingbian_skill: "荆鞭",
	jingbian_skill_info: "锁定技，你的出牌阶段开始时，若场上存在“田钏”，其为你指定一名其他角色，结束阶段若你本回合未对其使用【杀】或造成伤害，你对自己造成1点伤害。",
	sp_gongsunzan: "SP公孙瓒",
	sp_gongsunzan_prefix: "SP",
	sp_simazhao: "SP司马昭",
	sp_simazhao_prefix: "SP",
	sp_wangyuanji: "SP王元姬",
	sp_wangyuanji_prefix: "SP",
	sp_xinxianying: "SP辛宪英",
	sp_xinxianying_prefix: "SP",
	sp_liuxie: "SP刘协",
	sp_liuxie_prefix: "SP",
	spyicong_info: "弃牌阶段结束时，你可以将任意张牌置于你的武将牌上，称为「扈」。每有一张「扈」，其他角色与你计算距离时便+1。",
	spyicong: "义从",
	sptuji: "突骑",
	sptuji_info: "准备开始时，你将所有「扈」置于弃牌堆，然后你本回合内计算与其他角色的距离时-X。若X不大于1，你摸一张牌。（X为以此法进入弃牌堆的「扈」的数量）",
	sphuangen: "皇恩",
	sphuangen_info: "一名角色使用锦囊牌指定目标时，若此牌的目标数大于1，则你可以令此牌对其中的至多X个目标无效，然后摸一张牌。（X为你的体力值）",
	sphantong: "汉统",
	sphantong_gain: "汉统",
	sphantong_info: "当你的牌因弃牌阶段的游戏规则要求而进入弃牌堆后，你可以将这些牌置于你的武将牌上，称为「诏」。一名角色的回合开始时，你可以弃置一张「诏」并获得〖护驾〗/〖激将〗/〖救援〗/〖血裔〗中的一个技能直至当前回合结束。",
	spzhaoxin: "昭心",
	spzhaoxin_info: "摸牌阶段结束时，你可以展示所有手牌，然后视为使用一张【杀】。",
	splanggu: "狼顾",
	splanggu_rewrite: "狼顾",
	splanggu_info: "当你受到有来源的伤害后，你可以进行判定（此判定结果生效前，你可以打出一张手牌替换判定牌）。然后你可以观看伤害来源的手牌并弃置其中的任意张与判定结果花色相同的牌。",
	spfuluan: "扶乱",
	spfuluan_info: "出牌阶段限一次，你可以弃置三张花色相同的牌并选择攻击范围内的一名角色。若如此做，该角色翻面且你不能使用【杀】直到回合结束。",
	spshude: "淑德",
	spshude_info: "结束阶段开始时，你可以将手牌补至体力上限。",
	spmingjian: "明鉴",
	spmingjian_info: "一名角色的回合开始时，你可以选择一项：①弃置一张牌，然后其跳过本回合的判定阶段。②将一张手牌置于其武将牌上，然后其本回合内进行判定时不触发「判定结果生效前」的时机，且其回合结束时将此牌置入弃牌堆。",
	spyinzhi: "隐智",
	spyinzhi_info: "当你受到1点伤害后，你可以亮出牌堆顶的两张牌。若其中有黑桃牌，则你可以进行至多X次「令一名角色获得伤害来源的一张手牌」的步骤。然后获得其余的牌。（X为其中黑桃牌的数量）",
	yj_caoang: "用间曹昂",
	yj_caoang_prefix: "用间",
	yjxuepin: "血拼",
	yjxuepin_info: "出牌阶段限一次，你可以选择攻击范围内的一名角色并失去1点体力。你弃置其两张牌。若这两张牌类型相同，你回复1点体力。",
	ns_chendao: "用间陈到",
	ns_chendao_prefix: "用间",
	nsjianglie: "将烈",
	nsjianglie_info: "当你使用【杀】指定目标后，你可以令其展示所有手牌，然后弃置其中一种颜色的牌。",
	ns_jiaxu: "★贾诩",
	ns_jiaxu_prefix: "★",
	nsyice: "遗策",
	nsyice_info: "锁定技，当你使用/打出/弃置的牌进入弃牌堆后，你将这些牌以任意顺序置于你的武将牌上，称为“策”。若这些“策”中有点数相同的牌，则你获得这两张牌中的所有牌，将这两张牌置于牌堆两端。若场上没有处于濒死状态的角色，则你对一名角色造成1点伤害。",
	ns_lijue: "SP李傕",
	ns_lijue_prefix: "SP",
	ns_zhangji: "SP张济",
	ns_zhangji_prefix: "SP",
	nsfeixiong: "飞熊",
	nsfeixiong_info: "出牌阶段开始时，你可以和一名其他角色拼点。赢的角色对没赢的角色造成1点伤害。",
	nscesuan: "策算",
	nscesuan_info: "锁定技，当你受到伤害时，你防止此伤害并失去1点体力上限。若你因以此法失去体力上限导致体力值减少，则你摸一张牌。",
	nslulve: "掳掠",
	nslulve_info: "出牌阶段限一次，你可以弃置X张牌并选择一名装备区内有牌的其他角色，然后对其造成1点伤害（X为其装备区内的牌数）。",
	ns_fanchou: "SP樊稠",
	ns_fanchou_prefix: "SP",
	nsyangwu: "扬武",
	nsyangwu_info: "出牌阶段限一次，你可以弃置一张♥手牌并选择一名手牌数大于你的其他角色。你观看其手牌并获得其中的X张牌（X为其与你手牌数之差的一半且向上取整）。",
	jsp_liubei: "★刘备",
	jsp_liubei_prefix: "★",
	jsprende: "仁德",
	jsprende_info: "出牌阶段，你可以将至少一张手牌交给其他角色；若你于此阶段内给出的牌首次达到两张，你可以视为使用一张基本牌。",
	ns_caoanmin: "战役篇曹安民",
	ns_caoanmin_prefix: "战役篇",
	nskuishe: "窥舍",
	nskuishe_info: "出牌阶段限一次，你可以选择一名其他角色A的一张牌，并将此牌交给不为A的一名角色。然后A可以对你使用一张【杀】。",
	sp_xiahoushi: "SP夏侯氏",
	sp_xiahoushi_prefix: "SP",
	xinfu_yanyu: "燕语",
	xinfu_yanyu_info: "一名角色的出牌阶段开始时，你可以弃置一张牌。若如此做，则该出牌阶段内限三次，当一张与你弃置的牌类别相同的其他牌进入弃牌堆后，你可令任意一名角色获得此牌。",
	xinfu_yanyu2: "燕语",
	xinfu_xiaode: "孝德",
	xinfu_xiaode_info: "其他角色死亡后，你可以声明该角色武将牌上的一个技能（主公技、觉醒技、隐匿技、使命技除外）。若如此做，你获得此技能且不能再发动〖孝德〗直到你的回合结束。",
	jsp_zhaoyun: "J.SP赵云",
	jsp_zhaoyun_prefix: "J.SP",
	chixin: "赤心",
	chixin1: "赤心",
	chixin2: "赤心",
	chixin_info: "你可以将♦牌当作【杀】或【闪】使用或打出。出牌阶段，你对在你攻击范围内且本回合内未成为过你使用的【杀】的目标的角色使用的【杀】没有次数限制。",
	suiren: "随仁",
	suiren_info: "限定技，准备阶段开始时，你可以失去技能〖义从〗，然后加1点体力上限并回复1点体力，然后令一名角色摸三张牌。",
	huangjinleishi: "黄巾雷使",
	fulu: "符箓",
	fulu_info: "当你声明使用普通【杀】后，你可以将此【杀】改为雷【杀】。",
	fuji: "助祭",
	fuji_info: "当一名角色造成雷属性伤害时，你可以令其进行判定，若结果为黑色，此伤害+1；若结果为红色，该角色获得判定牌。",
	sp_pangtong: "☆SP庞统",
	sp_pangtong_prefix: "☆SP",
	manjuan: "漫卷",
	manjuan_info: "其他角色的牌因弃置而进入弃牌堆后，你可以弃置一张花色与之不同的牌，然后获得此牌。",
	xinmanjuan: "漫卷",
	xinmanjuan_info: "锁定技，当你不因〖漫卷〗或〖醉乡〗而得到牌时，你将此牌置入弃牌堆。然后若此时处于你的回合内，则你可以从弃牌堆中选择获得一张与此牌点数相同的其他牌。",
	zuixiang: "醉乡",
	zuixiang2: "醉乡",
	zuixiang_info: "限定技。准备阶段开始时，你可以亮出牌堆顶的三张牌并置于你的武将牌上。你不能使用或打出与该些牌同类的牌，所有同类牌对你无效。之后的每个准备阶段，你须重复展示一次，直到这些牌中任意两张点数相同。然后，你获得这些牌。",
	sp_daqiao: "☆SP大乔",
	sp_daqiao_prefix: "☆SP",
	yanxiao: "言笑",
	yanxiao_info: "出牌阶段，你可以将一张♦牌置于一名角色的判定区内。判定区内有〖言笑〗牌的角色下个判定阶段开始时，其获得判定区里的所有牌。",
	anxian: "安娴",
	anxian_info: "当你使用【杀】对目标角色造成伤害时，你可以防止此伤害，令其弃置一张手牌，然后你摸一张牌；当你成为【杀】的目标后，你可以弃置一张手牌，令此【杀】对你无效，然后此【杀】的使用者摸一张牌。",
	sp_ganning: "☆SP甘宁",
	sp_ganning_prefix: "☆SP",
	yinling: "银铃",
	yinling_bg: "锦",
	yinling_info: "出牌阶段，若你的“锦”小于四张，你可以弃置一张黑色牌并指定一名其他角色。若如此做，你将其的一张牌置于你的武将牌上，称为“锦”。",
	junwei: "军威",
	junwei2: "军威",
	junwei_info: "结束阶段开始时，你可以移去三张“锦”。若如此做，你须指定一名角色并令其选择一项：1.展示一张【闪】，然后你将此【闪】交给一名其他角色。2.该角色失去1点体力，然后你将其装备区内的一张牌移出游戏。该角色的回合结束后，将以此法移出游戏的装备牌移回原处。",
	sp_xiahoudun: "☆SP夏侯惇",
	sp_xiahoudun_prefix: "☆SP",
	fenyong: "愤勇",
	fenyong2: "愤勇",
	fenyong2_bg: "勇",
	fenyong_info: "每当你受到一次伤害后，你可以获得一枚「愤勇」标记；当你拥有「愤勇」标记时，防止你受到的所有伤害。",
	xuehen: "雪恨",
	xuehen_info: "每个角色的结束阶段开始时，若你有愤勇标记，你弃置之，然后选择一项：1.弃置当前回合角色X张牌（X为你已损失的体力值）；2.视为对一名任意角色使用一张【杀】。",
	sp_lvmeng: "☆SP吕蒙",
	sp_lvmeng_prefix: "☆SP",
	tanhu: "探虎",
	tanhu2: "探虎",
	tanhu3: "探虎",
	tanhu_info: "出牌阶段限一次，你可以与一名其他角色拼点。若你赢，你获得以下效果直到回合结束：你与该角色的距离为1，你对该角色使用的普通锦囊牌不能被【无懈可击】响应。",
	mouduan: "谋断",
	mouduan_info: "游戏开始时，你获得标记“武”并获得技能〖激昂〗和〖谦逊〗。当你失去手牌后，若手牌数不大于2，你须将你的标记变为“文”，将这两项技能改为〖英姿〗和〖克己〗。一名角色的回合开始前，你可弃一张牌将标记翻回。",
	sp_zhangfei: "☆SP张飞",
	sp_zhangfei_prefix: "☆SP",
	jie: "嫉恶",
	jie_info: "锁定技，当你使用红色【杀】造成伤害时，此伤害+1。",
	dahe: "大喝",
	dahe2: "大喝",
	dahe2_bg: "喝",
	dahe_info: "出牌阶段限一次，你可以与一名其他角色拼点。若你赢，该角色不能使用或打出不为♥花色的【闪】直到回合结束，且你可将该角色拼点的牌交给场上一名体力不多于你的角色。若你没赢，你须展示手牌并弃置其中的一张。",
	sp_liubei: "☆SP刘备",
	sp_liubei_prefix: "☆SP",
	zhaolie: "昭烈",
	zhaolie_info: "摸牌阶段摸牌时，你可以少摸一张牌并指定攻击范围内的一名角色。你亮出牌堆顶的三张牌，将其中的非基本牌和【桃】置于弃牌堆，然后该角色选择一项：1.你对其造成X点伤害，然后其获得这些基本牌；2.其弃置X张牌，然后你获得这些基本牌。（X为其中非基本牌的数量）",
	shichou: "誓仇",
	shichou2: "誓仇",
	shichou_info: "主公技，限定技，准备阶段，你可指定一名蜀势力角色并交给其两张牌。本局游戏中，当你受到伤害时，改为该角色受到等量的伤害并摸等量的牌，直至该角色第一次进入濒死状态。",
	longyufei: "龙羽飞",
	longyi: "龙裔",
	longyi_info: "你可将所有手牌当做任意基本牌使用或打出。若此牌对应的实体牌中：有锦囊牌，你摸一张牌；有装备牌，此牌不可被响应。",
	zhenjue: "阵绝",
	zhenjue_info: "一名角色的结束阶段开始时，若你没有手牌，则你可以令其选择一项：①弃置一张牌。②令你摸一张牌。",
	//用间
	yj_caocao: "用间曹操",
	yj_caocao_prefix: "用间",
	yjxiandao: "献刀",
	yjxiandao_info: "每回合限一次。当你赠予其他角色一张牌后，你令其不能使用或打出与本次赠予移动的牌A花色相同的牌直到回合结束。然后若牌A：为锦囊牌，你摸两张牌。为装备牌，你获得其一张不为A的牌。为武器牌，你对其造成1点伤害。",
	yjsancai: "散财",
	yjsancai_info: "出牌阶段限一次，你可以展示所有手牌。若这些牌的类别均相同，则你可以赠予一名其他角色一张手牌。",
	yjyibing: "义兵",
	yjyibing_info: "当你不因赠予且不因〖义兵〗的嵌套结算而于摸牌阶段外得到牌时，你可以将此次得到的所有牌当做【杀】使用（无距离限制且不计入使用次数）。",
	yj_caohong: "用间曹洪",
	yj_caohong_prefix: "用间",
	yjlifeng: "厉锋",
	yjlifeng_info: "①出牌阶段限一次。你可以获得弃牌堆里的一张装备牌。②你发动〖赠予〗可以选择手牌区里的装备牌或装备区里的牌。",
	yj_zhangfei: "用间张飞",
	yj_zhangfei_prefix: "用间",
	yjmangji: "莽击",
	yjmangji_info: "锁定技。当你装备区里的牌数或体力值变化后，若你的体力值不小于1，你弃置一张手牌并视为使用一张【杀】。",
	yongjian_ganning: "用间甘宁",
	yongjian_ganning_prefix: "用间",
	yjjielve: "劫掠",
	yjjielve_info: "你可以将两张颜色相同的牌当【趁火打劫】使用，若你以此法造成伤害，此技能于本回合失效。",
	//什么？孙鲁班？谁会做这种离谱的东西
	yj_dongzhuo: "用间董卓",
	yj_dongzhuo_prefix: "用间",
	yjtuicheng: "推诚",
	yjtuicheng_info: "你可以失去1点体力并视为使用一张【推心置腹】。",
	yjyaoling: "耀令",
	yjyaoling_info: "出牌阶段结束时，你可以减1点体力上限并选择一名其他角色A和一名角色B，你令A选择一项：1.对B使用一张【杀】；2.你弃置其一张牌。",
	yjshicha: "失察",
	yjshicha_info: "锁定技。弃牌阶段开始时，若你本回合未发动过〖推诚〗或〖耀令〗之一，你本回合的手牌上限为1。",
	yjyongquan: "拥权",
	yjyongquan_info: "主公技。结束阶段，其他群势力角色依次可以交给你一张牌。",
	yj_liru: "用间李儒",
	yj_liru_prefix: "用间",
	yjdumou: "毒谋",
	yjdumou_info: "锁定技。你的回合内，其他角色的黑色手牌均视为【毒】，你的【毒】均视为【过河拆桥】。",
	yjweiquan: "威权",
	yjweiquan_info: "限定技。出牌阶段，你可以选择至多X名角色（X为游戏轮数），然后选择一名角色A，这些角色依次将一张手牌交给A。然后若A的手牌数大于体力值，其插入执行一个仅有弃牌阶段的回合。",
	yjrenwang: "人望",
	yjrenwang_info: "出牌阶段限一次。你可以选择弃牌堆中的一张黑色基本牌，令一名角色获得之。",
	yj_xuyou: "用间许攸",
	yj_xuyou_prefix: "用间",
	yjshicai: "恃才",
	yjshicai_info: "①回合内，牌堆顶的一张牌对你可见。②出牌阶段限一次。你可以弃置一张牌，展示并获得牌堆顶的一张牌。当此牌离开你的手牌区后，重置〖恃才②〗。",
	yjchenggong: "逞功",
	yjchenggong_info: "当一名角色使用牌指定第一个目标后，若此牌目标数大于1，你可以令其摸一张牌。",
	yjzezhu: "择主",
	yjzezhu_info: "出牌阶段限一次。你可以获得主公区域内的一张牌，然后交给其一张牌。",
	yj_jiaxu: "用间贾诩",
	yj_jiaxu_prefix: "用间",
	yjzhenlve: "缜略",
	yjzhenlve_info: "锁定技。①你使用的普通锦囊牌不能被响应。②你不能成为延时锦囊牌的目标。",
	yjjianshu: "间书",
	yjjianshu_info: "出牌阶段限一次。你可以将一张手牌交给一名其他角色，令其与你选择的另一名其他角色拼点，没赢的角色失去1点体力。",
	yjyongdi: "拥嫡",
	yjyongdi_info: "限定技。准备阶段，你可以令一名男性角色加1点体力上限并回复1点体力，然后若其武将牌上有主公技且其不为主公，其获得此主公技。",
	yj_zhugedan: "用间诸葛诞",
	yj_zhugedan_prefix: "用间",
	yj_zhenji: "用间甄宓",
	yj_zhenji_prefix: "用间",
	yjluoshen: "洛神",
	yjluoshen_info: "准备阶段，你可以判定并获得判定牌，且可重复此流程直到结果的颜色不同。",
	//线下E系列 一战成名 战役篇官盗
	shen_jiaxu: "战役篇神贾诩",
	shen_jiaxu_prefix: "战役篇神",
	zybishi: "避世",
	zybishi_info: "当你成为【杀】的目标后，你可以令使用者摸一张牌，然后令此【杀】无效。",
	zyjianbing: "谏兵",
	zyjianbing_info: "当一名其他角色受到执行【杀】的效果而受到伤害时，你可以获得其一张牌。若此牌花色为♥，其回复1点体力。",
	pe_wangyun: "战役篇王允",
	pe_wangyun_prefix: "战役篇",
	zylianji: "连计",
	zylianji_info: "出牌阶段结束时，若你于此阶段使用牌的类别数达到：1，你可以令一名角色摸一张牌；2，你可以回复1点体力；3，你可以跳过本回合剩余阶段，然后令一名其他角色执行一个仅有你于此回合未执行过的阶段的回合。",
	zymoucheng: "谋逞",
	zymoucheng_info: "每回合限一次。你可以将一张黑色牌当【借刀杀人】使用。",
	pe_zhonghui: "战役篇钟会",
	pe_zhonghui_prefix: "战役篇",
	zyquanji: "权计",
	zyquanji_info: "①当你受到伤害后或使用牌对唯一目标造成伤害后，你可以摸一张牌并将一张牌置于武将上，称为“权”。②你的手牌上限+X（X为“权”数）。",
	zypaiyi: "排异",
	zypaiyi_backup: "排异",
	zypaiyi_info: "出牌阶段限一次。你可以移去一张“权”并令一名角色摸X张牌（X为“权”数，且至多为7），然后若其手牌数大于你，你对其造成1点伤害。",
	pe_mengda: "战役篇孟达",
	pe_mengda_prefix: "战役篇",
	qiuan: "求安",
	qiuan_info: "当你受到伤害后，若此伤害的渠道有对应的实体牌且你的武将牌上没有“函”，则你可以防止此伤害并将这些牌置于你的武将牌上，称为“函”。",
	liangfan: "量反",
	liangfan2: "量反",
	liangfan_info: "锁定技，准备阶段开始时，若你的武将牌上有“函”，则你获得这些牌，然后失去1点体力。当你于此回合内因使用实体牌中包含“函”的牌且执行这些牌的效果而造成伤害后，你可以获得目标角色的一张牌。",
	pe_sunchen: "战役篇孙綝",
	pe_sunchen_prefix: "战役篇",
	zyshilu: "嗜戮",
	zyshilu_info: "①一名角色死亡后，你可以将其武将牌置于你的武将牌上，称为“戮”，若杀死其的角色是你，你将一张武将牌堆里的牌置为“戮”。②回合开始时，你可以弃置至多X张牌，然后摸等量的牌（X为“戮”数）。",
	zyxiongnve: "凶虐",
	zyxiongnve_info: "①出牌阶段开始时，你可以将一张“戮”置入武将牌堆并选择一项直到回合结束：1.当你造成伤害时，此伤害+1；2.当你对其他角色造成伤害时，获得其一张牌；3.你使用牌无次数限制。②出牌阶段结束时，你可以将两张“戮”置入武将牌堆，然后当你于下回合开始前受到其他角色造成的伤害时，此伤害-1。",
	pe_wenqin: "战役篇文钦",
	pe_wenqin_prefix: "战役篇",
	gzjinfa: "矜伐",
	gzjinfa_info: "出牌阶段限一次。你可以弃置一张牌，令一名其他角色选择一项：1.令你获得其一张牌；2.交给你一张装备牌，若此牌花色为♠，其视为对你使用一张【杀】。",
	zyshangyi: "尚义",
	zyshangyi_info: "出牌阶段限一次。你可以令一名其他角色观看你的手牌，然后你观看其手牌并可以弃置其中一张牌。",
	zymingshi: "名士",
	zymingshi_info: "锁定技。若你有空置的防具栏，属性【杀】对你无效。",
	gzsuishi: "随势",
	gzsuishi2: "随势",
	gzsuishi_info: "锁定技，其他角色进入濒死状态时，若伤害来源与你势力相同，你摸一张牌；其他角色死亡时，若其与你势力相同，你失去1点体力。",
	//线下S系列
	ps_guanyu: "★关羽",
	ps_guanyu_prefix: "★",
	pszhonghun: "忠魂",
	pszhonghun_info: "当你使用或打出红色牌时，你可以亮出牌堆顶的一张牌。若此牌为红色，你获得之。",
	ps2070_guojia: "★郭嘉",
	ps2070_guojia_prefix: "★",
	psquanmou: "全谋",
	psquanmou_info: "当其他角色使用锦囊牌结算结束后，若你是此牌目标，你可以弃置一张与此牌颜色相同的手牌并获得之。",
	ps1059_guojia: "★郭嘉",
	ps1059_guojia_prefix: "★",
	psqizuo: "奇佐",
	psqizuo_info: "当你攻击范围内的角色造成或受到伤害时，你可以弃置一张牌并判定，若此牌颜色与结果相同，你可以令此伤害+1或-1。",
	ps2063_zhaoyun: "★赵云",
	ps2063_zhaoyun_prefix: "★",
	psqijin: "七进",
	psqijin_info: "摸牌阶段，你可以改为亮出牌堆顶的七张牌，并获得其中一种颜色的所有牌。",
	psqichu: "七出",
	psqichu_info: "每回合限一次。当你于回合外需要使用或打出一张基本牌时，你可以观看牌堆顶的两张牌。若其中有此牌，你可以使用或打出之。",
	pslongxin: "龙心",
	pslongxin_info: "判定阶段开始时，你可以弃置一张装备牌，然后弃置你判定区里的一张牌。",
	ps2080_zhouyu: "★周瑜",
	ps2080_zhouyu_prefix: "★",
	psshiyin: "识音",
	psshiyin_info: "①游戏开始时，你可以将一张手牌置于武将牌上，称为“杂音”牌。②出牌阶段开始时，你可以用一张手牌替换“杂音”牌。",
	psquwu: "曲误",
	psquwu_info: "锁定技。你不能使用或打出与“杂音”牌花色相同的牌，且这些牌对你无效。",
	psliaozou: "聊奏",
	psliaozou_info: "出牌阶段，你可以展示所有手牌，若其中没有与“杂音”牌花色相同的牌，你摸一张牌。",
	ps1062_zhouyu: "★周瑜",
	ps1062_zhouyu_prefix: "★",
	psoldshiyin: "识音",
	psoldshiyin_info: "当你于回合内得到牌后，你可以展示之，然后根据你展示的牌包含的花色数令你本回合使用的下一张牌获得对应效果：不小于1，不能被响应；不小于2，造成的伤害+1；不小于3，使用时摸一张牌。",
	ps_caozhi: "★曹植",
	ps_caozhi_prefix: "★",
	psliushang: "流殇",
	psliushang_info: "锁定技。①摸牌阶段，你改为摸X+1张牌，然后依次将一张手牌置于所有其他角色的武将牌上，称为“流殇”牌（X为场上角色数且至少为3）。②其他角色的准备阶段，其选择一项：1.获得其“流殇”牌，且当其于本回合对你造成伤害时，防止此伤害；2.将其“流殇”牌置入弃牌堆。",
	psqibu: "七步",
	psqibu_info: "限定技。当你进入濒死状态时，你可以亮出牌堆顶的七张牌，回复等同于其中♥牌数的体力，并获得所有♣牌。",
	ps_jin_simayi: "★司马懿",
	ps_jin_simayi_prefix: "★",
	psquanyi: "权奕",
	psquanyi_info: "①出牌阶段限一次。你可以与一名角色拼点，赢的角色根据所有拼点牌的花色执行以下效果：♥，其获得没赢的角色区域里的一张牌；♦其对没赢的角色造成1点伤害；♠，其失去1点体力；♣，其弃置两张牌。②当你拼点时，你可以选择牌堆顶的牌作为拼点牌。",
	ps2067_zhaoyun: "武将传赵云",
	ps2067_zhaoyun_prefix: "武将传",
	pshuiqiang: "回枪",
	pshuiqiang_info: "当你使用的【杀】被【闪】抵消后，你可以对其使用一张【杀】。",
	pshuntu: "魂突",
	pshuntu_info: "出牌阶段限一次。当你使用【杀】对目标角色造成伤害后，你可以对其使用一张【杀】。",
	ps_caopi: "★曹丕",
	ps_caopi_prefix: "★",
	psjianwei: "僭位",
	psjianwei_info: "限定技。回合开始时，你可以失去1点体力，然后与一名其他角色交换区域里的所有牌。",
	ps2068_simayi: "★司马懿",
	ps2068_simayi_prefix: "★",
	pszhonghu: "冢虎",
	pszhonghu_info: "当一名角色于你的回合外死亡后，你可以结束此回合，然后令所有角色于其回合开始前跳过此回合直到你的回合开始前。",
	ps_simayi: "★司马懿",
	ps_simayi_prefix: "★",
	pshuxiao: "虎啸",
	pshuxiao_info: "回合开始时，你可以判定。若结果为基本牌或普通锦囊牌，你于本回合内获得如下效果：你可以将与结果点数或花色相同的手牌当与判定牌牌名和属性相同的牌使用。",
	ps_zhugeliang: "★诸葛亮",
	ps_zhugeliang_prefix: "★",
	psguanxing: "观星",
	psguanxing_info: "准备阶段，你可以观看牌堆顶的五张牌，并将其以任意顺序置于牌堆项或牌堆底。",
	pslongyin: "龙吟",
	pslongyin_info: "每回合限一次。你可以将任意张点数和为13的牌当做任意一张基本牌或普通锦囊牌使用或打出。",
	ps2066_zhugeliang: "武将传诸葛亮",
	ps2066_zhugeliang_prefix: "武将传",
	pszhiji: "智激",
	pszhiji_info: "出牌阶段限一次。你可以弃置两张手牌并选择两名势力不同的角色，视为这两名角色依次视为对对方使用一张【杀】。",
	psjiefeng: "借风",
	psjiefeng_info: "出牌阶段，你可以弃置两张手牌，然后亮出牌堆顶五张牌。若其中有至少两张红色牌，你视为使用一张【万箭齐发】。",
	ps_machao: "★马超",
	ps_machao_prefix: "★",
	psweihou: "威侯",
	psweihou_info: "当你判定前，你可以亮出牌堆顶的两张牌，选择其中一张作为你的本次判定结果，然后将另一张置入弃牌堆。",
	ps_lvbu: "★吕布",
	ps_lvbu_prefix: "★",
	pssheji: "射戟",
	pssheji_info: "出牌阶段限一次。你可以将所有手牌当一张无距离限制的【杀】使用，然后当此【杀】对目标角色造成伤害后，你获得其装备区里的所有武器牌和坐骑牌。",
	ps_jiaxu: "★贾诩",
	ps_jiaxu_prefix: "★",
	psqupo: "驱魄",
	psqupo_info: "一名角色A的回合开始时，你可以将一张牌交给另一名其他角色B。若此牌为：黑色，当A使用【杀】指定不为B的角色为目标时，A失去1点体力；红色，当B于本回合下一次受到伤害时，B失去1点体力。",
	psbaoquan: "保全",
	psbaoquan_info: "当你受到伤害时，你可以弃置一张锦囊牌并防止此伤害。",
	//S特
	ps_shen_machao: "S特神马超",
	ps_shen_machao_prefix: "S特神",
	psshouli: "狩骊",
	psshouli_info: "锁定技。①游戏开始时，所有角色依次选择一项：1.使用一张坐骑牌，然后摸一张牌；2.随机从游戏外的八张坐骑牌指示物中使用一张。②你可以将场上一张进攻坐骑当【杀】，防御坐骑当【闪】使用或打出，若此坐骑牌的拥有者不为你，则其非锁定技于本回合内失效。且当你或其于本回合内受到伤害时，此伤害+1且改为雷属性。",
	pshengwu: "横骛",
	pshengwu_info: "当你使用或打出牌时，若场上有该花色的装备牌，你可以弃置任意张该花色的手牌，然后摸X张牌（X为你弃置的牌数与场上与此牌花色相同的装备牌数之和）。",
	//线下K系列木盒
	pk_sp_duyu: "K系列杜预",
	pk_sp_duyu_prefix: "K系列",
	pkwuku: "武库",
	pkwuku_info: "锁定技。当有角色使用装备牌时，若你的“武库”数小于3，则你获得1枚“武库”。",
	pksanchen: "三陈",
	pksanchen_info: "觉醒技。结束阶段，若你的“武库”数大于2，则你加1点体力上限并回复1点体力，然后获得〖灭吴〗。",
	pkmiewu: "灭吴",
	pkmiewu2: "灭吴",
	pkmiewu_info: "每回合限一次。你可移去1枚“武库”，视为使用或打出任意一张基本牌或普通锦囊牌，然后摸一张牌。",
	//天书乱斗虚拟偶像
	vtb_xiaosha: "小杀",
	vtbguisha: "瑰杀",
	vtbguisha_info: "当其他角色使用【杀】时，你可以弃置一张牌令此【杀】不计入次数，且此【杀】对目标角色造成的伤害+1。",
	vtbshuli: "淑丽",
	vtbshuli_info: "每回合限两次。当其他角色使用【杀】造成伤害后，你可以与其各摸一张牌。",
	vtb_xiaoshan: "小闪",
	vtbshanwu: "闪舞",
	vtbshanwu_info: "当其他角色成为【杀】的第一个目标时，你可以弃置一张【闪】，然后取消此【杀】的所有目标。",
	vtbxianli: "娴丽",
	vtbxianli_info: "每回合限两次。当你失去牌后，若其中有【闪】，你可以获得当前回合角色的一张牌。",
	vtb_xiaotao: "小桃",
	vtbtaoyan: "桃宴",
	vtbtaoyan_info: "回合开始时，你可以令至多两名其他角色摸一张牌并于游戏外获得一张【桃】（共五张且均为♥6）。",
	vtbyanli: "妍丽",
	vtbyanli_info: "每轮限一次。一名角色于你的回合外进入濒死状态时，你可以令其回复至1点体力，然后其摸一张牌。",
	vtb_xiaole: "小乐",
	vtbleyu: "乐虞",
	vtbleyu_info: "一名角色的回合开始时，你可以弃置三张牌令其判定。若结果不为♥，其跳过本回合的出牌阶段。",
	vtbyuanli: "媛丽",
	vtbyuanli_info: "一名角色跳过出牌阶段后，你可以与一名其他角色各摸一张牌。",
	vtb_xiaojiu: "小酒",
	vtbmeiniang: "美酿",
	vtbmeiniang_info: "其他角色的出牌阶段开始时，你可以令其视为使用一张无次数限制且不计入次数的【酒】。",
	vtbyaoli: "媱丽",
	vtbyaoli_info: "其他角色于其出牌阶段内使用【酒】后，你可以令其于本回合内使用的下一张【杀】不能被响应且可以额外指定一个目标。",
	old_machao: "J.SP马超",
	old_machao_prefix: "J.SP",
	jsp_caoren: "☆SP曹仁",
	jsp_caoren_prefix: "☆SP",
	jsp_ganfuren: "SP甘夫人",
	jsp_ganfuren_prefix: "SP",
	zhangliang: "SP张梁",
	zhangliang_prefix: "SP",
	ol_xinxianying: "将辛宪英",
	ol_xinxianying_prefix: "将",
	jiangqing: "战役篇蒋钦",
	jiangqing_prefix: "战役篇",
	tianfeng: "战役篇田丰",
	tianfeng_prefix: "战役篇",
	jiling: "战役篇纪灵",
	jiling_prefix: "战役篇",
	kongrong: "战役篇孔融",
	kongrong_prefix: "战役篇",
	mateng: "战役篇马腾",
	mateng_prefix: "战役篇",
	drag_guanyu: "龙关羽",
	drag_guanyu_prefix: "龙",
	drag_caoren: "龙曹仁",
	drag_caoren_prefix: "龙",
	drag_lvchang: "吕常",
	dragchaojue: "超绝",
	dragchaojue_info: "准备阶段，你可以弃置一张手牌，然后令所有其他角色本回合不能使用或打出此花色的牌，然后这些角色依次选择一项：①正面朝上交给你一张牌；②本回合非锁定技失效。",
	dragjunshen: "军神",
	dragjunshen_info: "①你可以将一张红色牌当作【杀】使用或打出。②当你使用〖军神①〗转化的【杀】造成伤害时，你可以令受伤角色选择弃置装备区的所有牌或令此伤害+1。③你使用方片【杀】无距离限制，使用红桃【杀】可以额外选择一个目标。",
	draglizhong: "厉众",
	draglizhong_info: "结束阶段，你可以以任意顺序选择执行任意项：①将任意张装备牌置入任意名角色的装备区；②令你或任意名装备区里有牌的角色各摸一张牌。然后本次成为〖厉众②〗的角色于本轮手牌上限+2且可以将装备区的牌当作【无懈可击】使用。",
	dragjuesui: "玦碎",
	dragjuesui_info: "每名角色限一次，一名角色进入濒死状态时，你可以令其选择是否将体力值回复至1点并废除装备栏。若其选择是，则其本局游戏获得以下效果：你可以将一张黑色非基本牌当作无次数限制的【杀】使用或打出。",
	dragjuwu: "拒武",
	dragjuwu_info: "锁定技，攻击范围内至少包含三名角色的角色使用的无属性【杀】对你无效。",
	dragshouxiang: "守襄",
	dragshouxiang_info: "摸牌阶段，你可以额外摸X张牌。若如此做，你跳过出牌阶段，且本回合的弃牌阶段开始时，你可以交给至多X名角色各一张手牌。（X为攻击范围内包含你的角色）",
	yj_zhouji: "周姬", //肘击（bushi
	psyanmou: "炎谋",
	psyanmou_info: "①其他角色的【火攻】或火【杀】因弃置或判定进入弃牌堆后，你可以获得之。②当你得到牌后，你展示得到的牌，然后你使用其中的一张【火攻】或火【杀】。",
	pszhanyan: "绽焰",
	pszhanyan_info: "出牌阶段限一次，你可以令你攻击范围内的所有角色依次选择一项：①受到你对其造成的1点火属性伤害；②将手牌或弃牌堆中的一张【火攻】或火【杀】置于牌堆顶。然后你摸X张牌（X为本次选择次数较小的选项的被选择次数）。",
	psyuhuo: "驭火",
	psyuhuo_info: "锁定技。①防止你受到的火属性伤害。②你的【火攻】和火【杀】不计入手牌上限。",
	yj_ehuan: "鄂焕",
	psdiwan: "敌万",
	psdiwan_info: "每回合限一次，当你使用【杀】指定第一个目标后，你可以摸X张牌（X为此牌指定的目标数）。",
	pssuiluan: "随乱",
	pssuiluan_info: "群势力技。你使用【杀】可以额外指定两个目标，若如此做，此牌结算完毕后，所有目标角色可依次对你使用一张【杀】，你以此法受到伤害后，将势力变更至蜀。",
	psconghan: "从汉",
	psconghan_info: "蜀势力技。一号位造成伤害后，你可以对受伤角色使用一张【杀】。",
	yj_zhonghui: "钟会",
	psmouchuan: "谋川",
	psmouchuan_info: "每轮开始时，你可以摸两张牌并交给一名其他角色一张牌，然后你与其依次展示一张手牌，若这两张牌颜色相同/不同，你获得〖道合〗/〖志异〗直到本轮结束。",
	pszizhong: "自重",
	pszizhong_info: "锁定技，当你使用或打出一张你本轮未使用过的非装备牌时，你摸X-2张牌；你的手牌上限+X（X为你的技能数）。",
	psjizun: "极尊",
	psjizun_info: "觉醒技。当你脱离濒死状态时，若你没有〖清算〗，你获得之；否则你将体力回复至上限。",
	psqingsuan: "清算",
	psqingsuan_info: "主公技，锁定技。你对本局游戏对你造成过伤害且势力与你不同的角色使用牌无距离和次数限制。",
	psdaohe: "道合",
	psdaohe_info: "出牌阶段限一次，你可以令一名其他角色交给你至少一张手牌，然后你令其回复1点体力。",
	pszhiyi: "志异",
	pszhiyi_info: "出牌阶段限一次，你可以令一名角色摸一张牌并对其造成1点伤害。",
	jx_shen_caoren: "荆神曹仁",
	jx_shen_caoren_prefix: "荆神",
	jx_shen_liubiao: "荆神刘表",
	jx_shen_liubiao_prefix: "荆神",
	jingxiangshengshi: "荆襄盛世",
	jingxiangshengshi_info: "出牌阶段，对X名其他角色使用，亮出牌堆顶存活角色数张牌，令这些角色依次获得其中一张，然后你获得剩余的牌（X为全场势力数）。",
	jxjushou: "据守",
	jxjushou_info: "结束阶段，你可以翻面并摸X张牌（X为场上存活人数），然后你可令全场角色翻面并各摸三张牌，若如此做你弃置场上所有装备牌，失去〖据守〗并获得〖突围〗。",
	jxtuwei: "突围",
	jxtuwei_info: "出牌阶段，你可将弃牌堆的一张装备牌置入一名角色对应的装备栏内，然后若其不为你，你可以令其摸一张牌或对其造成1点伤害。（每名角色限一次）",
	jxxiongju: "雄踞",
	jxxiongju_info: "锁定技，游戏开始时，你从游戏外获得两张【荆襄盛世】并摸X张牌，然后增加X点体力上限并恢复等量体力；你的手牌上限+X（X为场上势力数）。",
	jxfujing: "富荆",
	jxfujing_info: "锁定技，摸牌阶段开始前，你跳过此阶段并视为使用一张【荆襄盛世】；以此法获得牌的其他角色本轮首次对你使用牌时需弃置一张牌。",
	jxyongrong: "雍容",
	jxyongrong_info: "每回合限一次，你造成/受到伤害时，若受伤角色/伤害来源的手牌数小于你，你可以交给其一张牌令此伤害+1/-1。",
	jx_sunjian: "荆孙坚",
	jx_sunjian_prefix: "荆",
	jx_zhouyu: "荆周瑜",
	jx_zhouyu_prefix: "荆",
	jx_guanyu: "荆关羽",
	jx_guanyu_prefix: "荆",
	jxxiongzi: "雄姿",
	jxxiongzi_info: "锁定技，摸牌阶段你额外摸X张牌，你的手牌上限+X（X为你的体力值）。",
	jxzhanyan: "绽焰",
	jxzhanyan_info: "出牌阶段限一次，你可以令一名其他角色猜测你的红色手牌数量，然后你展示手牌并将所有红色牌交给其，对其造成X点火焰伤害（X为其猜测值与红色手牌数之差，至多为3）。",
	jxwusheng: "武圣",
	jxwusheng_info: "你可以将一张红色牌当【杀】或【酒】使用或打出；你使用♦【杀】无距离限制。",
	jd_simayan: "司马炎",
	jdfengtu: "封土",
	jdfengtu_info: "一名其他角色死亡后，你可以选择一名未因此法失去过体力上限的角色，令其减1点体力上限，然后其获得死亡角色座次数的额定回合。",
	jdjuqi: "举棋",
	jdjuqi_info: "转换技。阴：准备阶段，你摸三张牌；其他角色的准备阶段，其可以展示并交给你一张黑色手牌。阳：准备阶段，你令你本回合使用牌无次数限制且造成的伤害+1；其他角色的准备阶段，其可以展示并交给你一张红色手牌。",
	jdtaishi: "泰始",
	jdtaishi_info: "主公技，限定技。一名角色的回合开始前，你可以令场上所有隐匿角色依次登场。",
	jdtaishi_info_guozhan: "主公技，限定技。一名角色的回合开始前，你可以令场上所有存在未明置武将牌的角色依次明置所有武将牌。",
	jd_sb_sunquan: "鼎孙权",
	jd_sb_sunquan_prefix: "鼎",
	jdsbzhiheng: "制衡",
	jdsbzhiheng_info: "出牌阶段限一次。你可以弃置任意张牌并摸等量的牌，若你以此法弃置的牌包括你装备区的牌，则你多摸一张牌",
	jdsbtongye: "统业",
	jdsbtongye_info: "锁定技，若牌堆未洗过牌，你视为拥有〖英姿〗和〖固政〗。",
	jdsbjiuyuan: "救援",
	jdsbjiuyuan_info: "出牌阶段限一次，你可以获得一名其他吴势力角色装备区的所有牌，然后你回复1点体力。",
	jd_sb_xiaoqiao: "鼎小乔",
	jd_sb_xiaoqiao_prefix: "鼎",
	jdsbtianxiang: "天香",
	jdsbtianxiang_info: "当你受到伤害时，你可以展示两张手牌，令一名其他角色选择并获得其中一张，若其以此法获得♥牌，你将此伤害转移给其；否则其本回合不能使用同类型的手牌。",
	jdsbhongyan: "红颜",
	jdsbhongyan_info: "锁定技。①你的♠牌和♠判定牌的花色视为♥。②当你失去牌后，若你本回合未以此法获得过牌，你展示这些牌中背面向上移动的牌，若这些牌中有花色为♥的牌，你摸一张牌。",
	jd_sb_guanyu: "鼎关羽",
	jd_sb_guanyu_prefix: "鼎",
	jdsbwusheng: "武圣",
	jdsbwusheng_info: "你可以将一张手牌当任意【杀】使用或打出。出牌阶段开始时，你可以令一名其他角色展示所有手牌，本阶段你对其使用的前X张【杀】无距离和次数限制且结算后你摸一张牌（X为其以此法展示的♥手牌数）。",
	jdsbyijue: "义绝",
	jdsbyijue_info: "锁定技，准备阶段，所有其他角色依次选择是否交给你一张牌，以此法交给你牌的角色本回合受到你的【杀】的造成的伤害时，你防止之。",
	jd_sb_jiangwei: "鼎姜维",
	jd_sb_jiangwei_prefix: "鼎",
	jdsbtiaoxin: "挑衅",
	jdsbtiaoxin_info: "出牌阶段限一次。你可以选择至多X名角色（X为你的体力值），令这些角色选择一项：1.对你使用一张无距离限制的【杀】，此【杀】结算结束后，若此【杀】未造成伤害，你获得其一张牌；2.你获得其一张牌。",
	jdsbzhiji: "志继",
	jdsbzhiji_info: "觉醒技，当你进入濒死状态时，你回复体力至2点，减少1点体力上限，获得〖北伐〗，然后若你的手牌数为全场最少，你摸两张牌。",
	jdsbbeifa: "北伐",
	jdsbbeifa_info: "出牌阶段，你可以弃置任意张手牌，然后令一名其他角色展示等量张手牌。若如此做，你可以将其展示牌中与你弃置牌中牌名相同的牌当无次数限制的【杀】使用，然后你可以重复此流程。",
	jd_sb_daqiao: "鼎大乔",
	jd_sb_daqiao_prefix: "鼎",
	jdsbguose: "国色",
	jdsbguose_info: "出牌阶段限一次，你可以将一张♦牌当【乐不思蜀】使用或移动场上一张【乐不思蜀】。",
	jdsbliuli: "流离",
	jdsbliuli_info: "当你成为【杀】的目标时，你可以弃置一张牌并选择你攻击范围内的一名不为此【杀】使用者的角色，将此【杀】转移给该角色。然后其获得“流离”标记，且移去场上所有其他的“流离”。有“流离”的角色回合开始时，其移去其“流离”并执行一个额外的出牌阶段。",
	jd_sb_menghuo: "鼎孟获",
	jd_sb_menghuo_prefix: "鼎",
	jdsbhuoshou: "祸首",
	jdsbhuoshou_info: "锁定技。①【南蛮入侵】对你无效。②其他角色使用【南蛮入侵】指定目标后，你代替其成为此牌的伤害来源。③出牌阶段结束时，你弃置所有手牌视为使用一张【南蛮入侵】。",
	jdsbzaiqi: "再起",
	jdsbzaiqi_info: "弃牌阶段结束时，若你本回合弃置过牌，你可以令至多等量名角色各选择一项：1.你摸一张牌；2.弃置一张牌，然后你回复一点体力。",
	jd_sb_yuanshao: "鼎袁绍",
	jd_sb_yuanshao_prefix: "鼎",
	jdsbluanji: "乱击",
	jdsbluanji_info: "出牌阶段限一次，你可以将两张手牌当【万箭齐发】使用。手牌数大于你的其他角色打出【闪】响应你的【万箭齐发】后，若你的手牌数小于体力值，你摸一张牌。",
	jdsbxueyi: "血裔",
	jdsbxueyi_info: "主公技，锁定技，你的手牌上限+2X（X为其他群势力角色数）。当其他群势力角色使用或打出牌响应你使用的牌结算结束后，你令其此阶段不能使用或打出手牌。",
	jd_sb_yujin: "鼎于禁",
	jd_sb_yujin_prefix: "鼎",
	jdsbjieyue: "节钺",
	jdsbjieyue_info: "结束阶段，你可以令一名其他角色摸两张牌并获得1点护甲，然后其须交给你两张牌。",
	jd_sb_sunshangxiang: "鼎孙尚香",
	jd_sb_sunshangxiang_prefix: "鼎",
	jdsbjieyin: "结姻",
	jdsbjieyin_info: "锁定技，出牌阶段开始时，你令一名手牌数不大于你的其他角色选择一项：1.交给你X张手牌（X=min(2,其手牌数)且至少为1），然后获得1点护甲；2.你回复1点体力并获得所有“妆”，然后减少1点体力上限，变更势力为吴。",
	jdsbliangzhu: "良助",
	jdsbliangzhu_info: "蜀势力技。出牌阶段限一次，你可以将一名其他角色装备区的一张牌置于你的武将牌上，称为“妆”，然后令一名其他角色回复1点体力。",
	jd_sb_liubei: "鼎刘备",
	jd_sb_liubei_prefix: "鼎",
	jdsbzhangwu: "章武",
	jdsbzhangwu_info: "限定技，出牌阶段，你可以移去任意的“仁望”标记并摸等量张牌，若如此做，本回合你使用【杀】无距离限制且〖仁德〗失效直到你进入濒死状态。",
	jd_sb_fazheng: "鼎法正",
	jd_sb_fazheng_prefix: "鼎",
	jdsbenyuan: "恩怨",
	jdsbenyuan_info: "锁定技。准备阶段，若场上存在有“眩”的角色，你移去该角色的“眩”，且若其手牌数小于你，你交给其两张牌；否则其失去1点体力，你回复1点体力。",
	jd_sb_zhangfei: "鼎张飞",
	jd_sb_zhangfei_prefix: "鼎",
	jdsbpaoxiao: "咆哮",
	jdsbpaoxiao_info: "锁定技。①你使用【杀】无次数限制。②若你的装备区内有武器牌，则你使用【杀】无距离限制。③当你于出牌阶段内使用第二张及以后【杀】时，你获得如下效果：{此【杀】不可被响应且伤害值基数+1；此【杀】指定目标后，目标角色的非锁定技于本回合内失效；此【杀】造成伤害后，若目标角色存活，则你失去1点体力且其弃置你一张手牌。}",
	jd_jin_simashi: "鼎司马师",
	jd_jin_simashi_prefix: "鼎",
	jdtairan: "泰然",
	jdtairan_info: "锁定技，结束阶段，你将体力回复至体力上限，并将手牌摸至体力上限。然后你的下一个出牌阶段开始时，你失去上一次以此法回复的体力值的体力，弃置X张手牌（X为你上次以此法获得的牌数）。",
};

export default translates;
