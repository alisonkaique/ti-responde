#include 'totvs.ch'

user function openZAP()
	FWCallApp( 'ti-responde-angular-js-to-advpl-advpl-to-js' )
return

static function jsToAdvpl( oWebChannel, cType, cContent )
	if cType == 'mensagemJavascript'
		alert('O que veio do JS: ' + cContent)
	elseif cType == 'receberProtheus'
		oWebChannel:AdvPLToJS('mensagemProtheus', 'Comando ADVPL')
	endif
return .T.
