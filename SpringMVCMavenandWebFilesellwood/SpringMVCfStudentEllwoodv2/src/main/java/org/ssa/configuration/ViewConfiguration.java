package org.ssa.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class ViewConfiguration {
	  @Bean
	    public ViewResolver getViewResolver() {
	        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
	        resolver.setPrefix("/WEB-INF/");
	        resolver.setSuffix(".html");
	        return resolver;
	    }
	//     @Bean
	// public SpringTemplateEngine getTemplateEngine() {
	// 	SpringTemplateEngine templateEngine = new SpringTemplateEngine();
	// 	templateEngine.setTemplateResolver(getTemplateResolver());
	// 	return templateEngine;
	// }

	// @Bean
	// public ThymeleafViewResolver getViewResolver() {
	// 	ThymeleafViewResolver resolver = new ThymeleafViewResolver();
	// 	resolver.setTemplateEngine(getTemplateEngine());
	// 	return resolver;
	// }
	//     @Bean
	// public SpringResourceTemplateResolver getTemplateResolver() {

	// 	SpringResourceTemplateResolver templateResolver = new SpringResourceTemplateResolver();

	// 	templateResolver.setPrefix("/WEB-INF/View/");
	// 	templateResolver.setSuffix(".html");
	// 	templateResolver.setTemplateMode("HTML5");
	// 	templateResolver.setCacheable(false);
	// 	return templateResolver;
	// }

}
