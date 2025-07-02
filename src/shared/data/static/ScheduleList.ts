interface IScheduleList {
    day: string;
    cat: string;
    time: string;
}

export const ScheduleList: IScheduleList[] = [
    {
        cat: "Regular Service",
        day: "Sunday",
        time: "03.00 PM",
    },
    {
        cat: "SM Service",
        day: "Sunday",
        time: "04.00 PM",
    },
]
// Jadwal ibadah umum: 03:00 PM
// Jadwal ibadah SM: 04:00 PM