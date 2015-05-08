var MEME_SETTINGS={creditText:"\ucd9c\ucc98:",creditSize:12,downloadName:"package",fontColor:"white",fontFamily:"NanumGothic",fontFamilyOpts:["NanumGothic","Malgun Gothic","DAUM_SDGothicNeo1","Arial","Helvetica Neue","Comic Sans MS"],canvasSize:"600x600",canvasSizeOpts:[{text:"600 x 600",value:"600x600"},{text:"700 x 500",value:"700x500"},{text:"600 x 500",value:"600x500"}],fontSize:24,fontSizeOpts:[{text:"Small text",value:14},{text:"Medium text",value:24},{text:"Large text",value:36}],headlineText:"\uc81c\ubaa9\uc744 \uc801\uc5b4\uc8fc\uc138\uc694",height:378,imageScale:1,imageSrc:"",overlayAlpha:.5,overlayColor:"#000",overlayColorOpts:["#000","#777","#2980b9","#698ca2","#b8a79d","#00b8d4","#45cd9f","#b679f8","#e360a7","#e57169"],paddingRatio:.05,textAlign:"left",textAlignOpts:[{text:"\uc67c\ucabd",value:"left"},{text:"\uac00\uc6b4\ub370",value:"center"},{text:"\uc624\ub978\ucabd",value:"right"}],textShadow:!1,textShadowEdit:!0,watermarkAlpha:1,watermarkMaxWidthRatio:.25,watermarkSrc:localStorage&&localStorage.getItem("meme_watermark")||"/image-builder/images/issue_default-04598269.png",watermarkOpts:[{text:"\uae30\ubcf8",value:"/image-builder/images/issue_default-04598269.png",data:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABYCAYAAACAnmu5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw%2FeHBhY2tldCBiZWdpbj0i77u%2FIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2BIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NTZBRjlCOTU3RDNFNDExOTZCQ0U4OUU4MkVEMUI3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OUNFRjU2NUY1M0UxMUU0ODAyNjg3OUQzODVBMTkyNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OUNFRjU2NEY1M0UxMUU0ODAyNjg3OUQzODVBMTkyNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI%2BIDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdDMERBQ0Q4QTFEOUU0MTE4Q0Q1RkI0MDk3RDY5QkVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1NkFGOUI5NTdEM0U0MTE5NkJDRTg5RTgyRUQxQjdCIi8%2BIDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY%2BIDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8%2BawVYaQAAGBtJREFUeNrsXQmYFNW1%2FmvrdXp6VhBkFUGFBFmUgMtTnkY0KlEhuADBAO4LRElUSAKuiHnGjWiEqMQVURQwGDdQETAmcXkqoIDswjBbT3dP711V75xbPUvP9AxbN4tv7vf1N0vfrq7677nn%2FP%2B551ZJpmlidZdicJNkqcTpctyi2bULFEXpBQl2tLXWm4mYruvfxGOJJdFw9NEhWyor696S6sC12W0j3Pnup9wep5d%2Bh6IqbcDtZdOTOuKxOELBSCAUCI0%2FacOuhfXg%2FqdnhxF5Xvcr%2BYUeSbNpbWjtZ0vEEwj4gmatP%2FQLBlha3bW4tKC4YKO3yJPfBmx2APZXBwM1VTU9VYfLcRO5gjZgs9QYR8YzFolOlm12bTj72LaWvcZ4MimQiRUc3xa8stsYT8L1OLmNbuWoSbDJbSjkrrWB2wZuG7htrUlTD7%2FhzjDehrEPgUSyXvv7%2BR8suASKGYnATCY4iQTTMCErdIoOJzhDslefj0fp1fB54kSQ7U6O3j80cKXMF2WamS0umSQwiB3KNgJYh2RTBaSSkWDy2Dq%2B%2FHldp58qZCJBhvg8HUuSCWT6nT%2B%2FNwN02INL1iIu1KRX0mgEpmRNewKwfuryewLYOPQaHwrvmQ3b6WcDsShLHSTXfQnfryfQ7yaBZcs8MGLqm9AryuCZMgOuEb8EohH6Hg36jm3w3XwFjFgEMs8A0zxCwU35S4NAMkO1AmRJVRusl66LrQg8bWmqyoWF1kCIC6bPJshC87z0ngPgF49TQQm9Tf1NdY%2BTxAyHobjzIWk2FvnW59u1hxmNWt9zxLoFBpZASu7cAaW0PVyXjIH24wGQC4pS4BmijxmJQt%2B0DuE3FyH5zVd08R0ISHvDjGWLa2yQ0bCwylZ9pmqDXrmLLNsOtXe%2F9PcKCqF07Iz4ms8gd%2B9lDeARB65pILlrBxxnnAPvtAcgl7Rrue%2BpQ%2BG6fCJqZ89C7bw%2FQ%2B7QifzsfrBCdidkkUZ1ORAIwHPnQ1B79Gpq0PDeNxvVV41EcttmqJ26WoN9EBhEdniuRBdYXg7bjwai8KF5rQPbyNryJv%2BeLHws9N07Ye6LL0yBCnIxye1byPVoKHryFbhptmT8qm49UbpwBRz9ByOxYR2MgJ%2BunP2%2FglzSiAMHly%2BU6Y9kwnPj1MxGHY%2BnpmNzAD23TCfXcBQQrm3OTzOnnISHMSp3I7llMxyn%2FxSli1fCdsqZTSZSumVK%2BV4UPvUavL%2F%2FH3GM5NbNMPzVKXelHL6Wa0TCsPXqDdvJQ9Iv0O%2BH%2F%2FZrUXXFMFSMOQ%2BVV5yL6Orl6Redlwf7qWfBCAf34BokMZ2NCgJ16wbI3mLkz3wchY%2F8jYArTP%2FegA%2BVl52D8It%2FbXYU9xUTUfrah3CNu4ECpx3G1k0wgjWZxcsh97l8UmSZStdjm71VPfV6xN54CUrn7sJ1mFUVqJl8JUoWr4ZKfrau2foOQHghgaTKLc4OiXy6WRugY3VD3vDb4LrochoYT7Ou%2Bjdfo%2Ba2q5BY9zUCG9YQcAHkXXNL%2BilTkPXeOh362GsQ%2F%2BhdhF5%2BBnp1BVE1V1apWpaGy6ynPvUXWVWJxL9XQe3VBzIxArmoGApZtxn0I07%2Fb2q9MFpxCeRy%2BHiO%2F74AJQuWwT3m6ozAhig4Vv5qOBI7d8LW%2B0RIpaUIzp6J6omXIPHVF809DLkj54ixsJ8zHPD59s4tHZLEjWk0U2GS096gvFhUUAASUrTp1%2BpGq2cimRIprjikwpKM70fffwuVI85E4E%2FTad7nQenQESb5eNnugtqlOxJff46qseeRRV8DfeO3zY9vGDkRF7mTvxyNJTlDDGO9v48WIlkKrHHgMf01iPxrBcIvPU0zZCVkj1ewAkGxeCBTqo0HV%2BaAqScRe%2FfviC5bCvvg%2F4LjrOHQBg4i8I%2BB7MrLCWk4%2FLJiGSeFCdnG%2BYY4Uak1iL42H7FV7yGxZRMkh10AJFiEANVsnscQOQcZcueuxFxiiP3zQ0Q%2Feo8UYilsA38Cg3y5VFCcdes9IsDlWaAUlSL6ziJEFj5LMjdI1uaG1qkzXYFm0S6yTMv8pBbDArsnzrLJHbuK341IiAZpObkvN2S3J%2BuJnSMDXALMCAVgVoQt6yIrNqJRQQEP7LByirrVQKeXXFgkgM6Wejv8weWASNLWftYwomyDiFql1JWZ3Zkh2RyIffA2Ets3W1acBReRW3Dr0olNp2ddwEmLWK1YLZF8xwWXwXHmsJyebpIERfyrz0k2ejOc46GkYk0Akjiy18leFhr8Ir9oxmJQC4ubnIWyh0S4lcbMeeAUqcnsQXLgRzIscET%2BNk0FFRLlOQPJTRug79gKfed2Uk1fQTv5FGinDE2%2FKF9laqZLmceMjEjO9%2BbeBdnsFuc%2BfAIanYzdhiRRJCbuktZQ0Fcw6wnYBp8Go6LCcg8uF1wjxpESTk%2BUxP7zMUxSeFJLS0JuNxL%2F%2B2%2FBGIxIKsETjZACaw9bn%2F6N5nUCsX%2BtpFNKiqybmA4MFlE52%2BDTrSQ6LLcUW%2FWBZaWKlWGTeOGkcjck%2Bq5sUbIDB5e5PdEifdsmRJfMF3KywRIccF06odWP69u2ILZ6uRABBkXsTOByFK8l%2FR96YU5KTEjQy3bC9bORsM1Z0EhyV8A%2F%2BUokfVVi5oioT7yW5XPpO19COepoyxwoKFZfPwomc9%2FU0pHEa3feIvqu4sOJLZhirQp5BQg%2Bci%2B04%2FpA%2FdGAvfskcU3f9Enkh6NQPPkw%2FGbLX5HnabA8TuTwD29Bej%2BNOGxxOzodWwpc00qH8tKS0jCjJFUR%2FTgPLNblGjMT47ByC7ByBgUFFHSqUXXtpSKx4vzZKHGBpki%2Bpnt59q3Gt2sQePgu6OvXQOnQiQCO72F6yA3rYKI2QckQfOj%2FvGbH%2FfglmamfTeKtKTX0aeyiDluFRn5M9hYKch968kHUznuSWAFZj2w2YQI0pWkwzPIySOSDZZ6q%2B3JR9fTObHkgTLPhmKbZChMxcwJqbnguTSmZFxu7dBfFHTrJS2QsUZDEuhlk1Qo%2BknRIijZy3bILbl0pEVMnuwtwuoSlivWxpilJ9m0M7A%2B4qVkDlX0iUSGD%2BS5pfhFEhI%2BVKRgVCDqV9RVX02z978bTv%2FF3i%2FztkQAug0pA6ju%2FFwuRauduUAcOgUwcVASush0wiG6Z4ZAVbLIIrCQS741OhWUrB7qmyNE5ykUNiXbBMrKdn8g6uFwzEOBs1S7Yz7oA7vE3QzumFx2VXEHAL0QFr58FHroL4efnQjm60541%2B94stYjMmCZSj%2FruXUIdMk3T%2FdViFRqq0mDFXIhCvybXr7WWk2BV5kjk77lY7%2FAEl4HdXSYUTeHzS2HrPwSRRS%2Bhds4fkfxyM1lxEIZvG0pf%2Fwi2foNQ%2B%2FgsKO2Pahk8rivjQEeCIQ1rXitrWoQnhEUJ4l9%2BiqrR54iiPfbtMoNKykzO86ZYBcTansR8%2BuYrrKpH3RIMQuoqSk5rx9T9BVbftUOUIpUuWoHEpu9Qft4A6Du2EykvgOMMILGZVFuoCP57f4vil95D8Z9fRs3M20RqT9LU9Ivi3xUCIb8AtXMfgsQlTlzW5HAANAOY6Euy1gwIFgNmzLAqGJnyGjRj9AQBmKh3tZKmCLFgGglBe6GliImq5rwoT90fH8sZKpmAKF28CpGlC1F90xio3XvB3rUbkhUqXBdXQj3Wj8qxXUnDr0L07dchlXZA8rtvYO%2FTn6au1PzCyJpkpxOxlctSMtgUlI2Vn9qxUypz1iQgkn%2BVnGq9fmDFh1AIBmfjZOt92XSRb6bBsTn3MvgdUss1Yfp9KHz2HyLL5f%2FNRGjHHg8nXbgSDCCS5yZrLYZ9aJimJ11Au%2FYi6ZJ3wzTY%2Bw%2BGUV0BiYvzxCqA2SAKYjEY4Vrk%2F%2BFBciMnE08OC5cQWfIKwvP%2FKgRKi%2F6XB7w2KIKW965HIHkKBHOR3HkIP%2FsEIm8vsXIGh3V9Lk0lo2wn7GefD9uJA7DrhALkT38Y7sICrJ3zGJbc%2BypGzroapZ98iOD6PJK%2FPmFwofl%2Fo%2F4no4Qs3TdpLPnmFyG37wylqFgs2dTRJK6AtPXuR7OgZ8NXdukmQJdFHkFqMQhynpjX0mwnn5Y%2B0Uq4hJQzaSUHtTZ338Ela%2BBImz9hEsJvLCAf6xeUCzXlWHfKBSjd%2BAXaf%2Fw2zIsuQ8nPR4tUZOLjD0gKP47KcZeg8PHnUfAAWWHxUVA7dUJ43hPQv98mcguC0nHexJ%2BeFBe8ubVSozrhUl1JwJ7a3It16kpWXQuVz53ToQdxf4S6T76Wpr3SiSyu94mIPjAVWvd8BGf%2BGiF3Ic4KBKE8uQn2u2ZDG301Ym%2B9DnNXEO6rboXt7OHwjT0fgXtvpwHS4R53LdSuPaAc1Qmhl%2BYSgCGYNTWpBIvU6gpHM45N%2FfVNGyCT5M6%2FdUazLq4LRyG64j3Elrwk4gLIr4silYPQ9n4lgn0kCQG114%2BEdcW%2F%2FhTaoEuhHX8e9GAN4sw5R1wpgK0acy6qr70UvmnXY%2Ffpx0Pr1gOe2%2B6h6RlG4I%2B%2FQ%2BWFQ4hCnQulRy8UP%2FcWnEPPpSBZtffFcHUlpPEYBclvoQ45EyUvvysAzjQARQ%2F%2BFe4bp4lSVaOyLJUpk7JevrT%2F4LJPJFGgdewCfRtZSlFX5E2ZA7lDN7IE8ndQ4Dx%2FJCJ%2FX4D4Jyth6zMAth8PENWL%2Frt%2FA8c5w6GQ31QosHDSJrlpPcqHDURsxbvQjutrUai9GWBRl2vA2LUTetkuuG%2B4HSVzXhG8t7WWP2kqCue9QVy7I3QaEMFI2EXkEOR9X0NjVUME3IwGEJw1hsCZSzSnhFyGLLJcUjRu7aCRrSnNyz4cbESBNP3HEQnCmYyKJRrZ6RKFyIYkYU9pMXHMeJSsrwzJHVug9DoBRc8uRf71v23WN%2FLOItQQi2na7P0HoeS1lfBMnSWkcpL8Pdf55soP71tAI%2FLPU0sp6QBZj5P1reZSQfK9OpzDfXRR76Dg7vtJCPwJyTVfwORNI0kD3ikzEPtkOfLKtuKzCXeKoD3w7adRS%2F5PbdcOifXf0OyVWyRKvO6gkwuQgn5ySycg7xfj4Bh%2Baca%2BkTdeRWDGZFHKr9Og8u6gpoub7tFXwTViLKJvLqTXaySCvoXEO30OWZUj8VjJ4UKMNDovkaBLDwKWTiiuQm2fgOcmByILnkds2bsofetT4WM9Eyej3Yq1YtOd%2F56pcDltWDvo51g7%2BGJovnLio4VQju%2BHGPFlUYJqZkSW3BHNBnJJ%2BcRhS557MyOwRmUFaqZPRs0d15AP8ELtexKS5HK4CDpKwbXZYUn9OS8ZDe9jL5CCs8EQs0s6RJbLiXAi9fq2zdC3boT7wpEE2G%2BhdHYhsjoA%2FWrypx0d8N02Ac7RE%2BEeNQ4yqaLwwmcthabJqCk8Fj998nc0JSXUKnbYThpCfsKO5Gf%2FpIvNI54bbDkDRj9sPzkj43uhF%2BYi9Mxs6NW76Ry6CUUmzpcCnMEF17ddB23%2BPORNuAl23uPW2Lqon3BhOXAN%2B%2BZzyX%2ByDw3ShbiuuJpTJVBKS1D8zLvQfT1ERooLjo15j6B6%2BBDsOu1YRD9ahpLXV8He9zToJWG0t29E4fp1iBMbyr%2FuN4i%2F%2Fw8Y5Pvg2MOtYDg%2FnGhYZzOJvoXnP4OK4acg8MA0mlhJqEd3J2A1q2%2BqlFQuLiUefTSS334J381jUDl6GCIEdLKyPOUjXCR0tPR1vkPic9ka2ndAdPHL0CdOQuHDz6Jy%2FIXIr6mE69IRCD54JzRHe0R79kNB%2BQ6EKLJrfQeIZEx48YcofZGO4UzCd%2FoueO%2B4AQrJ5qqbxgAkbcV%2BCLMV6mV3QScKmCz7njjrK4i%2Bv5QYw3aYJHnVbsemEuAZkuCc4iRlKZccJTJvyS3fIXDPFODRe0VNhdqzD1kumYlNzbo63mdwmTdKLjd8N45GyaLVKJh6P3afPRi2fr2J5nSA21eB%2Bbf8BZrux%2BUzr6MAswAGBSOl09GIfhBEcut6uC%2B5DPl33IeaqdcJhaYeQ3I33HLFoswZLJoxNXdcS0xhKyRSXFJRKeQeJ1iAmFb97R7X4UiLK6UEMify6ftiHy1HbOVy63%2Baw1qKP6SJG7bewlKygE2onHARSp5aBIl8W3DGFCT8NYiStQ598X6svPgaRO15UOQIDI7Ege8RnJtE3rjpyP%2FDNLLyGYgsXmBZXWsJdJbETC%2FId5rbNwu3JHk8oh7BIOZyICso1l5infxyuchxiJWMQ58sN8SuGv3TT1BxyWkoeux5OFduQPjpRxFd9gY6fvYhLl%2FxBkKeAiSJYXC2ynb%2BCORP%2BDUkol7Vk36J2HtvErA9UnSgFYcX10Uu1zF0mFXkbJit99%2F3JJ9V71vrR3Ld1wS4Vl%2B3e2jATWWX5K4UjcsrUHH%2BELguuxLusdfB9asbkdy9nQhnFA7iuCYFKpVUESuryMLnyP8%2BDCMSIV93XKMsFV%2BMnjHPygqPi0u8M5%2FIqVTlrauVI88Uu47EZvAsDOD%2BL%2FOIhamkyJMabjfCLz6F8OsvQiUpa%2BvTjyJ3F6umi7R8Yu3XSKz7QtRyaeTflKNLRF5XlJgSsFwAI2l2K2FekJ63VbxeK%2Fmd42bWBtFCneUhWqAUppW0itloinOCW%2F9uLSJrPxd0yNqAo8Ak4HiVQeM8LcvYqipoNACSi7htgqSwSlx383oYZRFE%2Fr4QatdPidRHiVfnIb76fQFwzjNYLmdWvU12wEUDAef7JLCKs%2BoETItEy1LaSqxRUS7SlkVPLkg7RHTVMtRcPQrRV%2F%2BGZCxs%2BUKuQuTNJsQKkju3W3uI6%2BgWL%2BN3PQaSs2H5Rq%2BuIje1s%2F5eDcKf8yAVFxMj6NDQj85BBDFxKwJTrFgkN22ETILGFLs1zcMI3MauwmwS%2BevoDXNVkrBGwIeCSXObfdRx6llQ%2BvaHvnkjNJLWpp6sP6ZB9K561NlCKIjBouOYwSCJlyXQftKw8hBe8AyCM6dSsO1inYumwty6Gc5rpsB7%2B331%2FULP%2FBm1c2aRuOgsDIPX6rg%2BWLAFWcnactDBu%2FUVWW1yxzY4hl0M%2B6lDM3bxjLsRUqhWBLz6%2FWNGanWXLJQtTHLSizeEsMVq6XdOZffEtcKSy2O9nB6xo5JvcpGeV7ALl8Tvcz8uu7J8fvaAPXjgsjvw%2ByHn58MzeVqL3RznXgRl4GkkTcsgNQ4tPFUdDpG5sn46MmexKMqzm%2BDd6PX9uCqnSaWPyf3Eser6uawByPIa20GyXIN87S7kjb8ZaufuGWldfVL7lt9byRSuW2gMnuC4qT26dbmDFrJ3whU17p%2FJfRlmk36HOnGzPy1VmaOdeBLc429Ke4ulZ834i9Omoq3vQJEUSu7clpN7IBzMltuzp%2BBgiBpdE4Uz%2F9IkoZJE8NH7EFq0GKFXn0u33ikzoB3%2FY4r8Zdkt3vvBgMsSkkSGuW0L8m69E4qQug3N%2F8c%2FILHmcyiDTkTwgekwdu5Ie997%2FxNiE7TBq8LyXgLcWgnpDwpc8mFG%2Bfdwj7sB7svGp3Pa5W8h8sIccS8ExeEWd7zzTbsxPXXcsze8dz8GMxQgThvJuEog8z7dxn9zbZlYdGySaGpaysT8tmm%2FIwZcSRLbkZS%2BJ8N1%2FW3QA36SweXETQPQiXcG7rsdElfbMMVKJiC374jEZx8jOOchUV2j%2ByqFIHD%2BbAScw0eJeol0A5WsklHqx%2BWjOgkCVodGOCL4apoFc9FfLCICpOhHokKUkKq2nFfgSOtO6mEWtyvK9mHJp8atG%2FswgKzbBanXxH1qjETcIux1EV%2Fc4YmEQTwMuaC0gQ24XGKbq6hpUNT06c8c2E7vK5ao4DU4XmsTqxVao4pInZgHb41i0LkfZ8ASMUiJZE7vkldVXp2rjdUMJEnJmurUtn0pVeJpWVIasHVg2a0dlGxd9fPJXwWZpWzTbfrcUdXIon1W9UzdscktiPs1Nu7LlhuNQvfX1PcT7qNpvxy03IViPnEi5nK9zm8UWzJdFP%2BPLK5pVqzlu9eZIrGT5jgz9WWFlxIVez7mkQJufa7BzF1%2Fkbcws3%2FcI0uh%2Ff9sbeC2gXukgmsi1gZDtkONyRqqVuan0OlJvQ2RbBIl4taGoW%2BS%2BfF%2B8Vi8DZEsNsYzEUsslaPh6Gx%2BvB8%2FJK2tHXhjHBnPSDj6sDxkS2U5PzeRH%2B%2FXBvCBA8s4Mp6Ma8MDPh22kW6P%2B2m3x%2Blpe8DnvgUvnXxswnrAZ5CA%2FVXaAz4zPJr2Qn5YGinLtmcn7jmNEiJCsD4eTywlF%2FtI40fT%2Fp8AAwDk%2F03O3XtzugAAAABJRU5ErkJggg%3D%3D"},{text:"\ud654\uc774\ud2b8",value:"/image-builder/images/issue_white-8b290fc9.png",data:""}],width:600,height:600};