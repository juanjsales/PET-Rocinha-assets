/* ==========================================================================
   SISTEMA MASTER PRO V23.0: CIRCLE.SO READY WITH SMART BUTTON TOUR FINDER
   Comunidade Aprender e Cuidar / Profissão Pet
   ========================================================================== */

(function() {
    try {
        var oldStyles = document.querySelectorAll('style[id*="consolidated"], style[id*="legacy"], style[id*="pet-styles"], style[id*="pet-modal-styles"], style[id*="pet-modal-multi"], style[id*="sandbox"], style[id*="pet-anim"], style[id*="pet-widget-combined-styles"], style[id*="pet-master-system-styles"]');
        oldStyles.forEach(function(st) { st.remove(); });

        if (document.getElementById("pet-master-system-styles-pro-v23")) return;
        var style = document.createElement('style');
        style.id = "pet-master-system-styles-pro-v23";
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap');
            
            body.modal-open-circle { overflow: hidden !important; }
            
            /* -------------------------------------
               1. MENTORA CORPO INTEIRO & WIDGET FLUTUANTE
               ------------------------------------- */
            #pet-floating-widget {
                position: fixed !important; z-index: 2147483640 !important; touch-action: none; user-select: none;
                display: flex; flex-direction: column; align-items: flex-end; gap: 8px;
            }

            #pet-widget-fullbody-container {
                position: fixed !important; bottom: 20px; right: 260px; z-index: 2147483639 !important;
                display: flex; flex-direction: column; align-items: flex-end; pointer-events: none;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }

            @keyframes dandaraStandFloat {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-7px) rotate(1.5deg); }
            }

            @keyframes dandaraTalkBounce {
                0%, 100% { transform: translateY(0px) scale(1); }
                50% { transform: translateY(-4px) scale(1.02); }
            }

            .pet-fullbody-transparent-wrap {
                position: relative; width: 140px; height: 260px; display: flex; align-items: flex-end;
                justify-content: center; pointer-events: auto; cursor: pointer;
                filter: drop-shadow(0 15px 25px rgba(0,0,0,0.55));
                animation: dandaraStandFloat 4s ease-in-out infinite; transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .pet-fullbody-transparent-wrap:hover { transform: scale(1.08) translateY(-4px); }

            .pet-fullbody-img-transparent {
                width: 100%; height: 100%; object-fit: contain; object-position: bottom center;
                background: transparent !important;
            }

            .pet-dandara-speaking {
                animation: dandaraTalkBounce 0.4s ease-in-out infinite alternate !important;
            }

            .pet-dandara-widget-speech {
                background: linear-gradient(135deg, #1a1850 0%, #0f172a 100%); color: white;
                padding: 10px 16px; border-radius: 18px; font-size: 13px; font-weight: 800;
                border: 2px solid #e08b26; box-shadow: 0 10px 25px rgba(0,0,0,0.25);
                margin-bottom: 8px; pointer-events: auto; cursor: pointer; max-width: 220px; text-align: center;
                animation: modalBounce 0.5s ease-out; line-height: 1.4; position: relative;
            }
            .pet-dandara-widget-speech::after {
                content: ''; position: absolute; bottom: -8px; right: 40px; width: 0; height: 0;
                border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #e08b26;
            }

            .pet-widget-container {
                display: flex !important; align-items: center !important; background: rgba(255, 255, 255, 0.96) !important;
                backdrop-filter: blur(14px); border-radius: 50px !important; padding: 6px 12px !important;
                box-shadow: 0 12px 35px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(224, 139, 38, 0.15) !important;
                border: 2px solid #e08b26 !important;
                transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
            }
            .pet-widget-container:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(224, 139, 38, 0.35) !important; }
            .pet-drag-handle {
                cursor: grab !important; padding: 0 8px 0 4px !important; color: #94a3b8 !important;
                font-size: 16px !important; display: flex; align-items: center; border-right: 1px solid #e2e8f0; margin-right: 6px;
            }
            .pet-drag-handle:active { cursor: grabbing !important; }
            .pet-widget-main-content { display: flex !important; align-items: center !important; gap: 10px !important; cursor: pointer !important; padding-right: 8px; }
            .pet-widget-badge { width: 44px !important; height: 44px !important; border-radius: 50% !important; pointer-events: none; object-fit: cover; box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
            .pet-widget-info { display: flex !important; flex-direction: column !important; }
            .pet-widget-label { font-size: 9px !important; color: #94a3b8 !important; text-transform: uppercase !important; font-weight: 800 !important; line-height: 1 !important; letter-spacing: 0.5px; }
            .pet-widget-value { font-size: 18px !important; color: #e08b26 !important; font-weight: 900 !important; line-height: 1.2 !important; white-space: nowrap; }
            
            .pet-widget-actions { display: flex; align-items: center; gap: 5px; border-left: 1px solid #e2e8f0; padding-left: 8px; }
            .pet-btn-action {
                width: 28px !important; height: 28px !important; background: #f1f5f9 !important; border: none !important; border-radius: 50% !important;
                color: #64748b !important; font-size: 13px !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .pet-btn-action:hover { background: #e08b26 !important; color: white !important; transform: scale(1.12); }
            
            .pet-minimized-icon {
                width: 54px !important; height: 54px !important; background: linear-gradient(135deg, #e08b26 0%, #c7761b 100%) !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; box-shadow: 0 8px 24px rgba(224, 139, 38, 0.45) !important; color: white !important; font-size: 25px !important; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); border: 2px solid white;
            }
            .pet-minimized-icon:hover { transform: scale(1.14) rotate(8deg); }

            /* -------------------------------------
               2. ONBOARDING TOUR TRANSPARENTE DESKTOP
               ------------------------------------- */
            .pet-overlay-global { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2147483647 !important; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif; transition: background-color 0.5s ease; }
            
            .pet-spotlight-ring {
                position: fixed; z-index: 2147483645; pointer-events: none;
                border: 3px solid #e08b26; border-radius: 14px;
                box-shadow: 0 0 0 9999px rgba(15, 23, 42, 0.78), 0 0 30px rgba(224, 139, 38, 0.85);
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .pet-tour-wrapper {
                position: fixed; z-index: 2147483646; display: flex; align-items: flex-end; gap: 16px;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .pet-tour-card {
                background: #ffffff; color: #0f172a; width: 440px; max-width: 90vw; border-radius: 26px; padding: 26px;
                box-shadow: 0 25px 60px rgba(15, 23, 42, 0.55); border: 2px solid #e08b26;
                word-wrap: break-word; overflow-wrap: break-word; position: relative;
            }

            .pet-tour-dandara-side {
                position: relative; width: 150px; height: 280px; display: flex;
                align-items: flex-end; justify-content: center; flex-shrink: 0; cursor: pointer;
                animation: dandaraStandFloat 4s ease-in-out infinite;
                transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                filter: drop-shadow(0 15px 30px rgba(0,0,0,0.6));
            }
            .pet-tour-dandara-side:hover { transform: scale(1.08) translateY(-4px); }

            .pet-tour-dandara-img {
                width: 100%; height: 100%; object-fit: contain; object-position: bottom center;
                background: transparent !important;
            }

            .pet-guide-header {
                display: flex; align-items: center; gap: 12px; margin-bottom: 14px;
                background: #fff9f2; padding: 8px 14px; border-radius: 18px; border: 1px solid #fbd38d;
            }
            .pet-guide-meta { display: flex; flex-direction: column; }
            .pet-guide-name { font-size: 15px; font-weight: 900; color: #1a1850; line-height: 1.2; }
            .pet-guide-role { font-size: 11px; font-weight: 800; color: #e08b26; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; }

            .pet-dandara-interactive-bubble {
                display: none; background: linear-gradient(135deg, #1a1850 0%, #0f172a 100%);
                color: white; padding: 10px 14px; border-radius: 14px; font-size: 12.5px; font-weight: 700;
                margin-bottom: 14px; border-left: 3px solid #e08b26;
                box-shadow: 0 4px 15px rgba(0,0,0,0.15); line-height: 1.4;
            }

            .pet-tour-location-badge {
                display: inline-block; background: #f1f5f9; color: #475569;
                padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;
                margin-bottom: 10px; line-height: 1.3;
            }

            .pet-tour-title { font-size: 20px; font-weight: 900; color: #1a1850; margin-bottom: 12px; line-height: 1.35; letter-spacing: -0.3px; word-break: normal; }
            .pet-tour-desc { font-size: 14.5px; color: #475569; line-height: 1.6; margin-bottom: 22px; word-break: normal; }

            .btn-whatsapp-arrasas {
                display: flex; align-items: center; justify-content: center; gap: 10px;
                background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); color: white;
                text-decoration: none; padding: 14px 20px; border-radius: 14px; font-weight: 800; font-size: 15px;
                box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35); transition: all 0.25s ease; width: 100%; margin-top: 14px; border: none; cursor: pointer; text-align: center;
            }
            .btn-whatsapp-arrasas:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5); }

            .pet-tour-nav { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
            .pet-tour-step-count { font-size: 13px; font-weight: 800; color: #94a3b8; white-space: nowrap; }

            /* CENSO PET & MODAIS */
            .paw-step-container { position: absolute; font-size: 44px; z-index: 2147483648; pointer-events: none; opacity: 1; transition: opacity 0.5s ease; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3)); }
            .paw-stamp { display: inline-block; }

            .pet-form-card { background: #ffffff; width: 92%; max-width: 500px; border-radius: 28px; box-shadow: 0 25px 60px -10px rgba(15, 23, 42, 0.45); overflow: hidden; display: flex; flex-direction: column; position: relative; }
            
            .pet-form-header { background: linear-gradient(135deg, #1a1850 0%, #0f172a 100%); color: white; padding: 24px; text-align: center; position: relative; display: flex; flex-direction: column; align-items: center; }
            .pet-form-header h3 { margin: 0; font-size: 22px; font-weight: 900; letter-spacing: -0.5px; line-height: 1.3; }
            .pet-form-header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.85; font-weight: 600; }
            
            .close-form-btn { position: absolute; top: 18px; right: 18px; background: rgba(255, 255, 255, 0.15); border: none; color: white; cursor: pointer; width: 32px; height: 32px; border-radius: 50%; transition: background 0.2s, transform 0.2s; display: flex; align-items: center; justify-content: center; font-size: 14px; }
            .close-form-btn:hover { background: rgba(255, 255, 255, 0.3); transform: rotate(90deg); }

            .progress-container { width: 100%; background: #e2e8f0; height: 6px; }
            #progress-fill { height: 100%; background: linear-gradient(90deg, #e08b26, #f59e0b); width: 0%; transition: width 0.4s ease; }

            .pet-form-body { padding: 28px; text-align: left; }
            .form-step { display: none; opacity: 0; transition: opacity 0.3s; }
            .form-step.active { display: block; opacity: 1; }
            
            .pet-cycle-indicator { background: #fff9f2; color: #e08b26; border: 1px solid #fbd38d; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 20px; display: inline-block; margin-bottom: 16px; }
            .pet-input-group { margin-bottom: 18px; position: relative; }
            .pet-input-group label { display: block; font-size: 14px; font-weight: 700; color: #334155; margin-bottom: 8px; line-height: 1.4; }
            
            .pet-field { width: 100%; padding: 14px 16px; border: 2px solid #cbd5e1; border-radius: 14px; font-size: 15px; box-sizing: border-box; background: #f8fafc; color: #0f172a; transition: all 0.3s ease; }
            .pet-field:focus { outline: none; border-color: #e08b26; background: #ffffff; box-shadow: 0 0 0 4px rgba(224, 139, 38, 0.15); transform: translateY(-2px); }
            
            .pet-image-preview-container { margin-top: 12px; width: 100%; height: 140px; border-radius: 14px; overflow: hidden; border: 2px dashed #cbd5e1; display: none; align-items: center; justify-content: center; background: #f1f5f9; position: relative; }
            .pet-image-preview-img { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; display: block; }
            
            .pet-autocomplete-suggestions { position: absolute; top: 100%; left: 0; width: 100%; background: white; border: 1px solid #cbd5e1; border-radius: 12px; z-index: 2147483647 !important; max-height: 160px; overflow-y: auto; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); margin-top: 4px; }
            .autocomplete-item { padding: 12px 16px; cursor: pointer; text-align: left; font-size: 14px; color: #1a1850; border-bottom: 1px solid #f1f5f9; transition: all 0.2s; }
            .autocomplete-item:hover { background: #fff9f2; color: #e08b26; font-weight: 700; padding-left: 20px; }
            
            .pet-form-footer { display: flex; justify-content: space-between; margin-top: 24px; gap: 12px; }
            .btn-pet { padding: 14px 20px; border-radius: 14px; font-weight: 800; cursor: pointer; border: none; flex: 1; font-size: 15px; transition: all 0.2s; box-shadow: 0 4px 0 rgba(0,0,0,0.05); white-space: nowrap; }
            .btn-pet:active { transform: translateY(3px); box-shadow: none; }
            .btn-pet-next { background: #e08b26; color: white; }
            .btn-pet-next:hover { background: #c7761b; }
            .btn-pet-prev { background: #f1f5f9; color: #475569; }
            .btn-pet-prev:hover { background: #e2e8f0; }
            
            .socio-alert-container { text-align: center; padding: 12px 0; }
            .btn-socio-action { display: block; background: #e08b26; color: white; text-decoration: none; padding: 18px; border-radius: 14px; font-weight: 900; font-size: 16px; margin-top: 20px; box-shadow: 0 4px 15px rgba(224, 139, 38, 0.35); transition: all 0.2s; }
            .btn-socio-action:hover { background: #c7761b; transform: scale(1.02); }
            .btn-close-final { background: none; border: none; color: #64748b; text-decoration: underline; margin-top: 18px; cursor: pointer; font-size: 14px; }

            /* -------------------------------------
               3. ADAPTAÇÃO MOBILE PREMIUM (BOTTOM SHEET DRAWER & PERFECT FIT)
               ------------------------------------- */
            @media (max-width: 768px) {
                .pet-tour-wrapper {
                    position: fixed !important;
                    top: auto !important;
                    bottom: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    width: 100% !important;
                    transform: none !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    justify-content: flex-end !important;
                    z-index: 2147483646 !important;
                    pointer-events: none !important;
                    padding-top: 140px !important;
                }
                .pet-tour-card {
                    width: 100% !important;
                    max-width: 100% !important;
                    max-height: 75vh !important;
                    overflow-y: auto !important;
                    padding: 20px 18px max(24px, env(safe-area-inset-bottom, 24px)) 18px !important;
                    border-radius: 24px 24px 0 0 !important;
                    border: 2px solid #e08b26 !important;
                    border-bottom: none !important;
                    box-shadow: 0 -15px 40px rgba(15, 23, 42, 0.65) !important;
                    pointer-events: auto !important;
                }
                .pet-tour-dandara-side {
                    width: 110px !important;
                    height: 160px !important;
                    position: absolute !important;
                    top: 0px !important;
                    right: 15px !important;
                    margin: 0 !important;
                    z-index: 10 !important;
                    pointer-events: auto !important;
                    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5)) !important;
                }
                .pet-tour-title { font-size: 17px !important; margin-bottom: 8px !important; }
                .pet-tour-desc { font-size: 13px !important; margin-bottom: 16px !important; line-height: 1.45 !important; }
                .pet-guide-header { padding: 6px 12px !important; margin-bottom: 10px !important; max-width: calc(100% - 110px) !important; }
                .pet-guide-name { font-size: 13px !important; }
                .pet-guide-role { font-size: 10px !important; }
                .pet-tour-location-badge { font-size: 10px !important; padding: 3px 8px !important; margin-bottom: 8px !important; }

                #pet-floating-widget {
                    bottom: max(16px, env(safe-area-inset-bottom, 16px)) !important;
                    right: 16px !important;
                }
                #pet-widget-fullbody-container {
                    right: 10px !important;
                    bottom: 75px !important;
                }
                .pet-fullbody-transparent-wrap {
                    width: 100px !important;
                    height: 180px !important;
                }
                .btn-pet { padding: 12px 14px !important; font-size: 13.5px !important; font-weight: 800 !important; }
            }
        `;
        document.head.appendChild(style);
    } catch(e) {
        console.error("Erro nos estilos PetMasterSystem:", e);
    }
})();

window.PetMasterSystem = {
    urlAppScript: "https://script.google.com/macros/s/AKfycbyCtBQ_wVDEpyKybzHgo9eFswc6tczQuFs53VLzg3t9HuoFbLOVVY_zrVScPxIwG2b0/exec",
    webhookUrlMake: "https://hook.eu1.make.com/clput5qjl61dnyoy3nf2vsloc86zhhfn",
    whatsappArrasasUrl: "https://wa.me/5521982013090?text=Oi",
    socioFormUrl: "https://comunidade.aprenderecuidar.com.br/socio",
    
    poses: {
        boasVindas: "https://raw.githubusercontent.com/juanjsales/PET-Rocinha-assets/main/dandara_boas_vindas.png",
        apontando: "https://raw.githubusercontent.com/juanjsales/PET-Rocinha-assets/main/dandara_apontando.png",
        comemorando: "https://raw.githubusercontent.com/juanjsales/PET-Rocinha-assets/main/dandara_comemorando.png"
    },
    guideName: "Mentora da Comunidade",
    guideRole: "Guia Profissão Pet 🐾",
    guidePhrases: [
        "Bora transformar seu amor pelos pets em conquista, mulher! 🐾",
        "Cada passo seu é um orgulho imenso pra nossa comunidade! ✨",
        "Tô aqui torcendo por você! Qualquer dúvida, chama em Dúvidas! 💬",
        "Você é forte, talentosa e vai muito longe! 🚀",
        "Acredita no seu potencial, o futuro da área PET é seu! 💖"
    ],
    phraseIndex: 0,
    talkingTimer: null,
    
    sandboxMode: false, 
    constants: {
        WIDGET_ID: 'pet-floating-widget',
        FULLBODY_ID: 'pet-widget-fullbody-container',
        TOUR_OVERLAY_ID: 'pet-tour-overlay',
        SPOTLIGHT_ID: 'pet-spotlight-ring',
        CENSO_MODAL_ID: 'pet-form-modal-overlay',
        WALK_CONTAINER_ID: 'pet-walk-container',
        INTRO_CARD_ID: 'pet-intro-card',
        FORM_STEP_QTD: 'pet-qtd',
        FORM_STEP_NOME: 'pet-nome',
        FORM_STEP_TIPO: 'pet-tipo',
        FORM_STEP_RACA: 'pet-raca',
        FORM_STEP_GASTO: 'pet-gasto-unitario',
        PREVIEW_BOX_ID: 'pet-preview-box',
        PROGRESS_FILL_ID: 'progress-fill',
        NEXT_BTN_ID: 'pet-next-btn',
        PREV_BTN_ID: 'pet-prev-btn',
        FINAL_SCREEN_ID: 'final-screen-container',
        FOOTER_NAV_ID: 'pet-modal-footer-nav',
        LS_ONBOARDING_DONE: 'pet_onboarding_concluido_v1',
        LS_PARTICIPADO: 'profissao_pet_participado_v3',
        LS_USER_EMAIL: 'pet_user_email',
        LS_USER_SALDO: 'userSaldo',
        LS_USER_BADGE: 'userBadge',
        LS_USER_SOCIO: 'userSocioeconomico',
        LS_WIDGET_MINIMIZED: 'petMinimized',
    },
    sandboxEmail: "juangomes.sales@gmail.com",
    totalPetsExpected: 0,
    currentPetCycle: 1,
    currentStep: 1,
    tourCurrentStep: 0,
    petsCadastrados: [],
    emailAluna: null,
    circleMemberId: null,
    censoEmAndamento: false, 
    formElements: {},
    memoryStorage: {},
    racesCache: {
        cachorro: ["Vira-lata Caramelo 🐾", "Vira-lata / SRD", "American Bully", "Beagle", "Border Collie", "Bulldog Francês", "Chihuahua", "Golden Retriever", "Labrador", "Lhasa Apso", "Maltês", "Pastor Alemão", "Pinscher", "Poodle", "Pug", "Rottweiler", "Shih Tzu", "Spitz Alemão / Sfe", "Yorkshire"],
        gato: ["Vira-lata / SRD 🐾", "Angorá", "Bengal", "British Shorthair", "Maine Coon", "Persa", "Ragdoll", "Siamês", "Sphynx"],
        coelho: ["Mini Lion Head 🐇", "Mini Lop", "Netherland Dwarf", "Flemish Giant (Gigante)", "Angorá", "Sem Raça Definida / Comum"],
        ave: ["Galinha Caipira / Comum 🐓", "Galo Índio Gigante", "Galinha Sedosa do Japão (Silkie)", "Galinha Garnizé", "Galo Rhode Island Red", "Galinha caipira poedeira"],
        pato: ["Pato de Pequim (Branco) 🦆", "Pato Corredor Indiano", "Marreco de Pequim", "Marreco Carolina", "Pato Comum / Caipira"]
    },

    tourLocations: [
        {
            title: "🚀 Primeiros Passos & Boas-Vindas",
            desc: "Oi, mulher! Que alegria ter você aqui! Eu sou a sua <b>Mentora da Comunidade</b> e vou te guiar! Aqui em <b>Comunicação > Primeiros passos</b> você assiste ao vídeo de introdução para começar sua jornada!",
            breadcrumb: "📍 Menu Lateral > Comunicação > Primeiros passos",
            selectors: [
                "#sidebar-primeiros-passos",
                "a[href*='primeiros']",
                "a[href*='start']",
                "[data-space-slug*='primeiros']",
                "[data-testid*='space-primeiros']"
            ],
            keywords: ["primeiros passos", "boas-vindas", "comece aqui", "início"],
            pose: "boasVindas"
        },
        {
            title: "👤 Seu Perfil & Formulário Socioeconômico",
            desc: "No botão do seu <b>Meu Perfil / Perfil Aluna</b> você preenche seu formulário socioeconômico para liberar seu auxílio financeiro de R$ 100,00, suas Medalhas e o Censo Pet!",
            breadcrumb: "📍 Menu Lateral / Topo > Meu Perfil",
            selectors: [
                "#sidebar-perfil",
                "a[href*='/u/']",
                "a[href*='perfil']",
                "a[href*='profile']",
                "[data-testid*='user-menu']",
                ".user-menu",
                ".avatar"
            ],
            keywords: ["perfil", "meu perfil", "profile", "minha conta", "socioeconômico"],
            pose: "apontando"
        },
        {
            title: "🎓 Suas Aulas & Conteúdos",
            desc: "Em <b>Cursos</b> e <b>Painel da Aluna</b> você assiste às aulas do curso de Pet Sitter e acompanha toda a sua evolução profissional!",
            breadcrumb: "📍 Menu Superior > Cursos / Painel da Aluna",
            selectors: [
                "#nav-cursos",
                "#nav-painel",
                "a[href*='cursos']",
                "a[href*='courses']",
                "a[href*='painel']",
                "a[href*='dash']"
            ],
            keywords: ["cursos", "curso", "aulas", "painel", "conteúdo", "pet sitter"],
            pose: "apontando"
        },
        {
            title: "🏆 Compartilhe Vitórias & Tire Dúvidas",
            desc: "Comemore suas conquistas com a gente no botão <b>#Arrasei</b> e tire suas dúvidas com as mentoras no menu <b>Dúvidas</b>!",
            breadcrumb: "📍 Menu Lateral > Geral > #Arrasei / Dúvidas",
            selectors: [
                "#sidebar-arrasei",
                "#sidebar-duvidas",
                "a[href*='arrasei']",
                "a[href*='duvidas']",
                "a[href*='duvida']"
            ],
            keywords: ["arrasei", "#arrasei", "dúvidas", "duvidas", "suporte"],
            pose: "comemorando"
        },
        {
            title: "💳 Seu Saldo de Arrasas & Widget Flutuante",
            desc: "O seu **Widget Flutuante de Arrasas** e o **Censo Pet** serão ativados assim que você responder o formulário socioeconômico!",
            breadcrumb: "📍 Widget Flutuante (Liberado Após Socioeconômico)",
            selectors: [
                "#pet-floating-widget",
                "#pet-widget-fullbody-container",
                "a[href*='perfil']"
            ],
            keywords: ["arrasas", "saldo", "widget"],
            pose: "comemorando"
        }
    ],

    init: function() {
        this.emailAluna = this.capturarEmailRobusto();
        this.iniciarWidget();
        
        const onboardingConcluido = this.safeStorage('get', this.constants.LS_ONBOARDING_DONE) === "true";
        const isSocio = this.safeStorage('get', this.constants.LS_USER_SOCIO) === "true";
        const censoConcluido = !this.sandboxMode && this.safeStorage('get', this.constants.LS_PARTICIPADO) === "true";

        if (this.emailAluna && !onboardingConcluido) {
            this.censoEmAndamento = true;
            this.fazerCaminhadaVertical();
        } else if (this.emailAluna && onboardingConcluido && isSocio && !censoConcluido) {
            this.censoEmAndamento = true;
            this.iniciarCensoFormulario();
        } else if (this.emailAluna && onboardingConcluido && !isSocio) {
            this.exibirTravaSocioeconomicoPopup();
        }
    },

    safeStorage: function(action, key, value) {
        try {
            if (action === 'get') return localStorage.getItem(key) || this.memoryStorage[key];
            if (action === 'set') { localStorage.setItem(key, value); this.memoryStorage[key] = value; }
            if (action === 'remove') { localStorage.removeItem(key); delete this.memoryStorage[key]; }
        } catch (e) {
            if (action === 'get') return this.memoryStorage[key];
            if (action === 'set') this.memoryStorage[key] = value;
            if (action === 'remove') delete this.memoryStorage[key];
        }
    },

    capturarEmailRobusto: function() {
        if (this.sandboxMode) return this.sandboxEmail;
        let userEmail = this.safeStorage('get', this.constants.LS_USER_EMAIL);
        let currentSystemEmail = null;

        try {
            if (window.current_community_member?.id) { this.circleMemberId = window.current_community_member.id; }
            if (!this.circleMemberId && window.Circle?.currentUser?.id) { this.circleMemberId = window.Circle.currentUser.id; }
            if (window.circleUser?.email) { currentSystemEmail = String(window.circleUser.email).toLowerCase().trim(); }
            if (!currentSystemEmail && window.current_user?.email) { currentSystemEmail = String(window.current_user.email).toLowerCase().trim(); }
            if (!currentSystemEmail && window.Circle?.currentUser?.email) { currentSystemEmail = String(window.Circle.currentUser.email).toLowerCase().trim(); }

            if (currentSystemEmail && userEmail && currentSystemEmail !== userEmail) {
                [this.constants.LS_USER_SALDO, this.constants.LS_USER_BADGE, this.constants.LS_USER_SOCIO].forEach(k => this.safeStorage('remove', k));
                userEmail = currentSystemEmail;
                this.safeStorage('set', this.constants.LS_USER_EMAIL, userEmail);
            } else if (currentSystemEmail && (!userEmail || userEmail === "undefined" || userEmail === "null")) {
                userEmail = currentSystemEmail;
                this.safeStorage('set', this.constants.LS_USER_EMAIL, userEmail);
            }
        } catch (e) {}
        return (userEmail && userEmail !== "null") ? userEmail : null;
    },

    trapFocus: function(element) {
        if(!element) return;
        const focusableEls = element.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
        if(focusableEls.length === 0) return;
        const firstFocusableEl = focusableEls[0]; const lastFocusableEl = focusableEls[focusableEls.length - 1];
        
        element.addEventListener('keydown', function(e) {
            let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
            if (!isTabPressed) return;
            if (e.shiftKey) { if (document.activeElement === firstFocusableEl) { lastFocusableEl.focus(); e.preventDefault(); } } 
            else { if (document.activeElement === lastFocusableEl) { firstFocusableEl.focus(); e.preventDefault(); } }
        });
        setTimeout(() => firstFocusableEl.focus(), 100);
    },

    formatarMoedaBRL: function(e) {
        let value = e.target.value.replace(/\D/g, ""); 
        if (value === "") { e.target.value = ""; return; }
        value = (parseInt(value, 10) / 100).toFixed(2).replace(".", ",");
        value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        e.target.value = "R$ " + value;
    },

    iniciarWidget: function() {
        if (!this.emailAluna) return;
        if (this.safeStorage('get', this.constants.LS_WIDGET_MINIMIZED) == null) this.safeStorage('set', this.constants.LS_WIDGET_MINIMIZED, 'true');

        const cS = this.safeStorage('get', this.constants.LS_USER_SALDO);
        this.renderizarWidget({ encontrado: cS !== null, arrasas: cS || 0, badge: this.safeStorage('get', this.constants.LS_USER_BADGE), isCache: true });

        var script = document.createElement('script');
        var ts = new Date().getTime();
        script.src = this.urlAppScript + "?email=" + encodeURIComponent(this.emailAluna) + "&ultimoSaldo=" + (cS || 0) + "&action=widget&callback=PetMasterSystem.receberDadosWidget&t=" + ts;
        document.body.appendChild(script);
        script.onload = function() { if(this.parentNode) this.parentNode.removeChild(this); };
    },

    receberDadosWidget: function(data) {
        const isSocioValido = data && data.encontrado && (data.socioeconomico === true || data.socioeconomico === 'true' || data.socioeconomico === 'Sim' || data.socioeconomico === 1);
        
        if (data && data.encontrado) {
            if (data.email) this.safeStorage('set', this.constants.LS_USER_EMAIL, data.email.toLowerCase().trim());
            if (data.arrasas !== undefined) this.safeStorage('set', this.constants.LS_USER_SALDO, parseInt(data.arrasas || 0));
            if (data.badge) this.safeStorage('set', this.constants.LS_USER_BADGE, data.badge);
            this.safeStorage('set', this.constants.LS_USER_SOCIO, isSocioValido ? 'true' : 'false');
            
            if (isSocioValido) {
                data.isCache = false;
                this.renderizarWidget(data);
            } else {
                const widget = document.getElementById(this.constants.WIDGET_ID);
                if (widget) widget.style.display = 'none';
                const fullbody = document.getElementById(this.constants.FULLBODY_ID);
                if (fullbody) fullbody.style.display = 'none';
                if (!this.censoEmAndamento) this.exibirTravaSocioeconomicoPopup();
            }
        } else {
            const widget = document.getElementById(this.constants.WIDGET_ID);
            if (widget) widget.style.display = 'none';
            const fullbody = document.getElementById(this.constants.FULLBODY_ID);
            if (fullbody) fullbody.style.display = 'none';
        }
    },

    _getBadgeHtml: function(badgeName) {
        const getBadgeImg = (b) => {
            if (!b) return "";
            const s = String(b).toLowerCase();
            const badgeMap = {
                "mulher": "https://raw.githubusercontent.com/juanjsales/PET-Rocinha-assets/main/Mulher.webp",
                "fera": "https://raw.githubusercontent.com/juanjsales/PET-Rocinha-assets/main/Fera.webp",
                "profissional": "https://raw.githubusercontent.com/juanjsales/PET-Rocinha-assets/main/Prof.webp",
                "embaixadora": "https://raw.githubusercontent.com/juanjsales/PET-Rocinha-assets/main/Embaixadora.webp",
                "aprendiz": "https://raw.githubusercontent.com/juanjsales/PET-Rocinha-assets/main/Aprendiz.webp"
            };
            for (const key in badgeMap) { if (s.includes(key)) return badgeMap[key]; }
            return "";
        };
        const badgeSrc = getBadgeImg(badgeName);
        return badgeSrc ? `<img src="${badgeSrc}" class="pet-widget-badge" alt="Medalha">` : `<div class="pet-widget-badge" style="display:flex;align-items:center;justify-content:center;background:#fff9f2;font-size:22px;">🐾</div>`;
    },

    _animateSaldo: function(element, startVal, endVal) {
        if (!element || startVal === endVal) { if(element) element.innerText = `${endVal} Arrasas`; return; }
        let startTimestamp = null;
        const duration = 1500;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerText = `${Math.floor(progress * (endVal - startVal) + startVal)} Arrasas`;
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    },

    ativarFalaDandara: function(parentWrap, duracaoMs) {
        if (!parentWrap) return;
        parentWrap.classList.add('pet-dandara-speaking');
        if (this.talkingTimer) clearTimeout(this.talkingTimer);
        this.talkingTimer = setTimeout(() => {
            parentWrap.classList.remove('pet-dandara-speaking');
        }, duracaoMs || 3500);
    },

    renderizarWidget: function(data) {
        let widget = document.getElementById(this.constants.WIDGET_ID);
        let fullbodyContainer = document.getElementById(this.constants.FULLBODY_ID);

        const isMinimized = this.safeStorage('get', this.constants.LS_WIDGET_MINIMIZED) === 'true';
        const isSocio = this.safeStorage('get', this.constants.LS_USER_SOCIO) === 'true';
        const hasBadge = !!(this.safeStorage('get', this.constants.LS_USER_BADGE) || (data && data.badge));
        const isAluna = data && data.encontrado;
        const valorNovo = isAluna ? parseInt(data.arrasas || 0) : 0;
        const valorAnterior = parseInt(this.safeStorage('get', this.constants.LS_USER_SALDO) || 0);

        if (!isSocio || !hasBadge) {
            if (widget) widget.style.display = 'none';
            if (fullbodyContainer) fullbodyContainer.style.display = 'none';
            return;
        }

        if (!widget) {
            widget = document.createElement('div');
            widget.id = this.constants.WIDGET_ID;
            widget.classList.add('pet-widget-first-show');
            document.body.appendChild(widget);
            this.setupDraggable(widget);
            setTimeout(() => { if (widget) widget.classList.remove('pet-widget-first-show'); }, 800);
        }
        widget.style.display = 'flex';

        if (!fullbodyContainer) {
            fullbodyContainer = document.createElement('div');
            fullbodyContainer.id = this.constants.FULLBODY_ID;
            fullbodyContainer.innerHTML = `
                <div class="pet-dandara-widget-speech" id="dandara-widget-talking-bubble">
                    <span>Oi, mulher! Aqui tá o seu Saldo de Arrasas! 🐾</span>
                </div>
                <div class="pet-fullbody-transparent-wrap" id="dandara-widget-wrap" title="Clique para ouvir a Mentora!">
                    <img src="${this.poses.comemorando}" id="dandara-widget-img" class="pet-fullbody-img-transparent" alt="Mentora">
                </div>
            `;
            document.body.appendChild(fullbodyContainer);

            const wrap = document.getElementById("dandara-widget-wrap");
            document.getElementById("dandara-widget-wrap")?.addEventListener("click", () => {
                const bubble = document.getElementById("dandara-widget-talking-bubble");
                if (bubble) {
                    const phrase = this.guidePhrases[this.phraseIndex % this.guidePhrases.length];
                    this.phraseIndex++;
                    bubble.innerHTML = `<span>"${phrase}"</span>`;
                    this.ativarFalaDandara(wrap, 3500);
                }
            });
        }
        fullbodyContainer.style.display = isMinimized ? 'none' : 'flex';

        if (isMinimized) {
            widget.innerHTML = `<button class="pet-minimized-icon" id="pet-btn-maximize" aria-label="Expandir">🐾</button>`;
        } else {
            const badgeHtml = this._getBadgeHtml(data?.badge || this.safeStorage('get', this.constants.LS_USER_BADGE));
            widget.innerHTML = `
                <div class="pet-widget-container">
                    <div class="pet-drag-handle" title="Arraste para mover">⠿</div>
                    <div class="pet-widget-main-content" id="pet-main-content" tabindex="0">
                        ${badgeHtml}
                        <div class="pet-widget-info">
                            <span class="pet-widget-label">Saldo</span>
                            <span class="pet-widget-value" id="pet-val">${valorAnterior} Arrasas</span>
                        </div>
                    </div>
                    <div class="pet-widget-actions">
                        <button class="pet-btn-action" id="pet-btn-onboarding-reopen" title="Guia de Início 🚀">🚀</button>
                        <button class="pet-btn-action" id="pet-btn-minimize" aria-label="Minimizar">✕</button>
                    </div>
                </div>
            `;
            this._animateSaldo(document.getElementById('pet-val'), valorAnterior, valorNovo);
        }

        document.getElementById('pet-btn-minimize')?.addEventListener('click', (e) => this.togglePetWidget(e));
        document.getElementById('pet-btn-maximize')?.addEventListener('click', (e) => this.togglePetWidget(e));
        document.getElementById('pet-btn-onboarding-reopen')?.addEventListener('click', (e) => { e.stopPropagation(); this.reiniciarOnboarding(); });
        document.getElementById('pet-main-content')?.addEventListener('click', () => window.open(isAluna ? "/dash_aluna" : "/sign_up", '_self'));
    },

    togglePetWidget: function(e) {
        if (e) e.stopPropagation();
        const isMin = this.safeStorage('get', this.constants.LS_WIDGET_MINIMIZED) === 'true';
        this.safeStorage('set', this.constants.LS_WIDGET_MINIMIZED, !isMin);
        this.renderizarWidget({ encontrado: true, arrasas: this.safeStorage('get', this.constants.LS_USER_SALDO) || 0, badge: this.safeStorage('get', this.constants.LS_USER_BADGE) || "", isCache: true });
    },

    setupDraggable: function(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; const self = this;
        const savedX = this.safeStorage('get', 'petX'), savedY = this.safeStorage('get', 'petY');
        if (savedX && savedY) { elmnt.style.left = savedX; elmnt.style.top = savedY; elmnt.style.bottom = 'auto'; elmnt.style.right = 'auto'; } 
        else { elmnt.style.bottom = "25px"; elmnt.style.right = "25px"; }
        
        const handle = elmnt.querySelector('.pet-drag-handle') || elmnt;
        handle.addEventListener('mousedown', dragStart); handle.addEventListener('touchstart', dragStart, { passive: false });

        function dragStart(e) {
            e = e || window.event;
            pos3 = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            pos4 = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
            document.addEventListener('mouseup', closeDragElement); document.addEventListener('mousemove', elementDrag);
            document.addEventListener('touchend', closeDragElement); document.addEventListener('touchmove', elementDrag, { passive: false }); 
        }
        function elementDrag(e) {
            e = e || window.event; if(e.type === 'touchmove') e.preventDefault(); 
            let cx = e.clientX || (e.touches ? e.touches[0].clientX : 0);
            let cy = e.clientY || (e.touches ? e.touches[0].clientY : 0);
            pos1 = pos3 - cx; pos2 = pos4 - cy; pos3 = cx; pos4 = cy;
            elmnt.style.top = Math.max(0, Math.min(elmnt.offsetTop - pos2, window.innerHeight - elmnt.offsetHeight)) + "px";
            elmnt.style.left = Math.max(0, Math.min(elmnt.offsetLeft - pos1, window.innerWidth - elmnt.offsetWidth)) + "px";

            const fullbody = document.getElementById(self.constants.FULLBODY_ID);
            if (fullbody && window.innerWidth > 768) {
                fullbody.style.top = Math.max(0, elmnt.offsetTop - 180) + "px";
                fullbody.style.left = Math.max(0, elmnt.offsetLeft - 150) + "px";
                fullbody.style.bottom = 'auto'; fullbody.style.right = 'auto';
            }
        }
        function closeDragElement() {
            document.removeEventListener('mouseup', closeDragElement); document.removeEventListener('mousemove', elementDrag);
            document.removeEventListener('touchend', closeDragElement); document.removeEventListener('touchmove', elementDrag);
            self.safeStorage('set', 'petX', elmnt.style.left); self.safeStorage('set', 'petY', elmnt.style.top);
        }
    },

    fazerCaminhadaVertical: function() {
        const container = document.createElement('div');
        container.id = this.constants.WALK_CONTAINER_ID; container.className = 'pet-overlay-global';
        container.style.backgroundColor = 'rgba(26, 24, 80, 0.1)'; container.style.backdropFilter = 'blur(0px)';
        document.body.appendChild(container); document.body.classList.add("modal-open-circle");

        const passos = [
            { bottom: '5%', left: '38%', rot: -25 }, { bottom: '20%', left: '55%', rot: 25 },
            { bottom: '35%', left: '40%', rot: -15 }, { bottom: '50%', left: '53%', rot: 15 },
            { bottom: '65%', left: '42%', rot: -10 }, { bottom: '80%', left: '51%', rot: 10 }
        ];
        
        passos.forEach((p, i) => {
            setTimeout(() => {
                const pawWrap = document.createElement('div'); pawWrap.className = 'paw-step-container';
                pawWrap.style.bottom = p.bottom; pawWrap.style.left = p.left; pawWrap.style.transform = `rotate(${p.rot}deg)`; 
                pawWrap.innerHTML = `<span class="paw-stamp">🐾</span>`; container.appendChild(pawWrap);
            }, i * 250);
        });

        setTimeout(() => {
            document.getElementById(this.constants.WALK_CONTAINER_ID)?.remove();
            document.body.classList.remove("modal-open-circle");
            this.iniciarOnboardingFluido();
        }, passos.length * 250 + 350);
    },

    iniciarOnboardingFluido: function() {
        this.tourCurrentStep = 0;
        this.renderTourStep(0);
    },

    findTargetElement: function(locConfig) {
        if (!locConfig) return null;

        // 1. Tentar seletores CSS diretos
        if (locConfig.selectors && locConfig.selectors.length > 0) {
            for (const sel of locConfig.selectors) {
                try {
                    const els = document.querySelectorAll(sel);
                    for (const el of els) {
                        if (el && el.offsetWidth > 0 && el.offsetHeight > 0) {
                            return el;
                        }
                    }
                } catch(e) {}
            }
        }

        // 2. Buscador Inteligente por Texto de Botões/Links no DOM da Comunidade
        if (locConfig.keywords && locConfig.keywords.length > 0) {
            const candidates = document.querySelectorAll('a, button, [role="button"], li, div[class*="item"], div[class*="space"], nav a, aside a');
            for (const el of candidates) {
                if (el && el.offsetWidth > 0 && el.offsetHeight > 0) {
                    const textContent = (el.innerText || el.textContent || el.getAttribute('aria-label') || '').toLowerCase().trim();
                    for (const kw of locConfig.keywords) {
                        if (textContent.includes(kw.toLowerCase())) {
                            return el;
                        }
                    }
                }
            }
        }

        return null;
    },

    falarComDandara: function(wrapEl) {
        const bubble = document.getElementById("dandara-speech-bubble");
        if (bubble) {
            const phrase = this.guidePhrases[this.phraseIndex % this.guidePhrases.length];
            this.phraseIndex++;
            bubble.innerHTML = `💬 "${phrase}"`;
            bubble.style.display = "block";
        }
        if (wrapEl) {
            this.ativarFalaDandara(wrapEl, 4000);
        }
    },

    renderTourStep: function(stepIndex) {
        let overlay = document.getElementById(this.constants.TOUR_OVERLAY_ID);
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = this.constants.TOUR_OVERLAY_ID;
            document.body.appendChild(overlay);
        }

        const loc = this.tourLocations[stepIndex];
        const targetEl = this.findTargetElement(loc);

        let spotlightHtml = '';
        let cardTop = '50%', cardLeft = '50%', transform = 'translate(-50%, -50%)';

        if (targetEl) {
            try {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
            } catch(e) {}

            const rect = targetEl.getBoundingClientRect();
            const padding = 10;
            spotlightHtml = `
                <div class="pet-spotlight-ring" style="
                    top: ${Math.max(0, rect.top - padding)}px;
                    left: ${Math.max(0, rect.left - padding)}px;
                    width: ${rect.width + padding * 2}px;
                    height: ${rect.height + padding * 2}px;
                "></div>
            `;

            if (rect.left > window.innerWidth / 2) {
                cardLeft = Math.max(20, rect.left - 480) + 'px';
                cardTop = Math.min(window.innerHeight - 360, Math.max(20, rect.top - 20)) + 'px';
                transform = 'none';
            } else {
                cardLeft = Math.min(window.innerWidth - 480, rect.right + 20) + 'px';
                cardTop = Math.min(window.innerHeight - 360, Math.max(20, rect.top - 20)) + 'px';
                transform = 'none';
            }

            if (window.innerWidth < 768) { cardLeft = '0px'; cardTop = 'auto'; transform = 'none'; }
        }

        const isLastStep = stepIndex === this.tourLocations.length - 1;
        const poseUrl = this.poses[loc.pose || "boasVindas"];

        overlay.innerHTML = `
            ${spotlightHtml}
            <div class="pet-tour-wrapper" style="top: ${cardTop}; left: ${cardLeft}; transform: ${transform};">
                <div class="pet-tour-dandara-side" id="dandara-tour-side-wrap" title="Clique para conversar com a Mentora! 💬">
                    <img src="${poseUrl}" id="dandara-tour-side-img" class="pet-tour-dandara-img" alt="Mentora Guia">
                </div>
                <div class="pet-tour-card" role="dialog" aria-modal="true">
                    <div class="pet-guide-header">
                        <div class="pet-guide-meta">
                            <span class="pet-guide-name">${this.guideName} 👩🏾</span>
                            <span class="pet-guide-role">${this.guideRole}</span>
                        </div>
                    </div>
                    <div id="dandara-speech-bubble" class="pet-dandara-interactive-bubble"></div>
                    <div class="pet-tour-location-badge">${loc.breadcrumb}</div>
                    <h3 class="pet-tour-title">${loc.title}</h3>
                    <p class="pet-tour-desc">${loc.desc}</p>
                    <div class="pet-tour-nav">
                        <span class="pet-tour-step-count">Passo ${stepIndex + 1} de ${this.tourLocations.length}</span>
                        <div style="display:flex; gap: 8px;">
                            ${stepIndex > 0 ? `<button class="btn-pet btn-pet-prev" id="pet-tour-prev">Voltar</button>` : ''}
                            <button class="btn-pet btn-pet-next" id="pet-tour-next">
                                ${isLastStep ? 'Concluir Tour 🚀' : 'Próximo Local ➡️'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.trapFocus(overlay);

        const tourWrap = document.getElementById('dandara-tour-side-wrap');
        if (tourWrap) this.ativarFalaDandara(tourWrap, 3500);

        tourWrap?.addEventListener('click', () => this.falarComDandara(tourWrap));

        document.getElementById('pet-tour-prev')?.addEventListener('click', () => {
            if (this.tourCurrentStep > 0) {
                this.tourCurrentStep--;
                this.renderTourStep(this.tourCurrentStep);
            }
        });

        document.getElementById('pet-tour-next')?.addEventListener('click', () => {
            if (this.tourCurrentStep < this.tourLocations.length - 1) {
                this.tourCurrentStep++;
                this.renderTourStep(this.tourCurrentStep);
            } else {
                this.safeStorage('set', this.constants.LS_ONBOARDING_DONE, "true");
                document.getElementById(this.constants.TOUR_OVERLAY_ID)?.remove();
                
                const isSocio = this.safeStorage('get', this.constants.LS_USER_SOCIO) === "true";
                if (isSocio) {
                    this.iniciarCensoFormulario();
                } else {
                    this.exibirTravaSocioeconomicoPopup();
                }
            }
        });
    },

    reiniciarOnboarding: function() {
        this.safeStorage('remove', this.constants.LS_ONBOARDING_DONE);
        this.censoEmAndamento = true;
        this.fazerCaminhadaVertical();
    },

    iniciarCensoFormulario: function() {
        const isSocio = this.safeStorage('get', this.constants.LS_USER_SOCIO) === "true";
        if (!isSocio && !this.sandboxMode) {
            this.exibirTravaSocioeconomicoPopup();
            return;
        }

        document.getElementById(this.constants.TOUR_OVERLAY_ID)?.remove();
        document.getElementById(this.constants.WALK_CONTAINER_ID)?.remove();
        this.renderCensoModal();
        this.cacheFormElements();
    },

    renderCensoModal: function() {
        document.getElementById(this.constants.CENSO_MODAL_ID)?.remove();
        const modalHtml = `
            <div id="${this.constants.CENSO_MODAL_ID}" class="pet-overlay-global" style="background: rgba(26, 24, 80, 0.85); backdrop-filter: blur(12px);">
                <div class="pet-form-card" role="dialog" aria-modal="true" aria-labelledby="censo-pet-title">
                    <div class="pet-form-header">
                        <div style="font-size: 38px; margin-bottom: 6px;">🐾✨</div>
                        <h3 id="censo-pet-title" style="margin-top:4px;">Censo Pet da Comunidade 🐾</h3>
                        <p>Pesquisa Oficial da Família Animal</p>
                        <button class="close-form-btn" id="close-pet-modal" aria-label="Fechar">✕</button>
                    </div>
                    <div class="progress-container"><div id="progress-fill"></div></div>
                    <div class="pet-form-body">
                        <form id="pet-wizard-form" onsubmit="return false;">
                            <div class="form-step active" data-step="1">
                                <div class="pet-input-group">
                                    <label for="${this.constants.FORM_STEP_QTD}">Quantos pets moram com você no total?</label>
                                    <input type="number" id="${this.constants.FORM_STEP_QTD}" class="pet-field" min="0" max="50" placeholder="Ex: 2" required>
                                </div>
                            </div>
                            
                            <div class="form-step" data-step="2">
                                <div class="pet-cycle-indicator" id="cycle-step-2-label">Ajustando...</div>
                                <div class="pet-input-group">
                                    <label for="${this.constants.FORM_STEP_NOME}">Qual é o nome dele(a)?</label>
                                    <input type="text" id="${this.constants.FORM_STEP_NOME}" class="pet-field" placeholder="Ex: Mel, Bob...">
                                </div>
                                <div class="pet-input-group">
                                    <label for="${this.constants.FORM_STEP_TIPO}">Que tipo de animal ele(a) é?</label>
                                    <select id="${this.constants.FORM_STEP_TIPO}" class="pet-field">
                                        <option value="Cachorro">Cachorro 🐶</option>
                                        <option value="Gato">Gato 🐱</option>
                                        <option value="Coelho">Coelho 🐇</option>
                                        <option value="Ave">Galo / Galinha 🐓</option>
                                        <option value="Pato">Pato / Ganso 🦆</option>
                                        <option value="Outro">Outro 🐾</option>
                                    </select>
                                </div>
                                <div class="pet-input-group" style="position:relative;">
                                    <label for="${this.constants.FORM_STEP_RACA}">Qual a raça?</label>
                                    <input type="text" id="${this.constants.FORM_STEP_RACA}" class="pet-field" placeholder="Digite para buscar..." autocomplete="off">
                                    <div id="raca-autocomplete-list" class="pet-autocomplete-suggestions" style="display:none;"></div>
                                </div>
                                <div id="${this.constants.PREVIEW_BOX_ID}" class="pet-image-preview-container" aria-live="polite"><span class="pet-image-preview-placeholder">Carregando foto...</span></div>
                            </div>
                            
                            <div class="form-step" data-step="3">
                                <div class="pet-cycle-indicator" id="cycle-step-3-label">Ajustando...</div>
                                <div class="pet-input-group">
                                    <label for="${this.constants.FORM_STEP_GASTO}">Gasto mensal aproximado:</label>
                                    <input type="text" inputmode="numeric" id="${this.constants.FORM_STEP_GASTO}" class="pet-field" placeholder="R$ 0,00" required>
                                </div>
                            </div>
                            
                            <div class="form-step" data-step="4" id="${this.constants.FINAL_SCREEN_ID}"></div>
                            
                            <div class="pet-form-footer" id="${this.constants.FOOTER_NAV_ID}">
                                <button type="button" class="btn-pet btn-pet-prev" id="${this.constants.PREV_BTN_ID}" style="display:none;">Voltar</button>
                                <button type="button" class="btn-pet btn-pet-next" id="${this.constants.NEXT_BTN_ID}">Avançar ➡️</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        this.trapFocus(document.getElementById(this.constants.CENSO_MODAL_ID));
        this.setupCensoListeners(); this.setupAutocomplete(); this.atualizarBarraProgresso();
    },

    cacheFormElements: function() {
        this.formElements = {
            petQtd: document.getElementById(this.constants.FORM_STEP_QTD),
            petNome: document.getElementById(this.constants.FORM_STEP_NOME),
            petTipo: document.getElementById(this.constants.FORM_STEP_TIPO),
            petRaca: document.getElementById(this.constants.FORM_STEP_RACA),
            petGasto: document.getElementById(this.constants.FORM_STEP_GASTO),
            previewBox: document.getElementById(this.constants.PREVIEW_BOX_ID),
            progressFill: document.getElementById(this.constants.PROGRESS_FILL_ID),
            nextBtn: document.getElementById(this.constants.NEXT_BTN_ID),
            prevBtn: document.getElementById(this.constants.PREV_BTN_ID),
            finalScreen: document.getElementById(this.constants.FINAL_SCREEN_ID),
            footerNav: document.getElementById(this.constants.FOOTER_NAV_ID),
        };
    },

    setupAutocomplete: function() {
        const self = this; const racaInput = document.getElementById("pet-raca"); const suggestionsContainer = document.getElementById("raca-autocomplete-list");
        const updateSuggestions = () => {
            if (!racaInput || !suggestionsContainer) return;
            const val = racaInput.value.toLowerCase().trim(); const tipoAtual = document.getElementById("pet-tipo").value.toLowerCase();
            suggestionsContainer.innerHTML = ""; if (tipoAtual === "outro") { suggestionsContainer.style.display = "none"; return; }
            suggestionsContainer.style.display = "block"; const racaList = self.racesCache[tipoAtual] || [];
            const filtered = !val ? racaList.slice(0,3) : racaList.filter(r => r.toLowerCase().includes(val)).slice(0,5);
            if (filtered.length === 0) { suggestionsContainer.style.display = "none"; return; }
            filtered.forEach(raca => {
                const div = document.createElement("div"); div.className = "autocomplete-item"; div.innerText = raca;
                div.addEventListener("mousedown", (e) => { e.preventDefault(); racaInput.value = raca; suggestionsContainer.style.display = "none"; self.buscarFotoDaRaca(raca, document.getElementById("pet-tipo").value); });
                suggestionsContainer.appendChild(div);
            });
        };
        racaInput.addEventListener("input", updateSuggestions); racaInput.addEventListener("focus", updateSuggestions);
        document.getElementById("pet-tipo").addEventListener("change", () => { racaInput.value = ""; document.getElementById("pet-preview-box").style.display = "none"; suggestionsContainer.style.display = "none"; });
        racaInput.addEventListener("blur", () => { setTimeout(() => { suggestionsContainer.style.display = "none"; if (racaInput.value) self.buscarFotoDaRaca(racaInput.value, document.getElementById("pet-tipo").value); }, 150); });
    },

    buscarFotoDaRaca: async function(raca, tipo) {
        const previewBox = this.formElements.previewBox; if (!previewBox || tipo === "Outro") { if(previewBox) previewBox.style.display = "none"; return; }
        previewBox.style.display = "flex"; let imgUrl = ""; const racaLower = raca.toLowerCase().trim();
        if (racaLower.includes("caramelo") || racaLower.includes("srd") || racaLower.includes("vira-lata")) { imgUrl = "https://raw.githubusercontent.com/juanjsales/PET-Rocinha-assets/main/Fera.webp"; }
        else if (tipo === "Cachorro") {
            const dogCeoMap = { "american bully": "bullterrier/staffordshire", "beagle": "beagle", "border collie": "collie/border", "bulldog francês": "bulldog/french", "chihuahua": "chihuahua", "golden retriever": "retriever/golden", "labrador": "retriever", "lhasa apso": "lhasa", "maltês": "maltese", "pastor alemão": "germanshepherd", "pinscher": "pinscher/miniature", "poodle": "poodle", "pug": "pug", "rottweiler": "rottweiler", "shih tzu": "shihtzu", "spitz alemão / sfe": "pomeranian", "yorkshire": "terrier/yorkshire" };
            const endpoint = dogCeoMap[racaLower];
            if (endpoint) { try { const res = await fetch(`https://dog.ceo/api/breed/${endpoint}/images/random`); const data = await res.json(); if (data.status === "success") imgUrl = data.message; } catch(e){} }
            if(!imgUrl) imgUrl = "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80";
        }
        else if (tipo === "Gato") {
            const catMap = {"angorá": "tang", "bengal": "beng", "british shorthair": "bsho", "maine coon": "mcoo", "persa": "pers", "ragdoll": "ragd", "siamês": "siam", "sphynx": "sphy"};
            const id = catMap[racaLower];
            if (id) { try { const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`); const data = await res.json(); if(data && data[0]?.url) imgUrl = data[0].url; } catch(e){} }
            if(!imgUrl) imgUrl = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80";
        }
        else if (tipo === "Coelho") imgUrl = "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=400&q=80";
        else if (tipo === "Ave") imgUrl = "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=400&q=80";
        else if (tipo === "Pato") imgUrl = "https://images.unsplash.com/photo-1470116940061-e1215b3a9e3e?auto=format&fit=crop&w=400&q=80";

        previewBox.innerHTML = `<img class="pet-image-preview-img" alt="${raca}" src="${imgUrl}" />`;
    },

    setupCensoListeners: function() {
        const self = this;
        document.getElementById("pet-next-btn").addEventListener("click", () => self.avancarFluxo());
        document.getElementById("pet-prev-btn").addEventListener("click", () => self.retrocederFluxo());
        document.getElementById("close-pet-modal").addEventListener("click", () => { self.safeStorage('set', self.constants.LS_PARTICIPADO, "true"); self.fecharCenso(); });
        document.getElementById("pet-gasto-unitario")?.addEventListener("input", self.formatarMoedaBRL);
    },

    avancarFluxo: function() {
        if (!this.validateCurrentStep()) return;
        if (this.currentStep === 1) {
            this.totalPetsExpected = parseInt(this.formElements.petQtd.value);
            if (this.totalPetsExpected === 0) { this.petsCadastrados = []; this.enviarDadosConsolidados(); return; }
            this.currentPetCycle = 1; this.petsCadastrados = []; this.setRequiredFieldsForCycle(true); this.preparaProximoCiclo(); this.currentStep = 2; this.mostrarPassoUI(2); return;
        }
        if (this.currentStep === 2) { this.currentStep = 3; this.mostrarPassoUI(3); return; }
        if (this.currentStep === 3) {
            let gastoStr = this.formElements.petGasto.value.replace(/[^\d,]/g, "").replace(",", ".");
            const tipoSelect = this.formElements.petTipo;
            this.petsCadastrados.push({ nome: this.formElements.petNome.value.trim(), tipo: tipoSelect.options[tipoSelect.selectedIndex].text, raca: this.formElements.petRaca.value.trim(), gasto: parseFloat(gastoStr) || 0 });
            if (this.currentPetCycle < this.totalPetsExpected) { this.currentPetCycle++; this.limparFormularioCiclo(); this.preparaProximoCiclo(); this.currentStep = 2; this.mostrarPassoUI(2); } 
            else { this.enviarDadosConsolidados(); }
        }
    },

    retrocederFluxo: function() {
        if (this.currentStep === 2) {
            if (this.currentPetCycle === 1) { this.setRequiredFieldsForCycle(false); this.currentStep = 1; this.mostrarPassoUI(1); } 
            else { this.currentPetCycle--; this.petsCadastrados.pop(); this.preencherDadosNoCiclo(this.petsCadastrados[this.petsCadastrados.length - 1] || {}); this.preparaProximoCiclo(); this.currentStep = 3; this.mostrarPassoUI(3); }
        } else if (this.currentStep === 3) { this.currentStep = 2; this.mostrarPassoUI(2); }
    },

    setRequiredFieldsForCycle: function(s) { this.formElements.petNome.required = s; this.formElements.petRaca.required = s; this.formElements.petGasto.required = s; },
    preparaProximoCiclo: function() { document.getElementById("cycle-step-2-label").innerText = `Pet ${this.currentPetCycle} de ${this.totalPetsExpected} 🐾`; document.getElementById("cycle-step-3-label").innerText = `Pet ${this.currentPetCycle} de ${this.totalPetsExpected} 🐾`; this.formElements.previewBox.style.display = "none"; },
    limparFormularioCiclo: function() { this.formElements.petNome.value = ""; this.formElements.petTipo.value = "Cachorro"; this.formElements.petRaca.value = ""; this.formElements.petGasto.value = ""; },
    preencherDadosNoCiclo: function(p) { this.formElements.petNome.value = p.nome || ""; this.formElements.petTipo.value = p.tipo || "Cachorro"; this.formElements.petRaca.value = p.raca || ""; this.formElements.petGasto.value = p.gasto ? "R$ " + p.gasto.toFixed(2).replace(".",",") : ""; if (p.raca) this.buscarFotoDaRaca(p.raca, p.tipo); },

    mostrarPassoUI: function(s) {
        document.querySelectorAll(".form-step").forEach(d => {
            d.style.opacity = 0;
            setTimeout(() => {
                d.classList.toggle("active", parseInt(d.dataset.step) === s);
                if(parseInt(d.dataset.step) === s) { d.style.opacity = 1; const f = d.querySelector('input, select'); if(f) f.focus(); }
            }, 150);
        }); 
        this.formElements.prevBtn.style.display = s === 1 ? "none" : "block"; 
        let nextBtnText = "Avançar ➡️";
        if (s === 1) nextBtnText = "Iniciar Cadastro 🐾";
        if (s === 3) nextBtnText = (this.currentPetCycle === this.totalPetsExpected ? "Finalizar e Enviar 🚀" : "Próximo Pet ➡️");
        this.formElements.nextBtn.innerText = nextBtnText;
        this.atualizarBarraProgresso();
    },

    atualizarBarraProgresso: function() { if(this.formElements.progressFill) this.formElements.progressFill.style.width = ((this.currentStep / 3) * 100) + "%"; },

    validateCurrentStep: function() {
        const fields = document.querySelectorAll(`.form-step[data-step="${this.currentStep}"] .pet-field`);
        for (const field of fields) { if (!field.checkValidity()) { field.reportValidity(); return false; } }
        return true;
    },

    enviarDadosConsolidados: async function() {
        this.formElements.nextBtn.innerText = "Enviando... ⏳"; this.formElements.nextBtn.disabled = true;
        const payload = { id_aluna: this.emailAluna, circle_id: this.circleMemberId, quantidade_pets: this.totalPetsExpected, pets_cadastrados: this.petsCadastrados, todos_os_pets: this.petsCadastrados, gasto_total_mensal: this.petsCadastrados.reduce((acc, p) => acc + p.gasto, 0), data_registro: new Date().toISOString(), is_sandbox: this.sandboxMode };
        try {
            const response = await fetch(this.webhookUrlMake, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error('Erro na conexao');
            this.safeStorage('set', this.constants.LS_PARTICIPADO, "true"); this.exibirTelaConclusao();
        } catch (error) {
            alert("⚠️ Erro ao enviar. Tente novamente."); this.formElements.nextBtn.innerText = "Finalizar e Enviar 🚀"; this.formElements.nextBtn.disabled = false;
        }
    },

    exibirTelaConclusao: function() {
        this.currentStep = 4; this.formElements.footerNav.style.display = "none"; this.formElements.progressFill.style.width = "100%";
        
        const containerHtml = `
            <div class="socio-alert-container">
                <div style="font-size: 42px; margin-bottom: 10px;">🎉🐾</div>
                <h3 style="color:#1a1850; font-size: 22px; font-weight:900;">Censo Concluído com Sucesso!</h3>
                <p style="color:#475569; margin: 12px 0 20px 0; line-height: 1.5;">Seus bichinhos foram cadastrados! O seu Widget Flutuante de Arrasas e sua 1ª Medalha já estão ativos no canto da tela!</p>
                <a href="${this.whatsappArrasasUrl}" target="_blank" class="btn-whatsapp-arrasas">💬 Acompanhar Meus Arrasas no WhatsApp</a>
                <button class="btn-close-final" id="btn-final-dismiss" style="display: block; width: 100%; margin-top: 14px; background: transparent; border: none; color: #94a3b8; text-decoration: underline; cursor: pointer;">Fechar e Navegar</button>
            </div>
        `;
        this.formElements.finalScreen.innerHTML = containerHtml;
        setTimeout(() => {
            const finalScreen = this.formElements.finalScreen; finalScreen.style.opacity = 1; finalScreen.classList.add("active");
            document.getElementById("btn-final-dismiss").addEventListener("click", () => this.fecharCenso());
        }, 150);
    },

    exibirTravaSocioeconomicoPopup: function() {
        if (document.getElementById("circle-popup-socoeco")) return;
        if (sessionStorage.getItem('pet_popup_ignorado_sessao') === 'true') return;

        const modalHtml = `
            <div id="circle-popup-socoeco" class="pet-overlay-global" style="background: rgba(0,0,0,0.65); backdrop-filter: blur(5px);">
                <div role="dialog" aria-modal="true" aria-labelledby="popup-socoeco-title" style="background: white; width: 90%; max-width: 500px; border-radius: 24px; padding: 32px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.4);">
                    <div style="font-size: 42px; margin-bottom: 12px;">🔒✨</div>
                    <h3 id="popup-socoeco-title" style="margin: 0 0 14px; font-size: 20px; font-weight: 800; color: #1a1850; line-height: 1.3;">🚀 Preencha o Formulário Socioeconômico Primeiro!</h3>
                    <p style="font-size: 14px; color: #475569; margin: 0 0 20px; line-height: 1.6;">
                        Para liberar o seu <strong>Censo Pet</strong>, o seu <strong>Widget Flutuante de Arrasas</strong> e a sua <strong>1ª Medalha</strong> (além do auxílio de R$ 100,00), preencha o formulário socioeconômico primeiro!
                    </p>
                    <a href="${this.socioFormUrl}" target="_blank" style="display: block; background: #e08b26; color: white; text-decoration: none; padding: 16px; border-radius: 14px; font-weight: 800; font-size: 15px; margin-bottom: 12px; transition: background 0.2s; box-shadow: 0 4px 15px rgba(224, 139, 38, 0.3);">
                        Preencher Formulário Socioeconômico Agora 🚀
                    </a>
                    <a href="${this.whatsappArrasasUrl}" target="_blank" class="btn-whatsapp-arrasas" style="margin-bottom: 16px;">
                        <span>💬 Acompanhar Meus Arrasas no WhatsApp</span>
                    </a>
                    <button id="close-circle-popup-btn" aria-label="Fechar" style="background: none; border: none; color: #64748b; font-size: 12px; cursor: pointer; text-decoration: underline;">
                        Vou preencher mais tarde
                    </button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        document.body.classList.add('modal-open-circle');
        this.trapFocus(document.getElementById("circle-popup-socoeco"));

        document.getElementById("close-circle-popup-btn").addEventListener("click", () => {
            document.getElementById("circle-popup-socoeco").remove();
            document.body.classList.remove('modal-open-circle');
            sessionStorage.setItem('pet_popup_ignorado_sessao', 'true');
        });
    },

    fecharCenso: function() { 
        document.getElementById(this.constants.CENSO_MODAL_ID)?.remove(); 
        document.body.classList.remove("modal-open-circle"); 
        this.censoEmAndamento = false;
        if (this.safeStorage('get', this.constants.LS_USER_SOCIO) !== "true") { this.exibirTravaSocioeconomicoPopup(); }
    }
};

window.PetMasterSystem_receberDadosWidget = function(data) { PetMasterSystem.receberDadosWidget(data); };
if (document.readyState === "complete" || document.readyState === "interactive") { setTimeout(() => PetMasterSystem.init(), 1000); } 
else { window.addEventListener("load", () => setTimeout(() => PetMasterSystem.init(), 1000)); }
