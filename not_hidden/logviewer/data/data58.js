data = [{"owner":"blueplacer","date":"10\/12\/2010 5:12:51 PM","query":"select name, modify_date, create_date  from sys.views","id":"250587"},{"owner":"blueplacer","date":"10\/12\/2010 5:12:53 PM","query":"select top 20* from hmmannotationagainstpfam_pfamannotation37_fragil_maingenome fkog, hmmannotationagainstpfam_pfamannotation4_phaeo_genome phkog, hmmannotationagainsttigrfam_tigrfamannotation15_pn_maingenome pnkog, hmmannotationagainstpfam_pfamannotation20_thaps_maingenome tkog where phkog.hit = tkog.hit","id":"250642"},{"owner":"blueplacer","date":"10\/12\/2010 5:12:54 PM","query":"select top 20 * from tigrfamannotation_coastal coast, tigrfamannotation_surface surf where surf.hit = coast.hit","id":"250689"},{"owner":"blueplacer","date":"10\/12\/2010 5:12:56 PM","query":"select * from phatr2_bd_unmapped_koginfo_filteredmodels1 pkog, thaps3_chromosomes_koginfo_filteredmodels2 tkog where pkog.kogid = tkog.kogid","id":"250737"},{"owner":"blueplacer","date":"10\/12\/2010 5:12:58 PM","query":"select top 20      ests.###query as ests_query,     ests.length as ests_length,     genome.###query as genome_query,     genome.length as genome_length from       annotationsummary_combinedorfannotation24_pn_ests ests inner join annotationsummary_combinedorfannotation16_phaeo_genome genome on (ests.length = genome.length)","id":"250781"},{"owner":"blueplacer","date":"10\/12\/2010 5:12:59 PM","query":"select hit, count(*) as cnt   from tigrfamannotation_surface   group by hit","id":"250824"},{"owner":"blueplacer","date":"10\/12\/2010 5:12:59 PM","query":"select h.hit,         hit_count,         min_e_value,         r.query as read_with_min_e_value  from ( select hit,         count(hit) as hit_count,         min(e_value) as min_e_value  from tigrfamannotation_surface group by hit ) as h, tigrfamannotation_surface as r where h.min_e_value = r.e_value   and h.hit = r.hit","id":"250874"},{"owner":"blueplacer","date":"10\/12\/2010 5:13:00 PM","query":"select *    from hmmannotationagainstpfam_pfamannotation12_pn_maingenome   where description_ like '%iron%'","id":"250919"},{"owner":"blueplacer","date":"10\/12\/2010 5:13:01 PM","query":"select pkog.kogid, pkog.kogdefline, pkog.kogclass, pkog.koggroup, pkog.transcriptid, pkog.proteinid, count(tkog.proteinid)   from phatr2_bd_unmapped_koginfo_filteredmodels1 pkog,            thaps3_chromosomes_koginfo_filteredmodels2 tkog  where pkog.kogid = tkog.kogid group by pkog.kogid, pkog.kogdefline, pkog.kogclass, pkog.koggroup, pkog.transcriptid, pkog.proteinid having count(tkog.proteinid) > 1","id":"250972"},{"owner":"blueplacer","date":"10\/12\/2010 5:13:02 PM","query":"select * from tigrfamannotation_surface inner join tigr_db on hit = accession where func like '%asparate kinase%'","id":"251019"},{"owner":"blueplacer","date":"10\/12\/2010 5:13:33 PM","query":"select *   from tigrfamannotation_surface   where hit = 'tigr00656'","id":"251082"},{"owner":"blueplacer","date":"10\/12\/2010 5:13:33 PM","query":"select * from tigrfamannotation_surface where query = 'fhj7drn02ig4o0.2'","id":"251138"},{"owner":"blueplacer","date":"10\/12\/2010 5:13:34 PM","query":"select *   from tigrfamannotation_surface   where hit = 'tigr00656'","id":"251190"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:08 PM","query":"select tigr.*, pfam.*, t.name, t.func    from tigrfamannotation_surface tigr   left outer join pfamannotation_surface pfam  on tigr.query = pfam.query,    tigr_db t where t.accession = tigr.hit","id":"251243"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:17 PM","query":"select pfam.*, t.name, tigr.*, t.func    from hmmannotationagainstpfam_pfamannotation12_pn_maingenome pfam   left outer join hmmannotationagainsttigrfam_tigrfamannotation15_pn_maingenome tigr  on tigr.#query = pfam.#query,    tigr_db t where t.accession = tigr.hit","id":"251292"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:23 PM","query":"select *     from hmmannotationagainstpfam_pfamannotation12_pn_maingenome    where hit = 'pf08098'","id":"251351"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:24 PM","query":"select top 10 phaeo.cog_hit_#1 as phaeo_gene, description_#1 as description, count(*) as sample_hit_count from annotationsummary_combinedorfannotation16_phaeo_genome phaeo,      cogannotation_surface surf where phaeo.cog_hit_#1 = surf.hit group by cog_hit_#1, description_#1","id":"251400"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:25 PM","query":"select top 1 * from hmmannotationagainstpfam_pfamannotation12_pn_maingenome","id":"251458"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:26 PM","query":"select top 30 hit, count(hit) as hit_num from tigrfamannotation_surface group by hit","id":"251513"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:27 PM","query":"select reference_family , count(reference_family) as hit_count from hmmannotationagainstpfam_gomapping33_txt group by reference_family","id":"251570"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:28 PM","query":"select name, crdate as date_created    from sysobjects where type='u' and crdate between '1\/26\/2010' and '1\/27\/2010'","id":"251617"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:28 PM","query":"select top 1 * from thaps3_bd_unmapped_domaininfo_filteredmodels1","id":"251668"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:33 PM","query":"select tigr.*, pfam.*, t.name, t.func    from tigrfamannotation_surface tigr   left outer join pfamannotation_surface pfam  on tigr.query = pfam.query,    tigr_db t where t.accession = tigr.hit","id":"251760"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:37 PM","query":"select tigr.*, pfam.*, t.name, t.func    from tigrfamannotation_surface tigr   left outer join pfamannotation_surface pfam  on tigr.query = pfam.query,    tigr_db t where t.accession = tigr.hit and func like '%iron%'","id":"251803"},{"owner":"blueplacer","date":"10\/12\/2010 5:14:40 PM","query":"select * from tigrfamannotation_surface union select * from pfamannotation_surface","id":"251858"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:41 PM","query":"select * from [blueplacer].[table_all_custom_tables]","id":"253317"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:42 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation1_fragil_maingenome]","id":"253358"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:42 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation17_fragil_mitochondria]","id":"253411"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:43 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation22_phaeo_mitochondria]","id":"253455"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:44 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation26_phaeo_chloroplast]","id":"253508"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:46 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation29_pn_chloroplast]","id":"253555"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:47 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation32_pn_mitochondria]","id":"253606"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:49 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation35_fragil_chloroplast]","id":"253642"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:50 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation35_thaps_mitochondria]","id":"253698"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:51 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation38_thapsests]","id":"253737"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:52 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation4_thaps_maingenome]","id":"253783"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:53 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation7_pn_maingenome]","id":"253831"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:54 PM","query":"select * from [blueplacer].[table_annotationsummary_combinedorfannotation7_thaps_chloroplast]","id":"253870"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:55 PM","query":"select * from [blueplacer].[table_cogannotation_coastal]","id":"253911"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:56 PM","query":"select * from [blueplacer].[table_cogannotation_dcm]","id":"253964"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:57 PM","query":"select * from [blueplacer].[table_cogannotation_upwelling]","id":"254010"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:58 PM","query":"select * from [blueplacer].[table_compare_coastal_and_surfacedeletex]","id":"254054"},{"owner":"blueplacer","date":"3\/1\/2011 10:07:59 PM","query":"select * from [blueplacer].[table_email_data]","id":"254099"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:00 PM","query":"select * from [blueplacer].[table_gene_association_aspgd]","id":"254145"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:01 PM","query":"select * from [blueplacer].[table_gene_association_cgd]","id":"254191"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:02 PM","query":"select * from [blueplacer].[table_gene_association_dictybase]","id":"254243"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:04 PM","query":"select * from [blueplacer].[table_gene_association_ecocyc]","id":"254294"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:05 PM","query":"select * from [blueplacer].[table_gene_association_fb]","id":"254344"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:06 PM","query":"select * from [blueplacer].[table_gene_association_genedb_lmajor]","id":"254386"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:07 PM","query":"select * from [blueplacer].[table_gene_association_genedb_pfalciparum]","id":"254438"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:08 PM","query":"select * from [blueplacer].[table_gene_association_genedb_tbrucei]","id":"254485"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:09 PM","query":"select * from [blueplacer].[table_gene_association_goa_chicken]","id":"254524"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:11 PM","query":"select * from [blueplacer].[table_gene_association_goa_cow]","id":"254573"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:12 PM","query":"select * from [blueplacer].[table_gene_association_goa_human]","id":"254617"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:14 PM","query":"select * from [blueplacer].[table_gene_association_gramene_oryza]","id":"254665"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:16 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_aphagocytophilum]","id":"254712"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:18 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_banthracis]","id":"254757"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:22 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_cburnetii]","id":"254797"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:27 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_chydrogenoformans]","id":"254841"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:29 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_cperfringens]","id":"254888"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:32 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_cpsychrerythraea]","id":"254942"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:35 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_dethenogenes]","id":"254986"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:37 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_echaffeensis]","id":"255038"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:39 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_gsulfurreducens]","id":"255077"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:41 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_hneptunium]","id":"255121"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:43 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_lmonocytogenes]","id":"255176"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:45 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_mcapsulatus]","id":"255218"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:46 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_nsennetsu]","id":"255262"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:49 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_psyringae_phaseolicola]","id":"255308"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:50 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_soneidensis]","id":"255353"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:55 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_spomeroyi]","id":"255406"},{"owner":"blueplacer","date":"3\/1\/2011 10:08:58 PM","query":"select * from [blueplacer].[table_gene_association_jcvi_vcholerae]","id":"255458"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:00 PM","query":"select * from [blueplacer].[table_gene_association_pamgo_atumefaciens_tab]","id":"255503"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:02 PM","query":"select * from [blueplacer].[table_gene_association_pamgo_mgrisea]","id":"255545"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:04 PM","query":"select * from [blueplacer].[table_gene_association_pamgo_oomycetes]","id":"255586"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:06 PM","query":"select * from [blueplacer].[table_gene_association_pseudocap]","id":"255631"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:10 PM","query":"select * from [blueplacer].[table_gene_association_reactome]","id":"255674"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:12 PM","query":"select * from [blueplacer].[table_gene_association_rgd]","id":"255723"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:14 PM","query":"select * from [blueplacer].[table_gene_association_sgd]","id":"255766"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:17 PM","query":"select * from [blueplacer].[table_gene_association_sgn]","id":"255814"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:19 PM","query":"select * from [blueplacer].[table_gene_association_tair]","id":"255855"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:21 PM","query":"select * from [blueplacer].[table_gene_association_zfin]","id":"255905"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:22 PM","query":"select * from [blueplacer].[table_go_20100117_seqdb_fasta]","id":"255952"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:26 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping11_pn_mitochondria]","id":"256000"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:28 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping14_fragil_chloroplast]","id":"256044"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:29 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping14_pn_maingenome]","id":"256091"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:30 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping21_phaeo_mitochondria]","id":"256144"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:32 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping22_phaeo_chloroplast]","id":"256190"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:34 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping22_thaps_maingenome]","id":"256241"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:36 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping24_fragil_mitochondria]","id":"256287"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:38 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping28_thapsests]","id":"256329"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:40 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping34_thaps_mitochondria]","id":"256372"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:41 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping34_txt]","id":"256422"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:43 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping39_pn_chloroplast]","id":"250036"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:44 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping39_thaps_chloroplast]","id":"250086"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:47 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping6_phaeo_genome]","id":"250136"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:48 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_ecmapping6_pn_ests]","id":"250190"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:50 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping10_pn_mitochondria]","id":"250229"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:51 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping13_fragil_chloroplast]","id":"250279"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:53 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping13_pn_maingenome]","id":"250331"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:54 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping20_phaeo_mitochondria]","id":"250380"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:56 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping21_phaeo_chloroplast]","id":"250427"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:58 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping21_thaps_maingenome]","id":"250473"},{"owner":"blueplacer","date":"3\/1\/2011 10:09:59 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping23_fragil_mitochondria]","id":"250523"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:01 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping27_thapsests]","id":"250577"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:03 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping33_thaps_mitochondria]","id":"250634"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:09 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping38_fragil_maingenome]","id":"250681"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:11 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping38_pn_chloroplast]","id":"250726"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:12 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping38_thaps_chloroplast]","id":"250775"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:13 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping5_phaeo_genome]","id":"250816"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:15 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_gomapping5_pn_ests]","id":"250865"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:16 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_pfamannotation12_fragil_chloroplast]","id":"250909"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:17 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_pfamannotation19_phaeo_mitochondria]","id":"250962"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:18 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_pfamannotation20_phaeo_chloroplast]","id":"251011"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:20 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_pfamannotation22_fragil_mitochondria]","id":"251070"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:22 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_pfamannotation26_thapsests]","id":"251127"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:23 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_pfamannotation32_thaps_mitochondria]","id":"251181"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:24 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_pfamannotation37_pn_chloroplast]","id":"251234"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:26 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_pfamannotation37_thaps_chloroplast]","id":"251278"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:27 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_pfamannotation4_pn_ests]","id":"251338"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:28 PM","query":"select * from [blueplacer].[table_hmmannotationagainstpfam_pfamannotation9_pn_mitochondria]","id":"251388"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:30 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping17_fragil_chloroplast]","id":"251443"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:33 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping17_pn_maingenome]","id":"251499"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:35 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping18_pn_ests]","id":"251559"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:37 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping25_thapsests]","id":"251607"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:39 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping3_thaps_chloroplast]","id":"251657"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:40 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping31_pn_mitochondria]","id":"251696"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:41 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping33_pn_chloroplast]","id":"251749"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:43 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping36_phaeo_genome]","id":"251795"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:44 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping39_phaeo_mitochondria]","id":"251852"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:45 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping5_fragil_maingenome]","id":"251900"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:47 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping6_phaeo_chloroplast]","id":"251950"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:48 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping6_thaps_mitochondria]","id":"252006"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:49 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_ecmapping8_fragil_mitochondria]","id":"252063"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:52 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping16_fragil_chloroplast]","id":"252118"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:53 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping16_pn_maingenome]","id":"252171"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:56 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping17_pn_ests]","id":"252218"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:57 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping2_thaps_chloroplast]","id":"252274"},{"owner":"blueplacer","date":"3\/1\/2011 10:10:59 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping24_thapsests]","id":"252320"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:01 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping30_pn_mitochondria]","id":"252373"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:02 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping32_pn_chloroplast]","id":"252420"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:04 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping35_phaeo_genome]","id":"252464"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:05 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping38_phaeo_mitochondria]","id":"252506"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:06 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping4_fragil_maingenome]","id":"252550"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:07 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping5_phaeo_chloroplast]","id":"252593"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:09 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping5_thaps_mitochondria]","id":"252650"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:11 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_gomapping7_fragil_mitochondria]","id":"252690"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:12 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation1_thaps_chloroplast]","id":"252744"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:13 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation15_fragil_chloroplast]","id":"252792"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:15 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation16_pn_ests]","id":"252836"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:16 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation23_thapsests]","id":"252886"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:17 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation29_pn_mitochondria]","id":"252936"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:18 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation3_fragil_maingenome]","id":"252982"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:20 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation31_pn_chloroplast]","id":"253022"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:21 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation34_phaeo_genome]","id":"253061"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:22 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation37_phaeo_mitochondria]","id":"253106"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:24 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation4_phaeo_chloroplast]","id":"253153"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:25 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation4_thaps_mitochondria]","id":"253200"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:26 PM","query":"select * from [blueplacer].[table_hmmannotationagainsttigrfam_tigrfamannotation6_fragil_mitochondria]","id":"253249"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:27 PM","query":"select * from [blueplacer].[table_normalized_pfam_counts_main_genomes]","id":"253302"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:28 PM","query":"select * from [blueplacer].[table_pfamannotation_coastal]","id":"253346"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:29 PM","query":"select * from [blueplacer].[table_pfamannotation_dcm]","id":"253395"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:30 PM","query":"select * from [blueplacer].[table_pfamannotation_upwelling]","id":"253442"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:31 PM","query":"select * from [blueplacer].[table_phatr2_bd_unmapped_domaininfo_filteredmodels1]","id":"253497"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:32 PM","query":"select * from [blueplacer].[table_phatr2_bd_unmapped_ecpathwayinfo_filteredmodels1]","id":"253540"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:34 PM","query":"select * from [blueplacer].[table_phatr2_bd_unmapped_goinfo_filteredmodels1]","id":"253592"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:36 PM","query":"select * from [blueplacer].[table_phatr2_chromosomes_ecpathwayinfo_filteredmodels2]","id":"253632"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:37 PM","query":"select * from [blueplacer].[table_phatr2_chromosomes_goinfo_filteredmodels2]","id":"253683"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:38 PM","query":"select * from [blueplacer].[table_phatr2_chromosomes_koginfo_filteredmodels3]","id":"253724"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:39 PM","query":"select * from [blueplacer].[table_rank_of_hits_to_each_gene_mbari_coastal_allsize_gopf]","id":"253769"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:40 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation1_phaeo_genome]","id":"253816"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:41 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation1_pn_maingenome]","id":"253859"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:42 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation11_thaps_chloroplast]","id":"253901"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:44 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation12_fragil_mitochondria]","id":"253950"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:49 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation12_phaeo_chloroplast]","id":"253997"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:50 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation18_thapsests]","id":"254044"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:51 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation23_fragil_maingenome]","id":"254090"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:52 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation26_pn_chloroplast]","id":"254133"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:53 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation29_thaps_mitochondria]","id":"254183"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:54 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation34_pn_ests]","id":"254226"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:55 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation37_pn_mitochondria]","id":"254282"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:56 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation4_phaeo_mitochondria]","id":"254330"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:57 PM","query":"select * from [blueplacer].[table_rps_blastagainstcog_cogannotation8_thaps_maingenome]","id":"254375"},{"owner":"blueplacer","date":"3\/1\/2011 10:11:59 PM","query":"select * from [blueplacer].[table_test_table]","id":"254424"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:00 PM","query":"select * from [blueplacer].[table_test_upload1_txt]","id":"254472"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:00 PM","query":"select * from [blueplacer].[table_test_upload1_x]","id":"254513"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:01 PM","query":"select * from [blueplacer].[table_thaps3_bd_unmapped_ecpathwayinfo_filteredmodels1]","id":"254560"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:03 PM","query":"select * from [blueplacer].[table_thaps3_bd_unmapped_goinfo_filteredmodels1]","id":"254602"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:04 PM","query":"select * from [blueplacer].[table_thaps3_bd_unmapped_koginfo_filteredmodels1]","id":"254653"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:05 PM","query":"select * from [blueplacer].[table_thaps3_chromosomes_domaininfo_filteredmodels2]","id":"254697"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:05 PM","query":"select * from [blueplacer].[table_thaps3_chromosomes_ecpathwayinfo_filteredmodels2]","id":"254740"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:06 PM","query":"select * from [blueplacer].[table_tigrfam_surface_count]","id":"254790"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:07 PM","query":"select * from [blueplacer].[table_tigrfamannotation_dcm]","id":"254827"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:08 PM","query":"select * from [blueplacer].[table_tigrfamannotation_upwelling]","id":"254876"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:09 PM","query":"select * from [blueplacer].[table_uniprot_noiea]","id":"254926"},{"owner":"blueplacer","date":"3\/1\/2011 10:12:10 PM","query":"select * from [blueplacer].[table_view_hit_count_test]","id":"254972"},{"owner":"blueplacer","date":"5\/27\/2011 8:00:47 PM","query":"select * from annotationsummary_combinedorfannotation1_fragil_maingenome","id":"250428"},{"owner":"blueplacer","date":"5\/27\/2011 8:47:43 PM","query":"select hit.hit, count(distinct pn.#query) as pn_count, count(distinct thaps.#query) as thaps_count from hmmannotationagainstpfam_pfamannotation12_pn_maingenome hit, hmmannotationagainstpfam_pfamannotation12_pn_maingenome pn, hmmannotationagainstpfam_pfamannotation20_thaps_maingenome thaps where hit.hit = pn.hit  and hit.hit = thaps.hit group by hit.hit","id":"250476"},{"owner":"blueplacer","date":"5\/27\/2011 8:47:43 PM","query":"with rownums as ( select top 10000000000 row_number() over (partition by pkog.kogid order by pkog.kogclass, pkog.proteinid) as rowid,       pkog.kogid,       pkog.kogdefline,       pkog.kogclass,       pkog.koggroup,       count(pkog.proteinid) over (partition by pkog.kogid) as pcount,       pkog.transcriptid as phatr_transcriptid,       pkog.proteinid as phatr_proteinid,       tkog.transcriptid as thaps_transcriptid,       tkog.proteinid as thaps_proteinid  from phatr2_bd_unmapped_koginfo_filteredmodels1 pkog,       thaps3_chromosomes_koginfo_filteredmodels2 tkog  where pkog.kogid = tkog.kogid order by pkog.kogclass, pkog.proteinid ) select       case when rowid = 1            then kogid        end as kogid,       case when rowid = 1            then kogdefline        end as kogdefline,       case when rowid = 1            then kogclass        end as kogclass,       case when rowid = 1           then koggroup        end as koggroup,       case when rowid = 1           then phatr_transcriptid        end as phatr_transcriptid,       case when rowid = 1            then phatr_proteinid         end as phatr_proteinid,       case when rowid = 1            then pcount         end as count,       thaps_transcriptid,       thaps_proteinid from rownums","id":"250526"},{"owner":"blueplacer","date":"5\/27\/2011 8:47:44 PM","query":"with rownums as ( select top 10000000000 row_number() over (partition by pkog.kogid order by pkog.kogclass, pkog.proteinid) as rowid,       pkog.kogid,       pkog.kogdefline,       pkog.kogclass,       pkog.koggroup,       count(pkog.proteinid) over (partition by pkog.kogid) as pcount,       pkog.transcriptid as phatr_transcriptid,       pkog.proteinid as phatr_proteinid,       tkog.transcriptid as thaps_transcriptid,       tkog.proteinid as thaps_proteinid  from phatr2_bd_unmapped_koginfo_filteredmodels1 pkog,       thaps3_chromosomes_koginfo_filteredmodels2 tkog  where pkog.kogid = tkog.kogid order by pkog.kogclass, pkog.proteinid ) select       case when rowid = 1            then kogid        end as kogid,       case when rowid = 1            then kogdefline        end as kogdefline,       case when rowid = 1            then kogclass        end as kogclass,       case when rowid = 1           then koggroup        end as koggroup,       case when rowid = 1           then phatr_transcriptid        end as phatr_transcriptid,       case when rowid = 1            then phatr_proteinid         end as phatr_proteinid,       case when rowid = 1            then pcount         end as count,       thaps_transcriptid,       thaps_proteinid from rownums","id":"250580"}];
