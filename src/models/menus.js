import {
    SmileFilled,
    SoundFilled,
    SketchOutlined,
    UserOutlined,
    WalletOutlined,
    PlayCircleOutlined,
    RiseOutlined,
    SignalFilled,
    YoutubeFilled,
} from '@ant-design/icons';

export const menus = [
    {
        name: "DISCOVER",
        link: "/discover",
        target: "",
        icon: <SmileFilled />
    },
    {
        name: "คลังเพลง",
        link: "/music",
        target: "",
        icon: <SoundFilled />
    },
    {
        name: "VIP",
        link: "/vip",
        target: "",
        icon: <SketchOutlined />
    },
];

export const browse = [
    {
        name: "ศิลปิน",
        link: "/artist",
        target: "",
        icon: <UserOutlined />
    },
    {
        name: "อัลบัม",
        link: "/album",
        target: "",
        icon: <WalletOutlined />
    },
    {
        name: "เพลย์ลิสต์",
        link: "/playlist",
        target: "",
        icon: <PlayCircleOutlined />
    },
    {
        name: "ชาร์ตเพลง",
        link: "/chart",
        target: "",
        icon: <RiseOutlined />
    },
    {
        name: "เรดิโอ",
        link: "/radio",
        target: "",
        icon: <SignalFilled />
    },
    {
        name: "วิดีโอ",
        link: "/video",
        target: "",
        icon: <YoutubeFilled />
    },
];

export const login = [
    {
        name: "สร้างเพลย์ลิสต์ส่วนตัว",
        link: "/create",
        target: "",
        icon: ""
    },
    {
        name: "เชื่อมต่อเพลย์ลิสต์กับแอป JOOX",
        link: "/connecting",
        target: "",
        icon: ""
    },
    {
        name: "ไม่มีโฆษณารบกวน",
        link: "/noads",
        target: "",
        icon: ""
    },
];

export const about = [
    {
        name: "ดาวน์โหลด",
        link: "/download",
        target: "",
        icon: ""
    },
    {
        name: "ภาษา/Lang.",
        link: "",
        target: "",
        icon: "",
        subMenu: [
            {
                name: "ไทย",
                link: "/th",
                target: "",
                icon: ""
            },
            {
                name: "English",
                link: "/en",
                target: "",
                icon: ""
            },
        ]
    },
    {
        name: "คำถามที่พบบ่อย",
        link: "/faq",
        target: "",
        icon: "",
    },
    {
        name: "ติดต่อเรา",
        link: "/contact",
        target: "",
        icon: "",
    },
    {
        name: "แนะนำ ติ-ชม",
        link: "/comment",
        target: "",
        icon: "",
    },
];

export const policy = [
    {
        name: "ข้อตกลงการใช้งาน",
        link: "/create",
        target: "",
        icon: ""
    },
    {
        name: "ข้อตกลงของผู้ใช้บริการ JOOX",
        link: "/policy1",
        target: "",
        icon: ""
    },
    {
        name: "ข้อตกลงความเป็นส่วนตัว",
        link: "/policy2",
        target: "",
        icon: ""
    },
    {
        name: "นโยบายคุกกี้",
        link: "/policy3",
        target: "",
        icon: ""
    },
    {
        name: "ข้อกำหนดในการลบเพลง",
        link: "/policy4",
        target: "",
        icon: ""
    },
];