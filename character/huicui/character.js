const characters = {
	yue_miheng: ["male", "qun", 3, ["dcjigu", "dcsirui"]],
	chezhou: ["male", "wei", 4, ["dcshefu", "dcpigua"]],
	dc_lifeng: ["male", "shu", 3, ["dctunchu", "dcshuliang"]],
	wupu: ["male", "qun", 4, ["dcduanti", "dcshicao"]],
	zangba: ["male", "wei", 4, ["rehengjiang"]],
	gongsunxiu: ["male", "qun", 4, ["dcgangu", "dckuizhen"]],
	dc_liuli: ["male", "shu", 3, ["dcfuli", "dcdehua"]],
	yue_daqiao: ["female", "wu", 3, ["dcqiqin", "dczixi"]],
	dc_kongrong: ["male", "qun", 3, ["dckrmingshi", "lirang"]],
	dc_sp_menghuo: ["male", "qun", 4, ["dcmanwang"]],
	dc_lingcao: ["male", "wu", "4/5", ["dcdufeng"]],
	yue_xiaoqiao: ["female", "wu", 3, ["dcqiqin", "dcweiwan"]],
	dc_dongzhao: ["male", "wei", 3, ["dcyijia", "dcdingji"]],
	kuaiqi: ["male", "wei", 3, ["dcliangxiu", "dcxunjie"]],
	yue_caiyong: ["male", "qun", 3, ["dcjiaowei", "dcfeibai"]],
	pangshanmin: ["male", "wei", 3, ["dccaisi", "dczhuoli"]],
	dc_jiachong: ["male", "wei", 3, ["dcbeini", "dcshizong"]],
	dc_sunchen: ["male", "wu", 4, ["dczigu", "dczuowei"]],
	dc_zhangmancheng: ["male", "qun", 4, ["dclvecheng", "dczhongji"]],
	yue_zhoufei: ["female", "wu", 3, ["dclingkong", "dcxianshu"]],
	dc_wuban: ["male", "shu", 4, ["dcyouzhan"], ["clan:陈留吴氏"]],
	yue_caiwenji: ["female", "qun", 3, ["dcshuangjia", "dcbeifen"]],
	liuchongluojun: ["male", "qun", 3, ["dcminze", "dcjini"]],
	yuechen: ["male", "wei", 4, ["dcporui", "dcgonghu"]],
	zhangkai: ["male", "qun", 4, ["dcxiangshu"]],
	gaoxiang: ["male", "shu", 4, ["dcchiying"]],
	yuanyin: ["male", "qun", 3, ["dcmoshou", "dcyunjiu"]],
	dongwan: ["female", "qun", 3, ["dcshengdu", "dcjieling"]],
	zhangchu: ["female", "qun", 3, ["dcjizhong", "dcrihui", "dcguangshi"]],
	peiyuanshao: ["male", "qun", 4, ["dcmoyu"]],
	mengjie: ["male", "qun", 3, ["dcyinlu", "dcyouqi"]],
	dc_huojun: ["male", "shu", 4, ["dcgue", "dcsigong"]],
	dc_sunhanhua: ["female", "wu", 3, ["dchuiling", "dcchongxu"]],
	dc_sunziliufang: ["male", "wei", 3, ["dcqinshen", "dcweidang"]],
	yuantanyuanxiyuanshang: ["male", "qun", 4, ["dcneifa"]],
	qiaorui: ["male", "qun", 4, ["dcaishou", "dcsaowei"]],
	xianglang: ["male", "shu", 3, ["dckanji", "dcqianzheng"]],
	qinlang: ["male", "wei", 4, ["dchaochong", "dcjinjin"]],
	furongfuqian: ["male", "shu", "4/6", ["dcxuewei", "dcyuguan"]],
	zhenghun: ["male", "wei", 3, ["dcqiangzhi", "dcpitian"]],
	dc_zhaotongzhaoguang: ["male", "shu", 4, ["yizan_use", "dcqingren", "dclongyuan"]],
	dc_huanghao: ["male", "shu", 3, ["dcqinqing", "huisheng", "dccunwei"]],
	liupi: ["male", "qun", 4, ["dcjuying"]],
	dc_sp_jiaxu: ["male", "wei", 3, ["zhenlue", "dcjianshu", "dcyongdi"]],
	leibo: ["male", "qun", 4, ["dcsilve", "dcshuaijie"]],
	gongsundu: ["male", "qun", 4, ["dczhenze", "dcanliao"]],
	panghui: ["male", "wei", 5, ["dcyiyong", "dcsuchou"]],
	dc_yuejiu: ["male", "qun", 4, ["dccuijin"]],
	chenjiao: ["male", "wei", 3, ["dcxieshou", "dcqingyan", "dcqizi"]],
	wanglie: ["male", "qun", 3, ["dcchongwang", "dchuagui"]],
	chengui: ["male", "qun", 3, ["dcyingtu", "dccongshi"]],
	dc_huangquan: ["male", "shu", 3, ["dcquanjian", "dctujue"]],
	yinfuren: ["female", "wei", 3, ["dcyingyu", "dcyongbi"]],
	dc_lvkuanglvxiang: ["male", "wei", 4, ["dcshuhe", "dcliehou"]],
	guanhai: ["male", "qun", 4, ["suoliang", "qinbao"]],
	huzhao: ["male", "qun", 3, ["midu", "xianwang"]],
	dc_liuba: ["male", "shu", 3, ["dczhubi", "dcliuzhuan"]],
	zhangxun: ["male", "qun", 4, ["suizheng"]],
	zongyu: ["male", "shu", 3, ["zyqiao", "chengshang"]],
	dc_jiling: ["male", "qun", 4, ["dcshuangren"]],
	dc_yanghu: ["male", "wei", 3, ["dcdeshao", "dcmingfa"]],
	caimaozhangyun: ["male", "wei", 4, ["lianzhou", "jinglan"]],
	tenggongzhu: ["female", "wu", 3, ["xingchong", "liunian"]],
	dc_huangchengyan: ["male", "qun", 3, ["dcjiezhen", "dczecai", "dcyinshi"]],
	dc_gaolan: ["male", "qun", 4, ["xizhen"]],
	guanning: ["male", "qun", "3/7", ["dunshi"]],
	dc_jiben: ["male", "qun", 3, ["xunli", "zhishi", "lieyi"]],
	mamidi: ["male", "qun", "4/6", ["bingjie", "zhengding"]],
	re_dengzhi: ["male", "shu", 3, ["jianliang", "weimeng"]],
	fengxi: ["male", "wu", 3, ["yusui", "boyan"]],
	re_miheng: ["male", "qun", 3, ["rekuangcai", "reshejian"]],
	re_chendeng: ["male", "qun", 3, ["refuyuan", "reyingshui", "rewangzu"]],
	wanniangongzhu: ["female", "qun", 3, ["zhenge", "xinghan"]],
	re_xunchen: ["male", "qun", 3, ["refenglve", "anyong"], ["clan:颍川荀氏"]],
	re_kanze: ["male", "wu", 3, ["xiashu", "rekuanshi"]],
	lvlingqi: ["female", "qun", 4, ["guowu", "zhuangrong"]],
	zhanghu: ["male", "wei", 4, ["cuijian", "zhtongyuan"]],
	luyusheng: ["female", "wu", 3, ["zhente", "zhiwei"]],
	huaxin: ["male", "wei", 3, ["spwanggui", "xibing"]],
	mengyou: ["male", "qun", 5, ["manyi", "dcmanzhi"]],
	liuyong: ["male", "shu", 3, ["zhuning", "fengxiang"]],
	dc_sunru: ["female", "wu", 3, ["xiecui", "youxu"]],
	xiahoulingnv: ["female", "wei", 4, ["fuping", "weilie"]],
	zhangyao: ["female", "wu", 3, ["yuanyu", "xiyan"]],
	tengyin: ["male", "wu", 3, ["chenjian", "xixiu"]],
	zhangxuan: ["female", "wu", 4, ["tongli", "shezang"]],
	wangtao: ["female", "shu", 3, ["huguan", "yaopei"]],
	wangyue: ["female", "shu", 3, ["huguan", "mingluan"]],
	zhaoyan: ["female", "wu", 3, ["jinhui", "qingman"]],
	heyan: ["male", "wei", 3, ["yachai", "qingtan"]],
	re_sunluyu: ["female", "wu", 3, ["remeibu", "remumu"]],
	re_dongbai: ["female", "qun", 3, ["relianzhu", "rexiahui"]],
	zhoushan: ["male", "wu", 4, ["dcmiyun", "dcdanying"]],
	dc_caiyang: ["male", "wei", 4, ["dcxunji", "dcjiaofeng"]],
	xiahoujie: ["male", "wei", 5, ["liedan", "zhuangdan"]],
	caoxing: ["male", "qun", 4, ["cxliushi", "zhanwan"]],
	re_chunyuqiong: ["male", "qun", 4, ["recangchu", "reliangying", "reshishou"]],
	xingdaorong: ["male", "qun", "4/6", ["xuxie"]],
	re_panfeng: ["male", "qun", 4, ["xinkuangfu"]],
	jiangfei: ["male", "shu", 3, ["dcshengxi", "dcshoucheng"]],
};

export default characters;
