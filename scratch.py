import requests
import pandas as pd
import json
from pymongo import MongoClient
from io import BytesIO
from scipy.io.wavfile import read, write

data=[
{
   "song_name": "Moonlight_Sound_Design",
   "recording_num": 1,
   "date": "9/8/2021",
   "notes": "talk louder",
   "timestamp": "1:24:00 AM"
 },
 {
   "song_name": "Moonlight_Sound_Design",
   "recording_num": 2,
   "date": "9/11/2021",
   "notes": "flat",
   "timestamp": "2:24:00 AM"
 },
 {
   "song_name": "Moonlight_Sound_Design",
   "recording_num": 3,
   "date": "9/12/2021",
   "notes": "random",
   "timestamp": "3:24:00 AM"
 },
 {
   "song_name": "Moonlight_Sound_Design",
   "recording_num": 4,
   "date": "9/13/2021",
   "notes": "hello",
   "timestamp": "4:24:00 AM"
 },
 {
   "song_name": "Moonlight_Sound_Design",
   "recording_num": 5,
   "date": "9/14/2021",
   "notes": "world",
   "timestamp": "5:24:00 AM"
 },
 {
   "song_name": "Kryptonite",
   "recording_num": 1,
   "date": "8/22/2002",
   "notes": "my",
   "timestamp": "6:24:00 AM"
 },
 {
   "song_name": "Kryptonite",
   "recording_num": 2,
   "date": "8/23/2002",
   "notes": "name",
   "timestamp": "7:24:00 AM"
 },
 {
   "song_name": "Kryptonite",
   "recording_num": 3,
   "date": "4/13/2017",
   "notes": "is",
   "timestamp": "8:24:00 AM"
 },
 {
   "song_name": "Kryptonite",
   "recording_num": 4,
   "date": "4/14/2017",
   "notes": "chickfila",
   "timestamp": "9:24:00 AM"
 },
 {
   "song_name": "Kryptonite",
   "recording_num": 5,
   "date": "4/15/2017",
   "notes": "my favorite word is apocoplyse",
   "timestamp": "10:24:00 AM"
 },
 {
   "song_name": "Kryptonite",
   "recording_num": 6,
   "date": "4/16/2017",
   "notes": "zombies are avengers",
   "timestamp": "11:24:00 AM"
 },
 {
   "song_name": "Kryptonite",
   "recording_num": 7,
   "date": "4/17/2017",
   "notes": "avengers ",
   "timestamp": "12:24:00 PM"
 },
 {
   "song_name": "Kryptonite",
   "recording_num": 8,
   "date": "4/18/2017",
   "notes": "I love you 3000",
   "timestamp": "1:24:00 PM"
 },
 {
   "song_name": "Kryptonite",
   "recording_num": 9,
   "date": "4/19/2017",
   "notes": "tony stank",
   "timestamp": "2:24:00 PM"
 },
 {
   "song_name": "Kryptonite",
   "recording_num": 10,
   "date": "4/20/2017",
   "notes": "shmaptain smherica",
   "timestamp": "3:24:00 PM"
 },
 {
   "song_name": "Hello",
   "recording_num": 1,
   "date": "5/15/1999",
   "notes": "there was an idea to bring together a group of remarkable people.",
   "timestamp": "4:24:00 PM"
 },
 {
   "song_name": "Hello",
   "recording_num": 2,
   "date": "11/28/2002",
   "notes": "I am speaking,",
   "timestamp": "5:24:00 PM"
 },
 {
   "song_name": "Hello",
   "recording_num": 3,
   "date": "11/29/2002",
   "notes": "I need ot not be flat",
   "timestamp": "6:24:00 PM"
 },
 {
   "song_name": "Hello",
   "recording_num": 4,
   "date": "11/30/2002",
   "notes": "I am too sharp",
   "timestamp": "7:24:00 PM"
 },
 {
   "song_name": "Let_it_Go",
   "recording_num": 1,
   "date": "12/1/2002",
   "notes": "my clarinet sucks",
   "timestamp": "8:24:00 PM"
 },
 {
   "song_name": "Let_it_Go",
   "recording_num": 2,
   "date": "12/2/2002",
   "notes": "mr blue sky ",
   "timestamp": "9:24:00 PM"
 },
 {
   "song_name": "Let_it_Go",
   "recording_num": 1,
   "date": "12/3/2002",
   "notes": "heavenly shades of night are falling ",
   "timestamp": "10:24:00 PM"
 },
 {
   "song_name": "Let_it_Go",
   "recording_num": 2,
   "date": "2/27/2019",
   "notes": "sip sip joy",
   "timestamp": "11:24:00 PM"
 },
 {
   "song_name": "Twilight_Time",
   "recording_num": 3,
   "date": "2/28/2019",
   "notes": "conversation charts are cool",
   "timestamp": "12:24:00 AM"
 },
 {
   "song_name": "Twilight_Time",
   "recording_num": 4,
   "date": "3/1/2019",
   "notes": "random data",
   "timestamp": "1:24:00 AM"
 },
 {
   "song_name": "Twilight_Time",
   "recording_num": 5,
   "date": "3/2/2019",
   "notes": "Abstract—Managing a work-life balance has always been",
   "timestamp": "2:24:00 AM"
 },
 {
   "song_name": "Twilight_Time",
   "recording_num": 6,
   "date": "3/3/2019",
   "notes": "this is a test",
   "timestamp": "3:24:00 AM"
 },
 {
   "song_name": "Twilight_Time",
   "recording_num": 7,
   "date": "3/4/2019",
   "notes": "hello world",
   "timestamp": "4:24:00 AM"
 },
 {
   "song_name": "Mr._Blue_Sky",
   "recording_num": 1,
   "date": "2/14/2006",
   "notes": "howdy",
   "timestamp": "5:24:00 AM"
 },
 {
   "song_name": "Mr._Blue_Sky",
   "recording_num": 2,
   "date": "8/31/2007",
   "notes": "saw varsity's horn off",
   "timestamp": "6:24:00 AM"
 },
 {
   "song_name": "Mr._Blue_Sky",
   "recording_num": 3,
   "date": "9/1/2007",
   "notes": "diet plans around their schedule, however, it is very challenging",
   "timestamp": "7:24:00 AM"
 },
 {
   "song_name": "Mr._Blue_Sky",
   "recording_num": 4,
   "date": "9/2/2007",
   "notes": "to keep up with and users tend to give up these plans due to",
   "timestamp": "8:24:00 AM"
 }
]

