var documenterSearchIndex = {"docs":
[{"location":"tutorials/isin.html#Is-Point/Grid-in-Region?","page":"IsIn Region?","title":"Is Point/Grid in Region?","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"When dealing with geographic data, we often wish to check if a point or the bounds of a grid is within a given region.  GeoRegions.jl allows you to perform this check easily with ispointinregion and isgridinregion.","category":"page"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"This page goes through the following:","category":"page"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"Ways to express a Region\nHow to use ispointinregion()\nHow to use ispointinregion()","category":"page"},{"location":"tutorials/isin.html#Expressing-a-Region","page":"IsIn Region?","title":"Expressing a Region","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"In both ispointinregion() and ispointinregion(), the region can be expressed in the form of the following:","category":"page"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"Grid Boundaries regionbounds which is a vector taking the form of [N,S,E,W] coordinates\nA pair of longitude and latitude vectors, rlon and rlat\nA GeoRegion ID","category":"page"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"warning: Thresholds\nYou might have noticed that for methods (1) and (3), there are variables defining the threshold of error tlon and tlat.  For method (2), these variables are defined to be half the steps in rlon and rlat respectively.  For example, if rlon = collect(18:25) and rlat = collect(0.1:0.1:10), then tlon and tlat are given by:tlon = (rlon[2]-rlon[1])/2 = 0.5;\ntlat = (rlat[2]-rlat[1])/2 = 0.05;Note that for method 2, it is assumed that the points in rlon and rlat are evenly spaced.","category":"page"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"The first two methods are provided in order for the functions to be generally applicable when a GeoRegion has not been explicitly created for this particular region.","category":"page"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"An example of each of the three different methods is as follows:","category":"page"},{"location":"tutorials/isin.html#Using-the-regionbounds-method:","page":"IsIn Region?","title":"Using the regionbounds method:","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"julia> plon = 79.5; plat = 1.76; regionbounds = [3,0,80,79];\njulia> ispointinregion(plon,plat,regionbounds)\ntrue","category":"page"},{"location":"tutorials/isin.html#Using-rlon-and-rlat:","page":"IsIn Region?","title":"Using rlon and rlat:","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"julia> plon = 79.5; rlon = collect(70:95);\njulia> plat = 1.76; rlat = collect(0:5);\njulia> ispointinregion(plon,plat,rlon,rlat)\ntrue","category":"page"},{"location":"tutorials/isin.html#Using-GeoRegion-ID","page":"IsIn Region?","title":"Using GeoRegion ID","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"julia> ID = \"GF_WAF\"; #regionbounds =  [20,-15,25,340]\njulia> plon = 100; plat = 1.76; ispointinregion(plon,plat,ID)\nERROR: Requested coordinates [100,1.76] are not within the specified region boundaries.\n\njulia> plon = 0;   plat = 1.76; ispointinregion(plon,plat,ID)\ntrue","category":"page"},{"location":"tutorials/isin.html#Is-Point-in-Region?","page":"IsIn Region?","title":"Is Point in Region?","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"There are six different methods of querying if a point is in a given region using ispointinregion.  This is a combination of having three different methods to express the region (as mentioned above), and two different methods of expressing a point.","category":"page"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"The two different methods of expression a point are:","category":"page"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"a pair of longitude and latitude points plon and plat\na coordinate vector pcoord = (plon,plat)","category":"page"},{"location":"tutorials/isin.html#Examples","page":"IsIn Region?","title":"Examples","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"Text","category":"page"},{"location":"tutorials/isin.html#Methods","page":"IsIn Region?","title":"Methods","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"ispointinregion","category":"page"},{"location":"tutorials/isin.html#GeoRegions.ispointinregion","page":"IsIn Region?","title":"GeoRegions.ispointinregion","text":"ispointinregion(plon, plat, rlon, rlat; throw=true) -> Bool\n\nCheck if a point with coordinates (plon,plat) is found within a region defined by the longitude and latitude vectors rlon and rlat\n\nArguments:\n\nplon::Real : Longitude of the point in question.\nplat::Real : Latitude of the point in question.\nrlon::Vector{<:Real} : Longitude vector spanning the region.  Points should be evenly spaced.\nrlat::Vector{<:Real} : Latitude vector spanning the region.  Points should be evenly spaced.\n\nKeyword Arguments:\n\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\nispointinregion(plon, plat, regionbounds; tlon=0, tlat=0, throw=true) -> Bool\n\nCheck if a point with coordinates (plon,plat) is found within a region defined by the bounds regionbounds in [N,S,E,W] format.\n\nArguments:\n\nplon::Real : Longitude of the point in question.\nplat::Real : Latitude of the point in question.\nregionbounds::Vector{<:Real} : Vector defining the [North,South,East,West] bounds of the region.\n\nKeyword Arguments:\n\ntlon::Real : Threshold for longitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the longitude bounds\ntlat::Real : Threshold for latitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the latitude bounds\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\nispointinregion(plon, plat, gregID; tlon=0, tlat=0, throw=true) -> Bool\n\nCheck if a point with coordinates pcoord = [plon,plat] is found within a predefined GeoRegion.\n\nArguments:\n\nplon::Real : Longitude of the point in question.\nplat::Real : Latitude of the point in question.\ngregID::AbstractString : GeoRegion ID\n\nKeyword Arguments:\n\ntlon::Real : Threshold for longitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the longitude bounds\ntlat::Real : Threshold for latitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the latitude bounds\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\nispointinregion(pcoord, rlon, rlat; throw=true) -> Bool\n\nCheck if a point with coordinates pcoord = [plon,plat] is found within a region defined by the longitude and latitude vectors rlon and rlat.\n\nArguments:\n\npcoord::Vector{<:Real} : Vector defining coordinates of point in [plon,plat]\nrlon::Vector{<:Real} : Longitude vector spanning the region.  Points should be evenly spaced.\nrlat::Vector{<:Real} : Latitude vector spanning the region.  Points should be evenly spaced.\n\nKeyword Arguments:\n\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\nispointinregion(pcoord, regionbounds; tlon=0, tlat=0, throw=true) -> Bool\n\nCheck if a point with coordinates pcoord = [plon,plat] is found within a region defined by the bounds regionbounds in [N,S,E,W] format.\n\nArguments:\n\npcoord::Vector{<:Real} : Vector defining coordinates of point in [plon,plat]\nregionbounds::Vector{<:Real} : Vector defining the [North,South,East,West] bounds of the region.\n\nKeyword Arguments:\n\ntlon::Real : Threshold for longitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the longitude bounds\ntlat::Real : Threshold for latitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the latitude bounds\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\nispointinregion(pcoord, gregID; tlon=0, tlat=0, throw=true) -> Bool\n\nCheck if a point with coordinates pcoord = [plon,plat] is found within a predefined GeoRegion.\n\nArguments:\n\npcoord::Vector{<:Real} : Vector defining coordinates of point in [plon,plat]\ngregID::AbstractString : GeoRegion ID\n\nKeyword Arguments:\n\ntlon::Real : Threshold for longitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the longitude bounds\ntlat::Real : Threshold for latitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the latitude bounds\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\n","category":"function"},{"location":"tutorials/isin.html#Is-Grid-in-Regions?","page":"IsIn Region?","title":"Is Grid in Regions?","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"There are three different methods of querying if a point is in a given region using isgridinregion, because of the three different methods to express the region (as mentioned above).","category":"page"},{"location":"tutorials/isin.html#Examples-2","page":"IsIn Region?","title":"Examples","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"Text","category":"page"},{"location":"tutorials/isin.html#Methods-2","page":"IsIn Region?","title":"Methods","text":"","category":"section"},{"location":"tutorials/isin.html","page":"IsIn Region?","title":"IsIn Region?","text":"isgridinregion","category":"page"},{"location":"tutorials/isin.html#GeoRegions.isgridinregion","page":"IsIn Region?","title":"GeoRegions.isgridinregion","text":"isgridinregion(gridbounds, regionbounds; tlon=0, tlat=0, throw=true) -> Bool\n\nCheck if a grid defined by gridbounds = [gN,gS,gE,gW] is found within a predefined GeoRegion.\n\nArguments:\n\ngridbounds::Vector{<:Real} : Vector defining the [North,South,East,West] bounds of the grid in question.\nregionbounds::Vector{<:Real} : Vector defining the [North,South,East,West] bounds of the region.\n\nKeyword Arguments:\n\ntlon::Real : Threshold for longitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the longitude bounds\ntlat::Real : Threshold for latitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the latitude bounds\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\nisgridinregion(gridbounds, rlon, rlat; throw=true) -> Bool\n\nCheck if a grid defined by gridbounds = [gN,gS,gE,gW] is found within a predefined GeoRegion.\n\nArguments:\n\ngridbounds::Vector{<:Real} : Vector defining the [North,South,East,West] bounds of the grid in question.\nrlon::Vector{<:Real} : Longitude vector spanning the region.  Points should be evenly spaced.\nrlat::Vector{<:Real} : Latitude vector spanning the region.  Points should be evenly spaced.\n\nKeyword Arguments:\n\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\nisgridinregion(gridbounds, gregID; tlon=0, tlat=0, throw=true) -> Bool\n\nCheck if a grid defined by gridbounds = [gN,gS,gE,gW] is found within a predefined GeoRegion.\n\nArguments:\n\ngridbounds::Vector{<:Real} : Vector defining the [North,South,East,West] bounds of the grid in question.\ngregID::AbstractString : GeoRegion ID\n\nKeyword Arguments:\n\ntlon::Real : Threshold for longitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the longitude bounds\ntlat::Real : Threshold for latitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the latitude bounds\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\n","category":"function"},{"location":"api.html#Application-Programming-Interface-(APIs)","page":"APIs","title":"Application Programming Interface (APIs)","text":"","category":"section"},{"location":"api.html","page":"APIs","title":"APIs","text":"This page contains a brief description of the functions not covered in the tutorials.  I aim to describe what the functions do, their arguments, and what is returned.","category":"page"},{"location":"api.html","page":"APIs","title":"APIs","text":"GeoRegions.checkpoint\nGeoRegions.checkgrid","category":"page"},{"location":"api.html#GeoRegions.checkpoint","page":"APIs","title":"GeoRegions.checkpoint","text":"checkpoint(plon, plat, rN, rS, rE, rW, tlon, tlat, throw) -> Bool\n\nCheck if a point with longitude and latitude coordinates plon and plat is found within a region defined by the bounds [rN,rS,rE,rW] format, with tlon and tlat being the threshold/margin of error for the longitude and latitude respectively.\n\nArguments:\n\nplon::Real : Longitude of the point in question.\nplat::Real : Latitude of the point in question.\nrN::Real : North bound of region\nrS::Real : South bound of region\nrE::Real : East bound of region\nrW::Real : West bound of region\ntlon::Real : Threshold for longitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the longitude bounds\ntlat::Real : Threshold for latitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the latitude bounds\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\n","category":"function"},{"location":"api.html#GeoRegions.checkgrid","page":"APIs","title":"GeoRegions.checkgrid","text":"checkgrid(gN, gS, gE, gW, rN, rS, rE, rW, tlon, tlat, throw) -> Bool\n\nCheck if a grid with bounds [gN,gS,gE,gW] is found within a region defined by the bounds [rN,rS,rE,rW] format, with tlon and tlat being the threshold/margin of error for the longitude and latitude respectively.\n\nArguments:\n\ngN::Real : North bound of grid\ngS::Real : South bound of grid\ngE::Real : East bound of grid\ngW::Real : West bound of grid\nrN::Real : North bound of region\nrS::Real : South bound of region\nrE::Real : East bound of region\nrW::Real : West bound of region\ntlon::Real : Threshold for longitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the longitude bounds\ntlat::Real : Threshold for latitude bounds in °.  If set to 0, means that there is no leniency for the point to fall outside the latitude bounds\nthrow::Bool : If throw=true, then if (plon,plat) is not within the region, an error is thrown and the program stops running.\n\n\n\n\n\n","category":"function"},{"location":"tutorials/georegions.html#GeoRegions","page":"GeoRegions","title":"GeoRegions","text":"","category":"section"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"The key purpose of GeoRegions.jl is to predefine a set of regions, known as GeoRegions, whose properties are saved in a list and can be called upon at moment's notice.  This combined with the data extraction features present in GeoRegions.jl, this allows for systematic extraction of rectilinear-gridded geographic data.","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"This page goes through the following:","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"What is a GeoRegion?\nGetting started with using GeoRegions\nFinding the properties of a GeoRegion\nAdding custom GeoRegions to the default.","category":"page"},{"location":"tutorials/georegions.html#.-What-is-a-GeoRegion?","page":"GeoRegions","title":"1. What is a GeoRegion?","text":"","category":"section"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"In essence, a GeoRegion is:","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"a rectilinear region specified by [N,W,S,E] boundaries\nidentified by an ID\nitself a subregion of a parent GeoRegion (identified by pID, which must themselves be a valid ID)","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"tip: Default GeoRegions\nWhen using GeoRegions.jl, the default GeoRegion should generally be the global domain, specified by GLB and given by the [N,W,S,E] coordinates [90,0,-90,360].  The Global GeoRegion GLB is considered to be a subset of itself.","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"tip: Predefined GeoRegions\nGeoRegions.jl has itself a list of predefined GeoRegions, which can be found in the directory $JULIA_DEPOT_PATH/files/GeoRegions/gregions.txt.  You can query the properties of these GeoRegions using gregioninfoall().  More details below.","category":"page"},{"location":"tutorials/georegions.html#.-Getting-Started","page":"GeoRegions","title":"2. Getting Started","text":"","category":"section"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"To see a list of predefined GeoRegions, as well as their properties, you can use gregioninfoall(), which will return all available GeoRegions in tabular format.  This list is also found [here].","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"julia> gregioninfoall()\n[ Info: 2020-05-27T21:54:48.08 - The following GeoRegions and their properties are offered in the GeoRegions.jl\n -------- ----- ----- ----- ----- ----- ------------------------------ -----------------------------------------\n    ID     pID    N     W     S     E    Full Name                      Notes                                    \n -------- ----- ----- ----- ----- ----- ------------------------------ -----------------------------------------\n   GLB     GLB   90     0    -90   360   Global                         Default                                  \n  GF_AUS   GLB   -10   110   -45   155   Australia                      Adapated from Giorgi & Francisco [2000]  \n  GF_AMZ   GLB   15    275   -20   330   Amazon Basin                   Adapated from Giorgi & Francisco [2000]  \n  GF_SSA   GLB   -20   280   -60   320   Southern South America         Adapated from Giorgi & Francisco [2000]  \n  GF_CAM   GLB   30    240   10    280   Central America                Adapated from Giorgi & Francisco [2000]  \n...\n -------- ----- ----- ----- ----- ----- ------------------------------ -----------------------------------------","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"To see if a particular GeoRegion exists, use isgeoregion(ID).  For example:","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"julia> isgeoregion.([\"GLB\",\"TRP\",\"GF_AUS\",\"AUS\",\"SGP\"],throw=false)\n┌ Warning: 2020-05-27T22:46:34.448 - The GeoRegion ID AUS has not been added to gregions.txt.\n└ @ GeoRegions ~/.julia/dev/GeoRegions/src/query.jl:67\n┌ Warning: 2020-05-27T22:46:34.469 - The GeoRegion ID SGP has not been added to gregions.txt.\n└ @ GeoRegions ~/.julia/dev/GeoRegions/src/query.jl:67\n5-element BitArray{1}:\n 1\n 1\n 1\n 0\n 0","category":"page"},{"location":"tutorials/georegions.html#.-Finding-the-Properties-of-a-GeoRegion","page":"GeoRegions","title":"3. Finding the Properties of a GeoRegion","text":"","category":"section"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"The following properties of a GeoRegion can be queried by using its ID:","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"The bounds of the GeoRegion in [N,S,E,W] Vector format\nThe name of the GeoRegion in String format\nThe ID of the parent GeoRegion (called pID for clarity)\nA list of child GeoRegions of the current GeoRegion","category":"page"},{"location":"tutorials/georegions.html#Querying-the-bounds-of-a-GeoRegion","page":"GeoRegions","title":"Querying the bounds of a GeoRegion","text":"","category":"section"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"We query the [N,S,E,W] bounds of a GeoRegion using the function gregionbounds(ID)","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"julia> gregionbounds.([\"SEA\",\"TRP\",\"GF_MED\"])\n3-element Array{Array{Int64,1},1}:\n [20, -15, 165, 90]\n [30, -30, 360, 0]\n [50, 30, 40, 350]","category":"page"},{"location":"tutorials/georegions.html#Querying-the-name-of-a-GeoRegion","page":"GeoRegions","title":"Querying the name of a GeoRegion","text":"","category":"section"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"We query the name that describes a GeoRegion using the function gregionfullname(ID)","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"julia> gregionfullname.([\"ISM\",\"GF_EAF\",\"GF_TIB\"])\n3-element Array{SubString{String},1}:\n \"Indian Summer Monsoon Region\"\n \"Eastern Africa\"\n \"Tibet\"","category":"page"},{"location":"tutorials/georegions.html#Querying-the-Parent-ID-(pID)-of-a-GeoRegion","page":"GeoRegions","title":"Querying the Parent ID (pID) of a GeoRegion","text":"","category":"section"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"We query the ID of the Parent of a GeoRegion using the function gregionparent(ID)","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"julia> gregionparent.([\"GLB\",\"GF_EAF\",\"SEA\"])\n3-element Array{SubString{String},1}:\n \"GLB\"\n \"GLB\"\n \"TRP\"","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"We can query the next-level Parent using the keyword levels","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"julia> gregionparent.([\"GLB\",\"GF_EAF\",\"SEA\"],levels=2)\n3-element Array{SubString{String},1}:\n \"GLB\"\n \"GLB\"\n \"GLB\"","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"note: Parent of the Global GeoRegions\nThe parent GeoRegion of the Global GeoRegion GLB is itself.julia> gregionparent(\"SEA\",levels=1000000)\n \"GLB\"","category":"page"},{"location":"tutorials/georegions.html#Querying-the-Children-of-a-GeoRegion","page":"GeoRegions","title":"Querying the Children of a GeoRegion","text":"","category":"section"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"We can query the direct children GeoRegions of a given GeoRegion via:","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"julia> gregionchild(\"GLB\",throw=false)\n -------- ----- ----- ----- ----- ----- ------------------------------ -----------------------------------------\n    ID     pID    N     W     S     E    Full Name                      Notes                                    \n -------- ----- ----- ----- ----- ----- ------------------------------ -----------------------------------------\n   GLB     GLB   90     0    -90   360   Global                         Default                                  \n  GF_AUS   GLB   -10   110   -45   155   Australia                      Adapated from Giorgi & Francisco [2000]  \n   ...\n   EAM     GLB   50    90     0    150   East Asian Monsoon Region      Predefined in GeoRegions v1.0            \n -------- ----- ----- ----- ----- ----- ------------------------------ -----------------------------------------\n25-element Array{Any,1}:\n \"GLB\"\n \"GF_AUS\"\n ...\n \"EAM\"","category":"page"},{"location":"tutorials/georegions.html#.-Adding-Custom-GeoRegions","page":"GeoRegions","title":"4. Adding Custom GeoRegions","text":"","category":"section"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"When you use any function that deals with GeoRegions, GeoRegion.jl will retrieve the list of predefined GeoRegions from the textfile in the path (See the tip above on predefined GeoRegions):","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"$JULIA_DEPOT_PATH/files/GeoRegions/gregions.txt","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"If this file does not exist, then GeoRegions.jl will make a file in this location using gregioncopy().  If you want to overwrite the old file in this location and replace it with a fresh file, then use the keyword overwrite = true","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"julia> gregioncopy(overwrite=true)\n┌ Warning: 2020-05-28T02:22:00.977 - Overwriting gregions.txt in /Users/natgeo-wong/.julia/files/GeoRegions/ ...\n└ @ GeoRegions ~/.julia/dev/GeoRegions/src/query.jl:26\n\"/Users/natgeo-wong/.julia/files/GeoRegions/gregions.txt\"","category":"page"},{"location":"tutorials/georegions.html","page":"GeoRegions","title":"GeoRegions","text":"note: Just a note:\ngregioncopy() will also return the path of the file gregions.txt.","category":"page"},{"location":"list.html#List-of-Available-GeoRegions","page":"GeoRegions List","title":"List of Available GeoRegions","text":"","category":"section"},{"location":"list.html","page":"GeoRegions List","title":"GeoRegions List","text":"This page contains a list of the GeoRegions that are currently available in GeoRegions.jl.","category":"page"},{"location":"list.html","page":"GeoRegions List","title":"GeoRegions List","text":"The default GeoRegion covers the global domain |  identified as GLB","category":"page"},{"location":"list.html","page":"GeoRegions List","title":"GeoRegions List","text":"ID pID N W S E Name\nGLB GLB 90 0 -90 360 Global","category":"page"},{"location":"list.html#Predefined-in-GeoRegions","page":"GeoRegions List","title":"Predefined in GeoRegions","text":"","category":"section"},{"location":"list.html","page":"GeoRegions List","title":"GeoRegions List","text":"ID pID N W S E Name Ver\nTRP GLB 30 0 -30 360 Tropical Belt ≥1.0\nISM GLB 45 35 -15 105 Indian Summer Monsoon ≥1.0\nEAM GLB 50 90 0 150 East Asian Monsoon ≥1.0\nSEA TRP 20 90 -15 165 Southeast Asia ≥1.0","category":"page"},{"location":"list.html#Adapted-from-Giorgi-and-Francisco-[2000]","page":"GeoRegions List","title":"Adapted from Giorgi & Francisco [2000]","text":"","category":"section"},{"location":"list.html","page":"GeoRegions List","title":"GeoRegions List","text":"compat: GeoRegions > 1.1\nAll GF_* domains are defined only in versions ≥1.1","category":"page"},{"location":"list.html","page":"GeoRegions List","title":"GeoRegions List","text":"ID pID N W S E Name\nGF_AUS GLB -10 110 -45 155 Australia\nGF_AMZ GLB 15 275 -20 330 Amazon Basin\nGF_SSA GLB -20 280 -60 320 Southern South America\nGF_CAM GLB 30 240 10 280 Central America\nGF_WNA GLB 60 230 30 255 Western North America\nGF_CNA GLB 50 255 30 275 Central North America\nGF_ENA GLB 50 275 25 300 Eastern North America\nGF_ALA GLB 75 180 50 255 Alaska\nGF_GRL GLB 85 255 50 350 Greenland\nGF_MED GLB 50 350 30 40 Mediterranean Basin\nGF_NEU GLB 75 350 50 40 Northern Europe\nGF_WAF GLB 20 340 -15 25 Western Africa\nGF_EAF GLB 20 20 -15 55 Eastern Africa\nGF_SAF GLB -10 350 -35 55 Southern Africa\nGF_SAH GLB 30 340 15 65 Sahara\nGF_SEA GLB 20 90 -15 165 Southeast Asia\nGF_EAS GLB 50 100 20 145 East Asia\nGF_SAS GLB 30 65 5 100 South Asia\nGF_CAS GLB 50 40 30 75 Central Asia\nGF_TIB GLB 50 75 30 100 Tibet\nGF_NAS GLB 85 40 50 180 North Asia","category":"page"},{"location":"index.html#GeoRegions.jl","page":"Home","title":"GeoRegions.jl","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Extract Point/Gridded Data from a Regional Dataset","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"GeoRegions.jl is a Julia package that aims to streamline the following processes:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"query if a point / grid is within a specified boundary\nextract point data (given coordinates) from a given region\nextract gridded data (given grid bounds) from a larger (parent) region (grid must be entirely within parent region)","category":"page"},{"location":"index.html#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"GeoRegions.jl can be installed using Julia's built-in package manager as follows:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"julia> ]\n(@v1.4) pkg> add GeoRegions","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"You can update GeoRegions.jl to the latest version using","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"(@v1.4) pkg> update GeoRegions","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"And if you want to get the latest release without waiting for me to update the Julia Registry (although this generally isn't necessary since I make a point to release patch versions as soon as I find bugs or add new working features), you may fix the version to the master branch of the GitHub repository:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"(@v1.4) pkg> add GeoRegions#master","category":"page"},{"location":"index.html#Documentation","page":"Home","title":"Documentation","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"The documentation for GeoRegions.jl is divided into three components:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Tutorials - meant as an introduction to the package\nHow-to Examples - geared towards those looking for specific examples of what can be done\nAPI Reference - comprehensive summary of all exported functionalities","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"tip: Obtaining Example Datasets\nAll the output for the coding examples were produced using my computer with key security information (such as login info) omitted.  The examples cannot be run online because the file size requirements are too big.  Copying and pasting the code examples (with relevant directory and login information changes) should produce the same results.","category":"page"},{"location":"index.html#Getting-help","page":"Home","title":"Getting help","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"If you are interested in using GeoRegions.jl or are trying to figure out how to use it, please feel free to ask me questions and get in touch!  Please feel free to open an issue if you have any questions, comments, suggestions, etc!","category":"page"}]
}