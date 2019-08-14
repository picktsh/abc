var Button = {
	Button: function(options) {
		if(typeof options.cooldown == 'number') {
			this.data_cooldown = options.cooldown;
		}
		this.data_remaining = 0;
		if(typeof options.click == 'function') {
			this.data_handler = options.click;
		}
		
		var el = $('<div>')
			.attr('id', typeof(options.id) != 'undefined' ? options.id : "BTN_" + Engine.getGuid())
			.addClass('button')
			.text(typeof(options.text) != 'undefined' ? options.text : "button")
			.click(function() { 
				if(!$(this).hasClass('disabled')) {
					Button.cooldown($(this));
					$(this).data("handler")($(this));
				}
			})
			.data("auto_reload", false)
			.dblclick(function() {
				var auto = !$(this).data("auto_reload");
				$(this).data("auto_reload", auto);
				if (auto) {
					$('div.cooldown', $(this)).addClass('auto');
				}
				else {
					$('div.cooldown', $(this)).removeClass('auto');
				}
			})
			.data("handler",  typeof options.click == 'function' ? options.click : function() { Engine.log("click"); })
			.data("remaining", 0)
			.data("cooldown", typeof options.cooldown == 'number' ? options.cooldown : 0);
		
		el.append($("<div>").addClass('cooldown'));
		
		if(options.cost) {
			var ttPos = options.ttPos ? options.ttPos : "bottom right";
			var costTooltip = $('<div>').addClass('tooltip ' + ttPos);
			var affordable = true;
			for(var k in options.cost) {
				var have = $SM.get("stores." + _(k));
				var need = options.cost[k];
				$("<div>").addClass('row_key').text(_(k)).appendTo(costTooltip);
				$("<div>").addClass('row_val').text(need).appendTo(costTooltip);
				if (have < need) affordable = false;
			}
			el.toggleClass('affordable', affordable);
			if(costTooltip.children().length > 0) {
				costTooltip.appendTo(el);
			}
			// Subscribe to stateUpdateEvent
			$.Dispatch('stateUpdate').subscribe(function (e) {
				if (e.category != 'stores') return;
				var affordable = true;
				for (var k in options.cost) {
					var need = options.cost[k];
					var have = $SM.get("stores." + _(k));
					if (need > have) {
						affordable = false;
						break;
					}
				}
				el.toggleClass('affordable', affordable);
			});
		}
		
		if(options.width) {
			el.css('width', options.width);
		}
		
		return el;
	},
	
	setDisabled: function(btn, disabled) {
		if(btn) {
			if(!disabled && !btn.data('onCooldown')) {
				btn.removeClass('disabled');
			} else if(disabled) {
				btn.addClass('disabled');
			}
			btn.data('disabled', disabled);
		}
	},
	
	isDisabled: function(btn) {
		if(btn) {
			return btn.data('disabled') === true;
		}
		return false;
	},
	
	cooldown: function(btn) {
		var cd = btn.data("cooldown");
		if(cd > 0) {
			$('div.cooldown', btn).stop(true, true).width("100%").animate({width: '0%'}, cd * 1000, 'linear', function() {
				var b = $(this).closest('.button');
				b.data('onCooldown', false);
				if(!b.data('disabled')) {
					b.removeClass('disabled');
				}
				if (b.data('auto_reload')) {
					b.click();
				}
			});
			btn.addClass('disabled');
			btn.data('onCooldown', true);
		}
	},
	
	clearCooldown: function(btn) {
		$('div.cooldown', btn).stop(true, true);
		btn.data('onCooldown', false);
		if(!btn.data('disabled')) {
			btn.removeClass('disabled');
		}
	}
};
