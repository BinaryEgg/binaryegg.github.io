(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[183],{Kjk6:function(e,n){function a(e){return e?"string"===typeof e?e:e.source:null}function t(e){return i("(?=",e,")")}function i(...e){return e.map((e=>a(e))).join("")}function s(...e){return"("+e.map((e=>a(e))).join("|")+")"}const c=e=>i(/\b/,e,/\w$/.test(e)?/\b/:/\B/),u=["Protocol","Type"].map(c),r=["init","self"].map(c),o=["Any","Self"],l=["associatedtype",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],m=["false","nil","true"],p=["assignment","associativity","higherThan","left","lowerThan","none","right"],d=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],F=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],b=s(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),h=s(b,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),w=i(b,h,"*"),f=s(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),y=s(f,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),g=i(f,y,"*"),E=i(/[A-Z]/,y,"*"),v=["autoclosure",i(/convention\(/,s("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",i(/objc\(/,g,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],N=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];e.exports=function(e){const n={match:/\s+/,relevance:0},a=e.COMMENT("/\\*","\\*/",{contains:["self"]}),b=[e.C_LINE_COMMENT_MODE,a],f={className:"keyword",begin:i(/\./,t(s(...u,...r))),end:s(...u,...r),excludeBegin:!0},A={match:i(/\./,s(...l)),relevance:0},_=l.filter((e=>"string"===typeof e)).concat(["_|0"]),C={variants:[{className:"keyword",match:s(...l.filter((e=>"string"!==typeof e)).concat(o).map(c),...r)}]},k={$pattern:s(/\b\w+/,/#\w+/),keyword:_.concat(d),literal:m},D=[f,A,C],B=[{match:i(/\./,s(...F)),relevance:0},{className:"built_in",match:i(/\b/,s(...F),/(?=\()/)}],M={match:/->/,relevance:0},S=[M,{className:"operator",relevance:0,variants:[{match:w},{match:`\\.(\\.|${h})+`}]}],x="([0-9a-fA-F]_*)+",I={className:"number",relevance:0,variants:[{match:"\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"},{match:`\\b0x(${x})(\\.(${x}))?([pP][+-]?(([0-9]_*)+))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},O=(e="")=>({className:"subst",variants:[{match:i(/\\/,e,/[0\\tnr"']/)},{match:i(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),T=(e="")=>({className:"subst",match:i(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),L=(e="")=>({className:"subst",label:"interpol",begin:i(/\\/,e,/\(/),end:/\)/}),K=(e="")=>({begin:i(e,/"""/),end:i(/"""/,e),contains:[O(e),T(e),L(e)]}),P=(e="")=>({begin:i(e,/"/),end:i(/"/,e),contains:[O(e),L(e)]}),$={className:"string",variants:[K(),K("#"),K("##"),K("###"),P(),P("#"),P("##"),P("###")]},j={match:i(/`/,g,/`/)},z=[j,{className:"variable",match:/\$\d+/},{className:"variable",match:`\\$${y}+`}],q=[{match:/(@|#)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:N,contains:[...S,I,$]}]}},{className:"keyword",match:i(/@/,s(...v))},{className:"meta",match:i(/@/,g)}],U={match:t(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:i(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,y,"+")},{className:"type",match:E,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:i(/\s+&\s+/,t(E)),relevance:0}]},Z={begin:/</,end:/>/,keywords:k,contains:[...b,...D,...q,M,U]};U.contains.push(Z);const G={begin:/\(/,end:/\)/,relevance:0,keywords:k,contains:["self",{match:i(g,/\s*:/),keywords:"_|0",relevance:0},...b,...D,...B,...S,I,$,...z,...q,U]},H={beginKeywords:"func",contains:[{className:"title",match:s(j.match,g,w),endsParent:!0,relevance:0},n]},R={begin:/</,end:/>/,contains:[...b,U]},V={begin:/\(/,end:/\)/,keywords:k,contains:[{begin:s(t(i(g,/\s*:/)),t(i(g,/\s+/,g,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:g}]},...b,...D,...S,I,$,...q,U,G],endsParent:!0,illegal:/["']/},W={className:"function",match:t(/\bfunc\b/),contains:[H,R,V,n],illegal:[/\[/,/%/]},J={className:"function",match:/\b(subscript|init[?!]?)\s*(?=[<(])/,keywords:{keyword:"subscript init init? init!",$pattern:/\w+[?!]?/},contains:[R,V,n],illegal:/\[|%/},X={beginKeywords:"operator",end:e.MATCH_NOTHING_RE,contains:[{className:"title",match:w,endsParent:!0,relevance:0}]},Q={beginKeywords:"precedencegroup",end:e.MATCH_NOTHING_RE,contains:[{className:"title",match:E,relevance:0},{begin:/{/,end:/}/,relevance:0,endsParent:!0,keywords:[...p,...m],contains:[U]}]};for(const t of $.variants){const e=t.contains.find((e=>"interpol"===e.label));e.keywords=k;const n=[...D,...B,...S,I,$,...z];e.contains=[...n,{begin:/\(/,end:/\)/,contains:["self",...n]}]}return{name:"Swift",keywords:k,contains:[...b,W,J,{className:"class",beginKeywords:"struct protocol class extension enum",end:"\\{",excludeEnd:!0,keywords:k,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...D]},X,Q,{beginKeywords:"import",end:/$/,contains:[...b],relevance:0},...D,...B,...S,I,$,...z,...q,U,G]}}}}]);