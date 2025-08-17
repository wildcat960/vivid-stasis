const ver = "vivid/stasis v5.1.1.1";
const upd = "Last updated 17.08.2025";
const packs = [0, 41, 85, 145, 180, 220, 268, 315, 460, 551, 577];
const original = 
{
    "grode":
    [
        {
            index: 0,
            lv: 1.0,
            notes: 343
        },
        {
            index: 1,
            lv: 6.0,
            notes: 499
        },
        {
            index: 2,
            lv: 9.0,
            notes: 566
        },
        {
            index: 3,
            lv: 11.0,
            notes: 882
        }
    ],
    "Macropolis":
    [
        {
            index: 4,
            lv: 3.0,
            notes: 380
        },
        {
            index: 5,
            lv: 6.0,
            notes: 646
        },
        {
            index: 6,
            lv: 11.2,
            notes: 949
        }
    ],
    "Tavgha":
    [
        {
            index: 7,
            lv: 3.0,
            notes: 513
        },
        {
            index: 8,
            lv: 7.0,
            notes: 714
        },
        {
            index: 9,
            lv: 10.6,
            notes: 1110
        }
    ],
    "Crosshatch":
    [
        {
            index: 10,
            lv: 5.0,
            notes: 477
        },
        {
            index: 11,
            lv: 10.6,
            notes: 776
        },
        {
            index: 12,
            lv: 12.5,
            notes: 1075
        }
    ],
    "ENERGY SYNERGY MATRIX":
    [
        {
            index: 13,
            lv: 5.0,
            notes: 527
        },
        {
            index: 14,
            lv: 10.0,
            notes: 752
        },
        {
            index: 15,
            lv: 12.6,
            notes: 1268
        },
        {
            index: 16,
            lv: 15.4,
            notes: 1393
        }
    ],
    "Chronomia":
    [
        {
            index: 17,
            lv: 2.0,
            notes: 633
        },
        {
            index: 18,
            lv: 6.0,
            notes: 990
        },
        {
            index: 19,
            lv: 10.6,
            notes: 953
        },
        {
            index: 20,
            lv: 13.0,
            notes: 1351
        }
    ],
    "septima":
    [
        {
            index: 21,
            lv: 4.0,
            notes: 631
        },
        {
            index: 22,
            lv: 9.0,
            notes: 935
        },
        {
            index: 23,
            lv: 12.3,
            notes: 1369
        }
    ],
    "obair-ghreis":
    [
        {
            index: 24,
            lv: 5.0,
            notes: 761
        },
        {
            index: 25,
            lv: 8.0,
            notes: 883
        },
        {
            index: 26,
            lv: 12.8,
            notes: 1703
        },
        {
            index: 27,
            lv: 14.0,
            notes: 1850,
        }
    ],
    "Fixations Toward the Stars":
    [
        {
            index: 28,
            lv: 4.0,
            notes: 744
        },
        {
            index: 29,
            lv: 10.6,
            notes: 1153
        },
        {
            index: 30,
            lv: 15.3,
            notes: 1769
        }
    ],
    "Signals Afar":
    [
        {
            index: 31,
            lv: 4.0,
            notes: 581
        },
        {
            index: 32,
            lv: 10.0,
            notes: 986
        },
        {
            index: 33,
            lv: 12.7,
            notes: 1297
        }
    ],
    "QUASAR":
    [
        {
            index: 34,
            lv: 7.0,
            notes: 704
        },
        {
            index: 35,
            lv: 11.6,
            notes: 1042
        },
        {
            index: 36,
            lv: 15.9,
            notes: 1453
        }
    ],
    "PYROMANIA":
    [
        {
            index: 37,
            lv: 9.0,
            notes: 1072
        },
        {
            index: 38,
            lv: 11.3,
            notes: 1215
        },
        {
            index: 39,
            lv: 14.9,
            notes: 1537
        },
        {
            index: 40,
            lv: 16.6,
            notes: 2325
        }
    ],
    "Cosmogyral":
    [
        {
            index: 41,
            lv: 5.0,
            notes: 606
        },
        {
            index: 42,
            lv: 7.0,
            notes: 735
        },
        {
            index: 43,
            lv: 11.9,
            notes: 1222
        }
    ],
    "Courage":
    [
        {
            index: 44,
            lv: 3.0,
            notes: 645
        },
        {
            index: 45,
            lv: 9.0,
            notes: 845
        },
        {
            index: 46,
            lv: 11.5,
            notes: 1277
        }
    ],
    "APO11O":
    [
        {
            index: 47,
            lv: 4.0,
            notes: 609
        },
        {
            index: 48,
            lv: 9.0,
            notes: 859
        },
        {
            index: 49,
            lv: 12.8,
            notes: 1270
        }
    ],
    "Octava":
    [
        {
            index: 50,
            lv: 3.0,
            notes: 554
        },
        {
            index: 51,
            lv: 9.0,
            notes: 909
        },
        {
            index: 52,
            lv: 12.6,
            notes: 1279
        }
    ],
    "energy trixxx":
    [
        {
            index: 53,
            lv: 7.0,
            notes: 670
        },
        {
            index: 54,
            lv: 10.0,
            notes: 811
        },
        {
            index: 55,
            lv: 11.8,
            notes: 1033
        },
        {
            index: 56,
            lv: 13.0,
            notes: 1378
        }
    ],
    "POISON GARDEN":
    [
        {
            index: 57,
            lv: 4.0,
            notes: 691
        },
        {
            index: 58,
            lv: 10.0,
            notes: 1042
        },
        {
            index: 59,
            lv: 12.2,
            notes: 1477
        }
    ],
    "tenpo pakala":
    [
        {
            index: 60,
            lv: 6.0,
            notes: 737
        },
        {
            index: 61,
            lv: 9.0,
            notes: 1043
        },
        {
            index: 62,
            lv: 12.3,
            notes: 1290
        },
        {
            index: 63,
            lv: 13.7,
            notes: 1497
        }
    ],
    "Prime":
    [
        {
            index: 64,
            lv: 5.0,
            notes: 578
        },
        {
            index: 65,
            lv: 10.0,
            notes: 894
        },
        {
            index: 66,
            lv: 13.8,
            notes: 1532
        }
    ],
    "Revelation":
    [
        {
            index: 67,
            lv: 6.0,
            notes: 958
        },
        {
            index: 68,
            lv: 12.2,
            notes: 1412
        },
        {
            index: 69,
            lv: 14.7,
            notes: 1748
        }
    ],
    "Farewell to Syzygia":
    [
        {
            index: 70,
            lv: 8.0,
            notes: 1137
        },
        {
            index: 71,
            lv: 12.1,
            notes: 1458
        },
        {
            index: 72,
            lv: 15.1,
            notes: 2199
        }
    ],
    "Chronoexplorers":
    [
        {
            index: 73,
            lv: 8.0,
            notes: 754
        },
        {
            index: 74,
            lv: 11.6,
            notes: 963
        },
        {
            index: 75,
            lv: 14.1,
            notes: 1459
        },
        {
            index: 76,
            lv: 16.6,
            notes: 1730
        }
    ],
    "valor/starcross":
    [
        {
            index: 77,
            lv: 9.0,
            notes: 981
        },
        {
            index: 78,
            lv: 12.7,
            notes: 1445
        },
        {
            index: 79,
            lv: 15.3,
            notes: 1764
        },
        {
            index: 80,
            lv: 16.7,
            notes: 2222
        }
    ],
    "Unraveling Stasis":
    [
        {
            index: 81,
            lv: 9.6,
            notes: 1297
        },
        {
            index: 82,
            lv: 13.1,
            notes: 1554
        },
        {
            index: 83,
            lv: 16.1,
            notes: 2244
        },
        {
            index: 84,
            lv: 17.5,
            notes: 2408
        }
    ],
    "Ione":
    [
        {
            index: 85,
            lv: 4.0,
            notes: 815
        },
        {
            index: 86,
            lv: 8.0,
            notes: 1140
        },
        {
            index: 87,
            lv: 11.7,
            notes: 1417
        }
    ],
    "Angel's Window":
    [
        {
            index: 88,
            lv: 2.0,
            notes: 527
        },
        {
            index: 89,
            lv: 6.0,
            notes: 624
        },
        {
            index: 90,
            lv: 12.6,
            notes: 1294
        },
        {
            index: 91,
            lv: 14.0,
            notes: 1375
        }
    ],
    "∀":
    [
        {
            index: 92,
            lv: 4.0,
            notes: 727
        },
        {
            index: 93,
            lv: 10.0,
            notes: 1118
        },
        {
            index: 94,
            lv: 12.8,
            notes: 1593
        },
        {
            index: 95,
            lv: 15.7,
            notes: 2118
        }
    ],
    "BPM":
    [
        {
            index: 96,
            lv: 4.0,
            notes: 662
        },
        {
            index: 97,
            lv: 9.6,
            notes: 1066
        },
        {
            index: 98,
            lv: 13.1,
            notes: 1565
        }
    ],
    "UTF-8000000000":
    [
        {
            index: 99,
            lv: 4.0,
            notes: 616
        },
        {
            index: 100,
            lv: 11.5,
            notes: 1028
        },
        {
            index: 101,
            lv: 13.3,
            notes: 1420
        },
        {
            index: 102,
            lv: 15.8,
            notes: 2018
        }
    ],
    "Singularity":
    [
        {
            index: 103,
            lv: 4.0,
            notes: 758
        },
        {
            index: 104,
            lv: 10.6,
            notes: 1101
        },
        {
            index: 105,
            lv: 13.5,
            notes: 1499
        }
    ],
    "Simulated Reality":
    [
        {
            index: 106,
            lv: 7.0,
            notes: 862
        },
        {
            index: 107,
            lv: 12.1,
            notes: 1252
        },
        {
            index: 108,
            lv: 14.2,
            notes: 1592
        }
    ],
    "Dear My Endsummer":
    [
        {
            index: 109,
            lv: 8.0,
            notes: 861
        },
        {
            index: 110,
            lv: 11.5,
            notes: 1140
        },
        {
            index: 111,
            lv: 13.6,
            notes: 1478
        }
    ],
    "∀NARCHIC LIGHT":
    [
        {
            index: 112,
            lv: 5.0,
            notes: 567
        },
        {
            index: 113,
            lv: 10.6,
            notes: 963
        },
        {
            index: 114,
            lv: 13.9,
            notes: 1301
        },
        {
            index: 115,
            lv: 15.8,
            notes: 1555
        }
    ],
    "Cyclical Rebellion":
    [
        {
            index: 116,
            lv: 8.0,
            notes: 746
        },
        {
            index: 117,
            lv: 10.6,
            notes: 907
        },
        {
            index: 118,
            lv: 14.7,
            notes: 1496
        }
    ],
    "CLAUDIA -estella-":
    [
        {
            index: 119,
            lv: 6.0,
            notes: 961
        },
        {
            index: 120,
            lv: 11.7,
            notes: 1387
        },
        {
            index: 121,
            lv: 15.9,
            notes: 1989
        }
    ],
    "Ops:Limone":
    [
        {
            index: 122,
            lv: 4.0,
            notes: 647
        },
        {
            index: 123,
            lv: 8.0,
            notes: 827
        },
        {
            index: 124,
            lv: 13.3,
            notes: 1375
        }
    ],
    "Seraphiel":
    [
        {
            index: 125,
            lv: 5.0,
            notes: 853
        },
        {
            index: 126,
            lv: 10.0,
            notes: 1271
        },
        {
            index: 127,
            lv: 14.3,
            notes: 1682
        }
    ],
    "Tormented World":
    [
        {
            index: 128,
            lv: 4.0,
            notes: 665
        },
        {
            index: 129,
            lv: 10.6,
            notes: 1154
        },
        {
            index: 130,
            lv: 14.1,
            notes: 1520
        }
    ],
    "Doppelganger":
    [
        {
            index: 131,
            lv: 9.0,
            notes: 984
        },
        {
            index: 132,
            lv: 12.3,
            notes: 1535
        },
        {
            index: 133,
            lv: 15.6,
            notes: 1966
        }
    ],
    "execution_program":
    [
        {
            index: 134,
            lv: 7.0,
            notes: 940
        },
        {
            index: 135,
            lv: 11.1,
            notes: 1415
        },
        {
            index: 136,
            lv: 16.7,
            notes: 2610
        },
        {
            index: 137,
            lv: 17.0,
            notes: 2532
        }
    ],
    "MARENOL":
    [
        {
            index: 138,
            lv: 0.0,
            notes: 1425
        },
        {
            index: 139,
            lv: 0.0,
            notes: 1425
        },
        {
            index: 140,
            lv: 0.0,
            notes: 1425
        }
    ],
    "Last Wish (vivid/stasis ver.)":
    [
        {
            index: 141,
            lv: 9.6,
            notes: 1675
        },
        {
            index: 142,
            lv: 13.2,
            notes: 2243
        },
        {
            index: 143,
            lv: 15.5,
            notes: 2577
        },
        {
            index: 144,
            lv: 17.4,
            notes: 2949
        }
    ],
    "Lost City":
    [
        {
            index: 145,
            lv: 1.0,
            notes: 391
        },
        {
            index: 146,
            lv: 6.0,
            notes: 641
        },
        {
            index: 147,
            lv: 10.6,
            notes: 1105
        }
    ],
    "hotline_ophiucus":
    [
        {
            index: 148,
            lv: 6.0,
            notes: 938
        },
        {
            index: 149,
            lv: 10.6,
            notes: 1180
        },
        {
            index: 150,
            lv: 12.7,
            notes: 1515
        }
    ],
    "NONSENSE":
    [
        {
            index: 151,
            lv: 7.0,
            notes: 694
        },
        {
            index: 152,
            lv: 11.8,
            notes: 1021
        },
        {
            index: 153,
            lv: 15.4,
            notes: 1393
        }
    ],
    "Aleph-0":
    [
        {
            index: 154,
            lv: 5.0,
            notes: 640
        },
        {
            index: 155,
            lv: 10.6,
            notes: 804
        },
        {
            index: 156,
            lv: 14.0,
            notes: 1000
        }
    ],
    "The Last Page":
    [
        {
            index: 157,
            lv: 3.0,
            notes: 612
        },
        {
            index: 158,
            lv: 8.0,
            notes: 831
        },
        {
            index: 159,
            lv: 12.2,
            notes: 1140
        }
    ],
    "Candy@-Cracker":
    [
        {
            index: 160,
            lv: 6.0,
            notes: 578
        },
        {
            index: 161,
            lv: 11.3,
            notes: 888
        },
        {
            index: 162,
            lv: 13.8,
            notes: 1450
        }
    ],
    "Orphen":
    [
        {
            index: 163,
            lv: 8.0,
            notes: 917
        },
        {
            index: 164,
            lv: 11.7,
            notes: 1415
        },
        {
            index: 165,
            lv: 16.3,
            notes: 2064
        }
    ],
    "3.1V.C1":
    [
        {
            index: 166,
            lv: 8.0,
            notes: 922
        },
        {
            index: 167,
            lv: 12.4,
            notes: 1467
        },
        {
            index: 168,
            lv: 16.1,
            notes: 2376
        }
    ],
    "ASTELLION":
    [
        {
            index: 169,
            lv: 1.0,
            notes: 124
        },
        {
            index: 170,
            lv: 8.0,
            notes: 1103
        },
        {
            index: 171,
            lv: 11.7,
            notes: 1556
        },
        {
            index: 172,
            lv: 16.8,
            notes: 2760
        }
    ],
    "SUPERNOVA":
    [
        {
            index: 173,
            lv: 9.0,
            notes: 1287
        },
        {
            index: 174,
            lv: 12.6,
            notes: 1952
        },
        {
            index: 175,
            lv: 15.7,
            notes: 2366
        },
        {
            index: 176,
            lv: 17.1,
            notes: 2840
        }
    ],
    "STARGAZERS":
    [
        {
            index: 177,
            lv: 8.0,
            notes: 1010
        },
        {
            index: 178,
            lv: 12.7,
            notes: 1589
        },
        {
            index: 179,
            lv: 17.3,
            notes: 2301
        }
    ],
    "Shattered Sky After Rain":
    [
        {
            index: 180,
            lv: 4.0,
            notes: 723
        },
        {
            index: 181,
            lv: 8.0,
            notes: 838
        },
        {
            index: 182,
            lv: 12.1,
            notes: 1326
        },
        {
            index: 183,
            lv: 13.3,
            notes: 1514
        }
    ],
    "lost contact":
    [
        {
            index: 184,
            lv: 5.0,
            notes: 717
        },
        {
            index: 185,
            lv: 10.0,
            notes: 1064
        },
        {
            index: 186,
            lv: 12.7,
            notes: 1264
        }
    ],
    "Nhelv":
    [
        {
            index: 187,
            lv: 5.0,
            notes: 792
        },
        {
            index: 188,
            lv: 11.2,
            notes: 1146
        },
        {
            index: 189,
            lv: 14.6,
            notes: 1412
        },
        {
            index: 190,
            lv: 16.8,
            notes: 1969
        }
    ],
    "nullbreak":
    [
        {
            index: 191,
            lv: 4.0,
            notes: 685
        },
        {
            index: 192,
            lv: 9.0,
            notes: 930
        },
        {
            index: 193,
            lv: 14.6,
            notes: 1454
        },
        {
            index: 194,
            lv: 16.2,
            notes: 1580
        }
    ],
    "Sternstunde":
    [
        {
            index: 195,
            lv: 5.0,
            notes: 729
        },
        {
            index: 196,
            lv: 9.6,
            notes: 923
        },
        {
            index: 197,
            lv: 14.7,
            notes: 1335
        }
    ],
    "The Night of Fright":
    [
        {
            index: 198,
            lv: 6.0,
            notes: 727
        },
        {
            index: 199,
            lv: 10.6,
            notes: 966
        },
        {
            index: 200,
            lv: 15.1,
            notes: 1558
        }
    ],
    "exterminate()":
    [
        {
            index: 201,
            lv: 7.0,
            notes: 794
        },
        {
            index: 202,
            lv: 10.0,
            notes: 1040
        },
        {
            index: 203,
            lv: 16.2,
            notes: 1940
        }
    ],
    "CLAUDIA -libertia-":
    [
        {
            index: 204,
            lv: 9.0,
            notes: 1173
        },
        {
            index: 205,
            lv: 12.4,
            notes: 1602
        },
        {
            index: 206,
            lv: 16.2,
            notes: 2269
        },
        {
            index: 207,
            lv: 17.3,
            notes: 2446
        }
    ],
    "stop-motion":
    [
        {
            index: 208,
            lv: 8.0,
            notes: 938
        },
        {
            index: 209,
            lv: 12.0,
            notes: 1383
        },
        {
            index: 210,
            lv: 15.7,
            notes: 1817
        },
        {
            index: 211,
            lv: 16.4,
            notes: 2006
        }
    ],
    "Crimson Dance (vivid/stasis Edit)":
    [
        {
            index: 212,
            lv: 8.0,
            notes: 1111
        },
        {
            index: 213,
            lv: 11.9,
            notes: 1452
        },
        {
            index: 214,
            lv: 14.9,
            notes: 2175
        },
        {
            index: 215,
            lv: 18.0,
            notes: 3091
        }
    ],
    "SENT://INEL":
    [
        {
            index: 216,
            lv: 9.0,
            notes: 1254
        },
        {
            index: 217,
            lv: 12.8,
            notes: 1792
        },
        {
            index: 218,
            lv: 15.7,
            notes: 2277
        },
        {
            index: 219,
            lv: 17.3,
            notes: 2763
        }
    ],
    "the more i carry on...":
    [
        {
            index: 220,
            lv: 3.0,
            notes: 760
        },
        {
            index: 221,
            lv: 9.0,
            notes: 1036
        },
        {
            index: 222,
            lv: 13.7,
            notes: 1497
        }
    ],
    "even at the end of the world, you left it":
    [
        {
            index: 223,
            lv: 4.0,
            notes: 833
        },
        {
            index: 224,
            lv: 9.6,
            notes: 1100
        },
        {
            index: 225,
            lv: 12.2,
            notes: 1551
        }
    ],
    "final farewell -aquaregia-":
    [
        {
            index: 226,
            lv: 4.0,
            notes: 590
        },
        {
            index: 227,
            lv: 9.0,
            notes: 809
        },
        {
            index: 228,
            lv: 12.7,
            notes: 1245
        }
    ],
    "(execute.)":
    [
        {
            index: 229,
            lv: 6.0,
            notes: 723
        },
        {
            index: 230,
            lv: 10.0,
            notes: 955
        },
        {
            index: 231,
            lv: 13.4,
            notes: 1556
        },
        {
            index: 232,
            lv: 16.2,
            notes: 1861
        }
    ],
    "Prismatic Vortex":
    [
        {
            index: 233,
            lv: 4.0,
            notes: 556
        },
        {
            index: 234,
            lv: 9.6,
            notes: 960
        },
        {
            index: 235,
            lv: 11.6,
            notes: 1320
        },
        {
            index: 236,
            lv: 13.5,
            notes: 1609
        }
    ],
    "stardust":
    [
        {
            index: 237,
            lv: 8.0,
            notes: 971
        },
        {
            index: 238,
            lv: 10.6,
            notes: 1159
        },
        {
            index: 239,
            lv: 14.5,
            notes: 1555
        }
    ],
    "heptagramme":
    [
        {
            index: 240,
            lv: 7.0,
            notes: 937
        },
        {
            index: 241,
            lv: 12.3,
            notes: 1369
        },
        {
            index: 242,
            lv: 14.6,
            notes: 1913
        }
    ],
    "crack in the earth":
    [
        {
            index: 243,
            lv: 7.0,
            notes: 630
        },
        {
            index: 244,
            lv: 11.4,
            notes: 871
        },
        {
            index: 245,
            lv: 14.8,
            notes: 1246
        }
    ],
    "Nightshade":
    [
        {
            index: 246,
            lv: 7.0,
            notes: 914
        },
        {
            index: 247,
            lv: 11.4,
            notes: 1078
        },
        {
            index: 248,
            lv: 12.8,
            notes: 1343
        },
        {
            index: 249,
            lv: 16.0,
            notes: 2181
        }
    ],
    "aria of ruinated winds":
    [
        {
            index: 250,
            lv: 4.0,
            notes: 979
        },
        {
            index: 251,
            lv: 11.6,
            notes:1329
        },
        {
            index: 252,
            lv: 13.8,
            notes: 1637
        },
        {
            index: 253,
            lv: 16.9,
            notes: 2130
        }
    ],
    "Reboot":
    [
        {
            index: 254,
            lv: 8.0,
            notes: 1167
        },
        {
            index: 255,
            lv: 12.7,
            notes: 1786
        },
        {
            index: 256,
            lv: 16.0,
            notes: 2357
        }
    ],
    "ULTiM∀TUM":
    [
        {
            index: 257,
            lv: 8.0,
            notes: 960
        },
        {
            index: 258,
            lv: 11.8,
            notes: 1578
        },
        {
            index: 259,
            lv: 16.3,
            notes: 2309
        }
    ],
    "Concrete Jungle":
    [
        {
            index: 260,
            lv: 7.0,
            notes: 883
        },
        {
            index: 261,
            lv: 11.2,
            notes: 1457
        },
        {
            index: 262,
            lv: 14.2,
            notes: 1668
        },
        {
            index: 263,
            lv: 15.7,
            notes: 1942
        }
    ],
    "CONVERGENCE":
    [
        {
            index: 264,
            lv: 9.0,
            notes: 1213
        },
        {
            index: 265,
            lv: 12.9,
            notes: 1815
        },
        {
            index: 266,
            lv: 15.6,
            notes: 2599
        },
        {
            index: 267,
            lv: 17.4,
            notes: 3004
        }
    ],
    "thrinos;pygmalion":
    [
        {
            index: 268,
            lv: 8.0,
            notes: 636
        },
        {
            index: 269,
            lv: 12.5,
            notes: 1063
        },
        {
            index: 270,
            lv: 14.9,
            notes: 1280
        },
        {
            index: 271,
            lv: 16.7,
            notes: 1652
        }
    ],
    "Bloom in Two":
    [
        {
            index: 272,
            lv: 9.0,
            notes: 1056
        },
        {
            index: 273,
            lv: 12.1,
            notes: 1385
        },
        {
            index: 274,
            lv: 15.2,
            notes: 1981
        },
        {
            index: 275,
            lv: 17.1,
            notes: 2407
        }
    ],
    "χΩ":
    [
        {
            index: 276,
            lv: 9.0,
            notes: 898
        },
        {
            index: 277,
            lv: 12.6,
            notes: 1837
        },
        {
            index: 278,
            lv: 15.6,
            notes: 2241
        },
        {
            index: 279,
            lv: 17.0,
            notes: 2594
        }
    ],
    "First Breath":
    [
        {
            index: 280,
            lv: 9.6,
            notes: 1729
        },
        {
            index: 281,
            lv: 12.7,
            notes: 2230
        },
        {
            index: 282,
            lv: 16.1,
            notes: 3116
        },
        {
            index: 283,
            lv: 17.6,
            notes: 3533
        }
    ],
    "SELF":
    [
        {
            index: 284,
            lv: 4.0,
            notes: 721
        },
        {
            index: 285,
            lv: 9.6,
            notes: 1037
        },
        {
            index: 286,
            lv: 11.7,
            notes: 1495
        }
    ],
    "acta est fabula, plaudite":
    [
        {
            index: 287,
            lv: 10.0,
            notes: 3188
        },
        {
            index: 288,
            lv: 13.6,
            notes: 4632
        },
        {
            index: 289,
            lv: 16.9,
            notes: 5617
        },
        {
            index: 290,
            lv: 17.9,
            notes: 6671
        }
    ],
    "Is This It Is It":
    [
        {
            index: 291,
            lv: 5.0,
            notes: 666
        },
        {
            index: 292,
            lv: 10.0,
            notes: 1000
        },
        {
            index: 293,
            lv: 12.8,
            notes: 1567
        }
    ],
    "Solomon's Seal":
    [
        {
            index: 294,
            lv: 1.0,
            notes: 256
        },
        {
            index: 295,
            lv: 6.0,
            notes: 412
        },
        {
            index: 296,
            lv: 9.0,
            notes: 500
        },
        {
            index: 297,
            lv: 11.0,
            notes: 785
        }
    ],
    "Attractor Force":
    [
        {
            index: 298,
            lv: 2.0,
            notes: 511
        },
        {
            index: 299,
            lv: 6.0,
            notes: 676
        },
        {
            index: 300,
            lv: 10.6,
            notes: 974
        }
    ],
    "See You Move":
    [
        {
            index: 301,
            lv: 6.0,
            notes: 584
        },
        {
            index: 302,
            lv: 10.6,
            notes: 920
        },
        {
            index: 303,
            lv: 12.7,
            notes: 1106
        }
    ],
    "Voltage Strike":
    [
        {
            index: 304,
            lv: 6.0,
            notes: 743
        },
        {
            index: 305,
            lv: 9.0,
            notes: 950
        },
        {
            index: 306,
            lv: 12.5,
            notes: 1447
        },
        {
            index: 307,
            lv: 13.6,
            notes: 1822
        }
    ],
    "reFract::dense":
    [
        {
            index: 308,
            lv: 5.0,
            notes: 546
        },
        {
            index: 309,
            lv: 10.0,
            notes: 832
        },
        {
            index: 310,
            lv: 15.3,
            notes: 1288
        }
    ],
    "B3611V":
    [
        {
            index: 311,
            lv: 9.6,
            notes: 1851
        },
        {
            index: 312,
            lv: 13.5,
            notes: 2599
        },
        {
            index: 313,
            lv: 15.6,
            notes: 2619
        },
        {
            index: 314,
            lv: 17.4,
            notes: 3099
        }
    ],
    "Perfect ConfeCute!!":
    [
        {
            index: 315,
            lv: 6.0,
            notes: 497
        },
        {
            index: 316,
            lv: 10.6,
            notes: 641
        },
        {
            index: 317,
            lv: 11.0,
            notes: 869
        }
    ],
    "INFiNiTE ENERZY -Overdoze-":
    [
        {
            index: 318,
            lv: 2.0,
            notes: 331
        },
        {
            index: 319,
            lv: 6.0,
            notes: 503
        },
        {
            index: 320,
            lv: 13.0,
            notes: 1079
        }
    ],
    "Synthesizer Party":
    [
        {
            index: 321,
            lv: 3.0,
            notes: 531
        },
        {
            index: 322,
            lv: 9.0,
            notes: 769
        },
        {
            index: 323,
            lv: 11.8,
            notes: 1047
        }
    ],
    "There":
    [
        {
            index: 324,
            lv: 3.0,
            notes: 334
        },
        {
            index: 325,
            lv: 8.0,
            notes: 659
        },
        {
            index: 326,
            lv: 10.6,
            notes: 758
        },
        {
            index: 327,
            lv: 12.9,
            notes: 1492
        }
    ],
    "What You Love":
    [
        {
            index: 328,
            lv: 5.0,
            notes: 541
        },
        {
            index: 329,
            lv: 9.0,
            notes: 694
        },
        {
            index: 330,
            lv: 12.1,
            notes: 1183
        }
    ],
    "GOODRAGE":
    [
        {
            index: 331,
            lv: 4.0,
            notes: 466
        },
        {
            index: 332,
            lv: 9.6,
            notes: 801
        },
        {
            index: 333,
            lv: 13.5,
            notes: 1215
        },
        {
            index: 334,
            lv: 15.0,
            notes: 1411
        }
    ],
    "BADSECRET":
    [
        {
            index: 335,
            lv: 8.0,
            notes: 923
        },
        {
            index: 336,
            lv: 11.1,
            notes: 1177
        },
        {
            index: 337,
            lv: 13.3,
            notes: 1603
        },
        {
            index: 338,
            lv: 13.4,
            notes: 1380
        }
    ],
    "Wavetapper":
    [
        {
            index: 339,
            lv: 3.0,
            notes: 417
        },
        {
            index: 340,
            lv: 9.0,
            notes: 1053
        },
        {
            index: 341,
            lv: 11.5,
            notes: 1357
        }
    ],
    "Options":
    [
        {
            index: 342,
            lv: 3.0,
            notes: 747
        },
        {
            index: 343,
            lv: 7.0,
            notes: 721
        },
        {
            index: 344,
            lv: 10.0,
            notes: 1032
        }
    ],
    "Credits":
    [
        {
            index: 345,
            lv: 2.0,
            notes: 657
        },
        {
            index: 346,
            lv: 9.6,
            notes: 954
        },
        {
            index: 347,
            lv: 13.5,
            notes: 1442
        },
        {
            index: 348,
            lv: 13.7,
            notes: 1452
        }
    ],
    "Pictured as Perfect":
    [
        {
            index: 349,
            lv: 4.0,
            notes: 678
        },
        {
            index: 350,
            lv: 10.0,
            notes: 1008
        },
        {
            index: 351,
            lv: 13.6,
            notes: 1604
        }
    ],
    "grode(decoherence)":
    [
        {
            index: 352,
            lv: 5.0,
            notes: 629
        },
        {
            index: 353,
            lv: 10.6,
            notes: 898
        },
        {
            index: 354,
            lv: 15.5,
            notes: 1386
        },
        {
            index: 355,
            lv: 15.9,
            notes: 2035
        }
    ],
    "grode (Wyvren's Remix)":
    [
        {
            index: 356,
            lv: 5.0,
            notes: 696
        },
        {
            index: 357,
            lv: 8.0,
            notes: 910
        },
        {
            index: 358,
            lv: 14.2,
            notes: 1467
        }
    ],
    "Acolyte":
    [
        {
            index: 359,
            lv: 1.0,
            notes: 511
        },
        {
            index: 360,
            lv: 7.0,
            notes: 1107
        },
        {
            index: 361,
            lv: 11.6,
            notes: 1353
        },
        {
            index: 362,
            lv: 13.9,
            notes: 1843
        }
    ],
    "The 89's Momentum":
    [
        {
            index: 363,
            lv: 6.0,
            notes: 467
        },
        {
            index: 364,
            lv: 7.0,
            notes: 735
        },
        {
            index: 365,
            lv: 10.6,
            notes: 934
        }
    ],
    "FULi AUTO SHOOTER":
    [
        {
            index: 366,
            lv: 1.0,
            notes: 292
        },
        {
            index: 367,
            lv: 8.0,
            notes: 841
        },
        {
            index: 368,
            lv: 11.1,
            notes: 997
        }
    ],
    "FULi AUTO BUSTER":
    [
        {
            index: 369,
            lv: 6.0,
            notes: 520
        },
        {
            index: 370,
            lv: 9.0,
            notes: 752
        },
        {
            index: 371,
            lv: 11.3,
            notes: 1084
        }
    ],
    "Beyond the Heart (Broken Heart Mix)":
    [
        {
            index: 372,
            lv: 4.0,
            notes: 511
        },
        {
            index: 373,
            lv: 8.0,
            notes: 723
        },
        {
            index: 374,
            lv: 12.5,
            notes: 1183
        }
    ],
    "Spin Cycle (NETCAVY ReMiX)":
    [
        {
            index: 375,
            lv: 6.0,
            notes: 854
        },
        {
            index: 376,
            lv: 11.3,
            notes: 1223
        },
        {
            index: 377,
            lv: 12.9,
            notes: 1569
        }
    ],
    "Spell Diver":
    [
        {
            index: 378,
            lv: 5.0,
            notes: 480
        },
        {
            index: 379,
            lv: 8.0,
            notes: 667
        },
        {
            index: 380,
            lv: 12.4,
            notes: 999
        }
    ],
    "Luminaria":
    [
        {
            index: 381,
            lv: 1.0,
            notes: 423
        },
        {
            index: 382,
            lv: 6.0,
            notes: 699
        },
        {
            index: 383,
            lv: 12.0,
            notes: 1301
        },
        {
            index: 384,
            lv: 13.4,
            notes: 1489
        }
    ],
    "Stellaria":
    [
        {
            index: 385,
            lv: 3.0,
            notes: 619
        },
        {
            index: 386,
            lv: 7.0,
            notes: 797
        },
        {
            index: 387,
            lv: 12.0,
            notes: 1200
        },
        {
            index: 388,
            lv: 14.2,
            notes: 1603
        }
    ],
    "G e n g a o z o":
    [
        {
            index: 389,
            lv: 7.0,
            notes: 787
        },
        {
            index: 390,
            lv: 10.0,
            notes: 1011
        },
        {
            index: 391,
            lv: 13.1,
            notes: 1429
        }
    ],
    "The Next Arcady":
    [
        {
            index: 392,
            lv: 6.0,
            notes: 527
        },
        {
            index: 393,
            lv: 10.6,
            notes: 913
        },
        {
            index: 394,
            lv: 12.4,
            notes: 1187
        }
    ],
    "Random":
    [
        {
            index: 395,
            lv: 5.0,
            notes: 518
        },
        {
            index: 396,
            lv: 9.6,
            notes: 720
        },
        {
            index: 397,
            lv: 12.4,
            notes: 1305
        }
    ],
    "slic.hertz":
    [
        {
            index: 398,
            lv: 7.0,
            notes: 626
        },
        {
            index: 399,
            lv: 10.6,
            notes: 941
        },
        {
            index: 400,
            lv: 13.9,
            notes: 1436
        },
        {
            index: 401,
            lv: 13.9,
            notes: 1248
        }
    ],
    "F1055":
    [
        {
            index: 402,
            lv: 3.0,
            notes: 769
        },
        {
            index: 403,
            lv: 9.6,
            notes: 963
        },
        {
            index: 404,
            lv: 14.0,
            notes: 1688
        },
        {
            index: 405,
            lv: 14.7,
            notes: 1516
        }
    ],
    "Asymmetry (takehirotei remix)":
    [
        {
            index: 406,
            lv: 3.0,
            notes: 344
        },
        {
            index: 407,
            lv: 9.0,
            notes: 689
        },
        {
            index: 408,
            lv: 12.9,
            notes: 1093
        }
    ],
    "WATAGASHI RUSH":
    [
        {
            index: 409,
            lv: 4.0,
            notes: 428
        },
        {
            index: 410,
            lv: 8.0,
            notes: 698
        },
        {
            index: 411,
            lv: 11.9,
            notes: 1117
        },
        {
            index: 412,
            lv: 14.9,
            notes: 1359
        }
    ],
    "Yamai":
    [
        {
            index: 413,
            lv: 8.0,
            notes: 762
        },
        {
            index: 414,
            lv: 11.0,
            notes: 1017
        },
        {
            index: 415,
            lv: 12.3,
            notes: 1299
        },
        {
            index: 416,
            lv: 15.4,
            notes: 1532
        }
    ],
    "safe_state (MANIAQ Sound Team Remix)":
    [
        {
            index: 417,
            lv: 4.0,
            notes: 683
        },
        {
            index: 418,
            lv: 9.0,
            notes: 933
        },
        {
            index: 419,
            lv: 13.2,
            notes: 1414
        }
    ],
    "Un-TECHNiCAL Reason":
    [
        {
            index: 420,
            lv: 6.0,
            notes: 907
        },
        {
            index: 421,
            lv: 9.0,
            notes: 1126
        },
        {
            index: 422,
            lv: 14.4,
            notes: 1705
        }
    ],
    "Gauntlet":
    [
        {
            index: 423,
            lv: 5.0,
            notes: 900
        },
        {
            index: 424,
            lv: 9.0,
            notes: 1094
        },
        {
            index: 425,
            lv: 12.4,
            notes: 1498
        },
        {
            index: 426,
            lv: 13.9,
            notes: 1879
        }
    ],
    "HTTPS":
    [
        {
            index: 427,
            lv: 3.0,
            notes: 422
        },
        {
            index: 428,
            lv: 11.1,
            notes: 1192
        },
        {
            index: 429,
            lv: 13.6,
            notes: 1474
        }
    ],
    "3, 2, 1, Let's Go":
    [
        {
            index: 430,
            lv: 5.0,
            notes: 609
        },
        {
            index: 431,
            lv: 10.6,
            notes: 941
        },
        {
            index: 432,
            lv: 15.3,
            notes: 1609
        }
    ],
    "-1":
    [
        {
            index: 433,
            lv: 5.0,
            notes: 602
        },
        {
            index: 434,
            lv: 10.6,
            notes: 1070
        },
        {
            index: 435,
            lv: 14.3,
            notes: 1601
        }
    ],
    "taffy":
    [
        {
            index: 436,
            lv: 7.0,
            notes: 785
        },
        {
            index: 437,
            lv: 11.0,
            notes: 1095
        },
        {
            index: 438,
            lv: 15.3,
            notes: 1577
        }
    ],
    "Showdown":
    [
        {
            index: 439,
            lv: 5.0,
            notes: 641
        },
        {
            index: 440,
            lv: 11.2,
            notes: 1056
        },
        {
            index: 441,
            lv: 15.0,
            notes: 1299
        }
    ],
    "+ERABY+E CONNEC+10N":
    [
        {
            index: 442,
            lv: 9.0,
            notes: 1047
        },
        {
            index: 443,
            lv: 11.4,
            notes: 1122
        },
        {
            index: 444,
            lv: 15.2,
            notes: 1966
        },
        {
            index: 445,
            lv: 16.0,
            notes: 2000
        }
    ],
    "MYSTERIOUS TRIGGER":
    [
        {
            index: 446,
            lv: 6.0,
            notes: 958
        },
        {
            index: 447,
            lv: 11.6,
            notes: 1388
        },
        {
            index: 448,
            lv: 14.6,
            notes: 1928
        },
        {
            index: 449,
            lv: 15.8,
            notes: 2020
        }
    ],
    "Happy Go Lucky!!!":
    [
        {
            index: 450,
            lv: 5.0,
            notes: 741
        },
        {
            index: 451,
            lv: 9.6,
            notes: 967
        },
        {
            index: 452,
            lv: 15.7,
            notes: 1761
        },
        {
            index: 453,
            lv: 16.4,
            notes: 1965
        }
    ],
    "LET THE CREATION BEGIN":
    [
        {
            index: 454,
            lv: 3.0,
            notes: 873
        },
        {
            index: 455,
            lv: 11.3,
            notes: 1048
        },
        {
            index: 456,
            lv: 16.5,
            notes: 1938
        }
    ],
    "Foolish Ambition":
    [
        {
            index: 457,
            lv: 9.0,
            notes: 1022
        },
        {
            index: 458,
            lv: 11.6,
            notes: 1580
        },
        {
            index: 459,
            lv: 16.6,
            notes: 2372
        }
    ],
    "NULCTRL":
    [
        {
            index: 460,
            lv: 3.0,
            notes: 580
        },
        {
            index: 461,
            lv: 9.0,
            notes: 789
        },
        {
            index: 462,
            lv: 10.6,
            notes: 1024
        },
        {
            index: 463,
            lv: 11.7,
            notes: 1212
        }
    ],
    "PROPER RHYTHM":
    [
        {
            index: 464,
            lv: 1.0,
            notes: 315
        },
        {
            index: 465,
            lv: 6.0,
            notes: 611
        },
        {
            index: 466,
            lv: 11.2,
            notes: 1031
        },
        {
            index: 467,
            lv: 12.0,
            notes: 1060
        }
    ],
    "WORN OUT TAPES [tally-ho! version]":
    [
        {
            index: 468,
            lv: 5.0,
            notes: 789
        },
        {
            index: 469,
            lv: 11.4,
            notes: 1034
        },
        {
            index: 470,
            lv: 14.3,
            notes: 1482
        }
    ],
    "All The Times":
    [
        {
            index: 471,
            lv: 2.0,
            notes: 275
        },
        {
            index: 472,
            lv: 6.0,
            notes: 361
        },
        {
            index: 473,
            lv: 10.6,
            notes: 731
        },
        {
            index: 474,
            lv: 12.0,
            notes: 915
        }
    ],
    "It Go (Cheryl Stelli remix)":
    [
        {
            index: 475,
            lv: 7.0,
            notes: 851
        },
        {
            index: 476,
            lv: 10.6,
            notes: 1197
        },
        {
            index: 477,
            lv: 12.6,
            notes: 1581
        }
    ],
    "LORELEI":
    [
        {
            index: 478,
            lv: 8.0,
            notes: 1103
        },
        {
            index: 479,
            lv: 11.7,
            notes: 1617
        },
        {
            index: 480,
            lv: 15.6,
            notes: 2639
        },
        {
            index: 481,
            lv: 17.2,
            notes: 2911
        }
    ],
    "Faux Real (VIVID REDUX)":
    [
        {
            index: 482,
            lv: 3.0,
            notes: 609
        },
        {
            index: 483,
            lv: 8.0,
            notes: 857
        },
        {
            index: 484,
            lv: 12.1,
            notes: 1245
        }
    ],
    "CITY RIDE IN THE JUNGLE":
    [
        {
            index: 485,
            lv: 7.0,
            notes: 707
        },
        {
            index: 486,
            lv: 10.6,
            notes: 943
        },
        {
            index: 487,
            lv: 12.9,
            notes: 1223
        }
    ],
    "Battle in Enemy Territory":
    [
        {
            index: 488,
            lv: 5.0,
            notes: 865
        },
        {
            index: 489,
            lv: 10.6,
            notes: 1293
        },
        {
            index: 490,
            lv: 13.3,
            notes: 1830
        }
    ],
    "Star Dream -Millenium Vision-":
    [
        {
            index: 491,
            lv: 1.0,
            notes: 387
        },
        {
            index: 492,
            lv: 6.0,
            notes: 726
        },
        {
            index: 493,
            lv: 9.6,
            notes: 1046
        }
    ],
    "Trip Coffee":
    [
        {
            index: 494,
            lv: 4.0,
            notes: 738
        },
        {
            index: 495,
            lv: 9.6,
            notes: 1021
        },
        {
            index: 496,
            lv: 14.1,
            notes: 1768
        }
    ],
    "ULTIMATE":
    [
        {
            index: 497,
            lv: 6.0,
            notes: 841
        },
        {
            index: 498,
            lv: 10.0,
            notes: 1131
        },
        {
            index: 499,
            lv: 11.8,
            notes: 1450
        },
        {
            index: 500,
            lv: 15.2,
            notes: 1822
        }
    ],
    "Rafflesia":
    [
        {
            index: 501,
            lv: 9.0,
            notes: 1114
        },
        {
            index: 502,
            lv: 12.5,
            notes: 1697
        },
        {
            index: 503,
            lv: 16.7,
            notes: 2277
        }
    ],
    "Sanzui":
    [
        {
            index: 504,
            lv: 5.0,
            notes: 774
        },
        {
            index: 505,
            lv: 9.6,
            notes: 1075
        },
        {
            index: 506,
            lv: 13.7,
            notes: 1583
        },
        {
            index: 507,
            lv: 15.8,
            notes: 1986
        }
    ],
    "WAVE PUNCH":
    [
        {
            index: 508,
            lv: 5.0,
            notes: 529
        },
        {
            index: 509,
            lv: 11.7,
            notes: 1018
        },
        {
            index: 510,
            lv: 14.9,
            notes: 1350
        }
    ],
    "Luminous Entities Lost Heart":
    [
        {
            index: 511,
            lv: 7.0,
            notes: 932
        },
        {
            index: 512,
            lv: 10.0,
            notes: 1150
        },
        {
            index: 513,
            lv: 15.7,
            notes: 2032
        }
    ],
    "Secret Illumination":
    [
        {
            index: 514,
            lv: 3.0,
            notes: 596
        },
        {
            index: 515,
            lv: 11.0,
            notes: 1131
        },
        {
            index: 516,
            lv: 13.2,
            notes: 1416
        }
    ],
    "MVURBD":
    [
        {
            index: 517,
            lv: 5.0,
            notes: 869
        },
        {
            index: 518,
            lv: 10.6,
            notes: 1189
        },
        {
            index: 519,
            lv: 13.1,
            notes: 1483
        },
        {
            index: 520,
            lv: 14.5,
            notes: 1795
        }
    ],
    "IGNITED":
    [
        {
            index: 521,
            lv: 6.0,
            notes: 862
        },
        {
            index: 522,
            lv: 11.9,
            notes: 1256
        },
        {
            index: 523,
            lv: 14.5,
            notes: 1691
        }
    ],
    "Etiquette":
    [
        {
            index: 524,
            lv: 4.0,
            notes: 598
        },
        {
            index: 525,
            lv: 10.0,
            notes: 800
        },
        {
            index: 526,
            lv: 13.7,
            notes: 999
        },
        {
            index: 527,
            lv: 14.3,
            notes: 1056
        }
    ],
    "Dreams From Another World":
    [
        {
            index: 528,
            lv: 9.0,
            notes: 999
        },
        {
            index: 529,
            lv: 13.0,
            notes: 1257
        },
        {
            index: 530,
            lv: 16.3,
            notes: 1957
        }
    ],
    "micro.wav":
    [
        {
            index: 531,
            lv: 5.0,
            notes: 494
        },
        {
            index: 532,
            lv: 11.3,
            notes: 729
        },
        {
            index: 533,
            lv: 13.9,
            notes: 1062
        }
    ],
    "Rrhar'il":
    [
        {
            index: 534,
            lv: 8.0,
            notes: 824
        },
        {
            index: 535,
            lv: 13.4,
            notes: 1206
        },
        {
            index: 536,
            lv: 16.8,
            notes: 1761
        }
    ],
    "Distorted Fate":
    [
        {
            index: 537,
            lv: 7.0,
            notes: 1233
        },
        {
            index: 538,
            lv: 12.0,
            notes: 1522
        },
        {
            index: 539,
            lv: 15.8,
            notes: 1969
        },
        {
            index: 540,
            lv: 16.8,
            notes: 2211
        }
    ],
    "Benighted Rewaking":
    [
        {
            index: 541,
            lv: 7.0,
            notes: 1042
        },
        {
            index: 542,
            lv: 11.1,
            notes: 1547
        },
        {
            index: 543,
            lv: 14.8,
            notes: 1968
        },
    ],
    "Images":
    [
        {
            index: 544,
            lv: 7.0,
            notes: 1144
        },
        {
            index: 545,
            lv: 11.9,
            notes: 1583
        },
        {
            index: 546,
            lv: 15.5,
            notes: 2531
        }
    ],
    "MULTIPHEX":
    [
        {
            index: 547,
            lv: 6.0,
            notes: 825
        },
        {
            index: 548,
            lv: 11.2,
            notes: 1211
        },
        {
            index: 549,
            lv: 14.8,
            notes: 1667
        },
        {
            index: 550,
            lv: 16.5,
            notes: 2827
        }
    ],
    "Luxvinore":
    [
        {
            index: 551,
            lv: 5.0,
            notes: 897
        },
        {
            index: 552,
            lv: 10.6,
            notes: 1235
        },
        {
            index: 553,
            lv: 14.4,
            notes: 1719
        }
    ],
    "And So You Felt":
    [
        {
            index: 554,
            lv: 4.0,
            notes: 874
        },
        {
            index: 555,
            lv: 9.6,
            notes: 1234
        },
        {
            index: 556,
            lv: 12.2,
            notes: 1639
        },
        {
            index: 557,
            lv: 15.4,
            notes: 2163
        }
    ],
    "Synthesis.":
    [
        {
            index: 558,
            lv: 6.0,
            notes: 1011
        },
        {
            index: 559,
            lv: 10.6,
            notes: 1334
        },
        {
            index: 560,
            lv: 14.8,
            notes: 1861
        },
        {
            index: 561,
            lv: 16.1,
            notes: 2336
        }
    ],
    "When the Dragon Falls":
    [
        {
            index: 562,
            lv: 4.0,
            notes: 942
        },
        {
            index: 563,
            lv: 10.6,
            notes: 1464
        },
        {
            index: 564,
            lv: 15.8,
            notes: 2139
        }
    ],
    "Surtr's Wish":
    [
        {
            index: 565,
            lv: 8.0,
            notes: 963
        },
        {
            index: 566,
            lv: 11.6,
            notes: 1287
        },
        {
            index: 567,
            lv: 15.9,
            notes: 1810
        },
        {
            index: 568,
            lv: 16.9,
            notes: 2129
        }
    ],
    ":3c":
    [
        {
            index: 569,
            lv: 8.0,
            notes: 1187
        },
        {
            index: 570,
            lv: 12.2,
            notes: 1824
        },
        {
            index: 571,
            lv: 15.2,
            notes: 2294
        },
        {
            index: 572,
            lv: 16.5,
            notes: 2717
        }
    ],
    "APOCALYPSE CALL":
    [
        {
            index: 573,
            lv: 10.0,
            notes: 1348
        },
        {
            index: 574,
            lv: 13.7,
            notes: 2047
        },
        {
            index: 575,
            lv: 17.6,
            notes: 2696
        },
        {
            index: 576,
            lv: 18.1,
            notes: 3237
        }
    ]
}