df=pd.DataFrame(data)


songs_list=df.values.tolist()
id_list=df.index.tolist()

def get_songs():
    songs=[songs_list[0][0]]
    id_list=df.index.tolist()
    ids=[0]
    sep_ids=[]
    last_ids=[]
    for i in range(1,len(songs_list)):
        ids.append(id_list[i])
        if songs_list[i][0] != songs_list[i-1][0]:
            songs.append(songs_list[i][0])
            sep_ids.append(ids)
            ids=[]
        elif (songs_list[-1][0]==songs_list[i][0]): 
            last_ids.append(id_list[i])
    sep_ids.append(last_ids)
    return songs, sep_ids

def get_recordings():
    songs,ids=get_songs()
    info={}    
    for j in range(len(ids)):
        for x in range(len(ids[j])):
            ids[j][x]='Recording '+str(x+1)
    for i in range(len(songs)):
        info[songs[i]]=ids[i]
    return info

def get_ids():
    songs,ids=get_songs()
    info_2={}
    for g in range(len(songs)):
        info_2[songs[g]]=ids[g]
    return info_2


def get_info():
    songs,ids=get_songs()
    info, info_ids=get_recordings(), get_ids()
    song_dict,recording_dict,dates,times={},{},{},{}
    date,times_t, list_time,list_days=[],[],[],[]
    for s_name in songs:
        times_t=[]
        date=[]
        df_s_name = df[df['song_name'] == s_name]
        notes_list = [ str(df_s_name['notes'].values[i]) for i in range(len(df_s_name)) ]
        date_list=[ str(df_s_name['date'].values[i]) for i in range(len(df_s_name)) ]
        ts_list = [ str(df_s_name['timestamp'].values[i]) for i in range(len(df_s_name)) ] 
        for i in range(len(ts_list)):
            day=date_list[i][5:7]+'/'+date_list[i][8:10]+'/'+date_list[i][0:4]
            date.append(day)
            time=ts_list[i][11:13]+':'+ts_list[i][14:16]
            times_t.append(time)
        times[s_name]=times_t
        dates[s_name]=date
        song_dict[s_name] = (info[s_name],notes_list, dates[s_name], times[s_name]) #change list to be accurate per song
    return (song_dict)


# for get_info, type song_dict['song name][#]
'''
#...
0=recording #
1=notes
2=date made
3=time made


#for get song:

returns song list and ids (make sure to assign two variables but only use necessary one)
'''
song,g=get_songs()
print(song)




